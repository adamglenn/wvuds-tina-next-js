import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksContentPlus, PageBlocksContentPlusSidebar, SidebarComponents } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

const sidebarComponents: SidebarComponents<{
  Styles: {
    headerFont: string;
  };
}> = {
  Styles: (data: {
    headerFont: string;
  }) => {
    return (
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <div
            className="bg-wvu-gold p-12 justify-center border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <h2 className={`${data.headerFont}`}></h2>
          </div>
        </div>
      </div>
    )
  },
};

export const SidebarBlocks = ({
  data,
}: {
  data: PageBlocksContentPlusSidebar;
}) => {
  switch (data.__typename) {
    case "PageBlocksContentPlusSidebarCallout":
      return (
        <div
          className="drop-shadow-xl bg-wvu-gold p-10 mb-10"
          data-tina-field={tinaField(data, "callout")}
        >
          <h3
            className={`mt-0 mb-4 ${data.style === "style-1" ? `font-wvu-shout text-3xl text-wvu-blue leading-wvu-shout` : `font-helvetica-neue-bold leading-tighter`
            }`}
          >
            {data.heading}
          </h3>
          <div className="text-sm">
            <TinaMarkdown content={data.body} />
          </div>
        </div>
      );
    case "PageBlocksContentPlusSidebarAnotherCallout":
      return (
        <h3>{data.heading}</h3>
      );
    default:
      return null;
  }
}

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
          <div className="col-span-8" data-tina-field={tinaField(data, "body")}>
            <TinaMarkdown
              content={data.body}
            />
          </div>
          <div className="col-span-4 not-prose">
            {data.sidebar.map(function (block, i) {
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
      type: "rich-text",
      label: "Body",
      name: "body",
      isBody: true,
      templates: [
        {
          name: "Callout",
          label: "Callout",
          fields: [
            {
              name: "message",
              label: "Heading",
              type: "string",
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
              type: "object",
              templates: [
                {
                  name: "headerFont",
                  label: "HeaderFont",
                  type: "string",
                  options: [
                    {
                      label: "Default",
                      value: "font-wvu-shout leading-wvu-shout text-3xl",
                    },
                    {
                      label: "WVU Shout",
                      value: "font-wvu-shout leading-wvu-shout text-3xl",
                    },
                    {
                      label: "Iowan Old Style",
                      value: "font-iowan-old-style leading-iowan-old-style text-3xl",
                    },
                  ]
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