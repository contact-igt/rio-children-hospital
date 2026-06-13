import * as Yup from "yup";

export const leadValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .matches(/^[a-zA-Z ]*$/, "Enter a valid name"),
  phone: Yup.string()
    .trim()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Enter a valid 10 digit mobile number"),
  branch: Yup.string().required("Please select a branch"),
  service: Yup.string().required("Please select a service"),
  concern: Yup.string(),
  message: Yup.string(),
});

export const bookingValidationSchema = leadValidationSchema.shape({
  concern: Yup.string().required("Please select who the concern is for"),
});

export function getUTM(key) {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

export function buildLeadPayload(values, formName) {
  const phone = values.phone || values.mobile || "";
  const branch = values.branch || "";
  const service = values.service || "";
  const concern = values.concern || "";
  const message = values.message || "";

  return {
    name: values.name || "",
    phone: phone ? `+91${phone}` : "",
    mobile: phone ? `+91${phone}` : "",
    branch,
    preferred_branch: branch,
    service,
    service_needed: service,
    concern,
    concern_for: concern,
    concern_is_for: concern,
    patient_type: concern,
    message,
    remarks: message,
    notes: message,
    query: message,
    form_name: formName,
    page_name: "rio-childrens-hospital",
    submission_status: "lead",
    submitted_at: new Date().toISOString(),
    utm_source: getUTM("utm_source"),
    utm_medium: getUTM("utm_medium"),
    utm_campaign: getUTM("utm_campaign"),
    utm_term: getUTM("utm_term"),
    utm_content: getUTM("utm_content"),
  };
}

async function getIpAddress() {
  try {
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipResponse.json();
    return ipData.ip || "";
  } catch (err) {
    console.error("Unable to fetch IP address", err);
    return "";
  }
}

export async function submitToGoogleSheet(payload, retries = 3, delay = 1500) {
  const ipAddress = payload.ip_address || (await getIpAddress());
  const payloadWithIp = {
    ...payload,
    ip_address: ipAddress,
    ip: ipAddress,
  };

  const formData = new URLSearchParams();
  Object.entries(payloadWithIp).forEach(([key, value]) => {
    formData.append(key, value ?? "");
  });

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbz2EIPwhe8aD3eLqiAcaJ1FjzHDUqe8bCG9vh1rsWGBY7CrObqOtuTuVqw76kD1jgtK-A/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      },
    );

    const text = await res.text();
    console.log("Google Sheet Response:", text);

    if (!res.ok) {
      throw new Error("Sheet responded with non-OK");
    }

    return true;
  } catch (err) {
    console.error(`Google Sheet attempt failed. Retries left: ${retries}`, err);

    if (retries <= 1) {
      throw err;
    }

    await new Promise((resolve) => setTimeout(resolve, delay));
    return submitToGoogleSheet(payload, retries - 1, delay);
  }
}
