# Google DeepMind Gemini 4 Carbon Model Card (summary)

Gemini 4 Carbon was announced on 28 October 2026 with access restricted to cyber defenders through the Fairwind Program, and became generally available on 10 November 2026. This file is a verified summary of the official model card, the launch announcement and the independent Artificial Analysis evaluation.

## Technical Specifications
* **Developer:** Google DeepMind
* **Release date:** 2026-11-10 general availability (announced 2026-10-28)
* **Access:** Commercial API and Gemini Ultra subscriptions. Paid tier only, not on the free tier. No open weights.
* **Context length:** 1,000,000 tokens combined input/output
* **Pricing:** $2 / $10 per 1M input / output tokens introductory through 30 November 2026, rising to $4 / $20 from 1 December 2026. Cached input $0.20 per 1M at standard pricing.
* **EU availability:** Vertex AI EU multi-region and Gemini Enterprise with EU data residency. Residency depends on calling an EU regional or multi-region endpoint - the global endpoint carries no residency guarantee and the AI Studio Developer API offers no residency option at all.
* **Source:** [Launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available) and [model card](https://deepmind.google/models/model-cards/gemini-4-carbon)

## Performance Benchmarks
| Benchmark | Gemini 4 Carbon | Measurement type |
|---|---|---|
| Artificial Analysis Intelligence Index v5.0 (high) | 59 | Independent (AA, #1 at publication; 60 on the later v5.0.1 revision) |
| AA-Omniscience v1.1 index (high) | 54 | Independent (AA; Opus 5.5 48, Argon 46) |
| AA-Omniscience accuracy (high) | 58% | Independent (AA) |
| Hallucination rate (high effort) | 11% | Independent (AA; 4.2% at medium effort, at 48.9% accuracy) |
| Vals Index v2.2 | 70.36% | Independent (rank 2 of 29) |
| Terminal-Bench 4.0 | 65.2% | Vendor-selected table, AA-run |
| FrontierSWE 2 | 61.2% | Vendor-reported (behind GPT-6 Astra 65.5% and Opus 5.5 62.3%) |
| GraphWalks (256K-1M) | 96.2% | Vendor-reported |
| Agents' Last Exam v1.1 | 77.4% | Vendor-reported |
| OSWorld-2.1 (offline subset) | 81.5% | Vendor-reported |

Elo-scale and ranking results are listed outside the table because they are not percentages: **WebDev Arena 1768 Elo, 4th place** (independent, LMArena, +89 Elo versus Gemini 4 Argon) and **Agent Arena 2nd of 57** (independent).

Offensive-security results published by Google - SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0% - were **run with guardrails disabled** and therefore do not describe the shipped product.

**MMLU, GPQA Diamond, SWE-bench Verified, HumanEval, AIME and text Arena Elo are not published for this model.** Google's Gemini 4 tables report agentic and long-horizon suites instead. Do not substitute Gemini 3.x numbers.

## Safety and Alignment
* **Framework:** Frontier Safety Framework (April 2026). For Argon and Carbon, Google states it **could not rule out** that the model reaches the CBRN uplift critical capability level or the cybersecurity critical capability level.
* **Staged release:** because of dual-use offensive-security risk, Carbon went through a staged release including the US government voluntary pre-release testing process, with cyber defenders getting access first.
* **Honesty and injection resistance:** Google reports 92% passed on its internal 375-task honesty benchmark against 70% for Argon, 0.0% attack success on Gray Swan indirect prompt injection, and a 0.8% red-team breach rate per attempt. All internal and vendor-reported.
* **Index versions are not interchangeable.** Carbon scores 59 on Intelligence Index v5.0 and 60 on v5.0.1; Argon scored 53 on v4.3.2 and 50 on v5.0. Comparing scores from different index versions produces nonsense.
* **Balanced reading:** Carbon leads 4 of 9 Index evaluations and has the strongest verified factuality profile of the autumn 2026 releases, but it trails GPT-6 Astra and Opus 5.5 on FrontierSWE 2 and was beaten on the overall Index by Claude Fable 5.2 one day before its general availability.
