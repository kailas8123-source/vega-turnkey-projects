# Vega Turnkey Projects Website

A premium light-mode corporate website built from the supplied Vega template references in `stitch_vega_turnkey_corporate_website.zip` and the SEO/content direction in `Website Redesign Strategy.pdf`.

## What Is Included

- Responsive home page with SEO-focused hero copy, supplier proof points, product categories, service process, testimonials, and project inquiry form.
- Product catalog route with category filters for camp furniture, queue systems, waste bins, hospitality, and safety/PPE.
- Mission and values route with GDS-UAE positioning, mission, vision, values, and service advantages.
- Insights route with the strategy's mattress, recycling-bin, stanchion, and procurement blog topics.
- Working mobile navigation, quote modal, form confirmation toast, and hash-based routing.

## Asset Source

The provided template screenshots were copied to:

```text
public/assets/vega/references/
```

The site uses the Vega visual system from the template: Josefin Sans typography, paper/light surface palette, deep navy actions, fine draft-line borders, glassmorphic cards, and architectural product imagery. The content integrates the supplied UAE/GCC SEO terms, real contact details, and product category descriptions from the redesign strategy.

Official GDS-UAE logo, product category photos, service icons, and catalogue previews were mirrored into:

```text
assets/gds/
public/assets/gds/
```

The catalog item families now follow the public GDS-UAE product navigation for camp furniture, queue stanchions and flag poles, waste bins, hotel/event equipment, and safety/PPE.

## Run Locally

```bash
npm install
npm run dev
```

The local site runs at `http://127.0.0.1:5173`.
