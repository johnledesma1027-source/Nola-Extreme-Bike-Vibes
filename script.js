// Fills the page from site-config.js. You shouldn't need to edit this file.
(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const b = S.business;

  // Booking + Facebook links
  document.querySelectorAll(".js-book").forEach((a) => (a.href = b.bookingUrl || "#contact"));
  document.querySelectorAll(".js-fb").forEach((a) => (a.href = b.facebook));

  // Hero video plays muted in the background. If it's missing, the browser
  // won't autoplay it (e.g. iPhone Low Power Mode) or the visitor prefers
  // less motion, it's removed and the poster image behind it shows instead.
  const hv = $(".hero-video");
  hv.poster = S.hero.poster;
  document.querySelector(".hero").style.backgroundImage =
    `radial-gradient(circle at 20% 30%, rgba(166,77,255,.45), transparent 50%), url("${S.hero.poster}")`;
  if (!S.hero.video || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    hv.remove();
  } else {
    hv.addEventListener("error", () => hv.remove(), true);
    const src = document.createElement("source");
    src.src = S.hero.video;
    src.type = "video/mp4";
    src.addEventListener("error", () => hv.remove());
    hv.appendChild(src);
    hv.muted = true;
    hv.play().catch(() => hv.remove());
  }

  // Video grid. Local files play right on the page when tapped, with sound
  // and the normal video controls. Facebook won't reliably play its videos
  // inside other sites, so Facebook links open the video on Facebook instead.
  const grid = $("#video-grid");
  S.videos.forEach((v, i) => {
    let card;
    if (v.file) {
      card = document.createElement("div");
      card.className = "video-card local";
      card.innerHTML = `<video src="${esc(v.file)}" playsinline preload="metadata" poster="${esc(v.poster || S.hero.poster)}"></video>
        <button class="tap" type="button"><span class="play" aria-hidden="true">▶</span><strong>${esc(v.title)}</strong><small>Tap to play</small></button>`;
      const vid = card.querySelector("video");
      card.querySelector(".tap").addEventListener("click", () => {
        vid.controls = true;
        vid.play().catch(() => {});
      });
      // Only one ride plays at a time; when one ends, its card goes back to the start.
      vid.addEventListener("play", () => {
        card.classList.add("playing");
        grid.querySelectorAll("video").forEach((o) => o !== vid && o.pause());
      });
      vid.addEventListener("ended", () => {
        card.classList.remove("playing");
        vid.controls = false;
        vid.load();
      });
    } else if (v.facebook) {
      card = document.createElement("a");
      card.className = "video-card fb";
      card.href = v.facebook;
      card.target = "_blank";
      card.rel = "noopener";
      card.style.setProperty("--pos", ["center", "20% 50%", "80% 50%", "60% 20%"][i % 4]);
      card.style.backgroundImage = `linear-gradient(180deg, rgba(11,6,20,.1) 30%, rgba(11,6,20,.92)), url("${S.hero.poster}")`;
      card.innerHTML = `<span class="play" aria-hidden="true">▶</span><strong>${esc(v.title)}</strong><small>Tap to watch on Facebook ↗</small>`;
    } else {
      card = document.createElement("div");
      card.className = "video-card placeholder";
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
      <a class="btn" href="${esc(b.bookingUrl || "#contact")}">Book your event</a>
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
