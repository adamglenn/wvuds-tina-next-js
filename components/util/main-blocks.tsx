import React from "react";
import { PageBlocksContentPlusMain } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import {
  PageBlocksPageCollection,
  PageBlocksPageCollectionPages,
} from "../../tina/__generated__/types";
import { useTheme } from "../layout";
import useScript from '../util/calendar';

export const PageCollectionPages = ({ data }: { data: PageBlocksPageCollectionPages }) => {
  return (
    <div>
      {data.page?.heroImg && (
        (data.page?.heroImg && (
          <figure className="mb-4"><img src={data.page?.heroImg} /></figure>
        ))
      )}
      {data.page?.title && (
        <h2 className="w-100 text-2xl font-iowan-old-style-black leading-iowan-old-style text-wvu-blue mb-4">{data.page?.title}</h2>
      )}
      <a className="text-blue" href="#">
        Read More <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ml-1 -mr-1 w-6 h-6 opacity-80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
      </a>
    </div>
  );
};

export const PageCollection = ({ data }: { data: PageBlocksPageCollection }) => {
  const theme = useTheme();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 justify-center">
      {data.pages &&
        data.pages?.map(function (block, i) {
          return (<PageCollectionPages key={i} data={block} />)
        })
      }
    </div>
  );
};

export const MainBlocks = ({
  data,
}: {
  data: PageBlocksContentPlusMain;
}) => {
  switch (data.__typename) {
    case "PageBlocksContentPlusMainRichText":
      return (
        <div>
          <TinaMarkdown content={data.textBlock} />
        </div>
      )
    case "PageBlocksContentPlusMainProfile":
      const backgroundStyle = {
        backgroundImage: "url('" + data.selectProfile?.heroImg + "') !important"
      }
      console.log(data.selectProfile)
      return (
        <div
          className="p-10 bg-black text-white bg-cover mb-10 not-prose"
          style={backgroundStyle}
        >
          <div className="pb-72">
            <h2 className="font-wvu-shout leading-wvu-shout text-wvu-gold text-5xl mb-3">{data.selectProfile?.title}</h2>
            <p className="uppercase text-xl text-md font-iowan-old-style-black tracking-wide leading-iowan-old-style">{data.selectProfile?.subhead}</p>
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
          className={`drop-shadow-xl p-10 mb-10 ${containerStyles} not-prose`}
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
    case "PageBlocksContentPlusMainPageCollection":
      return (
        <PageCollection data={data.pageCollection} />
      )
    default:
      return null;
  }
}