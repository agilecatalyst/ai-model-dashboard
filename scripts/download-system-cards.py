import os
import urllib.request
import urllib.error
import ssl

# Bypass SSL verification if there are cert issues on local machine
ssl._create_default_https_context = ssl._create_unverified_context

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_DIR = os.path.join(BASE_DIR, 'system_cards')

if not os.path.exists(TARGET_DIR):
    os.makedirs(TARGET_DIR)

cards_to_download = [
    {
        'filename': 'gpt-4o-system-card.pdf',
        'url': 'https://assets.ctfassets.net/kftzwdyau1h5/13W659M7xWkRt2f7W9Hspg/fb373ca9db86fa6443c5ee9659b8c04f/gpt-4o-system-card.pdf'
    },
    {
        'filename': 'gpt-4o-mini-system-card.pdf',
        'url': 'https://assets.ctfassets.net/kftzwdyau1h5/20c54ea6e88fb98ff8e3e4a3501a357f/gpt-4o-mini-system-card.pdf'
    },
    {
        'filename': 'o1-system-card.pdf',
        'url': 'https://assets.ctfassets.net/kftzwdyau1h5/6984eb8a-c603-4c90-9c2b-426b38c2134a/o1-system-card.pdf'
    },
    {
        'filename': 'llama-3-1-model-card.md',
        'url': 'https://raw.githubusercontent.com/meta-llama/llama3/main/MODEL_CARD.md'
    },
    {
        'filename': 'llama-3-2-model-card.md',
        'url': 'https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_2/MODEL_CARD.md'
    },
    {
        'filename': 'gemma-2-report.pdf',
        'url': 'https://storage.googleapis.com/deepmind-media/gemma/gemma-2-report.pdf'
    },
    {
        'filename': 'Gemma3Report.pdf',
        'url': 'https://storage.googleapis.com/deepmind-media/gemma/Gemma3Report.pdf'
    },
    {
        'filename': 'gemini-1-5-report.pdf',
        'url': 'https://arxiv.org/pdf/2403.05530'
    }
]

def download_file(url, dest):
    # Set a User-Agent to avoid HTTP 403 Forbidden errors from servers blocking default Python agents
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    )
    with urllib.request.urlopen(req) as response, open(dest, 'wb') as out_file:
        out_file.write(response.read())

def main():
    print(f"Starting system cards download in Python. Target: {TARGET_DIR}")
    for card in cards_to_download:
        dest_path = os.path.join(TARGET_DIR, card['filename'])
        print(f"Downloading {card['filename']}...")
        try:
            download_file(card['url'], dest_path)
            print(f"Successfully downloaded: {card['filename']}")
        except Exception as e:
            print(f"Warning: Failed to download {card['filename']}. Error: {e}")
            with open(dest_path + '.info.txt', 'w') as info_file:
                info_file.write(f"Source URL: {card['url']}\nDownload failed. Refer to online link.")
    print("System cards download finished.")

if __name__ == '__main__':
    main()
