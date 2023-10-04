import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { ColorPickerInput } from "../../tina/fields/color";
import GlobalData from "../../content/global/index.json";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  const theme = GlobalData.theme;
  
  const backgroundStyle = {
    backgroundImage: "url('" + data.image?.src + "') !important"
  }
  
  const baseOverlayClasses = "text-white row-start-2 md:row-start-1 md:col-span-3 text-center md:text-left my-32"
  const overlayClasses = data.isBackground
  let overlayStyles = ""
  
  if (overlayClasses) {
    overlayStyles = "backdrop-blur-sm bg-black/30 p-12 " + baseOverlayClasses
  } else {
    overlayStyles = baseOverlayClasses
  }
  
  let headlineClasses = "font-wvu-shout leading-wvu-shout"
  let subheadClasses = ""
  let headlineColor = ""
  let headlineDecoration = ""
  let headlineSize = "text-7xl"
  let textShadowClasses = ""
  let experimentalClasses = "hidden"

  if (data.styles?.headlineSize) {
    headlineSize = data.styles?.headlineSize
  }

  if (theme.typeAndElements === "recruitment") {
    if (data.styles?.typographyPalette === "style-1") {
      headlineClasses = "font-oliviar-sans-black-extended leading-oliviar-sans uppercase";
      textShadowClasses = "text-shadow";
      experimentalClasses = "block wvu-experimental absolute w-100";
     } else if (data.styles?.typographyPalette === "style-2") {
      headlineClasses = "font-oliviar-sans-black-extended leading-oliviar-sans uppercase";
      textShadowClasses = "text-shadow";
      experimentalClasses = "block wvu-experimental absolute w-100";
     } else if (data.styles?.typographyPalette === "style-3") {
      headlineClasses = "font-oliviar-sans-black-extended leading-oliviar-sans uppercase";
      textShadowClasses = "text-shadow";
      experimentalClasses = "block wvu-experimental absolute w-100";
     }
  } else {
    if (data.styles?.typographyPalette === "style-1") {
      headlineClasses = "font-wvu-shout leading-wvu-shout";
     } else if (data.styles?.typographyPalette === "style-2") {
      headlineClasses = "font-iowan-old-style-black leading-iowan-old-style";
     } else if (data.styles?.typographyPalette === "style-3") {
      headlineClasses = "font-iowan-old-style-black-italic leading-iowan-old-style";
     }
  }

  if (data.styles?.headlineColor === '#EAAA00') {
    headlineColor = 'text-wvu-gold'
  } else if (data.styles?.headlineColor === '#002855') {
    headlineColor = 'text-wvu-blue'
  } else if (data.styles?.headlineColor === '#1C2B39') {
    headlineColor = 'text-wvu-accent--blue-dark'
  } else if (data.styles?.headlineColor === '#9DDAE6') {
    headlineColor = 'text-wvu-accent--blue-light'
  } else if (data.styles?.headlineColor === '#0062A3') {
    headlineColor = 'text-wvu-accent--blue'
  } else if (data.styles?.headlineColor === '#FFE539') {
    headlineColor = 'text-wvu-accent--old-gold'
  } else if (data.styles?.headlineColor === '#7F6310') {
    headlineColor = 'text-wvu-accent--yellow'
  } else if (data.styles?.headlineColor === '#F58672') {
    headlineColor = 'text-wvu-accent--sunset'
  } else if (data.styles?.headlineColor === '#F7F7F7') {
    headlineColor = 'text-wvu-neutral--off-white'
  } else if (data.styles?.headlineColor === '#BEB7B3') {
    headlineColor = 'text-wvu-neutral--warm-gray-light'
  } else if (data.styles?.headlineColor === '#554741') {
    headlineColor = 'text-wvu-neutral--warm-gray-dark'
  } else if (data.styles?.headlineColor === '#988E8B') {
    headlineColor = 'text-wvu-neutral--warm-gray-medium'
  } else if (data.styles?.headlineColor === '#F2E6C2') {
    headlineColor = 'text-wvu-neutral--cream'
  } else if (data.styles?.headlineColor === '#B3A169') {
    headlineColor = 'text-wvu-neutral--tan'
  }

  if (theme.typeAndElements === "recruitment") {
    if (data.styles?.headlineDecoration === "wvu-slash") {
      headlineDecoration = "wvu-slash wvu-slash--gradient bg-gradient-to-r from-wvu-accent--sunset to-wvu-gold"
    }
  } else {
    if (data.styles?.headlineDecoration === "wvu-slash") {
      headlineDecoration = "wvu-slash"
    }
  }
  
  return (
    <Section>
      <div
        style={backgroundStyle}
        className={`bg-cover bg-${data.color} ${data.backgroundPosition} ${data.backgroundAttachment}`}
      >
        <Container
          size="large"
          className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center justify-center"
        >
          <div
            className={overlayStyles}
          >
            {data.tagline && (
              <h2
                data-tina-field={tinaField(data, "tagline")}
                className="relative inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font z-20"
              >
                {data.tagline}
                <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
              </h2>
            )}
            {data.headline && (
              <h3
                data-tina-field={tinaField(data, "headline")}
                className={`
                  w-full
                  relative
                  mb-10
                  ${headlineDecoration}
                  ${headlineColor}
                  ${headlineSize}
                  ${headlineClasses}
                `}
              >
                <span className={`${experimentalClasses}`} aria-hidden="true">{data.headline}</span>
                <span className={`${textShadowClasses}`}>{data.headline}</span>
              </h3>
            )}
            {data.text && (
              <div
                data-tina-field={tinaField(data, "text")}
                className={`prose prose-lg mx-auto md:mx-0 mb-10 ${
                  data.color === "primary" ? `prose-primary` : `dark:prose-dark`
                }`}
              >
                <TinaMarkdown content={data.text} />
              </div>
            )}
            {data.actions && (
              <Actions
                className="justify-center md:justify-start py-2"
                parentColor={data.color}
                actions={data.actions}
              />
            )}
          </div>
        </Container>
      </div>
    </Section>
  );
};

export const heroBlockSchema: TinaTemplate = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "Subhead",
      name: "subhead",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      name: "backgroundPosition",
      label: "Background Position",
      options: [
        {
          label: "Bottom",
          value: "bg-bottom",
        },
        {
          label: "Center",
          value: "bg-center",
        },
        {
          label: "Left",
          value: "bg-left",
        },
        {
          label: "Left-Bottom",
          value: "bg-left-bottom",
        },
        {
          label: "Left-Top",
          value: "bg-left-top",
        },
        {
          label: "Right",
          value: "bg-right",
        },
        {
          label: "Right-Bottom",
          value: "bg-right-bottom",
        },
        {
          label: "Right-Top",
          value: "bg-right-top",
        },
        {
          label: "Top",
          value: "bg-top",
        }
      ]
    },
    {
      type: "string",
      name: "backgroundAttachment",
      label: "Background Attachment",
      options: [
        {
          label: "Default",
          value: "",
        },
        {
          label: "Fixed",
          value: "bg-fixed",
        }
      ]
    },
    {
      type: "boolean",
      name: "isBackground",
      label: "Apply Overlay",
    },
    {
      type: "object",
      name: "styles",
      label: "Styles",
      list: true,
      ui: {
        previewSrc: "/blocks/hero.png",
        defaultItem: {
          typographyPalette: {
            type: "string",
            label: "Style 1",
            value: "style-1",
          },
          headline: "This Big Text is Totally Awesome",
          text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
        },
      },
      // @ts-ignore
      fields: [
        {
          type: "string",
          label: "Headline Font",
          name: "headlineFont",
          options: [
            {
              label: "Default",
              value: "font-wvu-shout leading-wvu-shout",
            },
            {
              label: "Helvetica Neue Bold",
              value: "font-helvetica-neue-bold leading-tight",
            },
            {
              label: "Helvetica Neue Thin",
              value: "font-helvetica-neue-thin leading-tight",
            },
            {
              label: "Iowan Old Style",
              value: "font-iowan-old-style leading-iowan-old-style",
            },
            {
              label: "Iowan Old Style Italic",
              value: "font-iowan-old-style-italic leading-iowan-old-style",
            },
            {
              label: "Iowan Old Style Black",
              value: "font-iowan-old-style-black leading-iowan-old-style",
            },
            {
              label: "Iowan Old Style Black Italic",
              value: "font-iowan-old-style-black-italic leading-iowan-old-style",
            },
          ]
        },
        {
          type: "string",
          label: "Typography Palette",
          name: "typographyPalette",
          options: [
            {
              label: "Style 1",
              value: "style-1",
            },
            {
              label: "Style 2",
              value: "style-2",
            },
            {
              label: "Style 3",
              value: "style-3",
            },
          ],
        },
        {
          type: "string",
          label: "Headline Color",
          name: "headlineColor",
          ui: {
            component: 'color',
            colorFormat: 'hex',
            colors: ['#FFFFFF', '#EAAA00', '#002855', '#1C2B39', '#9DDAE6', '#0062A3', '#FFE539', '#7F6310', '#F58672', '#F7F7F7', '#BEB7B3', '#554741', '#988E8B', '#F2E6C2', '#B3A169'],
            widget: 'block',
          }
        },
        {
          type: "string",
          label: "Headline Size",
          name: "headlineSize",
          options: [
            {
              label: "Large",
              value: "text-7xl",
            },
            {
              label: "Medium",
              value: "text-6xl",
            },
            {
              label: "Small",
              value: "text-5xl",
            },
          ]
        },
        {
          type: "string",
          label: "Elements",
          name: "elements",
          options: [
            {
              label: "Style 1",
              value: "style-1",
            },
            {
              label: "Style-2",
              value: "style-2",
            },
            {
              label: "Style-3",
              value: "style-3",
            },
          ]
        },
        {
          type: "string",
          label: "Headline Decoration",
          name: "headlineDecoration",
          options: [
            {
              label: "WVU Bar (Top)",
              value: "wvu-bar",
            },
            {
              label: "WVU Bar (Bottom)",
              value: "wvu-bar wvu-bar--bottom",
            },
            {
              label: "WVU Slash",
              value: "wvu-slash",
            },
          ]
        }
      ]
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      description: "(If no background image)",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};