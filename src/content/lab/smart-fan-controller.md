---
title: "Smart Fan Controller (ESP32 Retrofit)"
category: "Electronics"
status: "Active Development"
summary: "Retrofitting a conventional 110V 3-speed pedestal fan with Wi-Fi control using an ESP32 microcontroller, optocoupled relays, and fail-safe manual override."
technologies:
  - "ESP32 (ESP-WROOM-32)"
  - "C++ / ESP-IDF / FreeRTOS"
  - "Optocoupled Relay Array"
  - "Galvanic Isolation"
  - "MQTT / Home Assistant"
highlights:
  - "Preserves manual button operation alongside network control"
  - "Firmware interlock prevents multiple motor windings from energizing simultaneously"
  - "Complete physical and galvanic isolation between mains AC and 3.3V logic"
order: 2
---

## Motivation

Standard pedestal and box fans are mechanically durable, but their electrical control interfaces haven't changed in half a century: mechanical push-buttons that route 110V AC current through discrete speed windings (Low, Medium, High).

Off-the-shelf smart fans are usually overpriced, poorly built, or locked into fragile proprietary clouds. The goal of this project was to retrofit an existing, high-airflow AC fan with modern network intelligence while upholding strict electrical safety standards.

## Electrical Architecture & Isolation

Connecting an experimental microcontroller directly to household 110V AC is dangerous if not properly isolated. The core design constraint: **mains voltage must never share a ground or trace with low-voltage digital logic.**

Key hardware considerations:
1. **Optocoupled Relays**: Switching between fan motor speed windings is done via mechanical relays triggered through optocouplers, providing 2,500V+ isolation between the ESP32 GPIOs and the 110V AC lines.
2. **Mutual Exclusion Interlock**: If two speed windings on a multi-tap induction motor are energized at the same time, the windings overheat and the motor burns out. While the ESP32 firmware enforces software mutual exclusion, a hardware interlock circuit ensures that physically only one relay can supply line current at any given instant.
3. **Fail-Safe Manual Mode**: If the Wi-Fi goes down or the microcontroller resets, physical push buttons still trigger mechanical states.

## State of the Project

- **Hardware**: Breadboard prototype validated under simulated 110V inductive loads. Custom PCB layout in KiCAD is being finalized with creepage and clearance trace rules adhering to UL 60950.
- **Firmware**: Written in C++ using FreeRTOS tasks. One task handles local push-button debounce and relay actuation; another handles MQTT state telemetry.
- **Current compromise**: Powering the ESP32 requires a small enclosed AC-DC buck converter inside the fan housing, which tightens enclosure volume requirements.