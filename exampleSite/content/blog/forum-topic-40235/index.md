---
authors: [Georg Makowski]
title: Nested Definition List
description: Demo for topic 40235 in the Hugo-Forum
subtitle: false
date: 2022-08-27T15:01:18+02:00
categories: [Markdown]
tags: [Quote, List]
series: [Demo]
resources:
- src: romain-vignes-ywqa9IZB-dU-unsplash.jpg
  name: featured
  params:
    alt: Lexicon entry
---

A definition list inside a blockquote with a sub-list in one of its items is an interesting problem for Markdown layout.
{.p-first}
<!--more-->

The problem came up in the [Hugo-forum](https://discourse.gohugo.io/t/list-as-a-definition-list-item/40235). At first, it was a little unclear, so I created two demos. The original question was about the resulting HTML code.{^\*}

{{< mnote star=1 >}}
I don’t include the resulting code, you can inspect it as usual with your browser tool.
{{< /mnote >}}

## Bullet list inside of definition list

### Version 1
{{< playground >}}
> He adds up:
> : - The cost of raw materials to be processed
>   - The wages
>   - The consumption of the machines, their wear and tear and the interest on the money they cost him:
>     - The selling expenses: transport. brokerage. discounts.
>     - The general expenses: administration, rents, taxes. insurance etc.
> {.dl-loose}
{{< /playground >}}

### Version 2
{{< playground >}}
> He adds up:
> : The cost of raw materials to be processed
> : The wages
> : The consumption of the machines, their wear and tear and the interest on the money they cost him:
>   - The selling expenses: transport. brokerage. discounts.
>   - The general expenses: administration, rents, taxes. insurance etc.
> {.dl-loose}
{{< /playground >}}

Markdown is very sensitive to indentation when combining various formatting signs and [attributes](https://perplex.desider.at/doc/attribute). We need to align our code correctly. Then, the HTML code is the expected one. Which version fits the content in the best way is a matter of taste.
