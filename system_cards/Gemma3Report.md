# Gemma 3 Technical Report & System Card

Gemma 3 was released in March 2025, introducing native multimodality (text, vision) and expanding multilingual capabilities to over 140 languages.

## Technical Specifications
* **Developer:** Google DeepMind
* **Sizes:** 1B, 4B, 12B, and 27B
* **Architecture:** Native multimodal decoder-only Transformer
* **Context Length:** 128,000 tokens (32,000 tokens for 1B)
* **Vision Encoder:** SigLIP vision-language architecture
* **Multilingualism:** Fully aligned and balanced across 140+ languages

## Performance Benchmarks
| Benchmark | Gemma 3 12B | Gemma 3 27B | Gemini 1.5 Pro |
|---|---|---|---|
| **MMLU** | 82.8% | 85.5% | 85.9% |
| **GPQA** | 41.5% | 44.8% | 46.2% |
| **HumanEval** | 78.2% | 84.1% | 84.1% |
| **AIME** | 16.5% | 20.8% | 20.0% |

## Safety and Alignment
* **Safety Alignment:** Uses cross-lingual preference optimization to ensure safety rules apply equally across all 140 languages.
* **Hallucination Rate:** Vectara HHEM hallucination rate is reduced to **2.6%**, benefiting from search-grounding and retrieval reinforcement.
* **Refusals:** Showcases a more balanced refusal profile compared to Gemma 2, decreasing false-positive refusals on sensitive topics.
