# Kimi K3 Technical Report & System Card

Released in July 2026 by Moonshot AI, Kimi K3 is a flagship open-weights Mixture-of-Experts (MoE) model featuring an 8-million token multimodal context window and native Monte Carlo Tree Search (MCTS) CoT reasoning.

## Technical Specifications
* **Developer:** Moonshot AI
* **Architecture:** Infinite-Context Swarm MoE with MCTS reasoning
* **Context Length:** 8,000,000 tokens (8 million tokens)
* **License:** Moonshot Modified MIT License (Open Weights)
* **Modalities:** Native multimodal (Text, Vision, Video, Codebase)

## Performance Benchmarks
| Benchmark | Kimi K3 | Kimi K2.7 | Claude 5 Opus | GPT-5.6 |
|---|---|---|---|---|
| **MMLU** | 95.2% | 93.8% | 98.1% | 97.8% |
| **GPQA** | 91.5% | 88.9% | 94.5% | 93.8% |
| **SWE-bench** | 81.0% | 68.2% | 74.8% | 76.5% |
| **HumanEval** | 98.0% | 96.8% | 99.2% | 98.4% |
| **AIME** | 96.5% | 91.5% | 97.2% | 95.5% |

## Safety and Alignment
* **Alignment Paradigm:** Aligned via Reinforcement Learning from Human & Verified Feedback (RLVF) with verifiable tool execution sandboxes.
* **Factual Consistency:** Hallucination rate is **0.8%**, utilizing MCTS-guided CoT verification to eliminate step-by-step logic errors.
* **Agent Security:** Red-teamed for autonomous agent swarm safety and multi-repo isolation.
