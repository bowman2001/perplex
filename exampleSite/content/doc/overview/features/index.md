---
authors: [Georg Makowski]
title: Concept & Features
description: About the goals of this theme
subtitle: false
date: 2022-05-12T22:29:06+02:00 
menu:
  doc:
    name: Concept & Features
    parent: tldr
    pre: featured_play_list
categories: [Overview]
tags: [feature]
weight: 6
---

Good legibility on modern devices and a coherent site structure for technical content are the main traits of this theme.
{.p-first} <!--more-->

Perplex is a documentation theme accompanied by sections for news, a blog, and author pages. An article section is in the making.

At the moment, this site shows the news section as a start page. A design for a distinct homepage may get released as a module.

## Design & Layout

The typographic design of this theme is based on the open-source font family Plex by IBM. The CSS stylesheet is built in accordance with their basic proportions but the layout does **not resemble IBM’s corporate design** style.


The layout is **fluid-responsive**. This concept has been around for a while but hasn’t been realized often. I’m not completely sure why because there are [only advantages](/blog/accessibility-of-fluid-typography). The proportions of this layout stay fixed between breakpoints beyond mobile. And this also means:

- The viewport is used in full until there is ample space as on large desktop screens.

- The line length stays the same when the width of the screen is not as constrained as on small mobile devices.

All text is placed on a **baseline grid** to introduce a comfortable vertical rhythm. Combined with the fluid-responsive design this allows placing images (and other block elements) in and around the text accurately. The blog contains examples of all layout options for [stand-alone](/blog/image/stand-alone) and [embedded](/blog/image/embedded) images. 

## Usage concept

The theme will be as self-sufficient as it is reasonably possible. Fonts and libraries are packed into the theme or retrieved from the secure CDN <https://jsdelivr.com>. Recent copies of all Hugo module dependencies are available in {$_vendor}. No other installations than the standard binary of a very recent Hugo release and the theme are required. To stay up to date in the long run, the installation of the GoLang environment is more convenient than updating the theme manually.

## Support

As soon as there are meaningful contributions to the development, I would love to change this theme into a community project. Without Hugo, it would have never happened.
