"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { BRANCHES, IMG, SERVICES_DD } from "../data/siteData";
import { Img, Pill, Reveal } from "./common";
import {
  bookingValidationSchema,
  buildLeadPayload,
  submitToGoogleSheet,
} from "../utils/formSubmission";

export default function BookingSection() {
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
    validationSchema: bookingValidationSchema,
    onSubmit: async (values, helpers) => {
      helpers.setStatus(null);
      try {
        await submitToGoogleSheet(buildLeadPayload(values, "appointment_form"));
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
    <section className="section" id="book">
      <div className="contact">
        <Reveal>
          <Pill>Appointments</Pill>
          <h2>Book an appointment</h2>
          <p className="sec-note mt-14">
            Please fill in your details. Our team will call you back shortly.
          </p>
          <ul className="contact-list">
            <li>
              <i>P</i> +91 77083 18222
            </li>
            <li>
              <i>M</i> Madurai - Southwing Madurai - Dindigul - Thanjavur
            </li>
            <li>
              <i>24</i> Emergency, NICU &amp; PICU - 24/7
            </li>
          </ul>
          <Img
            src={IMG.advancedNICU25}
            alt="Advanced NICU care at Rio"
            grad={2}
            className="contact-img"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="form-card">
            <h3>Request a call back</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-row">
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
              </div>
              <div className="form-row">
                <label>
                  <select {...formik.getFieldProps("branch")}>
                    <option value="" disabled>
                      Location / branch preference
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
              </div>
              <div className="form-row form-row-full">
                <label>
                  <select {...formik.getFieldProps("concern")}>
                    <option value="" disabled>
                      Concern is for...
                    </option>
                    <option value="Child">Child</option>
                    <option value="Mother">Mother</option>
                    <option value="Newborn">Newborn</option>
                  </select>
                  {getError("concern")}
                </label>
              </div>
              <label className="lbl-full">
                <textarea
                  placeholder="Message (optional)"
                  rows={3}
                  {...formik.getFieldProps("message")}
                />
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
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
