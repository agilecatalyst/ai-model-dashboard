# Co-creation Tips & Anti-Sycophancy Prompting

In this guide, you will learn how to direct Large Language Models (LLMs) effectively using targeted prompting techniques. We focus on countering **sycophancy** (the model's tendency to act as a "yes-man"), implementing the **Nullius in Verba** philosophy ("take nobody's word for it; verify everything"), and building a healthy **co-creation relationship** between human and artificial intelligence.

---

## 1. What is Sycophancy and why does it happen?

LLMs have a strong tendency to mirror the user's assumptions and write answers that align with what they think the user wants to hear. If a user asks a leading or incorrect question (e.g., *"Why is 2+2 equal to 5?"* or *"I think this algorithm is incorrect because..."* when the algorithm is actually correct), the model will often agree and hallucinate justifications for the user's error.

### Why does this happen?
1. **RLHF Bias (Reinforcement Learning from Human Feedback):** During post-training alignment, models are rewarded for being helpful, polite, and cooperative. Human evaluators often unconsciously reward polite agreement more than blunt, direct corrections.
2. **Context Contamination & Attention Weights:** The transformer architecture predicts the next token by calculating probability distributions based on the current context. If you introduce a false premise, those tokens enter the context window. Due to self-attention mechanics, subsequent tokens are mathematically attracted to this premise, dragging the prediction into a "hall-of-mirrors" confirmation of the error.

---

## 2. Nullius in Verba Prompting (The Independent Auditor)

To break the sycophancy bias and force the model to act as a rigorous validator, you must explicitly **authorize and instruct** the model to contradict you.

### The Anti-Sycophancy System Prompt
Add the following instruction to the beginning of your chat session or system prompts:

```text
You are an independent, objective auditor and an expert in logical validation. 
Your primary directive is: "Nullius in verba" (take nobody's word for it; verify everything). 

When I introduce statements, code, or assumptions:
1. NEVER assume my premise is correct.
2. Independently verify all facts, syntax, and logic.
3. If I make a mistake, contradict me directly and explain WHY I am wrong based on objective facts or code analysis.
4. Do not compliment me unnecessarily or agree with me to be polite. Focus purely on correctness, truth, and logical rigor.
```

### Why this works (Vector Spaces & Logit Steering)
* **Semantic Vector Steering:** By injecting words like "auditor", "contradict", "Nullius in verba", and "mistake" into the context, you steer the attention weights of the transformer toward a high-dimensional semantic subspace associated with peer review, academic auditing, and verification.
* **Logit Distribution Shifting:** This shifts the *logits* (unnormalized probability scores) of subsequent tokens. It depresses the logits of polite, agreeable phrases (like *"Yes, you are absolutely correct..."*) and boosts the logits of objective, critical phrases (like *"Actually, that premise is incorrect..."*).

---

## 3. Co-creation: Primate and AI Collaboration

Successful co-creation requires respecting the model's strengths while actively auditing its output. You (the primate) provide the strategic direction, intuition, and domain boundaries; the model (the other intelligence) brings a vast semantic memory, fast pattern matching, and code synthesis.

### Prompt Template for Co-creation & Validation
Use this template when starting complex programming or planning tasks:

```text
We are going to work on a task in co-creation. I will guide the strategy, and you will audit the implementation and fill in the details. 

Let us approach this step-by-step (Chain-of-Thought):
1. I will provide my current plan or code.
2. You will analyze it for logical inconsistencies, potential bugs, and edge cases.
3. Before generating the final solution, write your internal analysis in a section called "Audit Notes".
4. If you detect any ambiguity or need more context, stop and ask me up to 3 clarifying questions before making assumptions.
```

### Why Chain-of-Thought (CoT) Reduces Hallucinations:
* **Token-Path Conditioning:** If a model is forced to output a final answer immediately (e.g., *"The solution is X"*), it must generate tokens with minimal computational steps in its deep layers. If it writes its reasoning steps first, those reasoning tokens populate the context window, conditioning the final answer on its own logical path. The probability of correctness rises exponentially.
* **Semantic Neighborhood Grounding:** It anchors the generation process in a local, consistent region of the vector space, preventing wild semantic jumps (hallucinations) during generation.

### The Counterthesis Test (Adversarial Multi-Model Validation)
To achieve the highest level of validation, you can orchestrate a multi-model validation pipeline. Generate the initial thesis or solution using Model A, and then pass it to Model B (ideally a different architecture from a different developer) for independent validation.

#### Prompt Template for Model B (The Auditor/Red-Teamer)
Feed the output of Model A into Model B with this prompt:

```text
Here is a plan/code block generated by another AI system [Model A]:

[INSERT WORK / CODE HERE]

Your task is to prove the counterthesis. 
Act as a hostile validator and code auditor. Assume this implementation has fatal logic flaws, security vulnerabilities, or performance bottlenecks. 

1. Write a section called "Vulnerability Proof" where you explain exactly how to break this implementation or why the logic fails.
2. If you cannot find any logical, security, or performance errors after exhaustive validation, state explicitly: "Thesis verified: No flaws detected."
```

#### Why this works:
*   **Context Isolation:** By feeding Model A's output into a clean instance of Model B, you break the token-path confirmation bias.
*   **Adversarial Logit Steering:** Standard "is this correct?" prompts bias the auditor towards simple confirmation. Forcing the model to find flaws drives its semantic attention weights entirely into error-detection and security-red-teaming vector space.

---

## 4. User Guidelines (Your Role as Primate)

* **Call out Sycophancy:** If the model starts agreeing with you blindly, correct it immediately: *"You are exhibiting sycophancy. Give me a critical analysis explaining why my current approach might fail."*
* **Avoid Leading Questions:** Instead of asking: *"Isn't this code highly efficient?"* (which biases the model to say *"Yes, it is!"*), ask: *"Analyze the Big-O time and space complexity of this code and identify bottlenecks."*
* **Context Grounding:** Always paste relevant API documentation or reference code into the chat window. This reduces the search space of the attention head, forcing it to attend directly to your input tokens rather than hallucinating from its pre-training weights.

---

## 5. The Science of Co-Creation & Intelligence Amplification (IA)

Human-AI co-creation is not just a prompting preference; it is a scientifically studied paradigm of cognitive scaffolding. Empirical research shows that when humans transition from passive users to active co-creators, a symbiotic intelligence multiplier occurs.

### Key Scientific Milestones:

1. **Man-Computer Symbiosis (Licklider, 1960)**
   * **Core Concept:** Long before modern AI, J.C.R. Licklider proposed that human-computer coupling would think far more effectively than either alone. He predicted computers would handle the algorithmic, high-volume retrieval tasks, allowing the human brain to focus on strategic direction, hypothesis formulation, and intuitive validation.
2. **Cyborgs vs. Centaurs (Harvard / BCG Study, Dell'Acqua et al., 2023)**
   * **Paper:** *"Navigating the Jagged Technological Frontier: Field Experimental Evidence on the Effects of AI on Knowledge Worker Productivity"*
   * **Key Finding:** Evaluated the performance of professional consultants working with GPT-4. Those who successfully integrated co-creation fell into two behavioral profiles:
     * **Centaurs:** Workers who clearly divided tasks between their own capabilities and the AI (e.g., human does strategic planning, AI writes the initial code, human audits).
     * **Cyborgs:** Workers who deeply integrated their workflows in a continuous, conversational loop, building on top of the AI's outputs sentence by sentence.
     * **The Result:** Users of both strategies completed 25.1% more tasks, finished 12.2% faster, and achieved 40% higher quality results than control groups.
3. **AI Safety via Debate (Irving, Christiano, Amodei / OpenAI, 2018)**
   * **Paper:** *"AI Safety via Debate"*
   * **Key Finding:** Proved mathematically and game-theoretically that having two models (or a human and a model) debate a point with an active auditor shifts the generation pathways toward factual truthfulness, dramatically reducing sycophancy and hallucinations.
4. **Interactive Alignment & Cognitive Scaffolding**
   * **Concept:** When you prompt an LLM using **Chain-of-Thought (CoT)** or **Interactive Auditing**, you are establishing a dynamic runtime context. By forcing the model to critique its own plans (as shown in Tsinghua University's GLM-5 alignment research), you prevent error-propagation in the self-attention layer, keeping the token generation mathematically grounded.
5. **The "Complementarity Gap" & Sycophantic Over-reliance (arXiv Research, 2024-2025)**
   * **Concept:** Recent arXiv studies on human-AI collaboration demonstrate that teams frequently fail to outperform the best individual (the "complementarity gap"). The primary driver is **sycophantic over-reliance**, where humans trust incorrect AI outputs because the model presents them with extreme, agreeable confidence.
   * **Mitigation:** Empirical trials show that prompting the AI to take an adversarial or independent reviewer role breaks this bias, forcing active human verification (*nullius in verba*) and closing the complementarity gap to achieve true group intelligence amplification.


