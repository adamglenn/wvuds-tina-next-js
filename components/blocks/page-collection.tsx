import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import {
  PageBlocksPageCollection,
  PageBlocksCollectionItems,
} from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const CollectionItem = ({
  featuresColor,
  data,
}: {
  featuresColor: string;
  data: PageBlocksCollectionItems;
}) => {
  return (
    <div
      data-tina-field={tinaField(data)}
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: "16rem" }}
    >
      {data.icon && (
        <Icon
          tinaField={tinaField(data, "icon")}
          parentColor={featuresColor}
          data={{ size: "large", ...data.icon }}
        />
      )}
      {data.title && (
        <h3
          data-tina-field={tinaField(data, "title")}
          className="text-2xl font-semibold title-font"
        >
          {data.title}
        </h3>
      )}
      {data.text && (
        <p
          data-tina-field={tinaField(data, "text")}
          className="text-base opacity-80 leading-relaxed"
        >
          {data.text}
        </p>
      )}
    </div>
  );
};

export const PageCollection = ({ data }: { data: PageBlocksPageCollection }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-wrap gap-x-10 gap-y-8 text-left`}
        size="large"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return <CollectionItem featuresColor={data.color} key={i} data={block} />;
          })}
      </Container>
    </Section>
  );
};

export const pageCollectionBlockSchema: TinaTemplate = {
  name: 'pageCollectionBlock',
  label: 'Page Collection',
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: 'This Big Text is Totally Awesome',
      text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Tagline',
      name: 'tagline',
    },
    {
      type: 'string',
      label: 'Headline',
      name: 'headline',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: "reference",
      name: "collectionItems",
      list: true,
      collections: ['pages'],
    }
  ],
}