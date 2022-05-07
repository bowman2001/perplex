---
author:
title: {{ replace .Name "-" " " | title }}
description: Page description placeholder
subtitle: false
date: {{ .Date }} 
weight: 999
featImg:
menu:
  doc:
    name: {{ replace .Name "-" " " | title }}
    parent: 
    pre: remove
draft: true
---

Place your lead paragraph here. If you don't need special styling, remove the attribute `{.p-lead}`. The **more**-tag marks this placeholder paragraph as the content summary for this page. It’s an introduction for your readers and provides information to search engines. 
{.p-lead} <!--more-->
