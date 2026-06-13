import os
import json
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(BASE_DIR, 'dist', 'data.json')

# Key validated models and their expected metrics to guard against regression
VALIDATED_MODELS_EXPECTED = {
    'gemma-4-31b': {
        'benchmarks': {
            'gpqa': 84.3,
            'aime': 89.2,
            'swe_bench': 56.5
        }
    },
    'gemma-4-12b': {
        'benchmarks': {
            'gpqa': 78.8,
            'aime': 77.5,
            'swe_bench': 46.5
        }
    },
    'qwen-3-6-27b': {
        'benchmarks': {
            'gpqa': 87.8,
            'aime': 72.5,
            'swe_bench': 77.2
        }
    },
    'qwen-2-5-coder-32b': {
        'benchmarks': {
            'gpqa': 42.5,
            'aime': 30.5,
            'swe_bench': 29.4
        }
    },
    'qwen-3-7-max': {
        'benchmarks': {
            'gpqa': 80.4,
            'aime': 82.5,
            'swe_bench': 80.4
        }
    },
    'gpt-4o': {
        'benchmarks': {
            'gpqa': 53.6,
            'aime': 13.4,
            'swe_bench': 38.8
        }
    },
    'openai-o1': {
        'benchmarks': {
            'gpqa': 78.3,
            'aime': 83.3,
            'swe_bench': 48.9
        }
    },
    'gpt-5': {
        'benchmarks': {
            'gpqa': 85.0,
            'aime': 88.5,
            'swe_bench': 62.5
        }
    },
    'mistral-large-3': {
        'benchmarks': {
            'gpqa': 52.0,
            'aime': 35.0,
            'swe_bench': 58.5
        }
    },
    'mixtral-8x22b': {
        'benchmarks': {
            'gpqa': 32.2,
            'aime': 10.0,
            'swe_bench': 30.5
        }
    },
    'llama-3-1-nemotron-70b': {
        'benchmarks': {
            'gpqa': 46.5,
            'aime': 18.5,
            'swe_bench': 32.5
        }
    },
    'nemotron-3-ultra-550b': {
        'benchmarks': {
            'gpqa': 86.7,
            'aime': 82.5,
            'swe_bench': 71.0
        }
    }
}

def test_json():
    print("Running JSON validation checks...")
    if not os.path.exists(JSON_PATH):
        print(f"Error: {JSON_PATH} does not exist!")
        sys.exit(1)
        
    try:
        with open(JSON_PATH, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error: Failed to parse JSON: {e}")
        sys.exit(1)

    if 'models' not in data:
        print("Error: 'models' key is missing from JSON!")
        sys.exit(1)

    models = data['models']
    print(f"Loaded {len(models)} models.")

    required_keys = ['id', 'name', 'developer', 'release_date', 'access', 'benchmarks', 'best_applications', 'links', 'iq_lower', 'iq_upper', 'eq_bench', 'arena_elo']
    errors = 0

    for idx, model in enumerate(models):
        name = model.get('name', f"Model at index {idx}")
        for key in required_keys:
            if key not in model:
                print(f"Error in {name}: Missing required key '{key}'")
                errors += 1
        
        # Check benchmarks are present and nested
        benchmarks = model.get('benchmarks', {})
        if not isinstance(benchmarks, dict):
            print(f"Error in {name}: 'benchmarks' is not a dictionary!")
            errors += 1
        
        # Check access type
        access = model.get('access', '')
        if access not in ('Commercial', 'Open Weights'):
            print(f"Error in {name}: 'access' value is invalid ('{access}')")
            errors += 1

    # Run regression checks for hardcoded validated models
    print("\nRunning Regression checks for key validated models...")
    regression_errors = 0
    models_dict = {m['id']: m for m in models}
    
    for model_id, expected_data in VALIDATED_MODELS_EXPECTED.items():
        if model_id not in models_dict:
            print(f"Error: Hardcoded validated model '{model_id}' is missing from compiled JSON!")
            regression_errors += 1
            continue
            
        model = models_dict[model_id]
        name = model.get('name', model_id)
        
        # Check benchmarks
        for benchmark_key, expected_val in expected_data['benchmarks'].items():
            actual_val = model.get('benchmarks', {}).get(benchmark_key)
            if actual_val != expected_val:
                print(f"Error in {name}: Benchmark '{benchmark_key}' value mismatch. Expected: {expected_val}, Got: {actual_val}")
                regression_errors += 1

    if regression_errors == 0:
        print("Success: All regression checks passed for validated models!")
    else:
        print(f"Failed: Found {regression_errors} regression errors.")
        errors += regression_errors

    if errors == 0:
        print("\n🎉 Success: All data validation and regression tests passed!")
        sys.exit(0)
    else:
        print(f"\n🔴 Failed: Found {errors} total validation/regression errors.")
        sys.exit(1)

if __name__ == '__main__':
    test_json()
