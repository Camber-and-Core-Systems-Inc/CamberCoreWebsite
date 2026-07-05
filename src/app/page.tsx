import type { Metadata } from "next";
import Link from "next/link";
import FeaturedProjectsCarousel, {
  type FeaturedProject,
} from "@/components/FeaturedProjectsCarousel";

export const metadata: Metadata = {
  title: { absolute: "Home - Camber & Core Systems" },
};

export default function HomePage() {
  const services = [
    {
      title: "LiDAR & Remote Sensing",
      description:
        "Processing, classification, terrain models, and derivative products for engineering-grade decisions.",
    },
    {
      title: "GIS & Spatial Analysis",
      description:
        "Spatial analysis, data modeling, and practical GIS workflows for planning and operations teams.",
    },
    {
      title: "NG9-1-1 Readiness",
      description:
        "Addressing, road centerline, and schema validation work aligned to NENA expectations.",
    },
    {
      title: "Custom Software",
      description:
        "Purpose-built web applications, data tools, and internal systems for public-sector teams.",
    },
    {
      title: "Data Automation",
      description:
        "Repeatable pipelines that reduce manual GIS effort while improving consistency and auditability.",
    },
    {
      title: "Compliance & QA",
      description:
        "Clear validation reports, remediation guidance, and quality controls for operational data.",
    },
  ];

  // Homepage spotlights a few projects in the carousel; the full set lives on
  // /projects. Each href points to an existing anchor on that page.
  const featuredProjects: FeaturedProject[] = [
    {
      slug: "ng911-csrd",
      client: "Columbia Shuswap Regional District",
      title: "NG9-1-1 Addressing Aggregation & Automation System",
      description:
        "A master NG9-1-1 addressing database that unifies multi-jurisdictional data into a standardized, NENA-aligned SSAP environment with automated ETL and QA/QC.",
      tags: ["NG9-1-1", "Addressing", "GIS Automation", "ETL", "QA/QC"],
      meta: [
        { label: "Service area", value: "Columbia Shuswap RD" },
        { label: "Deliverable", value: "SSAP master database" },
        { label: "System type", value: "NENA-aligned ETL" },
      ],
      image: "/projects/csrd-hub.png",
      imageAlt:
        "CSRD NG9-1-1 Central Database System operations and documentation hub with quick actions and municipal guides.",
      href: "/projects#ng911-csrd",
    },
    {
      slug: "lidar-dem",
      client: "District of North Saanich",
      title: "LiDAR Data Processing & DEM Generation",
      description:
        "Full-pipeline LiDAR processing and classification, producing a high-resolution Digital Elevation Model validated against known control points.",
      tags: ["LiDAR", "DEM Generation", "Point Cloud Processing", "GIS Validation"],
      meta: [
        { label: "Service area", value: "District of North Saanich" },
        { label: "Deliverable", value: "High-resolution DEM" },
        { label: "System type", value: "LiDAR pipeline" },
      ],
      image: "/projects/lidar-dem.png",
      imageAlt:
        "3D LiDAR-derived terrain model of North Saanich showing classified ground, vegetation, and a road corridor.",
      href: "/projects#lidar-dem",
    },
    {
      slug: "steep-slope",
      client: "District of North Saanich",
      title: "Steep Slope Map Production",
      description:
        "Slope and aspect analysis built on the LiDAR-derived DEM, classified into risk categories and delivered as publication-quality steep-slope maps for land-use planning.",
      tags: ["Slope Analysis", "Cartography", "Risk Classification", "GIS"],
      meta: [
        { label: "Service area", value: "District of North Saanich" },
        { label: "Deliverable", value: "Steep-slope map series" },
        { label: "System type", value: "GIS / cartography" },
      ],
      image: "/projects/steep-slope.png",
      imageAlt:
        "Steep slope map of the Saanich Peninsula highlighting slopes over 30 percent in gold over the road network.",
      href: "/projects#steep-slope",
    },
  ];

  const stats = [
    { value: "4+", label: "Government Clients" },
    { value: "75+", label: "Hours Saved per Project" },
    { value: "99%", label: "Data Accuracy" },
    { value: "6+", label: "Active Projects" },
  ];

  const features = [
    "Schema Guard",
    "AI Field Deriver",
    "Versioned Fix-Proposals",
    "Dashboards & Audit Logs",
  ];

  const clients = [
    {
      name: "District of North Saanich",
      src: "/logos/north-saanich.png",
      width: 300,
      height: 107,
      displayHeight: 66,
    },
    {
      name: "Columbia Shuswap Regional District",
      src: "/logos/csrd.png",
      width: 1282,
      height: 776,
      displayHeight: 92,
    },
    {
      name: "URBAN Systems",
      src: "/logos/urban-systems.jpg",
      width: 464,
      height: 464,
      displayHeight: 132,
    },
  ];

  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <span className="eyebrow">Secure Local Intelligence</span>
            <h1>
              Engineering <span>precision</span> for public service.
            </h1>
            <p>
              We build the geospatial systems, LiDAR solutions, and custom software
              that BC local governments depend on for smarter decisions and safer
              communities.
            </p>
            <div className="home-hero__rule" />
            <div className="home-hero__actions">
              <Link
                href="/projects"
                className="button button-primary button--cta"
              >
                Explore our work
                <span className="button__icon" aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="button button-secondary button--cta"
              >
                Get in touch
                <span className="button__icon" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container">
          <span className="eyebrow">Trusted by</span>
          <div className="trust-bar__logos">
            {clients.map((client) => (
              <img
                key={client.name}
                className="trust-logo"
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                style={{ height: client.displayHeight }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band section">
        <div className="container">
          <span className="eyebrow">By the numbers</span>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-block" key={stat.label}>
                <p>{stat.value}</p>
                <div />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-overview section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Services</span>
            <h2 className="section-title">What we do</h2>
            <hr className="gold-rule" />
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="card service-card" key={service.title}>
                <div className="service-card__content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href="/services" className="text-link">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="featured-project section"
        aria-labelledby="featured-projects-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our work</span>
            <h2 className="section-title" id="featured-projects-heading">
              Featured projects
            </h2>
            <hr className="gold-rule" />
          </div>

          <FeaturedProjectsCarousel projects={featuredProjects} />

          <div className="projects-cta">
            <Link href="/projects" className="text-link">
              View all projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="product-spotlight section">
        <div className="container product-spotlight__grid">
          <div className="product-spotlight__copy">
            <span className="eyebrow">Our product</span>
            <h2>NG911 AutoConform</h2>
            <hr className="gold-rule" />
            <p>
              Automated compliance validation and data standardization for next-generation 911 systems. 
              Streamline your addressing infrastructure with intelligent schema guards and AI-driven field derivation.
            </p>
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link
              href="/products"
              className="button button-inverse button--cta"
            >
              Request a demo
              <span className="button__icon" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="product-spotlight__visual">
            <div className="app-window" aria-label="NG911 AutoConform validation output">
              <div className="app-window__bar">
                <span className="app-window__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="app-window__title">ng911 · validate</span>
              </div>
              <pre className="app-window__body">{`$ ng911 validate addressing.geojson
Scanning 2,847 records...

✓ Schema validation: PASSED
✓ Address format: COMPLIANT
✓ Spatial integrity: VERIFIED

Result: 2,847 / 2,847 records conformant
Report: ng911_conformance_2026.pdf`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="about-teaser section-tight">
        <div className="container">
          <div className="about-teaser__grid">
            <div>
              <span className="eyebrow">Who we are</span>
              <h2>Smarter decisions. Safer communities.</h2>
            </div>
            <div>
              <p>
                Camber &amp; Core Systems is a Victoria, BC engineering firm
                focused on geospatial systems, LiDAR solutions, NG9-1-1 compliance
                software, and custom GIS tooling.
              </p>
              <p>
                Founded in 2024, the company brings UVic Engineering roots and a
                practical public-sector mindset to work that must be accurate,
                defensible, and maintainable.
              </p>
              <p>
                We partner with local governments and regional districts across
                British Columbia to modernize the data infrastructure communities
                rely on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band section-tight">
        <div className="container">
          <h2>Ready to modernize your geospatial operations?</h2>
          <p>
            Bring your GIS, LiDAR, and emergency-service data into a clearer,
            more reliable operating model.
          </p>
          <Link href="/contact" className="button button-primary button--cta">
            Start a conversation
            <span className="button__icon" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
