"use client";

import { useRef, useState } from "react";

const CONTACT_EMAIL = "john@camberandcore.ca";

const serviceOptions = [
  "LiDAR & Remote Sensing",
  "GIS & Spatial Analysis",
  "NG9-1-1 Readiness",
  "Custom Software",
  "Other",
];

const initialForm = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Static site (no server): compose an email in the visitor's mail client.
    const subject = `Project inquiry — ${
      formData.organization || formData.fullName
    }`;
    const body = [
      `Name: ${formData.fullName}`,
      `Organization: ${formData.organization}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "—"}`,
      `Service interest: ${formData.serviceInterest || "—"}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    // Move focus to the confirmation so screen-reader and keyboard users hear it.
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact us</h1>
          <hr className="gold-rule" />
          <p>
            Tell us about your geospatial project and we will show you how we
            can help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-form-wrap">
            <h2>Send us a message</h2>

            {submitted && (
              <div
                className="form-success"
                role="status"
                aria-live="polite"
                tabIndex={-1}
                ref={statusRef}
              >
                <p>Your email app should have opened with your message ready.</p>
                <p>
                  If it didn&apos;t, email us directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="fullName">
                  Full name<span className="req" aria-hidden="true">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-field">
                <label htmlFor="organization">
                  Organization<span className="req" aria-hidden="true">*</span>
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  placeholder="Your municipality"
                />
              </div>

              <div className="form-grid-2">
                <div className="form-field">
                  <label htmlFor="email">
                    Email address<span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(250) 555-0123"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="serviceInterest">
                  Service interest<span className="req" aria-hidden="true">*</span>
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  Message<span className="req" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              <p className="form-note">
                Fields marked <span aria-hidden="true">*</span> are required.
              </p>

              <button
                type="submit"
                className="button button-primary button--cta contact-form__submit"
              >
                Send message
                <span className="button__icon" aria-hidden="true">→</span>
              </button>
            </form>
          </div>

          <aside className="contact-aside">
            <h2>Other ways to connect</h2>

            <ul>
              <li className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <span>Email</span>
                  <a href="mailto:john@camberandcore.ca">john@camberandcore.ca</a>
                </div>
              </li>

              <li className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <span>Phone</span>
                  <a href="tel:+12502798735">250-279-8735</a>
                </div>
              </li>

              <li className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <span>Address</span>
                  <p>
                  1895 Rye Pl
                    <br />
                    Saanichton, BC V8M 1L2
                    <br />
                    Canada
                  </p>
                </div>
              </li>
            </ul>

            <p className="contact-aside__note">
              We typically respond to inquiries within 24 business hours.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
