import type { FC } from "react";

interface Props {
  typeParam: string;
}

const FilterLinks: FC<Props> = ({ typeParam }) => {
  const idleLink = "hover:text-brown-800 hover:underline";
  const activeLink = "text-brown-800 underline";

  return (
    <div className="flex w-full gap-6 text-sm text-brown-600 sm:w-[150px] sm:flex-col lg:text-base">
      <ul className="basis-1/2 space-y-2 sm:basis-0">
        <li>
          <h3 className="font-bold text-brown-700">Drinks</h3>
        </li>
        <li>
          <a
            href="/shop?type=hot-coffees"
            className={typeParam === "hot-coffees" ? activeLink : idleLink}
          >
            Hot Coffees
          </a>
        </li>
        <li>
          <a
            href="/shop?type=hot-drinks"
            className={typeParam === "hot-drinks" ? activeLink : idleLink}
          >
            Hot Drinks
          </a>
        </li>
        <li>
          <a
            href="/shop?type=cold-coffees"
            className={typeParam === "cold-coffees" ? activeLink : idleLink}
          >
            Cold Coffees
          </a>
        </li>
      </ul>
      <ul className="basis-1/2 space-y-2 sm:basis-0">
        <li>
          <h3 className="font-bold text-brown-700">Food</h3>
        </li>
        <li>
          <a
            href="/shop?type=sandwiches"
            className={typeParam === "sandwiches" ? activeLink : idleLink}
          >
            Sandwiches & more
          </a>
        </li>
        <li>
          <a
            href="/shop?type=pastries"
            className={typeParam === "pastries" ? activeLink : idleLink}
          >
            Pastries
          </a>
        </li>
        {typeParam !== "none" && (
          <li>
            <a href="/shop" className="font-semibold text-brown-700 underline">
              Clear filter
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FilterLinks;
