---
title: "Deploying a Static Site with Cloudflare Pages"
description: "Zero cost, global CDN, auto-deploy — the best choice for a dev blog"
date: 2026-05-18
tags: ["tech", "DevOps"]
lang: en
---

## Why Cloudflare Pages

I've tried GitHub Pages before, and it's fine, but Cloudflare Pages has some advantages:

- **Unlimited bandwidth** — GitHub Pages has a 100GB/month limit
- **Global CDN** — significantly faster than GitHub in China
- **Auto-deploy** — push to main and it builds and deploys automatically
- **Free SSL** — HTTPS out of the box

## Deployment Steps

1. Push your code to GitHub
2. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Pages → Create a project → Connect to Git
4. Select your repo, set build command to `npm run build`, output directory to `dist`
5. Click Save — done in about a minute

After that, every `git push` triggers Cloudflare to pull, build, and deploy — all in under a minute.

## Custom Domain

If you buy a domain later, just add a Custom domain in Cloudflare Pages settings. DNS can be hosted on Cloudflare too — free and fast.
