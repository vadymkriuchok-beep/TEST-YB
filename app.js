// Render popular brands
const popularGrid = document.getElementById("popularGrid");
POPULAR.forEach(b => {
  const el = document.createElement("article");
  el.className = "brand-card";
  el.innerHTML = `
    <div class="brand-mark" style="background:${b.color}">${b.name[0]}</div>
    <h3>${b.name}</h3>
    <span class="meta">${b.tag}</span>
    <span class="count">${b.codes} codes · ${b.used.toLocaleString()} uses</span>
  `;
  popularGrid.appendChild(el);
});

// Tabs + deal grid
const tabsEl = document.getElementById("tabs");
const dealGrid = document.getElementById("dealGrid");
const cats = Object.keys(CATEGORIES);

function renderDeals(cat) {
  dealGrid.innerHTML = "";
  CATEGORIES[cat].forEach(d => {
    const el = document.createElement("article");
    el.className = "deal-card";
    el.innerHTML = `
      <span class="deal-off">${d.off}</span>
      <h4>${d.title}</h4>
      <span class="used">${d.used.toLocaleString()} people used this</span>
      <button class="deal-btn">Copy demo code</button>
    `;
    el.querySelector(".deal-btn").addEventListener("click", e => {
      e.target.textContent = "Copied! (demo)";
      setTimeout(() => (e.target.textContent = "Copy demo code"), 1500);
    });
    dealGrid.appendChild(el);
  });
}

cats.forEach((cat, i) => {
  const t = document.createElement("button");
  t.className = "tab" + (i === 0 ? " active" : "");
  t.textContent = cat;
  t.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    renderDeals(cat);
  });
  tabsEl.appendChild(t);
});
renderDeals(cats[0]);

// FAQ
const faqEl = document.getElementById("faq");
FAQ.forEach(item => {
  const d = document.createElement("details");
  d.innerHTML = `<summary>${item.q}</summary><p>${item.a}</p>`;
  faqEl.appendChild(d);
});
