---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
description: "**Placeholder**: Short tag description"
subtitle: true
date: {{ .Date }}
resources:
  - src:
    name: featured
    params:
      alt:
---
