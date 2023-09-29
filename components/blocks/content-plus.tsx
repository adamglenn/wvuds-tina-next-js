import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksContentPlus, PageBlocksContentPlusSidebar, PageBlocksContentPlusBody } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

const components: Components<{
  Callout: {
    data: PageBlocksContentPlusBody;
  };
}> = {
  Callout: (data: {
    data: PageBlocksContentPlusBody;
  }) => {
    return (
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <div
            className="bg-wvu-gold p-12 justify-center border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <h2>{data.message}</h2>
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
        <div className="bg-wvu-gold p-10" data-tina-field={tinaField(data, "callout")}>
          <h3 className={`${data.styles.headingFont}`}>{data.heading}</h3>
          <TinaMarkdown content={data.body} />
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
              components={components}
            />
          </div>
          <div className="col-span-4">
            <h2>Sidebar</h2>
            {data.sidebar.map(function (block, i) {
              return <SidebarBlocks key={i} data={block} />;
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
              type: "object",
              name: "styles",
              label: "Styles",
              templates: [
                {
                  type: "string",
                  label: "Heading Font",
                  name: "headingFont",
                  options: [
                    {
                      label: "Default",
                      value: "font-wvu-shout leading-wvu-shout",
                    },
                    {
                      label: "Helvetica Neue Condensed Black",
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
              ]
            },
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