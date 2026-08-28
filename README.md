# Provatto marketing site

Static, Arabic-first marketing and legal site for Provatto. The site has no framework, build step, analytics, cookies, or third-party scripts.

## Local preview

Run a static server from the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/` for Arabic or `http://localhost:8000/en/` for English. Do not open the HTML with a `file://` URL because that does not reproduce hosting paths accurately.

## Deploy to GitHub Pages

1. Merge the approved branch into `main`.
2. In **Settings > Pages**, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`, then save.
4. Add the production domain to canonical links, the sitemap locations, and Open Graph metadata when the domain is confirmed.

The repository root is the publish directory. No deployment command is required.

## Deploy to Cloudflare Pages

1. Connect this repository in Cloudflare Pages.
2. Choose no framework preset.
3. Leave the build command empty.
4. Set the output directory to `/`.
5. Add the production domain metadata after the domain is confirmed.

## Update copy

- Landing-page copy is directly inside `index.html` and `en/index.html`, between the `Landing copy` comments.
- Legal copy is directly inside each legal page, between the `Legal copy` comments.
- Keep Arabic and English pages aligned when copy changes.
- Review every change against `identity/README.md`, the identity guidelines, and the product-language rules before publishing.
- Do not add visible contact details until a final public contact value is supplied. The existing contact method in the legal and support content is retained as required.

## Assets and code

- `identity/` remains the source of truth.
- Site markup references image and icon assets directly from `identity/`; no binary copies are added to this branch.
- PNG favicon variants are intentionally deferred. The manifest and favicon use `identity/logo/app-icon.svg` and `identity/logo/icon-mark.svg`.
- `assets/css/site.css` is the shared stylesheet for both directions.
- `assets/js/site.js` contains the accessible FAQ behavior and restrained reveal motion.
