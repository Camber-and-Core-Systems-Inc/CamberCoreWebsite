import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "NG911 AutoConform by Camber & Core Systems: automated NG9-1-1 data compliance that turns raw GDB files into production-ready, NENA-standard datasets.",
};

const features = [
  {
    title: "Schema Guard",
    description:
      "Continuous layer comparison with auto-correction that keeps every edit NENA-conformant.",
  },
  {
    title: "AI Field Deriver",
    description:
      "LLM-powered inference fills missing attributes and flags low-confidence values for review.",
  },
  {
    title: "Versioned Fix-Proposals",
    description:
      "Edits are staged to ArcGIS Enterprise or PostGIS for human approval before they go live.",
  },
  {
    title: "Dashboards & Audit Logs",
    description:
      "PDF and Power BI reports give you full, defensible compliance documentation.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our products</span>
          <h1>Products</h1>
          <hr className="gold-rule" />
          <p>
            Tools designed to automate, validate, and streamline the geospatial
            workflows that government and enterprise organizations depend on.
          </p>
        </div>
      </section>

      <section className="section product-detail">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Flagship product</span>
            <h2 className="section-title">NG911 AutoConform</h2>
            <hr className="gold-rule" />
            <p className="product-detail__lede">
              Automate NG9-1-1 data compliance and turn raw GDB files into
              production-ready, NENA-standard datasets. NG911 AutoConform
              eliminates manual validation overhead, reduces errors, and ensures
              your addressing data meets the strictest compliance standards.
            </p>
          </div>

          <div className="product-feature-grid">
            {features.map((feature) => (
              <article className="card product-feature" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="product-terminal">
            <h3 className="product-terminal__heading">In action</h3>
            <div className="app-window" aria-label="NG911 AutoConform run output">
              <div className="app-window__bar">
                <span className="app-window__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="app-window__title">ng911-autoconform.py</span>
              </div>
              <pre className="app-window__body">{`$ python ng911_autoconform.py --input raw_addressing.gdb
Loading raw GDB dataset...
Running schema validation...
✓ 98.7% schema compliance

Deriving missing NENA attributes...
✓ 47 missing attributes inferred

Creating fix proposals...
✓ Proposals ready for review
✓ Audit log generated

Report: ng911_autoconform_report_2026.pdf`}</pre>
            </div>
          </div>

          <div className="product-detail__cta">
            <Link href="/contact" className="button button-primary button--cta">
              Request a demo
              <span className="button__icon" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight product-comingsoon">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Roadmap</span>
            <h2 className="section-title">More products coming soon</h2>
            <hr className="gold-rule gold-rule--center" />
            <p>
              We are building additional tools for geospatial automation, data
              validation, and enterprise GIS workflows. Stay tuned for
              announcements.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band section-tight">
        <div className="container">
          <h2>Ready to transform your data workflows?</h2>
          <p>
            Let&apos;s explore how NG911 AutoConform or our custom solutions can
            unlock efficiency and compliance across your organization.
          </p>
          <Link href="/contact" className="button button-primary button--cta">
            Get started
            <span className="button__icon" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
