# Llama 3.1 Model Card

## Model Details

Meta developed and released the Meta Llama 3 family of large language models (LLMs), a collection of pretrained and instruction tuned generative text models in 8 and 70B sizes. The Llama 3 instruction tuned models are optimized for dialogue use cases and outperform many of the available open source chat models on common industry benchmarks. Further, in developing these models, we took great care to optimize helpfulness and safety. 

**Model developers** Meta

**Llama 3 family of models** Llama 3 comes in two sizes — 8B and 70B parameters — in pre-trained and instruction tuned variants.

**Input** Models input text only.

**Output** Models generate text and code only.

**Model Architecture** Llama 3 is an auto-regressive language model that uses an optimized transformer architecture. Llama 3 uses a tokenizer with a vocabulary of 128K tokens, and was trained on on sequences of 8,192 tokens. Grouped-Query Attention (GQA) is used for all models to improve inference efficiency. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.


<table>
  <tr>
    <td>
    </td>
    <td><strong>Training Data</strong>
    </td>
    <td><strong>Params</strong>
    </td>
    <td><strong>Context length</strong>
    </td>
    <td><strong>GQA</strong>
    </td>
    <td><strong>Token count</strong>
    </td>
    <td><strong>Knowledge cutoff</strong>
    </td>
  </tr>
  <tr>
    <td rowspan="2" >Llama 3
    </td>
    <td rowspan="2" >A new mix of publicly available online data.
    </td>
    <td>8B
    </td>
    <td>8k
    </td>
    <td>Yes
    </td>
    <td rowspan="2" >15T+
    </td>
    <td>March, 2023
    </td>
  </tr>
  <tr>
    <td>70B
    </td>
    <td>8k
    </td>
    <td>Yes
    </td>
    <td>December, 2023
    </td>
  </tr>
</table>


Note: Token counts refer to pretraining data only.

**Model Release Date** April 18, 2024.

**Status** This is a static model trained on an offline dataset. Future versions of the tuned models will be released as we improve model safety with community feedback.

**License** A custom commercial license is available at: [https://llama.meta.com/llama3/license](https://llama.meta.com/llama3/license)

Where to send questions or comments about the model Instructions on how to provide feedback or comments on the model can be found in the model [README](https://github.com/meta-llama/llama3). For more technical information about generation parameters and recipes for how to use Llama 3 in applications, please go [here](https://github.com/meta-llama/llama-recipes). 


## Intended Use

**Intended Use Cases** Llama 3 is intended for commercial and research use in English. Instruction tuned models are intended for assistant-like chat, whereas pretrained models can be adapted for a variety of natural language generation tasks.

**Out-of-scope** Use in any manner that violates applicable laws or regulations (including trade compliance laws). Use in any other way that is prohibited by the [Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/) and [Llama 3 Community License](https://llama.meta.com/llama3/license/). Use in languages other than English**.

**Note: Developers may fine-tune Llama 3 models for languages beyond English provided they comply with the [Llama 3 Community License](https://llama.meta.com/llama3/license/) and the [Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).


## Hardware and Software

**Training Factors** We used custom training libraries, Meta's Research SuperCluster, and production clusters for pretraining. Fine-tuning, annotation, and evaluation were also performed on third-party cloud compute.

**Carbon Footprint Pretraining utilized a cumulative** 7.7M GPU hours of computation on hardware of type H100-80GB (TDP of 700W). Estimated total emissions were 2290 tCO2eq, 100% of which were offset by Meta’s sustainability program.


<table>
  <tr>
    <td>
    </td>
    <td><strong>Time (GPU hours)</strong>
    </td>
    <td><strong>Power Consumption (W)</strong>
    </td>
    <td><strong>Carbon Emitted(tCO2eq)</strong>
    </td>
  </tr>
  <tr>
    <td>Llama 3 8B
    </td>
    <td>1.3M
    </td>
    <td>700
    </td>
    <td>390
    </td>
  </tr>
  <tr>
    <td>Llama 3 70B
    </td>
    <td>6.4M
    </td>
    <td>700
    </td>
    <td>1900
    </td>
  </tr>
  <tr>
    <td>Total
    </td>
    <td>7.7M
    </td>
    <td>
    </td>
    <td>2290
    </td>
  </tr>
</table>



**CO2 emissions during pre-training**. Time: total GPU time required for training each model. Power Consumption: peak power capacity per GPU device for the GPUs used adjusted for power usage efficiency. 100% of the emissions are directly offset by Meta's sustainability program, and because we are openly releasing these models, the pretraining costs do not need to be incurred by others.


## Training Data

**Overview** Llama 3 was pretrained on over 15 trillion tokens of data from publicly available sources. The fine-tuning data includes publicly available instruction datasets, as well as over 10M human-annotated examples. Neither the pretraining nor the fine-tuning datasets include Meta user data.

**Data Freshness** The pretraining data has a cutoff of March 2023 for the 8B and December 2023 for the 70B models respectively. 


## Benchmarks 

In this section, we report the results for Llama 3 models on standard automatic benchmarks. For all the evaluations, we use our internal evaluations library. For details on the methodology see [here](https://github.com/meta-llama/llama3/blob/main/eval_details.md).


### Base pretrained models


<table>
  <tr>
    <td><strong>Category</strong>
    </td>
    <td><strong>Benchmark</strong>
    </td>
    <td><strong>Llama 3 8B</strong>
    </td>
    <td><strong>Llama2 7B</strong>
    </td>
    <td><strong>Llama2 13B</strong>
    </td>
    <td><strong>Llama 3 70B</strong>
    </td>
    <td><strong>Llama2 70B</strong>
    </td>
  </tr>
  <tr>
    <td rowspan="6" >General
    </td>
    <td>MMLU (5-shot)
    </td>
    <td>66.6
    </td>
    <td>45.7
    </td>
    <td>53.8
    </td>
    <td>79.5
    </td>
    <td>69.7
    </td>
  </tr>
  <tr>
    <td>AGIEval English (3-5 shot)
    </td>
    <td>45.9
    </td>
    <td>28.8
    </td>
    <td>38.7
    </td>
    <td>63.0
    </td>
    <td>54.8
    </td>
  </tr>
  <tr>
    <td>CommonSenseQA (7-shot)
    </td>
    <td>72.6
    </td>
    <td>57.6
    </td>
    <td>67.6
    </td>
    <td>83.8
    </td>
    <td>78.7
    </td>
  </tr>
  <tr>
    <td>Winogrande (5-shot)
    </td>
    <td>76.1
    </td>
    <td>73.3
    </td>
    <td>75.4
    </td>
    <td>83.1
    </td>
    <td>81.8
    </td>
  </tr>
  <tr>
    <td>BIG-Bench Hard (3-shot, CoT)
    </td>
    <td>61.1
    </td>
    <td>38.1
    </td>
    <td>47.0
    </td>
    <td>81.3
    </td>
    <td>65.7
    </td>
  </tr>
  <tr>
    <td>ARC-Challenge (25-shot)
    </td>
    <td>78.6
    </td>
    <td>53.7
    </td>
    <td>67.6
    </td>
    <td>93.0
    </td>
    <td>85.3
    </td>
  </tr>
  <tr>
    <td>Knowledge reasoning
    </td>
    <td>TriviaQA-Wiki (5-shot)
    </td>
    <td>78.5
    </td>
    <td>72.1
    </td>
    <td>79.6
    </td>
    <td>89.7
    </td>
    <td>87.5
    </td>
  </tr>
  <tr>
    <td rowspan="4" >Reading comprehension
    </td>
    <td>SQuAD (1-shot)
    </td>
    <td>76.4
    </td>
    <td>72.2
    </td>
    <td>72.1
    </td>
    <td>85.6
    </td>
    <td>82.6
    </td>
  </tr>
  <tr>
    <td>QuAC (1-shot, F1)
    </td>
    <td>44.4
    </td>
    <td>39.6
    </td>
    <td>44.9
    </td>
    <td>51.1
    </td>
    <td>49.4
    </td>
  </tr>
  <tr>
    <td>BoolQ (0-shot)
    </td>
    <td>75.7
    </td>
    <td>65.5
    </td>
    <td>66.9
    </td>
    <td>79.0
    </td>
    <td>73.1
    </td>
  </tr>
  <tr>
    <td>DROP (3-shot, F1)
    </td>
    <td>58.4
    </td>
    <td>37.9
    </td>
    <td>49.8
    </td>
    <td>79.7
    </td>
    <td>70.2
    </td>
  </tr>
</table>



### Instruction tuned models


<table>
  <tr>
    <td><strong>Benchmark</strong>
    </td>
    <td><strong>Llama 3 8B</strong>
    </td>
    <td><strong>Llama 2 7B</strong>
    </td>
    <td><strong>Llama 2 13B</strong>
    </td>
    <td><strong>Llama 3 70B</strong>
    </td>
    <td><strong>Llama 2 70B</strong>
    </td>
  </tr>
  <tr>
    <td>MMLU (5-shot)
    </td>
    <td>68.4
    </td>
    <td>34.1
    </td>
    <td>47.8
    </td>
    <td>82.0
    </td>
    <td>52.9
    </td>
  </tr>
  <tr>
    <td>GPQA (0-shot)
    </td>
    <td>34.2
    </td>
    <td>21.7
    </td>
    <td>22.3
    </td>
    <td>39.5
    </td>
    <td>21.0
  </tr>
  <tr>
    <td>HumanEval (0-shot)
    </td>
    <td>62.2
    </td>
    <td>7.9
    </td>
    <td>14.0
    </td>
    <td>81.7
    </td>
    <td>25.6
  </tr>
  <tr>
    <td>GSM-8K (8-shot, CoT)
    </td>
    <td>79.6
    </td>
    <td>25.7
    </td>
    <td>41.2
    </td>
    <td>93.0
    </td>
    <td>57.5
  </tr>
  <tr>
    <td>MATH (4-shot, CoT)
    </td>
    <td>30.0
    </td>
    <td>3.8
    </td>
    <td>6.7
    </td>
    <td>50.4
    </td>
    <td>11.6
  </tr>
</table>
