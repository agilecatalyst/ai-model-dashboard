# Gemini 3.5 Flash Technical Report & System Card

Announced in May 2026 at Google I/O, Gemini 3.5 Flash is the flagship fast model of Google's third-generation series. It is designed for multi-step agentic autonomy, deep context-driven coding, and advanced scientific reasoning.

## Technical Specifications
* **Developer:** Google
* **Architecture:** Advanced hybrid Mixture-of-Experts (MoE)
* **Context Length:** 2,097,152 tokens (2 million tokens)
* **Modalities:** Native multimodal supporting text, images, video (up to 2 hours), and audio.
* **Agent Integration:** Direct built-in support for Model Context Protocol (MCP) and multi-step tool execution.

## Performance Benchmarks
| Benchmark | Gemini 3.5 Flash | Gemini 2.5 Flash Lite | GPT-5.5 |
|---|---|---|---|
| **MMLU** | 90.5% | 85.2% | 95.8% |
| **GPQA** | 71.2% | 58.0% | 89.2% |
| **SWE-bench** | 39.0% | 29.2% | 74.0% |
| **HumanEval** | 93.8% | 89.5% | 97.5% |
| **AIME** | 70.5% | 42.0% | 92.1% |

## Safety and Alignment
* **Agentic Guardrails:** Tested extensively for autonomous computer control safety. Restricts unauthorized system mutations and implements verification loops before completing critical tool actions.
* **Factual Consistency:** Employs advanced search-grounded self-verification, achieving an exceptionally low hallucination rate of **1.1%**.
* **Ethics Alignment:** Incorporates feedback reinforcement loop on safety, sovereignty, and cognitive bias prevention.
