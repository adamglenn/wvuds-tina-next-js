import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import type { TinaTemplate } from "tinacms";
import {
  PageBlocksPostCollection,
} from "../../tina/__generated__/types";
import { PostsType } from "../../pages/posts";
import { tinaField } from "tinacms/dist/react";

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
            return (
              <div key={i}>
                {block.title.name && (
                  <h2>{block.title.name}</h2>
                )}
                {block.title.avatar && (
                  <img
                    className="rounded-full"
                    src={block.title.avatar}
                  />
                )}
              </div>
            );
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
      label: "Posts",
      type: "object",
      list: true,
      fields: [
        {
          type: "reference",
          name: "title",
          collections: ['author']
        }
      ],
    },
  ],
};