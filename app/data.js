export const contact = {
  brand: "Roof & More",
  legalBrand: "Roof & More Studio",
  phoneDisplay: "+91 94250 62078",
  phoneHref: "tel:+919425062078",
  whatsapp:
    "https://api.whatsapp.com/send?phone=919425062078&text=Hello%20Roof%20%26%20More%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20my%20architecture%2C%20construction%2C%20roofing%20or%20interior%20project.",
  email: "roofandmore.studio@gmail.com",
  emailHref: "mailto:roofandmore.studio@gmail.com",
  instagram: "https://www.instagram.com/roofndmore/",
  instagramLabel: "@roofndmore",
  indore: [
    "ROOF & MORE STUDIO",
    "4th Floor, DB Building",
    "Madhumilan Square, RNT Marg",
    "Indore, Madhya Pradesh, India",
  ],
  dubai: [
    "ROOF & MORE STUDIO",
    "212, The Offices of Ibn Battuta Gate",
    "Jebel Ali Village",
    "Dubai, UAE",
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries-served" },
  { label: "Experience", href: "/experience" },
  { label: "Resources", href: "/resources-downloads" },
  { label: "Contact", href: "/contact-us" },
];

export const serviceGroups = [
  {
    label: "Design",
    items: [
      "Architecture",
      "Space planning",
      "Interior design",
      "Elevation design",
      "3D design and visualization",
      "Vastu-compliant planning",
    ],
  },
  {
    label: "Engineering",
    items: [
      "Structural design",
      "Civil structures",
      "Plumbing design",
      "Electrical design",
      "Lighting design",
      "HVAC and ventilation",
      "Fire solutions",
    ],
  },
  {
    label: "Construction",
    items: [
      "Construction management",
      "Turnkey project solutions",
      "Contractor selection",
      "Site supervision",
      "Procurement management",
      "Vendor coordination",
    ],
  },
  {
    label: "Roofing and PEB",
    items: [
      "Industrial roofing",
      "Metal roofing",
      "PEB buildings",
      "Factory sheds",
      "Warehouse construction",
      "Commercial roofing",
      "Roofing repair and maintenance",
    ],
  },
];

export const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "1M+", label: "Sq. ft. delivered" },
  { value: "India", label: "Project coverage" },
  { value: "Indore + Dubai", label: "Studio presence" },
];

export const services = [
  {
    slug: "architecture",
    title: "Architecture",
    group: "Design",
    image: "/images/official/roof-and-more-dream-project-architecture.jpg",
    summary:
      "Concept, space planning, floor planning, elevation design, working drawings and visualization for residential, commercial and hospitality spaces.",
    features: [
      "Concept and space planning",
      "Residential and commercial architecture",
      "Elevation and facade direction",
      "Working drawings and visualization",
      "Vastu-aware planning where requested",
    ],
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    group: "Design",
    image: "/images/official/commercial-office-project-01.jpg",
    summary:
      "Residential, office, healthcare, hospitality and retail interiors that balance ambience, movement, materials, lighting and execution practicality.",
    features: [
      "Residential and commercial interiors",
      "Hotels, lounges and healthcare spaces",
      "Material, lighting and furniture planning",
      "3D design and visualization",
      "Execution coordination support",
    ],
  },
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    group: "Engineering",
    image: "/images/official/structural-engineering-project.jpg",
    summary:
      "Structural design, civil structure planning, engineering drawings and technical coordination for commercial, residential and industrial work.",
    features: [
      "Structural analysis and design coordination",
      "Civil structure planning",
      "Foundation and technical drawing support",
      "Commercial and industrial structures",
      "Engineering-first project review",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    group: "Construction",
    image: "/images/official/real-estate-project-feature.jpg",
    summary:
      "Requirement analysis, contractor selection, budget coordination, timeline planning, site supervision, procurement and handover support.",
    features: [
      "Requirement and scope definition",
      "Contractor and vendor coordination",
      "Budget and timeline monitoring",
      "Site supervision and reporting",
      "Handover support",
    ],
  },
  {
    slug: "construction-management",
    title: "Construction Management",
    group: "Construction",
    image: "/images/official/residential-apartment-project-02.jpg",
    summary:
      "Turnkey construction coordination, quality reviews, material procurement, execution planning and communication across stakeholders.",
    features: [
      "Turnkey execution coordination",
      "Material procurement planning",
      "Quality inspection rhythm",
      "Timeline and site communication",
      "Vendor and contractor management",
    ],
  },
  {
    slug: "industrial-roofing",
    title: "Industrial Roofing",
    group: "Roofing and PEB",
    image: "/images/official/real-estate-project-04.jpg",
    summary:
      "Industrial metal roofing, factory and warehouse roofing, repair planning, insulation coordination and customized roofing solutions.",
    features: [
      "Industrial and commercial metal roofing",
      "Factory and warehouse roof planning",
      "Roof replacement and repair coordination",
      "Insulation and waterproofing coordination",
      "Maintenance planning",
    ],
  },
  {
    slug: "peb-buildings",
    title: "PEB Buildings",
    group: "Roofing and PEB",
    image: "/images/official/real-estate-project-03.jpg",
    summary:
      "Pre-engineered building planning for factory sheds, warehouse structures, commercial sheds, roofing, cladding and installation management.",
    features: [
      "Factory shed planning",
      "Warehouse and industrial buildings",
      "Roofing and cladding coordination",
      "Customized spans and layouts",
      "Installation management",
    ],
  },
  {
    slug: "factory-warehouse-solutions",
    title: "Factory and Warehouse Solutions",
    group: "Roofing and PEB",
    image: "/images/official/real-estate-project-01.jpg",
    summary:
      "Integrated planning for industrial buildings, sheds, warehouses, service circulation, roof systems and execution-ready drawings.",
    features: [
      "Industrial building planning",
      "Warehouse construction coordination",
      "Factory shed layouts",
      "Material and roof-system review",
      "Site execution support",
    ],
  },
];

export const projects = [
  {
    slug: "commercial-office-portfolio",
    title: "Commercial Office Portfolio",
    category: "Commercial offices",
    location: "India",
    image: "/images/official/commercial-office-project-01.jpg",
    gallery: [
      "/images/official/commercial-office-project-01.jpg",
      "/images/official/commercial-office-project-02.jpg",
      "/images/official/commercial-office-project-03.jpg",
    ],
    scope: ["Interior planning", "Lighting design", "Execution coordination"],
    summary:
      "A portfolio category for private offices, commercial offices and co-working spaces shown on the official website.",
  },
  {
    slug: "hospitality-portfolio",
    title: "Hospitality Portfolio",
    category: "Hotels and resorts",
    location: "India",
    image: "/images/official/hotel-resort-project-01.jpg",
    gallery: [
      "/images/official/hotel-resort-project-01.jpg",
      "/images/official/hotel-resort-project-02.jpg",
      "/images/official/hotel-resort-project-04.jpg",
    ],
    scope: ["Architecture", "Interior design", "Project coordination"],
    summary:
      "Hospitality interiors and planning examples from the official project imagery.",
  },
  {
    slug: "residential-apartment-portfolio",
    title: "Residential Apartment Portfolio",
    category: "Residential apartments",
    location: "India",
    image: "/images/official/residential-apartment-project-01.jpg",
    gallery: [
      "/images/official/residential-apartment-project-01.jpg",
      "/images/official/residential-apartment-project-02.jpg",
      "/images/official/residential-apartment-project-04.jpg",
    ],
    scope: ["Space planning", "Interior design", "Construction coordination"],
    summary:
      "Elegantly designed residential apartments focused on comfort, functional layouts and modern living.",
  },
  {
    slug: "villa-and-bungalow-portfolio",
    title: "Villa and Bungalow Portfolio",
    category: "Villas",
    location: "India",
    image: "/images/official/villa-project-01.jpg",
    gallery: [
      "/images/official/villa-project-01.jpg",
      "/images/official/villa-project-02.jpg",
      "/images/official/villa-project-04.jpg",
    ],
    scope: ["Architecture", "Visualization", "Premium property consultation"],
    summary:
      "Premium villa and bungalow planning supported by architectural drawings and design consultation.",
  },
  {
    slug: "outdoor-patio-lawn-theatre",
    title: "Outdoor Patio and Lawn Theatre",
    category: "Landscape and outdoor",
    location: "India",
    image: "/images/official/outdoor-patio-lawn-theatre-04.jpg",
    gallery: [
      "/images/official/outdoor-patio-lawn-theatre-01.jpg",
      "/images/official/outdoor-patio-lawn-theatre-02.jpg",
      "/images/official/outdoor-patio-lawn-theatre-04.jpg",
    ],
    scope: ["Outdoor planning", "Landscape experience", "Execution support"],
    summary:
      "Outdoor living and entertainment spaces shaped for atmosphere, comfort and usability.",
  },
  {
    slug: "healthcare-interior-portfolio",
    title: "Healthcare Interior Portfolio",
    category: "Healthcare",
    location: "India",
    image: "/images/official/healthcare-interior-project.jpg",
    gallery: [
      "/images/official/healthcare-interior-project.jpg",
      "/images/official/commercial-office-project-04.jpg",
      "/images/official/residential-apartment-project-03.jpg",
    ],
    scope: ["Healthcare interiors", "Material planning", "Site coordination"],
    summary:
      "Healthcare-focused interior work organized around clarity, hygiene, patient movement and professional finish.",
  },
];

export const officialImageLibrary = [
  {
    src: "/images/official/commercial-office-project-01.jpg",
    title: "Commercial office boardroom",
    category: "Commercial",
  },
  {
    src: "/images/official/commercial-office-project-02.jpg",
    title: "Commercial office lounge",
    category: "Commercial",
  },
  {
    src: "/images/official/commercial-office-project-03.jpg",
    title: "Commercial interior workspace",
    category: "Commercial",
  },
  {
    src: "/images/official/commercial-office-project-04.jpg",
    title: "Private office interior",
    category: "Commercial",
  },
  {
    src: "/images/official/healthcare-interior-project.jpg",
    title: "Healthcare interior project",
    category: "Healthcare",
  },
  {
    src: "/images/official/hospitality-project-feature.jpg",
    title: "Hospitality feature project",
    category: "Hospitality",
  },
  {
    src: "/images/official/hotel-resort-project-01.jpg",
    title: "Hotel and resort interior one",
    category: "Hospitality",
  },
  {
    src: "/images/official/hotel-resort-project-02.jpg",
    title: "Hotel and resort interior two",
    category: "Hospitality",
  },
  {
    src: "/images/official/hotel-resort-project-03.jpg",
    title: "Hotel and resort interior three",
    category: "Hospitality",
  },
  {
    src: "/images/official/hotel-resort-project-04.jpg",
    title: "Hotel and resort interior four",
    category: "Hospitality",
  },
  {
    src: "/images/official/hotel-resort-project-05.jpg",
    title: "Hotel and resort interior five",
    category: "Hospitality",
  },
  {
    src: "/images/official/outdoor-patio-lawn-theatre-01.jpg",
    title: "Outdoor patio and lawn theatre one",
    category: "Outdoor",
  },
  {
    src: "/images/official/outdoor-patio-lawn-theatre-02.jpg",
    title: "Outdoor patio and lawn theatre two",
    category: "Outdoor",
  },
  {
    src: "/images/official/outdoor-patio-lawn-theatre-03.jpg",
    title: "Outdoor patio and lawn theatre three",
    category: "Outdoor",
  },
  {
    src: "/images/official/outdoor-patio-lawn-theatre-04.jpg",
    title: "Outdoor patio and lawn theatre four",
    category: "Outdoor",
  },
  {
    src: "/images/official/real-estate-project-01.jpg",
    title: "Real estate project one",
    category: "Real estate",
  },
  {
    src: "/images/official/real-estate-project-02.jpg",
    title: "Real estate project two",
    category: "Real estate",
  },
  {
    src: "/images/official/real-estate-project-03.jpg",
    title: "Real estate project three",
    category: "Real estate",
  },
  {
    src: "/images/official/real-estate-project-04.jpg",
    title: "Real estate project four",
    category: "Real estate",
  },
  {
    src: "/images/official/real-estate-project-feature.jpg",
    title: "Real estate feature project",
    category: "Real estate",
  },
  {
    src: "/images/official/residential-apartment-project-01.jpg",
    title: "Residential apartment one",
    category: "Residential",
  },
  {
    src: "/images/official/residential-apartment-project-02.jpg",
    title: "Residential apartment two",
    category: "Residential",
  },
  {
    src: "/images/official/residential-apartment-project-03.jpg",
    title: "Residential apartment three",
    category: "Residential",
  },
  {
    src: "/images/official/residential-apartment-project-04.jpg",
    title: "Residential apartment four",
    category: "Residential",
  },
  {
    src: "/images/official/roof-and-more-dream-project-architecture.jpg",
    title: "Dream project architecture",
    category: "Architecture",
  },
  {
    src: "/images/official/roof-and-more-dream-project-interior.jpg",
    title: "Dream project interior",
    category: "Interior",
  },
  {
    src: "/images/official/roof-and-more-hero-identity.png",
    title: "Roof & More identity visual",
    category: "Brand",
  },
  {
    src: "/images/official/roof-and-more-logo.png",
    title: "Roof & More official logo",
    category: "Brand",
  },
  {
    src: "/images/official/structural-engineering-project.jpg",
    title: "Structural engineering project",
    category: "Engineering",
  },
  {
    src: "/images/official/villa-project-01.jpg",
    title: "Villa project one",
    category: "Villa",
  },
  {
    src: "/images/official/villa-project-02.jpg",
    title: "Villa project two",
    category: "Villa",
  },
  {
    src: "/images/official/villa-project-03.jpg",
    title: "Villa project three",
    category: "Villa",
  },
  {
    src: "/images/official/villa-project-04.jpg",
    title: "Villa project four",
    category: "Villa",
  },
];

export const industries = [
  "Residential",
  "Commercial",
  "Corporate offices",
  "Hospitality",
  "Hotels and resorts",
  "Restaurants",
  "Healthcare",
  "Industrial plants",
  "Warehouses",
  "Factory buildings",
  "Real estate",
  "Farmhouses",
  "Schools and institutions",
];

export const processSteps = [
  "Initial consultation",
  "Requirement analysis",
  "Site inspection",
  "Concept and planning",
  "Design and visualization",
  "Technical engineering",
  "Quotation and approval",
  "Procurement coordination",
  "Execution and supervision",
  "Quality inspection",
  "Project handover",
  "After-project support",
];

export const materialRows = [
  {
    material: "PPGI sheets",
    durability: "Configurable",
    heat: "Moderate to high",
    maintenance: "Periodic cleaning",
    suited: "Warehouses, factories, commercial roofing",
  },
  {
    material: "PPGL sheets",
    durability: "Configurable",
    heat: "High",
    maintenance: "Low to moderate",
    suited: "Industrial roofing and coastal-sensitive planning",
  },
  {
    material: "Standing-seam roofing",
    durability: "Configurable",
    heat: "High",
    maintenance: "Low",
    suited: "Premium industrial and commercial roofs",
  },
  {
    material: "Sandwich panels",
    durability: "Configurable",
    heat: "High insulation",
    maintenance: "Low",
    suited: "Temperature-sensitive buildings",
  },
  {
    material: "Polycarbonate sheets",
    durability: "Configurable",
    heat: "Light-transmission focused",
    maintenance: "Moderate",
    suited: "Skylights, canopies and daylight zones",
  },
];

export const downloads = [
  "Company profile",
  "Service catalogue",
  "Roofing catalogue",
  "Project checklist",
  "Site-visit preparation guide",
  "Material comparison sheet",
];

export const blogPosts = [
  {
    slug: "how-to-plan-a-commercial-interior-project",
    title: "How to Plan a Commercial Interior Project",
    category: "Interior Design",
    readTime: "5 min read",
    image: "/images/official/commercial-office-project-02.jpg",
    excerpt:
      "A practical planning sequence for requirements, circulation, material selection, lighting and execution coordination.",
  },
  {
    slug: "industrial-roofing-questions-before-a-site-visit",
    title: "Industrial Roofing Questions Before a Site Visit",
    category: "Industrial Roofing",
    readTime: "6 min read",
    image: "/images/official/real-estate-project-04.jpg",
    excerpt:
      "The drawings, measurements, structure details and operating constraints that make a roofing inspection more productive.",
  },
  {
    slug: "architecture-engineering-and-project-management-together",
    title: "Why Architecture, Engineering and Project Management Belong Together",
    category: "Project Planning",
    readTime: "7 min read",
    image: "/images/official/roof-and-more-dream-project-interior.jpg",
    excerpt:
      "A joined-up approach reduces rework, improves decisions and keeps design intent aligned with site realities.",
  },
];

const serviceRoutePages = Object.fromEntries(
  services.map((service) => [
    service.slug,
    {
      title: service.title,
      eyebrow: service.group,
      description: service.summary,
      image: service.image,
      lead:
        "Roof & More keeps design decisions, engineering logic and execution coordination in the same conversation so each project can move with clarity.",
      sections: [
        {
          title: "Scope",
          items: service.features,
        },
        {
          title: "How the team supports you",
          body:
            "The engagement can start with early consultation, planning review, technical drawings, contractor coordination or execution-stage project management. Final technical claims, warranties and rates remain editable until the client approves them.",
        },
      ],
      related: ["book-site-visit", "request-quotation", "projects"],
    },
  ]),
);

export const routePages = {
  "about-us": {
    title: "About Roof & More",
    eyebrow: "Company profile",
    description:
      "Roof & More Studio is an integrated architecture, structural engineering, interiors and project-management practice with Indore and Dubai presence.",
    image: "/images/official/roof-and-more-dream-project-interior.jpg",
    lead:
      "Roof & More brings architecture, interiors, structural engineering, project management and construction coordination into one disciplined project experience.",
    sections: [
      {
        title: "Studio foundation",
        body:
          "The official company profile communicates a founding and consulting team associated with BITS Pilani, IIT and IIM backgrounds, plus 15+ years of project experience across Indore, Madhya Pradesh and India.",
      },
      {
        title: "Vision",
        body:
          "Create spaces and structures that combine technical intelligence, functionality, durability and timeless design.",
      },
      {
        title: "Mission",
        body:
          "Deliver integrated architecture, engineering, interior and construction solutions through professional planning, transparent communication and precise execution.",
      },
      {
        title: "Values",
        items: [
          "Integrity",
          "Excellence",
          "Innovation",
          "Safety",
          "Accountability",
          "Collaboration",
          "Functionality",
          "Attention to detail",
          "Customer satisfaction",
          "Long-term value",
        ],
      },
    ],
    related: ["services", "experience", "contact-us"],
  },
  services: {
    title: "Services",
    eyebrow: "Integrated capability",
    description:
      "Architecture, interiors, structural engineering, project management, construction management, industrial roofing and PEB solutions.",
    image: "/images/official/structural-engineering-project.jpg",
    lead:
      "The service ecosystem is organized around one practical outcome: moving from idea to technically reviewed, execution-ready decisions.",
    sections: serviceGroups.map((group) => ({
      title: group.label,
      items: group.items,
    })),
    related: services.map((service) => service.slug),
  },
  "industries-served": {
    title: "Industries Served",
    eyebrow: "Coverage",
    description:
      "Project support for residential, commercial, hospitality, healthcare, real estate, industrial and institutional work.",
    image: "/images/official/hospitality-project-feature.jpg",
    lead:
      "Roof & More supports public-sector and private-sector clients, including doctors, entrepreneurs, IT professionals, developers, hospitality businesses and industrial clients.",
    sections: [
      {
        title: "Sectors",
        items: industries,
      },
      {
        title: "Delivery lens",
        body:
          "Every sector receives a different balance of design, engineering, procurement, site coordination and maintenance planning. The content model keeps sectors editable for future portfolio expansion.",
      },
    ],
    related: ["projects", "project-management", "contact-us"],
  },
  projects: {
    title: "Projects",
    eyebrow: "Portfolio",
    description:
      "A CMS-ready project portfolio using official Roof & More image categories without inventing client names, budgets or dates.",
    image: "/images/official/villa-project-01.jpg",
    lead:
      "The portfolio is structured around verified categories from the official website, with room for approved case-study details later.",
    sections: [
      {
        title: "Current categories",
        items: [
          "Commercial offices",
          "Private offices",
          "Co-working spaces",
          "Hotels and resorts",
          "Residential apartments",
          "Real estate",
          "Villas",
          "Lounges",
          "Home theatres",
          "Outdoor patios",
          "Healthcare",
          "Restaurants",
          "Industrial and roofing projects",
        ],
      },
    ],
    tool: "gallery",
    related: projects.map((project) => `projects/${project.slug}`),
  },
  "roofing-cost-estimator": {
    title: "Roofing Cost Estimator",
    eyebrow: "Planning tool",
    description:
      "A preliminary estimator for roof area, waste allowance, material quantity and site-review next steps.",
    image: "/images/official/real-estate-project-04.jpg",
    lead:
      "The estimator intentionally avoids fabricated prices. Rates can be connected after Roof & More approves an editable rate card.",
    tool: "estimator",
    sections: [
      {
        title: "Estimator rules",
        items: [
          "Approximate roof area",
          "Waste allowance",
          "Indicative quantity",
          "Material suggestion",
          "Site inspection CTA",
        ],
      },
    ],
    related: ["industrial-roofing", "peb-buildings", "request-quotation"],
  },
  "material-comparison": {
    title: "Material Comparison",
    eyebrow: "Roofing guide",
    description:
      "Compare configurable roofing materials by durability, heat response, maintenance and suitable applications.",
    image: "/images/official/real-estate-project-01.jpg",
    lead:
      "The comparison interface is ready for client-approved technical values, warranty language and material rate data.",
    tool: "materials",
    sections: [
      {
        title: "Materials supported",
        items: materialRows.map((row) => row.material),
      },
    ],
    related: ["roofing-cost-estimator", "industrial-roofing", "contact-us"],
  },
  "roof-color-visualizer": {
    title: "Roof Color Visualizer",
    eyebrow: "Design preview",
    description:
      "Upload a building photograph and preview selected roof color moods for early discussion.",
    image: "/images/official/real-estate-project-03.jpg",
    lead:
      "The visualizer is a planning aid only. Final shade, finish and material selection should be verified physically before quotation.",
    tool: "visualizer",
    sections: [
      {
        title: "Privacy and validation",
        items: [
          "Image-only upload control",
          "Local browser preview",
          "File-size guardrail",
          "No external upload in this demo",
        ],
      },
    ],
    related: ["book-site-visit", "request-quotation", "industrial-roofing"],
  },
  "construction-process": {
    title: "Construction Process",
    eyebrow: "Delivery method",
    description:
      "A clear process from consultation and site inspection to design, engineering, procurement, execution and handover.",
    image: "/images/official/residential-apartment-project-03.jpg",
    lead:
      "The process keeps clients, designers, engineers, contractors and vendors aligned from the first discussion through final handover.",
    sections: [
      {
        title: "Project sequence",
        items: processSteps,
      },
    ],
    related: ["project-management", "construction-management", "book-site-visit"],
  },
  experience: {
    title: "Experience",
    eyebrow: "Track record",
    description:
      "A conservative experience page using safe statistics and avoiding conflicting project-count claims until approval.",
    image: "/images/official/hotel-resort-project-05.jpg",
    lead:
      "The official website references 15+ years of experience and approximately one million square feet delivered. It also contains conflicting completed-project counts, so this redesign keeps project count editable.",
    sections: [
      {
        title: "Safe public stats",
        items: stats.map((stat) => `${stat.value} - ${stat.label}`),
      },
      {
        title: "Approval note",
        body:
          "Completed-project count, testimonials, licenses, warranty language and client names should be filled only after written approval from Roof & More.",
      },
    ],
    related: ["about-us", "projects", "contact-us"],
  },
  testimonials: {
    title: "Testimonials",
    eyebrow: "Approval-ready",
    description:
      "A testimonial page prepared for verified client feedback without publishing fabricated names, ratings or photos.",
    image: "/images/official/commercial-office-project-04.jpg",
    lead:
      "Testimonials are intentionally held as a structured approval-ready section until genuine client statements are supplied.",
    sections: [
      {
        title: "Publishing rule",
        body:
          "Only verified client names, statements, photographs, company logos and ratings should be published. Until then, the section routes visitors toward project consultation and portfolio review.",
      },
    ],
    related: ["projects", "book-site-visit", "contact-us"],
  },
  "resources-downloads": {
    title: "Resources and Downloads",
    eyebrow: "Knowledge center",
    description:
      "A premium download center prepared for company profiles, catalogues, checklists, guides and material sheets.",
    image: "/images/official/roof-and-more-dream-project-architecture.jpg",
    lead:
      "The download center is ready for approved PDFs and brochures. It avoids fake certification, warranty or technical documents.",
    sections: [
      {
        title: "Download slots",
        items: downloads,
      },
    ],
    related: ["blog", "material-comparison", "contact-us"],
  },
  blog: {
    title: "Blog",
    eyebrow: "Knowledge center",
    description:
      "SEO-ready articles for architecture, interior design, project management, industrial roofing and material decisions.",
    image: "/images/official/residential-apartment-project-04.jpg",
    lead:
      "The blog model supports categories, tags, reading time, related posts, FAQ schema and article metadata.",
    sections: [
      {
        title: "Topics",
        items: [
          "Architecture",
          "Interior design",
          "Structural engineering",
          "Construction management",
          "Roofing tips",
          "PEB structures",
          "Material comparisons",
          "Cost guides",
        ],
      },
    ],
    related: blogPosts.map((post) => `blog/${post.slug}`),
  },
  "book-site-visit": {
    title: "Book a Site Visit",
    eyebrow: "Consultation",
    description:
      "A multi-step booking flow for contact details, project information, visit preference, requirements and uploads.",
    image: "/images/official/real-estate-project-feature.jpg",
    lead:
      "Start with a structured brief so Roof & More can prepare for the site visit with the right context.",
    tool: "booking",
    sections: [
      {
        title: "Booking steps",
        items: [
          "Contact details",
          "Project information",
          "Visit preferences",
          "Requirements",
          "Uploads",
          "Confirmation",
        ],
      },
    ],
    related: ["request-quotation", "contact-us", "roofing-cost-estimator"],
  },
  "request-quotation": {
    title: "Request a Quotation",
    eyebrow: "Project inquiry",
    description:
      "A quotation request page for project category, services, location, area, timeline, budget range and drawings.",
    image: "/images/official/commercial-office-project-03.jpg",
    lead:
      "Share the essential project information first. Official pricing should follow technical assessment, material selection and site inspection.",
    tool: "quote",
    sections: [
      {
        title: "Quotation details",
        items: [
          "Customer details",
          "Project category",
          "Site location",
          "Approximate area",
          "Required services",
          "Timeline",
          "Preferred contact method",
        ],
      },
    ],
    related: ["book-site-visit", "contact-us", "services"],
  },
  "contact-us": {
    title: "Contact Us",
    eyebrow: "Indore and Dubai",
    description:
      "Contact Roof & More Studio by phone, WhatsApp, email, Instagram or office inquiry.",
    image: "/images/official/roof-and-more-hero-identity.png",
    lead:
      "Discuss architecture, structural engineering, interiors, construction management, roofing, PEB or turnkey project requirements.",
    tool: "contact",
    sections: [
      {
        title: "Indore office",
        items: contact.indore,
      },
      {
        title: "Dubai office",
        items: contact.dubai,
      },
    ],
    related: ["book-site-visit", "request-quotation", "instagram"],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    eyebrow: "Website policy",
    description:
      "Privacy policy for Roof & More inquiries, uploads, consultation requests and communication preferences.",
    image: "/images/official/roof-and-more-logo.png",
    lead:
      "This draft policy should be reviewed by legal counsel before production launch.",
    sections: [
      {
        title: "Data collected",
        body:
          "The website may collect inquiry details, project descriptions, contact preferences, uploaded drawings or photographs and technical requirements submitted by visitors.",
      },
      {
        title: "Use of data",
        body:
          "Information is intended for consultation, quotation, site-visit preparation and project communication only.",
      },
      {
        title: "Uploads",
        body:
          "Uploaded drawings, floor plans or site photographs should be stored securely, access-controlled and deleted according to an approved retention policy.",
      },
    ],
    related: ["terms-and-conditions", "contact-us"],
  },
  "terms-and-conditions": {
    title: "Terms and Conditions",
    eyebrow: "Website terms",
    description:
      "Terms for using the Roof & More website, estimator, material comparison and visualizer tools.",
    image: "/images/official/roof-and-more-logo.png",
    lead:
      "This draft terms page should be reviewed by legal counsel before production launch.",
    sections: [
      {
        title: "Estimator disclaimer",
        body:
          "Calculated values are preliminary estimates for planning purposes only. Final pricing is provided after site inspection, technical assessment, material selection and official quotation.",
      },
      {
        title: "Technical information",
        body:
          "Specifications, warranties, rates and material data should be verified by Roof & More before being used in contracts or purchase decisions.",
      },
    ],
    related: ["privacy-policy", "roofing-cost-estimator"],
  },
  sitemap: {
    title: "Sitemap",
    eyebrow: "Website index",
    description:
      "A full index of Roof & More pages, project pages, blog pages and lead-generation tools.",
    image: "/images/official/roof-and-more-dream-project-architecture.jpg",
    lead:
      "Use this index to navigate the complete redesigned website structure.",
    sections: [
      {
        title: "Main pages",
        items: [
          "Home",
          "About Us",
          "Services",
          "Projects",
          "Industries Served",
          "Experience",
          "Resources and Downloads",
          "Blog",
          "Contact Us",
        ],
      },
      {
        title: "Service pages",
        items: services.map((service) => service.title),
      },
    ],
    related: ["contact-us", "services"],
  },
  ...serviceRoutePages,
};

export const routeList = Object.keys(routePages);
