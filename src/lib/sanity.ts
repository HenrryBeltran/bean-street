import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ydwwqgnu",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

export async function getMenu() {
  return await client.fetch(`
  {
    'hotCoffees': *[section == 'hot-coffees'] | order(name),
    'hotDrinks': *[section == 'hot-drinks'] | order(name),
    'coldCoffees': *[section == 'cold-coffees'] | order(name),
    'sandwichesAndMore': *[section == 'sandwiches-&-more'] | order(name),
    'pastries': *[section == 'pastries'] | order(name)
  }
`);
}

export async function getHotCoffees() {
  return await client.fetch("*[section == 'hot-coffees'] | order(name)");
}

export async function getHotDrinks() {
  return await client.fetch("*[section == 'hot-drinks'] | order(name)");
}

export async function getColdCoffees() {
  return await client.fetch("*[section == 'cold-coffees'] | order(name)");
}

export async function getSandwichesMore() {
  return await client.fetch("*[section == 'sandwiches-&-more'] | order(name)");
}

export async function getPastries() {
  return await client.fetch("*[section == 'pastries'] | order(name)");
}

export type Menu = {
  hotCoffees: Sections;
  hotDrinks: Sections;
  coldCoffees: Sections;
  sandwichesAndMore: Sections;
  pastries: Sections;
};

export type Section = {
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

export type Sections = Array<Section>;

export function isMenu(menu: Menu | Sections): menu is Menu {
  return (menu as Menu).hotCoffees !== undefined;
}
