---
authors: [Georg Makowski]
title: Concept
description: The basics and goals of this theme
subtitle: false
date: 2022-05-12T22:29:06+02:00 
menu:
  doc:
    name: Concept
    parent: tldr
    pre: featured_play_list
resources:
  - src: IBM_Plex_Sans_Sample.svg
    name: plex_sample
    params:
      background: light
      posh: left
      width: tiny
categories: [Overview]
tags: [feature]
weight: 6
---

A coherent site structure for different kinds of technical content, a versatile typographic layout, and good legibility on modern devices are the main traits of this theme.
{.p-first} <!--more-->

Perplex is a documentation theme accompanied by sections for news, a blog, and taxonomy pages. An article section is coming.

At the moment, this site shows the news section as a start page. A template for a distinct homepage is planned.

## Design & Layout

![Sample of IBM Plex Sans](plex_sample)

The theme includes the open-source font family [Plex](https://www.ibm.com/plex/) and the layout fits their proportions. The theme does **not** resemble [IBM’s corporate design system](https://carbondesignsystem.com/).

The layout is **fluid-responsive**. This concept has been around for a while but hasn’t been realized often. I’m not completely sure why because there are [many advantages](/blog/accessibility-of-fluid-typography). 

Many proportions of this layout stay fixed between breakpoints beyond mobile. And this allows us to achieve some essential layout advantages:

- The viewport is always used at full width when the screen space is limited.

- The line length is fixed on all wider screens.

- adjacent columns stay in sync
{.col2}

All text is placed on a **baseline grid** to introduce a comfortable vertical rhythm and coherence between adjacent text elements. Combined with the fluid-responsive design this allows placing images (and other block elements) in and around the text with high accuracy. The blog contains examples of all layout options for [stand-alone](/blog/image/standalone), [embedded](/blog/image/embed) images, and [code blocks](/blog/codelayout).

## Usage concept

The theme is as self-sufficient as reasonably possible. Fonts and libraries are packed into the theme, plugins are sometimes retrieved from the secure and GDPR-compliant CDN <https://jsdelivr.com>. Recent copies of all Hugo modules are available in the {$_vendor} folder.

No other installations than the extended binary of a very recent Hugo release (for WEBP) and the theme are required. To stay up to date with the ongoing theme development, the installation of a GoLang environment is certainly more convenient than updating the theme manually.

## Support

There will be no support channel in the foreseeable future because I won’t be able to maintain it. Improving this theme takes all my spare time. Support will only work bidirectional, I will not answer private messages. When you find a bug or have a suggestion you need to file an official issue and we can try to solve your problem (&rightarrow; [Introduction](doc/intro/perplex#in-case-of-problems)).

As soon as there are meaningful contributions to the development, I would love to change this theme into a community project because it would have never happened without the Hugo community. 