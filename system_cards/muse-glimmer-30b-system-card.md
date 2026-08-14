# Muse Glimmer 30B System Card & Technical Overview

**Release Date:** August 10, 2026  
**Developer:** Meta Superintelligence Labs  
**Model Family:** Muse Series  
**Access:** Open Weights (Apache 2.0 License)  

## 1. Overview & Intended Use
Muse Glimmer 30B is an open-weight, dense multimodal model distilled from Meta's larger Muse Spark teacher model. Purpose-built for "always-on" local agentic workflows, it enables developers to run autonomous agents, coding assistants, screenshot analysis, and function calling directly on consumer hardware (e.g., workstation PCs with 24–32 GB VRAM).

### Primary Use Cases
* Always-on local agentic frameworks (e.g., OpenClaw, local CLI code assistants).
* Function calling, LLM-as-a-judge evaluations, and synthetic data generation.
* Visual document processing, UI screenshot understanding, and chart analysis.
* Edge deployment via `vLLM`, `llama.cpp`, and LM Studio runtimes.

## 2. Technical Specifications
| Attribute | Specification |
| :--- | :--- |
| **Total Parameters** | 29.6 Billion (Causal Dense Transformer) |
| **Vision Encoder** | ~1.8 Billion Parameters |
| **Context Window** | 131,072 (128K) tokens |
| **Inference Optimization** | Includes DFlash speculative decoding drafter |
| **License** | Apache 2.0 (Permissive Open Weights) |
| **Hardware Requirement** | 24GB – 32GB VRAM (Q4_K_M or FP16) |

## 3. Benchmark Performance
| Benchmark | Score |
| :--- | :---: |
| **AIME 2026** | 94.7% |
| **GPQA Diamond** | 83.5% |
| **SWE-Bench Verified** | 76.0% |
| **MMLU** | 91.2% |
| **HumanEval** | 88.5% |
| **MCP Atlas (Public)** | 75.5% |

## 4. Safety & System Integration
* **Risk Profile:** Assessed as "Moderate" risk under Meta AI safety framework. Meta recommends deploying Muse Glimmer as part of a structured application with input/output guardrails (e.g. Llama Guard 4).
* **Hallucination Rate:** Measured at **1.3%** on general agentic benchmarks. Highly stable on code and structured JSON extraction.
