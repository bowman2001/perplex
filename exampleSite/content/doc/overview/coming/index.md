---
authors: [Georg Makowski]
title: Coming Features
description: Planned additional functionality 
subtitle: false
date: 2023-04-12T11:26:56+02:00 
menu:
  doc:
    name: Coming Features
    parent: tldr
    pre: rule
categories: [Overview]
tags: [feature]
weight: 9
---

Features, which I consider essential, and the ones which would be nice to have.
{.p-first}
<!--more-->

## Essential

Documentation
: The documentation needs to get finished and in a few cases even updated :grinning_face_with_sweat:.
{.dl-loose}

## Nice to have

Start page
: A distinct starting page always depends on the project. But the theme should include a simple template that can be filled with Markdown content.

Article pages
: For long texts a big title, a hero image, and a more centered layout would be more appropriate.

Media shortcodes
: The difficulty with media is to find self-reliant solutions.
  - Video (mp4)
  - AsciiCast (self-hosted). The current shortcode is only a wrapper for a call to the official server.
  - Audio 
  - Image galleries
  - override Hugo’s shortcodes for Youtube and Vimeo because they are not GDPR-compliant.

Better SEO
: The meta tags are fine, Lighthouse gives the theme a 100. But there is still some room for improvement. The theme includes the module [{$hugo-mod-meta}](https://github.com/bowman2001/hugo-mod-meta) for this task.

Archive pages
: Archive pages are not essential for a documentation site. But depending on the content of the content of the other sections, they might come in handy.

Icons
: Allow to use other icon sets than Material Symbols in the menus.

New elements
: Many ideas ...
{.dl-loose}

Suggestions are welcome as new issues in the [repo](https://github.com/bowman2001/perplex). Please check out the existing ones before filing a new one.