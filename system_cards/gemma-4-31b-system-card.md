# Gemma 4 31B Dense Technical Report & System Card

Released in April 2026, Gemma 4 is Google's next-generation open weights model. It represents a massive leap in reasoning capabilities, utilizing research developments from Google's Gemini 3 frontier series, and is released under the permissive **Apache 2.0 license** for the first time.

## Technical Specifications
* **Developer:** Google DeepMind
* **Parameters:** 31 Billion (Dense)
* **Architecture:** Decoder-only Transformer
* **Context Length:** 256,000 tokens
* **License:** Apache 2.0 (Permissive)
* **Optimization:** Highly optimized for local agentic workflows, long-horizon tool use, and multi-step math/code reasoning.

## Performance Benchmarks
| Benchmark | Gemma 4 31B | Gemma 3 27B | Llama 4 | Claude 3.5 Sonnet |
|---|---|---|---|---|
| **MMLU** | 92.4% | 85.5% | 93.8% | 88.7% |
| **GPQA** | 74.4% | 44.8% | 76.5% | 59.4% |
| **SWE-bench** | 36.5% | 18.0% | 42.0% | 49.0% |
| **HumanEval** | 91.2% | 84.1% | 93.5% | 92.0% |
| **AIME** | 89.2% | 20.8% | 90.5% | 16.0% |

## Safety and Alignment
* **Alignment Paradigm:** Built with Constitutional AI principles and reinforced with Direct Preference Optimization (DPO). Evaluated for autonomous agentic safety, cyber-security capabilities, and private data safety.
* **Hallucination Rate:** Vectara HHEM hallucination rate is reduced to an impressive **1.6%** due to its reasoning-based verification loops.
* **Ethics & Sovereign AI:** Highly customizable under the Apache 2.0 license, allowing corporate and government entities to align the model with local regulatory and ethical guidelines.
