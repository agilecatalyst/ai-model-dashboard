# xAI Grok 4.7 Model Card (summary)

Grok 4.7 was released on 21 September 2026 by xAI, which now brands itself SpaceXAI. This file is a verified summary of the xAI release notes, the independent Artificial Analysis benchmarking article and the ARC Prize verified results.

## Technical Specifications
* **Developer:** xAI / SpaceXAI
* **Release date:** 2026-09-21
* **Access:** Commercial, closed weights. xAI API, Cursor, Grok Build, OpenRouter, GitHub Copilot, Vercel, Cloudflare, Oracle OCI and Amazon Bedrock.
* **Context length:** 500,000 tokens; text and image in, text out
* **Pricing:** $2 input / $0.50 cached / $6 output per 1M tokens below 200K prompt tokens; $4 / $1 / $12 above that. Batch API 20% discount. The fast variant costs 2x and is limited to Cursor and Grok Build.
* **Reasoning effort:** low, medium, high (default), xhigh
* **Parameters:** not published. A frequently cited figure of 2.1T appears only in a post on X and is absent from the model card, so it is not recorded in this dashboard.
* **Source:** [xAI release notes](https://docs.x.ai/developers/release-notes), [ARC Prize results](https://arcprize.org/results/xai-grok-4-7) and [Artificial Analysis benchmarking](https://artificialanalysis.ai/articles/benchmarking-grok-4-7)

## Performance Benchmarks
| Benchmark | Grok 4.7 | Measurement type |
|---|---|---|
| ARC-AGI v1 (high) | 90.2% | Independent (ARC Prize) |
| ARC-AGI v2 (xhigh) | 61.4% | Independent (ARC Prize) |
| ARC-AGI v3 | 1.8% | Independent (ARC Prize) |
| AA Coding Agent Index (with Grok Build) | 56 (from 47) | Independent (AA) |
| AA-Omniscience hallucination rate | 29% | Independent (AA; Grok 4.6 34%) |
| Terminal-Bench 4.0 (neutral harness) | 26% | Independent (AA) |
| Terminal-Bench 4.0 (xAI harness) | 37.6% | Vendor-reported |
| DeepSWE v1.1 (high) | 71.0% | Vendor-reported |
| CursorBench 4.0 (xHigh) | 46.3% | Vendor-reported |
| Harvey Legal Agent | 19.6% | Vendor-reported |
| HealthBench Pro | 56.7% | Vendor-reported |
| HackerBench (dual-use pass-through) | 3.3% | Vendor-reported |

Elo-scale results are listed outside the table because they are not percentages: **AA-Briefcase 1657 Elo** (+111) and **GDPval-AA 1695 Elo** (+90), both independently measured by Artificial Analysis.

**MMLU, GPQA Diamond, SWE-bench Verified, HumanEval, AIME, Arena Elo and HLE are not published for this model.**

The single most instructive row above is Terminal-Bench 4.0: xAI reports 37.6%, Artificial Analysis reproduces roughly 26% in a neutral harness. The same benchmark, a 45% relative gap, and the difference is the scaffold. Read every vendor agentic score with that in mind.

## Safety and Alignment
* **Framework:** xAI claims its strongest refusal and jailbreak resistance so far, evidenced by a 3.3% pass-through rate on HackerBench. No independent replication of that number was found.
* **Access:** red-team capabilities are invite-only for selected cybersecurity partners.
* **Training data:** the model card states supplementary training on anonymised Cursor workflow data, following the Cursor acquisition in August 2026. Teams using Cursor under an enterprise agreement should check what that means for their own code.
* **Known regressions:** AA measures AA-LCR down 3.7 percentage points and AutomationBench-AA down 1.1 points versus Grok 4.6, alongside the gains. It is not a uniform improvement.
* **Cost reality:** 81K output tokens per AA Index task against 36-38K for Grok 4.6, and 24.7 minutes per task at xhigh. The price per token did not change; the price per task roughly doubled.
