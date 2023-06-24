import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ydwwqgnu",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-06-23",
});

export async function getMenu() {
  const menu = await client.fetch('*[_type == "menu"]');
  return menu;
}

export type Menu = {
  customizeTags: [
    {
      _key: string;
      title: string;
      value: string;
      _type: string;
    },
    {
      title: string;
      value: string;
      _type: string;
      _key: string;
    },
    {
      _type: string;
      _key: string;
      title: string;
      value: string;
    }
  ];
  _rev: string;
  description: string;
  section: string;
  _type: string;
  name: string;
  tip: string;
  _id: string;
  _updatedAt: string;
  productImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: number;
  _createdAt: string;
};
