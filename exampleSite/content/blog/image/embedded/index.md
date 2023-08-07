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

The theme embeds an inline Markdown image by default **as a float** in the containing block.
{.p-first}
<!--more-->

This page shows the layout options for embedded images. Their extended syntax is similar to the one for stand-alone images and is explained on the page for the [general image syntax](https://perplex.desider.at/doc/basic/image/syntax).

An embedded image is often the first element of a paragraph. By **default**, it’s resized to half the width of a paragraph and placed at the beginning on the left. This is also the normal size and the first example.

All the other following options are only available for images that are registered as a [resource](https://perplex.desider.at/doc/intro/workflow/resources) in the front-matter. Then, we can change the size and the position with parameters, add a caption or attribution, etc…

## At the beginning

### Normal size {#normal}

![](img-normal) {{% pangram 10 %}}
{.placeholder data-pagefind-ignore="all"}

![](img-normal?posh=right) {{% pangram 10 %}}
{.placeholder data-pagefind-ignore="all" .clear}

### Small size

![](img-small?size=small) {{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

![](img-small?posh=right&size=small) {{% pangram 7 %}}
{.placeholder data-pagefind-ignore="all"}

### Tiny size

![](img-tiny?s=tiny) {{% pangram 5 %}}
{.placeholder data-pagefind-ignore="all"}

![](img-tiny?s=tiny&ph=right) {{% pangram 5 %}}
{.placeholder data-pagefind-ignore="all"}

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

## Indented text blocks

Embedded images take a fixed percentage of the width of the containing block: 

1. ![](img-tiny) {{% pangram 4 %}}

   - ![](img-tiny?posh=right) {{% pangram 4 %}}

   - ![](img-tiny) {{% pangram 4 %}}

2. {{% pangram 2 %}} ![](img-tiny?posh=right) {{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}

### Full size {.clear}

Usually, we use a normal-sized stand-alone image to use the full width of the text. But they don’t fit inside indented text blocks. Then, we can also place embedded images with the full width of the containing block like this:

1. {{% pangram 2 %}} ![](img-full?size=full)

2. {{% pangram 2 %}} ![](img-full?size=full)
{.placeholder data-pagefind-ignore="all"}

or this

1. {{% pangram 1 %}} ![](img-full?size=full)

2. {{% pangram 1 %}} ![](img-full?size=full)
{.col2 .placeholder data-pagefind-ignore="all"}
