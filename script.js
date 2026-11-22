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

// Checklist: remembers checked items per visitor (localStorage), per page.
// Purely a convenience — if storage is unavailable, checkboxes still work, just don't persist.
(function () {
  const boxes = document.querySelectorAll('.checklist input[type="checkbox"]');
  if (!boxes.length) return;

  function keyFor(box) {
    return 'checklist:' + location.pathname + ':' + box.id;
  }

  boxes.forEach(box => {
    try {
      if (localStorage.getItem(keyFor(box)) === '1') {
        box.checked = true;
        box.closest('li').classList.add('checked');
      }
    } catch (e) { /* storage unavailable — ignore */ }

    box.addEventListener('change', () => {
      box.closest('li').classList.toggle('checked', box.checked);
      try {
        localStorage.setItem(keyFor(box), box.checked ? '1' : '0');
      } catch (e) { /* storage unavailable — ignore */ }
    });
  });
})();
