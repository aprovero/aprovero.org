---
title: "Field Engineering Tools & Diagnostic Utilities"
category: "Automation"
status: "Documented"
summary: "Lightweight offline-first progressive web apps, calculators, and automation scripts developed to eliminate friction during field commissioning."
technologies:
  - "TypeScript / PWA"
  - "Offline LocalStorage / IndexedDB"
  - "Python"
  - "Modbus TCP / RTU"
highlights:
  - "Functions completely offline in remote substations without cellular service"
  - "Instant calculation of voltage drops, reactive power limits, and string sizing"
  - "Standardized checklist generation for site acceptance testing"
order: 4
---

## The Origin

Substations and remote solar plants rarely have reliable cellular data. When standing in front of an inverter station in the desert or jungle, needing an internet connection to look up an error register or verify an electrical calculation is unacceptable.

During my years in the field, I built and maintained a series of lightweight, offline-first utilities that field teams could install on phones and laptops as Progressive Web Apps (PWAs).

## Capabilities

- **Offline Register Maps**: Fast lookup of Modbus registers, fault codes, and LED status codes for major utility central inverters.
- **Electrical Calculators**: Quick verification of cable ampacity derating based on ambient temperatures and conduit bundling factors.
- **Standardized Punch-List Generator**: Tools to document mechanical and electrical non-conformities with structured categorization and photo attachment for rapid handover to EPCs.