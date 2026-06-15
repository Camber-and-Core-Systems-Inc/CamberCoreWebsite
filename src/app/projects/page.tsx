import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real-world geospatial work delivered to BC local governments: LiDAR processing, steep-slope mapping, and NG9-1-1 addressing systems aligned to NENA standards.",
};

interface Project {
  slug: string;
  client: string;
  title: string;
  term?: string;
  description: string[];
  outcomes: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  // Optional cascading screenshot collage shown in place of the single image.
  gallery?: { src: string; alt: string }[];
  galleryKicker?: string;
}

const projects: Project[] = [
  {
    slug: "lidar-dem",
    client: "District of North Saanich",
    title: "LiDAR Data Processing & DEM Generation",
    description: [
      "The District required comprehensive processing of raw LiDAR sourced from government agencies to support terrain analysis and infrastructure planning. We ran the full pipeline (quality assurance for completeness and resolution, advanced noise filtering, and precise classification of ground and non-ground points), and from that enhanced data generated a high-resolution Digital Elevation Model.",
      "Every step was documented, and the final model was rigorously validated against known control points and reference datasets to guarantee government-grade accuracy.",
    ],
    outcomes: [
      "Highly accurate, validated Digital Elevation Model",
      "Foundation for detailed terrain analysis",
      "Infrastructure planning datasets",
      "Informed environmental management decisions",
    ],
    tags: ["LiDAR", "DEM / DSM", "Data Processing", "QA/QC"],
    image: "/projects/lidar-dem.png",
    imageAlt:
      "3D LiDAR-derived terrain model of North Saanich showing classified ground, vegetation, and a road corridor.",
  },
  {
    slug: "steep-slope",
    client: "District of North Saanich",
    title: "Steep Slope Map Production",
    description: [
      "Building on the generated DEM, the District needed detailed slope analysis and risk classification for land-use planning and hazard assessment. Slope gradients were computed using advanced GIS algorithms and classified into distinct categories (moderate, steep, and very steep) to surface areas of potential concern across the district.",
      "That analysis was translated into detailed steep-slope maps produced to high cartographic standards and delivered in the formats planning teams actually use day to day.",
    ],
    outcomes: [
      "Slope classification for risk assessment",
      "PDF, GeoTIFF, and Shapefile outputs",
      "Integrated into land-use planning",
      "Supports development constraint documentation",
    ],
    tags: ["Slope Analysis", "Cartography", "Risk Classification", "GIS"],
    image: "/projects/steep-slope.png",
    imageAlt:
      "Steep slope map of the Saanich Peninsula highlighting slopes over 30 percent in gold over the road network.",
  },
  {
    slug: "ng911-csrd",
    client: "Columbia Shuswap Regional District",
    title: "NG9-1-1 Addressing Aggregation & Automation System",
    term: "December 2025 – May 2026",
    description: [
      "In partnership with Urban Systems Ltd., the CSRD engaged Camber & Core to build a master NG9-1-1 addressing database for the regional district and its member municipalities. We executed all data engineering, transformation, ETL development, and QA/QC automation, conforming the data to NENA standards and preparing it for provincial aggregator submission.",
      "A gap analysis assessed each municipality against the NENA data model; legacy attributes were mapped to the full NENA field set with NGUIDs as the authoritative identifier; and automated attribute rules now enforce compliance at the data layer, blocking non-compliant edits. A central, version-controlled NG911 Hub with scheduled automations and dashboards was delivered to run the system.",
    ],
    outcomes: [
      "Standards-aligned master SSAP dataset",
      "Automated ETL and QA/QC pipelines",
      "Per-municipality web editing applications",
      "Aggregator-ready, maintainable in-house",
    ],
    tags: ["NG9-1-1", "Multi-Municipal", "SSAP", "ETL Automation", "NENA"],
    image: "/projects/csrd-hub.png",
    imageAlt:
      "CSRD NG9-1-1 Central Database System operations and documentation hub with quick actions and municipal guides.",
    galleryKicker: "Delivered system · CSRD NG9-1-1 Central Hub",
    gallery: [
      {
        src: "/projects/csrd-hub.png",
        alt: "CSRD NG9-1-1 Central Database System documentation and operations hub.",
      },
      {
        src: "/projects/csrd-editor.png",
        alt: "Per-municipality web address editor with map and attribute table.",
      },
      {
        src: "/projects/csrd-rules.png",
        alt: "Server-side attribute rules enforcing NENA conformance on every edit.",
      },
    ],
  },
  {
    slug: "ng911-north-saanich",
    client: "District of North Saanich",
    title: "NG9-1-1 Readiness & Addressing Operations Modernization",
    term: "July 2025 – August 2025",
    description: [
      "The District engaged Camber & Core to prepare core geospatial datasets and workflows for NG9-1-1. The work emphasized a scalable path from everyday edits to delivery-ready data, with clear governance, quality controls, and minimal disruption to staff operations.",
      "We assessed the existing Road Centerline and Site/Structure Address Point datasets against NG9-1-1 requirements, mapped legacy attributes to an aligned schema with stable NGUIDs, and built a layered QA/QC framework. An Addressing Maintenance application was delivered on the ArcGIS stack to streamline edits, guide users with inline rules, and preserve a full, auditable edit history.",
    ],
    outcomes: [
      "NENA-aligned Road Centerline & SSAP data",
      "Automated conformance validation",
      "Purpose-built Address Manager application",
      "Repeatable, auditable update process",
    ],
    tags: ["NG9-1-1", "NENA", "Web Application", "Validation", "Compliance"],
    image: "/projects/dns-address-manager.png",
    imageAlt:
      "District of North Saanich Address Manager application showing inline validation rules beside aerial imagery and address points.",
    galleryKicker: "Delivered system · North Saanich Addressing",
    gallery: [
      {
        src: "/projects/dns-address-manager.png",
        alt: "District of North Saanich Address Manager application with inline validation rules over aerial imagery.",
      },
      {
        src: "/projects/dns-conformance.jpg",
        alt: "NG9-1-1 conformance validation showing 100% mandatory, conditional, and optional attribute pass rates.",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our work</span>
          <h1>Projects</h1>
          <hr className="gold-rule" />
          <p>
            Real-world geospatial solutions delivered to local governments
            across British Columbia. Each engagement reflects our commitment to
            accuracy, NENA compliance, and measurable, maintainable impact.
          </p>
        </div>
      </section>

      <section className="section project-list">
        <div className="container">
          {projects.map((project, index) => (
            <article
              className={
                index % 2 === 1
                  ? "project-feature project-feature--reverse"
                  : "project-feature"
              }
              id={project.slug}
              key={project.slug}
            >
              {project.gallery ? (
                <div className="project-feature__stack">
                  {project.galleryKicker && (
                    <span className="project-feature__stack-kicker">
                      {project.galleryKicker}
                    </span>
                  )}
                  <div
                    className={
                      project.gallery.length === 2
                        ? "project-stack project-stack--2"
                        : "project-stack"
                    }
                  >
                    {project.gallery.map((shot) => (
                      <img
                        key={shot.src}
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="project-feature__media">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
              )}

              <div className="project-feature__body">
                <span className="eyebrow-mono">Client · {project.client}</span>
                <h2>{project.title}</h2>
                {project.term && (
                  <p className="project-feature__term">{project.term}</p>
                )}
                {project.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                <div className="project-feature__outcomes">
                  <span className="project-feature__outcomes-label">
                    Outcomes &amp; impact
                  </span>
                  <ul>
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band section-tight">
        <div className="container">
          <h2>Let&apos;s discuss your project</h2>
          <p>
            Whether you need LiDAR processing, NG9-1-1 readiness, or custom GIS
            solutions, we&apos;re ready to help.
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
