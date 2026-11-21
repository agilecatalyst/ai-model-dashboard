# Meta Muse Wonder Full Model Card (summary)

Muse Wonder Full was released on 12 October 2026 by Meta Superintelligence Labs as the larger sibling of Muse Wonder. This file is a verified summary of the available reporting and the independent Artificial Analysis evaluation.

## Technical Specifications
* **Developer:** Meta (Meta Superintelligence Labs)
* **Release date:** 2026-10-12
* **Access:** **Muse Code subscription only** (Power and Maximum plans, reported at $50 and $200 per month). **No API.** The sibling Muse Wonder is API-accessible at $4 / $20 per 1M tokens.
* **Parameters:** not disclosed. Meta publishes no parameter count and no training detail for this model.
* **Licence:** closed and proprietary, no downloadable weights. Note the contrast with Meta's own Muse Glimmer 30B, which is Apache 2.0.
* **Context length:** 1,048,576 tokens; text, image, video, audio and PDF in, text out
* **Distinctive features:** Active Memory (recall across days and weeks) and Active Focus (persistence through blockers). Trained at Meta's Prometheus data centre in Ohio.
* **Source:** [Meta Muse](https://ai.meta.com/muse) and the [Artificial Analysis evaluation](https://artificialanalysis.ai/articles/muse-wonder)

## Performance Benchmarks
| Benchmark | Muse Wonder Full | Measurement type |
|---|---|---|
| Artificial Analysis Intelligence Index v4.3 | 56 | Independent (AA; Muse Wonder 52) |
| AA Coding Agents Index (max effort, in Muse Code) | 68 | Independent (AA; level with Claude Code + Sonnet 5.5 at 68, Opus 5.5 66) |
| AA-Omniscience score | 30 | Independent (AA; Muse Wonder 25, Opus 5.5 46, GPT-6 Astra 43) |
| AA-Omniscience hallucination rate | 23% | Independent (AA; Muse Wonder 27%) |
| SWE-Marathon | 57.5 | Vendor-reported (Muse Wonder 53.1) |

**MMLU, GPQA Diamond, SWE-bench Verified, HumanEval, AIME and Arena Elo are not published for this model.** Note also that its Index score is on v4.3, which is not comparable with the v5 scores of the November 2026 releases.

## Safety and Alignment
* **Factuality profile is two-sided:** it hallucinates less than Muse Wonder (23% against 27%) but its AA-Omniscience knowledge score of 30 is far below Opus 5.5 (46) and GPT-6 Astra (43). Fewer fabrications partly because it attempts less.
* **No published safety framework documentation** was found for this specific model beyond Meta's general AI safety principles.
* **Governance assessment for an EU SME:** this is the weakest position of the autumn 2026 releases - a US vendor, subscription-only access with no API contract to negotiate data terms against, no weights, and no published parameter or training information. It is listed here for completeness of the record, not as a recommendation.
* **Lock-in:** the model is only reachable inside Meta's own Muse Code terminal agent. Capability and tooling are bundled; you cannot take the model to your own scaffold.
