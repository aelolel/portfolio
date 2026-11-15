# Rafael — Portfolio (Next.js + Tailwind CSS)

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content
Almost everything lives in **one file: `src/data/portfolio.ts`**.
Search for `TODO` to see what's still empty. Empty fields are fine — the site
shows a "coming soon" badge or hides them.

- Projects: add `points`, `tech`, `links`, and `images`
- Images: drop files into `public/images/...` and reference them without a
  leading slash, e.g. `"images/projects/smartholt-1.png"` (16:9 looks best)
- Hero photo: replace `public/images/rafael.png` with a high-res transparent PNG
- CV: put your PDF in `public/` (e.g. `cv-rafael.pdf`) and set `profile.cvUrl`
- Org logos (optional): `logo: "images/logos/himsi.png"` on any experience entry
- GitHub: set `socials.github`
- Achievements: fill `date` and `deckUrl` (a Google Drive link set to "Anyone with the link")

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. vercel.com → Add New Project → import the repo → Deploy (no settings needed).
