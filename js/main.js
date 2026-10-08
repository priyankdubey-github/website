/* =========================================================
   Page behaviour: view switching, mobile menu, rendering of
   news and publications, generated cover art, year navigation.
   ========================================================= */
(function () {
  "use strict";
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- bubble cover (stand-in for a paper figure) ---------- */
  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    return function () {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function bubbleCover(key) {
    const r = rng(hash(key));
    const hue = Math.floor(r() * 360);
    let s = `<svg viewBox="0 0 300 200" role="img" aria-label="Generated cover pattern">`;
    s += `<rect width="300" height="200" fill="hsl(${hue},55%,92%)"/>`;
    const n = 7 + Math.floor(r() * 6);
    for (let i = 0; i < n; i++) {
      const h = (hue + Math.floor(r() * 120) - 60 + 360) % 360;
      s += `<circle cx="${(r() * 300).toFixed(1)}" cy="${(r() * 200).toFixed(1)}" r="${(12 + r() * 60).toFixed(1)}" fill="hsl(${h},${55 + Math.floor(r() * 30)}%,${50 + Math.floor(r() * 25)}%)" fill-opacity="${(0.35 + r() * 0.45).toFixed(2)}"/>`;
    }
    return s + "</svg>";
  }

  /* ---------- rendering ---------- */
  function authorList(names) {
    return names.map((name) => {
      const info = window.AUTHORS[name] || {};
      const label = info.me ? `<strong>${name}</strong>` : name;
      return info.url ? `<a href="${info.url}" target="_blank" rel="noopener">${label}</a>` : label;
    }).join(", ");
  }

  function pubItem(p) {
    const cover = p.cover ? `<img src="${p.cover}" alt="">` : bubbleCover(p.title);
    const badge = p.badge ? ` <span class="badge badge-${p.badge.kind}">${p.badge.text}</span>` : "";
    const links = p.links ? Object.entries(p.links).map(([k, v]) => `<a href="${v}" target="_blank" rel="noopener">[${k}]</a>`).join("") : "";
    return `<article class="pub">
      <div class="cover">${cover}</div>
      <div class="info">
        <h5>${p.title}</h5>
        <p class="authors">${authorList(p.authors)}</p>
        <p><i>${p.venue}</i>${p.venueNote || ""}${badge}</p>
        <p class="abstract">${p.abstract || ""}</p>
        ${links ? `<p class="links">${links}</p>` : ""}
      </div>
    </article>`;
  }

  function renderNews() {
    const byYear = {};
    window.NEWS.forEach((n) => { (byYear[n.date.slice(0, 4)] ||= []).push(n); });
    $("#news-list").innerHTML = Object.keys(byYear).sort().reverse().map((y) => `
      <div class="news-year">
        <div class="year">${y}</div>
        <div class="items">${byYear[y].map((n) => `
          <div class="news-item"><div>${n.text}</div><div class="when">${MONTHS[+n.date.slice(5, 7) - 1]}</div></div>`).join("")}
        </div>
      </div>`).join("");
  }

  function renderSelected() {
    $("#selected-pubs").innerHTML = window.PUBLICATIONS.filter((p) => p.selected).map(pubItem).join("");
  }

  function renderAllPubs() {
    const years = [...new Set(window.PUBLICATIONS.map((p) => p.year))].sort((a, b) => b - a);
    $("#pubs-by-year").innerHTML = years.map((y) => `
      <h2 id="year-${y}">${y}</h2>
      <div class="card list-card">${window.PUBLICATIONS.filter((p) => p.year === y).map(pubItem).join("")}</div>`).join("");
    const nav = $("#year-nav");
    nav.innerHTML = years.map((y) => `<button type="button" data-year="${y}">${y}</button>`).join("");
    nav.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      $("#year-" + b.dataset.year).scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  }

  // highlight the year currently in view (scrollspy)
  function updateYearNav() {
    if ($("#view-publications").hidden) return;
    let current = null;
    $$("#pubs-by-year h2").forEach((h) => { if (h.getBoundingClientRect().top < 120) current = h.id.slice(5); });
    if (!current) { const first = $("#pubs-by-year h2"); current = first && first.id.slice(5); }
    $$("#year-nav button").forEach((b) => b.classList.toggle("active", b.dataset.year === current));
  }

  /* ---------- views ---------- */
  const VIEWS = { "": "home", home: "home", publications: "publications" };
  const TITLES = { home: "Homepage", publications: "Publications" };
  function showView() {
    // Research page is hidden; old #research links fall back to home
    const name = VIEWS[location.hash.slice(1)] || "home";
    $$(".view").forEach((v) => { v.hidden = v.id !== "view-" + name; });
    $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.dataset.view === name));
    document.title = `${TITLES[name]} - Priyank Dubey`;
    $(".navbar").classList.remove("open");
    $(".nav-toggle").setAttribute("aria-expanded", "false");
    window.scrollTo(0, 0);
    updateYearNav();
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderNews();
    renderSelected();
    renderAllPubs();

    $(".nav-toggle").addEventListener("click", () => {
      const open = $(".navbar").classList.toggle("open");
      $(".nav-toggle").setAttribute("aria-expanded", String(open));
    });

    window.addEventListener("hashchange", showView);
    window.addEventListener("scroll", updateYearNav, { passive: true });
    showView();

    const d = new Date(document.lastModified);
    $("#last-updated").textContent = `Last updated: ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  });
})();
