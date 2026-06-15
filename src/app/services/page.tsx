import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Geospatial, LiDAR, and GIS services for government agencies across British Columbia: LiDAR processing, DEM generation, slope analysis, cartography, ArcGIS, and custom software.",
};

const services = [
  {
    title: "LiDAR Data Acquisition & Processing",
    description:
      "We capture high-precision LiDAR point cloud data and process it with rigorous quality assurance. Our workflow includes comprehensive noise filtering, automated ground / non-ground classification, and multi-stage QA validation to meet the accuracy standards demanding government applications require.",
    capabilities: [
      "Raw point cloud collection & aggregation",
      "Automated noise filtering & outlier removal",
      "Ground / non-ground classification",
      "Quality assurance & accuracy validation",
    ],
  },
  {
    title: "Digital Elevation Model Generation",
    description:
      "Transform LiDAR and photogrammetry data into precise digital elevation models (DEMs) and digital surface models (DSMs). We perform advanced terrain analysis, validate accuracy against ground-truth surveys, and deliver production-ready models for infrastructure planning and environmental assessment.",
    capabilities: [
      "DEM / DSM generation from LiDAR & photogrammetry",
      "Terrain analysis & feature extraction",
      "Accuracy validation & benchmarking",
      "Multi-resolution model generation",
    ],
  },
  {
    title: "Slope & Aspect Analysis",
    description:
      "Compute precise gradient and orientation metrics from elevation data for hazard assessment and planning. Our slope classification system categorizes terrain by steepness, enabling risk identification for landslides, avalanches, and development constraints critical to public safety planning.",
    capabilities: [
      "Slope & aspect gradient computation",
      "Hazard risk classification",
      "Landslide susceptibility mapping",
      "Environmental impact assessment",
    ],
  },
  {
    title: "Advanced Map Production & Cartography",
    description:
      "Produce publication-quality maps and cartographic outputs in multiple formats. From print-ready PDFs to georeferenced GeoTIFFs and shapefiles, we ensure consistency, accuracy, and compliance with government mapping standards for distribution and long-term archival.",
    capabilities: [
      "Print & digital map design",
      "GeoTIFF & Shapefile generation",
      "PDF & format conversion",
      "Government standard compliance",
    ],
  },
  {
    title: "ArcGIS Pro & Enterprise Services",
    description:
      "Optimize and extend your ArcGIS infrastructure with expert consulting. We provide workflow optimization, enterprise deployment support, and ArcGIS Online integration to maximize the value of your geospatial platform and automate critical processes.",
    capabilities: [
      "ArcGIS Pro workflow optimization",
      "ArcGIS Enterprise deployment & support",
      "ArcGIS Online integration & licensing",
      "Automation & scripting services",
    ],
  },
  {
    title: "Custom GIS Software Development",
    description:
      "Build intelligent, scalable geospatial applications tailored to your needs. From Python and JavaScript automation tools to REST APIs and enterprise integrations, we engineer solutions that streamline workflows and reduce manual effort across your organization.",
    capabilities: [
      "Python / JavaScript GIS automation",
      "Web application development",
      "REST API & microservices",
      "Enterprise system integration",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">What we do</span>
          <h1>Services</h1>
          <hr className="gold-rule" />
          <p>
            Comprehensive geospatial, LiDAR, and GIS solutions engineered for
            government agencies and public-sector organizations across British
            Columbia and beyond.
          </p>
        </div>
      </section>

      <section className="section services-detail">
        <div className="container">
          <div className="services-detail__grid">
            {services.map((service, index) => (
              <article className="card service-detail" key={service.title}>
                <span className="service-detail__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="capability-list">
                  {service.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band section-tight">
        <div className="container">
          <h2>Have a project in mind?</h2>
          <p>
            Let&apos;s discuss how our geospatial expertise can solve your
            organization&apos;s challenges.
          </p>
          <Link href="/contact" className="button button-primary button--cta">
            Get in touch
            <span className="button__icon" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
