# Qwen 3.8 32B Technical Report & System Card

Released in June 2026 under the permissive MIT license, Qwen 3.8 32B is Alibaba Cloud's flagship dense 32B open-weights model, optimized for local agentic IDE completion and high-horizon code reasoning within 32GB RAM hardware limits.

## Technical Specifications
* **Developer:** Alibaba Cloud
* **Parameters:** 32 Billion (Dense)
* **Architecture:** Decoder-only Transformer with test-time reasoning
* **Context Length:** 128,000 tokens
* **License:** MIT License (Permissive Open Source)
* **Hardware Target:** Single consumer GPU / workstation with 32GB VRAM (Q4_K_M / 4-bit QAT).

## Performance Benchmarks
| Benchmark | Qwen 3.8 32B | Qwen 3.6 27B | Gemma 4 31B | Claude 3.7 Sonnet |
|---|---|---|---|---|
| **MMLU** | 90.5% | 88.0% | 92.4% | 92.1% |
| **GPQA** | 89.0% | 87.8% | 84.3% | 75.4% |
| **SWE-bench** | 79.5% | 77.2% | 56.5% | 62.1% |
| **HumanEval** | 95.8% | 94.0% | 91.2% | 94.5% |
| **AIME** | 84.0% | 72.5% | 89.2% | 78.0% |

## Safety and Alignment
* **Alignment & Guardrails:** Aligned via DPO and PPO, subject to regional AI safety standards.
* **Factual Consistency:** Hallucination rate is evaluated at **1.2%** due to internal reasoning verification loops during execution.
* **Licensing Freedom:** Fully MIT licensed, enabling commercial modification, local deployment, and unrestricted fine-tuning.
