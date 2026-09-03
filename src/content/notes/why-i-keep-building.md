---
title: "Why I keep building things I could probably just buy"
date: "2026-01-20"
summary: "On the deliberate inefficiency of building hardware, homelabs, and software tools from scratch to preserve deep understanding."
tags:
  - "Philosophy"
  - "Engineering"
  - "Hardware"
draft: true
readTime: "4 min read"
---

> **Note:** This is an upcoming technical draft currently in preparation.

### The Illusion of Convenience

You can buy a smart fan on Amazon for $35. You can buy a commercial NAS appliance with a polished web interface. You can spin up a managed database with two clicks.

Economically, building your own version of these things makes no sense. The hours spent reading ESP32 datasheet errata, routing PCBs, and configuring ZFS storage pools will never show a positive financial return on investment.

### Understanding as an Antidote to Fragility

When you buy a black-box product, you are a consumer. When it breaks, your only recourse is to restart it, open a support ticket, or throw it away.

When you build the system—or at least understand every layer down to the copper traces and system calls—you own the failure mode. You know where the heat accumulates. You know why the relay chatter occurred. You know which register caused the timeout.

In an industry increasingly governed by abstractions layered on top of abstractions, keeping one foot planted firmly in the physical world is the best engineering decision you can make.