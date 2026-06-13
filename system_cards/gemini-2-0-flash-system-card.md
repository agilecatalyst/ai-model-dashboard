# Gemini 2.0 Flash Technical Report & System Card

Google released Gemini 2.0 Flash in December 2024. It is a high-speed, cost-efficient model optimized for real-time multimodal applications, agentic tasks, and low-latency voice/video streams.

## Technical Specifications
* **Developer:** Google
* **Architecture:** Sparse Mixture-of-Experts (MoE) optimized for speed
* **Context Length:** 1,048,576 tokens
* **Modalities:** Native multimodal supporting text, images, real-time audio, and video streams.
* **Special Features:** Multimodal Live API (low-latency audio/video output), advanced tool use, and web search integration.

## Performance Benchmarks
| Benchmark | Gemini 2.0 Flash | Gemini 1.5 Pro | GPT-4o mini |
|---|---|---|---|
| **MMLU** | 83.0% | 85.9% | 82.0% |
| **GPQA** | 55.4% | 46.2% | 40.0% |
| **HumanEval** | 88.0% | 84.1% | 87.2% |
| **AIME** | 32.5% | 20.0% | 15.0% |

## Safety and Alignment
* **Real-time Safety:** Features real-time voice and sound filter alignment to block abusive tones or harmful audio generation.
* **Hallucination Rate:** Evaluated at **1.8%** Vectara HHEM due to advanced tool grounding and search-guided reinforcement training.
* **Agentic Guardrails:** Red-teamed extensively for security during autonomous tool and system calls.
