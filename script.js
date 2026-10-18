// Fills the page from site-config.js. You shouldn't need to edit this file.
(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const b = S.business;

  // Booking + Facebook links
  document.querySelectorAll(".js-book").forEach((a) => (a.href = b.bookingUrl || "#contact"));
  document.querySelectorAll(".js-fb").forEach((a) => (a.href = b.facebook));

  // Hero video: only attach if the file exists, otherwise keep the gradient
  const hv = $(".hero-video");
  hv.poster = S.hero.poster;
  document.querySelector(".hero").style.backgroundImage =
    `radial-gradient(circle at 20% 30%, rgba(166,77,255,.45), transparent 50%), url("${S.hero.poster}")`;
  hv.addEventListener("error", () => hv.remove(), true);
  const src = document.createElement("source");
  src.src = S.hero.video;
  src.type = "video/mp4";
  src.addEventListener("error", () => hv.remove());
  hv.appendChild(src);

  // Video grid
  const grid = $("#video-grid");
  S.videos.forEach((v) => {
    const card = document.createElement("div");
    card.className = "video-card";
    if (v.facebook) {
      const url = "https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(v.facebook) + "&show_text=false";
      card.innerHTML = `<iframe src="${esc(url)}" title="${esc(v.title)}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (v.file) {
      card.innerHTML = `<video src="${esc(v.file)}" muted loop playsinline preload="metadata"></video><div class="label">${esc(v.title)}</div>`;
      const vid = card.querySelector("video");
      // Play when on screen, pause when off
      new IntersectionObserver(([e]) => (e.isIntersecting ? vid.play().catch(() => {}) : vid.pause()), { threshold: 0.5 }).observe(vid);
    } else {
      card.classList.add("placeholder");
      card.innerHTML = `<div><div class="play">▶</div><strong>${esc(v.title)}</strong><small>Video coming soon</small></div>`;
    }
    grid.appendChild(card);
  });

  // Bikes
  $("#bike-grid").innerHTML = S.bikes.map((k) => `
    <article class="bike">
      ${k.tag ? `<span class="tag">${esc(k.tag)}</span>` : ""}
      <h3>${esc(k.name)}</h3>
      <p>${esc(k.desc)}</p>
      <ul>${k.prices.map(([t, p]) => `<li><span>${esc(t)}</span><b>${esc(p)}</b></li>`).join("")}</ul>
      <a class="btn" href="${esc(b.bookingUrl || "#contact")}">Rent this one</a>
    </article>`).join("");

  // Event services
  $("#service-grid").innerHTML = S.services.map((x) => `
    <div class="service"><span class="icon" aria-hidden="true">${esc(x.icon)}</span><b>${esc(x.name)}</b></div>`).join("");

  // Hours
  $("#hours").innerHTML = S.hours.map(([d, h]) => `<dt>${esc(d)}</dt><dd>${esc(h)}</dd>`).join("");

  // Contact
  const items = [];
  if (b.phone) {
    const digits = b.phone.replace(/[^\d+]/g, "");
    items.push(`<li>📞 <a href="tel:${digits}">${esc(b.phone)}</a></li>`, `<li>💬 <a href="sms:${digits}">Text us</a></li>`);
  }
  if (b.email) items.push(`<li>✉️ <a href="mailto:${esc(b.email)}">${esc(b.email)}</a></li>`);
  items.push(`<li>📍 ${esc(b.address)}</li>`);
  if (b.owner) items.push(`<li>👑 Owner: ${esc(b.owner)}</li>`);
  items.push(`<li>👍 <a href="${esc(b.facebook)}" target="_blank" rel="noopener">Message us on Facebook</a></li>`);
  $("#contact-list").innerHTML = items.join("");
  $("#map").src = "https://www.google.com/maps?q=" + encodeURIComponent(b.mapQuery) + "&output=embed";

  // Footer
  const socials = [["Facebook", b.facebook], ["Instagram", b.instagram], ["TikTok", b.tiktok]].filter(([, u]) => u);
  $("#socials").innerHTML = socials.map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${n}</a>`).join("");
  $("#year").textContent = new Date().getFullYear();
})();
