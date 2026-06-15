"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { BRANCHES, LINKS, SERVICES_DD } from "../data/siteData";
import {
  buildLeadPayload,
  leadValidationSchema,
  submitToGoogleSheet,
} from "../utils/formSubmission";

export default function HeroForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      branch: "",
      service: "",
      concern: "",
      message: "",
    },
    validationSchema: leadValidationSchema,
    onSubmit: async (values, helpers) => {
      helpers.setStatus(null);
      try {
        await submitToGoogleSheet(buildLeadPayload(values, "hero_callback_form"));
        router.push("/thank-you");
      } catch {
        helpers.setStatus("Something went wrong. Please try again.");
      } finally {
        helpers.setSubmitting(false);
      }
    },
  });

  const getError = (field) =>
    formik.touched[field] && formik.errors[field] ? (
      <small className="field-error">{formik.errors[field]}</small>
    ) : null;

  return (
    <div className="hform" id="booking">
      <div className="hform-head">
        <h3>Get a call back</h3>
        <span className="chip chip-static">
          <i className="dot" /> Team responds quickly
        </span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <label>
          <input
            placeholder="Patient / Parent name"
            {...formik.getFieldProps("name")}
          />
          {getError("name")}
        </label>
        <label>
          <input
            placeholder="Mobile number"
            type="tel"
            {...formik.getFieldProps("phone")}
          />
          {getError("phone")}
        </label>
        <label>
          <select {...formik.getFieldProps("branch")}>
            <option value="" disabled>
              Preferred branch
            </option>
            {BRANCHES.map((b) => (
              <option key={b.short} value={b.short}>
                {b.short}
              </option>
            ))}
          </select>
          {getError("branch")}
        </label>
        <label>
          <select {...formik.getFieldProps("service")}>
            <option value="" disabled>
              Service needed
            </option>
            {SERVICES_DD.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {getError("service")}
        </label>
        {formik.status && <p className="form-error">{formik.status}</p>}
        <button
          type="submit"
          className="btn btn-pink btn-full"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Submitting..." : "Request a Call Back"}{" "}
          <span className="arr">↗</span>
        </button>
        <p className="hform-note">
          For emergencies, call <a href={LINKS.phone}>+91 77083 18222</a> -
          available 24/7.
        </p>
      </form>
    </div>
  );
}
