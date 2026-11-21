# Moonshot AI Kimi K3.1 Pro Model Card (summary)

Kimi K3.1 Pro was announced on 24 October 2026 and published as open weights on 4 November 2026. This file is a verified summary of Moonshot's platform documentation, the NVIDIA NIM model card and the reported Artificial Analysis result.

## Technical Specifications
* **Developer:** Moonshot AI
* **Release date:** 2026-11-04 (open weights on Hugging Face and NVIDIA NIM; announced 2026-10-24)
* **Access:** Open weights plus hosted API (Kimi.com, Kimi Work, Kimi Code, Kimi API) and NVIDIA NIM. A Highspeed variant is also offered.
* **Parameters:** 2.8T total / 104B active Mixture-of-Experts, vocabulary 160,000, based on Kimi K3
* **Licence:** custom "Kimi K3.1-Pro License" - **not** an OSI-approved open-source licence. Read it before building a commercial product on it.
* **Context length:** 1,048,576 tokens; text, image and video in, text out
* **Local feasibility:** none for an SME. At 2.8T parameters the weights occupy hundreds of gigabytes even at 4-bit, and Moonshot itself states it will not run on a single consumer GPU. In practice this is API or NIM only.
* **Source:** [Moonshot platform documentation](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart) and the [NVIDIA NIM model card](https://build.nvidia.com/moonshotai/kimi-k3_1-pro/modelcard)

## Performance Benchmarks
| Benchmark | Kimi K3.1 Pro | Measurement type |
|---|---|---|
| GPQA Diamond | 94.2% | Vendor-reported, via the BenchLM aggregator |
| Terminal-Bench 4.0 | 65.7% | Vendor-reported (independently measured at 67% by Artificial Analysis, ahead of Claude Fable 5.2) |
| DeepSWE v1.1 | 75.5% | Vendor-reported |
| SWE-Marathon v1.1 | 51.7% | Vendor-reported |
| HLE with tools / without tools | 70.0% / 51.1% | Vendor-reported |
| BrowseComp | 92.1% | Vendor-reported |
| Terminal-Bench-Science 0.1 | 38.1% | Vendor-reported (loses to every listed contemporary) |
| ProgramBench | 31.5% | Vendor-reported (Opus 5.5 65.0%) |
| Artificial Analysis Intelligence Index | 46 | Independent (AA) |
| Kimi Hallu Bench, no tools | 5.4% | Vendor-reported, in-house benchmark |

**SWE-bench Verified is not published** - Moonshot reports DeepSWE v1.1 and SWE-Marathon instead. MMLU, HumanEval, AIME and Arena Elo are also not published for this model.

## Safety and Alignment
* **Jurisdiction:** Moonshot AI is based in China, so the hosted service falls under Chinese generative AI regulation including CAC security assessments. For an EU SME processing personal data, the hosted API is a Chapter V transfer question before it is a quality question.
* **Factuality:** the only hallucination figure is Moonshot's own Kimi Hallu Bench (5.4% without tools). There is no independent HHEM or AA-Omniscience measurement, so it cannot be compared with the rates shown elsewhere in this dashboard.
* **Uneven profile:** strong on agentic coding and browsing, weak on Terminal-Bench-Science (38.1%) and ProgramBench (31.5%), where it loses badly to the closed frontier. Near-frontier is not frontier.
* **Open weights, qualified:** the licence is bespoke and the model is too large to self-host, so "open weights" here buys auditability and an exit option rather than data sovereignty.
