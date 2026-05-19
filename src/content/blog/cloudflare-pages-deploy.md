---
title: "用 Cloudflare Pages 部署静态站"
description: "零成本、全球 CDN、自动部署，程序员博客的最佳选择"
date: 2026-05-18
tags: ["技术", "DevOps"]
lang: zh
---

## 为什么选 Cloudflare Pages

之前试过 GitHub Pages，也不错，但 Cloudflare Pages 有几个优势：

- **无限带宽**，GitHub Pages 有 100GB/月限制
- **全球 CDN**，国内访问速度比 GitHub 快不少
- **自动部署**，push 到 main 分支自动构建上线
- **免费 SSL**，自带 HTTPS

## 部署流程

1. 把代码推到 GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Pages -> Create a project -> Connect to Git
4. 选你的仓库，构建命令填 `npm run build`，输出目录填 `dist`
5. 点 Save，等一分钟就好了

之后每次 `git push`，Cloudflare 会自动拉代码、构建、部署，全程不到一分钟。

## 自定义域名

如果以后买了域名，在 Cloudflare Pages 设置里加一个 Custom domain 就行，DNS 也一起托管在 Cloudflare，免费且快。
