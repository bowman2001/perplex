---
authors: []
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: {{ .Date }}
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
categories: []
tags: []
draft: true
---

{{ partial "archetypes/first_paragraph.md" . -}} <!--more-->
