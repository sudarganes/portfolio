# Product Design Manager · Portfolio

This is a single-page portfolio site for a **Product Design Manager / UX Leader**. It is built as plain HTML, CSS, and JavaScript so you can open it directly in a browser or host it on any static site provider.

## Structure

- `index.html` – Main page with sections for hero, about, product design craft, leadership, selected work, process, and contact.
- `styles.css` – Visual design, layout, and responsive behavior.
- `script.js` – Small enhancements for navigation and the footer year.

## How to preview

You can open `index.html` directly in a browser, or run a simple local server:

```bash
cd "sg portfolio fr fr"
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## What to customize first

Open `index.html` and search for these placeholders:

- `Your Name` – Replace with your name in the header and footer.
- `your.email@example.com` – Replace with your preferred contact email.
- `LinkedIn profile` link – Replace the `href` with your actual LinkedIn URL.
- `[City, Country]` – Update your location.
- Case study copy under **Selected work** – Replace each sample with real projects from your experience.

You can freely edit the text in any section to better match your story. The copy is written to emphasize:

- 12+ years of UX and product design experience.
- A blend of **hands-on product design craft** and **design leadership / management**.
- Experience with **design systems**, **hiring**, **coaching designers**, and **leading cross‑functional product teams**.

## Tweaking the visuals

- Colors and spacing are defined at the top of `styles.css` under the `:root` selector.
- Sections are identified by `id` attributes in `index.html` (`about`, `craft`, `leadership`, `work`, `process`, `contact`).
- You can add logo images or a real avatar by replacing the `.avatar-placeholder` div with an `<img>` tag and adjusting its styles.

## Deploying

Because this is a static site, you can deploy it to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting where you can upload `index.html`, `styles.css`, and `script.js`

No build step is required.

