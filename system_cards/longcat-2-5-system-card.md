# Meituan LongCat-2.5 Model Card (summary)

LongCat-2.5 became available via API on 2 November 2026, and Meituan published the weights under an MIT licence on 9 November 2026. This file is a verified summary of Meituan's model card and the reporting around the open-weights release.

## Technical Specifications
* **Developer:** Meituan
* **Release date:** 2026-11-09 (open weights; API availability from 2026-11-02)
* **Access:** Open weights on Hugging Face (`meituan-longcat/LongCat-2.5`, 208 safetensors shards) plus a hosted API in both OpenAI and Anthropic formats at $0.30 input / $0.006 cached / $1.20 output per 1M tokens (limited-time pricing)
* **Parameters:** 1.6T total / ~48B active Mixture-of-Experts per the model card. **The Hugging Face metadata lists 1.8T; this discrepancy is unresolved publicly.**
* **Licence:** **MIT** - commercial use, modification and redistribution permitted, with no trademark or patent grant. The most permissive licence on any high-end open model of this generation.
* **Context length:** 1,000,000 tokens, 256K maximum output; text, image and video in; switchable thinking / non-thinking modes
* **Local feasibility:** none for an SME. Meituan's own W4A4 4-bit expert quantisation targets Chinese NPU accelerators via SGLang-FluentLLM, not workstations.
* **Source:** [Hugging Face model card](https://huggingface.co/meituan-longcat/LongCat-2.5)

## Performance Benchmarks
| Benchmark | LongCat-2.5 | Measurement type |
|---|---|---|
| Terminal Bench v2.1 | 88.4 | Vendor-reported (LongCat-2.0 70.8) |
| Terminal Bench v4.0 | 38.5 | Vendor-reported (Claude Opus 5 53.9) |
| DeepSWE v1.1 | 64.6 | Vendor-reported (LongCat-2.0 9.7) |
| SWE Atlas (codebase QA) | 58.3 | Vendor-reported (LongCat-2.0 33.1) |
| BrowseComp | 91.9 | Vendor-reported |
| HLE (with tools) | 63.1 | Vendor-reported |
| Vision2Web | 78.6 | Vendor-reported |
| 3DCodeBench | 55.4 | Vendor-reported |

**Every figure above is Meituan's own, and Meituan explicitly labels its in-house numbers as indicative only.** No independent third-party evaluation of this model was located. MMLU, GPQA Diamond, SWE-bench Verified, HumanEval, AIME, Arena Elo, Artificial Analysis Intelligence Index and any hallucination measurement are **not published**.

Note the internal tension in the vendor's own table: 88.4 on Terminal Bench v2.1 against 38.5 on v4.0. Benchmark version matters more than the headline number.

## Safety and Alignment
* **No published safety framework, red-team report or hallucination measurement** was found for this model. For a release of this capability class, that absence is itself the finding.
* **Jurisdiction:** Meituan is based in China, so the hosted API falls under Chinese generative AI regulation. Self-hosting the MIT weights removes that exposure, but requires datacentre-class hardware.
* **Why it is in this dashboard:** the licence. MIT removes the commercial and legal friction that bespoke licences such as the Kimi K3.1-Pro License or the GLM-5.3 License introduce. For a company building a derivative product, that can matter more than a few benchmark points - provided it accepts entirely unverified performance claims.
