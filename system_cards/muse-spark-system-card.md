# Muse Spark 1.2 Technical Report & System Card

Released in August 2026, Muse Spark 1.2 is Meta's flagship commercial agentic reasoning engine, featuring a 1M token context window and state-of-the-art software engineering capabilities.

## Technical Specifications
* **Developer:** Meta
* **Architecture:** Frontier Agentic Reasoning Transformer
* **Context Length:** 1,000,000 tokens
* **Modalities:** Multimodal text, code, high-resolution images, PDF, and audio

## Performance Benchmarks
| Benchmark | Muse Spark 1.2 | Muse Glimmer 30B | Claude 5 Opus | GPT-5.6 |
|---|---|---|---|---|
| **MMLU** | 96.1% | 91.2% | 98.1% | 97.8% |
| **GPQA** | 92.4% | 83.5% | 94.5% | 93.8% |
| **SWE-bench** | 82.9% | 76.0% | 74.8% | 76.5% |
| **HumanEval** | 94.5% | 88.5% | 99.2% | 98.4% |
| **AIME** | 95.8% | 94.7% | 97.2% | 95.5% |

## Safety and Alignment
* **Safety Alignment:** Governed by Meta AI Safety Principles with real-time CoT safety alignment.
* **Factual Consistency:** Hallucination rate is **0.8%**.
