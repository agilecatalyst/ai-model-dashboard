# Claude 4.5 Sonnet Technical Report & System Card

Released in November 2025, Claude 4.5 Sonnet is Anthropic's hybrid reasoning model, optimized for software engineering and secure tool execution.

## Technical Specifications
* **Developer:** Anthropic
* **Architecture:** Hybrid Transformer with test-time reasoning
* **Context Length:** 200,000 tokens
* **Modalities:** Multimodal text, image, and native Computer Use API

## Performance Benchmarks
| Benchmark | Claude 4.5 Sonnet | Claude 3.7 Sonnet | GPT-5 |
|---|---|---|---|
| **MMLU** | 93.8% | 92.1% | 94.2% |
| **GPQA** | 81.2% | 75.4% | 85.0% |
| **SWE-bench** | 64.0% | 62.1% | 62.5% |
| **HumanEval** | 95.8% | 94.5% | 96.0% |
| **AIME** | 82.0% | 78.0% | 88.5% |

## Safety and Alignment
* **Alignment Paradigm:** Built with Constitutional AI.
* **Factual Consistency:** Hallucination rate is **1.4%**.
