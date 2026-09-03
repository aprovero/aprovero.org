---
title: "Homelab & Self-Hosted Infrastructure"
category: "Infrastructure"
status: "Operational"
summary: "The dedicated on-premise compute, storage, container platform, and network architecture serving aprovero.org and hosting experimental engineering services."
technologies:
  - "Proxmox VE"
  - "Docker / Compose"
  - "Alpine Linux"
  - "Nginx / Reverse Proxy"
  - "Prometheus & Grafana"
  - "ZFS Storage"
  - "Automated Backups"
highlights:
  - "Directly hosts aprovero.org on dedicated local compute"
  - "Sanitized network isolation between public services and internal lab"
  - "Automated encrypted off-site snapshot backups"
order: 1
---

## Why I Built It

This website is served directly from infrastructure I operate myself in Mexico City.

Commercial cloud platforms make it trivial to deploy a static website with a single CLI command, but outsourcing everything deprives an engineer of the visceral feedback loop that comes from running real systems. Operating my own compute stack forces me to think through the entire chain: bare-metal thermal management, UPS runtime, hardware virtualization, container lifecycles, ingress proxies, TLS automation, and off-site backup routines.

## Sanitized Architecture Overview

The lab is designed around simple, resilient layers with intentional separation between external ingress and experimental internal networks:

- **Edge Routing & Ingress**: Strict rate limiting and WAF rules. Ingress traffic routes via an encrypted egress-only tunnel with zero open inbound firewall ports to the local network.
- **DMZ Container Network**: Isolated container VLAN hosting aprovero.org with minimal read-only privileges on Alpine Linux and unprivileged Nginx.
- **Observability Stack**: Prometheus time-series metric collection and Grafana dashboards monitoring thermals, host power draw, and service latency.
- **Storage & Resilience**: ZFS pools with automated hourly snapshots and encrypted off-site replication.

> **Security Note:** In line with sound operational security practices, IP addresses, internal hostnames, subnet masks, firewall rules, and authentication configurations are intentionally omitted from public documentation.

## What Worked & What Failed

- **What worked**: Building immutable containers with multi-stage Docker builds. The production image for this site contains only compiled static HTML/CSS and an unprivileged Nginx binary, keeping memory footprints under 15 MB.
- **What failed initially**: Trying to manage too many disparate single-purpose VMs. The maintenance overhead of OS updates across five distinct virtual machines was wasteful. Migrating to lightweight container workloads under a single hypervisor dramatically lowered standby power consumption and management fatigue.
- **What changed**: Inverted ingress architecture. Rather than forwarding external ports through my home router, all incoming HTTP traffic terminates through an encrypted egress-only tunnel. This eliminates exposed ports entirely.

## What Remains Unfinished

- Automated fallback failover to an off-site static mirror if the local fiber connection suffers an extended outage.
- Integration of an automated smart PDU to remotely power-cycle hung hardware interfaces based on external heartbeat pings.