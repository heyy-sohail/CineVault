
 * Build a single card element for a given item.
 * @param {Object} item  - One entry from data.js
 * @returns {HTMLElement}
 */
function buildCard(item) {
  const card = document.createElement('article');
  card.className = 'card';

  card.innerHTML = `
    <div class="poster-wrap">
      <img
        src="${item.img}"
        alt="${item.title} poster"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="poster-fallback">🎬</div>
      <span class="rank-badge" aria-label="Rank ${item.rank}">${item.rank}</span>
      <div class="hover-overlay" aria-hidden="true">
        <p class="overlay-title">${item.title}</p>
        <p class="overlay-desc">${item.desc}</p>
        <p class="overlay-meta">${item.year} &nbsp;·&nbsp; ⭐ ${item.rating}</p>
      </div>
    </div>
    <div class="card-info">
      <p class="card-title" title="${item.title}">${item.title}</p>
      <p class="card-meta">
        <span class="card-rating">⭐ ${item.rating}</span>
        &nbsp;${item.year}
      </p>
    </div>
  `;

  return card;
}

/**
 * Render an array of items into a grid container.
 * @param {string}   gridId  - The id of the grid element
 * @param {Object[]} items   - Array of movie/show/anime objects
 */
function renderGrid(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  items.forEach(item => fragment.appendChild(buildCard(item)));
  grid.appendChild(fragment);
}

/**
 * Switch the visible tab section.
 * @param {number} index  - 0 = Movies, 1 = TV Shows, 2 = Anime
 */
function switchTab(index) {
  const sections = ['sec-movies', 'sec-tv', 'sec-anime'];
  const buttons  = document.querySelectorAll('.tab-btn');

  sections.forEach((id, i) => {
    const section = document.getElementById(id);
    if (i === index) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });

  buttons.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
    btn.setAttribute('aria-selected', i === index ? 'true' : 'false');
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderGrid('grid-movies', movies);
  renderGrid('grid-tv',     tvShows);
  renderGrid('grid-anime',  anime);
});
