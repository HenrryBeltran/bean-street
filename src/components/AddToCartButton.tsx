import type { FC } from "react";
import type { Section } from "../lib/sanity";

interface Props {
  coffee: Section;
}

const AddToCartButton: FC<Props> = ({ coffee }) => {
  const handleAddToCart = () => {
    console.log(`New ${coffee.name} Added`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="global-select-none group relative w-full overflow-hidden border-b border-brown-700"
    >
      <div className="flex h-10 items-center justify-between px-2">
        <span className="text-brown-600 transition-colors group-hover:text-beige-100 md:text-lg">
          Add to cart
        </span>
        <div className="relative h-4 w-4">
          <span className="absolute left-1/2 top-1/2 block h-full w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-0 bg-brown-600 transition-colors group-hover:bg-beige-100"></span>
          <span className="absolute left-1/2 top-1/2 block h-full w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-brown-600 transition-colors group-hover:bg-beige-100"></span>
        </div>
      </div>
      <span className="duration-250 absolute top-[110%] -z-10 block h-full w-full bg-brown-700 transition-all group-hover:top-0"></span>
    </button>
  );
};
export default AddToCartButton;
