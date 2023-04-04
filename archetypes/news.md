---
author: 
title: {{ replace .Name "-" " " | title }}
date: {{ .Date }}
resources:
- src:
  name: featured
  params:
    alt: 
- src:
  name:
  params:
     alt:
     attr:
     attrlink:
categories: []
tags: []
draft: true
---

{{ partial "archetypes/first_paragraph.md" . -}} <!--more-->
