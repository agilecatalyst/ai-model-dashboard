# Gemini 2.5 Flash Lite Technical Report & System Card

Released in September 2025, Gemini 2.5 Flash Lite is Google's highly optimized, extremely cheap, fast multimodal model designed for high-volume enterprise pipelines and high-fidelity RAG workflows.

## Technical Specifications
* **Developer:** Google
* **Architecture:** Sparse Mixture-of-Experts (MoE) optimized for ultra-low latency
* **Context Length:** 1,048,576 tokens
* **Modalities:** Native multimodal supporting text, images, and audio.
* **Pricing & Efficiency:** Designed to offer frontier-class reasoning at a fraction of standard API costs.

## Performance Benchmarks
| Benchmark | Gemini 2.5 Flash Lite | Gemini 2.0 Flash | Claude 3.5 Haiku |
|---|---|---|---|
| **MMLU** | 85.2% | 83.0% | 80.5% |
| **GPQA** | 58.0% | 55.4% | 42.0% |
| **HumanEval** | 89.5% | 88.0% | 88.1% |
| **AIME** | 42.0% | 32.5% | 22.0% |

## Safety and Alignment
* **Factual Fidelity:** Noted for its low hallucination rate (**1.5%** on Vectara HHEM leaderboard), outperforming larger models on long-document retrieval and summarization.
* **Ethics & Censorship:** Implements Google's core safety guardrails, preventing unsafe code execution, personal data leakage, and toxic outputs.
