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
weight: 9999
draft: true
---

{{ partial "archetypes/first_paragraph.md" . -}} <!--more-->
