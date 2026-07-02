# Deploying to Vercel

Step-by-step guide to deploy this portfolio to Vercel for free (Hobby plan).

## Prerequisites

- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (sign up with GitHub — free, no card required)
- This repository pushed to GitHub

## Step 1 — Push the code to GitHub

If the repo isn't on GitHub yet:

```bash
# create a new repo on github.com (e.g. "portfolio"), then:
git remote add origin https://github.com/Vignesh-2552/portfolio.git
git push -u origin main
```

Or with the GitHub CLI:

```bash
gh repo create portfolio --public --source . --push
```

## Step 2 — Import the project on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with **GitHub**
3. Under **Import Git Repository**, select the portfolio repo
4. Leave every setting at its default — Vercel auto-detects Next.js:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Install Command:** `yarn install`
5. Click **Deploy**

The first build takes ~1–2 minutes. You'll get a live URL like:

```
https://portfolio-vignesh.vercel.app
```

## Step 3 — Set the site URL environment variable

The OG image, sitemap, robots.txt, and JSON-LD schema all resolve against
`NEXT_PUBLIC_SITE_URL` (see `src/lib/site.ts`). Point it at your live URL:

1. In the Vercel dashboard, open your project
2. Go to **Settings → Environment Variables**
3. Add:

   | Name | Value | Environment |
   |------|-------|-------------|
   | `NEXT_PUBLIC_SITE_URL` | `https://portfolio-vignesh.vercel.app` | Production |

   *(use your actual deployment URL — no trailing slash)*

4. Go to **Deployments → ⋯ (latest deployment) → Redeploy** so the variable
   takes effect

### Verify it worked

After the redeploy, check:

- `https://<your-url>/robots.txt` — the `Sitemap:` line shows your real domain
- `https://<your-url>/sitemap.xml` — lists `/` and `/resume` with your domain
- Paste your URL into [opengraph.xyz](https://www.opengraph.xyz) — the social
  preview card should render with the dark branded image

## Step 4 — Automatic deployments

Nothing to configure. From now on:

- **Push to `main`** → deploys to production automatically
- **Open a pull request** → Vercel builds a unique preview URL for that branch

```bash
git add -A
git commit -m "update content"
git push          # ← this is a production deploy
```

## Optional — Custom domain

The `.vercel.app` URL is free forever. If you buy a domain
(e.g. `vignesha.dev`, ~$10–12/year):

1. **Settings → Domains → Add** and enter the domain
2. Follow Vercel's DNS instructions at your registrar
   (usually one `A` record or a `CNAME` to `cname.vercel-dns.com`)
3. HTTPS is provisioned automatically
4. Update `NEXT_PUBLIC_SITE_URL` to the new domain and redeploy

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Build fails on Vercel but works locally | Run `yarn build` locally first — the error output is identical. Fix, commit, push. |
| Social preview shows `localhost` URLs | `NEXT_PUBLIC_SITE_URL` isn't set (or wasn't followed by a redeploy). See Step 3. |
| Old content after a deploy | Hard-refresh (`Ctrl+Shift+R`); Vercel's CDN cache clears on each deploy but the browser's may not. |
| `yarn.lock` conflicts | Vercel uses the lockfile committed to the repo. Run `yarn install` locally and commit the updated lockfile. |

## Local production check (before pushing)

```bash
yarn build   # must pass — same build Vercel runs
yarn start   # serves the production build on http://localhost:3000
```
