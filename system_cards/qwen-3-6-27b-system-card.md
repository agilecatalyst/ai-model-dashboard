# Qwen 3.6 27B Technical Report & System Card

Released in April 2026 under the MIT license, Qwen 3.6 27B is Alibaba Cloud's open-weights dense model optimized for private agentic coding and autonomous full-stack development.

## Technical Specifications
* **Developer:** Alibaba Cloud
* **Parameters:** 27 Billion (Dense)
* **Architecture:** Decoder-only Transformer with test-time reasoning
* **Context Length:** 128,000 tokens
* **License:** MIT License (Permissive Open Source)

## Performance Benchmarks
| Benchmark | Qwen 3.6 27B | Qwen 3.5 32B | Gemma 4 31B | Claude 3.7 Sonnet |
|---|---|---|---|---|
| **MMLU** | 88.0% | 85.8% | 92.4% | 92.1% |
| **GPQA** | 87.8% | 52.0% | 84.3% | 75.4% |
| **SWE-bench** | 77.2% | 24.5% | 56.5% | 62.1% |
| **HumanEval** | 94.0% | 88.0% | 91.2% | 94.5% |
| **AIME** | 72.5% | 45.0% | 89.2% | 78.0% |

## Safety and Alignment
* **Alignment Paradigm:** Built with DPO and self-verification guardrails.
* **Factual Consistency:** Hallucination rate is **1.5%**.
