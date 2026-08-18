# Qwen 3.8 27B Technical Report & System Card

Released in June 2026 under the MIT license, Qwen 3.8 27B is Alibaba Cloud's flagship 27B dense open-weights model, built for high-performance agentic coding and mathematical reasoning on 24GB-32GB VRAM workstations.

## Technical Specifications
* **Developer:** Alibaba Cloud
* **Parameters:** 27 Billion (Dense)
* **Architecture:** Decoder-only Transformer with test-time reasoning
* **Context Length:** 128,000 tokens
* **License:** MIT License (Permissive Open Source)

## Performance Benchmarks
| Benchmark | Qwen 3.8 27B | Qwen 3.8 32B | Qwen 3.6 27B | Gemma 4 31B |
|---|---|---|---|---|
| **MMLU** | 91.2% | 90.5% | 88.0% | 92.4% |
| **GPQA** | 89.5% | 89.0% | 87.8% | 84.3% |
| **SWE-bench** | 79.8% | 79.5% | 77.2% | 56.5% |
| **HumanEval** | 96.2% | 95.8% | 94.0% | 91.2% |
| **AIME** | 86.0% | 84.0% | 72.5% | 89.2% |

## Safety and Alignment
* **Alignment Paradigm:** Built with DPO alignment and self-verification.
* **Factual Consistency:** Hallucination rate is **1.2%**.
