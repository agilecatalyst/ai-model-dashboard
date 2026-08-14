# Claude 5 Sonnet Technical Report & System Card

Released in July 2026, Claude 5 Sonnet is Anthropic's balanced frontier workhorse. It combines state-of-the-art coding capabilities with fast inference and deep agentic tool execution.

## Technical Specifications
* **Developer:** Anthropic
* **Architecture:** Hybrid Transformer with dynamic extended thinking toggles
* **Context Length:** 500,000 tokens
* **Modalities:** Multimodal (Text, Image, PDF/Codebase, Computer Use API)
* **Access:** Commercial API and Enterprise Claude App

## Performance Benchmarks
| Benchmark | Claude 5 Sonnet | Claude 4.5 Sonnet | GPT-5.5 | Gemini 3.5 Flash |
|---|---|---|---|---|
| **MMLU** | 96.5% | 93.8% | 95.8% | 90.5% |
| **GPQA** | 91.8% | 81.2% | 89.2% | 71.2% |
| **SWE-bench** | 72.0% | 64.0% | 74.0% | 39.0% |
| **HumanEval** | 98.5% | 95.8% | 97.5% | 93.8% |
| **AIME** | 93.5% | 82.0% | 92.1% | 70.5% |

## Safety and Alignment
* **Constitutional Alignment:** Features 5th-generation Constitutional AI vectors.
* **Factual Honesty:** Hallucination rate is **0.8%**, exhibiting low sycophancy and high precision on code refactoring.
* **Enterprise Guardrails:** Red-teamed for autonomous agent safety, API boundary isolation, and privacy compliance.
