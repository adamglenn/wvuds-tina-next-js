import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import type { TinaTemplate } from "tinacms";
import {
  PageBlocksPostCollection,
} from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const PostCollection = ({ data }: { data: PageBlocksPostCollection }) => {
  const theme = useTheme();
  return (
    <Section className="flex-1">
      <Container
        size="large"
      >
        {data && (
          <h2 className="font-wvu-shout leading-wvu-shout text-6xl text-wvu-blue wvu-bar mb-12">My {data.title}</h2>
        )}
      </Container>
    </Section>
  );
};

export const postCollectionBlockSchema: TinaTemplate = {
  name: "postCollection",
  label: "Post Collection",
  ui: {
    previewSrc: "/blocks/hero.png",
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Lede",
      name: "lede",
    },
  ],
};