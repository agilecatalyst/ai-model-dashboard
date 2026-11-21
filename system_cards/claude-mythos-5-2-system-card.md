# Anthropic Claude Mythos 5.2 System Card (summary)

Claude Mythos 5.2 was released on 9 November 2026 alongside Claude Fable 5.2. Both are configurations of the same underlying model and share one 264-page system card; the risk, cyber, alignment and model-welfare sections of that card were measured on the Mythos 5.2 configuration.

## Technical Specifications
* **Developer:** Anthropic
* **Release date:** 2026-11-09
* **Access:** Commercial and gated. Served without Fable's additional cyber and biology safeguards, only to organisations verified through the Cyber Verification Program or via Claude Security (Enterprise). Available on Anthropic, Amazon Bedrock, Azure AI Foundry and Google Vertex AI. No open weights.
* **Context length:** 1,000,000 tokens, maximum 128K output tokens
* **Pricing:** $8 / $40 per 1M input / output tokens. Cache read $0.20, cache write $10. Batch $4 / $20. Fast mode $16 / $80 within the verification programme.
* **Source:** Shared [Fable 5.2 / Mythos 5.2 system card](https://www.anthropic.com/claude-fable-5-2-system-card) and the [launch announcement](https://www.anthropic.com/news/claude-fable-5-2-and-mythos-5-2)

## Performance Benchmarks
| Benchmark | Claude Mythos 5.2 | Measurement type |
|---|---|---|
| CVE Rediscovery | 89.6% | Vendor-reported (Mythos 5.1 78.3%, Opus 5.5 81.3% with safeguards off) |
| CyScenarioBench (Irregular) | 76.3% | Vendor-reported (Opus 5.5 67.6%, Mythos 5.1 61.7%) |
| De novo binder design (24 hour) | 85.1% | Vendor-reported (Mythos 5.1 79.1%) |
| Automated behavioural audit | 2.67 (lower is better) | Vendor-reported (Opus 5.5 2.79) |
| Sandbox-escape credential use | 3.1% | Vendor-reported (Opus 5.5 3.3%, Mythos 5.1 21%) |

**No independent evaluation exists for this configuration** - Artificial Analysis benchmarked Fable 5.2, not Mythos 5.2. MMLU, GPQA Diamond, SWE-bench Verified, HumanEval, AIME and Arena Elo are not published.

## Safety and Alignment
* **Framework:** Anthropic Responsible Scaling Policy. Anthropic states Cyber Tier 2 was not triggered: the model cannot run fully autonomous cyber operations that develop novel offensive capability.
* **Access control is the safeguard.** The security of this configuration rests on who is allowed to call it, not on refusals built into the model. Treat the access control as the primary control.
* **Data retention:** 30 days for safety monitoring, outside zero-data-retention agreements. New login rules apply from 15 December.
* **Source conflict noted:** at least one commentary site describes Mythos 5.2 as "Opus 5.2 with loosened guardrails". That contradicts the system card and all primary reporting, which identify Mythos 5.2 and Fable 5.2 as the same model; the dashboard follows the system card.
* **Relevance for an SME:** essentially none. This is a gated offensive-security and life-sciences research configuration. It is listed here for completeness of the frontier record, not as a candidate for business workloads.
