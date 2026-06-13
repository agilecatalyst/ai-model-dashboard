import json
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JSON = os.path.join(BASE_DIR, 'dist', 'data.json')
OUTPUT_MD = os.path.join(BASE_DIR, 'MODELS.md')

def main():
    if not os.path.exists(DATA_JSON):
        print("data.json not found! Run npm run compile first.")
        return
        
    with open(DATA_JSON, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    models = data.get('models', [])
    
    # Sort models by release date descending
    models.sort(key=lambda x: x.get('release_date', ''), reverse=True)
    
    md_content = []
    md_content.append("# Model Matrix Index: AI Models (2024-2026)")
    md_content.append("\nDit bestand is een automatisch gegenereerd overzicht van alle active modellen in de database. Het fungeert als een handige referentiekaart voor zowel ontwikkelaars als AI-agents.")
    md_content.append(f"\n**Totaal aantal modellen:** {len(models)}")
    md_content.append("\n## Model Matrix Tabel")
    md_content.append("\n| Model | Developer | Release | Access | Class | MMLU | GPQA | SWE-bench | Lying Rate |")
    md_content.append("| :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: |")
    
    for m in models:
        name = m.get('name', 'N/A')
        developer = m.get('developer', 'N/A')
        release = m.get('release_date', 'N/A')
        access = m.get('access', 'N/A')
        m_class = m.get('class', 'N/A')
        
        benchmarks = m.get('benchmarks', {})
        mmlu = f"{benchmarks.get('mmlu')}%" if benchmarks.get('mmlu') is not None else "-"
        gpqa = f"{benchmarks.get('gpqa')}%" if benchmarks.get('gpqa') is not None else "-"
        swe = f"{benchmarks.get('swe_bench')}%" if benchmarks.get('swe_bench') is not None else "-"
        lying = f"{m.get('hallucination_rate')}%" if m.get('hallucination_rate') is not None else "-"
        
        md_content.append(f"| **{name}** | {developer} | {release} | {access} | {m_class} | {mmlu} | {gpqa} | {swe} | {lying} |")
        
    md_content.append("\n## Model Families Overzicht")
    
    # Group by developer
    dev_groups = {}
    for m in models:
        dev = m.get('developer', 'Other')
        dev_groups.setdefault(dev, []).append(m)
        
    for dev, dev_models in sorted(dev_groups.items()):
        md_content.append(f"\n### {dev} ({len(dev_models)} modellen)")
        for m in sorted(dev_models, key=lambda x: x.get('name')):
            desc = m.get('ethics_notes', 'Geen specifieke toelichting.')
            md_content.append(f"- **{m.get('name')}** ({m.get('release_date')}) - *{m.get('class')}*: {desc}")
            
    with open(OUTPUT_MD, 'w', encoding='utf-8') as f:
        f.write('\n'.join(md_content))
        
    print(f"Successfully generated MODELS.md at: {OUTPUT_MD}")

if __name__ == '__main__':
    main()
