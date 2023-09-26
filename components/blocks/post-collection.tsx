import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import type { TinaTemplate } from "tinacms";
import {
  PageBlocksPostCollection,
  PageBlocksPostCollectionItems,
} from "../../tina/__generated__/types";
import { PostsType } from "../../pages/posts";
import { tinaField } from "tinacms/dist/react";

export const PostCollectionItems = ({ data }: { data: PageBlocksPostCollectionItems }) => {
  return (
    <div>
      {data.title.name && (
        <h2>{data.title.name}</h2>
      )}
      {data.title.avatar && (
        <img
          className="rounded-full"
          src={data.title.avatar}
        />
      )}
    </div>
  );
};

export const PostCollection = ({ data }: { data: PageBlocksPostCollection }) => {
  const theme = useTheme();
  const i = 0;
  return (
    <Section className="flex-1">
      <Container
        size="large"
        className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center justify-center"
      >
        {data && (
          <h2>My {data.title}</h2>
        )}
        {data.posts &&
          data.posts.map(function (block, i) {
            return (<PostCollectionItems key={i} data={block} />)
          })
        }
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
    {
      name: "posts",
      label: "Authors",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.title.name }),
      },
      fields: [
        {
          type: "string",
          name: "blurb",
          label: "Blurb",
        },
        {
          type: "reference",
          name: "title",
          collections: ['author']
        }
      ],
    },
  ],
};