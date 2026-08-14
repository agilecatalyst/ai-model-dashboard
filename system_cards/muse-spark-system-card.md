# Meta Muse Spark 1.2 System Card & Technical Overview

**Release Date:** August 5, 2026  
**Developer:** Meta Superintelligence Labs  
**Model Family:** Muse Series  
**Access:** Commercial API  

## 1. Overview & Intended Use
Muse Spark 1.2 is Meta’s flagship multimodal reasoning and agentic model family, built specifically for long-horizon task execution, complex code synthesis, tool use, and multi-agent system orchestration. It powers Meta's primary AI ecosystem and enterprise endpoints via Meta Model API.

### Primary Use Cases
* Autonomous multi-agent coordination and complex workflow execution.
* Enterprise software engineering, repository refactoring, and automated debugging (SWE-bench / TerminalBench).
* Long-document and multimodal reasoning with a **1-million-token context window**.
* Structured function calling, API integration, and tool use.

## 2. Technical Specifications
| Attribute | Specification |
| :--- | :--- |
| **Model Size** | Undisclosed (Frontier Mixture-of-Experts) |
| **Context Window** | 1,000,000 tokens |
| **Multimodal Inputs** | Text, Code, High-Resolution Images, PDF Documents, Audio |
| **API Pricing** | $1.25 / 1M Input Tokens, $4.25 / 1M Output Tokens |
| **License** | Proprietary Commercial API |

## 3. Benchmark Evaluations
| Benchmark / Metric | Muse Spark 1.2 | Score / Rank |
| :--- | :--- | :---: |
| **MMLU** | General Knowledge | 96.1% |
| **GPQA Diamond** | Graduate Level Science | 92.4% |
| **Terminal-Bench 2.1 / SWE-bench** | Coding & Terminal Execution | 82.9% |
| **HumanEval** | Code Correctness | 94.5% |
| **AIME 2026** | Advanced Mathematics | 95.8% |
| **Artificial Analysis Agentic Elo** | GDPval-AA v2 | 1631 (#5 Global) |

## 4. Safety, Alignment & Risk Assessment
* **CoT Alignment:** Safety checks are integrated directly into the reasoning token stream, enabling real-time self-policing before final response emission.
* **Agentic Tool Safety:** Implements strict sandboxing guidelines for tool execution, preventing unauthorised file system modifications or external shell escalation.
* **Hallucination Rate:** Measured at **0.8%**, benefiting from continuous CoT verification loops during multi-step reasoning.
