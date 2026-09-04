---
title: "Building aprovero.org: Edge Delivery vs. Homelab Hosting"
date: "2026-02-28"
summary: "The architectural considerations behind serving aprovero.org via Cloudflare Pages and separating public edge traffic from local homelab experiments."
tags:
  - "Architecture"
  - "Cloudflare Pages"
  - "Astro"
  - "Homelab"
draft: true
readTime: "5 min read"
---

> **Note:** This is an upcoming technical draft currently in preparation.

### Why Separate the Public Site from the Homelab?

It is tempting to host a personal website directly on a home server just because the hardware is running. But good engineering starts with understanding operational boundaries.

The public website aprovero.org is built with Astro and deployed automatically to Cloudflare Pages from GitHub. This guarantees high availability, edge caching, and zero dependency on residential power or ISP routing.

Meanwhile, the homelab (an ASUS VivoPC VM40B running Ubuntu Server and Docker) is dedicated to internal learning, n8n automations, and household utilities. Keeping public web delivery decoupled from private experimentation ensures that breaking something on the home server never takes down the personal domain.

### Design Principles for aprovero.org

- **Zero JavaScript by default**: The primary content is static HTML and CSS rendered ahead of time using Astro.
- **Editorial typography over visual noise**: No animated particle backgrounds, no floating cards, no marketing slogans. Just crisp typography and clear narrative structure.
- **Self-host where it makes sense**: Practical services and automation belong at home; global static delivery belongs on the edge.