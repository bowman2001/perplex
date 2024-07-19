---
authors: [Georg Makowski]
title: Hugo Module{/}for missing HTML inline tags
linktitle: Module for missing inline tags
date: 2023-02-22T23:55:26+02:00
categories: [Module]
tags: [Replacement, Security]
---

Replacement codes let us avoid raw HTML in Markdown.{/}A single partial replaces them with the inline tags{/}lacking a syntax element in Goldmark.
{.p-first} <!--more-->

The codes look like `{*text}`, where `*` is a placeholder for one or more ASCII characters. The superscript tag `<sup>` for example is marked by `^` and fits the following regular expression (Golang syntax):

```go-html-template {.block} 
replaceRE `\{\^([^}]*)\}` "<sup>$1</sup>"
```

This syntax does not collide with any other elements --- as far as I know. And it’s safe because the replacements are applied after the Markdown rendering. Hugo discards all HTML in Markdown by default and also checks these codes before the regular expressions are applied.
{.inline}

{{< mnote >}}
**Markdown attributes** have a similar syntax, but they usually aren’t present in the rendered HTML code anymore. Except for Markdown code examples including attributes. Therefore, the `#` and `.` signs are avoided.
{{< /mnote >}}

All replacements are chained together in one Hugo partial, which can process every piece of rendered Markdown content in the templates.

**These replacements are published as a tiny [Hugo module on GitHub][module]**.

This approach is a workaround. To create extensions for Hugo’s Markdown renderer [Goldmark][goldmark] would be the better solution.

[module]: https://github.com/bowman2001/hugo-mod-replacements/
[goldmark]: https://github.com/yuin/goldmark "GitHub repository"
