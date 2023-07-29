---
title     : page bundle for site-wide images
_build    :
  list      : false
  render    : false
resources :
  - src       : Perplex.svg
    name      : featured
    params    :
      alt       : Perplex logo
      link      : https://perplex.desider.at
      container : "no"
  - src       : Hugo.png
    name      : hugo
    params    :
      link      : https://gohugo.io
      alt       : Hugo logo
      container : "no"
  - name   : splash
    src    : mulyadi-JJMoAiVl9jA-unsplash.jpg
    params :
      alt    : Splashing ring of water
  - src    : erda-estremera-eMX1aIAp9Nw-unsplash.jpg
    name   : bigsplash
    params :
      alt    : A splashing drop of water
  - src: fig/tiny.svg
    name: fig-tiny
    params:
      alt: Placeholder image, tiny size
      size: tiny
      posh: left
      caption: Tiny figure
      attr: gm
  - src: fig/small.svg
    name: fig-small
    params:
      alt: Placeholder image, small size
      size: small 
      posh: left
      caption: Small figure
      attr: gm
  - name: fig-small-portrait
    src: fig/small_portrait.svg
    params:
      alt: Placeholder image, small portrait size
      caption: Small portrait figure
      size: small
      posh: right
      attr: gm
  - src: fig/medium.svg
    name: fig-medium
    params:
      alt: Placeholder image, medium size
      caption: Medium figure – this size is a good choice for a landscape ratio. 
      size: medium 
      posh: right
      attr: gm
  - src: fig/normal.svg
    name: fig-normal
    params:
      alt: Placeholder image, normal size
      caption: The **default** normal size occupies the full text width. If the margin is available, the caption is placed there.
      size: normal
      attr: gm
  - src: fig/large.svg
    name: fig-large
    params:
      alt: Placeholder image, large size
      caption: The large size fills the text width and the right margin on documenation pages. The text of the caption is constrained to the text width. The attribution is placed in the right margin an on the right as usual.
      size: large
      attr: gm
  - src: fig/extra-large.svg
    name: fig-xlarge
    params:
      size: xlarge
      alt: Placeholder image, extra large size
      caption: The size of an extra large image will only show in blog and article pages. It’s treated here like a large image, because the sidebar occupies the left margin.
      attr: gm
  - name: img-normal
    src: img/normal.svg
    params:
      alt: Placeholder image, normal size
      caption: Normal size
      attr: gm
      size: normal
  - name: img-small
    src: img/small.svg
    params:
      alt: Placeholder image, small size
      caption: A small embedded image
      attr: gm
      size: small
  - name: img-tiny
    src: img/tiny.svg
    params:
      alt: Placeholder image, tiny size
      size: tiny
  - name: img-full
    src: img/full.svg
    params: 
      alt: Placeholder image, full size
      size: full
  - src: portrait.jpg
    name: portrait
    params:
      alt: Anonymous
---
