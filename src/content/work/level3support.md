---
title: "Level3Support"
subtitle: "Field Engineering ToolHub · Offline-capable"
clientOrOwner: "Personal Engineering Project"
location: "Offline-capable"
capacity: "40+ Field Tools"
systemType: "Field Engineering ToolHub"
year: "2023–Present"
role: "Creator & Systems Designer"
summary: "Turning field experience into repeatable tools: an offline-capable engineering suite built from years of commissioning, root cause analysis, and field troubleshooting."
keyMetrics:
  - "40+ Engineering Utilities"
  - "100% Offline-Capable (Service Worker)"
  - "Zero-Account / Local-First Storage"
confidentialityNotice: "Internal company request workflows, proprietary documents, and corporate records were retired prior to public release. Level3Support serves as an engineering aid and does not replace manufacturer manuals, project procedures, applicable electrical/safety standards, utility requirements, or certified engineering determinations."
featured: true
order: 4
---

## Overview

Field engineering in utility-scale energy infrastructure is rarely blocked by lack of technical documentation. It is blocked by friction: manuals that run hundreds of pages, inverter error registers represented as cryptic hexadecimal strings, calculations performed repeatedly on scrap paper or improvised spreadsheets, and critical troubleshooting methodologies that reside exclusively in the heads of a few senior engineers.

**Level3Support** is an offline-capable technical toolhub created to eliminate that friction. 

Its central thesis is straightforward:

> **Turning field experience into repeatable tools.**

The platform was not conceived in an office as software architecture. It evolved organically out of real field problems encountered while commissioning central solar inverters, high-voltage switchgear, and battery energy storage facilities.

---

## Origin: The Split-Page Table Problem

Level3Support did not start as a software platform. The original utility was an Excel workbook created to solve an immediate, frustrating field troubleshooting bottleneck.

On utility-scale solar sites, central inverter fault logs frequently report alarm events as hexadecimal codes (e.g., `0x0028A004`). When an inverter trips in the field, diagnosing the root cause required a laborious manual sequence:

1. Reading the hexadecimal fault code from the local HMI or event register.
2. Converting the hexadecimal string to a 32-bit binary representation.
3. Identifying each individual bit position set to `1`.
4. Locating the corresponding bit-definition table buried inside a vendor PDF manual.
5. Manually aligning those bit numbers against a printed or digital table split across multiple pages.

The process worked, but it was slow, cumbersome, and error-prone when standing inside an inverter enclosure under 40°C ambient heat. A single misaligned bit meant misidentifying a critical protection trip.

To solve this, Andres built a self-contained Excel converter. An engineer could type the raw hex string into a single cell and immediately see:
- The full binary representation.
- Every active fault bit highlighted.
- The corresponding plain-language fault explanation and associated subsystem.

The spreadsheet was lightweight, functioned entirely offline, and opened reliably on a smartphone screen in the field. Andres shared it with colleagues on site; within weeks, other field engineers were keeping it on their phones as their first line of defense during inverter trips.

That single offline converter was the seed for what eventually became Level3Support.

---

## Evolution: From One Utility to a Platform

```
+─────────────────────+        +──────────────────────+        +──────────────────────+        +──────────────────────+
|   EXCEL UTILITY     |  ───>  |  THE 4 CORE TOOLS    |  ───>  |    CoE PLATFORM      |  ───>  |    LEVEL3SUPPORT     |
| Hexadecimal fault   |        | Inverters, relays,   |        | Structured requests, |        | 40+ engineering      |
| decoding on mobile  |        | parameter compare    |        | curated documents    |        | tools, offline-first |
+─────────────────────+        +──────────────────────+        +──────────────────────+        +──────────────────────+
```

### The Original Four Tools

As recurring technical bottlenecks emerged across commissioning campaigns, the same philosophy was applied to other field procedures. The initial standalone toolset expanded to four core utilities:

1. **Fault Code Interpreter**  
   *Origin:* Hexadecimal fault-code conversion and bit decoding for central solar inverters.
2. **ABB REJ603 Relay Configuration Tool**  
   *Origin:* A medium-voltage relay configuration process that previously required locating, cross-referencing, and manually interpreting complex DIP-switch and parameter tables from technical manuals.
3. **SG1+x Parameter Comparison Tool**  
   *Origin:* Created to investigate an elusive field anomaly that emerged immediately following an inverter firmware update on an active project.  
   *Purpose:* Rapidly diff two complete parameter files to highlight unintended configuration drifts or altered protection thresholds.
4. **UMCG Data Analysis Tool**  
   *Origin:* A multi-step diagnostic data-analysis routine Andres had previously executed in Excel using pivot tables and taught to his field team.  
   *Purpose:* Automate the diagnostic methodology directly so that any engineer could evaluate operating trends and identify thermal or electrical anomalies without having to rebuild the pivot structure by hand.

The core insight behind these tools was consistent: technical execution was repeatedly bogged down by processes that were entirely solvable, but unnecessarily dependent on knowing which manual to locate, calculating numbers manually, building spreadsheets from scratch, or relying on troubleshooting intuition that existed only in an experienced engineer's memory.

---

## Center of Expertise Phase

When Andres transitioned into a regional Center of Expertise (CoE) role, his responsibility broadened from direct field execution to technical governance and organizational enablement. Part of that objective became translating specialized domain knowledge into tools that the wider technical organization could leverage across regions.

The internal platform grew into three coordinated operational pillars:

1. **Engineering Tools**: Self-service diagnostic utilities and calculation engines for field technicians and engineers.
2. **Curated Technical Document Library**: Technical documentation across energy equipment is notoriously fragmented across vendor portals, local drives, and internal folders. The document library curated reliable, authoritative technical documentation in a single indexed location, ensuring engineers consulted vetted material.
3. **Structured Technical Request Workflow**: Technical escalations and support requests frequently reached the Center of Expertise through informal, uncoordinated channels—chat messages, phone calls, and hallway conversations. Andres introduced a structured communication channel between operational technical teams and the Center of Expertise. This provided a formal venue to articulate requirements, establish clear ownership, track investigative progress, and foster mutual accountability on both sides.

---

## Original Technical Implementation

### "Yes, a lot of it was vibe-coded."

The original internal portal was built rapidly using modern AI coding assistants. Andres is an electronics and field commissioning engineer, not a professional software developer. The technical architecture reflected an engineer leveraging available tools to solve immediate operational requirements:

- **Frontend**: Lightweight HTML, CSS, and vanilla JavaScript.
- **Backend**: Node.js microservice hosted on Render.
- **Data & Interfaces**: Airtable used as an operational datastore and administrative dashboard.

The backend handled request routing: parsing incoming engineering escalations, persisting metadata to Airtable, and firing automated email alerts to relevant specialists. Airtable provided the internal CoE team with kanban boards, status views, and tracking interfaces without requiring custom database administration.

The development process evolved pragmatically:
- **Claude** served as an early coding companion to scaffold JavaScript logic and write UI components.
- **ChatGPT** helped integrate backend API routes, debug edge cases, and tie the services together.

The field knowledge, mathematical formulas, workflow design, diagnostic logic, and product priorities came entirely from Andres's engineering background. AI coding tools provided the leverage to translate that domain experience into functional, production-grade tools.

---

## After the Center of Expertise

Following his transition out of the CoE role, Andres restructured the project for the public domain:

- **Internal Request Pipelines Removed**: All corporate support ticketing, intake workflows, and notification hooks were decoupled and retired.
- **Internal Document Library Removed**: All corporate, proprietary, and manufacturer-confidential technical manuals were removed from the public experience.
- **Proprietary Content Sanitized**: Company-specific parameter references, customer details, and internal investigation notes were stripped out entirely.

While legacy scaffolding may remain in the public repository for historical tracking, none of these internal corporate functions are active in the live tool.

Andres retained the four original engineering calculators, rebranded the project as **Level3Support**, and chose to continue expanding it as an independent personal engineering project.

---

## Current Level3Support: 40+ Engineering Tools

Today, the public Level3Support platform contains **40+ specialized engineering utilities**.

The tools originate directly from practical engineering work:
- Calculations previously worked out manually on paper or whiteboards.
- Mathematical models developed during Root Cause Analysis (RCA) investigations.
- Troubleshooting rules of thumb accumulated across years of on-site commissioning.
- Routine verifications performed during site acceptance testing and plant turnarounds.
- Direct feedback and suggestions gathered from other field practitioners, including a survey conducted across professional LinkedIn networks.
- Theoretical concepts Andres researched to assess whether they could be packaged into a useful field tool.

Positioned strictly as a platform **built from field experience, for field engineers**, Level3Support makes no claims of massive user numbers, venture backing, or universal enterprise adoption. Some of the original tools continue to be relied upon by engineers Andres worked with in the field; the broader public suite is freely available for any engineer, technician, or student who finds it useful.

---

## Representative Tools

Rather than presenting an exhaustive catalog, the following six tools illustrate the breadth of engineering domains addressed across the platform:

```
┌───────────────────────────────────────┬───────────────────────────────┐
│ Tool Name                             │ Primary Engineering Domain    │
├───────────────────────────────────────┼───────────────────────────────┤
│ 1. Fault Code Interpreter             │ Diagnostics                   │
│ 2. UMCG Data Analysis Tool            │ Data Analysis                 │
│ 3. Cable Sizing & Voltage Drop        │ Electrical Engineering        │
│ 4. Arc Flash Boundary Calculator      │ Electrical Safety             │
│ 5. Fuse Temperature Derating          │ Protection                    │
│ 6. BESS Battery Health Analyzer       │ Battery Energy Storage        │
└───────────────────────────────────────┴───────────────────────────────┘
```

1. **Fault Code Interpreter** (*Diagnostics*)  
   Decodes 16-bit and 32-bit hexadecimal alarm words from central inverters, mapping active bits directly to root-cause descriptions and isolation procedures.
2. **UMCG Data Analysis Tool** (*Data Analysis*)  
   Processes raw inverter electrical and thermal telemetry, plotting operating curves and isolating anomalies without requiring manual spreadsheet manipulation.
3. **Cable Sizing, Ampacity & Voltage Drop Calculator** (*Electrical Engineering*)  
   Sizes low- and medium-voltage conductors in accordance with installation method, grouping factors, ambient soil/air thermal derating, and permissible percentage drop.
4. **Arc Flash Boundary Calculator** (*Electrical Safety*)  
   Computes incident energy exposure (cal/cm²) and arc flash boundary distances to assist personnel in selecting compliant NFPA 70E PPE before opening energized equipment.
5. **Fuse Continuous Current & Temperature Derating Calculator** (*Protection*)  
   Determines allowable continuous loading for high-speed semiconductor and distribution fuses subjected to extreme ambient and enclosed enclosure temperatures.
6. **BESS Battery Health Analyzer** (*Battery Energy Storage*)  
   Evaluates rack- and cell-level voltage spreads, internal resistance trends, and State of Health (SOH) indicators to detect weak cells before thermal propagation risks develop.

---

## Platform Structure

Level3Support is structured around five practical concepts that match how engineers organize their work in the field:

- **TOOLS**: Standalone calculation engines that execute specific mathematical formulas, unit conversions, sizing checks, or diagnostic evaluations.
- **WORKFLOWS**: Sequential procedures that combine multiple tools, reference standards, and verification checkpoints into standardized field routines (e.g., pre-energization checklists).
- **REFERENCE**: Curated technical formulas, lookup tables, and electrical standards intended to be reviewed on site rather than executed computationally.
- **REPORTS**: Structured templates engineered for documenting field findings, non-conformities, commissioning records, and test results.
- **SAVED WORK / DRAFTS**: A persistent local storage subsystem that allows ongoing reports and analyses to be saved in progress on a phone or laptop and resumed later.

---

## Field-First & Offline Design

A tool built for field engineers is useless if it stops working the moment you enter a substation control room or step between rows of solar panels.

Remote project sites frequently have minimal or nonexistent cellular coverage. Even on sites with cellular signal, metal-clad electrical enclosures and concrete control buildings create Faraday cages that block reception.

For Level3Support, **offline functionality is a foundational constraint, not an afterthought**:
- Once loaded initially in a browser, all core calculation logic, reference tables, and interface views remain fully functional without internet access.
- Built using **HTML5, modern ES6 JavaScript modules, CSS, Vite, and service worker caching**.
- No heavy client-side JavaScript frameworks (no React, Next.js, or hydration cycles) and no cloud database dependencies are required to run the toolhub.

---

## Local-First Data & Device Portability

Level3Support intentionally requires **no user login, no account creation, and no password management**. 

Engineers in the field should not be delayed by authentication flows or session timeouts. All drafts, saved test results, and customized parameters are stored exclusively in the browser's local client storage.

To bridge the gap between inspecting equipment on foot and writing formal engineering deliverables at a desk, Level3Support implements a **portable ZIP package system**:

```
[ PHONE ON SITE ]               [ EXPORT PACKAGE ]              [ FIELD LAPTOP ]
Fill report & attach  ───>  Save in local browser  ───>  Export portable .ZIP
photos on smartphone        storage (IndexedDB)         (Data JSON + Photos)
                                                                 │
                                                                 ▼
[ CLIENT-READY DELIVERABLE ]    [ REVIEW & FINALIZE ]     [ IMPORT & RESUME ]
Export final PDF with           Review measurements &     Import .ZIP into browser;
photographic annex        <───  edit narrative      <───  all fields & images hydrate
```

### The Field-to-Desk Workflow:
1. **On Site (Smartphone)**: The engineer inspects an inverter station, inputs measurements into a report template, and attaches photos directly from the phone camera.
2. **Local Persistence**: Data and images are saved immediately into local browser storage.
3. **Export Package**: The engineer taps *Export*, packaging the structured data payload and all attached binary image files into a single `.zip` bundle.
4. **Transfer**: The package is transferred to a field laptop via USB drive, AirDrop, or local Wi-Fi.
5. **Import on Laptop**: Opening Level3Support in the laptop browser, the engineer imports the `.zip`. The application parses the package and completely hydrates the report state—including full-resolution photos.
6. **Finalize & Deliver**: The engineer refines the technical narrative on a full keyboard and exports the finished document as a clean, standardized PDF.

This architecture delivers cloud-like portability across devices without introducing user accounts, cloud database hosting, or remote privacy vulnerabilities.

---

## Current Status & Links

Level3Support remains an active personal engineering project. Andres continues developing, testing, and refining tools because they are genuinely useful in his own technical work and may benefit other field practitioners. 

There is no commercial business model, no venture backing, no paid tier, and no product-marketing campaign behind it. If the platform eventually evolves into a formal commercial offering, that decision will be driven by genuine operational demand. For now, it exists as a free, open, and practical engineering aid.

### Direct Links

- **Launch Application**: [Open Level3Support Tools ↗](https://level3supporttools.onrender.com)
- **Source Code**: [View repository on GitHub ↗](https://github.com/aprovero/Level3Support)

---

## Engineering Disclaimer

Level3Support is provided as an engineering reference and calculation aid. It does not replace equipment manufacturer operation and maintenance manuals, project-specific commissioning procedures, national or international electrical safety standards (such as NFPA 70E, IEEE, or IEC), utility interconnection requirements, or licensed professional engineering judgment. 

Calculations, bit conversions, and diagnostic interpretations produced by the platform should always be verified against official manufacturer documentation and approved site procedures before executing physical actions on energized equipment.
