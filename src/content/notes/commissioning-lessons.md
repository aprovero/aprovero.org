---
title: "Commissioning lessons worth writing down"
date: "2026-03-15"
summary: "Reflections on utility-scale solar and BESS commissioning: why theoretical designs diverge from field realities, and how disciplined procedures save projects."
tags:
  - "Commissioning"
  - "Solar PV"
  - "BESS"
  - "Engineering"
draft: true
readTime: "6 min read"
---

> **Note:** This is an upcoming technical draft currently in preparation.

### The Gap Between Paper and Copper

Every engineering graduate leaves university with an intuitive belief in the purity of schematics. A single-line diagram looks clean, balanced, and orderly.

Then you step onto a 300-megawatt solar construction site in the middle of a Mexican summer. The ground is churning mud or blinding dust. The high-voltage interconnection window is set for 04:00 AM on Sunday. The utility inspector has arrived with a clipboard and zero patience for excuses.

This is where engineering actually happens: in the friction between the theoretical model and the physical universe.

### Three Rules from the Field

1. **Trust the torque wrench, not the impact driver**: The majority of early electrical failures in power electronics can be traced back to bad mechanical connections—either over-torqued lugs that crush copper strands or under-torqued busbars that develop hot spots under heavy current.
2. **Phase rotation must be physically measured, never assumed**: Colors in cable jackets lie. Subcontractors pull conductors out of order. Trust only calibrated multimeters and rotation meters at the disconnect terminal.
3. **Communication noise is load-dependent**: A Modbus network that works perfectly when the inverter is in standby will frequently drop packets the moment the IGBTs start switching at full power. Always validate communication links during full-load testing.