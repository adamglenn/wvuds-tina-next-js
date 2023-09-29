import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksCallout } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Callout = ({ data }: { data: PageBlocksCallout }) => {
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
    headerStyles = "font-helvetica-neue-light leading-tight text-2xl";
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
};

export const calloutBlockSchema: TinaTemplate = {
  name: "callout",
  label: "Callout",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
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
};