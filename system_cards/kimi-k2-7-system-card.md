# Kimi K2.7 Technical Report & System Card

Released in May 2026, Kimi K2.7 introduced a 4-million token context window with native linear memory complexity.

## Technical Specifications
* **Developer:** Moonshot AI
* **Architecture:** Swarm MoE with linear memory
* **Context Length:** 4,000,000 tokens

## Performance Benchmarks
| Benchmark | Kimi K2.7 | Kimi K2.6 | Claude 4.5 Sonnet |
|---|---|---|---|
| **MMLU** | 93.8% | 92.5% | 93.8% |
| **GPQA** | 88.9% | 87.6% | 81.2% |
| **SWE-bench** | 68.2% | 60.4% | 64.0% |
| **HumanEval** | 96.8% | 96.0% | 95.8% |
| **AIME** | 91.5% | 89.0% | 82.0% |

## Safety and Alignment
* **Alignment Paradigm:** Native agentic tool verification.
* **Factual Consistency:** Hallucination rate is **1.1%**.
