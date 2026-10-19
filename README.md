# Nola-Extreme-Bike-Vibes
Bike rental service in New Orleans Louisiana 

## The website
A single-page site: `index.html`, `styles.css`, `script.js`. Open `index.html` in a browser, or host the folder anywhere static (GitHub Pages, Netlify).

**To change content, edit only `site-config.js`:** phone, prices, hours, bikes, event services and videos all live there. Items marked `TODO` still need real info.

- Hero background video: `assets/videos/hero.mp4` (short, no sound).
- Feed videos: point `file` at an `.mp4` in `assets/videos/` (and `poster` at a still in `assets/images/`) to play it on the page, or paste a Facebook video link (Share > Copy link) into `facebook` to open it on Facebook.
- Turning a phone screen recording into a site video: trim off the phone's status bar and Facebook's buttons, then shrink it, e.g. `ffmpeg -i in.mov -vf "crop=1320:2280:0:320,scale=720:-2,fps=30,format=yuv420p" -c:v libx264 -crf 25 -c:a aac -b:a 128k -movflags +faststart out.mp4` (crop numbers are for a 1320×2868 iPhone recording).
- Photos go in `assets/images/`.
