# OpenAI GPT-OSS-20B Technical Report & System Card

Released in August 2025 under the Apache 2.0 license, GPT-OSS-20B is OpenAI's first open-weights model. It uses a Mixture-of-Experts (MoE) architecture and is optimized to run locally on consumer-grade hardware.

## Technical Specifications
* **Developer:** OpenAI
* **Architecture:** Mixture-of-Experts (MoE)
* **Parameters:** 20 Billion total parameters
* **Context Length:** 32,768 tokens
* **License:** Apache 2.0 (Permissive open source)
* **Hardware Requirements:** Optimized to run on a single consumer GPU with 16GB of VRAM.

## Performance Benchmarks
| Benchmark | GPT-OSS-20B | Qwen 2.5 32B | Gemma 2 27B | Llama 3.1 8B |
|---|---|---|---|---|
| **MMLU** | 82.5% | 83.0% | 83.2% | 68.4% |
| **GPQA** | 45.2% | 39.5% | 32.5% | 34.2% |
| **SWE-bench** | 11.5% | 14.0% | 11.0% | 12.0% |
| **HumanEval** | 84.8% | 82.5% | 78.4% | 62.2% |
| **AIME** | 24.1% | 11.2% | 10.5% | 14.5% |

## Safety and Alignment
* **Open Weights Security:** The base weights are pre-aligned for standard safety and helpfulness, but the model lacks the active runtime system prompt filters and API-level guardrails present on OpenAI's paid API endpoints.
* **Hallucination Rate:** Vectara HHEM hallucination rate is evaluated at **3.6%**, showing slightly higher conversational fabrications than commercial frontier models, but displaying high honesty under direct adversarial questioning.
* **Licensing Compliance:** Released under Apache 2.0, allowing third-party developers to modify, host, and fine-tune the model for private enterprise workflows without data-sharing constraints.
