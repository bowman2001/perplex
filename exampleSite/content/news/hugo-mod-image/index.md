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

Hugo offers powerful image processing methods. This module allows theme developers and their users to unleash them.
{.p-first}
<!--more-->

## Optimize bandwidth

Raster images
: JPEG, PNG, and BMP are converted to WEBP source sets, optionally preserving the alpha channel of PNG. When you site gets rendered in the browser, [Lazysizes]() calculates and requests a near-optimal image size and repeats this process in case the viewport changes. All images come with minimized placeholders to avoid empty space at the initial page rendering.

    The specific sizes of your source sets, fallback images and placeholders are calculated by the module. To know the possible minimal and maximal width for every available image class is enough. One single configuration parameter for the size factor between subsequent sizes in your image sets determines your desired balance between saving storage and reducing bandwidth.

Vector graphics
: Small SVG images are automatically embedded inline.

## Avoiding layout shifts

All raster images and their optional placeholders are loaded into container tags with a fixed size.

## Ret

## Preprocessing

We can zoom, resize, and rotate raster images with resource parameters. The image sources may be local (in page bundles), global (in the {$assets} folder), or remote. We

