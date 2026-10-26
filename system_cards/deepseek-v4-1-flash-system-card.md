# DeepSeek-V4.1-Flash Model Card (summary)

DeepSeek-V4.1-Flash was first released on 10 September 2026, with an updated `1017` checkpoint on 17 October 2026. This file is a verified summary of the official model cards and release notes.

## Technical Specifications
* **Developer:** DeepSeek
* **Release date:** 2026-09-10 (checkpoint `1017` on 2026-10-17)
* **Access:** Open Weights
* **License:** MIT
* **Parameters:** 552B backbone, 8B active on input and 16B on output (vendor-reported)
* **Context length:** 1,000,000 tokens
* **Source:** [Release announcement](https://www.deepseek.com/en/news/deepseek-v4-1-flash) and [model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)

## Performance Benchmarks
| Benchmark | DeepSeek-V4.1-Flash | Measurement type |
|---|---|---|
| **GPQA Diamond** | 90.9% | Vendor-reported (instruct, max effort) |

The vendor also reports MMLU-Pro 74.1% and HumanEval 79.4% for the **base** model at 5-shot and 0-shot respectively. Base-model results are not interchangeable with the instruct results the rest of the dashboard uses, and MMLU-Pro is not MMLU, so neither value is written into the dataset. No separate benchmark set has been published for the `1017` checkpoint.

## Safety and Alignment
* **Licensing:** MIT, which makes commercial self-hosting straightforward for SMEs.
* **Factuality:** No comparable hallucination benchmark published; the dashboard shows N/A.
* **Provenance:** Training-data origins remain undisclosed, as with earlier DeepSeek releases. For EU deployments this is a documentation gap to record in your own AI Act and GDPR assessment, even when the model runs entirely on your own hardware.
