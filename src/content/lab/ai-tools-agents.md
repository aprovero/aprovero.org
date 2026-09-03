---
title: "AI Tools, Local Models & Engineering Agents"
category: "AI & Software"
status: "Active Development"
summary: "Practical experiments with local LLM inference, agentic tool-use loops, and automated technical knowledge extraction for engineering documentation."
technologies:
  - "Python"
  - "Ollama / Local Models"
  - "LangChain / LlamaIndex"
  - "Vector Embeddings"
  - "FastAPI"
highlights:
  - "Local inference without leaking proprietary data"
  - "Grounded retrieval over technical manuals and inverter schematics"
  - "Autonomous CLI agents for repetitive data munging"
order: 3
---

## Practical AI vs. Hype

The current wave of generative AI is drowning in marketing jargon and exaggerated claims. In an engineering context, hallucinated answers are worse than useless—they are safety hazards.

My work in this area focuses on **bounded, practical automation**: tools that assist in parsing multi-hundred-page equipment manuals, extracting Modbus register maps from PDFs, and organizing unstructured commissioning field notes into actionable logs.

## Current Experiments

1. **Grounded Manual Retrieval**: Using local embedding models to index technical manuals, grid-code compliance documents, and inverter error codes. When an engineer queries an error code, the system returns the exact manual section and parameter register rather than inventing advice.
2. **Agentic Data Extraction**: Scripts that ingest CSV time-series telemetry from solar plant monitoring systems, identify inverter trip signatures, and produce draft diagnostic summaries for engineering review.
3. **Local Private Inference**: Running quantized models locally for drafting and code assistance, ensuring zero project-sensitive technical details leave the local perimeter.