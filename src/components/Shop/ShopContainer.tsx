import type { FC } from "react";
import type { Item, Section } from "../../lib/sanity";
import FilterLinks from "./FilterLinks";
import ShopMainTitle from "./ShopMainTitle";
import ShopScrollList from "./ShopScrollList";

interface Props {
  menu: Item[];
  sections: Section[];
  mainTitle: string;
  currentSlugTitle: string;
}

const ShopContainer: FC<Props> = ({
  menu,
  sections,
  mainTitle,
  currentSlugTitle,
}) => {
  return (
    <section className="relative w-full max-w-3xl p-6 pb-16 sm:p-0 sm:pb-24 lg:max-w-6xl  lg:pb-48">
      <div className="z-10 mb-8 hidden w-full bg-beige-100 sm:sticky sm:top-11 sm:block sm:px-8 sm:pb-2 sm:pt-6 lg:top-16 lg:pb-4 lg:pt-8">
        <div className="flex items-center gap-6 after:h-px after:w-full after:bg-brown-300 after:content-['']">
          <ShopMainTitle mainTitle={mainTitle} count={menu.length} />
        </div>
      </div>

      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:gap-x-6 sm:px-8">
        <div className="min-h-fit w-full sm:sticky sm:top-32 sm:h-fit sm:w-fit lg:top-40">
          <FilterLinks
            sections={sections}
            mainTitle={mainTitle}
            currentSlugTitle={currentSlugTitle}
          />
        </div>
        <div className="flex items-center gap-6 pt-6 sm:hidden">
          <ShopMainTitle mainTitle={mainTitle} count={menu.length} />
          <span className="h-px flex-grow bg-brown-300"></span>
        </div>
        <div className="min-h-[calc(100lvh-152px-112px)] pt-6 sm:pt-0 md:max-w-5xl">
          <ShopScrollList
            menu={menu}
            sections={sections}
            currentSlugTitle={currentSlugTitle}
          />
        </div>
      </div>
    </section>
  );
};

export default ShopContainer;
