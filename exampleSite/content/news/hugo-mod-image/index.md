---
authors: [Georg Makowski]
title: Hugo Module{/}for rendering images
linktitle: Image module
description: Retrieve, preprocess and render all kinds of images
date: 2023-10-11T15:57:57+02:00
categories: [module]
tags: [image]
draft: true
---

Hugo offers powerful image processing methods. This module offers theme developers and their users a way to apply them consistently.
{.p-first}
<!--more-->

The modules makes heavy use of nested parameter maps to collect and process image parameters. It includes a render image hook to offer users a simple way to manipulate images inside the given layout and add a rich caption.

## Retrieval

Image sources may be stored locally (in page bundles), globally (in the {$assets} folder), or on a remote server accessible via HTTP. We can associate meta-data not only with local files but also with global and remote ones in local data files (This module depends on the [resources module](/news/resources-in-data-files)).

## Preprocessing

We can resize, zoom in, and rotate raster images with the three resource parameters {$ratio}, {$zoom}, and {$rotate}.

## Including layout classes

Developers can incorporate all their available classes for images. Width classes for figures are obviously always necessary. Possible are shadows, frames, backgrounds ...

## Render Optimize bandwidth

Raster images
: JPEG, PNG, and BMP are usually converted to WEBP source sets, optionally preserving the alpha channel of PNG. When you site gets rendered in the browser, [Lazysizes]() calculates and requests a near-optimal image size and repeats this process in case the viewport changes. All images come with minimized placeholders to avoid empty space at the initial page rendering.

    The specific sizes of your source sets, fallback images and placeholders are calculated by the module. To know the possible minimal and maximal width for every available image class is enough. One single configuration parameter for the size factor between subsequent sizes in your image sets determines your desired balance between saving storage and reducing bandwidth.

Vector graphics
: Small SVG images are automatically embedded inline.

GIF
: 

## Avoiding layout shifts

All raster images and their optional placeholders are loaded into container tags with a fixed size.

## Ret



