import React from "react";
import { PageBlocksContentPlusSidebar } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import useScript from '../util/calendar';

export const SidebarBlocks = ({
  data,
}: {
  data: PageBlocksContentPlusSidebar;
}) => {
  switch (data.__typename) {
    case "PageBlocksContentPlusSidebarProfile":
      const backgroundStyle = {
        backgroundImage: "url('" + data.selectProfile?.heroImg + "') !important"
      }
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
      const calFeed = useScript('https://cal.wvu.edu/widget/view?schools=wvu&departments=athletics&days=90&num=3&container=localist-widget-52631272&template=tailwind');
      return (
        <div className="text-sm mb-10">
          <h2 className="font-wvu-shout text-3xl text-wvu-blue mb-5">Events</h2>
          <div id="localist-widget-52631272" className="localist-widget"></div>
        </div>
      )
    default:
      return null;
  }
}