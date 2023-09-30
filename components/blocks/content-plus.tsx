import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksContentPlus, PageBlocksContentPlusSidebar, PageBlocksContentPlusMain } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import useScript from '../util/calendar';

export const MainBlocks = ({
  data,
}: {
  data: any;
}) => {
  switch (data.__typename) {
    case "PageBlocksContentPlusMainRichText":
      return (
        <div className="prose">
          <TinaMarkdown content={data.textBlock} />
        </div>
      )
    case "PageBlocksContentPlusMainProfile":
      console.log("Main Profile:" + (data))
      const backgroundStyle = {
        backgroundImage: "url('" + data.selectProfile?.heroImg + "') !important"
      }
      console.log(data.selectProfile)
      return (
        <div
          className="p-5 bg-black text-white bg-cover"
          style={backgroundStyle}
        >
          <div className="pb-72">
            <h2 className="font-wvu-shout leading-wvu-shout text-wvu-gold text-3xl mb-3">{data.selectProfile?.title}</h2>
            <p className="uppercase text-md font-iowan-old-style-black tracking-wide leading-iowan-old-style">{data.selectProfile?.subhead}</p>
          </div>
          <div>
            <h3>{data.selectProfile?.person?.name}</h3>
          </div>
        </div>
      );
    case "PageBlocksContentPlusMainCallout":
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
    case "PageBlocksContentPlusMainAnotherCallout":
      return (
        <h3>{data.heading}</h3>
      );
    case "PageBlocksContentPlusMainCalendar":
      const calFeed = useScript('https://cal.wvu.edu/widget/view?schools=wvu&departments=athletics&days=90&num=3&container=localist-widget-52631272&template=wvu-design-system-3-across');
      return (
        <div className="text-sm mb-10">
          <h2 className="font-wvu-shout text-3xl text-wvu-blue">Events</h2>
          <div id="localist-widget-52631272" className="localist-widget"></div>
          <ul>
            <li className="grid grid-cols-10 gap-4">
              <div className="col-span-2">
                <div className="bg-wvu-gold pt-2 text-center">
                  <div className="bg-white p-3">
                    <span className="block uppercase font-helvetica-neue-bold leading-4 mb-1">Sep</span>
                    <span className="block text-2xl font-helvetica-neue-light leading-4">30</span>
                  </div>
                </div>
              </div>
              <div className="col-span-8">
                <h2 className="font-helvetica-neue-bold leading-tight text-lg mb-3">
                  <a>
                    West Virginia University Rowing vs Duquesne University
                  </a>
                </h2>
                <p className="leading-tight mb-3">
                  <span className="">All Day<br/>Academic Affairs Office</span>
                </p>
                <p className="leading-tight mb-3">
                  West Virginia University Rowing vs Duquesne University
                  https://wvusports.com/calendar.aspx?game_id=20063&sport_id=12
                </p>
                <a href="#" className="text-xs text-blue-400">
                  View on Calendar <span className="sr-only">: West Virginia University Rowing vs Duquesne University</span> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ml-1 -mr-1 w-6 h-6 opacity-80 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      )
    default:
      return null;
  }
}

export const SidebarBlocks = ({
  data,
}: {
  data: any;
}) => {
  switch (data.__typename) {
    case "PageBlocksContentPlusSidebarProfile":
      const backgroundStyle = {
        backgroundImage: "url('" + data.selectProfile?.heroImg + "') !important"
      }
      console.log(data.selectProfile)
      return (
        <div
          className="p-5 bg-black text-white bg-cover"
          style={backgroundStyle}
        >
          <div className="pb-72">
            <h2 className="font-wvu-shout leading-wvu-shout text-wvu-gold text-3xl mb-3">{data.selectProfile?.title}</h2>
            <p className="uppercase text-md font-iowan-old-style-black tracking-wide leading-iowan-old-style">{data.selectProfile?.subhead}</p>
          </div>
          <div>
            <h3>{data.selectProfile?.person?.name}</h3>
          </div>
        </div>
      );
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
    case "PageBlocksContentPlusSidebarAnotherCallout":
      return (
        <h3>{data.heading}</h3>
      );
    case "PageBlocksContentPlusSidebarCalendar":
      const calFeed = useScript('https://cal.wvu.edu/widget/view?schools=wvu&departments=athletics&days=90&num=3&container=localist-widget-52631272&template=wvu-design-system-3-across');
      return (
        <div className="text-sm mb-10">
          <h2 className="font-wvu-shout text-3xl text-wvu-blue">Events</h2>
          <div id="localist-widget-52631272" className="localist-widget"></div>
          <ul>
            <li className="grid grid-cols-10 gap-4">
              <div className="col-span-2">
                <div className="bg-wvu-gold pt-2 text-center">
                  <div className="bg-white p-3">
                    <span className="block uppercase font-helvetica-neue-bold leading-4 mb-1">Sep</span>
                    <span className="block text-2xl font-helvetica-neue-light leading-4">30</span>
                  </div>
                </div>
              </div>
              <div className="col-span-8">
                <h2 className="font-helvetica-neue-bold leading-tight text-lg mb-3">
                  <a>
                    West Virginia University Rowing vs Duquesne University
                  </a>
                </h2>
                <p className="leading-tight mb-3">
                  <span className="">All Day<br/>Academic Affairs Office</span>
                </p>
                <p className="leading-tight mb-3">
                  West Virginia University Rowing vs Duquesne University
                  https://wvusports.com/calendar.aspx?game_id=20063&sport_id=12
                </p>
                <a href="#" className="text-xs text-blue-400">
                  View on Calendar <span className="sr-only">: West Virginia University Rowing vs Duquesne University</span> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ml-1 -mr-1 w-6 h-6 opacity-80 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      )
    default:
      return null;
  }
}

export const ContentPlus = ({ data }: { data: any }) => {
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