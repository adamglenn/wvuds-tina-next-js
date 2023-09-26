import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import type { TinaTemplate } from "tinacms";
import {
  PageBlocksPostCollection,
  PageBlocksPostCollectionPosts,
} from "../../tina/__generated__/types";
import { PostsType } from "../../pages/posts";
import { tinaField } from "tinacms/dist/react";

export const PostCollectionItems = ({ data }: { data: PageBlocksPostCollectionPosts }) => {
  return (
    <div>
      {data.title?.heroImg && (
        (data.title?.heroImg && (
          <figure className="mb-4"><img src={data.title?.heroImg} /></figure>
        ))
      )}
      {data.title?.title && (
        <h2 className="w-100 text-2xl font-iowan-old-style-black leading-iowan-old-style text-wvu-blue" data-tina-field={tinaField(data, "title")}>{data.title?.title}</h2>
      )}
    </div>
  );
};

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 justify-center">
          {data.posts &&
            data.posts.map(function (block, i) {
              return (<PostCollectionItems key={i} data={block} />)
            })
          }
        </div>
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
          collections: ['post']
        },
      ],
    },
  ],
};