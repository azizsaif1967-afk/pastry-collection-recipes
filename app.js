// ===== State =====
let activeCategory = 'all';
let searchQuery = '';

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderRecipes();
  document.getElementById('recipeCount').textContent = recipes.length;
});

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
