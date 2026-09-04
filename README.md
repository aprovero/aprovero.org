# aprovero.org

> **"Engineering that survives contact with the field."**

Personal website and technical journal for **Andres Provero**—Electronics Engineer and Technical Operations Leader based in Mexico City.

The site is built with **Astro 5**, **TypeScript**, and **Tailwind CSS**. It is statically pre-rendered with zero client-side JavaScript overhead by default and engineered to run on self-hosted homelab infrastructure.

---

## Architecture & Design Philosophy

- **Editorial, not a dashboard**: Long-form narrative structure inspired by technical publications and engineering logs rather than generic portfolio card grids.
- **Brand System built around APROVERO**: The visual identity, typography, and palette originate directly from the `APROVERO` brand mark, anchored by charcoal text and the signature mint-teal dot (`#00D3A5`).
- **Field Credibility through Specificity**: Projects are presented as detailed case studies addressing real-world field constraints (high-ambient desert heat, tropical humidity, grid code parameterization, inverter resonance, and battery safety) rather than generic skill lists.
- **Confidentiality by Design**: Designed to share actionable engineering methodology while deliberately omitting customer-proprietary telemetry, manufacturer escalation logs, and single-line diagrams.
- **Homelab Native**: Built for self-hosting with a multi-stage, non-root Docker container running Nginx on Alpine Linux (<15 MB RAM footprint).

---

## Project Structure

```
aprovero.org/
├── public/
│   ├── brand/
│   │   ├── logo.png                     # Original primary APROVERO logo
│   │   ├── logo-sq.png                  # Square brand mark
│   │   ├── logo-transparent-light.png   # Light-mode transparent logo
│   │   ├── logo-transparent-dark.png    # Dark-mode transparent logo
│   │   ├── favicon.svg                  # SVG favicon with teal accent dot
│   │   └── portrait-placeholder.svg     # Temporary editorial portrait frame
│   ├── favicon.svg
│   └── robots.txt                       # Search crawler rules & sitemap link
├── src/
│   ├── config/
│   │   └── site.ts                      # Central source of truth for personal data & links
│   ├── content/
│   │   ├── config.ts                    # Zod schemas for collections
│   │   ├── work/                        # Engineering case studies (Markdown)
│   │   │   ├── la-pimienta.md           # 358 MW Solar PV
│   │   │   ├── los-cuervos.md           # 234 MW Solar PV
│   │   │   ├── moon-palace.md           # 12.5 MW / 24 MWh BESS
│   │   │   ├── level3support.md         # Field Engineering ToolHub
│   │   │   └── tastiota.md              # 120 MW Solar PV
│   │   ├── lab/                         # Homelab & electronics projects
│   │   │   ├── homelab-infrastructure.md
│   │   │   ├── ai-tools-agents.md
│   │   │   └── engineering-tools.md
│   │   └── notes/                       # Technical drafts & writing
│   │       ├── commissioning-lessons.md
│   │       ├── homelab-site-architecture.md
│   │       └── why-i-keep-building.md
│   ├── components/
│   │   ├── Header.astro                 # Top navigation with APROVERO logo
│   │   ├── Footer.astro                 # Understated UTC-6 / homelab footer
│   │   ├── ThemeToggle.astro            # Zero-flash dark/light theme switch
│   │   ├── StatusBadge.astro            # Monospace system status indicator
│   │   ├── CareerTimeline.astro         # Narrative chronological career section
│   │   ├── ProjectRow.astro             # Editorial work preview row
│   │   ├── LabCard.astro                # Hardware & infrastructure project card
│   │   └── NoteRow.astro                # Technical note row with draft badge
│   ├── layouts/
│   │   └── BaseLayout.astro             # Master HTML shell, SEO, Schema.org, anti-FOUC
│   ├── pages/
│   │   ├── index.astro                  # Complete editorial homepage
│   │   ├── work/
│   │   │   ├── index.astro              # Work case studies archive
│   │   │   └── [...slug].astro          # Dynamic case study detail template
│   │   ├── lab/
│   │   │   └── index.astro              # Homelab hub & sanitized architecture
│   │   ├── notes/
│   │   │   ├── index.astro              # Notes archive with tags
│   │   │   └── [...slug].astro          # Note reading template
│   │   ├── contact.astro                # Minimal direct contact page
│   │   ├── ask.astro                    # Future "Ask Andres" preview architecture
│   │   ├── 404.astro                    # Clean 404 page
│   │   └── rss.xml.ts                   # RSS feed generator for notes
│   └── styles/
│       └── global.css                   # Tailwind layers and editorial prose styles
├── Dockerfile                           # Multi-stage build -> unprivileged Nginx
├── docker-compose.yml                   # Compose service definition
├── nginx.conf                           # Nginx caching, gzip, security headers
├── tailwind.config.mjs                  # Brand colors, typography, dark mode
├── astro.config.mjs                     # Astro configuration & sitemap integration
└── package.json
```

---

## Local Development

### Prerequisites
- Node.js 20+ or 22+
- npm 10+

### Setup & Run
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Open browser
http://localhost:4321
```

### Type Checking & Building
```bash
# Check TypeScript types across all files and collections
npm run check

# Generate production static build in /dist
npm run build

# Preview production build locally
npm run preview
```

---

## Homelab Docker Deployment

The project includes an optimized multi-stage `Dockerfile` that compiles the Astro static files and serves them via an unprivileged Nginx Alpine image.

### Building & Running with Docker Compose
```bash
# Build and run in detached mode
docker compose up -d --build

# Inspect logs
docker compose logs -f

# Stop container
docker compose down
```

The container listens on internal port `8080` (mapped to `8080` on the host).

### Reverse Proxy Configuration (Traefik / Caddy / NPM / Cloudflare Tunnel)
Assume that external TLS, DNS, and DDoS mitigation are handled externally:
- **Upstream host**: `http://<homelab-ip>:8080` or docker container network name `aprovero-web:8080`.
- **Egress-only ingress**: Recommended setup is Cloudflare Tunnel or an external reverse proxy forwarding to the internal port with zero exposed inbound router ports.

---

## Content & Asset Maintenance Guide

### 1. Central Personal Information
All personal details, URLs, descriptors, and social profile links live in:
`src/config/site.ts`

To update your email, location, or LinkedIn link:
```typescript
export const siteConfig = {
  name: "Andres Provero",
  email: "andres@aprovero.org",
  location: "Mexico City, Mexico",
  timezone: "UTC−6",
  socials: {
    linkedin: { href: "https://www.linkedin.com/in/aprovero/" },
    github: { href: "https://github.com/aprovero" },
  },
  // ...
};
```

### 2. Branding & Logo
The logo assets live in `/public/brand/`:
- `public/brand/logo-transparent-light.png`: Rendered on light backgrounds.
- `public/brand/logo-transparent-dark.png`: Rendered on dark backgrounds.
- `public/brand/logo.png`: Original asset.
- `public/brand/logo-sq.png`: Square mark for icons and social previews.
- `public/favicon.svg`: Browser favicon featuring the signature circle accent dot.

### 3. Replacing the Portrait Photograph
A clean vector placeholder is currently configured at:
`/public/brand/portrait-placeholder.svg`

To replace it with your real photograph:
1. Place your photo (e.g. `portrait.jpg` or `portrait.webp`, ~800×1000px, natural/documentary tone) into `public/brand/portrait.jpg`.
2. In `src/pages/index.astro`, update the `src` attribute in the portrait container:
   ```html
   <img
     src="/brand/portrait.jpg"
     alt="Andres Provero"
     width="220"
     height="264"
     class="w-full h-auto rounded border border-border-light dark:border-border-dark object-cover"
   />
   ```

### 4. Adding a Professional Work Case Study
Create a new Markdown file in `src/content/work/<project-slug>.md`:

```markdown
---
title: "Project Name"
subtitle: "High-level technical descriptor"
clientOrOwner: "Stakeholder / Client"
location: "Location, Country"
capacity: "XXX MW PV / XX MWh BESS"
systemType: "Solar PV" # or "BESS", "Hybrid"
year: "2024"
role: "Your Role"
summary: "1-2 sentence executive overview."
featured: true
order: 5
---

## Overview
...

## Engineering Context & Scope
...

## Execution & Field Realities
...

## Technical Takeaways
...
```

### 5. Adding a Lab Project
Create a new file in `src/content/lab/<project-slug>.md`:

```markdown
---
title: "Project Name"
category: "Infrastructure" # "Infrastructure" | "Electronics" | "AI & Software" | "Automation"
status: "Active Development" # "Operational" | "Active Development" | "Prototype" | "Documented"
summary: "Concise summary of what was built and why."
technologies:
  - "ESP32"
  - "FreeRTOS"
highlights:
  - "Key technical metric or physical safety feature"
order: 5
---

## Motivation
...

## Architecture & Schematics
...

## What Worked & What Failed
...
```

### 6. Adding a Note / Writing Piece
Create a file in `src/content/notes/<note-slug>.md`:

```markdown
---
title: "Title of your note"
date: "2026-04-01"
summary: "Short preview summary."
tags:
  - "Engineering"
  - "Commissioning"
draft: false # Set to false to publish
readTime: "5 min read"
---

Content goes here...
```

---

## Future "Ask Andres" (/ask) Roadmap

The route `/ask` is already wired into the site structure as a conceptual preview.
When ready to connect a live inference engine:
1. Grounding sources can be exported directly from `src/content/` (case studies, notes, lab architecture).
2. Host a quantized local model (e.g. via Ollama on homelab compute).
3. Connect an API endpoint that answers questions strictly using verified markdown embeddings, citing the exact file path without hallucination.

---

## License

Content and design &copy; 2026 Andres Provero. All rights reserved.