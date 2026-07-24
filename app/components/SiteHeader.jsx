"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { contact, navItems, serviceGroups, services } from "../data";
import Icon from "./Icon";
import Image from "./LocalImage";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-solid" : ""}`}>
      <Link className="brand-lockup" href="/" aria-label="Roof and More home">
        <span className="brand-logo">
          <Image
            src="/images/official/roof-and-more-logo.png"
            alt="Roof & More logo"
            width={150}
            height={66}
            priority
          />
        </span>
        <span>
          <strong>{contact.brand}</strong>
          <small>Design | Engineering | Construction</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) =>
          item.label === "Services" ? (
            <div className="nav-mega-wrap" key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              <div className="mega-menu" aria-label="Services menu">
                {serviceGroups.map((group) => (
                  <div key={group.label}>
                    <strong>{group.label}</strong>
                    {services
                      .filter((service) => service.group === group.label)
                      .map((service) => (
                        <Link href={`/${service.slug}`} key={service.slug}>
                          {service.title}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ),
        )}
      </nav>

      <div className="header-actions">
        <a className="icon-action" href={contact.phoneHref} aria-label="Call Roof and More">
          <Icon name="phone" />
          <span className="sr-only">Call Roof and More</span>
        </a>
        <a
          className="icon-action"
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Roof and More"
        >
          <Icon name="whatsapp" />
          <span className="sr-only">WhatsApp Roof and More</span>
        </a>
        <Link className="consultation-btn" href="/book-site-visit">
          Free Consultation
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <div className="mobile-service-grid">
          {services.map((service) => (
            <Link
              href={`/${service.slug}`}
              key={service.slug}
              onClick={() => setOpen(false)}
            >
              {service.title}
            </Link>
          ))}
        </div>
        <div className="mobile-actions">
          <a href={contact.phoneHref}>
            <Icon name="phone" />
            <span>Call</span>
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
