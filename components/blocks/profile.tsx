import React from "react";
import { Section } from "../util/section";
import { PageBlocksContentPlusSidebarProfile } from "../../tina/__generated__/types";

export const Profile = ({ data }: { data: PageBlocksContentPlusSidebarProfile }) => {
  const backgroundStyle = {
    backgroundImage: "url('" + data.selectProfile?.heroImg + "') !important"
  }
    console.log(data.selectProfile)
  return (
    <Section>
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
    </Section>
  )
};