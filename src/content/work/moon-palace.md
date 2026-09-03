---
title: "Moon Palace BESS"
subtitle: "Utility-scale battery energy storage system and power conversion integration"
clientOrOwner: "Private Commercial / Infrastructure"
location: "Quintana Roo, Mexico"
capacity: "12.5 MW / 24 MWh BESS"
systemType: "BESS"
year: "2022–2023"
role: "BESS Technical & Commissioning Lead"
summary: "Integration, commissioning, and safety validation of a 12.5 MW / 24 MWh battery energy storage facility with power conversion systems (PCS) and energy management controls."
keyMetrics:
  - "12.5 MW PCS power rating"
  - "24 MWh lithium iron phosphate (LFP) capacity"
  - "BMS, EMS & PCS integration"
  - "NFPA 855 / safety compliance"
confidentialityNotice: "Cell-level telemetry, commercial dispatch strategies, and proprietary vendor control logic are omitted."
featured: true
order: 4
---

## Overview

Moon Palace BESS is an advanced battery energy storage system designed to provide peak shaving, power quality stabilization, and backup capability for a major critical infrastructure site in the Mexican Caribbean.

Battery storage introduces an entirely different set of operational imperatives compared to pure solar PV. With multi-megawatt electrochemical storage, commissioning is governed by stringent safety architectures, battery management system (BMS) cell balancing, thermal management control loops, and tight coordination with power conversion systems (PCS).

## Engineering Scope & Architecture

- **Power Conversion System (PCS)**: Bidirectional inverter commissioning capable of instantaneous four-quadrant active and reactive power dispatch.
- **Battery Management System (BMS)**: Validating rack and container-level BMS communications, balancing algorithms, state-of-charge (SoC) calibration, and multi-tiered fault interlocks.
- **Thermal Management**: Commissioning liquid cooling chillers, HVAC units, and fire suppression systems (clean agent & aerosol) integrated with dry contact safety shutdowns.
- **Energy Management System (EMS) Integration**: Tuning response latency for frequency regulation and peak demand shaving commands.

## Safety & Field Reality

Working with high-voltage DC battery racks demands rigorous safety governance. NFPA 70E, NFPA 855 guidelines, Lockout/Tagout (LOTO) protocols, and multi-level insulation monitoring are not bureaucratic formalities; they are the boundary between safe operation and catastrophic thermal runaway.

During testing, ensuring that auxiliary emergency stops cleanly de-energized both DC contactors and AC breakers under full load without transient overvoltages was a primary verification benchmark.

## Takeaways

1. **DC systems require absolute discipline**: Unlike AC systems where current passes through zero 120 times a second, DC arcs do not self-extinguish. Switchgear, contactors, and disconnect switches must be verified under strict visual and measurement protocols.
2. **The BMS is only as good as its communication reliability**: A single dropped Modbus or CAN frame cannot be ignored. Communication bus termination resistance, cable shielding, and baud rate stability are vital.
