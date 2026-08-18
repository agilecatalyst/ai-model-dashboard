# Qwen 3.6 30B MoE (A3B) Technical Report & System Card

Released in May 2026 under the Apache 2.0 license, Qwen 3.6 30B MoE (A3B) is Alibaba Cloud's lightweight Mixture-of-Experts model, featuring 30 Billion total parameters with only 3 Billion active parameters per token.

## Technical Specifications
* **Developer:** Alibaba Cloud
* **Parameters:** 30 Billion Total (3 Billion Active per token)
* **Architecture:** Mixture-of-Experts (MoE)
* **Context Length:** 128,000 tokens
* **License:** Apache 2.0 (Permissive Open Source)

## Performance Benchmarks
| Benchmark | Qwen 3.6 30B MoE (A3B) | Qwen 3.5 MoE 20B | Qwen 3.6 27B |
|---|---|---|---|
| **MMLU** | 89.4% | 84.5% | 88.0% |
| **GPQA** | 79.2% | 48.2% | 87.8% |
| **SWE-bench** | 68.5% | 20.5% | 77.2% |
| **HumanEval** | 95.2% | 88.0% | 94.0% |
| **AIME** | 81.0% | 38.0% | 72.5% |

## Safety and Alignment
* **Alignment Paradigm:** Built with MoE gating safety checks.
* **Factual Consistency:** Hallucination rate is **1.3%**.
