import type { Page, PageBlocks } from "../tina/__generated__/types";
import { Content } from "./blocks/content";
import { ContentPlus } from "./blocks/content-plus";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { Infographic } from "./blocks/infographic";
import { Testimonial } from "./blocks/testimonial";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksContentPlus":
      return <ContentPlus data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksInfographic":
      return <Infographic data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    default:
      return null;
  }
};
