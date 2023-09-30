import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import type { TinaTemplate } from "tinacms";
import {
  PageBlocksPostCollection,
  Post,
} from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const PostCollectionItems = ({ data }: {
  data: {
    __typename: Post,
    heroImg: string;
    title: string;
    preview: string;
  }
}) => {
  return (
    <div>
      {data.heroImg && (
        (data.heroImg && (
          <figure className="mb-4"><img src={data.heroImg} /></figure>
        ))
      )}
      {data.title && (
        <h2 className="w-100 text-2xl font-iowan-old-style-black leading-iowan-old-style text-wvu-blue mb-4" data-tina-field={tinaField(data, "title")}>{data.title}</h2>
      )}
      {data.preview && (
        <p className="mb-4">{data.preview}</p>
      )}
      <a className="text-blue" href="#">
        Read More <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ml-1 -mr-1 w-6 h-6 opacity-80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
      </a>
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
            data.posts?.map(function (block, i) {
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