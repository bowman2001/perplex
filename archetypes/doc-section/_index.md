---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: {{ .Date }}
menu:
  doc:
    identifier: '{{ .File.ContentBaseName }}'
    name: '{{ replace .File.ContentBaseName "-" " " | title }}'
    parent:
    pre: remove
resources:
- src:
  name: featured
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
