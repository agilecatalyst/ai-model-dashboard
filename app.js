// ModelMatrix Application Script

let appState = {
  models: [],
  filteredModels: [],
  ethicalAnalysis: '',
  coCreationTips: '',
  privateModelsGuide: '',
  activeFilter: 'all', // 'all', 'commercial', 'open'
  activeSort: 'release_date-desc',
  searchQuery: '',
  activeView: 'grid', // 'grid' or 'trends'
  selectedBenchmark: 'gpqa',
  showTrendlines: true,
  disabledFamilies: new Set()
};


// Markdown Parser functions
function parseInlineMarkdown(text) {
  if (!text) return '';
  let html = text;
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="md-link">$1</a>');
  return html;
}

function parseMarkdownBlocks(text) {
  if (!text) return '';
  const lines = text.split('\n');
  let html = '';
  let inList = false;
  let listType = null; // 'ul' or 'ol'
  let inTable = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Table parsing
    if (line.startsWith('|')) {
      if (!inTable) {
        html += '<table class="md-table">';
        inTable = true;
        // Parse header row
        html += '<thead><tr>' + line.split('|').slice(1, -1).map(cell => `<th>${parseInlineMarkdown(cell.trim())}</th>`).join('') + '</tr></thead><tbody>';
        // Skip separator row if next line is separator
        if (lines[i+1] && lines[i+1].trim().startsWith('|---')) {
          i++;
        }
      } else {
        html += '<tr>' + line.split('|').slice(1, -1).map(cell => `<td>${parseInlineMarkdown(cell.trim())}</td>`).join('') + '</tr>';
      }
      continue;
    } else if (inTable && !line.startsWith('|')) {
      html += '</tbody></table>';
      inTable = false;
    }

    // List parsing
    if (line.startsWith('-') || line.startsWith('*')) {
      if (!inList || listType !== 'ul') {
        if (inList) html += `</${listType}>`;
        html += '<ul class="md-list">';
        inList = true;
        listType = 'ul';
      }
      html += `<li>${parseInlineMarkdown(line.substring(1).trim())}</li>`;
      continue;
    }

    if (/^\d+\./.test(line)) {
      if (!inList || listType !== 'ol') {
        if (inList) html += `</${listType}>`;
        html += '<ol class="md-ol">';
        inList = true;
        listType = 'ol';
      }
      const itemText = line.replace(/^\d+\./, '').trim();
      html += `<li>${parseInlineMarkdown(itemText)}</li>`;
      continue;
    }

    if (inList && !line.startsWith('-') && !line.startsWith('*') && !/^\d+\./.test(line)) {
      html += `</${listType}>`;
      inList = false;
      listType = null;
    }

    // Header parsing
    if (line.startsWith('###')) {
      html += `<h3>${parseInlineMarkdown(line.substring(3).trim())}</h3>`;
    } else if (line.startsWith('##')) {
      html += `<h2>${parseInlineMarkdown(line.substring(2).trim())}</h2>`;
    } else if (line.startsWith('#')) {
      html += `<h1>${parseInlineMarkdown(line.substring(1).trim())}</h1>`;
    } else if (line === '') {
      // Empty line
    } else {
      html += `<p>${parseInlineMarkdown(line)}</p>`;
    }
  }

  if (inList) html += `</${listType}>`;
  if (inTable) html += '</tbody></table>';

  return html;
}

// Fetch and load data
async function loadData() {
  if (window.location.protocol === 'file:') {
    document.getElementById('models-grid').innerHTML = `
      <div class="glass" style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--color-gold);">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 2.2rem; margin-bottom: 1rem;"></i>
        <p><strong>CORS Security Error:</strong> You have opened the dashboard via the local filesystem (<code>file://</code>).</p>
        <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">
          Modern browsers block loading local data files due to security restrictions.<br>
          Run a local web server by running <code>python3 -m http.server 8080</code> in your terminal, then open <a href="http://localhost:8080" target="_blank" style="color: var(--color-open); font-weight: 700;">http://localhost:8080</a> in your browser.
        </p>
      </div>
    `;
    return;
  }

  try {
    const response = await fetch(`dist/data.json?v=${new Date().getTime()}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    appState.models = data.models;
    appState.filteredModels = [...data.models];
    appState.ethicalAnalysis = data.ethical_analysis;
    appState.coCreationTips = data.co_creation_tips;
    appState.privateModelsGuide = data.private_models_guide;
    
    // Update theme counts
    const commercial = appState.models.filter(m => m.access.toLowerCase() === 'commercial').length;
    const open = appState.models.filter(m => m.access.toLowerCase() === 'open weights').length;
    
    document.getElementById('commercial-count').textContent = commercial;
    document.getElementById('open-count').textContent = open;
    
    renderApp();
  } catch (error) {
    console.error('Failed to load model data:', error);
    document.getElementById('models-grid').innerHTML = `
      <div class="glass" style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--color-gold);">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <p>Error loading model data. Please ensure the data is compiled correctly by running <code>python3 scripts/compile-data.py</code>.</p>
      </div>
    `;
  }
}

// Core Rendering Functions
function renderApp() {
  applyFiltersAndSort();
  renderTimeline();
  renderModelsGrid();
  renderHonestyRanking();
}

function applyFiltersAndSort() {
  let temp = [...appState.models];

  // Apply Search
  if (appState.searchQuery) {
    const q = appState.searchQuery.toLowerCase();
    temp = temp.filter(m => 
      m.name.toLowerCase().includes(q) || 
      m.developer.toLowerCase().includes(q) || 
      (m.class && m.class.toLowerCase().includes(q))
    );
  }

  // Apply Filter Buttons
  if (appState.activeFilter === 'commercial') {
    temp = temp.filter(m => m.access.toLowerCase() === 'commercial');
  } else if (appState.activeFilter === 'open') {
    temp = temp.filter(m => m.access.toLowerCase() === 'open weights');
  }

  // Apply Sorting
  const [field, order] = appState.activeSort.split('-');
  temp.sort((a, b) => {
    let valA, valB;

    if (field === 'release_date') {
      valA = new Date(a.release_date);
      valB = new Date(b.release_date);
    } else if (field === 'mmlu' || field === 'gpqa' || field === 'swe_bench') {
      valA = a.benchmarks[field] || 0;
      valB = b.benchmarks[field] || 0;
    } else if (field === 'hallucination_rate' || field === 'ethics_rating') {
      valA = a[field] || 0;
      valB = b[field] || 0;
    }

    if (order === 'asc') {
      return valA > valB ? 1 : -1;
    } else {
      return valA < valB ? 1 : -1;
    }
  });

  appState.filteredModels = temp;
}

// Group models by release half-year
function getModelHalfYear(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-indexed (Jan is 0)
  
  if (month >= 0 && month <= 5) return `H1 ${year}`;
  return `H2 ${year}`;
}

function renderTimeline() {
  const track = document.getElementById('timeline-track');
  track.innerHTML = '';

  // Defined chronological half-years to display
  const halfYears = [
    'H1 2024', 'H2 2024',
    'H1 2025', 'H2 2025',
    'H1 2026'
  ];

  halfYears.forEach(hy => {
    const col = document.createElement('div');
    col.className = 'timeline-quarter'; // Keep class for CSS compatibility
    
    const label = document.createElement('span');
    label.className = 'quarter-label'; // Keep class for CSS compatibility
    label.textContent = hy;
    col.appendChild(label);

    const nodesContainer = document.createElement('div');
    nodesContainer.className = 'timeline-nodes-container';

    // Find models in this half-year (filtered by current search/buttons)
    const hyModels = appState.filteredModels.filter(m => getModelHalfYear(m.release_date) === hy);

    hyModels.forEach(model => {
      const node = document.createElement('div');
      const isCommercial = model.access.toLowerCase() === 'commercial';
      node.className = `timeline-node ${isCommercial ? 'commercial' : 'open'}`;
      node.setAttribute('data-name', `${model.name} (${model.developer})`);
      node.addEventListener('click', () => openDetailModal(model.id));
      nodesContainer.appendChild(node);
    });

    col.appendChild(nodesContainer);
    track.appendChild(col);
  });
}

function renderModelsGrid() {
  const grid = document.getElementById('models-grid');
  grid.innerHTML = '';

  if (appState.filteredModels.length === 0) {
    grid.innerHTML = `
      <div class="glass" style="grid-column: 1/-1; padding: 3rem; text-align: center; color: var(--text-secondary);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--glass-border);"></i>
        <p>No models found matching the criteria.</p>
      </div>
    `;
    return;
  }

  appState.filteredModels.forEach(model => {
    const card = document.createElement('div');
    const isCommercial = model.access.toLowerCase() === 'commercial';
    card.className = `model-card glass ${isCommercial ? 'commercial' : 'open'}`;
    card.addEventListener('click', () => openDetailModal(model.id));

    // Calculate progress percentages (benchmarks range from 0 to 100)
    const mmlu = model.benchmarks.mmlu || 0;
    const gpqa = model.benchmarks.gpqa || 0;
    const swe = model.benchmarks.swe_bench || 0;

    card.innerHTML = `
      <div>
        <div class="model-card-header">
          <div>
            <div class="model-name">${model.name}</div>
            <div class="model-developer">${model.developer}</div>
          </div>
          <span class="type-indicator ${isCommercial ? 'commercial' : 'open'}">
            ${isCommercial ? 'Commercial' : 'Open'}
          </span>
        </div>
        
        <div class="model-metrics" style="margin-top: 1rem;">
          <div class="metric-row">
            <div class="metric-label-container">
              <span class="metric-label">MMLU (General)</span>
              <span class="metric-val">${mmlu}%</span>
            </div>
            <div class="metric-bar-container">
              <div class="metric-bar mmlu-bar" style="width: ${mmlu}%"></div>
            </div>
          </div>
          
          <div class="metric-row">
            <div class="metric-label-container">
              <span class="metric-label">GPQA (Expert Knowledge)</span>
              <span class="metric-val">${gpqa}%</span>
            </div>
            <div class="metric-bar-container">
              <div class="metric-bar gpqa-bar" style="width: ${gpqa}%"></div>
            </div>
          </div>
          
          <div class="metric-row">
            <div class="metric-label-container">
              <span class="metric-label">SWE-bench (Coding)</span>
              <span class="metric-val">${swe}%</span>
            </div>
            <div class="metric-bar-container">
              <div class="metric-bar swe-bar" style="width: ${swe}%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="model-card-footer">
        <span class="date-released">${formatDate(model.release_date)}</span>
        <span class="hallucination-badge">
          <i class="fa-solid fa-triangle-exclamation"></i> Lying Rate: ${model.hallucination_rate}%
        </span>
      </div>
    `;

    grid.appendChild(card);
  });
}

function renderHonestyRanking() {
  const list = document.getElementById('honesty-list');
  list.innerHTML = '';

  // Sort all models by hallucination rate (lowest is best/most factually consistent)
  const topHonest = [...appState.models]
    .filter(m => m.hallucination_rate !== undefined)
    .sort((a, b) => a.hallucination_rate - b.hallucination_rate)
    .slice(0, 5);

  topHonest.forEach((model, index) => {
    const li = document.createElement('li');
    li.className = 'honesty-item';
    li.addEventListener('click', () => openDetailModal(model.id));
    li.style.cursor = 'pointer';

    // Factual consistency score = 100 - hallucination_rate
    const consistency = (100 - model.hallucination_rate).toFixed(1);

    li.innerHTML = `
      <div>
        <span class="honesty-rank">#${index + 1}</span>
        <span class="honesty-model">${model.name}</span>
      </div>
      <span class="honesty-val">${consistency}%</span>
    `;
    list.appendChild(li);
  });
}

function isQualifiedPrivateModel(model) {
  if (model.access.toLowerCase() !== 'open weights') return false;
  
  // Memory check: filter out models that are too large (e.g. 70B, 130B, 550B, or deepseek-v3/v4 MoEs)
  const id = model.id.toLowerCase();
  const isTooLarge = id.includes('70b') || id.includes('130b') || id.includes('550b') || id.includes('ultra') || id.includes('deepseek-v3') || id.includes('deepseek-v4');
  if (isTooLarge) return false;
  
  // Performance check: SWE-bench score >= 29% (minstens +/- 30%)
  const swe = model.benchmarks.swe_bench || 0;
  return swe >= 29;
}

function openDetailModal(modelId) {
  const model = appState.models.find(m => m.id === modelId);
  if (!model) return;

  const body = document.getElementById('modal-content-body');
  const isCommercial = model.access.toLowerCase() === 'commercial';

  // Build Applications List items
  const appsHtml = model.best_applications
    .map(app => `<li><i class="fa-solid fa-circle-check"></i> ${app}</li>`)
    .join('');

  // Use local system card path if compiled as present, otherwise fallback to remote URL
  const cardUrl = model.local_system_card || model.links.system_card || '#';

  // Convert markdown to HTML for description
  const descriptionHtml = parseMarkdownBlocks(model.description_markdown);

  // Calculate A-IQ percentages
  const minScore = 70;
  const maxScore = 160;
  const span = maxScore - minScore;
  const lower = model.iq_lower || 70;
  const upper = model.iq_upper || 160;
  const leftPct = Math.max(0, Math.min(100, ((lower - minScore) / span) * 100));
  const rightPct = Math.max(0, Math.min(100, ((upper - minScore) / span) * 100));
  const widthPct = Math.max(1, rightPct - leftPct);

  body.innerHTML = `
    <div class="model-card-header">
      <div>
        <h1 class="modal-title">${model.name}</h1>
        <div class="modal-developer">developed by ${model.developer}</div>
      </div>
      <span class="type-indicator ${isCommercial ? 'commercial' : 'open'}" style="font-size: 0.9rem; padding: 0.4rem 0.8rem;">
        ${isCommercial ? 'Commercial' : 'Open Weights'}
      </span>
    </div>

    <div class="modal-meta-grid">
      <div class="meta-box">
        <div class="meta-box-label">Release Date</div>
        <div class="meta-box-val">${formatDate(model.release_date)}</div>
      </div>
      <div class="meta-box">
        <div class="meta-box-label">Model Class</div>
        <div class="meta-box-val" style="font-size: 0.8rem;">${model.class || 'N/A'}</div>
      </div>
      <div class="meta-box">
        <div class="meta-box-label">Benchmarks</div>
        <div class="meta-box-val">MMLU: ${model.benchmarks.mmlu || 'N/A'}%</div>
      </div>
    </div>

    <h2 class="detail-section-title"><i class="fa-solid fa-gauge-high"></i> Benchmark Statistics</h2>
    <div class="radial-metrics">
      <div class="radial-metric-box">
        <span class="radial-val">${model.benchmarks.mmlu || 'N/A'}%</span>
        <span class="radial-label">MMLU (General Knowledge)</span>
      </div>
      <div class="radial-metric-box">
        <span class="radial-val">${model.benchmarks.gpqa || 'N/A'}%</span>
        <span class="radial-label">GPQA (Graduate Q&A)</span>
      </div>
      <div class="radial-metric-box">
        <span class="radial-val">${model.benchmarks.swe_bench || 'N/A'}%</span>
        <span class="radial-label">SWE-bench (Autonomous Coding)</span>
      </div>
      <div class="radial-metric-box">
        <span class="radial-val">${model.benchmarks.aime || 'N/A'}%</span>
        <span class="radial-label">AIME (Mathematical Logic)</span>
      </div>
    </div>
    ${isQualifiedPrivateModel(model) ? `
      <div class="local-qualification-banner">
        <div class="local-qualification-banner-header">
          <i class="fa-solid fa-user-shield"></i> Gekwalificeerd voor lokaal gebruik (Max 32GB RAM)
        </div>
        <p class="local-qualification-banner-text">
          Dit model voldoet aan de eisen voor lokale uitrol (max. 32GB RAM en SWE-bench >= 30%). Het is uitstekend geschikt voor private codeer- en agentic use cases.
          <a href="#" class="warning-link" id="private-models-link-trigger" style="color: var(--color-open); margin-left: 0.25rem; font-weight: 600;">Bekijk de Private Models Richtlijnen</a>.
        </p>
      </div>
    ` : ''}

    <h2 class="detail-section-title"><i class="fa-solid fa-brain"></i> Cognitive Range (A-IQ)</h2>
    <div class="iq-section-container">
      <div class="iq-scale-ticks">
        <span style="left: 0%;">70</span>
        <span style="left: 33.33%; transform: translateX(-50%);">100 (Avg Human)</span>
        <span style="left: 66.66%; transform: translateX(-50%);">130 (Mensa Entry)</span>
        <span style="left: 100%; transform: translateX(-100%);">160+</span>
      </div>
      <div class="iq-range-track-container">
        <div class="iq-range-track">
          <div class="iq-range-fill" style="left: ${leftPct}%; width: ${widthPct}%;">
            <span class="iq-badge iq-badge-lower">${lower}</span>
            <span class="iq-badge iq-badge-upper">${upper}</span>
          </div>
        </div>
      </div>
      <div class="iq-disclaimer">
        <i class="fa-solid fa-triangle-exclamation"></i> <strong>Disclaimer:</strong> A-IQ is not equivalent to human intelligence or consciousness. It measures out-of-the-box zero-shot reasoning capabilities (calibrated against offline <a href="https://www.mensa.org" target="_blank" class="iq-disclaimer-link">Mensa</a> reasoning items and the <a href="https://arxiv.org/abs/2311.12022" target="_blank" class="iq-disclaimer-link">GPQA</a> benchmark). Targeted advanced prompting and co-creation can achieve <a href="#" class="iq-disclaimer-link" id="iq-disclaimer-trigger">Intelligence Amplification (1+1=3)</a>.
      </div>
    </div>

    <h2 class="detail-section-title"><i class="fa-solid fa-triangle-exclamation"></i> Factuality & Hallucination ("Lying" Rate)</h2>
    <div class="ethics-meter-container">
      <div class="ethics-rate-number" style="color: #ff4757;">${model.hallucination_rate}%</div>
      <div class="ethics-p" style="margin: 0;">
        <strong>Hallucination Rate (Vectara HHEM):</strong> ${model.lying_notes || 'N/A'}
      </div>
    </div>

    <h2 class="detail-section-title"><i class="fa-solid fa-scale-balanced"></i> Ethical Evaluation & Alignment</h2>
    <div class="ethics-meter-container">
      <div class="ethics-rate-number">${model.ethics_rating}/10</div>
      <div class="ethics-p" style="margin: 0;">
        <strong>Ethics & Safety:</strong> ${model.ethics_notes || 'N/A'}
      </div>
    </div>

    <h2 class="detail-section-title"><i class="fa-solid fa-comments"></i> Behavioral & Social Intelligence</h2>
    <div class="behavioral-metrics-container">
      <div class="behavioral-metric-box">
        <div class="behavioral-metric-header">
          <span class="behavioral-label">
            <i class="fa-solid fa-heart-pulse"></i> 
            <a href="https://eqbench.com" target="_blank" class="metric-source-link">EQ-Bench (Emotional IQ) <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.7rem; opacity: 0.7;"></i></a>
          </span>
          <span class="behavioral-value">${model.eq_bench}%</span>
        </div>
        <div class="behavioral-bar-track">
          <div class="behavioral-bar-fill eq-fill" style="width: ${model.eq_bench}%;"></div>
        </div>
      </div>
      <div class="behavioral-metric-box">
        <div class="behavioral-metric-header">
          <span class="behavioral-label">
            <i class="fa-solid fa-trophy"></i> 
            <a href="https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard" target="_blank" class="metric-source-link">Chatbot Arena Elo <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.7rem; opacity: 0.7;"></i></a>
          </span>
          <span class="behavioral-value">${model.arena_elo}</span>
        </div>
        <div class="behavioral-bar-track">
          <div class="behavioral-bar-fill elo-fill" style="width: ${Math.max(0, Math.min(100, ((model.arena_elo - 800) / 700) * 100))}%;"></div>
        </div>
      </div>
      <div class="sycophancy-warning-box">
        <div class="warning-title">
          <i class="fa-solid fa-triangle-exclamation"></i> The Empathy Paradox
        </div>
        <p class="warning-text">
          High EQ and Chatbot Arena ratings often correlate with increased **sycophancy** (agreeableness at the expense of truth). Highly aligned models tend to mirror user bias and affirm incorrect logic rather than pushing back. While Highly Sensitive Persons (HSPs) can detect subtle cues of soft pushback, non-HSP users are frequently misled by sycophantic confirmation.
        </p>
        <div class="warning-action-text">
          Use the <a href="#" class="warning-link" id="sycophancy-link-trigger">Co-Creation & Anti-Sycophancy tips</a> to learn how to prompt for active pushback.
        </div>
      </div>
    </div>

    <h2 class="detail-section-title"><i class="fa-solid fa-star"></i> Best Applications (Reddit/Dev Reviews)</h2>
    <ul class="best-app-list" style="margin-bottom: 2rem;">
      ${appsHtml || '<li>No specific use cases documented.</li>'}
    </ul>

    <h2 class="detail-section-title"><i class="fa-solid fa-link"></i> Sources & System Cards</h2>
    <div class="doc-links-grid" style="margin-bottom: 2.5rem;">
      <a href="${model.links.website || '#'}" target="_blank" class="doc-link">
        <i class="fa-solid fa-globe"></i> Official Website
      </a>
      <a href="${cardUrl}" target="_blank" class="doc-link">
        <i class="fa-solid fa-file-pdf"></i> System Card / PDF
      </a>
    </div>

    <h2 class="detail-section-title"><i class="fa-solid fa-file-lines"></i> About this Model Family</h2>
    <div class="model-description-body">
      ${descriptionHtml}
    </div>
  `;

  document.getElementById('detail-modal').classList.add('active');

  const trigger = document.getElementById('iq-disclaimer-trigger');
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      // Close detail modal
      document.getElementById('detail-modal').classList.remove('active');
      // Open co-creation tips modal
      document.getElementById('co-creation-body-content').innerHTML = parseMarkdownBlocks(appState.coCreationTips);
      document.getElementById('co-creation-modal').classList.add('active');
    });
  }

  const sycophancyTrigger = document.getElementById('sycophancy-link-trigger');
  if (sycophancyTrigger) {
    sycophancyTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      // Close detail modal
      document.getElementById('detail-modal').classList.remove('active');
      // Open co-creation tips modal
      document.getElementById('co-creation-body-content').innerHTML = parseMarkdownBlocks(appState.coCreationTips);
      document.getElementById('co-creation-modal').classList.add('active');
    });
  }

  const privateModelsTrigger = document.getElementById('private-models-link-trigger');
  if (privateModelsTrigger) {
    privateModelsTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      // Close detail modal
      document.getElementById('detail-modal').classList.remove('active');
      // Open private models modal
      document.getElementById('private-models-body-content').innerHTML = parseMarkdownBlocks(appState.privateModelsGuide);
      document.getElementById('private-models-modal').classList.add('active');
    });
  }
}

// Helpers
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Modal Toggle Handlers
function initModalHandlers() {
  const detailModal = document.getElementById('detail-modal');
  const closeDetailBtn = document.getElementById('close-modal-btn');
  
  closeDetailBtn.addEventListener('click', () => {
    detailModal.classList.remove('active');
  });

  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
      detailModal.classList.remove('active');
    }
  });

  const analysisModal = document.getElementById('analysis-modal');
  const openEthicsBtn = document.getElementById('open-ethics-btn');
  const closeAnalysisBtn = document.getElementById('close-analysis-btn');

  openEthicsBtn.addEventListener('click', () => {
    document.getElementById('analysis-body-content').innerHTML = parseMarkdownBlocks(appState.ethicalAnalysis);
    analysisModal.classList.add('active');
  });

  closeAnalysisBtn.addEventListener('click', () => {
    analysisModal.classList.remove('active');
  });

  analysisModal.addEventListener('click', (e) => {
    if (e.target === analysisModal) {
      analysisModal.classList.remove('active');
    }
  });

  // Co-creation Modal
  const coCreationModal = document.getElementById('co-creation-modal');
  const openCoCreationBtn = document.getElementById('co-creation-btn');
  const closeCoCreationBtn = document.getElementById('close-co-creation-btn');

  if (openCoCreationBtn) {
    openCoCreationBtn.addEventListener('click', () => {
      document.getElementById('co-creation-body-content').innerHTML = parseMarkdownBlocks(appState.coCreationTips);
      coCreationModal.classList.add('active');
    });
  }

  if (closeCoCreationBtn) {
    closeCoCreationBtn.addEventListener('click', () => {
      coCreationModal.classList.remove('active');
    });
  }

  if (coCreationModal) {
    coCreationModal.addEventListener('click', (e) => {
      if (e.target === coCreationModal) {
        coCreationModal.classList.remove('active');
      }
    });
  }

  // Private Models Modal
  const privateModelsModal = document.getElementById('private-models-modal');
  const openPrivateModelsBtn = document.getElementById('private-models-btn');
  const closePrivateModelsBtn = document.getElementById('close-private-models-btn');

  if (openPrivateModelsBtn) {
    openPrivateModelsBtn.addEventListener('click', () => {
      document.getElementById('private-models-body-content').innerHTML = parseMarkdownBlocks(appState.privateModelsGuide);
      privateModelsModal.classList.add('active');
    });
  }

  if (closePrivateModelsBtn) {
    closePrivateModelsBtn.addEventListener('click', () => {
      privateModelsModal.classList.remove('active');
    });
  }

  if (privateModelsModal) {
    privateModelsModal.addEventListener('click', (e) => {
      if (e.target === privateModelsModal) {
        privateModelsModal.classList.remove('active');
      }
    });
  }
}

// Trend Chart Helpers and Rendering
function getModelFamily(model) {
  const id = model.id.toLowerCase();
  if (id.startsWith('claude')) return 'Claude';
  if (id.startsWith('gemini')) return 'Gemini';
  if (id.startsWith('gemma')) return 'Gemma';
  if (id.startsWith('gpt') || id.startsWith('openai')) return 'GPT';
  if (id.startsWith('grok')) return 'Grok';
  if (id.startsWith('kimi')) return 'Kimi';
  if (id.startsWith('llama')) return 'Llama';
  if (id.startsWith('glm') || id.startsWith('chatglm')) return 'GLM';
  if (id.startsWith('mistral') || id.startsWith('codestral')) return 'Mistral';
  if (id.startsWith('qwen')) return 'Qwen';
  if (id.startsWith('nemotron')) return 'Nemotron';
  if (id.startsWith('minimax')) return 'MiniMax';
  if (id.startsWith('zamba')) return 'Zamba';
  return 'Other';
}

function isOpenFamily(fam) {
  return ['Llama', 'Gemma', 'Qwen', 'Mistral', 'Nemotron', 'Zyphra', 'Zamba', 'MiniMax'].includes(fam);
}

function createSVGElement(tag, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const k in attrs) {
    el.setAttribute(k, attrs[k]);
  }
  return el;
}

let trendsInitialized = false;
function initTrendsView() {
  if (trendsInitialized) return;
  trendsInitialized = true;

  // Generate checkboxes
  const container = document.getElementById('series-checkboxes-container');
  if (!container) return;
  container.innerHTML = '';

  // Get unique families
  const families = [...new Set(appState.models.map(getModelFamily))].sort();

  families.forEach(fam => {
    const row = document.createElement('div');
    row.className = 'series-checkbox-row';
    row.setAttribute('data-family', fam);

    const famModels = appState.models.filter(m => getModelFamily(m) === fam);
    const hasLocal = famModels.some(isQualifiedPrivateModel);

    row.innerHTML = `
      <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer; user-select: none; flex: 1; margin: 0;">
        <input type="checkbox" class="family-checkbox" value="${fam}" checked style="cursor: pointer;">
        <span style="font-weight: 500;">${fam}</span>
      </label>
      ${hasLocal ? `<span class="type-indicator open" style="font-size: 0.65rem; padding: 0.1rem 0.3rem; transform: scale(0.9);">Local</span>` : ''}
    `;

    row.addEventListener('mouseenter', () => highlightFamily(fam));
    row.addEventListener('mouseleave', () => clearFamilyHighlight());

    const cb = row.querySelector('.family-checkbox');
    cb.addEventListener('change', (e) => {
      if (e.target.checked) {
        appState.disabledFamilies.delete(fam);
      } else {
        appState.disabledFamilies.add(fam);
      }
      renderTrendsChart();
    });

    container.appendChild(row);
  });

  // Y-Axis select
  const ySelect = document.getElementById('y-axis-select');
  if (ySelect) {
    ySelect.value = appState.selectedBenchmark;
    ySelect.addEventListener('change', (e) => {
      appState.selectedBenchmark = e.target.value;
      renderTrendsChart();
    });
  }

  // Trendlines toggle
  const trendToggle = document.getElementById('toggle-trendlines');
  if (trendToggle) {
    trendToggle.checked = appState.showTrendlines;
    trendToggle.addEventListener('change', (e) => {
      appState.showTrendlines = e.target.checked;
      renderTrendsChart();
    });
  }

  // Quick toggles: Toggle All
  const toggleAllBtn = document.getElementById('toggle-all-series');
  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => {
      const checkboxes = container.querySelectorAll('.family-checkbox');
      const allChecked = [...checkboxes].every(cb => cb.checked);
      
      checkboxes.forEach(cb => {
        cb.checked = !allChecked;
        const fam = cb.value;
        if (!allChecked) {
          appState.disabledFamilies.delete(fam);
        } else {
          appState.disabledFamilies.add(fam);
        }
      });
      toggleAllBtn.textContent = allChecked ? "Selecteer Alles" : "Selecteer Niets";
      renderTrendsChart();
    });
  }

  // Category quick checkboxes
  const cbCommercial = document.getElementById('filter-cb-commercial');
  const cbOpen = document.getElementById('filter-cb-open');
  const cbLocal = document.getElementById('filter-cb-local');

  const handleQuickFilters = () => {
    renderTrendsChart();
  };

  if (cbCommercial) cbCommercial.addEventListener('change', handleQuickFilters);
  if (cbOpen) cbOpen.addEventListener('change', handleQuickFilters);
  if (cbLocal) cbLocal.addEventListener('change', handleQuickFilters);
}

function renderTrendsChart() {
  const svg = document.getElementById('trends-svg');
  const tooltip = document.getElementById('chart-tooltip');
  if (!svg) return;

  svg.innerHTML = '';

  const yField = appState.selectedBenchmark;
  const minTime = new Date('2024-01-01').getTime();
  const maxTime = new Date('2026-06-30').getTime();
  const timeRange = maxTime - minTime;

  const width = 900;
  const height = 520;
  const leftPadding = 65;
  const rightPadding = 40;
  const topPadding = 40;
  const bottomPadding = 60;
  const plotWidth = width - leftPadding - rightPadding;
  const plotHeight = height - topPadding - bottomPadding;

  // Draw Horizontal Gridlines (Percentages)
  const gridLevels = [0, 20, 40, 60, 80, 100];
  gridLevels.forEach(lvl => {
    const y = topPadding + plotHeight * (1 - lvl / 100);
    // Grid Line
    svg.appendChild(createSVGElement('line', {
      x1: leftPadding,
      y1: y,
      x2: width - rightPadding,
      y2: y,
      class: 'grid-line'
    }));
    // Label
    const label = createSVGElement('text', {
      x: leftPadding - 10,
      y: y + 4,
      class: 'axis-label',
      'text-anchor': 'end'
    });
    label.textContent = `${lvl}%`;
    svg.appendChild(label);
  });

  // Draw Vertical Gridlines (Quarters & Midpoints)
  const divisions = [
    { label: 'H1 2024', labelTime: new Date('2024-04-01').getTime(), lineTime: new Date('2024-07-01').getTime() },
    { label: 'H2 2024', labelTime: new Date('2024-10-01').getTime(), lineTime: new Date('2025-01-01').getTime() },
    { label: 'H1 2025', labelTime: new Date('2025-04-01').getTime(), lineTime: new Date('2025-07-01').getTime() },
    { label: 'H2 2025', labelTime: new Date('2025-10-01').getTime(), lineTime: new Date('2026-01-01').getTime() },
    { label: 'H1 2026', labelTime: new Date('2026-04-01').getTime(), lineTime: null }
  ];

  divisions.forEach(div => {
    // Label Quarter
    const labelX = leftPadding + plotWidth * ((div.labelTime - minTime) / timeRange);
    const labelText = createSVGElement('text', {
      x: labelX,
      y: height - bottomPadding + 22,
      class: 'axis-label',
      'text-anchor': 'middle'
    });
    labelText.textContent = div.label;
    svg.appendChild(labelText);

    // Quarter Boundary Line
    if (div.lineTime) {
      const lineX = leftPadding + plotWidth * ((div.lineTime - minTime) / timeRange);
      svg.appendChild(createSVGElement('line', {
        x1: lineX,
        y1: topPadding,
        x2: lineX,
        y2: height - bottomPadding,
        class: 'grid-line'
      }));
    }
  });

  // Draw Axes lines
  svg.appendChild(createSVGElement('line', {
    x1: leftPadding,
    y1: topPadding,
    x2: leftPadding,
    y2: height - bottomPadding,
    class: 'axis-line'
  }));
  svg.appendChild(createSVGElement('line', {
    x1: leftPadding,
    y1: height - bottomPadding,
    x2: width - rightPadding,
    y2: height - bottomPadding,
    class: 'axis-line'
  }));

  // Axis Y-Title
  const yTitle = createSVGElement('text', {
    x: 18,
    y: topPadding + plotHeight / 2,
    class: 'axis-title',
    'text-anchor': 'middle',
    transform: `rotate(-90 18 ${topPadding + plotHeight / 2})`
  });
  yTitle.textContent = yField === 'mmlu' ? 'MMLU Score (Algemeen %)' : (yField === 'gpqa' ? 'GPQA Score (Wetenschappelijke logica %)' : 'SWE-bench Score (Coding %)');
  svg.appendChild(yTitle);

  // Axis X-Title
  const xTitle = createSVGElement('text', {
    x: leftPadding + plotWidth / 2,
    y: height - 12,
    class: 'axis-title',
    'text-anchor': 'middle'
  });
  xTitle.textContent = 'Model Release Tijdlijn (2024 - 2026)';
  svg.appendChild(xTitle);

  // Filter models
  const showCommercial = document.getElementById('filter-cb-commercial')?.checked ?? true;
  const showOpen = document.getElementById('filter-cb-open')?.checked ?? true;
  const showLocal = document.getElementById('filter-cb-local')?.checked ?? true;

  const displayModels = appState.models.filter(m => {
    const isComm = m.access.toLowerCase() === 'commercial';
    const isLocal = isQualifiedPrivateModel(m);
    const isOpen = m.access.toLowerCase() === 'open weights' && !isLocal;
    
    if (isComm && !showCommercial) return false;
    if (isOpen && !showOpen) return false;
    if (isLocal && !showLocal) return false;

    const fam = getModelFamily(m);
    if (appState.disabledFamilies.has(fam)) return false;
    if (m.benchmarks[yField] === undefined || m.benchmarks[yField] === null) return false;

    return true;
  });

  // Group by family to draw lines
  const familyGroups = {};
  displayModels.forEach(m => {
    const fam = getModelFamily(m);
    familyGroups[fam] = familyGroups[fam] || [];
    familyGroups[fam].push(m);
  });

  // Draw family connecting lines
  for (const fam in familyGroups) {
    const group = familyGroups[fam];
    if (group.length < 2) continue;
    group.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

    let pathD = '';
    group.forEach((m, idx) => {
      const time = new Date(m.release_date).getTime();
      const x = leftPadding + plotWidth * ((time - minTime) / timeRange);
      const y = topPadding + plotHeight * (1 - m.benchmarks[yField] / 100);
      pathD += (idx === 0 ? 'M' : 'L') + ` ${x} ${y}`;
    });

    const isOp = isOpenFamily(fam);
    svg.appendChild(createSVGElement('path', {
      d: pathD,
      class: `chart-line family-${fam.toLowerCase()}`,
      fill: 'none',
      stroke: isOp ? 'var(--color-open)' : 'var(--color-commercial)',
      'data-family': fam
    }));
  }

  // Draw Category Averages (Trendlines)
  if (appState.showTrendlines) {
    const halfYears = [
      { start: '2024-01-01', end: '2024-06-30', mid: '2024-04-01' },
      { start: '2024-07-01', end: '2024-12-31', mid: '2024-10-01' },
      { start: '2025-01-01', end: '2025-06-30', mid: '2025-04-01' },
      { start: '2025-07-01', end: '2025-12-31', mid: '2025-10-01' },
      { start: '2026-01-01', end: '2026-06-30', mid: '2026-04-01' }
    ];

    const commPathData = [];
    const openPathData = [];

    halfYears.forEach(hy => {
      const startTime = new Date(hy.start).getTime();
      const endTime = new Date(hy.end).getTime();
      const midTimeVal = new Date(hy.mid).getTime();

      const periodModels = appState.models.filter(m => {
        const t = new Date(m.release_date).getTime();
        return t >= startTime && t <= endTime && m.benchmarks[yField] !== undefined;
      });

      const comms = periodModels.filter(m => m.access.toLowerCase() === 'commercial');
      const opens = periodModels.filter(m => m.access.toLowerCase() === 'open weights');

      const commAvg = comms.length ? comms.reduce((sum, m) => sum + m.benchmarks[yField], 0) / comms.length : null;
      const openAvg = opens.length ? opens.reduce((sum, m) => sum + m.benchmarks[yField], 0) / opens.length : null;

      const x = leftPadding + plotWidth * ((midTimeVal - minTime) / timeRange);

      if (commAvg !== null) {
        const y = topPadding + plotHeight * (1 - commAvg / 100);
        commPathData.push({ x, y });
      }
      if (openAvg !== null) {
        const y = topPadding + plotHeight * (1 - openAvg / 100);
        openPathData.push({ x, y });
      }
    });

    if (commPathData.length > 1) {
      const dStr = commPathData.map((p, idx) => (idx === 0 ? 'M' : 'L') + ` ${p.x} ${p.y}`).join(' ');
      svg.appendChild(createSVGElement('path', {
        d: dStr,
        class: 'trendline commercial',
        fill: 'none'
      }));
    }
    if (openPathData.length > 1) {
      const dStr = openPathData.map((p, idx) => (idx === 0 ? 'M' : 'L') + ` ${p.x} ${p.y}`).join(' ');
      svg.appendChild(createSVGElement('path', {
        d: dStr,
        class: 'trendline open',
        fill: 'none'
      }));
    }
  }

  // Draw Model Nodes (Circles)
  displayModels.forEach(m => {
    const time = new Date(m.release_date).getTime();
    const x = leftPadding + plotWidth * ((time - minTime) / timeRange);
    const score = m.benchmarks[yField];
    const y = topPadding + plotHeight * (1 - score / 100);

    const isComm = m.access.toLowerCase() === 'commercial';
    const isLocal = isQualifiedPrivateModel(m);
    const nodeClass = isComm ? 'commercial' : (isLocal ? 'local' : 'open');
    const fam = getModelFamily(m);

    const node = createSVGElement('circle', {
      cx: x,
      cy: y,
      r: 6,
      class: `chart-node ${nodeClass}`,
      'data-family': fam
    });

    node.addEventListener('mouseenter', () => {
      // Don't trigger hover details if a modal is already open
      if (document.querySelector('.modal-overlay.active')) return;

      // Show tooltip
      tooltip.style.opacity = 1;
      tooltip.innerHTML = `
        <div style="font-weight: 700; color: white; margin-bottom: 0.25rem;">${m.name}</div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.4rem;">by ${m.developer} (${m.class})</div>
        <div style="display: flex; justify-content: space-between; gap: 1rem; border-top: 1px dashed var(--glass-border); padding-top: 0.4rem;">
          <span style="color: var(--text-secondary);">Score:</span>
          <strong style="color: var(--color-open);">${score}%</strong>
        </div>
        <div style="display: flex; justify-content: space-between; gap: 1rem; font-size: 0.75rem; margin-top: 0.2rem;">
          <span style="color: var(--text-secondary);">Released:</span>
          <span>${formatDate(m.release_date)}</span>
        </div>
      `;
      // Center tooltip over node
      tooltip.style.left = (x - tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = (y - tooltip.offsetHeight - 15) + 'px';

      highlightFamily(fam);
    });

    node.addEventListener('mouseleave', () => {
      tooltip.style.opacity = 0;
      clearFamilyHighlight();
    });

    node.addEventListener('click', () => {
      tooltip.style.opacity = 0;
      openDetailModal(m.id);
    });

    svg.appendChild(node);
  });
}

function highlightFamily(famName) {
  if (document.querySelector('.modal-overlay.active')) return;

  // Dim other paths and nodes
  const paths = document.querySelectorAll('.chart-line');
  paths.forEach(p => {
    const match = p.getAttribute('data-family') === famName;
    p.style.opacity = match ? '0.85' : '0.04';
    if (match) p.classList.add('active');
  });

  const nodes = document.querySelectorAll('.chart-node');
  nodes.forEach(n => {
    const match = n.getAttribute('data-family') === famName;
    n.style.opacity = match ? '1' : '0.15';
    if (match) n.classList.add('active');
  });

  // Dim trendlines
  const trendlines = document.querySelectorAll('.trendline');
  trendlines.forEach(t => t.style.opacity = '0.08');

  // Highlight corresponding checkbox row
  const row = document.querySelector(`.series-checkbox-row[data-family="${famName}"]`);
  if (row) row.classList.add('hovered');
}

function clearFamilyHighlight() {
  // Restore all opacities
  const paths = document.querySelectorAll('.chart-line');
  paths.forEach(p => {
    p.style.opacity = '';
    p.classList.remove('active');
  });

  const nodes = document.querySelectorAll('.chart-node');
  nodes.forEach(n => {
    n.style.opacity = '';
    n.classList.remove('active');
  });

  const trendlines = document.querySelectorAll('.trendline');
  trendlines.forEach(t => t.style.opacity = '');

  const row = document.querySelector(`.series-checkbox-row.hovered`);
  if (row) row.classList.remove('hovered');
}

function initViewSwitcher() {
  const tabGrid = document.getElementById('tab-grid');
  const tabTrends = document.getElementById('tab-trends');
  const gridView = document.getElementById('grid-view');
  const trendsView = document.getElementById('trends-view');

  if (tabGrid && tabTrends && gridView && trendsView) {
    tabGrid.addEventListener('click', () => {
      tabGrid.classList.add('active');
      tabTrends.classList.remove('active');
      gridView.style.display = 'block';
      trendsView.style.display = 'none';
      appState.activeView = 'grid';
    });

    tabTrends.addEventListener('click', () => {
      tabTrends.classList.add('active');
      tabGrid.classList.remove('active');
      gridView.style.display = 'none';
      trendsView.style.display = 'block';
      appState.activeView = 'trends';
      initTrendsView();
      renderTrendsChart();
    });
  }
}

// Controls Events Handlers
function initControls() {
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    appState.searchQuery = e.target.value;
    renderApp();
  });

  // Filter buttons
  const filterAll = document.getElementById('filter-all');
  const filterCommercial = document.getElementById('filter-commercial');
  const filterOpen = document.getElementById('filter-open');
  const buttons = [filterAll, filterCommercial, filterOpen];

  filterAll.addEventListener('click', () => setActiveFilter('all', filterAll, buttons));
  filterCommercial.addEventListener('click', () => setActiveFilter('commercial', filterCommercial, buttons));
  filterOpen.addEventListener('click', () => setActiveFilter('open', filterOpen, buttons));

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  sortSelect.addEventListener('change', (e) => {
    appState.activeSort = e.target.value;
    renderApp();
  });
}

function setActiveFilter(filterName, activeButton, buttons) {
  buttons.forEach(btn => btn.classList.remove('active'));
  activeButton.classList.add('active');
  appState.activeFilter = filterName;
  renderApp();
}

// App Initialization
function init() {
  loadData();
  initModalHandlers();
  initControls();
  initViewSwitcher();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

