import type { FC } from "react";

interface Props {
  typeParam: string;
}

const FilterLinks: FC<Props> = ({ typeParam }) => {
  const typeLink = (type: string) => {
    return (
      <a
        href={`/shop?type=${type.replaceAll("&", "and")}`}
        className={
          typeParam === type
            ? "global-select-none group font-semibold text-brown-700"
            : "global-select-none group transition-all duration-300 hover:font-semibold hover:text-brown-700"
        }
      >
        <span className="capitalize">
          {type.replaceAll("-", " ")}
          {bullet(type)}
        </span>
      </a>
    );
  };

  const bullet = (type: string) => (
    <span
      className={
        typeParam === type
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
        <li>{typeLink("hot-coffees")}</li>
        <li>{typeLink("hot-drinks")}</li>
        <li>{typeLink("cold-coffees")}</li>
      </ul>
      <ul className="basis-1/2 space-y-2 sm:basis-0">
        <li>
          <h3 className="font-bold text-brown-800">Food</h3>
        </li>
        <li>{typeLink("sandwiches-&-more")}</li>
        <li>{typeLink("pastries")}</li>
        {typeParam !== "none" && (
          <li>
            <a
              href="/shop"
              className="global-select-none group flex items-center font-medium text-red-600/75 transition-all duration-300 hover:font-bold hover:text-red-700"
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
