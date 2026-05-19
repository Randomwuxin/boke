---
title: "Why Astro Over Hugo"
description: "Thoughts on choosing a static site framework"
date: 2026-05-17
tags: ["tech", "frontend"]
lang: en
---

## Background

When choosing a blog framework, I mainly looked at Hugo and Astro.

## Hugo

- Written in Go, extremely fast builds — thousands of posts in seconds
- Rich theme ecosystem, but the template syntax is Go template, which feels clunky
- Customizing styles means digging into someone else's theme code — painful

## Astro

- Frontend tech stack — components in Astro / React / Vue, pleasant to write
- Zero JS output by default — pages are pure HTML + CSS, lightning fast
- Content Collections with built-in type checking and editor autocomplete
- Build speed is more than enough for a blog's scale

## Conclusion

A blog isn't a large site. At a few hundred posts, Hugo's speed advantage doesn't really show. But Astro's developer experience is much better, and if you ever want to add interactivity (search, dark mode toggle), you just write a React component and drop it in — no need to wrestle with Hugo shortcodes.

> The right tool isn't the most powerful one — it's the one you'll actually keep using.
