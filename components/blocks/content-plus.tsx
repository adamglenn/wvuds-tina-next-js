import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksContentPlus, PageBlocksContentPlusSidebar, PageBlocksContentPlusMain } from "../../tina/__generated__/types";
import { MainBlocks } from "../util/main-blocks";
import { SidebarBlocks } from "../util/sidebar-blocks";

export const ContentPlus = ({ data }: { data: PageBlocksContentPlus }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`prose prose-lg ${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        size="large"
        width="large"
      >
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-8 not-prose">
            {data.main?.map(function (block, i) {
              return (
                <MainBlocks key={i} data={block} />
              )
            })}
          </div>
          <div className="col-span-4 not-prose">
            {data.sidebar?.map(function (block, i) {
              return (
                <SidebarBlocks key={i} data={block} />
              )
            })}
          </div>
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
      type: "object",
      name: "main",
      label: "Main",
      list: true,
      templates: [
        {
          label: "Rich Text",
          name: "richText",
          fields: [
            {
              name: "textBlock",
              label: "Body Text",
              type: "rich-text",
            }
          ]
        },
        {
          name: "callout",
          label: "Callout",
          fields: [
            {
              name: "heading",
              label: "Heading",
              type: "string",
            },
            {
              name: "body",
              label: "Body",
              type: "rich-text",
            },
            {
              name: "styles",
              label: "Styles",
              type: "string",
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
                }
              ]
            }
          ]
        },
        {
          name: "anotherCallout",
          label: "Another Callout",
          fields: [
            {
              name: "heading",
              label: "Heading",
              type: "string",
            }
          ]
        },
        {
          name: "calendar",
          label: "Calendar Feed",
          fields: [
            {
              name: "embedCode",
              label: "embedCode",
              type: "string",
            }
          ]
        },
        {
          name: "profile",
          label: "Profile",
          fields: [
            {
              name: "selectProfile",
              label: "Select Profile",
              type: "reference",
              collections: ['profiles'],
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "sidebar",
      label: "Sidebar",
      list: true,
      templates: [
        {
          name: "callout",
          label: "Callout",
          fields: [
            {
              name: "heading",
              label: "Heading",
              type: "string",
            },
            {
              name: "body",
              label: "Body",
              type: "rich-text",
            },
            {
              name: "styles",
              label: "Styles",
              type: "string",
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
                }
              ]
            }
          ]
        },
        {
          name: "anotherCallout",
          label: "Another Callout",
          fields: [
            {
              name: "heading",
              label: "Heading",
              type: "string",
            }
          ]
        },
        {
          name: "calendar",
          label: "Calendar Feed",
          fields: [
            {
              name: "embedCode",
              label: "embedCode",
              type: "string",
            }
          ]
        },
        {
          name: "profile",
          label: "Profile",
          fields: [
            {
              name: "selectProfile",
              label: "Select Profile",
              type: "reference",
              collections: ['profiles'],
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