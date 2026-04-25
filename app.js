// ===== State =====
let activeCategory = 'all';
let searchQuery = '';

// Optional: paste a Formspree / Web3Forms / Formsubmit endpoint here to receive leads by email.
// Leave '' to skip remote submission — leads will still be stored in localStorage as 'pastry_leads'.
const LEAD_ENDPOINT = '';

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  syncStats();
  renderFeatured();
  renderCategories();
  renderRecipes();
  populateCountryList();
  handleDeepLink();
});

// Sync counts in the hero from the recipes data (single source of truth).
function syncStats() {
  document.getElementById('recipeCount').textContent = recipes.length;
  // categories minus the synthetic "All"
  document.getElementById('categoryCount').textContent = getCategories().length - 1;
  const leadCount = document.getElementById('leadRecipeCount');
  if (leadCount) leadCount.textContent = recipes.length;
}

function renderFeatured() {
  const featured = recipes[0];
  if (!featured) return;
  const img = document.getElementById('heroFeaturedImg');
  const name = document.getElementById('heroFeaturedName');
  const meta = document.getElementById('heroFeaturedMeta');
  if (img) { img.src = featured.image; img.alt = featured.name; }
  if (name) name.textContent = featured.name;
  if (meta) meta.textContent = `${featured.prepTime} prep \u00b7 ${featured.servings} servings`;
}

function openFeatured() {
  if (recipes[0]) openRecipe(recipes[0].id);
}

// If URL has ?recipe=<id>, open that recipe directly (used by share links).
function handleDeepLink() {
  const id = new URLSearchParams(window.location.search).get('recipe');
  if (id && recipes.some(r => r.id === id)) {
    // Defer slightly so renderRecipes finishes first.
    setTimeout(() => openRecipe(id), 50);
  }
}

// ===== Categories =====
function getCategories() {
  const cats = new Set(recipes.map(r => r.category));
  return ['All', ...Array.from(cats).sort()];
}

function renderCategories() {
  const container = document.getElementById('categoryFilters');
  const categories = getCategories();
  container.innerHTML = categories.map(cat => `
    <button class="category-btn ${cat.toLowerCase() === activeCategory ? 'active' : ''}"
            onclick="showCategory('${cat.toLowerCase()}')">${cat}</button>
  `).join('');
}

function showCategory(cat) {
  activeCategory = cat.toLowerCase();
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  renderCategories();
  renderRecipes();
  scrollToRecipes();
}

// ===== Search =====
function handleSearch(query) {
  searchQuery = query.toLowerCase().trim();
  activeCategory = 'all';
  renderCategories();
  renderRecipes();
}

// ===== Render Recipes =====
function renderRecipes() {
  const grid = document.getElementById('recipeGrid');
  const countEl = document.getElementById('resultCount');

  let filtered = recipes;

  if (activeCategory !== 'all') {
    filtered = filtered.filter(r => r.category.toLowerCase() === activeCategory);
  }

  if (searchQuery) {
    filtered = filtered.filter(r =>
      r.name.toLowerCase().includes(searchQuery) ||
      r.description.toLowerCase().includes(searchQuery) ||
      r.category.toLowerCase().includes(searchQuery)
    );
  }

  countEl.textContent = filtered.length === recipes.length
    ? `Showing all ${recipes.length} recipes`
    : `Showing ${filtered.length} of ${recipes.length} recipes`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <h3>No recipes found</h3>
        <p>Try a different search term or category</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(recipe => `
    <article class="recipe-card" onclick="openRecipe('${recipe.id}')">
      <div class="recipe-card-image">
        <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
        <span class="recipe-card-badge">${recipe.category}</span>
        <span class="recipe-card-difficulty difficulty-${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
        <button class="recipe-card-share" title="Share this recipe" aria-label="Share ${recipe.name.replace(/"/g,'&quot;')}" onclick="event.stopPropagation(); shareRecipe('${recipe.id}')">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </button>
      </div>
      <div class="recipe-card-body">
        <h3 class="recipe-card-title">${recipe.name}</h3>
        <p class="recipe-card-desc">${recipe.description}</p>
        <div class="recipe-card-meta">
          <span class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${recipe.prepTime}
          </span>
          <span class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/></svg>
            ${recipe.cookTime}
          </span>
          <span class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            ${recipe.servings} servings
          </span>
        </div>
      </div>
    </article>
  `).join('');
}

// ===== Recipe Modal =====
function openRecipe(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;

  const modal = document.getElementById('recipeModal');
  const content = document.getElementById('modalContent');

  // Build ingredients HTML
  let ingredientsHTML = '';
  for (const [group, items] of Object.entries(recipe.ingredients)) {
    if (Object.keys(recipe.ingredients).length > 1) {
      ingredientsHTML += `<div class="ingredient-group-title">${group}</div>`;
    }
    ingredientsHTML += `<ul class="ingredient-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  }

  // Build tips HTML
  let tipsHTML = '';
  if (recipe.tips && recipe.tips.length) {
    tipsHTML = `
      <div class="modal-section">
        <h3 class="modal-section-title">Tips & Notes</h3>
        <ul class="tips-list">${recipe.tips.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>`;
  }

  content.innerHTML = `
    <button class="modal-close" onclick="closeRecipe()">&times;</button>
    <button class="modal-share" title="Share this recipe" aria-label="Share recipe" onclick="shareRecipe('${recipe.id}')">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
    </button>
    <div class="modal-hero">
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="modal-hero-overlay">
        <span class="modal-category">${recipe.category}</span>
        <h1 class="modal-title">${recipe.name}</h1>
        <p class="modal-desc">${recipe.description}</p>
      </div>
    </div>
    <div class="modal-meta-bar">
      <div class="modal-meta-item">
        <span class="modal-meta-value">${recipe.prepTime}</span>
        <span class="modal-meta-label">Prep Time</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-value">${recipe.cookTime}</span>
        <span class="modal-meta-label">Cook Time</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-value">${recipe.totalTime}</span>
        <span class="modal-meta-label">Total Time</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-value">${recipe.servings}</span>
        <span class="modal-meta-label">Servings</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-value">${recipe.difficulty}</span>
        <span class="modal-meta-label">Difficulty</span>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-section">
        <h3 class="modal-section-title">Ingredients</h3>
        ${ingredientsHTML}
      </div>
      <div class="modal-section">
        <h3 class="modal-section-title">Instructions</h3>
        <ol class="instruction-list">
          ${recipe.instructions.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </div>
      ${tipsHTML}
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeRecipe() {
  document.getElementById('recipeModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeRecipe();
});

// ===== Navigation =====
function showHome() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  activeCategory = 'all';
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  renderCategories();
  renderRecipes();
}

function scrollToRecipes() {
  document.getElementById('recipes').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleMobileMenu() {
  // Simple toggle for mobile
  const links = document.querySelector('.nav-links');
  const search = document.querySelector('.nav-search');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
    search.style.display = 'none';
  } else {
    links.style.display = 'flex';
    links.style.position = 'absolute';
    links.style.top = '72px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'var(--bg)';
    links.style.padding = '20px';
    links.style.flexDirection = 'column';
    links.style.borderBottom = '1px solid var(--border)';
    search.style.display = 'block';
    search.style.position = 'absolute';
    search.style.top = '180px';
    search.style.left = '20px';
    search.style.right = '20px';
    search.style.width = 'auto';
  }
}

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollY = window.scrollY;
  if (scrollY > 100) {
    navbar.style.boxShadow = 'var(--shadow-sm)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  lastScroll = scrollY;
});

// ===== Share =====
function shareUrlFor(id) {
  const u = new URL(window.location.href);
  u.search = '';
  u.hash = '';
  u.searchParams.set('recipe', id);
  return u.toString();
}

async function shareSite() {
  const u = new URL(window.location.href);
  u.search = '';
  u.hash = '';
  const url = u.toString();
  const shareData = {
    title: 'The Pastry Collection',
    text: `Discover ${recipes.length}+ baking recipes at The Pastry Collection.`,
    url
  };
  try {
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData);
      return;
    }
  } catch (err) {
    if (err && err.name === 'AbortError') return;
  }
  try {
    await navigator.clipboard.writeText(url);
    showToast('Link copied to clipboard');
  } catch {
    window.prompt('Copy this link:', url);
  }
}

async function shareRecipe(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;
  const url = shareUrlFor(id);
  const shareData = {
    title: `${recipe.name} | The Pastry Collection`,
    text: recipe.description,
    url
  };
  try {
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData);
      return;
    }
  } catch (err) {
    if (err && err.name === 'AbortError') return;
  }
  try {
    await navigator.clipboard.writeText(url);
    showToast('Link copied to clipboard');
  } catch {
    window.prompt('Copy this link:', url);
  }
}

// ===== Toast =====
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

// ===== Lead form / CSV download =====
const COUNTRIES = [
  'United Arab Emirates','Saudi Arabia','Qatar','Kuwait','Bahrain','Oman','Egypt','Jordan',
  'Lebanon','Morocco','Tunisia','India','Pakistan','Bangladesh','Sri Lanka','United States',
  'United Kingdom','Canada','Australia','Germany','France','Italy','Spain','Netherlands',
  'Turkey','Singapore','Malaysia','Indonesia','Philippines','Japan','China','South Africa','Other'
];

function populateCountryList() {
  const list = document.getElementById('countryList');
  if (!list) return;
  list.innerHTML = COUNTRIES.map(c => `<option value="${c}"></option>`).join('');
}

function openLeadForm() {
  const modal = document.getElementById('leadModal');
  if (!modal) return;
  document.getElementById('leadError').hidden = true;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('leadName')?.focus(), 50);
}

function closeLeadForm() {
  const modal = document.getElementById('leadModal');
  if (!modal) return;
  modal.classList.remove('open');
  if (!document.getElementById('recipeModal').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function showLeadError(msg) {
  const el = document.getElementById('leadError');
  el.textContent = msg;
  el.hidden = false;
}

async function submitLeadForm(event) {
  event.preventDefault();
  const name = document.getElementById('leadName').value.trim();
  const email = document.getElementById('leadEmail').value.trim();
  const country = document.getElementById('leadCountry').value.trim();
  const mobile = document.getElementById('leadMobile').value.trim();

  if (!name || !email || !country || !mobile) {
    showLeadError('Please fill in every field.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showLeadError('Please enter a valid email address.');
    return;
  }
  if (!/^[+\d][\d\s\-()]{6,}$/.test(mobile)) {
    showLeadError('Please enter a valid mobile number.');
    return;
  }

  const lead = {
    name, email, country, mobile,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    referrer: document.referrer || ''
  };

  // Always store locally so a record exists even if the remote endpoint isn't configured.
  try {
    const existing = JSON.parse(localStorage.getItem('pastry_leads') || '[]');
    existing.push(lead);
    localStorage.setItem('pastry_leads', JSON.stringify(existing));
  } catch {}

  const submitBtn = document.getElementById('leadSubmit');
  const submitText = document.getElementById('leadSubmitText');
  submitBtn.disabled = true;
  submitText.textContent = 'Preparing download…';

  // Best-effort remote submission. Failures don't block the download.
  if (LEAD_ENDPOINT) {
    try {
      await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...lead, subject: 'New CSV download — The Pastry Collection' })
      });
    } catch {}
  }

  downloadRecipesCSV();
  showToast('Thanks! Your CSV is downloading.');
  closeLeadForm();
  document.getElementById('leadForm').reset();
  submitBtn.disabled = false;
  submitText.textContent = 'Download CSV';
}

function csvEscape(value) {
  if (value === null || value === undefined) return '';
  const s = String(value);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function flattenIngredients(ingredients) {
  if (!ingredients) return '';
  return Object.entries(ingredients)
    .map(([group, items]) => {
      const arr = Array.isArray(items) ? items : [];
      const prefix = Object.keys(ingredients).length > 1 ? `${group}: ` : '';
      return prefix + arr.join(' | ');
    })
    .join(' \u2014 ');
}

function buildRecipesCSV() {
  const headers = [
    'id','name','category','description','prepTime','cookTime','totalTime',
    'servings','difficulty','ingredients','instructions','tips','image','shareUrl'
  ];
  const rows = recipes.map(r => [
    r.id,
    r.name,
    r.category,
    r.description,
    r.prepTime,
    r.cookTime,
    r.totalTime,
    r.servings,
    r.difficulty,
    flattenIngredients(r.ingredients),
    Array.isArray(r.instructions) ? r.instructions.join(' | ') : '',
    Array.isArray(r.tips) ? r.tips.join(' | ') : '',
    r.image,
    shareUrlFor(r.id)
  ].map(csvEscape).join(','));
  return '\uFEFF' + headers.join(',') + '\n' + rows.join('\n');
}

function downloadRecipesCSV() {
  const csv = buildRecipesCSV();
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `pastry-collection-${stamp}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Close lead modal on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('leadModal')?.classList.contains('open')) closeLeadForm();
  }
});
