import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksInfographic } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { ColorPickerInput } from "../../tina/fields/color";
import GlobalData from "../../content/global/index.json";

export const Infographic = ({ data }: { data: PageBlocksInfographic }) => {
  const theme = GlobalData.theme;
  
  const backgroundStyle = {
    backgroundImage: "url('" + data.image?.src + "') !important"
  }
  
  const baseOverlayClasses = "text-white md:row-start-1 text-center md:text-left"
  const overlayClasses = data.isBackground
  let overlayStyles = ""
  
  if (overlayClasses) {
    overlayStyles = "backdrop-blur-sm bg-black/30 p-12 " + baseOverlayClasses
  } else {
    overlayStyles = baseOverlayClasses
  }
  
  let headlineClasses = ""
  let subheadClasses = ""
  let headlineColor = ""
  let headlineDecoration = ""

  if (theme.typeAndElements === "recruitment") {
    if (data.styles?.typographyPalette === "style-1") {
      headlineClasses = "font-oliviar-sans-black-extended leading-oliviar-sans uppercase";
     } else if (data.styles?.typographyPalette === "style-2") {
      headlineClasses = "font-oliviar-sans-black-extended leading-oliviar-sans uppercase";
     } else if (data.styles?.typographyPalette === "style-3") {
      headlineClasses = "font-oliviar-sans-black-extended leading-oliviar-sans uppercase";
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
        className={`bg-cover bg-${data.color} ${data.backgroundPosition} w-full aspect-16/9 grid grid-cols-12 grid-rows-6 gap-4`}
      >
        <div
          className="col-start-2 col-span-4 row-start-2 row-end-4 items-center justify-center"
        >
          <div
            className={`${overlayStyles}`}
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
                className={`w-full relative	mb-10`}
              >
                {data.styles && (
                  <span
                    className={`
                      block
                      ${headlineDecoration}
                      ${headlineColor}
                      ${data.styles?.headlineSize}
                      ${headlineClasses}
                    `}
                  >
                    <span className="block wvu-experimental absolute w-100" aria-hidden="true">{data.headline}</span>
                    <span className="text-shadow">{data.headline}</span>
                  </span>
                )}
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
        </div>
        <div className="col-start-3 col-span-2 row-start-5">
          <div className="bg-wvu-accent--blue-dark text-white p-5">
            <div className="info-callout">
              <h3 className="font-oliviar-sans-black-extended uppercase leading-oliviar-sans text-wvu-gold">Callout Header</h3>
              <p>
                Here is my callout text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const infographicBlockSchema: TinaTemplate = {
  name: "infographic",
  label: "Infographic",
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
          ]
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
              label: "Default",
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