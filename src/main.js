const imageBase = "https://images.pexels.com/photos";

const products = [
  {
    id: "kanjeevaram-sunrise",
    name: "Kanjeevaram Sunrise Silk Saree",
    category: "Sarees",
    fabric: "Silk",
    occasion: "Wedding",
    price: 18900,
    oldPrice: 22900,
    rating: 4.9,
    badge: "Bestseller",
    color: "Marigold",
    material: "Pure silk",
    image: `${imageBase}/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=900`,
    gallery: [
      `${imageBase}/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=900`,
      `${imageBase}/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=900`,
      `${imageBase}/37054325/pexels-photo-37054325.jpeg?auto=compress&cs=tinysrgb&w=900`,
    ],
    description:
      "A luminous silk drape with zari borders, made for ceremonial mornings and intimate festive evenings.",
  },
  {
    id: "ivory-zari-drape",
    name: "Ivory Zari Handloom Saree",
    category: "Sarees",
    fabric: "Handloom",
    occasion: "Festive",
    price: 12950,
    oldPrice: 14950,
    rating: 4.8,
    badge: "New",
    color: "Ivory",
    material: "Cotton silk",
    image: `${imageBase}/37054325/pexels-photo-37054325.jpeg?auto=compress&cs=tinysrgb&w=900`,
    gallery: [
      `${imageBase}/37054325/pexels-photo-37054325.jpeg?auto=compress&cs=tinysrgb&w=900`,
      `${imageBase}/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=900`,
      `${imageBase}/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=900`,
    ],
    description:
      "An airy ivory handloom piece finished with soft gold detailing and a poised, heirloom feel.",
  },
  {
    id: "gulabi-paithani",
    name: "Gulabi Paithani Celebration Saree",
    category: "Sarees",
    fabric: "Silk",
    occasion: "Festive",
    price: 16900,
    oldPrice: 19900,
    rating: 4.7,
    badge: "Sale",
    color: "Rose",
    material: "Silk blend",
    image: `${imageBase}/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=900`,
    gallery: [
      `${imageBase}/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=900`,
      `${imageBase}/37054325/pexels-photo-37054325.jpeg?auto=compress&cs=tinysrgb&w=900`,
      `${imageBase}/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=900`,
    ],
    description:
      "A vivid rose and saffron saree with festive contrast borders and a confident celebratory silhouette.",
  },
  {
    id: "temple-necklace",
    name: "Temple Gold Necklace Set",
    category: "Jewellery",
    fabric: "Gold plated",
    occasion: "Wedding",
    price: 7800,
    oldPrice: 9200,
    rating: 4.9,
    badge: "Trending",
    color: "Antique gold",
    material: "Gold plated brass",
    image: `${imageBase}/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=900`,
    gallery: [
      `${imageBase}/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=900`,
      `${imageBase}/37054325/pexels-photo-37054325.jpeg?auto=compress&cs=tinysrgb&w=900`,
    ],
    description:
      "A layered temple-inspired set designed to sit beautifully against silk borders and bridal blouses.",
  },
  {
    id: "meenakari-earrings",
    name: "Meenakari Drop Earrings",
    category: "Jewellery",
    fabric: "Meenakari",
    occasion: "Daily",
    price: 2450,
    oldPrice: 0,
    rating: 4.6,
    badge: "New",
    color: "Ruby",
    material: "Enamel and brass",
    image: `${imageBase}/37054325/pexels-photo-37054325.jpeg?auto=compress&cs=tinysrgb&w=900`,
    gallery: [
      `${imageBase}/37054325/pexels-photo-37054325.jpeg?auto=compress&cs=tinysrgb&w=900`,
      `${imageBase}/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=900`,
    ],
    description:
      "Lightweight enamel earrings with jewel-toned detail for repeat wear beyond wedding wardrobes.",
  },
  {
    id: "banarasi-maroon",
    name: "Banarasi Maroon Heirloom Saree",
    category: "Sarees",
    fabric: "Banarasi",
    occasion: "Wedding",
    price: 21400,
    oldPrice: 25800,
    rating: 5,
    badge: "Limited",
    color: "Maroon",
    material: "Banarasi silk",
    image: `${imageBase}/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=900&sat=-35`,
    gallery: [
      `${imageBase}/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=900&sat=-35`,
      `${imageBase}/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=900`,
    ],
    description:
      "A rich maroon Banarasi saree with ceremonial weight, designed as a future family keepsake.",
  },
  {
    id: "sage-linen-saree",
    name: "Sage Linen Saree",
    category: "Sarees",
    fabric: "Linen",
    occasion: "Daily",
    price: 6950,
    oldPrice: 0,
    rating: 4.5,
    badge: "Conscious",
    color: "Sage",
    material: "Linen cotton",
    image: `${imageBase}/37054325/pexels-photo-37054325.jpeg?auto=compress&cs=tinysrgb&w=900&sat=-45`,
    gallery: [
      `${imageBase}/37054325/pexels-photo-37054325.jpeg?auto=compress&cs=tinysrgb&w=900&sat=-45`,
      `${imageBase}/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=900`,
    ],
    description:
      "A breathable everyday drape with soft hand-feel, quiet color, and hand-finished edges.",
  },
  {
    id: "pearl-choker",
    name: "Pearl Polki Choker",
    category: "Jewellery",
    fabric: "Polki",
    occasion: "Festive",
    price: 5400,
    oldPrice: 6400,
    rating: 4.8,
    badge: "Bestseller",
    color: "Pearl",
    material: "Polki and pearls",
    image: `${imageBase}/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=900`,
    gallery: [
      `${imageBase}/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=900`,
      `${imageBase}/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=900`,
    ],
    description:
      "A close-set festive choker that frames the neckline without overpowering the saree.",
  },
];

const artisans = [
  ["Meera Joshi", "Banarasi finishing", "24 years"],
  ["Rekha Pawar", "Zari inspection", "18 years"],
  ["Nasreen Khan", "Jewellery setting", "15 years"],
];

const state = {
  route: "home",
  category: "All",
  fabric: "All",
  occasion: "All",
  sort: "Featured",
  visible: 6,
  cart: JSON.parse(localStorage.getItem("kacheri-cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("kacheri-wishlist") || "[]"),
  selectedProductId: null,
  selectedGalleryIndex: 0,
  selectedTab: "Description",
  cartOpen: false,
  mobileMenu: false,
};

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function saveState() {
  localStorage.setItem("kacheri-cart", JSON.stringify(state.cart));
  localStorage.setItem("kacheri-wishlist", JSON.stringify(state.wishlist));
}

function getCartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product?.price || 0) * item.qty;
  }, 0);
}

function setRoute(route) {
  state.route = route;
  state.mobileMenu = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

function addToCart(id, qty = 1) {
  const item = state.cart.find((entry) => entry.id === id);
  if (item) {
    item.qty += qty;
  } else {
    state.cart.push({ id, qty });
  }
  state.cartOpen = true;
  saveState();
  render();
}

function updateCart(id, qty) {
  state.cart = qty <= 0 ? state.cart.filter((item) => item.id !== id) : state.cart.map((item) => (item.id === id ? { ...item, qty } : item));
  saveState();
  render();
}

function toggleWishlist(id) {
  state.wishlist = state.wishlist.includes(id)
    ? state.wishlist.filter((entry) => entry !== id)
    : [...state.wishlist, id];
  saveState();
  render();
}

function openProduct(id) {
  state.selectedProductId = id;
  state.selectedGalleryIndex = 0;
  state.selectedTab = "Description";
  render();
}

function closeProduct() {
  state.selectedProductId = null;
  render();
}

function getFilteredProducts() {
  let result = [...products];
  if (state.category !== "All") result = result.filter((item) => item.category === state.category);
  if (state.fabric !== "All") result = result.filter((item) => item.fabric === state.fabric);
  if (state.occasion !== "All") result = result.filter((item) => item.occasion === state.occasion);
  if (state.sort === "Price: Low to High") result.sort((a, b) => a.price - b.price);
  if (state.sort === "Price: High to Low") result.sort((a, b) => b.price - a.price);
  if (state.sort === "Rating") result.sort((a, b) => b.rating - a.rating);
  return result;
}

function productCard(product) {
  const wished = state.wishlist.includes(product.id);
  return `
    <article class="product-card">
      <button class="wish-button" data-action="wishlist" data-id="${product.id}" aria-label="${wished ? "Remove from" : "Add to"} wishlist">${wished ? "Saved" : "Save"}</button>
      <button class="product-image" data-action="open-product" data-id="${product.id}" aria-label="View ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="quick-add">View Details</span>
      </button>
      <div class="product-info">
        <div class="product-meta">
          <span class="badge">${product.badge}</span>
          <span>${product.rating.toFixed(1)} / 5</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.material} &middot; ${product.occasion}</p>
        <div class="price-row">
          <strong>${formatPrice(product.price)}</strong>
          ${product.oldPrice ? `<s>${formatPrice(product.oldPrice)}</s>` : ""}
        </div>
        <button class="solid-button small" data-action="add-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    </article>
  `;
}

function header() {
  const routes = ["home", "shop", "about", "contact"];
  return `
    <header class="site-header">
      <a class="brand" href="#" data-route="home" aria-label="Kacheri Sarees home">
        <span>K</span>
        <strong>Kacheri Sarees</strong>
      </a>
      <button class="menu-button" data-action="toggle-menu" aria-label="Open menu">Menu</button>
      <nav class="${state.mobileMenu ? "open" : ""}" aria-label="Main navigation">
        ${routes.map((route) => `<a href="#" data-route="${route}" class="${state.route === route ? "active" : ""}">${route}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <button class="icon-link" data-route="shop" aria-label="Wishlist">Save<span>${state.wishlist.length}</span></button>
        <button class="cart-button" data-action="cart-open" aria-label="Open cart">Bag <span>${getCartCount()}</span></button>
      </div>
    </header>
  `;
}

function homePage() {
  const featured = products.slice(0, 4);
  return `
    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="section-label">Mumbai atelier &middot; Handcrafted heirlooms</p>
          <h1>Kacheri Sarees</h1>
          <p>Handcrafted sarees and jewellery selected for ceremonies, festivals, and graceful everyday rituals.</p>
          <div class="hero-actions">
            <button class="solid-button" data-route="shop">Shop Collection</button>
            <button class="ghost-button" data-route="about">Our Story</button>
          </div>
        </div>
        <div class="hero-media">
          <img src="${products[0].image}" alt="Woman wearing a yellow silk saree and jewellery" />
          <div class="hero-card">
            <strong>Festive edit</strong>
            <span>Burnished silks, temple jewellery, and hand-finished keepsakes.</span>
          </div>
        </div>
      </section>

      <section class="motif-divider" aria-hidden="true"></section>

      <section class="trust-strip" aria-label="Shopping benefits">
        ${["Free shipping over Rs. 5,000", "Secure payments", "7-day easy returns", "Handcrafted pieces"].map((item) => `<span>${item}</span>`).join("")}
      </section>

      <section class="category-showcase">
        <button class="category-card saree-card" data-filter-category="Sarees">
          <span>Sarees</span>
          <strong>Silks, linens, Banarasi weaves</strong>
        </button>
        <button class="category-card jewellery-card" data-filter-category="Jewellery">
          <span>Jewellery</span>
          <strong>Temple, polki, enamel accents</strong>
        </button>
      </section>

      <section class="section-shell">
        <div class="section-heading">
          <p class="section-label">New arrivals</p>
          <h2>Pieces with a sense of occasion.</h2>
          <button class="text-button" data-route="shop">View all</button>
        </div>
        <div class="product-grid">${featured.map(productCard).join("")}</div>
      </section>

      <section class="promo-banner">
        <div>
          <p class="section-label">Akshaya edit</p>
          <h2>Up to 20% off ceremonial silks</h2>
          <p>Ends in <strong id="countdown">02d 14h 22m</strong></p>
        </div>
        <button class="solid-button light" data-route="shop">Explore Sale</button>
      </section>

      <section class="story-band">
        <img src="${products[1].image}" alt="Ivory handcrafted saree with gold jewellery" loading="lazy" />
        <div>
          <p class="section-label">The Kacheri Sarees promise</p>
          <h2>Every drape is selected with the maker in mind.</h2>
          <p>We work with craft clusters and finishing specialists around India, then curate each saree and ornament from our Mumbai studio for fit, finish, and longevity.</p>
          <button class="ghost-button" data-route="about">Meet the artisans</button>
        </div>
      </section>

      <section class="instagram-grid" aria-label="Gallery">
        ${products.slice(0, 6).map((product) => `<img src="${product.image}" alt="${product.name}" loading="lazy" />`).join("")}
      </section>

      ${newsletter()}
    </main>
  `;
}

function shopPage() {
  const fabrics = ["All", ...new Set(products.map((item) => item.fabric))];
  const occasions = ["All", ...new Set(products.map((item) => item.occasion))];
  const filtered = getFilteredProducts();
  return `
    <main>
      <section class="page-hero compact">
      <p class="section-label">Shop Kacheri Sarees</p>
        <h1>Browse sarees and jewellery</h1>
      </section>
      <section class="filter-bar">
        ${selectControl("category", ["All", "Sarees", "Jewellery"], state.category, "Category")}
        ${selectControl("fabric", fabrics, state.fabric, "Fabric")}
        ${selectControl("occasion", occasions, state.occasion, "Occasion")}
        ${selectControl("sort", ["Featured", "Price: Low to High", "Price: High to Low", "Rating"], state.sort, "Sort")}
      </section>
      <section class="section-shell">
        <div class="shop-summary">
          <span>${filtered.length} pieces</span>
          <button class="text-button" data-action="reset-filters">Reset filters</button>
        </div>
        <div class="product-grid">${filtered.slice(0, state.visible).map(productCard).join("")}</div>
        ${
          filtered.length > state.visible
            ? `<div class="load-more"><button class="ghost-button" data-action="load-more">Load More</button></div>`
            : ""
        }
      </section>
      <section class="trust-strip bottom">
        <span>UPI, cards, Paytm, Apple Pay</span>
        <span>WhatsApp order support</span>
        <span>Quality checked in Mumbai</span>
      </section>
    </main>
  `;
}

function selectControl(name, options, value, label) {
  return `
    <label>
      <span>${label}</span>
      <select data-filter="${name}">
        ${options.map((option) => `<option value="${option}" ${option === value ? "selected" : ""}>${option}</option>`).join("")}
      </select>
    </label>
  `;
}

function aboutPage() {
  return `
    <main>
      <section class="page-hero about-hero">
        <div>
          <p class="section-label">About Kacheri Sarees</p>
          <h1>Heritage craft, edited for today.</h1>
        </div>
        <img src="${products[2].image}" alt="Festive saree portrait" />
      </section>
      <section class="story-band reverse">
        <img src="${products[0].image}" alt="Kacheri Sarees silk saree styling" loading="lazy" />
        <div>
          <p class="section-label">Origin</p>
          <h2>Built from Mumbai, shaped by Indian craft networks.</h2>
          <p>Kacheri Sarees began as a private curation service for wedding families and festive wardrobes. The storefront keeps that personal eye while making the experience smoother, searchable, and ready for gifting.</p>
        </div>
      </section>
      <section class="section-shell">
        <div class="section-heading">
          <p class="section-label">Artisans</p>
          <h2>The hands behind the finish.</h2>
        </div>
        <div class="artisan-grid">
          ${artisans.map(([name, craft, years]) => `<article><strong>${name}</strong><span>${craft}</span><p>${years} experience</p></article>`).join("")}
        </div>
      </section>
      <section class="values-grid">
        ${["Authentic sourcing", "Sustainable care", "Fair trade relationships"].map((item) => `<article><h3>${item}</h3><p>Every collection decision is made for traceability, craft continuity, and long-term wardrobe value.</p></article>`).join("")}
      </section>
    </main>
  `;
}

function contactPage() {
  return `
    <main>
      <section class="page-hero compact">
        <p class="section-label">Contact</p>
        <h1>Visit, write, or message the studio.</h1>
      </section>
      <section class="contact-layout">
        <form class="contact-form" data-form="contact">
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
          <label>Message<textarea required name="message" placeholder="Tell us what you are looking for"></textarea></label>
          <button class="solid-button" type="submit">Send Message</button>
          <p class="form-status" id="contactStatus"></p>
        </form>
        <aside class="contact-cards">
          <article><strong>Email</strong><span>hello@kacherisarees.in</span></article>
          <article><strong>Phone</strong><span>+91 72086 98768</span></article>
          <article><strong>WhatsApp</strong><span>Personal styling and order support</span></article>
          <article><strong>Studio</strong><span>Bandra West, Mumbai</span></article>
        </aside>
      </section>
      <section class="faq" aria-label="Frequently asked questions">
        ${["Do you offer blouse stitching?", "How long does delivery take?", "Can I book a studio appointment?"]
          .map((question, index) => `<details ${index === 0 ? "open" : ""}><summary>${question}</summary><p>Yes. The team will confirm measurements, delivery timelines, and styling options directly after your order or enquiry.</p></details>`)
          .join("")}
      </section>
      ${newsletter()}
    </main>
  `;
}

function newsletter() {
  return `
    <section class="newsletter">
      <p class="section-label">Kacheri Sarees letters</p>
      <h2>New drapes, artisan notes, and private sale previews.</h2>
      <form data-form="newsletter">
        <input type="email" required placeholder="Email address" aria-label="Email address" />
        <button class="solid-button" type="submit">Join</button>
      </form>
      <p class="form-status" id="newsletterStatus"></p>
    </section>
  `;
}

function productModal() {
  const product = products.find((item) => item.id === state.selectedProductId);
  if (!product) return "";
  const image = product.gallery[state.selectedGalleryIndex] || product.image;
  const tabs = {
    Description: product.description,
    Reviews: "Loved for its finish, color richness, and comfortable drape. Average rating: " + product.rating.toFixed(1) + " / 5.",
    Shipping: "Ships in 2-5 business days across India. Express delivery is available for Mumbai orders.",
    Care: "Dry clean preferred. Store folded in muslin and air the garment before long storage.",
  };
  return `
    <div class="modal-backdrop" data-action="close-product">
      <section class="product-modal" role="dialog" aria-modal="true" aria-label="${product.name}">
        <button class="close-button" data-action="close-product" aria-label="Close">Close</button>
        <div class="detail-gallery">
          <div class="zoom-image" style="background-image: url('${image}')">
            <img src="${image}" alt="${product.name}" />
          </div>
          <div class="thumb-row">
            ${product.gallery.map((galleryImage, index) => `<button class="${index === state.selectedGalleryIndex ? "active" : ""}" data-action="gallery" data-index="${index}"><img src="${galleryImage}" alt="${product.name} view ${index + 1}" /></button>`).join("")}
          </div>
        </div>
        <div class="detail-info">
          <span class="badge">${product.badge}</span>
          <h2>${product.name}</h2>
          <p>${product.rating.toFixed(1)} / 5 &middot; ${product.category}</p>
          <div class="price-row detail"><strong>${formatPrice(product.price)}</strong>${product.oldPrice ? `<s>${formatPrice(product.oldPrice)}</s>` : ""}</div>
          <div class="variant-row">
            <span>Color</span>
            <button class="swatch" style="--swatch:${swatchColor(product.color)}" aria-label="${product.color}"></button>
            <strong>${product.color}</strong>
          </div>
          <div class="variant-row">
            <span>Material</span>
            <button class="pill active">${product.material}</button>
          </div>
          <button class="solid-button wide" data-action="add-cart" data-id="${product.id}">Add to Cart</button>
          <div class="modal-trust"><span>Secure checkout</span><span>Easy returns</span><span>Gift wrap</span></div>
          <div class="tabs">
            ${Object.keys(tabs).map((tab) => `<button class="${tab === state.selectedTab ? "active" : ""}" data-action="tab" data-tab="${tab}">${tab}</button>`).join("")}
          </div>
          <p class="tab-copy">${tabs[state.selectedTab]}</p>
        </div>
      </section>
    </div>
  `;
}

function swatchColor(color) {
  return {
    Marigold: "#c9a13b",
    Ivory: "#fff3df",
    Rose: "#d4a5a5",
    "Antique gold": "#a87932",
    Ruby: "#8c2637",
    Maroon: "#6b2d2d",
    Sage: "#8fa38a",
    Pearl: "#f4eadb",
  }[color] || "#d4a5a5";
}

function cartDrawer() {
  const rows = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return "";
      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <strong>${product.name}</strong>
            <span>${formatPrice(product.price)}</span>
            <div class="qty-row">
              <button data-action="cart-qty" data-id="${product.id}" data-qty="${item.qty - 1}" aria-label="Decrease quantity">-</button>
              <span>${item.qty}</span>
              <button data-action="cart-qty" data-id="${product.id}" data-qty="${item.qty + 1}" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  return `
    <aside class="cart-drawer ${state.cartOpen ? "open" : ""}" aria-label="Shopping cart">
      <div class="drawer-header">
        <strong>Your Bag</strong>
        <button data-action="cart-close" aria-label="Close cart">Close</button>
      </div>
      <div class="cart-list">${rows || `<p class="empty-cart">Your bag is ready for something beautiful.</p>`}</div>
      <div class="cart-footer">
        <div><span>Subtotal</span><strong>${formatPrice(getCartTotal())}</strong></div>
        <button class="solid-button wide" ${state.cart.length ? "" : "disabled"}>Checkout</button>
      </div>
    </aside>
    <button class="drawer-scrim ${state.cartOpen ? "open" : ""}" data-action="cart-close" aria-label="Close cart overlay"></button>
  `;
}

function render() {
  const pages = {
    home: homePage,
    shop: shopPage,
    about: aboutPage,
    contact: contactPage,
  };
  document.querySelector("#app").innerHTML = `
    ${header()}
    ${pages[state.route]()}
    ${cartDrawer()}
    ${productModal()}
    <footer class="site-footer">
      <strong>Kacheri Sarees</strong>
      <span>Handcrafted sarees and jewellery &middot; Mumbai</span>
    </footer>
  `;
  tickCountdown();
}

function tickCountdown() {
  const element = document.querySelector("#countdown");
  if (!element) return;
  const end = new Date();
  end.setDate(end.getDate() + 2);
  end.setHours(23, 59, 0, 0);
  const diff = Math.max(0, end.getTime() - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  element.textContent = `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m`;
}

document.addEventListener("click", (event) => {
  const routeTarget = event.target.closest("[data-route]");
  if (routeTarget) {
    event.preventDefault();
    setRoute(routeTarget.dataset.route);
    return;
  }

  const categoryTarget = event.target.closest("[data-filter-category]");
  if (categoryTarget) {
    state.category = categoryTarget.dataset.filterCategory;
    state.route = "shop";
    state.visible = 6;
    render();
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  const { action, id } = actionTarget.dataset;

  if (action === "toggle-menu") {
    state.mobileMenu = !state.mobileMenu;
    render();
  }
  if (action === "cart-open") {
    state.cartOpen = true;
    render();
  }
  if (action === "cart-close") {
    state.cartOpen = false;
    render();
  }
  if (action === "add-cart") addToCart(id);
  if (action === "wishlist") toggleWishlist(id);
  if (action === "open-product") openProduct(id);
  if (action === "close-product" && (event.target === actionTarget || actionTarget.classList.contains("close-button"))) closeProduct();
  if (action === "gallery") {
    state.selectedGalleryIndex = Number(actionTarget.dataset.index) || 0;
    render();
  }
  if (action === "tab") {
    state.selectedTab = actionTarget.dataset.tab;
    render();
  }
  if (action === "cart-qty") updateCart(id, Number(actionTarget.dataset.qty));
  if (action === "load-more") {
    state.visible += 4;
    render();
  }
  if (action === "reset-filters") {
    state.category = "All";
    state.fabric = "All";
    state.occasion = "All";
    state.sort = "Featured";
    state.visible = 6;
    render();
  }
});

document.addEventListener("change", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (!filter) return;
  state[filter.dataset.filter] = filter.value;
  state.visible = 6;
  render();
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form");
  if (!form) return;
  event.preventDefault();
  const status = form.dataset.form === "contact" ? document.querySelector("#contactStatus") : document.querySelector("#newsletterStatus");
  if (status) status.textContent = form.dataset.form === "contact" ? "Thanks. The studio will reply shortly." : "You are on the Kacheri Sarees list.";
  form.reset();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    state.selectedProductId = null;
    state.cartOpen = false;
    render();
  }
});

render();
setInterval(tickCountdown, 60000);
