---
authors: [Georg Makowski]
title: Concept
description: The goals of this theme
subtitle: false
date: 2022-05-12T22:29:06+02:00 
menu:
  doc:
    name: Concept
    parent: tldr
    pre: featured_play_list
categories: [Overview]
tags: [feature]
weight: 6
---

A coherent site structure for different kinds of technical content, a versatile typographic layout, and good legibility on modern devices are the main traits of this theme.
{.p-first} <!--more-->

Perplex is a documentation theme accompanied by sections for news, a blog, and taxonomy pages. An article section is coming.

At the moment, this site shows the news section as a start page. A template for a distinct homepage is planned.

## Design & Layout

The typographic design of this theme takes the proportions of the open-source font family [Plex](https://www.ibm.com/plex/) into consideration. But the layout does **not** resemble [IBM’s corporate design](https://carbondesignsystem.com/).

The layout is **fluid-responsive**. This concept has been around for a while but hasn’t been realized often. I’m not completely sure why because there are [many advantages](/blog/accessibility-of-fluid-typography). The proportions of this layout stay fixed between breakpoints beyond mobile. And this also means:

- The viewport is used at full width when the screen space is limited.

- The line length stays the same on all screens wide enough.

All text is placed on a **baseline grid** to introduce a comfortable vertical rhythm. Combined with the fluid-responsive design this allows placing images (and other block elements) in and around the text with high accuracy. The blog contains examples of all layout options for [stand-alone](/blog/image/stand-alone) and [embedded](/blog/image/embedded) images.

## Usage concept

The theme will be as self-sufficient as it is reasonably possible. Fonts and libraries are packed into the theme or retrieved from the secure and GDPR-compliant CDN <https://jsdelivr.com>. Recent copies of all Hugo module dependencies are available in {$_vendor}. No other installations than the standard binary of a very recent Hugo release and the theme are required. To stay up to date with the ongoing theme development, the installation of a GoLang environment is certainly more convenient than updating the theme manually.

## Support

As soon as there are meaningful contributions to the development, I would love to change this theme into a community project. Without Hugo, it would have never happened.