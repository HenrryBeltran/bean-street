import type { FC } from "react";
import type { Item } from "../lib/sanity";

interface Props {
  item: Item;
}

const AddToCartButton: FC<Props> = ({ item }) => {
  const handleAddToCart = () => {
    console.log(`New ${item.name} Added`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="group relative mt-2 w-full overflow-hidden border-b border-brown-700 tap-highlight-transparent md:mt-3"
    >
      <div className="flex h-8 items-center justify-between px-2 md:h-9">
        <span className="text-sm font-medium text-brown-500 transition-colors group-hover:text-beige-100 md:text-base">
          Add to cart
        </span>
        <div className="relative h-3 w-3">
          <span className="absolute left-1/2 top-1/2 block h-full w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-0 bg-brown-500 transition-colors group-hover:bg-beige-100"></span>
          <span className="absolute left-1/2 top-1/2 block h-full w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-brown-500 transition-colors group-hover:bg-beige-100"></span>
        </div>
      </div>
      <span className="duration-250 absolute top-[110%] -z-10 block h-full w-full bg-brown-700 transition-all group-hover:top-0"></span>
    </button>
  );
};
export default AddToCartButton;
