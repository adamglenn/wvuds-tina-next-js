import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { Global } from "../../tina/__generated__/types";

export const Hero = ({ data, themeData }: { data: PageBlocksHero; themeData?: Omit<Global, "id" | "_sys" | "_values"> }) => {
  const theme = useTheme();
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
  let headlineClasses = ""
  let subheadClasses = ""
  if (themeData.theme.typeAndElements === "recruitment") {
    switch (data.styles.typography) {
      case "style-1":
        headlineClasses = "oliviar-sans-black-extended leading-oliviar-sans text-5xl";
      case "style-2":
        headlineClasses = "oliviar-sans-black-extended leading-oliviar-sans text-5xl";
      case "style-3":
        headlineClasses = "oliviar-sans-black-extended leading-oliviar-sans text-5xl";
    }
  } else {
    switch (data.styles.typography) {
      case "style-1":
        headlineClasses = "font-wvu-shout leading-wvu-shout text-5xl";
      case "style-2":
        headlineClasses = "font-iowan-old-style-black leading-iowan-old-style";
      case "style-3":
        headlineClasses = "font-iowan-old-style-black leading-iowan-old-style";
    }
  }
  
  const headlineColorClasses = {
    "wvu-gold": "text-wvu-gold",
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

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
            <div>
              <h2 className="font-oliviar-sans-black-extended inline relative text-7xl uppercase leading-oliviar">
                <span aria-hidden="true" className="wvu-experimental absolute">My Headline</span>
                <span className="text-shadow">My Headline</span>
              </h2>
            </div>
            {/* <div>
              <p className="font-oliviar-sans-black-extended inline relative text-7xl uppercase leading-tight">
                <span aria-hidden="true" className="wvu-experimental absolute">My Subhead</span>
                <span className="text-shadow">My Subhead</span>
              </p>
            </div> */}
            {data.headline && (
              <h3
                data-tina-field={tinaField(data, "headline")}
                className={`w-full relative	mb-10`}
              >
                {data.styles && (
                  <span
                    className={`block ${data.styles?.headlineDecoration} ${data.styles?.headlineColor} ${data.styles?.headlineSize} ${headlineClasses}`}
                  >
                    {data.headline}
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
          label: "Typography",
          name: "typography",
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
          label: "Headline Color",
          name: "headlineColor",
          options: [
            {
              label: "WVU Gold",
              value: "text-wvu-gold",
            },
            {
              label: "WVU Blue",
              value: "text-wvu-blue",
            },
          ]
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