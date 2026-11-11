# Zhipu AI GLM-5 Technical Report & System Card

GLM-5 is Zhipu AI's fifth-generation model family, released in early 2026. The series is trained entirely on domestic Huawei Ascend chips using the MindSpore framework, establishing a high-performance open weight ecosystem independent of NVIDIA hardware.

## Technical Specifications
* **Developer:** Z.ai (Zhipu AI / THUDM)
* **Architecture:** Mixture-of-Experts (MoE) with DeepSeek Sparse Attention (DSA)
* **Parameters:** 744 Billion total parameters (40 Billion active per token)
* **Context Length:** 200,000 tokens
* **License:** MIT License (open weights)
* **Training Platform:** Huawei Ascend 910B/910C clusters, MindSpore post-training framework.
* **RL Framework:** `slime` (asynchronous Reinforcement Learning for preference tuning)

## Performance Benchmarks
| Benchmark | GLM-5 Open | GLM-5.1 Open | Qwen 3 72B | Llama 4 |
|---|---|---|---|---|
| **MMLU** | 92.4% | 93.5% | 89.2% | 93.8% |
| **GPQA** | 86.0% | 87.5% | 54.0% | 76.5% |
| **SWE-bench** | 77.8% | 82.4% | 28.5% | 42.0% |
| **HumanEval** | 95.2% | 96.8% | 90.4% | 93.5% |
| **AIME** | 92.7% | 94.0% | 38.0% | 90.5% |

## Later Generations (GLM-5.3, August 2026)

The GLM-5 line continued with GLM-5.3 (743B parameters, released 2026-08-14) and the smaller GLM-5.3 Flash (320B total / 18B active, released 2026-08-26). Figures below are context-only and each is labelled by measurement type.

| Item | GLM-5.3 | GLM-5.3 Flash |
|---|---|---|
| License | Custom "GLM-5.3 License" (not MIT) | MIT |
| Context | 1M tokens (vendor-reported) | 1M tokens (vendor-reported) |
| GPQA Diamond | Not published | 90.9% (independent, OpenRouter) |
| SWE-bench Pro V2 | 84.3% (independent, Scale AI, mini-swe-agent max) | Not published |
| LMArena Text Elo | 1479 (independent) | 1474 (independent) |

**Licence warning for EU SMEs:** the move from MIT (GLM-5.2) to a custom licence for GLM-5.3 is easy to miss. The MIT-licensed GLM-5.3 Flash, not the larger GLM-5.3, is the variant that keeps commercial self-hosting unambiguous.

## Safety and Alignment
* **Autonomous Safety:** Tested under the *Vending Bench 2* and *BrowseComp* agentic safety frameworks. Incorporates specific constraints in the post-training RL loop to prevent autonomous models from deleting user directories or executing malicious system binaries.
* **Hallucination Rate:** Extremely low hallucination rate (**1.3%** on GLM-5, **1.1%** on GLM-5.1) due to active pre-execution test runs and self-checking loops.
* **Ethics Compliance:** Adheres to regional safety checks while utilizing MIT licensing to allow international developers to overlay their own custom alignment guardrails.
