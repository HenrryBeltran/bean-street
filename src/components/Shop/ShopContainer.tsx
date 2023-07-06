import type { FC } from "react";
import {
  type Sections,
  type Menu,
  isMenu,
  getSectionsTitles,
} from "../../lib/sanity";
import ShopScrollList from "./ShopScrollList";
import FilterLinks from "./FilterLinks";
import ShopMainTitle from "./ShopMainTitle";

interface Props {
  data: Menu | Sections;
  searchType: string;
}

const ShopContainer: FC<Props> = ({ data, searchType }) => {
  const getMainShopTitle = (): string => {
    if (isMenu(data)) {
      return "All";
    }

    const section: Sections = data;
    return getSectionsTitles(section);
  };

  const getCountMenu = () => {
    if (isMenu(data)) {
      return Object.values(data).flat().length;
    }

    return data.length;
  };

  return (
    <section className="relative w-full max-w-3xl p-6 pb-16 sm:p-0 sm:pb-24 lg:max-w-6xl  lg:pb-48">
      <div className="z-10 mb-8 hidden w-full bg-beige-100 sm:sticky sm:top-11 sm:block sm:px-8 sm:pb-2 sm:pt-6 lg:top-16 lg:pb-4 lg:pt-8">
        <div className="flex items-center gap-6 after:h-px after:w-full after:bg-brown-300 after:content-['']">
          <ShopMainTitle
            getMainShopTitle={getMainShopTitle}
            getCountMenu={getCountMenu}
          />
        </div>
      </div>

      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:gap-x-6 sm:px-8">
        <div className="min-h-fit w-full sm:sticky sm:top-32 sm:h-fit sm:w-fit lg:top-40">
          <FilterLinks typeParam={searchType} />
        </div>
        <div className="flex items-center gap-6 pt-6 after:h-px after:w-full after:bg-brown-300 after:content-[''] sm:hidden">
          <ShopMainTitle
            getMainShopTitle={getMainShopTitle}
            getCountMenu={getCountMenu}
          />
        </div>
        <div className="min-h-[calc(100lvh-152px-112px)] pt-6 sm:pt-0 md:max-w-5xl">
          <ShopScrollList
            menuData={data}
            getSectionsTitles={getSectionsTitles}
          />
        </div>
      </div>
    </section>
  );
};

export default ShopContainer;
