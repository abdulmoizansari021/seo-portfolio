// Portfolio interactions: parallax, card tilt, scroll reveal, verified-metric counters,
// filter transitions and the evidence lightbox. Every effect is skipped under reduced motion.
(() => {
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const fine = matchMedia("(hover: hover) and (pointer: fine)");
  const motion = () => !reduce.matches;

  document.querySelectorAll(".hero-dark").forEach((h) => {
    let raf = 0;
    h.addEventListener("pointermove", (e) => {
      if (!motion() || !fine.matches) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = h.getBoundingClientRect();
        h.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
        h.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
      });
    });
    h.addEventListener("pointerleave", () => { h.style.setProperty("--px", 0); h.style.setProperty("--py", 0); });
  });

  document.querySelectorAll(".tilt").forEach((c) => {
    c.addEventListener("pointermove", (e) => {
      if (!motion() || !fine.matches) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--ry", (((e.clientX - r.left) / r.width - 0.5) * 6).toFixed(2) + "deg");
      c.style.setProperty("--rx", (((e.clientY - r.top) / r.height - 0.5) * -6).toFixed(2) + "deg");
    });
    c.addEventListener("pointerleave", () => { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); });
  });

  // Count up only the verified figures that carry data-count; the final value is already in the HTML.
  const countUp = (el) => {
    const end = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    const fmt = (n) => pre + n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
    if (!motion()) { el.textContent = fmt(end); return; }
    const t0 = performance.now(), dur = 1300;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(end * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    e.target.querySelectorAll("[data-count]").forEach(countUp);
    io.unobserve(e.target);
  }), { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".rv").forEach((el) => io.observe(el));

  const idle = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("idle", !e.isIntersecting)));
  document.querySelectorAll(".fx").forEach((f) => idle.observe(f));
  document.addEventListener("visibilitychange", () => root.classList.toggle("paused", document.hidden));

  // Case study filters with a short fade and scale.
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll("#cards .cw")];
  const status = document.getElementById("filter-status");
  buttons.forEach((b) => b.addEventListener("click", () => {
    const f = b.dataset.filter;
    let shown = 0;
    buttons.forEach((x) => x.setAttribute("aria-pressed", x === b));
    cards.forEach((c) => {
      c.classList.add("quick", "in");
      const show = f === "All" || c.dataset.tags.split("|").includes(f);
      if (show) {
        shown++;
        c.hidden = false;
        void c.offsetWidth; // commit the hidden-to-shown change so the fade-in runs
        c.classList.remove("out");
      } else {
        c.classList.add("out");
        setTimeout(() => { if (c.classList.contains("out")) c.hidden = true; }, motion() ? 300 : 0);
      }
    });
    if (status) status.textContent = `${shown} case stud${shown === 1 ? "y" : "ies"} shown`;
  }));

  // Evidence lightbox. Links still open the full image when JavaScript is off.
  const lb = document.getElementById("lb");
  if (lb) {
    const img = lb.querySelector("img"), title = lb.querySelector("[data-lb-title]"), cap = lb.querySelector("[data-lb-cap]");
    let opener = null;
    document.querySelectorAll("[data-lb]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      opener = a;
      const fig = a.closest("figure");
      img.src = a.getAttribute("href");
      img.alt = a.querySelector("img").alt;
      title.textContent = fig.querySelector("figcaption strong").textContent;
      cap.textContent = [...fig.querySelector("figcaption").childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join(" ").trim();
      lb.showModal();
    }));
    lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
    lb.querySelector("[data-lb-close]").addEventListener("click", () => lb.close());
    lb.addEventListener("close", () => { img.removeAttribute("src"); if (opener) opener.focus(); });
  }
})();
