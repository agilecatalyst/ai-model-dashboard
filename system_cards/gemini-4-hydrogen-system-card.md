# Google DeepMind Gemini 4 Hydrogen Model Card (summary)

Gemini 4 Hydrogen was released on 12 November 2026 as the fast, lower-cost tier of the Gemini 4 family, adapted from Gemini 4 Carbon. This file is a verified summary of the official model card, the launch announcement and the independent Artificial Analysis evaluation.

## Technical Specifications
* **Developer:** Google DeepMind
* **Release date:** 2026-11-12
* **Access:** Commercial, closed weights. Available on **both the free and paid tiers** of AI Studio and the Gemini API, in the Gemini app and in Google Search - the only Gemini 4 model on the free tier.
* **Context length:** 1,000,000 tokens unified, up to 64K default synchronous output and up to 1M via background long decode
* **Pricing:** $1.50 / $7.50 per 1M input / output tokens, flat across the whole context window
* **Thinking levels:** low, medium, high (default) and xhigh
* **Knowledge cutoff:** March 2026
* **EU note for SMEs:** on the free Gemini API tier Google uses data to improve its products, **except** for users in the EEA, Switzerland and the UK, who receive paid-tier data terms. Since Hydrogen is the one Gemini 4 model on the free tier, this exception matters. EU residency still requires a Vertex AI EU multi-region or European regional endpoint.
* **Source:** [Launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen) and [model card](https://deepmind.google/models/model-cards/gemini-4-hydrogen)

## Performance Benchmarks
| Benchmark | Gemini 4 Hydrogen | Measurement type |
|---|---|---|
| Artificial Analysis Intelligence Index v5 (high / default) | 51 | Independent (AA) |
| Artificial Analysis Intelligence Index v5 (xhigh) | 54 | Independent (AA, rank 16 of 80) |
| Terminal-Bench 4.0 | 54% | Independent (AA; Sonnet 5.5 64%, GPT-6.1 Sol 56%) |
| AA-Omniscience hallucination rate | 8% | Independent (AA) |
| AA Robotics 0.1 | 58 | Independent (AA, real 6-axis arm) |
| Terminal-Bench 4.1 (cheating-adjusted) | 57.0% | Vendor-reported (Google reports itself losing to Sonnet 5.5 at 63.9%) |
| Agents' Last Exam v1.1 | 71.6% | Vendor-reported |
| AutomationBench-AA | 76.1% | Vendor-reported |
| HLE-Diamond | 58.8% | Vendor-reported |
| OSWorld-2.1 (offline subset) | 77.6% | Vendor-reported |
| SWE-sweep | 13.5% | Vendor-reported |

**MMLU, GPQA Diamond, SWE-bench Verified, HumanEval, AIME, text Arena Elo and the parameter count are not published for this model.**

Two comparability warnings: Google chose the comparison set for Hydrogen's launch table and left Carbon, Opus 5.5 and Fable 5.2 out of it; and AutomationBench-AA is not the same benchmark as the AutomationBench in Anthropic's tables. Do not cross-compare rows between vendor tables.

## Safety and Alignment
* **Framework:** Frontier Safety Framework (April 2026), assessed through a Material Capability Change review against Gemini 4 Argon. No material capability increase was found, so the full critical-capability suite was not rerun.
* **CBRN and cyber:** targeted testing was still performed because Argon and Carbon could not be cleared. Hydrogen does **not** reach the CBRN or cyber critical capability levels, but it does reach the **alert thresholds** for both.
* **Content safety:** better multimodal content safety than Gemini 3.8 Flash, similar text and multilingual safety, but **higher unjustified refusals**, especially on multimodal input. The full Safety and Security Report is listed as still to come.
* **Acknowledged limitations:** hallucinations, continuing work on jailbreak resistance, occasional slowness or timeouts, and heavy token consumption at higher thinking levels - AA ranks it 78th of 79 on verbosity at xhigh, using roughly four times the median output tokens to complete the Index.
* **Practical reading for an SME:** this is the sensible everyday Gemini choice on price (flat $1.50/$7.50), but budget by task rather than by token price, because the verbosity can erase the apparent saving.
