---
title: "Building aprovero.org from my homelab"
date: "2026-02-28"
summary: "The design decisions, constraints, and architecture behind self-hosting a personal website on local hardware in Mexico City."
tags:
  - "Homelab"
  - "Infrastructure"
  - "Astro"
  - "Self-Hosting"
draft: true
readTime: "5 min read"
---

> **Note:** This is an upcoming technical draft currently in preparation.

### Why Not Just Use Vercel or AWS?

Hosting a personal website on a managed serverless platform takes five minutes and costs practically nothing. Why bother racking physical servers, managing UPS batteries, and configuring local container stacks?

Because software engineering is losing touch with hardware reality. When your entire universe is abstracted into cloud functions and managed databases, you forget the fundamentals of networking, file system I/O, thermal constraints, and operational reliability.

### Design Principles for aprovero.org

- **Zero JavaScript by default**: The primary content is static HTML and CSS rendered ahead of time using Astro. The site loads in milliseconds regardless of network latency.
- **Editorial typography over visual noise**: No animated particle backgrounds, no floating cards, no marketing slogans. Just crisp typography and clear narrative structure.
- **Egress-only ingress**: The homelab router does not have a single open inbound port. Traffic routes through an encrypted tunnel terminated at the edge.