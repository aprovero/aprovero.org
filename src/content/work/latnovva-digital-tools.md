---
title: "Digital Tools for LATNOVVA"
subtitle: "Operational systems and commercial architecture built for utility-scale field service"
clientOrOwner: "LATNOVVA México"
location: "Mexico (National Coverage)"
capacity: "14 States · Distributed Field Crews"
systemType: "Field Operations Platform"
year: "2024–Present"
role: "Head of Operations & Systems Designer"
summary: "Designing and deploying custom software to solve real field service bottlenecks: from an internal GPS/geofenced operations platform to a commercial footprint portal."
keyMetrics:
  - "14 Mexican States Operational Footprint"
  - "Zero-Discrepancy Timesheet to Payroll Pipeline"
  - "Geofenced GPS Dispatch & Incident Tracking"
  - "Supabase + Next.js Hybrid Architecture"
confidentialityNotice: "Customer commercial terms, employee personal data, proprietary client asset identifiers, and private internal platform URLs are omitted. Platform views shown use synthetic test records."
featured: true
order: 4
---

## Overview

Field service operations in utility-scale renewable energy live in the friction between contract schedules and physical reality. 

When a central solar inverter trips in the desert of Sonora or high-voltage switchgear requires unscheduled maintenance in the humid corridor of Veracruz, the technical work on the ground is only half the battle. The other half is the operational machine behind it: mobilizing qualified personnel, verifying their presence on authorized project parcels, logging work hours under Mexican labor regulations, capturing safety incidents in real time, and converting field evidence into client billing and technician payroll.

At **LATNOVVA**, our teams provide preventive maintenance, corrective repairs, commissioning assistance, and high-voltage technical services across 14 Mexican states. As our field operations expanded, the administrative machinery that held these distributed projects together began showing its limits.

Rather than buying an off-the-shelf software package that forced our field crews into workflows invented for office workers, I designed and built two dedicated digital systems:

1. **The Field Service Operations Platform** (Internal): A mobile-first, offline-tolerant web application that handles technician dispatch, GPS/geofenced attendance validation, incident ticketing, supervisor sign-offs, and automated payroll export.
2. **The LATNOVVA Commercial Portal** (Public/Client-Facing): An interactive digital asset showcasing our real operational footprint, service capabilities, response times, and nationwide reach to energy asset owners and prospective partners.

Neither system began as a software ambition. 

> **The software came after the operational problem, not before it.**

As an electronics engineer who has spent years in substations and solar fields, I don't build software to write code; I build systems to eliminate operational friction. Using modern AI-assisted software development in tools like Google Antigravity, I was able to translate frontline operational problems directly into robust, production software in days rather than waiting quarters for outsourced software teams.

---

## The Operational Reality: Why Generic Tools Break in the Field

In enterprise software demonstrations, field management looks clean: a technician taps an app on their phone, a GPS dot appears on a map, hours update on a dashboard, and invoices generate automatically.

On an actual 200 MW solar plant or a remote 230 kV substation, that idealized model collides with physical reality:

* **Hostile Operating Environments**: Technicians work under 40°C heat, intense sun glare on smartphone screens, heavy dust, and with thick safety gloves. Any interface that requires delicate menu navigation, small click targets, or frequent page reloads is abandoned immediately.
* **Marginal Connectivity**: Utility-scale renewable projects are frequently located far beyond standard cellular coverage. A platform that requires persistent internet connection to log attendance or record an equipment error register creates delays and frustration.
* **Mixed Personnel Structures**: Our crews are not uniform. A single site mobilization often combines full-time company engineers, specialized electrical subcontractors, third-party safety supervisors, and local labor. Tracking credentials, assigned roles, and differing labor agreements under one roof is essential.
* **Strict Statutory & Contractual Rules**: In Mexico, field service hours are governed by strict Federal Labor Law (*Ley Federal del Trabajo*) provisions regarding standard shifts, rest days (*días de descanso*), and overtime tiers (double and triple time). Furthermore, asset owners require indisputable audit trails of who was on-site before approving service work orders.

Before we built dedicated tooling, the information flow relied on the default tool of the modern industrial world: **WhatsApp groups, paper log sheets, and Friday night spreadsheets**.

```
[FIELD REALITY]
  Technician on Site ──> Paper Log / WhatsApp Check-in ──> Unverified Verbal Update
                                                                   │
                                                                   ▼
[SUPERVISION]                                            [ADMINISTRATIVE FRICTION]
  Site Supervisor ─────> Ad-Hoc Photo & Text Log       ──> Friday Night Excel Merge
                                                                   │
                                                                   ▼
[OFFICE / HR / BILLING]                                  [OPERATIONAL BREAKDOWN]
  Weekly Payroll  <──── Conflicting Timesheet Data      <── Disputed Overtime Hours
  Client Invoicing <─── Missing Geolocation Proof       <── Payment Delays
```

This chain suffered from systemic weaknesses:
1. **Punches lacked geographic proof**: A WhatsApp message saying *"Llegando a sitio"* (Arrived on site) could be sent from the substation gate or from a hotel lobby 15 kilometers away.
2. **Reconciliation was backward-looking**: The office only discovered discrepancies, unlogged rest days, or missing attendance records days later when compiling payroll spreadsheets.
3. **Disputes damaged morale and cash flow**: Technicians argued over unrecorded overtime; asset managers disputed billable hours due to lack of verifiable sign-in logs.

We did not need more spreadsheets. We needed an operational feedback loop engineered to survive contact with the field.

---

## Primary Project: The Field Service Operations Platform

The internal platform was conceived with a clear operational mandate: **make logging effortless for the technician on site, make verification transparent for the field supervisor, and make compliance automatic for HR and finance.**

```
+---------------------------------------------------------------------------------+
|                        FIELD SERVICE OPERATIONS PLATFORM                        |
+---------------------------------------------------------------------------------+
|                                                                                 |
|   1. FIELD LEVEL (Mobile-First / PWA)                                           |
|   ┌────────────────────────┐  ┌────────────────────────┐  ┌─────────────────┐   |
|   │ Daily Punch (Clock-in) │  │ GPS + Geofence Checker │  │ Incident / Log  │   |
|   │ Time, Project, Shift   │  │ Offline Cache & Queue  │  │ Photos & Notes  │   |
|   └───────────┬────────────┘  └───────────┬────────────┘  └────────┬────────┘   |
|               │                           │                        │            |
|               └─────────────────────┬─────┴────────────────────────┘            |
|                                     ▼                                           |
|   2. VALIDATION & RULES ENGINE (PostgreSQL & Edge Functions)                    |
|   ┌─────────────────────────────────────────────────────────────────────────┐   |
|   │ • Geofence Proximity Check (Flagged vs Verified)                        │   |
|   │ • LFT Compliance Engine (Standard Hours, Overtime Tiers, Rest Days)     │   |
|   │ • Project Allocation & Subcontractor Multi-tenancy                      │   |
|   └─────────────────────────────────┬───────────────────────────────────────┘   |
|                                     ▼                                           |
|   3. SUPERVISORY & ADMINISTRATIVE CONSOLE (Desktop / Tablet)                    |
|   ┌────────────────────────┐  ┌────────────────────────┐  ┌─────────────────┐   |
|   │ Personnel Management   │  │ Weekly Attendance Grid │  │ Payroll Export  │   |
|   │ Active Roles & Sites   │  │ Visual Flag Auditing   │  │ One-Click CSV   │   |
|   └────────────────────────┘  └────────────────────────┘  └─────────────────┘   |
|                                                                                 |
+---------------------------------------------------------------------------------+
```

### 1. Personnel & Field Crew Assignment

Managing technical operations across multiple simultaneous sites requires clear role definitions and accountability. 

The personnel engine centralizes our workforce directory, differentiating between field supervisors, electrical technicians, safety coordinators, logistics officers, and administrative support. Each technician profile maintains emergency contact channels, internal employee identifiers, role-based application permissions, and active project assignments.

![Personnel and Field Team Directory](/work/latnovva/personnel-assignment.png)
*Figure 1: Personnel directory and assignment console showing role taxonomy, project allocation, and employee status tracking.*

When a crew is dispatched to a new substation or solar park, the supervisor assigns the project context in the system. The technician's mobile view immediately reconfigures to reflect the active site coordinates, working parameters, and client work order numbers.

### 2. Attendance Logging, GPS, and Practical Geofencing

In software design, purity is the enemy of adoption. A naive engineering implementation of geofencing would hard-block any technician whose GPS coordinates fell outside a strict 50-meter perimeter around a substation gate.

In the real world, that naive rule is disastrous:
- GPS receivers on phones drift when surrounded by high-voltage steel structures or overhead conductors.
- Technicians often park service trucks at the access road security shack, several hundred meters before the switchyard fence.
- Heavy cloud cover or remote mountainous topography can degrade smartphone GPS accuracy from ±5 meters to ±120 meters.

If the app hard-blocks the punch, the technician cannot clock in, becomes frustrated, and returns to WhatsApp. The software fails.

Instead, I designed a **two-tier validation architecture**:

1. **High-Accuracy Punch (Green)**: When the device acquires satellite lock within the project geofence (typically calibrated between 100m and 300m depending on parcel perimeter), the punch registers as verified immediately.
2. **Flagged Punch with Context (Amber Warning)**: If GPS accuracy is degraded or the punch occurs outside the nominal perimeter, the platform does not block the worker. It accepts the punch, captures the exact latitude/longitude coordinates and horizontal dilution of precision (accuracy in meters), and stamps an audit flag.

![Field Punch Validation and GPS Flagging](/work/latnovva/attendance-validation.png)
*Figure 2: Daily punch interface with real-time GPS telemetry and intelligent accuracy flagging for supervisor audit review.*

As shown in Figure 2, when GPS signal accuracy degrades to ±106 meters, the interface provides immediate, transparent feedback:
> `⚠ GPS signal is weak (±106m). Punch will be flagged.`

The punch is stored in local browser cache and synced to the cloud as soon as cellular or Wi-Fi handshake occurs. The supervisor sees the flag on the dashboard and can approve or clarify it with a single click, preserving operational velocity while maintaining complete audit integrity.

### 3. The Weekly Attendance Matrix & Supervisory Review

The operational truth of an industrial company lives in its weekly attendance matrix.

Field supervisors need to view the entirety of their deployed workforce across days of the week at a glance: who clocked in, which project absorbed their hours, whether shifts overlapped, and where anomalies occurred.

![Weekly Attendance Matrix and Project Audit Trail](/work/latnovva/attendance-overview.png)
*Figure 3: Supervisor weekly attendance matrix showing project allocation, daily shift status, total hours, and compliance states.*

The weekly console acts as the operational nerve center:
* **Visual Status Codes**: Color-coded badges distinguish between on-time shifts, verified punches, flagged geofence records, scheduled rest days, authorized leaves, and absences.
* **Audit Trail per Cell**: Clicking any entry reveals the exact timestamps, GPS coordinates, project code, and supervisor notes behind that specific shift.
* **Instant Project Reallocation**: If a crew had to split their morning on a central inverter station (`PRJ-MX-NORTH`) and their afternoon assisting a transformer oil test on an adjacent feeder (`PRJ-MX-CENTRAL`), the hours can be apportioned cleanly against separate project cost centers.

### 4. From Field Punch to Payroll: Automated Compliance

Under Mexican labor regulations (*LFT*), calculating industrial payroll for field crews is complex. Work conducted on mandatory rest days (*prima dominical* and rest-day double time), overtime exceeding 9 weekly hours (moving from double time to triple time), and split shifts require exact mathematical accounting.

Before this platform, HR spent up to 14 hours every Monday reconciling hand-written slips and text messages against Mexican payroll software, frequently leading to calculation errors or delayed payments.

We built the statutory rules directly into the platform's calculation engine:

```
[FIELD SHIFT COMPLETED]
  Start: 07:30 | End: 18:30 | Break: 60 min (Total: 10.0 hrs)
                    │
                    ▼
[COMPLIANCE ENGINE EVALUATION]
  ├─ Day Type Check: Standard Workday vs Scheduled Rest Day (Domingo)
  ├─ Standard Shift Threshold: 8.0 hrs
  └─ Daily Excess: 2.0 hrs
                    │
                    ▼
[CUMULATIVE WEEKLY OVERTIME COUNTER]
  ├─ First 9 Overtime Hours (Week)  ──> Tier 1: Double Time (100% Surcharge)
  └─ Overtime Exceeding 9 Hours     ──> Tier 2: Triple Time (200% Surcharge)
                    │
                    ▼
[SUPERVISOR DIGITAL SIGN-OFF]
  Verified against Site Work Order & Safety Briefing
                    │
                    ▼
[HR / ACCOUNTING PAYROLL EXPORT]
  Standardized CSV matching Mexican Nomipaq / ERP schema
```

This transformed Monday mornings:
- Payroll calculation time dropped from **14 hours to under 30 minutes**.
- Timesheet discrepancies with field technicians dropped to **zero**.
- When clients request proof of hours before paying monthly O&M retainers, we export verified, GPS-backed timesheets with complete timestamps in seconds.

---

## Building with AI: "Vibe-Coding" as an Operational Force Multiplier

There is a significant misconception about AI-assisted programming—often colloquially termed "vibe-coding". 

Many assume it means non-technical people typing vague prompts to generate toy websites. In an industrial context, it means something entirely different: **it gives technical domain experts direct leverage to build production-grade enterprise software without the overhead of traditional software engineering teams.**

I am an electronics engineer and technical operations professional. My core discipline is understanding complex physical systems, power electronics, schematics, state machines, and human operational workflows. I am not a full-time React developer, nor do I want to spend weeks reading boilerplate documentation for web framework configurations.

### The Traditional Dilemma for Industrial SMEs

In an engineering firm of our scale, building custom internal software used to present an impossible choice:
1. **The Software Agency Trap**: Hire an external software agency. This typically costs $60,000 to $120,000, requires months of requirements gathering, and inevitably results in a system designed by people who have never stepped foot on an electrical substation. When field conditions break their assumptions, every revision takes weeks and costs thousands.
2. **The Generic SaaS Compromise**: Pay monthly licenses for commercial tools (e.g., generic field service apps). These tools never quite fit: they lack Mexican labor law overtime rules, their geofence implementations are rigid, and their interfaces are bloated with CRM features we don't need.
3. **The Excel Status Quo**: Accept the friction, lose hours to administrative waste, and fight fires manually.

### The AI-Assisted Development Paradigm

Using Antigravity and modern LLM-assisted workflows fundamentally changes the economics of internal engineering tools. 

Because I understand:
- The data structures required (relational models for sites, shifts, employees, punches, and incidents),
- The edge cases of field operations (GPS drift, lost connectivity, shift transitions across midnight),
- The statutory math of payroll and billing,

I was able to direct the AI with architectural precision. Instead of writing boilerplate database queries or styling CSS dropdowns by hand, I designed the system schemas, defined the state machines, verified edge conditions, and guided the code generation interactively.

```
[OPERATIONAL PROBLEM IDENTIFIED ON SITE]
  e.g., "Weak GPS signal at substation gate is blocking legitimate punches"
                       │
                       ▼
[ENGINEERING SPECIFICATION & DATA MODEL]
  Define tolerance threshold (±150m), warning state, and audit flag schema
                       │
                       ▼
[AI-ASSISTED IMPLEMENTATION (Antigravity)]
  Generate Edge Function, UI warning banner, Supabase migration in minutes
                       │
                       ▼
[IMMEDIATE FIELD VALIDATION]
  Deploy to staging, test on actual smartphone at substation next morning
```

The feedback loop between **identifying a broken process in the field** and **deploying a code fix** shrank from six months to twenty-four hours.

However, AI code generation only succeeds when paired with rigorous operational hygiene:
* **Strict Relational Schemas**: AI will invent loose schemas if unguided. I enforced strict PostgreSQL foreign keys, unique constraint validations, and indexed coordinates.
* **Row-Level Security (RLS)**: Internal company data requires bulletproof privacy. Using Supabase RLS, technicians can only access their own active shifts, supervisors can view their assigned project crews, and only authenticated HR admins can view payroll calculations.
* **Continuous Field Testing**: Every feature was tested on actual phones under harsh sunlight, with cached offline state and intermittent 3G connections.

The resulting codebase is clean, maintainable, and built specifically around the physics of our business.

---

## Secondary Project: The LATNOVVA Commercial Portal

While the operations platform solved our internal execution challenges, our growing footprint across Mexico created a complementary commercial need.

When energy developers, IPPs (Independent Power Producers), and multinational asset managers look for an O&M or commissioning partner in Mexico, their primary question is straightforward:

> *"Can you actually deploy qualified crews to our site in Coahuila, Sonora, or Quintana Roo with rapid response times?"*

Traditionally, technical service providers answer this question with static 30-page PDF capability decks. These decks are outdated the week after they are printed, provide no interactive exploration, and fail to convey modern operational competence.

To solve this, I designed and deployed the **LATNOVVA Commercial Portal**: a dynamic, public-facing digital platform that showcases our nationwide operational presence, service lines, and technical readiness.

![National Operational Footprint Across 14 Mexican States](/work/latnovva/commercial-portal-footprint.png)
*Figure 4: Interactive national map detailing operational coverage across 14 Mexican states with regional crew hubs.*

### Key Commercial Capabilities

* **Interactive Operational Footprint**: An interactive map of Mexico detailing our operational reach across 14 states (from the northern solar corridor in Sonora, Chihuahua, and Coahuila down to the central and southern regions). Clients can see where our technical hubs are positioned and calculate mobilization response times.
* **Modular Service Presentation**: Highlighting our specialized scopes—substation commissioning, inverter maintenance, battery storage integration (BESS), MV/HV testing, and emergency corrective interventions.
* **Asset Owner Focus**: Built with the language and technical priorities of utility asset managers: availability guarantees, safety certifications, and standardized reporting.

![Interactive Commercial Capability Presentation](/work/latnovva/commercial-portal-presentation.png)
*Figure 5: Service capability and equipment scope presentation module within the commercial portal.*

The portal acts as a transparent window into our organization, establishing immediate credibility during commercial negotiations.

You can explore the live public commercial portal here:

<div class="my-8 p-6 rounded-lg border border-accent/40 bg-surface-light-card/80 dark:bg-surface-dark-card/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
  <div>
    <div class="font-bold text-ink-light dark:text-ink-dark text-lg">LATNOVVA Commercial Portal</div>
    <div class="text-sm text-ink-light-muted dark:text-ink-dark-muted font-mono mt-1">Interactive operational presence, capability matrix, and Mexican national footprint.</div>
  </div>
  <a
    href="https://latnovvamx.onrender.com/commercial-portal"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-mono text-sm font-semibold bg-accent text-surface-dark hover:bg-accent-hover transition-colors shrink-0"
  >
    <span>Explore Live Portal</span>
    <span>↗</span>
  </a>
</div>

---

## System Architecture & Data Model

Both platforms are anchored by a cohesive, modern technical architecture designed for high reliability, minimal maintenance overhead, and strict data separation:

```
                                 [UNIFIED ARCHITECTURE]
                                           │
                ┌──────────────────────────┴──────────────────────────┐
                ▼                                                     ▼
    [INTERNAL OPERATIONS PLATFORM]                           [COMMERCIAL PORTAL]
       (Private PWA / Desktop)                               (Public-Facing Web)
                │                                                     │
   • GPS Punch Logging                                    • National Coverage Map
   • Geofence Verification                                • Capability Directory
   • Incident Tickets & Photos                            • Client Engagement CTA
   • Overtime & Payroll Rules                             • High-Performance Static
   • Strict Multi-Role RLS                                  Pages with Edge Cache
                │                                                     │
                └──────────────────────────┬──────────────────────────┘
                                           ▼
                               [SUPABASE / POSTGRESQL]
                                           │
                     ┌─────────────────────┴─────────────────────┐
                     ▼                                           ▼
             [OPERATIONAL CORE]                          [PUBLIC AGGREGATES]
             • `technicians`                             • `coverage_regions`
             • `projects` (Lat/Lon/Radius)               • `service_capabilities`
             • `attendance_punches`                      • `anonymized_metrics`
             • `incidents_log`
             • `payroll_summaries`
                     │
                     ▼
             [EXPORTS & AUDIT]
             • CSV for Payroll / Accounting
             • PDF Work Order Proofs for Clients
```

### Technical Highlights

* **Frontend**: Next.js (App Router) and Tailwind CSS for fast, responsive, server-rendered and static views.
* **Backend & Database**: Supabase (PostgreSQL 15) handling relational integrity, automated timestamps, geographic calculations (PostGIS coordinate distance math for geofences), and encrypted storage for field photos.
* **Security & Access Control**: PostgreSQL Row-Level Security (RLS) ensures that sensitive data—such as payroll amounts, personal employee phone numbers, and internal incident discussions—is inaccessible to unauthorized roles and completely partitioned from public views.
* **Offline Resilience**: Local browser IndexedDB storage caches attendance punches when field connectivity drops. Upon network restoration, an optimistic synchronization queue posts pending records to the backend with original hardware timestamps intact.

---

## Operational Impact

The true metric of any engineering system is not lines of code written; it is the reduction of chaos in daily operations.

Since deploying these digital tools across LATNOVVA's field operations:

| Metric | Before Custom Tooling | After Platform Deployment | Operational Benefit |
| :--- | :--- | :--- | :--- |
| **Weekly Payroll Reconciliation** | 12–16 hours across HR & Ops | Under 30 minutes | 95% reduction in administrative friction |
| **Punch Verification Accuracy** | Verbal text / WhatsApp estimate | Verified GPS + Geofence flag | Zero disputes over on-site attendance |
| **Client Work Order Billing** | Days spent tracking paper logs | Instant CSV / PDF export | Accelerated billing cycles and cash flow |
| **Incident Transparency** | Ad-hoc messages, lost photos | Structured field ticketing | Traceable safety and technical logs |
| **Commercial Presentation** | Static 30-page PDF decks | Dynamic interactive portal | Tangible proof of national coverage to asset owners |

---

## Concluding Reflections: Engineering Beyond Hardware

Throughout my engineering career, my work has focused on the physical layer of energy infrastructure: commissioning high-voltage central inverters, synchronizing transformers, and troubleshooting switchgear protection schemes.

Building these digital tools reinforced a fundamental truth:

> **An organization's operational processes are systems just like electrical circuits. They have inputs, resistance, leakage, and failure points.**

When timesheets depend on memory, that is resistance. When incident reports get lost in chat threads, that is leakage. When payroll math conflicts with field reality, the system trips.

By approaching administrative and operational challenges with an engineer's mindset—and leveraging AI-assisted development tools to implement solutions rapidly—we transformed LATNOVVA's field operations from a collection of fragile manual handoffs into an integrated, auditable, and resilient engine.

That is what *"engineering that survives contact with the field"* means to me.
