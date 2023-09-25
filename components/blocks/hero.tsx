import * as React from "react";
import { ColorPickerInput } from "../../tina/fields/color";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  const theme = useTheme();
  // const backgroundImage = {
  //   backgroundImage: "url('" + data.image.src + "') !important"
  // }

  return (
    <div
      className={`bg-cover bg-${data.color}`}
      // style={backgroundImage}
    >
      <Section>
        <Container
          size="large"
          className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center justify-center"
        >
          <div className="backdrop-blur-sm bg-black/30 p-12 text-white row-start-2 md:row-start-1 md:col-span-3 text-center md:text-left">
            {data.tagline && (
              <div
                data-tina-field={tinaField(data, "tagline")}
                className="relative inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font z-20"
              >
                {data.tagline}
                <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
              </div>
            )}
            {data.headline && (
              <h3
                data-tina-field={tinaField(data, "headline")}
                className={`w-full relative	mb-10 text-7xl font-wvuShout text-wvu-gold tracking-normal leading-tight title-font`}
              >
                {data.headline}{data.color}
              </h3>
            )}
            {data.text && (
              <div
                data-tina-field={tinaField(data, "text")}
                className={`prose prose-lg text-white mx-auto md:mx-0 mb-10 ${
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
      </Section>
    </div>
  );
};

export const heroBlockSchema = {
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
      label: "Color",
      name: "color",
      description: "Pick your background color.",
      ui: {
        component: ColorPickerInput,
      },
    },
  ],
};
