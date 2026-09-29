const grid = document.getElementById('project-grid');
const dialog = document.getElementById('project-dialog');
const detail = document.getElementById('project-detail');
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderProjects() {
  grid.innerHTML = projects.map((p, i) => `<button class="project-card" data-index="${i}" aria-label="View ${escapeHtml(p.title)} project"><div class="project-image"><img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.imageAlt)}" loading="lazy"><span class="project-view">VIEW PROJECT ↗</span></div><div class="project-meta"><span>${escapeHtml(p.category)}</span><span>${escapeHtml(p.year)}</span></div><div class="project-heading"><h3>${escapeHtml(p.title)}</h3><span>↗</span></div><p>${escapeHtml(p.subtitle)}</p></button>`).join('');
  grid.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => openProject(Number(card.dataset.index))));
}
function openProject(index) {
  const p = projects[index];
  detail.innerHTML = `<div class="detail-cover"><img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.imageAlt)}"></div><div class="detail-body"><p class="eyebrow">${escapeHtml(p.category)} / ${escapeHtml(p.year)}</p><h2>${escapeHtml(p.title)}</h2><p class="detail-subtitle">${escapeHtml(p.subtitle)}</p><div class="detail-columns"><div><h3>OVERVIEW</h3><p>${escapeHtml(p.description)}</p></div><div><h3>ROLE</h3><p>${escapeHtml(p.role)}</p><h3>TOOLS</h3><p>${escapeHtml(p.tools)}</p></div></div><h3>KEY HIGHLIGHTS</h3><ul>${p.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}</ul>${p.gallery?.length ? `<div class="detail-gallery">${p.gallery.map(img => `<img src="${escapeHtml(img)}" alt="Project gallery image" loading="lazy">`).join('')}</div>` : '<p class="gallery-note">Add process images, CAD renders and test photos to this project in projects.js.</p>'}</div>`;
  dialog.showModal(); document.body.classList.add('dialog-open');
}
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-toggle');
menuButton.addEventListener('click', () => { const open = document.querySelector('.nav').classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {document.querySelector('.nav').classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');}));
renderProjects();
