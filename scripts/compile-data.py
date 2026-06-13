import os
import json

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'data')
DIST_DIR = os.path.join(BASE_DIR, 'dist')

if not os.path.exists(DIST_DIR):
    os.makedirs(DIST_DIR)

def parse_yaml(yaml_str):
    lines = yaml_str.split('\n')
    models = []
    current_model = None
    current_key = None
    
    for line in lines:
        if not line.strip() or line.strip().startswith('#'):
            continue
        
        indent = len(line) - len(line.lstrip())
        trimmed = line.strip()
        
        if trimmed.startswith('models:'):
            continue
            
        if trimmed.startswith('- id:'):
            # Start of a new model
            model_id = trimmed[5:].strip().strip("'\"")
            current_model = {
                'id': model_id,
                'benchmarks': {},
                'best_applications': [],
                'links': {}
            }
            models.append(current_model)
            current_key = None
            continue
            
        if current_model:
            if indent == 4:
                # Top level model key
                if ':' in trimmed:
                    k, v = trimmed.split(':', 1)
                    k = k.strip()
                    v = v.strip().strip("'\"")
                    
                    if k in ('benchmarks', 'best_applications', 'links'):
                        current_key = k
                    else:
                        # Try parsing numbers
                        if v.lower() == 'true':
                            current_model[k] = True
                        elif v.lower() == 'false':
                            current_model[k] = False
                        else:
                            try:
                                if '.' in v:
                                    current_model[k] = float(v)
                                else:
                                    current_model[k] = int(v)
                            except ValueError:
                                current_model[k] = v
                        current_key = None
            elif indent == 6:
                if current_key == 'benchmarks' and ':' in trimmed:
                    k, v = trimmed.split(':', 1)
                    k = k.strip()
                    try:
                        current_model['benchmarks'][k] = float(v.strip())
                    except ValueError:
                        current_model['benchmarks'][k] = v.strip()
                elif current_key == 'links' and ':' in trimmed:
                    k, v = trimmed.split(':', 1)
                    current_model['links'][k.strip()] = v.strip().strip("'\"")
                elif current_key == 'best_applications' and trimmed.startswith('-'):
                    val = trimmed[1:].strip().strip("'\"")
                    current_model['best_applications'].append(val)
                    
    return models

def parse_markdown_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if not content.startswith('---'):
        return [], content
        
    parts = content.split('---', 2)
    if len(parts) < 3:
        return [], content
        
    yaml_content = parts[1]
    body_content = parts[2].strip()
    
    models = parse_yaml(yaml_content)
    return models, body_content

def main():
    print("Compiling markdown files in Python...")
    all_models = []
    ethical_analysis = ""
    co_creation_tips = ""
    
    files = os.listdir(DATA_DIR)
    for file in files:
        file_path = os.path.join(DATA_DIR, file)
        if not os.path.isfile(file_path):
            continue
            
        if file == 'ethical_and_hallucination_analysis.md':
            _, body = parse_markdown_file(file_path)
            ethical_analysis = body
            print(f"Processed ethical analysis: {file}")
        elif file == 'co_creation_tips.md':
            _, body = parse_markdown_file(file_path)
            co_creation_tips = body
            print(f"Processed co-creation tips: {file}")
        elif file.endswith('.md'):
            models, body = parse_markdown_file(file_path)
            for m in models:
                m['description_markdown'] = body
                system_card_url = m.get('links', {}).get('system_card')
                if system_card_url:
                    filename = system_card_url.split('/')[-1]
                    # Map generic names or custom families to specific local names
                    if '/llama3_2/' in system_card_url:
                        filename = 'llama-3-2-model-card.md'
                    elif '/llama3/blob' in system_card_url or '/llama3/' in system_card_url:
                        filename = 'llama-3-1-model-card.md'
                    elif '/GLM-4' in system_card_url or '/GLM-4' in system_card_url.upper():
                        filename = 'glm-4-system-card.md'
                    elif '/GLM-5' in system_card_url or '/GLM-5' in system_card_url.upper():
                        filename = 'glm-5-system-card.md'
                        
                    file_possibilities = [
                        filename,
                        filename.replace('.pdf', '.md'),
                        f"{m['id']}-system-card.md",
                        f"{m['id']}-model-card.md",
                        f"{m['id']}-system-card.pdf"
                    ]
                    
                    for pos in file_possibilities:
                        if not pos:
                            continue
                        local_path = os.path.join(BASE_DIR, 'system_cards', pos)
                        if os.path.isfile(local_path) and not pos.endswith('.info.txt'):
                            m['local_system_card'] = f"system_cards/{pos}"
                            break
                all_models.append(m)
            print(f"Processed model series: {file} ({len(models)} models)")
            
    output_data = {
        'models': all_models,
        'ethical_analysis': ethical_analysis,
        'co_creation_tips': co_creation_tips,
        'compiled_at': '2026-05-29T14:32:00Z' # Static/dynamic build timestamp
    }
    
    output_path = os.path.join(DIST_DIR, 'data.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
        
    print(f"Compilation finished. Saved to: {output_path}")

if __name__ == '__main__':
    main()
