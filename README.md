# Samy-Melwan Vilhes — Personal Website

A hand-built, **fully static** personal/academic website. No framework, no build
step, no dependencies — just three files plus your PDFs. It works by opening
`index.html` in any browser, and can be hosted anywhere.

```
site/
├── index.html        # Home: about, news, research, beyond, contact
├── cv.html           # Curriculum Vitæ (with "Print / Save as PDF" button)
├── assets/
│   ├── style.css     # All styling (light + dark theme)
│   └── main.js       # Theme toggle, scroll reveals, publications, hero animation
├── files/            # Your PDFs (papers, slides, posters)
└── .nojekyll         # Lets GitHub Pages serve the folder as-is
```

## Features
- Original design with an animated **time-series + anomaly-detection** hero (a nod to your research)
- **Light / dark mode** (remembers the visitor's choice, respects system preference)
- Responsive down to mobile
- CV page prints cleanly to PDF (browser → Print → Save as PDF)
- Publications live in one array in `main.js` — add a new paper by editing that list

## Preview locally
Just open the file, or run a tiny server for correct relative paths:

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Hosting — pick one (all free)

### GitHub Pages
1. Create a repo named `vilhess.github.io`.
2. Copy the **contents of this `site/` folder** to the repo root and push.
3. Repo → Settings → Pages → Source: `main` branch, `/root`.
4. Live at `https://vilhess.github.io` in a minute.

### Netlify / Vercel / Cloudflare Pages
Drag-and-drop the `site/` folder onto the dashboard, or point it at your repo.
No build command needed; publish directory is the folder itself.

## Editing cheatsheet
- **Add a publication** → edit the `PUBS` array at the top of `assets/main.js`.
- **Add a news item** → copy a `<li class="news__item">` block in `index.html`.
- **Change colors** → edit the `--accent` / `--accent-2` variables in `assets/style.css`.
- **Add a profile photo** → drop `profile.jpg` in `assets/` and add an `<img>` in the hero.
