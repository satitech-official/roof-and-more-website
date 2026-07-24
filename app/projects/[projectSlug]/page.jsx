import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "../../components/Icon";
import Image from "../../components/LocalImage";
import { contact, projects } from "../../data";

export function generateStaticParams() {
  return projects.map((project) => ({ projectSlug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { projectSlug } = await params;
  const project = projects.find((item) => item.slug === projectSlug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({ params }) {
  const { projectSlug } = await params;
  const project = projects.find((item) => item.slug === projectSlug);
  if (!project) notFound();

  return (
    <main>
      <section className="page-hero project-detail-hero">
        <div className="page-hero-image">
          <Image src={project.image} alt={project.title} fill priority sizes="100vw" />
        </div>
        <div className="page-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <span>{project.title}</span>
          </nav>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="hero-actions">
            <Link className="primary-link" href="/request-quotation">
              Discuss Similar Project
            </Link>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
      <section className="section-pad project-detail-grid">
        <div>
          <p className="eyebrow">Scope of work</p>
          <h2>Category-led case-study structure</h2>
          <p>
            This project detail page is ready for approved client requirement,
            design approach, engineering challenge, timeline, materials and
            result notes. It currently avoids unverified client names, budgets
            and completion dates.
          </p>
          <ul className="scope-list">
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="detail-meta">
          <span>Project type</span>
          <strong>{project.category}</strong>
          <span>Location</span>
          <strong>{project.location}</strong>
          <span>Information status</span>
          <strong>Client approval required for private details</strong>
        </div>
      </section>
      <section className="section-pad gallery-section">
        <div className="gallery-grid">
          {project.gallery.map((image) => (
            <div className="gallery-image" key={image}>
              <Image src={image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
