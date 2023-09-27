import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksContent } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

const Callout = ({headerText}) => {
  return (<div className="my-8 flex justify-center w-100 bg-wvu-gold text-wvu-blue p-10">
    <h2 className="mt-0 font-wvu-shout text-7xl text-wvu-blue">
      {headerText}
    </h2>
  </div>)
}

export const Content = ({ data }: { data: PageBlocksContent }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`prose prose-lg ${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        size="large"
        width="large"
      >
        <div data-tina-field={tinaField(data, "body")}>
          <TinaMarkdown
            content={data.body}
            // @ts-ignore
            components={{Callout}}
          />
        </div>
      </Container>
    </Section>
  );
};

export const contentBlockSchema: TinaTemplate = {
  name: "content",
  label: "Content",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      type: "rich-text",
      label: "Body",
      name: "body",
      templates: [
        {
          name: "Callout",
          label: "Callout",
          fields: [
            {
              name: "headerText",
              label: "Header Text",
              type: "string",
            },
            {
              name: "bodyText",
              label: "Body Text",
              type: "rich-text",
            },
            {
              name: "actions",
              label: "Actions",
              type: "object",
              list: true,
              fields: [
                {
                  type: "string",
                  name: "action",
                  label: "Action",
                },
                {
                  type: "string",
                  name: "link",
                  label: "Action",
                }
              ],
            }
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