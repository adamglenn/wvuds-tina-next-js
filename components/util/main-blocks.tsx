import React from "react";
import { PageBlocksContentPlusMain } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import {
  PageBlocksPageCollection,
  PageBlocksPageCollectionPages,
} from "../../tina/__generated__/types";
import { useTheme } from "../layout";
import { CalFeed } from "./calendar";
import useScript from '../util/calendar';

export const PageCollectionPages = ({ data, imgClasses, bodyClasses }: { data: PageBlocksPageCollectionPages; imgClasses: string; bodyClasses: string }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {data.page?.heroImg && (
        (data.page?.heroImg && (
          <figure className={`mb-4 mt-0 ${imgClasses}`}><img src={data.page?.heroImg} /></figure>
        ))
      )}
      <div className={`${bodyClasses}`}>
        {data.page?.title && (
          <h2 className="w-100 text-2xl font-iowan-old-style-black leading-iowan-old-style text-wvu-blue mb-4 mt-0">{data.page?.title}</h2>
        )}
        {data.page?.preview && (
          <p className="mb-4 leading-5 text-sm">{data.page?.preview}</p>
        )}
        <a className="text-blue text-sm" href="#">
          Read More <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ml-1 -mr-1 w-6 h-6 opacity-80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
        </a>
      </div>
    </div>
  );
};

export const PageCollection = ({ data, layout }: { data: PageBlocksPageCollection; layout: string }) => {
  let imgClasses = "col-span-12"
  let bodyClasses = "col-span-12"
  if (layout === "vertical") {
    imgClasses = "col-span-4"
    bodyClasses = "col-span-8"
  }
  return (
    <>
      {data &&
        data.map(function (block, i) {
          return (
            <PageCollectionPages key={i} data={block} imgClasses={imgClasses} bodyClasses={bodyClasses} />
          )
        })
      }
    </>
  )
};

export const MainBlocks = ({
  data,
}: {
  data: PageBlocksContentPlusMain;
}) => {
  const theme = useTheme();
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
      return (
        <CalFeed gridClasses="grid grid-cols-1" feed="https://cal.wvu.edu/widget/view?schools=wvu&departments=athletics&days=90&num=3&container=localist-widget-52631272&template=tailwind" />
      )
    case "PageBlocksContentPlusMainPageCollection":
      let gridClasses = ""
      if (data.layout === "vertical") {
        gridClasses = "grid-cols-1 mb-12"
      } else {
        gridClasses = "grid-cols-1 md:grid-cols-4"
      }
      return (
        <div className={`grid ${gridClasses} gap-6 justify-center`}>
          <PageCollection data={data.pages} layout={data.layout} />
        </div>
      )
    default:
      return null;
  }
}