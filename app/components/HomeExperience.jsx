"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  blogPosts,
  contact,
  downloads,
  industries,
  processSteps,
  projects,
  services,
  stats,
} from "../data";
import Icon from "./Icon";
import Image from "./LocalImage";
import {
  LeadForm,
  MaterialComparison,
  OfficialImageGallery,
  RoofColorVisualizer,
  RoofingEstimator,
} from "./ProjectTools";

export default function HomeExperience() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );
  const visibleProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-bg">
          <Image
            src="/images/official/commercial-office-project-01.jpg"
            alt="Premium commercial interior project by Roof and More"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Roof & More Studio | Indore + Dubai</p>
          <h1>Engineering Spaces. Building Possibilities.</h1>
          <p>
            Integrated architecture, structural engineering, interiors, project
            management and construction solutions shaped by experience,
            precision and thoughtful design.
          </p>
          <div className="hero-actions">
            <Link href="/book-site-visit" className="primary-link">
              Get Free Consultation
            </Link>
            <Link href="/projects">Explore Projects</Link>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="hero-stat-strip">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-band section-pad">
        <div className="section-heading">
          <p className="eyebrow">Company profile</p>
          <h2>Design intelligence, engineering precision and trusted project delivery.</h2>
          <p>
            Roof & More combines architecture, interiors, structural engineering
            and project management with a consulting team associated with BITS
            Pilani, IIT and IIM backgrounds.
          </p>
        </div>
        <div className="about-layout">
          <div className="editorial-copy">
            <p>
              The studio communicates 15+ years of experience, approximately one
              million square feet delivered, and project work across Indore,
              Madhya Pradesh and India. The redesigned site keeps disputed
              completed-project counts editable until the client confirms the
              final public number.
            </p>
            <div className="value-grid">
              {[
                "Integrated design and engineering",
                "End-to-end project management",
                "Functional and aesthetic design",
                "Vendor and procurement coordination",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <Link href="/about-us" className="text-link">
              Read Company Story
            </Link>
          </div>
          <div className="image-collage">
            <Image
              src="/images/official/roof-and-more-dream-project-interior.jpg"
              alt="Interior design project by Roof and More"
              width={720}
              height={900}
            />
            <Image
              src="/images/official/structural-engineering-project.jpg"
              alt="Structural engineering project by Roof and More"
              width={460}
              height={620}
            />
          </div>
        </div>
      </section>

      <section className="section-pad dark-band">
        <div className="section-heading">
          <p className="eyebrow">Service ecosystem</p>
          <h2>One studio for planning, design, engineering and execution support.</h2>
          <p>
            Every service is structured as editable content for future CMS
            management while staying faithful to the official business profile.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link href={`/${service.slug}`} className="service-card" key={service.slug}>
              <Image src={service.image} alt={`${service.title} service`} fill sizes="(max-width: 900px) 100vw, 25vw" />
              <span>{service.group}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <p className="eyebrow">Featured projects</p>
          <h2>Official image categories, rebuilt as a premium portfolio system.</h2>
          <p>
            Project cards avoid invented client names, budgets and dates. Case
            studies can be expanded after approval.
          </p>
        </div>
        <div className="filter-row" aria-label="Project categories">
          {categories.map((category) => (
            <button
              type="button"
              className={filter === category ? "active" : ""}
              key={category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-masonry">
          {visibleProjects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              className="project-tile"
              key={project.slug}
            >
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
              <div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <OfficialImageGallery />

      <section className="section-pad split-band">
        <div>
          <p className="eyebrow">Why choose Roof & More</p>
          <h2>Precise planning for clients who need design to survive the site.</h2>
        </div>
        <div className="reason-grid">
          {[
            "15+ years of experience",
            "Multidisciplinary consulting",
            "Technical precision",
            "Transparent communication",
            "Quality-focused execution",
            "Post-project support",
          ].map((reason) => (
            <div className="reason-item" key={reason}>
              <strong>{reason}</strong>
              <span>
                A project-management lens keeps decisions documented,
                coordinated and ready for execution.
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <p className="eyebrow">Industries served</p>
          <h2>Residential, commercial, hospitality, healthcare and industrial work.</h2>
        </div>
        <div className="industry-grid">
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </section>

      <section className="section-pad process-section">
        <div className="section-heading">
          <p className="eyebrow">Construction process</p>
          <h2>From first conversation to handover.</h2>
        </div>
        <div className="timeline">
          {processSteps.map((step, index) => (
            <div className="timeline-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <RoofingEstimator />
      <MaterialComparison />
      <RoofColorVisualizer />

      <section className="section-pad dark-band">
        <div className="section-heading">
          <p className="eyebrow">Resources</p>
          <h2>Download center prepared for approved files.</h2>
          <p>
            The interface is ready for brochures, catalogues, guides and
            datasheets once Roof & More supplies final documents.
          </p>
        </div>
        <div className="download-grid">
          {downloads.map((download) => (
            <div className="download-item" key={download}>
              <strong>{download}</strong>
              <span>Approval-ready slot</span>
              <Link href="/resources-downloads">Request file</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <p className="eyebrow">Knowledge center</p>
          <h2>SEO-ready articles for planning conversations.</h2>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
              <Image src={post.image} alt={post.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
              <div>
                <span>{post.category} | {post.readTime}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad offices-section">
        <div className="section-heading">
          <p className="eyebrow">Offices and coverage</p>
          <h2>Indore base, Dubai presence, projects across India.</h2>
        </div>
        <div className="office-grid">
          <OfficeBlock title="Indore office" lines={contact.indore} />
          <OfficeBlock title="Dubai office" lines={contact.dubai} />
          <div className="map-panel">
            <span>Projects Across India</span>
            <strong>Indore | Madhya Pradesh | Pan-India assignments</strong>
          </div>
        </div>
      </section>

      <LeadForm mode="quote" />

      <div className="mobile-sticky-actions" aria-label="Quick actions">
        <a href={contact.phoneHref}>
          <Icon name="phone" />
          <span>Call</span>
        </a>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" />
          <span>WhatsApp</span>
        </a>
        <Link href="/roofing-cost-estimator">
          <Icon name="calculator" />
          <span>Estimate</span>
        </Link>
        <Link href="/book-site-visit">
          <Icon name="calendar" />
          <span>Visit</span>
        </Link>
      </div>
    </main>
  );
}

function OfficeBlock({ title, lines }) {
  return (
    <address className="office-card">
      <span>{title}</span>
      <strong>{lines[0]}</strong>
      {lines.slice(1).map((line) => (
        <p key={line}>{line}</p>
      ))}
      <a href={contact.emailHref}>{contact.email}</a>
    </address>
  );
}
