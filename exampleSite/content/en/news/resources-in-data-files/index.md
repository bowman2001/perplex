---
authors: [Georg Makowski]
title: Resources in Data Files
date: 2023-09-05T00:02:59+02:00
categories: [module]
tags: [resources]
---

The theme offers a new possibility to store local parameters for resources. Data files allow to associate local meta-data with global or remote resources.  
{.p-first}
<!--more-->

Hugo offers to process arbitrary meta-data parameters associated with page resources. We can add a parameter list to [local resources](https://gohugo.io/content-management/page-resources/#page-resources-metadata) in the front-matter of page bundles under `params`:

```yaml
resources:
  - src: hebert-kostan-y6UEUCq2RHw-unsplash.jpg
    name: tiger
    params: 
      caption: Local image resource
      width: small
      posh: left
```

![global tiger](global.yaml)

Depending on the content structure of your project, you may want to store some resources in the global {$assets} folder or on a remote server. Hugo also can retrieve these resources, but there is (currently) no native mechanism to associate them with meta-data parameters. And this is where this module comes in handy.

The tiger here is stored in the {$assets} folder and gets referenced in a local data file. This way, we can re-use global assets repeatedly and store meta-data in a file like {$global.yaml}:

```yaml
src: img/tiger/hebert-kostan-y6UEUCq2RHw-unsplash.jpg
caption: Image file from {$assets}
width: small
posh: left
```

![Remote image](remote.json)

The extra parameter keys are the same as the ones above. There is no new name for the resource, we use the data file inside the usual Markdown image syntax like `![global tiger](global.yaml)`. 

We can also use TOML or JSON files, enter a remote URL as source, and call every image service with an HTTP API. The second image here is generated with this data file for example:

```json
{
    "src": "https://picsum.photos/300/300",
    "caption": "Random image",
    "posh": "right",
    "width": "tiny"
}
```

The module is available on [GitHub](https://github.com/bowman2001/hugo-mod-resource).
