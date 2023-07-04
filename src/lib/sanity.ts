import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ydwwqgnu",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

export const getMenu = async (): Promise<Menu> => {
  return await client.fetch(`
  {
    'hotCoffees': *[section == 'hot-coffees'] | order(name),
    'hotDrinks': *[section == 'hot-drinks'] | order(name),
    'coldCoffees': *[section == 'cold-coffees'] | order(name),
    'sandwichesAndMore': *[section == 'sandwiches-&-more'] | order(name),
    'pastries': *[section == 'pastries'] | order(name)
  }
`);
};

export const getHotCoffees = async (): Promise<Sections> => {
  return await client.fetch("*[section == 'hot-coffees'] | order(name)");
};

export const getHotDrinks = async (): Promise<Sections> => {
  return await client.fetch("*[section == 'hot-drinks'] | order(name)");
};

export const getColdCoffees = async (): Promise<Sections> => {
  return await client.fetch("*[section == 'cold-coffees'] | order(name)");
};

export const getSandwichesMore = async (): Promise<Sections> => {
  return await client.fetch("*[section == 'sandwiches-&-more'] | order(name)");
};

export const getPastries = async (): Promise<Sections> => {
  return await client.fetch("*[section == 'pastries'] | order(name)");
};

export const getCoffeeById = async (id: string): Promise<Coffee> => {
  return await client.fetch(`*[_id == ${id}]`);
};

export type Menu = {
  hotCoffees: Sections;
  hotDrinks: Sections;
  coldCoffees: Sections;
  sandwichesAndMore: Sections;
  pastries: Sections;
};

export type Coffee = {
  customizeTags: {
    _key: string;
    title: string;
    value: string;
    _type: string;
  }[];
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

export type Sections = Array<Coffee>;

export function isMenu(menu: Menu | Sections): menu is Menu {
  return (menu as Menu).hotCoffees !== undefined;
}

export const getSectionsTitles = (array: Sections): string => {
  return array[0].section.replaceAll("-", " ");
};

export enum MenuSections {
  HOT_COFFEES = "hot-coffees",
  HOT_DRINKS = "hot-drinks",
  COLD_COFFEES = "cold-coffees",
  SANDWICHES_AND_MORE = "sandwiches-and-more",
  PASTRIES = "pastries",
  ALL = "none",
}
