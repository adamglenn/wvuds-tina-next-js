---
title: Tina Cloud Starter
blocks:
  - tagline: ''
    headline: Here is my headline new text
    text: >
      Lorem markdownum evinctus ut cape adhaeret gravis licet progenies ut
      haesit maxima ille. Est scorpius, mori vel in visaeque Haemoniis viperei
      furoris e ad vasti, distulit.
    actions:
      - label: Action Label
        type: button
        icon: true
        link: /
    image:
      src: /uploads/39130 S AHR 0859 XX.jpg
    backgroundPosition: bg-center
    backgroundAttachment: ''
    isBackground: true
    styles:
      headlineFont: font-wvu-shout leading-wvu-shout
      typographyPalette: style-1
      headlineColor: '#FFFFFF'
      headlineSize: text-7xl
      elements: style-1
      headlineDecoration: wvu-slash
    color: primary
    _template: hero
  - main:
      - _template: calendar
      - pages:
          - page: content/pages/home.md
          - page: content/pages/about.md
          - page: content/pages/Tina-Demo.md
          - page: content/pages/Test-Page.md
        layout: vertical
        _template: pageCollection
      - selectProfile: >-
          content/profiles/when-the-streets-are-a-jungle-there-can-be-only-one-king.md
        _template: profile
      - heading: asdfadsfsadf
        body: |
          adsfasdfds
        styles: style-2
        _template: callout
      - heading: asdfadsfadf
        body: |
          asdfadsfadf
        _template: callout
      - textBlock: |
          asdfasd
        _template: richText
    sidebar:
      - _template: calendar
    _template: contentPlus
  - items:
      - icon:
          name: BiArchiveOut
          color: green
          style: float
        title: Amazing Feature
        text: >-
          Aliquam blandit felis rhoncus, eleifend ipsum in, condimentum nibh.
          Praesent ac faucibus risus, eu lacinia enim.
      - icon:
          name: BiLike
          color: primary
          style: float
        title: This Is a Feature
        text: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
      - icon:
          name: BiPalette
          color: green
          style: float
        title: Configurable Theme
        text: >-
          Edit global theme configuration with Tina. Change your theme's primary
          color, font, or icon set.
    color: tint
    _template: features
  - tagline: ''
    headline: Big Text
    subhead: ''
    text: |
      Here is my body text.
    image:
      src: /uploads/felipe-giacometti-wH_fGzWELuw-unsplash (1).jpg
    backgroundPosition: bg-center
    isBackground: false
    styles:
      headlineFont: font-wvu-shout leading-wvu-shout
      typographyPalette: style-1
      headlineSize: text-6xl
      elements: style-2
      headlineDecoration: wvu-slash
    color: primary
    _template: infographic
  - quote: >-
      There are only two hard things in Computer Science: cache invalidation and
      naming things.
    author: Phil Karlton
    color: primary
    _template: testimonial
  - body: |
      Here is my body text.

      Here is some more text.
    color: default
    _template: content
heroImg: /uploads/39257 S DJM 0312 XX.jpg
preview: >-
  Lorem markdownum evinctus ut cape adhaeret gravis licet progenies ut haesit
  maxima ille. Est scorpius, mori vel in visaeque Haemoniis viperei furoris e ad
  vasti, distulit.
---









































































































































































































