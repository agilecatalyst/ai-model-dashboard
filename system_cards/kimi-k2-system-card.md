# Kimi K2 Technical Report & System Card

Released in July 2025 by Moonshot AI, Kimi K2 is an open-weights Mixture-of-Experts (MoE) model.

## Technical Specifications
* **Developer:** Moonshot AI
* **Architecture:** Mixture-of-Experts (MoE)
* **Context Length:** 2,000,000 tokens
* **License:** Moonshot Modified MIT License

## Performance Benchmarks
| Benchmark | Kimi K2 | Kimi K1.5 | Qwen 2.5 32B |
|---|---|---|---|
| **MMLU** | 90.1% | 88.2% | 83.0% |
| **GPQA** | 75.0% | 70.0% | 39.5% |
| **SWE-bench** | 36.8% | 29.5% | 14.0% |
| **HumanEval** | 93.2% | 91.0% | 82.5% |
| **AIME** | 80.0% | 74.0% | 11.2% |

## Safety and Alignment
* **Alignment:** Aligned via RLHF.
* **Factual Consistency:** Hallucination rate is **1.8%**.
