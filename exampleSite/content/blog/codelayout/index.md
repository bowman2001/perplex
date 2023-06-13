---
authors: [Georg Makowski]
title: Code Block Layout Demo
description: Code Blocks on full width pages (without sidebar)
linktitle: Code Demo
date: 2022-11-01T14:54:07+01:00
categories: [Markdown]
tags: [Code, Inline, Block]
series: [Demo]
---

On large screens, code blocks expand into the margins as long as possible and may include up to {$160} characters in one line.
{.p-first} <!--more-->

This is a layout demonstration for pages without a sidebar. The docs contain the [syntax options](https://perplex.desider.at/doc/basic/code).

## Default

```md
The HTML tag at the **beginning** of code is `<code>`.
And to mark the **end** we use the corresponding closing tag `</code>`.
```

## With line numbers

```md {linenos=true}
The HTML tag at the **beginning** of code is `<code>`.
And to mark the **end** we use the corresponding closing tag `</code>`.
```

## Long lines

```go {.expand}
// NodeRendererFunc is a function that renders a given node.
type NodeRendererFunc func(writer util.BufWriter, source []byte, n ast.Node, entering bool) (ast.WalkStatus, error)

// A NodeRenderer interface offers NodeRendererFuncs.
type NodeRenderer interface {
 // RendererFuncs registers NodeRendererFuncs to given NodeRendererFuncRegisterer.
 RegisterFuncs(NodeRendererFuncRegisterer)
}
```

## Short lines
When our code lines never exceed {$40} characters, we can embed them inside or place them beside the text:

```json {.left}
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 35,
  "profession": "Last Man Standing"
}
```

{{< farfar 1 >}}

```bash {.lh15 .right}
├── assets
├── config
├── package.json
├── public
├── resources
└── themes
```

{{< farfar 1 >}}

## In lists or other indented blocks

- List entries are indented and the code block gets smaller
  
  ```md
  The HTML tag at the **beginning** of code is `<code>`.
  And to mark the **end** we use the corresponding closing tag `</code>`. 
  ```
