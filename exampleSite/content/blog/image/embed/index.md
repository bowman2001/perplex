---
authors: [Georg Makowski]
title: Embedded image (float)
description: Layout options for inline images
subtitle: false
date: 2023-03-23T10:10:51+01:00 
categories: [markdown]
tags: [image, block]
series: [images]
---

This page demonstrates the layout for advanced embedded images.
{.p-first}
<!--more-->

For the Markdown syntax see [basic image](https://perplex.desider.at/doc/basic/image) and [extended image](https://perplex.desider.at/doc/improved/image/syntax).

## At the beginning

### Normal size {#normal}

![](img-normal) {{% pangram 15 %}}
{.placeholder data-pagefind-ignore="all"}

![](img-normal?posh=right) {{% pangram 15 %}}
{.placeholder data-pagefind-ignore="all"}

### Small size

![](img-small?size=small) {{% pangram 13 %}}
{.placeholder data-pagefind-ignore="all"}

![](img-small?posh=right&size=small) {{% pangram 13 %}}
{.placeholder data-pagefind-ignore="all"}

### Tiny size

![](img-tiny?s=tiny) {{% pangram 9 %}}
{.placeholder data-pagefind-ignore="all"}

![](img-tiny?s=tiny&ph=right) {{% pangram 9 %}}
{.placeholder data-pagefind-ignore="all"}

## In the middle

## In the middle

Only normal-sized embedded images need some additional spacing when they are placed in the middle of a text block:

{{% pangram 4 %}} ![](img-normal?pv=middle) {{% pangram 6 %}}
{.placeholder data-pagefind-ignore="all"}

{{% pangram 8 %}}
{.placeholder data-pagefind-ignore="all"}

{{% pangram 4 %}} ![](img-normal?ph=right&pv=middle) {{% pangram 6 %}}
{.placeholder data-pagefind-ignore="all"}

{{% pangram 8 %}}
{.placeholder data-pagefind-ignore="all"}

## In lists

Embedded images always scale to a fixed percentage of the containing text width.

### Tiny

1. ![](img-tiny) {{% pangram 4 %}}

   - ![](img-tiny?posh=right) {{% pangram 4 %}}

   - ![](img-tiny) {{% pangram 4 %}}

2. {{% pangram 2 %}} ![](img-tiny?posh=right) {{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}

### Small

1. ![](img-small) {{% pangram 7 %}}

   - ![](img-small?posh=right) {{% pangram 7 %}}

   - ![](img-small) {{% pangram 7 %}}

2. {{% pangram 4 %}} ![](img-small?posh=right&posv=middle) {{% pangram 5 %}}
{.placeholder data-pagefind-ignore="all"}

### Full size

Because stand-alone images do not fit in the indented text blocks of lists, we need embedded ones to fill up the width of the containing text block.

#### Normal list

1. {{% pangram 2 %}} ![](img-full?size=full)

2. {{% pangram 2 %}} ![](img-full?size=full)
{.placeholder data-pagefind-ignore="all"}

#### Columned list

1. {{% pangram 1 %}} ![](img-full?size=full)

2. {{% pangram 1 %}} ![](img-full?size=full)
{.col2 .placeholder data-pagefind-ignore="all"}

#### Loose definition list

First term
: {{% pangram 3 %}} ![](img-full?size=full)

Second term
: {{% pangram 3 %}} ![](img-full?size=full)
{.dl-loose .placeholder data-pagefind-ignore="all"}
