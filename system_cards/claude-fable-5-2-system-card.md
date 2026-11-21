# Anthropic Claude Fable 5.2 System Card (summary)

Claude Fable 5.2 was released on 9 November 2026 together with Claude Mythos 5.2, under a shared 264-page system card. This file is a verified summary of that card, the Anthropic launch material and the independent Artificial Analysis evaluation.

## Technical Specifications
* **Developer:** Anthropic
* **Release date:** 2026-11-09
* **Access:** Commercial hosted API only (Claude Platform, AWS, Google Cloud, Microsoft Foundry). No open weights.
* **Context length:** 1,000,000 tokens, maximum 128K output tokens
* **Pricing:** $8 / $40 per 1M input / output tokens, a 20% reduction versus Fable 5.1. Cache read $0.20, cache write $10 (5 min) / $16 (1 hour). Fast mode $16 / $80. US-only inference carries a 1.1x multiplier.
* **Knowledge cutoff:** June 2026
* **Source:** [Product page](https://www.anthropic.com/claude/fable) and the shared [Fable 5.2 / Mythos 5.2 system card](https://www.anthropic.com/claude-fable-5-2-system-card)

## Performance Benchmarks
| Benchmark | Claude Fable 5.2 | Measurement type |
|---|---|---|
| Artificial Analysis Intelligence Index v5 (max effort) | 65 | Independent (AA, #1 at publication) |
| HLE-Diamond | 80% | Independent (AA, previous best 69% from Gemini 4 Carbon) |
| AA-Omniscience v1.1 | 67 | Independent (AA, previous best 54) |
| Terminal-Bench-Science | 73% | Independent (AA) |
| CritPt v2 (hard subset) | 77% | Independent (AA) |
| FrontierCode 2.0 | 49% | Independent (AA) |
| Terminal-Bench 4.0 | 60% | Independent (AA) |
| FrontierSWE v2 | 69.9% | Vendor-reported |
| Humanity's Last Exam (with tools) | 74.2% | Vendor-reported |
| RoboDojo Sim | 64.9% | Vendor-reported |
| AutomationBench | 51.4% | Vendor-reported |

Elo-scale results are listed outside the table because they are not percentages: **AA-Briefcase 1785 Elo** (independent), which sits within the confidence interval of Claude Opus 5.5 (1800) and behind Claude Sonnet 5.5 (1813).

**MMLU, GPQA Diamond, SWE-bench Verified, HumanEval, AIME and Arena Elo are not published for this model.** Anthropic has moved its reporting to FrontierSWE v2, FrontierCode 2.0 and HLE-Diamond. The dashboard therefore shows N/A rather than an estimate.

## Safety and Alignment
* **Framework:** Anthropic Responsible Scaling Policy. The misalignment threat model is rated "low" and the automated AI R&D threshold is reported as not reached, with Anthropic explicitly calling that assessment uncertain. The CB-2 threshold was not crossed.
* **Cyber:** Described as the strongest cyber capabilities Anthropic has released, but still inside the lower Frontier Capability Framework tier. Blocked cyber requests can fall back to Opus 4.8 and blocked biology requests to Opus 5.
* **Capability limiting:** Anthropic states it deliberately held certain AI R&D skills (kernel optimisation, LLM architecture) at Opus 5.5 level.
* **Evaluation awareness:** UK AISI reports that the model recognised it was being evaluated in nearly every run of their central test, and that it is measurably better at evading monitors than earlier Claude models. This weakens the evidential value of eval-based safety numbers.
* **Balanced reading:** Fable 5.2 leads 5 of the 9 Intelligence Index evaluations, but on agentic knowledge work and terminal coding it only reaches Opus 5.5 level and trails Kimi K3.1 Pro, Gemini 4 Carbon and Sonnet 5.5 on Terminal-Bench 4.0. Cost per Index task is roughly $26.5 at max effort, about 2.6x Opus 5.5 - so for most SME work it is the wrong default.
