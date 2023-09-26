import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksContentTest } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

const Callout = ({message}) => {
  if(!message) {
    return null
  }
  return (<div className="mt-8 flex justify-center">
    <div className="inline-flex rounded-md shadow">
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        {message}
      </a>
    </div>
  </div>)
}

export const ContentTest = ({ data }: { data: PageBlocksContent }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`prose prose-lg ${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        data-tina-field={tinaField(data, "body")}
        size="large"
        width="medium"
      >
        <TinaMarkdown
          content={data.body}
          components={{Callout}}
        />
      </Container>
    </Section>
  );
};

export const contentTestBlockSchema: TinaTemplate = {
  name: "contentTest",
  label: "Content Test",
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
          fields: [{
            name: "message",
            label: "Message",
            type: "string"
          }]
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