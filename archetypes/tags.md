---
title: {{ .Name | title }}
description:
subtitle: true
date: {{ .Date }}
resources:
  - src:
    name: featured
    params:
      alt:
---

{{ partial "archetypes/first_paragraph.md" . -}} <!--more-->
