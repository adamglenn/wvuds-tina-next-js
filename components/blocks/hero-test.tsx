import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksHeroTest } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const HeroTest = ({ data }: { data: PageBlocksHeroTest }) => {
  const theme = useTheme();
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
  const bgImage = data.isBackground

  return (
    <Section color={data.color}>
      <Container
        size="large"
        className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center justify-center"
      >
        <div className="row-start-2 md:row-start-1 md:col-span-3 text-center md:text-left">
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
                  className={`block ${data.styles.headlineDecoration} ${data.styles.headlineColor} ${data.styles.headlineSize} ${data.styles.headlineFont}`}
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
        </div>
        {data.image && (
          <div
            data-tina-field={tinaField(data.image, "src")}
            className="relative row-start-1 md:col-span-2 flex justify-center"
          >
            <img
              className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              src={data.image.src}
              aria-hidden="true"
            />
            <img
              className="relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )}
      </Container>
    </Section>
  );
};

export const heroTestBlockSchema: TinaTemplate = {
  name: "heroTest",
  label: "Hero Test",
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
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};