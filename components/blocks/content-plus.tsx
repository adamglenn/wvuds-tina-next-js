import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksContentPlus } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const ContentPlus = ({ data }: { data: PageBlocksContentPlus }) => {
  return (
    <Section>
      <Container
        size="large"
        width="large"
      >
        <div data-tina-field={tinaField(data.main, "body")}>
          <TinaMarkdown content={data.main.body} />
        </div>
      </Container>
    </Section>
  );
};

export const contentPlusBlockSchema: TinaTemplate = {
  name: "contentPlus",
  label: "Content Plus",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      name: "main",
      label: "Main",
      type: "object",
      list: true,
      templates: [
        {
          name: "richText",
          label: "Rich Text",
          fields: [
            {
              type: "rich-text",
              label: "Body",
              name: "body",
            },
          ],
        }
      ]
    },
    {
      name: "sidebar",
      label: "Sidebar",
      type: "object",
      list: true,
      templates: [
        {
          name: "richText",
          label: "Rich Text",
          fields: [
            {
              type: "rich-text",
              label: "Body",
              name: "body",
            },
          ],
        }
      ]
    }
  ]
};