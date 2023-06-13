---
authors: [Georg Makowski]
title: Accessible fluid Design
description: Accessibility is one advantage of this type of design
date: 2022-07-12T22:38:10+02:00
categories: [design]
tags: [accessible, fluid responsive]
resources:
- name: fluid
  src: resource-database--R7raVu_isU-unsplash.jpg
  params:
    alt: Fluid frame
---

Websites with a fluid-responsive design can be especially user-friendly and accessible. This site is an example.
{.p-first}
<!--more-->

![](fluid?ph=left&s=tiny)

Fluid sizes solely depend on the width of the browser window or the view-port width of the mobile device. When a user changes the zoom factor of his browser or his device, they are not affected at all. That’s the problem with fixed fluid sizes. The solution is obvious: We need to change fluid sizes accordingly when we change the layout responsively.

{{< mnote up=8 >}}
The CSS function {$clamp} has been introduced to allow a single view-port dependent size within min-max constraints. For a layout with different fluid states like this one two constraints aren’t enough and breakpoints are the only way to go.
{{< /mnote >}}

Just give it a try with {%Ctrl} + {%+} and {%Ctrl} + {%-} or the zoom setting of your desktop browser. You may have to take a few zooming steps, before the layout changes.
{.p-big}

Fluid sizes and especially fluid fonts are not suitable for every screen width. For various reasons, we shouldn’t deviate too much from the default browser font size on mobile devices. Responsive fluid design is most beneficial on larger screens --- tablet sizes and up. Breakpoints depending on the ‘em’-unit allow fitting our fluid text precisely into the changing fluid variants of our responsive layout. On large desktop screens, we need to stop the fluidity again, because their height is usually more restricted than their width, and{/}the fonts shouldn’t get too large.

This theme lets browsers load images always in the most appropriate resolution and in case the zoom factor grows, they are reloaded in a higher resolution.
