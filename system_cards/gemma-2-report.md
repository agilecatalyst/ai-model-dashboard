# Gemma 2 Technical Report & System Card

Google DeepMind released Gemma 2 in June 2024. This model family includes 9B and 27B parameter open-weights models, utilizing advanced training techniques like distillation, logit soft-capping, and sliding window attention.

## Technical Specifications
* **Developer:** Google DeepMind
* **Parameters:** 9 Billion & 27 Billion
* **Architecture:** Decoder-only Transformer
* **Context Length:** 8,192 tokens
* **Logit Soft-capping:** Prevents logits from growing too large, improving training stability.
* **Sliding Window Attention:** Alternates between full and sliding window attention (window size of 4096) to optimize KV-cache memory usage.

## Performance Benchmarks
| Benchmark | Gemma 2 9B | Gemma 2 27B | Llama 3 8B | Llama 3 70B |
|---|---|---|---|---|
| **MMLU** | 72.3% | 83.2% | 68.4% | 82.0% |
| **GPQA** | 29.8% | 32.5% | 34.2% | 39.5% |
| **HumanEval** | 68.3% | 78.4% | 62.2% | 81.7% |
| **MATH** | 35.2% | 51.8% | 30.0% | 50.4% |

## Safety and Alignment
* **Safety Tuning:** Uses supervised fine-tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF).
* **Hallucination Rate:** Vectara HHEM hallucination rate is evaluated at **3.2%**, showing strong factual consistency relative to parameter size.
* **Ethics & Censorship:** Aligned to prevent hate speech, harassment, and dangerous content. However, the refusal profile can occasionally trigger on benign metaphorical requests ("over-refusal").
