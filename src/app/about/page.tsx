import type { Metadata } from "next";
import Link from "next/link";
import TeamCarousel, { type TeamMember } from "@/components/TeamCarousel";

export const metadata: Metadata = {
  title: "About",
  description:
    "A Victoria, BC firm building geospatial systems, LiDAR solutions, and NG9-1-1 software for local governments across British Columbia. Meet the team.",
};

// Social links are data-driven: add { type, href, label } entries (linkedin,
// github, twitter, website, mail) per member and they render automatically.
const team: TeamMember[] = [
  {
    name: "John Soliman",
    role: "Founder · GIS Software Developer",
    bio: "Leads end-to-end GIS and software delivery, from NENA-aligned ETL pipelines to the web apps that run them.",
    image: "/team/john-soliman.jpeg",
    imageAlt: "Headshot of John Soliman, Founder of Camber & Core Systems.",
    socials: [{ type: "mail", href: "/contact", label: "Contact John Soliman" }],
  },
  {
    name: "David Emelu",
    role: "GIS Analyst · COO / CFO",
    bio: "Focuses on geospatial data assessment, transformation, and quality assurance for NG9-1-1 and municipal datasets.",
    image: "/team/david-emelu.png",
    imageAlt: "Headshot of David Emelu, GIS Analyst at Camber & Core Systems.",
    socials: [{ type: "mail", href: "/contact", label: "Contact David Emelu" }],
  },
  {
    name: "Shuyi Yu",
    role: "GIS Software Developer",
    bio: "Builds and automates Esri-stack workflows: Python ETL, validation rules, and reliable spatial-data pipelines.",
    image: "/team/shuyi-yu.png",
    imageAlt: "Headshot of Shuyi Yu, GIS Software Developer at Camber & Core Systems.",
    socials: [{ type: "mail", href: "/contact", label: "Contact Shuyi Yu" }],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Who we are</span>
          <h1>About Camber &amp; Core</h1>
          <hr className="gold-rule" />
          <p>
            A Victoria, BC firm building geospatial systems, LiDAR solutions,
            and NG9-1-1 software for local governments across British Columbia.
          </p>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container">
          <p>
            We sit at the intersection of geospatial expertise and modern
            software engineering: accurate enough for government procurement,
            modern enough to move fast. We partner with municipalities and
            regional districts to modernize the data infrastructure communities
            rely on, then leave behind the tooling and documentation that lets
            their teams sustain it in-house.
          </p>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2 className="section-title">Our team</h2>
            <hr className="gold-rule gold-rule--center" />
            <p>
              A small, senior team of engineers and GIS specialists. Hover a
              card to meet them.
            </p>
          </div>

          <TeamCarousel members={team} />
        </div>
      </section>

      <section className="cta-band section-tight">
        <div className="container">
          <h2>Let&apos;s work together</h2>
          <p>
            Ready to explore how Camber &amp; Core Systems can support your
            geospatial initiatives?
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
