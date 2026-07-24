"use client";

/* eslint-disable @next/next/no-img-element */
import { useMemo, useState } from "react";
import { contact, materialRows, officialImageLibrary, services } from "../data";
import Icon from "./Icon";
import Image from "./LocalImage";

const roofColors = [
  { name: "Graphite Grey", value: "#3f4346" },
  { name: "Deep Blue", value: "#23384b" },
  { name: "Brick Red", value: "#8e3b2f" },
  { name: "Forest Green", value: "#2e4b3b" },
  { name: "Sandstone", value: "#b7a17a" },
];

const mapLocations = [
  {
    key: "indore",
    label: "Indore office",
    lines: contact.indore,
    embed:
      "https://www.google.com/maps?q=4th%20Floor%2C%20DB%20Building%2C%20Madhumilan%20Square%2C%20RNT%20Marg%2C%20Indore%2C%20Madhya%20Pradesh%2C%20India&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=4th%20Floor%2C%20DB%20Building%2C%20Madhumilan%20Square%2C%20RNT%20Marg%2C%20Indore%2C%20Madhya%20Pradesh%2C%20India",
  },
  {
    key: "dubai",
    label: "Dubai office",
    lines: contact.dubai,
    embed:
      "https://www.google.com/maps?q=212%2C%20The%20Offices%20of%20Ibn%20Battuta%20Gate%2C%20Jebel%20Ali%20Village%2C%20Dubai%2C%20UAE&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=212%2C%20The%20Offices%20of%20Ibn%20Battuta%20Gate%2C%20Jebel%20Ali%20Village%2C%20Dubai%2C%20UAE",
  },
];

export function RoofingEstimator() {
  const [length, setLength] = useState(120);
  const [width, setWidth] = useState(80);
  const [slope, setSlope] = useState(10);
  const [material, setMaterial] = useState("PPGI sheets");
  const [insulation, setInsulation] = useState("Optional");

  const result = useMemo(() => {
    const baseArea = Math.max(length, 1) * Math.max(width, 1);
    const slopeFactor = 1 + Math.max(slope, 0) / 200;
    const roofArea = Math.round(baseArea * slopeFactor);
    const waste = Math.round(roofArea * 0.08);
    const quantity = roofArea + waste;
    const days = Math.max(3, Math.ceil(quantity / 1400));
    return { roofArea, waste, quantity, days };
  }, [length, width, slope]);

  const whatsappText = encodeURIComponent(
    `Hello Roof & More, I used the roofing estimator. Approx area: ${result.quantity} sq ft. Material: ${material}. Insulation: ${insulation}. Please guide me with a site inspection.`,
  );

  return (
    <section className="tool-panel" id="estimator">
      <div className="section-heading compact">
        <p className="eyebrow">Indicative estimator</p>
        <h2>Roofing planning calculator</h2>
        <p>
          Rates are intentionally not fabricated. This tool prepares the basic
          quantity conversation before an official quotation.
        </p>
      </div>
      <div className="estimator-grid">
        <div className="tool-controls">
          <label>
            Length in ft
            <input
              type="number"
              min="1"
              value={length}
              onChange={(event) => setLength(Number(event.target.value))}
            />
          </label>
          <label>
            Width in ft
            <input
              type="number"
              min="1"
              value={width}
              onChange={(event) => setWidth(Number(event.target.value))}
            />
          </label>
          <label>
            Roof slope %
            <input
              type="range"
              min="0"
              max="35"
              value={slope}
              onChange={(event) => setSlope(Number(event.target.value))}
            />
            <span>{slope}%</span>
          </label>
          <label>
            Material
            <select value={material} onChange={(event) => setMaterial(event.target.value)}>
              {materialRows.map((row) => (
                <option key={row.material}>{row.material}</option>
              ))}
            </select>
          </label>
          <label>
            Insulation
            <select
              value={insulation}
              onChange={(event) => setInsulation(event.target.value)}
            >
              <option>Optional</option>
              <option>Required</option>
              <option>Not required</option>
              <option>Need technical advice</option>
            </select>
          </label>
        </div>
        <div className="estimate-card">
          <p>Approximate roof area</p>
          <strong>{result.roofArea.toLocaleString("en-IN")} sq ft</strong>
          <div className="estimate-breakdown">
            <span>Waste allowance</span>
            <b>{result.waste.toLocaleString("en-IN")} sq ft</b>
            <span>Indicative quantity</span>
            <b>{result.quantity.toLocaleString("en-IN")} sq ft</b>
            <span>Planning duration</span>
            <b>{result.days}-{result.days + 5} days</b>
          </div>
          <p className="disclaimer">
            Calculated values are preliminary estimates for planning purposes
            only. Final pricing is provided after site inspection, technical
            assessment, material selection and official quotation.
          </p>
          <a
            className="primary-link"
            href={`https://api.whatsapp.com/send?phone=919425062078&text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" />
            <span>Send Estimate on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function MaterialComparison() {
  return (
    <section className="tool-panel" id="materials">
      <div className="section-heading compact">
        <p className="eyebrow">Material planning</p>
        <h2>Roof material comparison</h2>
        <p>
          Technical specifications and warranties are configurable so Roof & More
          can publish only verified values.
        </p>
      </div>
      <div className="comparison-table" role="table" aria-label="Roof material comparison">
        <div className="comparison-row table-head" role="row">
          <span>Material</span>
          <span>Durability</span>
          <span>Heat response</span>
          <span>Maintenance</span>
          <span>Suitable applications</span>
        </div>
        {materialRows.map((row) => (
          <div className="comparison-row" role="row" key={row.material}>
            <span>{row.material}</span>
            <span>{row.durability}</span>
            <span>{row.heat}</span>
            <span>{row.maintenance}</span>
            <span>{row.suited}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function RoofColorVisualizer() {
  const [color, setColor] = useState(roofColors[0]);
  const [preview, setPreview] = useState("/images/official/real-estate-project-03.jpg");
  const [message, setMessage] = useState("");

  function handleUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setMessage("Please upload an image file.");
      return;
    }
    if (file.size > 6 * 1024 * 1024) {
      setMessage("Image must be 6 MB or smaller.");
      return;
    }
    setMessage("Preview loaded locally in this browser.");
    setPreview(URL.createObjectURL(file));
  }

  return (
    <section className="tool-panel" id="visualizer">
      <div className="section-heading compact">
        <p className="eyebrow">Color preview</p>
        <h2>Roof color visualizer</h2>
        <p>
          Upload a building photo or use the sample image to discuss color mood.
          Final shades may vary by material, finish and light.
        </p>
      </div>
      <div className="visualizer-grid">
        <div className="visualizer-frame">
          <img className="visualizer-image" src={preview} alt="Building preview" />
          <span className="roof-overlay" style={{ backgroundColor: color.value }} />
        </div>
        <div className="swatch-panel">
          <label className="upload-control">
            Upload building photo
            <input type="file" accept="image/*" onChange={handleUpload} />
          </label>
          <div className="swatches" aria-label="Roof colors">
            {roofColors.map((item) => (
              <button
                type="button"
                key={item.name}
                className={item.name === color.name ? "active" : ""}
                onClick={() => setColor(item)}
              >
                <span style={{ backgroundColor: item.value }} />
                {item.name}
              </button>
            ))}
          </div>
          {message ? <p className="form-message">{message}</p> : null}
          <a className="primary-link" href={contact.whatsapp} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />
            <span>Submit Selection</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function LeadForm({ mode = "quote" }) {
  const [sent, setSent] = useState(false);
  const isBooking = mode === "booking";
  const reference = `${isBooking ? "VISIT" : "QUOTE"}-${new Date()
    .toISOString()
    .slice(0, 10)
    .replaceAll("-", "")}`;

  return (
    <section className="tool-panel" id={isBooking ? "book" : "quote"}>
      <div className="section-heading compact">
        <p className="eyebrow">{isBooking ? "Site visit" : "Quotation"}</p>
        <h2>{isBooking ? "Book a site visit" : "Request a quotation"}</h2>
        <p>
          The form is structured for secure server validation when connected to
          email, CRM or CMS services.
        </p>
      </div>
      <form
        className="lead-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <label>
          Full name
          <input required name="name" autoComplete="name" />
        </label>
        <label>
          Phone
          <input required name="phone" autoComplete="tel" />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label>
          Project category
          <select required name="category">
            <option value="">Select category</option>
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
          </select>
        </label>
        <label>
          Approximate area
          <input name="area" placeholder="Example: 5000 sq ft" />
        </label>
        <label>
          Project location
          <input required name="location" />
        </label>
        {isBooking ? (
          <label>
            Preferred date
            <input required name="date" type="date" />
          </label>
        ) : (
          <label>
            Timeline
            <select name="timeline">
              <option>Immediately</option>
              <option>Within 1 month</option>
              <option>1-3 months</option>
              <option>Planning stage</option>
            </select>
          </label>
        )}
        <label className="span-2">
          Project description
          <textarea required name="description" rows="4" />
        </label>
        <label className="span-2 consent-row">
          <input type="checkbox" required />
          <span>I consent to Roof & More contacting me about this inquiry.</span>
        </label>
        <button className="primary-link" type="submit">
          {isBooking ? "Confirm Visit Request" : "Submit Quote Request"}
        </button>
      </form>
      {sent ? (
        <div className="success-box" role="status">
          <strong>Request captured: {reference}</strong>
          <p>
            The next production step is connecting this flow to secure email,
            CRM storage and file-upload handling.
          </p>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />
            <span>Continue on WhatsApp</span>
          </a>
        </div>
      ) : null}
    </section>
  );
}

export function ContactMapSection() {
  return (
    <section className="section-pad contact-map-section" id="office-map">
      <div className="section-heading compact">
        <p className="eyebrow">Office map</p>
        <h2>Reach the Roof & More team at the right office.</h2>
        <p>
          Indore handles India project conversations, while the Dubai office
          supports regional coordination for UAE inquiries.
        </p>
      </div>
      <div className="contact-map-grid">
        {mapLocations.map((location) => (
          <article className="map-card" key={location.key}>
            <div className="map-frame">
              <iframe
                src={location.embed}
                title={`${location.label} map`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-card-copy">
              <p className="eyebrow">{location.label}</p>
              <h3>{location.lines[0]}</h3>
              {location.lines.slice(1).map((line) => (
                <p key={line}>{line}</p>
              ))}
              <div className="contact-map-actions">
                <a href={location.directions} target="_blank" rel="noreferrer">
                  <Icon name="mapPin" />
                  <span>Get Directions</span>
                </a>
                <a href={contact.phoneHref}>
                  <Icon name="phone" />
                  <span>Call Office</span>
                </a>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                  <Icon name="whatsapp" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="map-note">
        Map pins use address search embeds; final launch coordinates can be
        adjusted after office verification.
      </p>
    </section>
  );
}

export function OfficialImageGallery() {
  return (
    <section className="section-pad official-gallery-section" id="official-gallery">
      <div className="section-heading">
        <p className="eyebrow">Complete image library</p>
        <h2>All official Roof & More visuals are loaded locally.</h2>
        <p>
          Every image downloaded from the official site is included here so the
          portfolio never feels incomplete while the CMS is being prepared.
        </p>
      </div>
      <div className="official-gallery-grid">
        {officialImageLibrary.map((image, index) => (
          <figure className="official-gallery-item" key={image.src}>
            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 25vw"
              priority={index < 4}
            />
            <figcaption>
              <span>{image.category}</span>
              <strong>{image.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function ToolRenderer({ type }) {
  if (type === "estimator") return <RoofingEstimator />;
  if (type === "materials") return <MaterialComparison />;
  if (type === "visualizer") return <RoofColorVisualizer />;
  if (type === "gallery") return <OfficialImageGallery />;
  if (type === "booking") return <LeadForm mode="booking" />;
  if (type === "contact") {
    return (
      <>
        <ContactMapSection />
        <LeadForm mode="quote" />
      </>
    );
  }
  if (type === "quote") return <LeadForm mode="quote" />;
  return null;
}
