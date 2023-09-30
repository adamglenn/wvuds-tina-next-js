---
title: Tina Cloud Starter
blocks:
  - tagline: Here's some text above the other text
    headline: Here is my headline new text
    text: |
      Here is my text.
    actions:
      - label: Action Label
        type: button
        icon: true
        link: /
    image:
      src: /uploads/39130 S AHR 0859 XX.jpg
    backgroundPosition: bg-left-top
    backgroundAttachment: ''
    isBackground: true
    styles:
      headlineFont: font-wvu-shout leading-wvu-shout
      headlineColor: ''
      headlineSize: text-7xl
      headlineDecoration: wvu-bar
    color: primary
    _template: hero
  - main:
      - selectProfile: >-
          content/profiles/when-the-streets-are-a-jungle-there-can-be-only-one-king.md
        _template: profile
      - heading: asdfadsf
        styles: style-3
        _template: callout
      - heading: adsfasdf
        _template: callout
      - textBlock: |
          afdadf
        _template: richText
    sidebar:
      - selectProfile: >-
          content/profiles/when-the-streets-are-a-jungle-there-can-be-only-one-king.md
        _template: profile
      - embedCode: >-
          <div id="localist-widget-52631272"
          class="localist-widget"></div><script defer type="text/javascript"
          src="https://cal.wvu.edu/widget/view?schools=wvu&departments=athletics&days=90&num=3&container=localist-widget-52631272&template=wvu-design-system-3-across"></script>
        _template: calendar
      - heading: Callout
        body: |
          Cool story, bro.
        styles: style-2
        _template: callout
      - heading: Another Callout Heading
        _template: anotherCallout
      - heading: My Heading
        body: ''
        _template: callout
    _template: contentPlus
  - title: Article Collection
    lede: Lede text.
    posts:
      - title: content/posts/anotherPost.mdx
      - title: content/posts/voteForPedro.mdx
      - title: content/posts/Adams-First-Blog-Post.mdx
    _template: postCollection
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
---












































































































































