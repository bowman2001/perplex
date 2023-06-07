---
authors: [Georg Makowski]
title: Hugo Module{/}for Math and Chemistry
linktitle: hugo-mod-katex
description: Include the KaTeX library into your Hugo project
date: 2023-05-18T16:05:52+02:00
categories: [module]
tags: [latex]
---

This Hugo module allows rendering mathematical and chemical formulas in Markdown.
{.p-first}
<!--more-->

The popular Javascript library [{{< math >}}\KaTeX{{< /math >}}](https://katex.org) is included for self-hosting.

Inline LaTeX
: can get wrapped with the two Hugo shortcodes `{{</* math */>}}` and `{{</* chem */>}}`. They prevent distortions by the Markdown rendering. Already working LaTeX expressions surrounded by a `$` or doubly escaped parenthesis are still fine, of course: $E = mc^2$.

LaTeX blocks
: can be placed inside fenced code blocks with the identifiers `math` or `chem`. They also provide protection against distortions and have another advantage: We can use newlines in formulas as usual. Again, already working LaTeX expressions surrounded by two dollars or doubly escaped squared brackets are still fine.
$$\begin{equation}E = mc^2\end{equation}$$
{.dl-loose}

**The module is [available on GitHub](https://github.com/bowman2001/hugo-mod-katex) with an example site.**
