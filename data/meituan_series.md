---
models:
  - id: longcat-2-5
    name: LongCat-2.5
    developer: Meituan
    release_date: 2026-11-09
    access: Open Weights
    class: Next-Gen Frontier MoE
    ethics_notes: API availability started 2026-11-02 and the weights followed on 2026-11-09 under a plain MIT licence, which makes it the most permissive high-end open model of this generation - MIT grants commercial use, modification and redistribution, though no trademark or patent grant. Meituan's own model card reports 1.6T total / ~48B active parameters while the Hugging Face metadata lists 1.8T; that discrepancy is unresolved publicly. Subject to Chinese generative AI regulation. Not self-hostable on SME hardware - Meituan's own 4-bit expert quantisation targets datacentre NPUs, not workstations.
    lying_notes: No hallucination measurement published at all, and no independent third-party evaluation of this model was found. Meituan itself labels its in-house numbers indicative only, so every figure below is a vendor claim.
    best_applications:
      - Self-hosted visual coding agents - MIT plus image and video input is the most legally permissive route for screenshot-driven repo work (78.6% Vision2Web, vendor-reported)
      - Repository-level Q&A and terminal automation at $0.30/$1.20 per 1M tokens (58.3% SWE Atlas, vendor-reported)
      - Building fine-tuned derivative products where a bespoke licence such as Kimi's would be a blocker
    links:
      website: https://longcat.ai
      system_card: https://huggingface.co/meituan-longcat/LongCat-2.5
    citations:
      - source: "Meituan model card (vendor-reported, labelled indicative only)"
        metric: "terminal_bench_2_1"
        value: 88.4
        url: "https://huggingface.co/meituan-longcat/LongCat-2.5"
        verified_date: "2026-11-21"
      - source: "Meituan model card (vendor-reported, labelled indicative only)"
        metric: "deepswe_v1_1"
        value: 64.6
        url: "https://huggingface.co/meituan-longcat/LongCat-2.5"
        verified_date: "2026-11-21"
      - source: "Meituan model card (vendor-reported, labelled indicative only)"
        metric: "terminal_bench_4"
        value: 38.5
        url: "https://huggingface.co/meituan-longcat/LongCat-2.5"
        verified_date: "2026-11-21"
---

# Meituan LongCat Series (Open Weights)

Meituan is best known in Europe as a food-delivery platform, not an AI lab, which is precisely why **LongCat-2.5** is worth a line in this dashboard. In November 2026 it published a trillion-parameter-class multimodal MoE **under a plain MIT licence** - the most permissive licence attached to any high-end open model of this generation.

### Why it matters, and why it probably is not for you:
1. **Licence over leaderboard.** MIT removes the commercial friction that custom licences (Kimi K3.1-Pro, GLM-5.3) introduce. For a company building a derivative product, that can outweigh a few benchmark points.
2. **Open weights are not the same as self-hostable.** At 1.6T total parameters this needs a datacentre, not an office. "Open weights" here buys you an exit option and auditability, not local inference.
3. **No independent verification.** Every published number comes from Meituan, which labels its own figures indicative only. Treat the benchmark bars as direction, not measurement (*Nullius in Verba*).
