---
title: "Los Cuervos Solar PV"
subtitle: "Utility-scale inverter block integration and high-voltage grid validation"
clientOrOwner: "Utility-Scale Solar Project"
location: "Aguascalientes, Mexico"
capacity: "234 MW PV"
systemType: "Solar PV"
year: "2021–2022"
role: "Field Service & Commissioning Engineer"
summary: "Energization, inverter parameterization, and plant-controller SCADA integration across 234 MW of utility solar generation in central Mexico."
keyMetrics:
  - "234 MW peak capacity"
  - "Multi-megawatt central inverter stations"
  - "Plant controller & SCADA coordination"
confidentialityNotice: "Specific grid interconnection studies, proprietary firmware builds, and commercial contract thresholds are omitted."
featured: true
order: 2
---

## Overview

Located in the semi-arid highlands of Aguascalientes, Mexico, Los Cuervos is a 234 MW utility-scale solar generation plant. The site features extensive high-voltage infrastructure and central inverter stations delivering power into Mexico's National Interconnected System (SIN).

I was responsible for inverter commissioning, executing protection settings according to utility study requirements, resolving integration anomalies between the Power Plant Controller (PPC) and inverter stations, and validating unit availability during critical operational phases.

## Engineering Scope

- **Inverter Parameterization**: Configuring grid-following parameters, voltage ride-through (LVRT/HVRT), frequency ride-through (LFRT/HFRT), and reactive power control curves according to the Mexican Grid Code (*Código de Red*).
- **Communication Architecture**: Commissioning optical fiber ring topologies connecting central inverter stations with SCADA and the PPC via Modbus TCP.
- **Site Acceptance Testing (SAT)**: Conducting synchronized power curtailment tests, reactive power injection during nighttime (Q at night), and step-response verification under grid operator observation.

## Challenges & Root Cause Analysis

Semi-arid environments present high dust concentration and wide diurnal temperature swings. During initial energization, thermal expansion cycles combined with dust accumulation on external sensor arrays generated sporadic tracking errors and communication jitter.

By systematically logging communication frame errors and analyzing waveform captures during fault events, we traced the issue to transient ground noise coupling into the RS-485 / fiber transceivers under rapid solar ramping. Applying targeted shielding grounds and adjusting transceiver communication timing eliminated the sporadic dropouts.

## Field Lessons

- **Validate communication margins before power-up**: Network noise floors change drastically between idle inverter state and 100% switching frequency under full IGBT modulation. Testing communication links under load is essential.
- **Documentation discipline across subcontractors**: Subcontractors working in parallel must adhere strictly to unified torque marking and label schematics to avoid post-energization investigations.
