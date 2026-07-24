import Link from "next/link";
import { contact } from "../data";
import Icon from "./Icon";
import Image from "./LocalImage";
import { ToolRenderer } from "./ProjectTools";

export default function RoutePage({ page }) {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-image">
          <Image src={page.image} alt={page.title} fill sizes="100vw" priority />
        </div>
        <div className="page-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>{page.title}</span>
          </nav>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.lead}</p>
          <div className="hero-actions">
            <Link href="/book-site-visit" className="primary-link">
              Book Site Visit
            </Link>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad route-body">
        <div className="route-intro">
          <p>{page.description}</p>
        </div>
        <div className="route-sections">
          {page.sections?.map((section) => (
            <article key={section.title} className="route-section">
              <h2>{section.title}</h2>
              {section.body ? <p>{section.body}</p> : null}
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <ToolRenderer type={page.tool} />
    </main>
  );
}
