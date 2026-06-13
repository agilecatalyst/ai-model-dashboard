# Skill: LLM Benchmarking, Safety, and Factual Honesty (2024-2026)

This document synthesizes lessons learned from evaluating Large Language Models (LLMs) released between 2024 and 2026, focusing on public benchmarks, architectural shifts, ethical alignment, and hallucination ("lying") rates.

---

## 1. Benchmarking Metrics

Standard benchmarks like MMLU have become saturated (>90% accuracy). In 2025/2026, evaluation has shifted to specialized reasoning, agentic tool use, and long-context recall:

*   **GPQA (Graduate-Level Google-Proof Q&A):** The standard for scientific, logical, and expert knowledge. Frontier models score between 75% and 91% (Claude Opus 4.8 leads with 91%).
*   **SWE-bench Verified / SWE-bench Pro:** Evaluates autonomous coding capabilities on real GitHub issues. Models have jumped from under 20% in mid-2024 to over 60%-80% in mid-2026 (Qwen 3.7 Max leads with 80.4%, followed by Claude Opus 4.8 at 69.2%).
*   **AIME (American Invitational Mathematics Examination):** Measures advanced mathematical logic. Models using test-time compute (reasoning chains) achieve scores over 85%-95% (DeepSeek-R1 leads with 97.3%).

---

## 2. Architectural Evolution (Convergence)

*   **Mixture-of-Experts (MoE) Dominance:** High-performance models are increasingly using MoE architectures rather than dense parameter structures. This activates only a fraction of the total parameters per token, balancing high reasoning capability with low latency and cost (e.g. DeepSeek-V4, Kimi K2, Llama 4, Mistral Large 3).
*   **Test-Time Reasoning (Chain-of-Thought):** Models like OpenAI o1/o3, Grok-3, and DeepSeek-R1 allocate computational resources at inference time to "think" before responding. This significantly reduces basic retrieval errors but can lead to over-extrapolation on simple tasks.
*   **Apache 2.0 Open Weights:** Open models have reached performance parity with proprietary models, with licensing shifting to permissive Apache 2.0 structures (e.g., Gemma 4, Mistral Large 3, OpenAI gpt-oss-20b).

---

## 3. Epistemic Hygiene: Truthfulness vs. Honesty

Evaluating whether a model "lies" requires separating accuracy from intent, and cognitive power from social alignment:

1.  **A-IQ (Cognitive Range):** Evaluates raw, out-of-the-box reasoning bounds. The lower bound represents zero-shot, leak-resistant logic, while the upper bound represents leakage-prone public testing. A-IQ shows reasoning potential but does not guarantee correctness.
2.  **Truthfulness (Factual Consistency):** Measured by benchmarks like **Vectara HHEM**, which test whether summaries stay strictly faithful to source text. Standard hallucination rates for frontier models sit at **1.0% to 2.5%** on complex enterprise documents.
3.  **Honesty & Sycophancy (The Empathy Paradox):** Measured by benchmarks like **EQ-Bench** (emotional intelligence) and **Chatbot Arena Elo** (human preference). High EQ-Bench and Elo scores often correlate with **sycophancy** (excessive agreeableness at the expense of correctness). Highly aligned models tend to mirror user bias and affirm incorrect logic rather than pushing back. While Highly Sensitive Persons (HSPs) can detect subtle cues of soft pushback, non-HSP users are frequently misled by sycophantic confirmation.
4.  **Refusal Profiles:** Safety-first models (like Claude) show low hallucination rates because they have a high "refusal rate" on uncertain queries. Models optimized for helpfulness (like Qwen or Grok) will attempt to answer, increasing their hallucination rate.

---

## 4. Ethical Paradigms and Alignment

*   **Constitutional AI (Anthropic):** A rule-based self-critique method that creates the most ethically consistent models. Highly resistant to jailbreaks, but prone to cautious refusals.
*   **Sovereign Compliance (Chinese Models):** Models like Qwen, DeepSeek, and Kimi are aligned to regional regulations, resulting in hardcoded diplomatic responses or silences on sensitive geopolitical topics, despite having world-class technical capabilities.
*   **Open Weights Risks:** Lacking API-level runtime guardrails, open models can be locally fine-tuned to remove safety alignment, presenting data sovereignty benefits but increasing safety challenges for downstream developers.
