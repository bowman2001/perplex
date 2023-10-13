---
authors: [Georg Makowski]
title: Concept
description: General design ideas for this theme
subtitle: false
date: 2022-05-12T22:29:06+02:00 
menu:
  doc:
    name: Concept
    parent: tldr
    pre: featured_play_list
resources:
  - src: drew-beamer-xU5Mqq0Chck-unsplash.jpg
    name: featured
    params:
      alt: Horizon through a lensball
      zoom: 1.6
  - src: IBM_Plex_Sans.svg
    name: plex_sample
    params:
      background: light
      posh: left
      width: tiny
categories: [Overview]
tags: [feature]
weight: 6
---

A coherent site structure for different publishing formats, a versatile typographic layout, and good legibility on all screens are the main traits of this theme.
{.p-first} <!--more-->

Perplex is a universal all-purpose theme for technical content. There are templates for three levels of documentation, a news stream, blog postings, and author & taxonomy pages. Templates for articles will follow.

At the moment, this site shows the news section as a start page. A template for a distinct homepage is planned.

## Design & Layout

![Sample of IBM Plex Sans](plex_sample)

The theme includes the open-source font family [Plex](https://www.ibm.com/plex/) and the layout respects their proportions. But the design does **not** follow [IBM’s corporate design system](https://carbondesignsystem.com/).

The layout is **fluid-responsive**. This concept has been around for a while but doesn’t get realized often. I’m not completely sure why because there are [many advantages](/blog/accessibility-of-fluid-typography). 

Many proportions can stay fixed between breakpoints beyond mobile. And this allows to achieve some essential advantages:

- The viewport is always used at full width when the screen space is limited.

- The optimal line length gets fixed on all wider screens.

- adjacent columns can stay in sync, we can place layout elements besides each other instead of the usual top down stream like layout.
{.col2}

All text is placed on a **baseline grid** to introduce a comfortable vertical rhythm and coherence between adjacent text elements. Combined with the fluid-responsive design this allows placing images (and other block elements) in and around the text with high accuracy. The blog contains examples of these additional layout options for [stand-alone](/blog/image/standalone) & [embedded](/blog/image/embed) images, or [code blocks](/blog/codelayout).

## Usage concept

The theme is as self-sufficient as reasonably possible. Fonts and libraries are included, plugins are sometimes retrieved from the secure and GDPR-compliant CDN <https://jsdelivr.com>. Recent copies of all module dependencies are available in the {$_vendor} folder.

No other installations than the extended binary (for WEBP) of a very recent Hugo release and the theme are required. To stay up to date with the ongoing theme development, the installation of a GoLang environment is certainly more convenient than updating the theme manually.

## Support

There will be no free support channel in the foreseeable future because I won’t be able to maintain it. Improving this theme takes all my spare time. Free support will only work bidirectional. When you find a bug or have a suggestion for an improvement you need to file an official issue in the repositories (&rightarrow; [Introduction](doc/intro/perplex#in-case-of-problems)). I will not answer private questions for help.

In case people from the Hugo community should make bigger contributions to the development, I would love to change this theme and its license holder into a community project.
