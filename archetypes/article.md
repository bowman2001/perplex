---
title: {{ replace .Name "-" " " | title }}
description: 
subtitle: false
date: {{ .Date }}
categories: []
tags: []
resources:
  - src:
    name: featured
    params:
      alt:
      attr: 
      attrlink: 
  - src: 
    name:
    params: 
      alt:
      attr:
      attrlink:
draft: true
---

{{ partial "archetypes/first_paragraph.md" . -}} <!--more-->
