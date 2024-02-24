[![Netlify Status](https://api.netlify.com/api/v1/badges/6594a2dd-776a-40a0-a6c5-7ea2dc7c664e/deploy-status)](https://app.netlify.com/sites/zen-bhaskara-590b05/deploys)
[![GitHub license](https://img.shields.io/github/license/bowman2001/perplex)](https://github.com/bowman2001/perplex/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/bowman2001/perplex)](https://github.com/bowman2001/perplex/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/bowman2001/perplex?color=green)](https://github.com/bowman2001/perplex/issues?q=is%3Aissue+is%3Aclosed)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bowman2001_perplex&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bowman2001_perplex)

# Perplex Theme for Hugo

This documentation and multi-purpose theme focuses on good legibility by providing a detailed rich layout. It’s highly optimized for speed by self-hosting resources. No other software is required to start a new project.

## Requirements

The theme relies on a recent **extended** version of Hugo for WEBP support. If you are new to Hugo and want to get started as fast as possible, visit the [workflow introduction][intro].

## Examples

The theme contains an example project with a few pages of content in the `exampleSite` folder. [**The documentation**][doc] is also the **demonstration site** with a lot of content.


## Features

All kinds of pages are rendered into the same coherent **fluid-responsive layout grid**. The detailed typographic design is based on classic principles and techniques. 

### Layout 

The default styling of Markdown content is **optimized for good legibility** and there are many options to further enhance the layout.

The theme can generate

- large documentation with up to three menu levels

- blog postings

- a news stream

- author pages

- card previews

To achieve a balanced layout, some content snippets and meta-data parameters shouldn’t exceed a few reasonable limits. The theme helps with checks and warnings. We can change the limits and suppress all warnings separately in the project configuration.

### Color scheme

The **light** and the **dark** mode follow the setting of the OS environment and their color-contrast complies with the WCGA standard. 

The default color scheme is defined in a separate CSS file and can be replaced with your own scheme.

### Navigation

**All elements** to sift through the content as fast as possible are generated from data in the frontmatter:

  - Site menu at the top

  - Sidebar menu for documentation

  - Taxonomies

  - Page-to-page links

  - Breadcrumbs

### Images 

The **appearance of images** can be controlled to a large extent. The theme handles their preprocessing and the generation of all the needed variants. They are delivered smoothly with [Lazysizes][ls] and **without** layout shifts.

### Icons

Google’s [Material Symbols][ms] and [Simple Icons][si] for brands can be included by their identifiers. Material Symbols automatically show in all navigational elements of the documentation. All icon sets can also be used as Markdown content (using shortcodes).

### Full-text search

The theme is prepared to generate and self-host indices with the fast library [Pagefind][pf] (the additional installation of its open-source node package is required).

## Efficient!

Sites built with this theme are delivered **rapidly and cost-effective**. Image sets are highly optimized to minimize the needed bandwidth (and loaded lazily), fonts are split into small packages, and icons are embedded inline.

[doc]: https://perplex.desider.at/doc
[intro]: https://perplex.desider.at/doc/intro/workflow/
[ms]: https://fonts.google.com/icons 
[si]: https://simpleicons.org
[ls]: https://github.com/afarkas/lazysizes
[pf]: https://pagefind.app
