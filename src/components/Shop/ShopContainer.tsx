import { useEffect, useState } from "react";
import ShopList from "./ShopList";
import FilterLinks from "./FilterLinks";
import { getMenu, type Menu } from "../../lib/sanity";

const ShopContainer = () => {
  const [typeParam, setTypeParam] = useState<string | null>(null);
  const [menu, setMenu] = useState<Menu[] | null>(null);

  useEffect(() => {
    // Get url query params
    const keys = window.location.search;
    const urlParams = new URLSearchParams(keys);
    setTypeParam(urlParams.get("type") || "none");

    // Ask what param type is getting to then, query the exact data I need.

    // Get Sanity CMS data
    getMenu().then(data => setMenu(data));
  }, []);

  if (!typeParam || !menu) {
    return (
      <section className="flex w-full flex-col">
        <div className="min-h-[152px] w-full p-6">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex w-full flex-col">
      <div className="min-h-[152px] w-full p-6">
        <FilterLinks typeParam={typeParam} />
      </div>

      <div className="min-h-[calc(100lvh-152px-112px)] px-6 pb-11 pt-4">
        <ShopList typeParam={typeParam} menu={menu} />
      </div>
    </section>
  );
};
export default ShopContainer;
