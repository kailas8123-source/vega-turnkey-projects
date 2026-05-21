const images = {
  hero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAv-B9fFKVXdPLvk2wcBDSvSrDfsvVEUko3zXFVLpxAW7sPwsqPZ0EGHzzqVXygCI_wYg1qgC6ZDec_Am0tPKmpyZze-YirU0VtH-8NfDMGIhdStJ3xQBP_0AZZ3VyoyQ3VPk6jooJXUg7slWr6u6dyk8RyK48D1CJQRKItHeLqRkUhNxXNqWGcayeVzdW3Ht-X2tn1rNC4XCvpxs2Pj7BXYR5KZ2qaMbUo6g5M-vIPwqidtmqq5E1ds4FeEr20xldrJXL8E6L6mWNn",
  camp:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBAfNqEH2BtwHFKVY_OI1ukDQjAawP9eXZhac_sSli9QVqxe9QVtkU15RB4J3Nj8Ke59PX4qgn7YjhT9k0GXyvmJ3uWnIJBAGESfHV0gxUZNHjq2LJ8f9OBPshVpv-T-1Uudggzw0ENL5aLbmAm6XN0eQpXvNi0VsFOMNOkOmRj5JahvjHT9pVsh9WZJ2N3dpcgEErkmyXTodJQwQXrpo22yHzjZe0a-SH1ND2QwXD2I1c1rQqYSG64p81axR6lnovM--9fhym_ImMc",
  queue:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC_UNokX7iMFspcF2ELkmUGxjWVsKg6lUNwNsRJHh14nYt1b4aV1KTjiSRwjIHytJbGbZ-7RtP6BKNYq8qb0ztWBykl9vpkYrBf8nG3sgKO-0EQM7t3uY4dE0b_ijZwMvgdI-QZG4KGaF6Ixm6aXnb-P5nZLcyxYlnDV7xhyPWveb6LUB0030fxJRWI5oVEWxvTmTngkvRbmZraeO5lW1q3PRxK6WRQ3xyTxAlBAMBB7MKhp9UXO1Ol-9dzsDjWwb3A31HVblRQyEhk",
  waste:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDYDqtoBlqbcIVWjCYOGJtPQwgLh4ZnOnwaYzVCtObLW0F5eG612Padk4Y46wxPtNGrNMhC6TP8eEPYlnzOeuUhsi3yhiPQutYWrCYLZEFZKU1Fu91KeTXF7Ie-FW-UPgDZ6aB6FX4C1hKaOS62YJnmmUJvQCxSo6ZCkmdhJnZlDn7GbflQ6btBd9GRmcu4pNVkm2cxrl9WFdJM6z5J_mFjgBWWIpNoYvBZO5T39RIfm8n_tMFDkOUcxDgAWPvG83iwCWzzVDCPqiQ2",
  events:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCerqtkMK57r3PvfwN1OldZN0Zw__ne7YFSRtvDRD7xm13oBdXY5rJSAHLcV_riJCn3T2K8X7voteEHePzg_qWjO9t6bUHD-YGjHK4mflE8nRSqFoZLRSjAxkLQ3S20MBiICOwJB6D9sD-dOFRdz22HZa0eQGWfTsNQmtfTi_cjGcndSLHKDQkHMDl5ZUTH2uGW5i-wcO75vvB65pCCu0gKxroIxAVYjF56JMXCRvUz_mLC116gc8H7fiQRY-_DfiFo1ADGhvOrpe8n",
  logistics:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBt6DPgDn8jtgP9tjIdVvDLCp5YuK-8tnik_EpEG2TVPi9eps-C7JiD3gX9Xy5jFfjHzS5b_zqQE-e2Q0g3haE2xe7V5PQ7eh_ME_k47UgSAjVL-_vVZa9Ya59iBMguyTt8JUMlEHZgTQCRuEeWkCMeq_lyBv3qWiq84h_4l5Pk1b8IiEfra1mhu9ylAlokBvHaEPRpB0oTHM64QUTTokCRXF_ie39C5m13F6gZYxP-Kwo4fp9mQO6sUustBI6EyfJW_jyvvGdjrpRX",
  article:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBoslymSEROe_VuUDrtQHBtioDc_Ijte9fn2WDW-YwOQcS0gg9N_ERCEBxfmDOYUOdQUjG9a1uXvPL7OolMSQNHQyLgvYRDr7h34RdrXx1jK6SaPagG2rlOrdIQIgz_uZllQS-cij57As8SQMLvslh1PS-zZzWeF3c6EU5xOQY0B0LDdXt7lVfiZFsk_m_fc-n7RB-tRmx1u5iTiwI4tjiYpUmqXc4EIBzvs8fkKq9OY8feztLkYVD6KyaXh4sjCVw-_4Bvc-1AWwo0",
  sustainability:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ok6v79AX9JIoV_ITfB-jZ6qVuCCnWqkMQVBlCDWoFCJ9NYbcPA2NuUCLxgNrCvQcLBjK4hFg7ROrYqMItcqhsba0FkR-9dOLWkoCj-IC4K677jf0yvUswqnXnHORy12ACcCueK9XhoNtiKd_pPDxSpqx_T-3B2szH_0rBVCk6igAhxUt8lwlVOF2oXxyhb15TRHSXiFUpCjneu3CFVNk1et-PMeWR6n7qIrjr80k-vY2RQRoOclnhR3-_B7zO8VEKoZo1Pp3hJjr",
  stanchions:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBYhQ6yw2y8-dQyU3QvVPZBrk3DnWAIqc-GDXW3REaTd7khGPUt2vivPYqf9Y7Pb1PYtPkqMaLGHHn77N4_J4URGhkRBE3vPLXOPq-wxTfROAYdST4x99_O1iis970yLP8zq2EbGd_Wxlx5ZYxEe5riGH_8avdhZHHE-orHqmWSLx4IAUagsOQUuOvNK-JAmEuxeGDREvuuU4qHLzwzIzqjHRGOkoNWnFjEmp0Qc1sPhxTn4mJZg-PA9RboAlXuYpdfrfAekDszofjY",
  urban:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB9fzBRt7BEDK-MHB6mvntHhPX5vpcbm0_hgrMl8NeUn5-nk800pISNsLRwAM0L9PWd1UZ1Ai8vvcffIqrpEEGeK-ROs-PfNk0-iPxEwq3iSkV3t-DFiaguk6rFuY4yvEm5Xqfr4mfDsTIVOHRZnQY05D34PR7ir18h9EftYKgyL1SnFWTkHaXxOtWENhrdpOoYzcitv_mQ_At8awVO_r18zOQ9IB0l_ZlI_sg-gqijtQ56SjddwvnAkJjeFviT8Q7VfzMMXLD5Qjoe",
  gdsLogo: "/assets/gds/vega-gds-logo.png",
  gdsBunkBeds: "/assets/gds/steel-bunk-beds.webp",
  gdsWasteBins: "/assets/gds/waste-bins.webp",
  gdsQueue: "/assets/gds/queue-stanchions-flag-poles.webp",
  gdsCatalog1: "/assets/gds/vega-catalog-page-1.jpg",
  gdsCatalog2: "/assets/gds/vega-catalog-page-2.jpg",
  gdsQuality: "/assets/gds/quality.png",
  gdsDelivery: "/assets/gds/delivery.png",
  gdsCommitment: "/assets/gds/commitment.png",
  sceneCamp: "/assets/gds/hyperreal-camp-bunk-beds.png",
  sceneWaste: "/assets/gds/hyperreal-waste-bins.png",
  sceneQueue: "/assets/gds/hyperreal-queue-barriers.png",
  sceneHospitality: "/assets/gds/hyperreal-hospitality-equipment.png",
  sceneSafety: "/assets/gds/hyperreal-safety-ppe.png",
};

const coverageCities = ["UAE", "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "GCC", "Oman", "Qatar", "Bahrain", "Kuwait", "Saudi Arabia", "Nigeria"];

const navItems = [
  ["catalog", "Products"],
  ["mission", "About Us"],
  ["catalog", "Safety & PPE", "Safety Equipment"],
  ["blog", "Blog"],
];

const categories = [
  {
    key: "camp",
    title: "Camp Furniture & Appliances",
    tag: "Labour Camp",
    icon: "deck",
    material: "Camp Furniture",
    image: images.camp,
    sourceImage: images.sceneCamp,
    referenceImage: images.gdsBunkBeds,
    description:
      "A complete range of staff accommodation furniture in Dubai, built for durability, comfort, and fast deployment across UAE and GCC labour camps.",
    points: ["Steel and wooden bunk beds with anti-rust finishes", "Medicated mattresses, bedding, pillows, and linens", "Steel lockers, cabinets, office furniture, and appliances"],
    items: ["Bunk Bed", "Single Bed", "Steel Locker & Cabinet", "Mattress", "Blanket, Pillow & Bedsheet", "Office Furniture", "Appliances & Accessories", "Plastic Furniture", "Shoe Shining and Polishing Machines"],
    seo: "staff accommodation furniture Dubai, labour camp furniture supplier, bunk bed supplier UAE",
    cta: "Explore Camp Range",
  },
  {
    key: "queue",
    title: "Queue Stanchions & Flag Poles",
    tag: "Crowd Control",
    icon: "stadium",
    material: "Queue Systems",
    image: images.queue,
    sourceImage: images.sceneQueue,
    referenceImage: images.gdsQueue,
    description:
      "Queue barriers, VIP poles, rope barriers, flag poles, sign boards, and information stands for events, retail, hotels, and public venues.",
    points: ["Retractable barriers and VIP posts in multiple finishes", "Indoor and outdoor flag poles in aluminium and steel", "Police barriers, traffic barriers, and guided signage"],
    items: ["Flag Poles", "Retractable Barriers", "Police Barriers", "Ropes", "VIP Poles", "Sign Boards", "Traffic Barriers", "Metal Barriers", "Information Stands"],
    seo: "queue barriers Dubai, flag pole suppliers UAE, crowd control stanchions",
    cta: "View Designs",
  },
  {
    key: "waste",
    title: "Waste Bins & Recycling Solutions",
    tag: "Sustainable",
    icon: "delete",
    material: "Waste Bins",
    image: images.waste,
    sourceImage: images.sceneWaste,
    referenceImage: images.gdsWasteBins,
    description:
      "Indoor and outdoor waste bins, stainless-steel bins, plastic bins, recycling bins, wooden bins, and pole ashtrays for clean, efficient premises.",
    points: ["Polished stainless-steel bins for offices and hotel lobbies", "Colour-coded recycling bins with separate compartments", "Outdoor public-space bins with durable easy-clean bodies"],
    items: ["Stainless Steel Bin", "Office And Room Bin", "Plastic Bin", "Wooden Bin", "Pole Ashtray", "Outdoor Bin", "Recycle Bin"],
    seo: "waste bins supplier UAE, recycling bins Dubai, stainless steel bin supplier",
    cta: "Full Bin Collection",
  },
  {
    key: "events",
    title: "Hotels & Events Equipment",
    tag: "Hospitality",
    icon: "event",
    material: "Hospitality",
    image: images.events,
    sourceImage: images.sceneHospitality,
    referenceImage: images.gdsCatalog1,
    description:
      "Premium hotel equipment and hospitality supplies for furnished apartments, banquet venues, resorts, and event operators.",
    points: ["Rollaway beds, foldable beds, bellman trolleys, banquet tables, and chairs", "Bed and bath linens, towels, duvet covers, and hotel accessories", "Food serving trays, catering equipment, electronics, and housekeeping carts"],
    items: ["House Keeping Equipments", "Bed and Bath Linen", "Baby Changing Station", "Food Serving Trays", "Hotel Accessories", "Electronics", "Catering Equipment", "Rollaway Beds", "Bellman Trolleys"],
    seo: "hotel equipment supplier Dubai, banquet furniture UAE, hospitality supplies",
    cta: "Request Catalog",
  },
  {
    key: "safety",
    title: "Staff Accommodation & Safety Equipment",
    tag: "PPE & Road Safety",
    icon: "health_and_safety",
    material: "Safety Equipment",
    image: images.logistics,
    sourceImage: images.sceneSafety,
    referenceImage: images.gdsCatalog2,
    description:
      "Complete solutions for hotel staff accommodation, labour camps, executive housing, hostels, construction sites, and public events.",
    points: ["Safety shoes, helmets, gloves, and high-visibility clothing", "First-aid kits, safety gadgets, and workplace compliance essentials", "Road safety barriers, barricades, and traffic control equipment"],
    items: ["Safety Equipment & PPE", "Safety Shoes", "Helmets", "Gloves", "First-Aid Kits", "Road Safety Barriers", "Traffic Barriers", "Staff Accommodation Furniture"],
    seo: "PPE supplier UAE, labour camp equipment supplier, road safety barriers",
    cta: "Plan Safety Supply",
  },
];

const gdsProductGroups = categories.map(({ title, tag, items, referenceImage, sourceImage }) => ({
  title,
  tag,
  items,
  image: referenceImage || sourceImage,
}));

const values = [
  ["lightbulb", "Innovation", "Continual improvement and adoption of new solutions for accommodation, hospitality, and safety supply."],
  ["verified_user", "Accountability", "Transparent operations, dependable service, and clear ownership from enquiry to delivery."],
  ["handshake", "Honesty & Equity", "Ethical dealing, fair pricing, and recommendations matched to client budgets."],
  ["architecture", "Quality", "Durable commercial-grade products, certified safety gear, and anti-rust finishes."],
  ["inventory_2", "High Stock Availability", "A stockist model built for fast UAE and GCC deliveries across urgent project timelines."],
  ["speed", "Efficiency", "Streamlined product selection, supply, delivery, and installation for large-volume orders."],
];

const partnerLogos = [
  "Workland",
  "Zojirushi",
  "Windsor",
  "Victorinox",
  "Vaultex",
  "Tramontina",
  "Tefal",
  "Sunnex",
  "Sola",
  "Sanford",
  "Rocklander",
  "Raj",
  "Prestige",
  "Preethi",
  "Pradeep",
  "Pasabahce",
  "Optima",
  "Nikai",
  "Miller",
  "Luminarc",
  "Libbey",
  "Gurallar",
  "Geepas",
  "Elekta",
  "Cosmoplast",
  "Burco",
  "Braun",
  "Arcoroc",
].map((name) => ({
  name,
  image: `/assets/gds/partners/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`,
}));

const articles = [
  {
    category: "Camp Furniture",
    title: "How to Specify Bunk Beds and Lockers for GCC Labour Camps",
    image: images.sceneCamp,
    read: "7 min read",
    summary:
      "A practical checklist for bed frame strength, anti-rust coating, mattress sizing, locker placement, and delivery planning for high-occupancy staff accommodation.",
  },
  {
    category: "Waste Management",
    title: "Choosing the Right Waste and Recycling Bins for UAE Facilities",
    image: images.sceneWaste,
    read: "6 min read",
    summary:
      "How to select stainless-steel, plastic, wooden, outdoor, and colour-coded recycling bins for offices, hotels, public spaces, and camp facilities.",
  },
  {
    category: "Crowd Control",
    title: "Queue Barrier Planning for Hotels, Events, and Public Venues",
    image: images.sceneQueue,
    read: "4 min read",
    summary:
      "A practical guide to retractable barriers, VIP rope poles, police barriers, flag poles, and signage layouts that keep guest movement clear.",
  },
  {
    category: "Hospitality",
    title: "Hotel and Event Equipment Procurement for Fast Turnarounds",
    image: images.sceneHospitality,
    read: "8 min read",
    summary:
      "What to prepare before ordering rollaway beds, bellman trolleys, banquet furniture, linens, service trays, and housekeeping equipment.",
  },
  {
    category: "Safety & PPE",
    title: "Road Safety and PPE Essentials for UAE Site Mobilisation",
    image: images.sceneSafety,
    read: "5 min read",
    summary:
      "A procurement guide for safety shoes, helmets, gloves, first-aid kits, cones, barricades, and road barriers before teams arrive on site.",
  },
];

const paymentOptions = [
  { id: "visa", label: "Visa" },
  { id: "mastercard", label: "Mastercard" },
  { id: "bank", label: "Bank Transfer" },
  { id: "mamo", label: "Mamo Pay" },
  { id: "stripe", label: "Stripe" },
];

const socialLinks = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/share/jyn5NjY3ZyK2E6kx/?mibextid=LQQJ4d" },
  { id: "x", label: "X", href: "https://x.com/VEGADUBAI" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/thevegauae/?hl=en" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/the-vega-turnkey-projects-llc/" },
];

const serviceFeatures = [
  { icon: "verified", image: images.gdsQuality, title: "Quality products", text: "Commercial-grade materials, heavy-duty construction, and anti-rust bunk-bed finishes designed for demanding accommodation use." },
  { icon: "local_shipping", image: images.gdsDelivery, title: "Supply, delivery & install", text: "From product selection to supply, delivery, and installation, Vega keeps project execution coordinated and clear." },
  { icon: "handshake", image: images.gdsCommitment, title: "Commitment", text: "Professional support, dependable recommendations, and project handling matched to client budgets and timelines." },
  { icon: "history", title: "15+ years of experience", text: "A Dubai-based importer, stockist, and solution provider serving clients across the UAE and GCC." },
  { icon: "support_agent", title: "24/7 support", text: "A dedicated support hotline for urgent enquiries, quote requests, and project coordination." },
];

const metaByRoute = {
  home: "Vega Turnkey Projects - Dubai's leading supplier of labour-camp furniture, bunk beds, staff accommodation equipment, hotel supplies, queue barriers, flag poles and waste bins. Affordable prices, high stock and fast delivery across the UAE and GCC.",
  catalog: "Browse premium bunk beds, mattresses, queue barriers, flag poles, waste bins, recycling bins, hotel equipment, linens, PPE and road safety barriers from Vega Turnkey Projects in Dubai.",
  mission: "Learn about Vega Turnkey Projects, also known as GDS-UAE, a Dubai-based importer and stockist with 15+ years of experience in labour-camp furniture, safety workwear and crowd control solutions.",
  insights: "Read Vega Turnkey insights on medicated mattresses, recycling bins, crowd control stanchions, hotel safety barriers and project furniture selection in the UAE.",
  blog: "Read Vega Turnkey blog guides on GCC camp furniture, waste bins, queue barriers, hospitality equipment, safety PPE and UAE project procurement.",
};

const state = {
  route: location.hash.replace("#", "") || "home",
  material: "All",
  mobileOpen: false,
  modalOpen: false,
  notice: "",
};

let revealObserver = null;
let scrollProgressReady = false;

function go(route) {
  state.route = route;
  state.mobileOpen = false;
  location.hash = route === "home" ? "" : route;
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

function icon(name) {
  return `<span class="material-symbols-outlined" aria-hidden="true">${name}</span>`;
}

function navLink(route, label, filter = "") {
  const active =
    state.route === route || (route === "home" && state.route === "");
  return `<button class="nav-link ${active ? "active" : ""}" data-route="${route}" ${filter ? `data-filter="${filter}"` : ""}>${label}</button>`;
}

function header() {
  return `
    <header class="site-header">
      <div class="scroll-progress" aria-hidden="true"><span></span></div>
      <nav class="container nav-shell" aria-label="Primary navigation">
        <button class="brand" data-route="home" aria-label="Vega Turnkey home">
          <img class="brand-logo" src="${images.gdsLogo}" alt="The Vega Turnkey Projects LLC" />
          <span class="brand-name"><span>Vega Turnkey</span><small>GDS-UAE</small></span>
        </button>
        <div class="desktop-nav">${navItems.map(([route, label, filter]) => navLink(route, label, filter)).join("")}</div>
        <div class="header-actions">
          <button class="quote-button" data-open-quote>Request a Quote</button>
          <button class="menu-button" data-menu aria-label="Toggle menu">${icon(state.mobileOpen ? "close" : "menu")}</button>
        </div>
      </nav>
      <div class="mobile-panel ${state.mobileOpen ? "open" : ""}">
        ${navItems.map(([route, label, filter]) => navLink(route, label, filter)).join("")}
        <button class="quote-button wide" data-open-quote>Request a Quote</button>
      </div>
    </header>
  `;
}

function hero() {
  return `
    <section class="hero-section">
      <div class="pattern" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Dubai Stockist | UAE & GCC Delivery</span>
          <h1>Staff accommodation & hospitality solutions, <span>quality and safety for every project.</span></h1>
          <p>Vega Turnkey Projects LLC, also known as GDS-UAE, has spent over 15 years supplying durable labour-camp furniture, bunk beds, lockers, mattresses, hotel equipment, safety gear, queue barriers, flag poles, and waste bins across the UAE and GCC.</p>
          <div class="button-row">
            <button class="primary-button" data-open-quote>Request a Quote</button>
            <button class="secondary-button" data-route="catalog">Browse Products</button>
          </div>
        </div>
        <div class="hero-media glass-card">
          <img src="${images.hero}" alt="Modern glass architecture with precise steel framing" />
        </div>
      </div>
    </section>
  `;
}

function stats() {
  return `
    <section class="stats-band">
      <div class="container stats-grid">
        ${[
          ["15+", "Years Experience"],
          ["UAE", "Dubai Stockist"],
          ["GCC", "Regional Delivery"],
          ["24/7", "Support Hotline"],
        ]
          .map(([value, label]) => `<article class="stat-card glass-card"><strong>${value}</strong><span>${label}</span></article>`)
          .join("")}
      </div>
    </section>
  `;
}

function uaeSupplyBand() {
  return `
    <section class="section-space uae-band">
      <div class="container uae-grid">
        <div class="uae-copy">
          <span class="eyebrow gold">UAE Stockist Network</span>
          <h2>Dubai front office, Sharjah warehouse, GCC-ready dispatch.</h2>
          <p>Vega serves UAE procurement teams with ready stock for accommodation, hospitality, events, facility management, and road-safety projects, backed by local consultation and delivery coordination.</p>
          <div class="uae-flag-bars" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
          <div class="uae-chip-grid">
            ${coverageCities.map((city) => `<span class="uae-chip">${city}</span>`).join("")}
          </div>
        </div>
        <div class="source-panel glass-card">
          <div class="source-logo-wrap">
            <img class="source-logo" src="${images.gdsLogo}" alt="The Vega Turnkey Projects LLC" />
          </div>
          <div class="source-proof-grid">
            <article><strong>Karama, Dubai</strong><span>Office: Unique World Business Centre, Hamsah A Building</span></article>
            <article><strong>Sharjah Industrial Area 18</strong><span>Warehouse 12, Block 6, MAG Logistic Park</span></article>
          </div>
          <div class="catalog-preview-grid">
            <img class="catalog-preview" src="${images.gdsCatalog1}" alt="Vega product catalogue preview page one" />
            <img class="catalog-preview" src="${images.gdsCatalog2}" alt="Vega product catalogue preview page two" />
          </div>
        </div>
      </div>
    </section>
  `;
}

function partnerLogoCard(partner, duplicate = false) {
  return `
    <article class="partner-logo-card" ${duplicate ? 'aria-hidden="true"' : ""}>
      <img src="${partner.image}" alt="${duplicate ? "" : `${partner.name} partner logo`}" />
    </article>
  `;
}

function partnersSection() {
  const logoSet = partnerLogos.map((partner) => partnerLogoCard(partner)).join("");
  const duplicateSet = partnerLogos.map((partner) => partnerLogoCard(partner, true)).join("");

  return `
    <section class="section-space partners-section">
      <div class="container">
        <div class="section-head partners-head">
          <div>
            <span class="eyebrow gold">Our Partners</span>
            <h2>Global product brands represented across the GDS-UAE catalogue.</h2>
          </div>
          <p class="section-summary">Trusted supply relationships for hospitality, catering, facility management, staff accommodation, safety, and project procurement.</p>
        </div>
      </div>
      <div class="partner-marquee" role="list" aria-label="GDS-UAE partner logos">
        <div class="partner-track">
          ${logoSet}
          ${duplicateSet}
        </div>
      </div>
    </section>
  `;
}

function homeCategories() {
  return `
    <section class="section-space">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow gold">Our Specialties</span>
            <h2>Complete project supply, from bunk beds to barriers.</h2>
          </div>
          <button class="text-link" data-route="catalog">View Full Catalogue ${icon("arrow_forward")}</button>
        </div>
        <div class="bento-grid">
          ${categories
            .slice(0, 3)
            .map(
              (item, index) => `
                <article class="image-card glass-card ${index === 0 ? "feature" : ""}">
                  <img src="${item.sourceImage || item.image}" alt="${item.title}" />
                  <div class="image-card-copy">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="quick-category-grid">
          ${categories
            .slice(3)
            .map(
              (item) => `
                <article class="mini-category-card glass-card">
                  ${icon(item.icon)}
                  <div>
                    <span>${item.tag}</span>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function whyVega() {
  const serviceIcon = (feature) => feature.image
    ? `<img class="service-icon" src="${feature.image}" alt="" aria-hidden="true" />`
    : icon(feature.icon);
  return `
    <section class="section-space why-section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow gold">Why Vega</span>
            <h2>Built for price clarity, stock availability, and fast deliveries.</h2>
          </div>
          <p class="section-summary">The strategy is simple: low prices, broad selection, high stock availability, premium quality, and convenient project handling with no compromise on durability.</p>
        </div>
        <div class="feature-grid">
          ${serviceFeatures.map((feature) => `<article class="feature-card glass-card">${serviceIcon(feature)}<h3>${feature.title}</h3><p>${feature.text}</p></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function processPreview() {
  return `
    <section class="section-space process-section">
      <div class="container process-grid glass-card">
        <div>
          <span class="eyebrow">Service Process</span>
          <h2>From enquiry to delivery and installation.</h2>
          <p>Share quantities, site location, product specifications, finish preferences, and timeline. Vega's team confirms availability, recommends suitable options, prepares pricing, and coordinates supply through warehouse dispatch and installation support.</p>
          <div class="process-steps">
            <span>01 | Selection</span>
            <span>02 | Stock & customisation</span>
            <span>03 | Delivery & installation</span>
          </div>
        </div>
        <div class="process-media">
          <img src="${images.logistics}" alt="Organized warehouse and logistics process for Vega Turnkey project supply" />
        </div>
      </div>
    </section>
  `;
}

function testimonial() {
  return `
    <section class="section-space quote-section">
      <div class="container quote-grid glass-card">
        <div class="quote-mark">${icon("format_quote")}</div>
        <blockquote>
          Excellent service! Responsive, fast and cooperative throughout the process.
        </blockquote>
        <div class="quote-profile">
          <div class="avatar">GG</div>
          <div><strong>Goldenglory General Trading</strong><span>Google review, Aug 2024 | Trustindex verified</span></div>
        </div>
        <div class="secondary-quote">
          <p>"The team was incredibly helpful and understanding. I highly recommend buying from them."</p>
          <span>Maya Al Ali, Jul 2024</span>
        </div>
      </div>
    </section>
  `;
}

function blogPreview() {
  return `
    <section class="section-space blog-preview-section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow gold">Project Blog</span>
            <h2>Procurement notes for camps, venues, hotels, and UAE sites.</h2>
          </div>
          <button class="text-link" data-route="blog">Read All Posts ${icon("arrow_forward")}</button>
        </div>
        <div class="blog-preview-grid">
          ${articles.map(articleCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function deliveryVector() {
  return `
    <svg class="coverage-vector" viewBox="0 0 720 440" role="img" aria-label="Stylised UAE and GCC delivery route illustration">
      <defs>
        <linearGradient id="coverageSky" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.95" />
          <stop offset="1" stop-color="#f3f4f5" stop-opacity="0.82" />
        </linearGradient>
        <linearGradient id="coverageRoute" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#cca730" />
          <stop offset="0.52" stop-color="#00843d" />
          <stop offset="1" stop-color="#002046" />
        </linearGradient>
      </defs>
      <rect x="18" y="18" width="684" height="404" rx="44" fill="url(#coverageSky)" />
      <path d="M74 338 C164 246 230 270 307 198 C374 136 458 152 541 104 C590 75 638 77 672 48" fill="none" stroke="url(#coverageRoute)" stroke-width="8" stroke-linecap="round" stroke-dasharray="18 18" />
      <path d="M92 346h500" stroke="#c4c6cf" stroke-width="2" stroke-linecap="round" />
      <g fill="#002046" opacity="0.16">
        <path d="M132 246h34v100h-34zM178 214h42v132h-42zM234 268h58v78h-58zM305 238h34v108h-34zM350 186h52v160h-52zM415 264h64v82h-64z" />
        <path d="M524 130c26 42 42 86 42 132v84h-32v-74c0-40-12-79-34-117l24-25Z" />
        <path d="M591 178h30v168h-30zM631 234h24v112h-24z" />
      </g>
      <g class="coverage-marker" transform="translate(118 310)">
        <circle r="19" />
        <text x="0" y="5">DXB</text>
      </g>
      <g class="coverage-marker" transform="translate(276 220)">
        <circle r="19" />
        <text x="0" y="5">UAE</text>
      </g>
      <g class="coverage-marker gold" transform="translate(458 152)">
        <circle r="19" />
        <text x="0" y="5">GCC</text>
      </g>
      <g class="coverage-marker" transform="translate(626 82)">
        <circle r="19" />
        <text x="0" y="5">NG</text>
      </g>
      <g class="coverage-plane" transform="translate(506 108) rotate(-18)">
        <path d="M0 14 72 0 50 19l12 25-27-18-21 19 5-27L0 14Z" />
      </g>
      <g class="coverage-truck" transform="translate(128 330)">
        <rect x="0" y="-26" width="72" height="36" rx="8" />
        <rect x="72" y="-18" width="34" height="28" rx="6" />
        <circle cx="24" cy="16" r="9" />
        <circle cx="82" cy="16" r="9" />
      </g>
    </svg>
  `;
}

function deliveryCoverageSection() {
  const headline = "We supply all across UAE, Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, GCC, Oman, Qatar, Bahrain, Kuwait, Saudi Arabia, Nigeria";
  return `
    <section class="section-space delivery-coverage">
      <div class="container delivery-shell">
        <div class="delivery-hero">
          <div class="delivery-copy">
            <span class="eyebrow gold">Delivery Footprint</span>
            <h2>${headline}</h2>
            <p>From Dubai office coordination and Sharjah warehouse dispatch to GCC and international project supply, Vega keeps high-volume accommodation, hospitality, safety, and crowd-control orders moving.</p>
          </div>
          <div class="delivery-art glass-card">
            ${deliveryVector()}
          </div>
        </div>
        <div class="delivery-location-grid">
          ${coverageCities.map((city, index) => `<span class="delivery-location ${index < 2 ? "major" : ""}">${city}</span>`).join("")}
        </div>
        <div class="catalog-family-strip">
          <div>
            <span class="eyebrow">Official Catalogue Families</span>
            <strong>Items stocked for fast UAE and GCC project dispatch.</strong>
          </div>
          <div class="catalog-family-grid">
            ${categories.map((item) => `<article><span>${icon(item.icon)}</span><h3>${item.title}</h3><small>${item.items.slice(0, 3).join(" / ")}</small></article>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function contactSection() {
  return `
    <section class="section-space contact-section" id="contact">
      <div class="container contact-grid">
        <div>
          <span class="eyebrow">Project Intake</span>
          <h2>Request pricing for your UAE or GCC project.</h2>
          <p>Tell us the accommodation, hospitality, safety, or crowd-control products you need. Our team will confirm stock, recommend suitable options, and prepare personalised pricing.</p>
          <div class="contact-list">
            <span>${icon("location_on")} Office: M01-410 Corridor 14, Unique World Business Centre, Hamsah A Building, Karama, Dubai, UAE</span>
            <span>${icon("warehouse")} Warehouse 12, Block 6, MAG Logistic Park, Sharjah Industrial Area 18, UAE</span>
            <span>${icon("call")} +971 56 735 1095 | +971 56 931 0575 | +971 4 349 8999</span>
            <span>${icon("mail")} sales@thevegauae.com | admin@thevegauae.com</span>
          </div>
        </div>
        ${inquiryForm("Send Inquiry")}
      </div>
    </section>
  `;
}

function inquiryForm(buttonText = "Submit") {
  return `
    <form class="inquiry-form glass-card" data-form>
      <label>Name<input required name="name" placeholder="Your full name" /></label>
      <label>Email<input required name="email" type="email" placeholder="you@company.com" /></label>
      <label>Project Type
        <select name="type">
          <option>Camp Furniture</option>
          <option>Queue Stanchions</option>
          <option>Waste Bins</option>
          <option>Hotels & Events</option>
          <option>Staff Accommodation & Safety Equipment</option>
        </select>
      </label>
      <label>Brief<textarea name="brief" rows="4" placeholder="Timeline, quantities, destination, and material expectations"></textarea></label>
      <button class="primary-button" type="submit">${buttonText} ${icon("send")}</button>
    </form>
  `;
}

function homePage() {
  return `${hero()}${stats()}${uaeSupplyBand()}${partnersSection()}${homeCategories()}${whyVega()}${processPreview()}${blogPreview()}${testimonial()}${deliveryCoverageSection()}${contactSection()}`;
}

function catalogPage() {
  const filters = ["All", ...categories.map((item) => item.material)];
  const visible = categories.filter((item) => state.material === "All" || item.material === state.material);
  return `
    <section class="page-hero catalog-hero">
      <div class="container page-hero-grid">
        <div>
          <span class="eyebrow">Collections</span>
          <h1>Product Catalog</h1>
          <p>Labour camp furniture, staff accommodation equipment, hotel supplies, queue barriers, flag poles, waste bins, PPE, and road safety barriers stocked for fast UAE and GCC supply.</p>
        </div>
        <div class="icon-rail">
          ${categories.map((item) => `<button class="rail-icon" data-filter="${item.material}" aria-label="${item.title}">${icon(item.icon)}<span>${item.title}</span></button>`).join("")}
        </div>
      </div>
    </section>
    <section class="section-space compact">
      <div class="container catalog-layout">
        <aside class="filters glass-card">
          <h2>Filters</h2>
          <span class="filter-label">Category</span>
          <div class="filter-stack">
            ${filters.map((material) => `<button class="${state.material === material ? "selected" : ""}" data-filter="${material}">${material}</button>`).join("")}
          </div>
        </aside>
        <div class="catalog-list">
          ${visible.map(productCard).join("")}
        </div>
      </div>
    </section>
    ${gdsItemList()}
  `;
}

function gdsItemList() {
  return `
    <section class="section-space compact gds-items-section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow gold">GDS-UAE Product List</span>
            <h2>Item families reflected from the official GDS catalogue.</h2>
          </div>
          <p class="section-summary">Use this as the quick procurement scan before requesting a quote. Every group maps back to Vega's public GDS-UAE product navigation.</p>
        </div>
        <div class="gds-items-grid">
          ${gdsProductGroups.map((group) => `
            <article class="gds-item-card glass-card">
              <img src="${group.image}" alt="${group.title}" />
              <div>
                <span>${group.tag}</span>
                <h3>${group.title}</h3>
                <div class="item-pill-list">
                  ${group.items.map((item) => `<small>${item}</small>`).join("")}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function productCard(item) {
  const cardImage = item.sourceImage || item.image;
  return `
    <article class="product-card glass-card">
      <div class="product-image source-product-image"><img src="${cardImage}" alt="${item.title}" /></div>
      <div class="product-copy">
        <div class="product-meta"><span>${item.title}</span><small>${item.tag}</small></div>
        <p>${item.description}</p>
        <ul>${item.points.map((point) => `<li>${icon("check_circle")} ${point}</li>`).join("")}</ul>
        <div class="item-pill-list compact">${item.items.slice(0, 7).map((listedItem) => `<small>${listedItem}</small>`).join("")}</div>
        <div class="keyword-row">${item.seo}</div>
        <button class="text-link" data-open-quote>${item.cta} ${icon("arrow_forward")}</button>
      </div>
    </article>
  `;
}

function missionPage() {
  return `
    <section class="page-hero mission-hero">
      <div class="container narrow">
        <span class="eyebrow">Our Foundation</span>
        <h1>Mission, Vision & Core Values</h1>
        <p>Vega Turnkey Projects LLC is a Dubai-based importer, stockist, and complete solution provider for labour camp and staff accommodation furniture, safety workwear, PPE, crowd-control systems, hotel equipment, and public-space essentials.</p>
      </div>
    </section>
    <section class="section-space compact">
      <div class="container two-panel">
        <article class="glass-card principle-card">${icon("track_changes")}<h2>Our Mission</h2><p>To offer customers the lowest possible prices, best selection, high stock availability, fast deliveries, premium quality, and utmost convenience, with affordability and no compromise on quality.</p></article>
        <article class="glass-card principle-card">${icon("visibility")}<h2>Our Vision</h2><p>To become the most customer-centric provider of staff-accommodation and labour-camp furniture and safety workwear in the UAE and GCC.</p></article>
      </div>
    </section>
    <section class="section-space">
      <div class="container">
        <div class="section-head solo"><h2>The Pillars of Vega</h2></div>
        <div class="values-grid">
          ${values.map(([valueIcon, title, text]) => `<article class="value-card glass-card">${icon(valueIcon)}<h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section-space advantage-section">
      <div class="container advantage-grid">
        <div>
          <span class="eyebrow gold">Precision Logistics</span>
          <h2>The Vega Advantage</h2>
          <p>With capable infrastructure and an experienced team, Vega systematically executes projects to match requirements, budgets, and delivery schedules across the UAE and GCC.</p>
          <ul class="check-list">
            <li>${icon("check_circle")} Product selection, supply, delivery, and installation</li>
            <li>${icon("check_circle")} Large inventory with custom sizes, colours, and materials</li>
            <li>${icon("check_circle")} 24/7 support hotline: +971 56 735 1095</li>
          </ul>
          <div class="button-row"><button class="primary-button" data-open-quote>Start Your Inquiry</button><button class="secondary-button" data-route="catalog">Download Portfolio</button></div>
        </div>
        <img src="${images.logistics}" alt="Modern logistics warehouse with organized industrial shelving" />
      </div>
    </section>
  `;
}

function insightsPage() {
  return `
    <section class="featured-article">
      <div class="container featured-grid">
        <div class="featured-image"><img src="${articles[0].image}" alt="${articles[0].title}" /></div>
        <div class="featured-copy">
          <span class="eyebrow">Featured Blog</span>
          <h1>${articles[0].title}</h1>
          <p>${articles[0].summary}</p>
          <button class="primary-button">Read Perspective ${icon("arrow_right_alt")}</button>
        </div>
      </div>
    </section>
    <section class="section-space compact">
      <div class="container">
        <div class="section-head">
          <div><span class="eyebrow gold">Latest Blog Posts</span><h2>Five practical guides for GCC procurement teams.</h2></div>
          <div class="chip-row"><button>All</button><button>Camp</button><button>Waste</button><button>Events</button><button>Safety</button></div>
        </div>
        <div class="article-grid">
          ${articles.slice(1).map(articleCard).join("")}
        </div>
      </div>
    </section>
    <section class="section-space newsletter-section">
      <div class="container newsletter glass-card">
        <div><h2>Stay Ahead of the Curve.</h2><p>Receive product availability notes, project supply guides, and UAE hospitality and safety equipment insights directly in your inbox.</p><small>Curated for procurement teams and facility managers.</small></div>
        <form data-form class="newsletter-form"><input required type="email" placeholder="work@email.com" /><button class="primary-button">Subscribe</button></form>
      </div>
    </section>
  `;
}

function articleCard(article) {
  return `
    <article class="article-card glass-card">
      <img src="${article.image}" alt="${article.title}" />
      <div>
        <span>${article.category}</span>
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
        <small>${article.read} ${icon("north_east")}</small>
      </div>
    </article>
  `;
}

function socialIcon(id) {
  const icons = {
    facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8.6h2.1V5.2c-.4-.1-1.6-.2-3-.2-3 0-5.1 1.8-5.1 5.3v2.9H5v3.8h3.2V24h3.9v-7h3.3l.5-3.8h-3.8v-2.5c0-1.1.3-2.1 2.1-2.1Z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.8 10.3 21 2h-2.1l-6 6.9L8.1 2H2l7.6 10.8L2 22h2.1l6.5-7.6 5.2 7.6H22l-8.2-11.7Zm-2.3 2.6-.8-1.1-6.1-8.2h2.5l4.7 6.3.8 1.1 6.4 8.7h-2.5l-5-6.8Z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.4"/><circle cx="17.3" cy="6.8" r="1"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 8.9H3.1V21h3.6V8.9ZM4.9 3C3.8 3 3 3.8 3 4.8s.8 1.9 1.9 1.9 1.9-.8 1.9-1.9S6 3 4.9 3Zm16 10.9c0-3.4-1.8-5.2-4.4-5.2-2 0-2.9 1.1-3.4 1.9V8.9H9.6V21h3.6v-6.1c0-1.6.3-3.1 2.2-3.1s1.9 1.8 1.9 3.2v6h3.6v-7.1Z"/></svg>`,
  };

  return icons[id] || "";
}

function paymentBadge(option) {
  if (option.id === "mastercard") {
    return `
      <div class="payment-card payment-mastercard" aria-label="${option.label}">
        <span class="mastercard-mark"><i></i><i></i></span>
        <span>Mastercard</span>
      </div>
    `;
  }

  if (option.id === "bank") {
    return `
      <div class="payment-card payment-bank" aria-label="${option.label}">
        ${icon("account_balance")}
        <span>Bank<br />Transfer</span>
      </div>
    `;
  }

  if (option.id === "mamo") {
    return `
      <div class="payment-card payment-mamo" aria-label="${option.label}">
        <span class="mamo-mark"></span>
        <span>Mamo Pay</span>
      </div>
    `;
  }

  return `<div class="payment-card payment-${option.id}" aria-label="${option.label}"><span>${option.label}</span></div>`;
}

function footerTrust() {
  return `
    <div class="footer-trust">
      <span>Secure Payment Options</span>
      <div class="payment-grid">
        ${paymentOptions.map(paymentBadge).join("")}
      </div>
      <span>Social Media</span>
      <div class="social-row">
        ${socialLinks.map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer nofollow" aria-label="${link.label}" data-social="${link.id}">${socialIcon(link.id)}</a>`).join("")}
      </div>
      <form class="footer-form" data-form><span>Project Updates</span><div><input aria-label="Email" required type="email" placeholder="Email address" /><button>${icon("arrow_forward")}</button></div></form>
    </div>
  `;
}

function whatsappIcon() {
  return `
    <svg viewBox="0 0 448 512" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1C346.2 476.1 448 376.5 448 254.1c0-59.3-25.2-115.1-67.1-157Zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6Zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6Z" />
    </svg>
  `;
}

function floatingWhatsApp() {
  return `
    <a class="whatsapp-fab" href="https://wa.me/971567351095?text=Hello%20Vega%20Turnkey%20Projects%2C%20I%20would%20like%20a%20quote." target="_blank" rel="noopener noreferrer" aria-label="Chat with Vega Turnkey Projects on WhatsApp">
      ${whatsappIcon()}
      <span>WhatsApp</span>
    </a>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div><img class="footer-logo" src="${images.gdsLogo}" alt="The Vega Turnkey Projects LLC" /><strong>Vega Turnkey</strong><p>GDS-UAE supplier of labour-camp furniture, bunk beds, staff accommodation equipment, hotel supplies, queue barriers, flag poles, waste bins, PPE, and safety equipment.</p></div>
        <div><span>Products</span><button data-route="catalog">Camp Furniture</button><button data-route="catalog">Queue Barriers</button><button data-route="catalog">Waste Bins</button><button data-route="catalog">Hotels & Events</button><button data-route="catalog">Safety & PPE</button></div>
        <div><span>Company</span><button data-route="mission">About Us</button><button data-route="blog">Blog</button><button data-open-quote>Contact Support</button></div>
        ${footerTrust()}
      </div>
      <div class="container footer-bottom"><span>(c) 2026 Vega Turnkey Projects LLC. sales@thevegauae.com</span><span>Privacy Policy - Terms of Service</span></div>
    </footer>
  `;
}

function modal() {
  if (!state.modalOpen) return "";
  return `
    <div class="modal-backdrop">
      <div class="modal quote-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
        <button class="modal-close" data-close aria-label="Close">${icon("close")}</button>
        <div class="modal-intro">
          <span class="eyebrow">Quote Desk | +971 56 735 1095</span>
          <h2 id="quote-modal-title">Request a Quote</h2>
          <p>Share your product family, quantity, delivery destination, and timeline. Vega will confirm stock, recommend the right specification, and prepare pricing for UAE or GCC delivery.</p>
          <div class="modal-highlights">
            <span>${icon("inventory_2")} High-stock catalogue families</span>
            <span>${icon("local_shipping")} UAE and GCC dispatch</span>
            <span>${icon("support_agent")} 24/7 quote support</span>
          </div>
        </div>
        <div class="modal-form-panel">
          ${inquiryForm("Submit Request")}
        </div>
      </div>
    </div>
  `;
}

function notice() {
  return state.notice ? `<div class="toast">${state.notice}</div>` : "";
}

function routeMarkup() {
  if (state.route === "catalog") return catalogPage();
  if (state.route === "mission") return missionPage();
  if (state.route === "insights" || state.route === "blog") return insightsPage();
  return homePage();
}

function render() {
  const routeCoverage = state.route === "home" ? "" : deliveryCoverageSection();
  document.getElementById("app").innerHTML = `${header()}<main>${routeMarkup()}${routeCoverage}</main>${footer()}${floatingWhatsApp()}${modal()}${notice()}`;
  updateMeta();
  enhanceMotion();
  bindEvents();
}

function updateMeta() {
  const route = state.route || "home";
  const label = route === "blog" ? "Blog" : `${route[0].toUpperCase()}${route.slice(1)}`;
  document.title = route === "home"
    ? "Vega Turnkey Projects | Labour Camp Furniture Supplier in UAE"
    : `Vega Turnkey Projects | ${label}`;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", metaByRoute[route] || metaByRoute.home);
  }
}

function enhanceMotion() {
  updateScrollProgress();
  if (!scrollProgressReady) {
    scrollProgressReady = true;
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
  }

  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.toggle("motion-reduced", shouldReduceMotion);
  document.documentElement.classList.add("motion-ready");

  if (revealObserver) {
    revealObserver.disconnect();
  }

  const revealTargets = document.querySelectorAll([
    ".hero-copy",
    ".hero-media",
    ".stat-card",
    ".section-head",
    ".image-card",
    ".mini-category-card",
    ".feature-card",
    ".uae-copy",
    ".source-panel",
    ".uae-chip",
    ".partners-head",
    ".partner-logo-card",
    ".gds-item-card",
    ".process-grid",
    ".quote-grid",
    ".contact-grid > *",
    ".product-card",
    ".principle-card",
    ".value-card",
    ".advantage-grid > *",
    ".featured-grid > *",
    ".article-card",
    ".blog-preview-grid",
    ".delivery-copy",
    ".delivery-art",
    ".delivery-location",
    ".catalog-family-strip",
    ".catalog-family-grid > *",
    ".newsletter",
    ".footer-grid > *",
  ].join(","));

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-item");
    element.style.setProperty("--reveal-order", String(index % 6));
  });

  if (shouldReduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

  revealTargets.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      element.classList.add("is-visible");
      return;
    }
    revealObserver.observe(element);
  });
}

function updateScrollProgress() {
  const progress = document.querySelector(".scroll-progress span");
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  progress.style.transform = `scaleX(${value})`;
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.route === "catalog" && !button.dataset.filter) {
        state.material = "All";
      }
      go(button.dataset.route);
    });
  });
  document.querySelectorAll("[data-menu]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mobileOpen = !state.mobileOpen;
      render();
    });
  });
  document.querySelectorAll("[data-open-quote]").forEach((button) => {
    button.addEventListener("click", () => {
      state.modalOpen = true;
      render();
    });
  });
  document.querySelectorAll("[data-close], .modal-backdrop").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target === element || element.hasAttribute("data-close")) {
        state.modalOpen = false;
        render();
      }
    });
  });
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.material = button.dataset.filter;
      state.route = "catalog";
      render();
    });
  });
  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      state.notice = "Thanks. Vega's team will respond within 24 hours.";
      state.modalOpen = false;
      render();
      setTimeout(() => {
        state.notice = "";
        render();
      }, 2800);
    });
  });
}

window.addEventListener("hashchange", () => {
  state.route = location.hash.replace("#", "") || "home";
  render();
});

render();
