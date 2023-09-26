import * as React from "react";
import type { TinaTemplate } from "tinacms";
import { PageBlocksPageCollection } from "../../tina/__generated__/types";

export const PageCollection = ({ data }: { data: PageBlocksPageCollection }) => {
  return (
    <h2>My {data.name}</h2>
  );
};

export const pageCollectionBlockSchema: TinaTemplate = {
  name: "pageCollectionItems",
  label: "Page Collection Items",
  fields: [
    {
      label: "Name",
      name: "name",
      type: "string",
    } 
  ]
};