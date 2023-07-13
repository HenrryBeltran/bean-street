import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ydwwqgnu",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

export const getMenu = async (): Promise<Item[]> => {
  return await client.fetch(`
    *[_type == 'menu'] 
    | order(name asc) 
    | order(section -> priorityOrder asc) {
      _id,
      _type,
      name,
      tip,
      description,
      price,
      'imageUrl': productImage.asset -> url,
      'slugName': slugName.current,
      isADrink,
      section -> { title, 'slugTitle': slugTitle.current, priorityOrder },
      'recipe': {
        defaultCupSize -> { _id, _type, name, measure, chargePrice },
        cupSizeList[] -> { _id, _type, name, measure, chargePrice },
        defaultSweetener -> { _id, _type, title },
        sweetenerList[] -> { _id, _type, title },
        haveMilk,
        defaultMilk -> { _id, _type, milkType, chargePrice },
        milkList[] -> { _id, _type, milkType },
        haveWarmedField,
      }
    }
  `);
};

export const getSection = async (slugSection: string): Promise<Item[]> => {
  return await client.fetch(`
    *[_type == 'menu' && section -> slugTitle.current == '${slugSection}']
    | order(name asc) {
      _id,
      _type,
      name,
      tip,
      description,
      price,
      'imageUrl': productImage.asset -> url,
      'slugName': slugName.current,
      isADrink,
      section -> { title, 'slugTitle': slugTitle.current, priorityOrder },
      'recipe': {
        defaultCupSize -> { _id, _type, name, measure, chargePrice },
        cupSizeList[] -> { _id, _type, name, measure, chargePrice },
        defaultSweetener -> { _id, _type, title },
        sweetenerList[] -> { _id, _type, title },
        haveMilk,
        defaultMilk -> { _id, _type, milkType, chargePrice },
        milkList[] -> { _id, _type, milkType },
        haveWarmedField,
      }
    }
  `);
};

export const getItemBySlugName = async (slugName: string): Promise<Item> => {
  return await client.fetch(`
    *[_type == 'menu' && slugName.current == '${slugName}'] {
      _id,
      name,
      tip,
      description,
      price,
      'imageUrl': productImage.asset -> url,
      'slugName': slugName.current,
      isADrink,
      section -> { title, 'slugTitle': slugTitle.current, priorityOrder },
      'recipe': {
        defaultCupSize -> { _id, _type, name, measure, chargePrice },
        cupSizeList[] -> { _id, _type, name, measure, chargePrice },
        defaultSweetener -> { _id, _type, title },
        sweetenerList[] -> { _id, _type, title },
        haveMilk,
        defaultMilk -> { _id, _type, milkType, chargePrice },
        milkList[] -> { _id, _type, milkType },
        haveWarmedField,
      }
    }
  `);
};

export const getMenuSections = async (): Promise<Section[]> => {
  return await client.fetch(`
    *[_type == 'menuSections'] 
      | order(priorityOrder asc) {
        _id,
        _type,
        _createdAt,
        title,
        'slugTitle': slugTitle.current,
        isADrink,
    }
  `);
};

export const getAllOfferts = async (): Promise<Offert[]> => {
  return await client.fetch(`
    *[_type == 'offerts'] {
      _id,
      _type,
      _createdAt,
      title,
      description,
      linkName,
      link,
      discount,
      applyToNewUsers,
      applyToShipping,
      applyToSections[] -> { _id, _type, title, 'slugTitle': slugTitle.current },
    }
  `);
};

export enum MenuSections {
  HOT_COFFEES = "hot-coffees",
  HOT_DRINKS = "hot-drinks",
  COLD_COFFEES = "cold-coffees",
  SANDWICHES_AND_MORE = "sandwiches-and-more",
  PASTRIES = "pastries",
  ALL = "none",
}

export type Item = {
  _type: string;
  name: string;
  imageUrl: string;
  slugName: string;
  isADrink: boolean;
  section: {
    title: string;
    slugTitle: string;
    priorityOrder: number;
  };
  _id: string;
  tip: string;
  description: string;
  price: number;
  recipe: {
    defaultCupSize: {
      _type: string;
      name: string;
      measure: string;
      chargePrice: number;
      _id: string;
    } | null;
    cupSizeList:
      | {
          _id: string;
          _type: string;
          name: string;
          measure: string;
          chargePrice: number;
        }[]
      | null;
    defaultSweetener: {
      _id: string;
      _type: string;
      title: string;
    } | null;
    sweetenerList:
      | {
          _id: string;
          _type: string;
          title: string;
        }[]
      | null;
    haveMilk: boolean;
    defaultMilk: {
      _id: string;
      _type: string;
      milkType: string;
      chargePrice: number;
    } | null;
    milkList:
      | {
          _id: string;
          _type: string;
          milkType: string;
        }[]
      | null;
    haveWarmedField: boolean | null;
  };
};

export type Section = {
  _id: string;
  _type: string;
  _createdAt: string;
  title: string;
  slugTitle: string;
  isADrink: boolean;
};

export type Offert = {
  _id: string;
  title: string;
  description: string;
  linkName: string;
  discount: number;
  applyToSections:
    | {
        _id: string;
        _type: string;
        title: string;
        slugTitle: string;
      }[]
    | null;
  _type: string;
  _createdAt: Date;
  link: string;
  applyToNewUsers: boolean;
  applyToShipping: boolean;
};
