import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksContentPlus, PageBlocksContentPlusSidebar } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const SidebarBlocks = ({
  data,
}: {
  data: PageBlocksContentPlusSidebar;
}) => {
  switch (data.__typename) {
    case "PageBlocksContentPlusSidebarCallout":
      let containerStyles = "bg-wvu-gold text-wvu-blue";
      let headerStyles = "font-wvu-shout leading-wvu-shout text-3xl";
      if (data.styles === "style-1") {
        containerStyles = "bg-wvu-gold text-wvu-blue";
        headerStyles = "font-wvu-shout leading-wvu-shout text-3xl";
      }
      if (data.styles === "style-1") {
        containerStyles = "bg-wvu-gold text-wvu-blue";
        headerStyles = "font-wvu-shout leading-wvu-shout text-3xl";
      }
      if (data.styles === "style-2") {
        containerStyles = "bg-wvu-blue text-white";
        headerStyles = "font-iowan-old-style-black leading-iowan-old-style text-2xl text-wvu-gold";
      }
      if (data.styles === "style-3") {
        containerStyles = "bg-wvu-accent--blue-light text-wvu-blue";
        headerStyles = "font-helvetica-neue-light leading-tighter text-2xl";
      }
      return (
        <div
          className={`drop-shadow-xl p-10 mb-10 ${containerStyles}`}
        >
          <h3
            className={`mt-0 mb-4 ${headerStyles}`}
            data-tina-field={tinaField(data, "heading")}
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
    case "PageBlocksContentPlusSidebarCalendar":
      return (
        <div>{data.embedCode}</div>
      )
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