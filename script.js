// Simple client-side search across a static index — no framework, no external calls.
// SEARCH_INDEX is defined per-page-load from search-index.js

(function () {
  const input = document.getElementById('site-search-input');
  const resultsBox = document.getElementById('search-results');
  if (!input || !resultsBox || typeof SEARCH_INDEX === 'undefined') return;

  function render(items) {
    if (!items.length) {
      resultsBox.innerHTML = '';
      return;
    }
    const list = items.slice(0, 8).map(item => `
      <li>
        <a href="${item.url}">${item.title}</a>
        <span class="snippet">${item.snippet}</span>
      </li>
    `).join('');
    resultsBox.innerHTML = `<ul>${list}</ul>`;
  }

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { render([]); return; }
    const matches = SEARCH_INDEX.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    );
    render(matches);
  });
})();
