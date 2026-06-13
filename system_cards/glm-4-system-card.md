# Zhipu AI GLM-4 Technical Report & System Card

GLM-4 is Zhipu AI's fourth-generation foundational model series. It includes commercial API endpoints (GLM-4 Plus, GLM-4 Air) and open-weights models (GLM-4-9B, GLM-4.5-Open).

## Technical Specifications
* **Developer:** Zhipu AI (THUDM)
* **Architecture:** Mixture-of-Experts (MoE) & Dense variants
* **Context Length:** 128,000 tokens
* **Modalities:** Multimodal support for text, images, and tool execution.
* **Open weights License:** MIT License (for GLM-4.5 and GLM-4-9B).

## Performance Benchmarks
| Benchmark | GLM-4 Air | GLM-4 Plus | GLM-4.5 Open | Qwen 2.5 32B |
|---|---|---|---|---|
| **MMLU** | 80.5% | 86.0% | 88.5% | 83.0% |
| **GPQA** | 38.2% | 45.8% | 79.1% | 39.5% |
| **SWE-bench** | 12.0% | 16.5% | 64.2% | 14.0% |
| **HumanEval** | 82.0% | 85.4% | 91.0% | 82.5% |
| **AIME** | 14.5% | 25.2% | 91.0% | 11.2% |

## Safety and Alignment
* **Alignment Strategy:** Aligned using Tsinghua University's preference datasets, utilizing Supervised Fine-Tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF).
* **Chinese AI Regulation:** Fully compliant with China's Generative AI Security Assessment standards. Implements robust guardrails around geopolitical, national security, and social harmony guidelines.
* **Factual Fidelity:** Shows a Vectara HHEM hallucination rate of **2.4%** for GLM-4 Plus and **1.8%** for GLM-4.5 Open, benefiting from reasoning-based verification.
