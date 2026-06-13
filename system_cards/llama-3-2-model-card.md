## Model Information

The Llama 3.2 collection of multilingual large language models (LLMs) is a collection of pretrained and instruction-tuned generative models in 1B and 3B sizes (text in/text out). The Llama 3.2 instruction-tuned text only models are optimized for multilingual dialogue use cases, including agentic retrieval and summarization tasks. They outperform many of the available open source and closed chat models on common industry benchmarks.

**Model Developer:** Meta

**Model Architecture:** Llama 3.2 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.

|  | Training Data | Params | Input modalities | Output modalities | Context Length | GQA | Shared Embeddings | Token count | Knowledge cutoff |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Llama 3.2 (text only)  | A new mix of publicly available online data. | 1B (1.23B) | Multilingual Text | Multilingual Text and code  | 128k | Yes | Yes | Up to 9T tokens | December 2023 |
|  |  | 3B (3.21B) | Multilingual Text | Multilingual Text and code  |  |  |  |  |  |
| Llama 3.2 Quantized (text only)  | A new mix of publicly available online data. | 1B (1.23B) | Multilingual Text | Multilingual Text and code  | 8k | Yes | Yes | Up to 9T tokens | December 2023 |
|  |  | 3B (3.21B) | Multilingual Text | Multilingual Text and code |  |  |  |  |  |

**Supported Languages:** English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai are officially supported. Llama 3.2 has been trained on a broader collection of languages than these 8 supported languages. Developers may fine-tune Llama 3.2 models for languages beyond these supported languages, provided they comply with the Llama 3.2 Community License and the Acceptable Use Policy. Developers are always expected to ensure that their deployments, including those that involve additional languages, are completed safely and responsibly.

**Llama 3.2 Model Family:** Token counts refer to pretraining data only. All model versions use Grouped-Query Attention (GQA) for improved inference scalability.

**Model Release Date:** Oct 24, 2024

**Status:** This is a static model trained on an offline dataset. Future versions may be released that improve model capabilities and safety.

**License:** Use of Llama 3.2 is governed by the [Llama 3.2 Community License](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/LICENSE) (a custom, commercial license agreement).

**Feedback:** Instructions on how to provide feedback or comments on the model can be found in the Llama Models [README](https://github.com/meta-llama/llama-models/blob/main/README.md). For more technical information about generation parameters and recipes for how to use Llama 3.2 in applications, please go [here](https://github.com/meta-llama/llama-recipes).

## Intended Use

**Intended Use Cases:** Llama 3.2 is intended for commercial and research use in multiple languages. Instruction tuned text only models are intended for assistant-like chat and agentic applications like knowledge retrieval and summarization, mobile AI powered writing assistants and query and prompt rewriting. Pretrained models can be adapted for a variety of additional natural language generation tasks. Similarly, quantized models can be adapted for a variety of on-device use-cases with limited compute resources.

**Out of Scope:** Use in any manner that violates applicable laws or regulations (including trade compliance laws). Use in any other way that is prohibited by the Acceptable Use Policy and Llama 3.2 Community License. Use in languages beyond those explicitly referenced as supported in this model card.

## Hardware and Software

**Training Factors:** We used custom training libraries, Meta's custom built GPU cluster, and production infrastructure for pretraining. Fine-tuning, quantization, annotation, and evaluation were also performed on production infrastructure.

**Training Energy Use:** Training utilized a cumulative of **916k** GPU hours of computation on H100-80GB (TDP of 700W) type hardware, per the table below. Training time is the total GPU time required for training each model and power consumption is the peak power capacity per GPU device used, adjusted for power usage efficiency.

**Training Greenhouse Gas Emissions:** Estimated total location-based greenhouse gas emissions were **240** tons CO2eq for training. Since 2020, Meta has maintained net zero greenhouse gas emissions in its global operations and matched 100% of its electricity use with renewable energy; therefore, the total market-based greenhouse gas emissions for training were 0 tons CO2eq.

|  | Training Time (GPU hours) | Logit Generation Time (GPU Hours) | Training Power Consumption (W) | Training Location-Based Greenhouse Gas Emissions (tons CO2eq) | Training Market-Based Greenhouse Gas Emissions (tons CO2eq) |
| :---- | :---: | ----- | :---: | :---: | :---: |
| Llama 3.2 1B | 370k | \- | 700 | 107 | 0 |
| Llama 3.2 3B | 460k | \- | 700 | 133 | 0 |
| Llama 3.2 1B SpinQuant | 1.7 | 0 | 700 | *Negligible*\*\* | 0 |
| Llama 3.2 3B SpinQuant | 2.4 | 0 | 700 | *Negligible*\*\* | 0 |
| Llama 3.2 1B QLoRA | 1.3k | 0 | 700 | 0.381 | 0 |
| Llama 3.2 3B QLoRA | 1.6k | 0 | 700 | 0.461 | 0 |
| Total | 833k |         86k |  | 240 | 0 |

\*\* The location-based CO2e emissions of Llama 3.2 1B SpinQuant and Llama 3.2 3B SpinQuant are less than 0.001 metric tonnes each. This is due to the minimal training GPU hours that are required.

The methodology used to determine training energy use and greenhouse gas emissions can be found [here](https://arxiv.org/pdf/2204.05149). Since Meta is openly releasing these models, the training energy use and greenhouse gas emissions will not be incurred by others.

## Training Data

**Overview:** Llama 3.2 was pretrained on up to 9 trillion tokens of data from publicly available sources. For the 1B and 3B Llama 3.2 models, we incorporated logits from the Llama 3.1 8B and 70B models into the pretraining stage of the model development, where outputs (logits) from these larger models were used as token-level targets. Knowledge distillation was used after pruning to recover performance. In post-training we used a similar recipe as Llama 3.1 and produced final chat models by doing several rounds of alignment on top of the pre-trained model. Each round involved Supervised Fine-Tuning (SFT), Rejection Sampling (RS), and Direct Preference Optimization (DPO).

**Data Freshness:** The pretraining data has a cutoff of December 2023\.

## Quantization

### Quantization Scheme

We designed the current quantization scheme with the [PyTorch’s ExecuTorch](https://github.com/pytorch/executorch) inference framework and Arm CPU backend in mind, taking into account metrics including model quality, prefill/decoding speed, and memory footprint. Our quantization scheme involves three parts:
- All linear layers in all transformer blocks are quantized to a 4-bit groupwise scheme (with a group size of 32) for weights and 8-bit per-token dynamic quantization for activations.
- The classification layer is quantized to 8-bit per-channel for weight and 8-bit per token dynamic quantization for activation.
- Similar to classification layer, an 8-bit per channel quantization is used for embedding layer.


### Quantization-Aware Training and LoRA

The quantization-aware training (QAT) with low-rank adaptation (LoRA) models went through only post-training stages, using the same data as the full precision models. To initialize QAT, we utilize BF16 Llama 3.2 model checkpoints obtained after supervised fine-tuning (SFT) and perform an additional full round of SFT training with QAT. We used the [torchao](https://github.com/pytorch/ao/blob/main/torchao/quantization/qat/README.md) API for this. We then freeze the backbone of the QAT model and perform another round of SFT with LoRA adaptors applied to all layers within the transformer block. Meanwhile, the LoRA adaptors' weights and activations are maintained in BF16. Because our approach is similar to QLoRA of Dettmers et al., (2023) (i.e., quantization followed by LoRA adapters), we refer this method as QLoRA. Finally, we fine-tune the resulting model (both backbone and LoRA adaptors) using direct preference optimization (DPO).

### SpinQuant

[SpinQuant](https://arxiv.org/abs/2405.16406) was applied, together with generative post-training quantization (GPTQ). For the SpinQuant rotation matrix fine-tuning, we optimized for 100 iterations, using 800 samples with sequence-length 2048 from the WikiText 2 dataset. For GPTQ, we used 128 samples from the same dataset with the same sequence-length.

## Benchmarks \- English Text

In this section, we report the results for Llama 3.2 models on standard automatic benchmarks. For all these evaluations, we used our internal evaluations library.

### Base Pretrained Models

| Category | Benchmark | \# Shots | Metric | Llama 3.2 1B | Llama 3.2 3B | Llama 3.1 8B |
| ----- | ----- | :---: | :---: | :---: | :---: | :---: |
| General | MMLU | 5 | macro\_avg/acc\_char | 32.2 | 58 | 66.7 |
|  | AGIEval English | 3-5 | average/acc\_char | 23.3 | 39.2 | 47.8 |
|  | ARC-Challenge | 25 | acc\_char | 32.8 | 69.1 | 79.7 |
| Reading comprehension | SQuAD | 1 | em | 49.2 | 67.7 | 77 |
|  | QuAC (F1) | 1 | f1 | 37.9 | 42.9 | 44.9 |
|  | DROP (F1) | 3 | f1 | 28.0 | 45.2 | 
