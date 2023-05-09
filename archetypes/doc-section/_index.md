---
title: {{ replace .Name "-" " " | title }}
date: {{ .Date }}
menu:
  doc:
    identifier: {{ .Name }}
    name: {{ replace .Name "-" " " | title }}
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
