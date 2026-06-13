# Gemini 1.5 Pro Technical Report & System Card

Google released Gemini 1.5 Pro in May 2024, showcasing a Mixture-of-Experts (MoE) architecture and introducing a revolutionary context window of up to 2 million tokens.

## Technical Specifications
* **Developer:** Google
* **Architecture:** Mixture-of-Experts (MoE)
* **Context Length:** 1,048,576 tokens (standard) / 2,097,152 tokens (developer preview/API)
* **Modalities:** Native multimodal supporting text, images, video, and audio.
* **Training Platform:** Trained on Google's custom TPU v4 and TPU v5p accelerators.

## Performance Benchmarks
| Benchmark | Gemini 1.5 Pro | Gemini 1.0 Ultra | GPT-4o |
|---|---|---|---|
| **MMLU** | 85.9% | 83.7% | 88.7% |
| **GPQA** | 46.2% | 35.8% | 53.6% |
| **HumanEval** | 84.1% | 74.4% | 90.2% |
| **AIME** | 20.0% | 15.0% | 13.4% |

## Safety and Alignment
* **Responsible AI:** Governed under Google's core AI Principles. Evaluated for safety risks in cybersecurity, biological hazards, and social biases.
* **Contextual Grounding:** Low hallucination rate (**2.0%** on Vectara HHEM) when utilizing its massive context window for document retrieval, showing high faithfulness to input sources.
* **Alignment:** Implements reinforcement learning with human feedback (RLHF) and strict safety filter APIs.
