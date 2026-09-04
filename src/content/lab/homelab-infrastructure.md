---
title: "Homelab & Self-Hosted Infrastructure"
category: "Infrastructure"
status: "Operational"
summary: "Repurposing an older ASUS VivoPC VM40B into a 24/7 learning environment for Docker containers, n8n automations, and household services in Mexico City."
technologies:
  - "ASUS VivoPC VM40B"
  - "Ubuntu Server"
  - "Docker"
  - "CasaOS"
  - "Portainer"
  - "Tailscale"
  - "n8n"
highlights:
  - "Learning systems by building and operating them"
  - "Giving older 2013-era hardware a useful second life"
  - "Clean separation between private home server and Cloudflare Pages public site"
order: 1
---

## Why I Built It

What started as an unused ASUS VivoPC VM40B from when I lived in Argentina has become an active, hands-on learning environment for Docker, Linux administration, networking, and self-hosted services.

The immediate catalyst was automation—running up against the limits of Make's free tier and wanting to test self-hosted n8n. While the 2013 Celeron processor quickly demonstrated that local LLMs were not realistic on this hardware, the project expanded into a general learning platform: if a small server is running 24/7, what useful services can be brought home?

## Architecture & Practical Stack

- **Hardware**: ASUS VivoPC VM40B with 12 GB RAM, 1 TB internal HDD, external media storage, and secondary external backup drive. Wi-Fi connected with static local addressing.
- **Host OS & Containers**: Headless Ubuntu Server running Docker. CasaOS provides day-to-day dashboard visibility, while Portainer is used for deeper container management.
- **Private Access**: Tailscale mesh VPN provides secure remote access without exposing administrative interfaces to the public internet.
- **Selective Ingress**: Cloudflared egress tunnel is used strictly for required external webhooks (such as n8n triggers).
- **Public Site Hosting**: This website (aprovero.org) is built and served via Cloudflare Pages from GitHub, preserving clean isolation from the homelab.