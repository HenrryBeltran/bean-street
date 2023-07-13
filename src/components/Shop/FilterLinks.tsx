import type { FC } from "react";
import type { Section } from "../../lib/sanity";

interface Props {
  sections: Section[];
  mainTitle: string;
  currentSlugTitle: string;
}

const FilterLinks: FC<Props> = ({ sections, mainTitle, currentSlugTitle }) => {
  const typeLink = (title: string, slug: string) => {
    return (
      <a
        href={`/shop/${slug}`}
        className={
          currentSlugTitle === slug
            ? "group font-semibold text-brown-700 tap-highlight-transparent"
            : "group transition-all duration-300 tap-highlight-transparent hover:font-semibold hover:text-brown-700"
        }
      >
        <span className="capitalize">
          {title}
          {bullet(slug)}
        </span>
      </a>
    );
  };

  const bullet = (slug: string) => (
    <span
      className={
        currentSlugTitle === slug
          ? "ml-1 inline-block scale-125"
          : "ml-1 inline-block scale-0 transition-transform duration-300 group-hover:scale-125"
      }
    >
      &bull;
    </span>
  );

  return (
    <div className="flex w-full gap-6 text-sm text-brown-600 sm:w-[120px] sm:flex-col lg:w-[150px] lg:text-base">
      <ul className="basis-1/2 space-y-2 sm:basis-0">
        <li>
          <h3 className="font-bold text-brown-800">Drinks</h3>
        </li>
        {sections
          .filter(section => section.isADrink)
          .map(section => (
            <li>{typeLink(section.title, section.slugTitle)}</li>
          ))}
      </ul>
      <ul className="basis-1/2 space-y-2 sm:basis-0">
        <li>
          <h3 className="font-bold text-brown-800">Food</h3>
        </li>
        {sections
          .filter(section => !section.isADrink)
          .map(section => (
            <li>{typeLink(section.title, section.slugTitle)}</li>
          ))}
        {currentSlugTitle !== "all" && (
          <li>
            <a
              href="/shop"
              className="group flex items-center font-medium text-red-600/75 transition-all duration-300 tap-highlight-transparent hover:font-bold hover:text-red-700"
            >
              Clear filter{" "}
              <div className="relative ml-1 h-3 w-3 transition-transform duration-500 group-hover:rotate-180">
                <span className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rotate-45 bg-[#e05654] group-hover:bg-red-700"></span>
                <span className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rotate-[-45deg] bg-[#e05654] group-hover:bg-red-700"></span>
              </div>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FilterLinks;
