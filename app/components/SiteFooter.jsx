import Link from "next/link";
import { contact, downloads, services } from "../data";
import Icon from "./Icon";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div>
          <p className="eyebrow">Start a project conversation</p>
          <h2>Planning a new space or construction project?</h2>
          <p>
            Discuss architecture, engineering, interiors, construction,
            roofing, PEB or turnkey requirements with Roof & More.
          </p>
        </div>
        <div className="footer-cta-actions">
          <Link href="/request-quotation" className="primary-link">
            Request Quotation
          </Link>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      <div className="footer-grid">
        <div>
          <h3>Roof & More</h3>
          <p>
            Integrated architecture, structural engineering, interiors, project
            management, construction, roofing and PEB solutions.
          </p>
          <div className="social-row">
            <a
              className="social-link"
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Icon name="instagram" />
              <span>{contact.instagramLabel}</span>
            </a>
            <a
              className="social-link"
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <Icon name="whatsapp" />
              <span>WhatsApp</span>
            </a>
            <a className="social-link" href={contact.phoneHref} aria-label="Call">
              <Icon name="phone" />
              <span>{contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about-us">About Roof & More</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact-us">Contact</Link>
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 7).map((service) => (
            <Link href={`/${service.slug}`} key={service.slug}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Resources</h3>
          <Link href="/blog">Blog</Link>
          <Link href="/resources-downloads">Downloads</Link>
          <Link href="/roofing-cost-estimator">Cost Estimator</Link>
          <Link href="/material-comparison">Material Comparison</Link>
          <Link href="/book-site-visit">Book Site Visit</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a className="footer-icon-link" href={contact.phoneHref}>
            <Icon name="phone" />
            <span>{contact.phoneDisplay}</span>
          </a>
          <a className="footer-icon-link" href={contact.emailHref}>
            <Icon name="mail" />
            <span>{contact.email}</span>
          </a>
          <p>{contact.indore.slice(1).join(", ")}</p>
          <p>{contact.dubai.slice(1).join(", ")}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright {year} Roof & More Studio. All rights reserved.</span>
        <span>
          {downloads.length} approved download slots ready for client files.
        </span>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
