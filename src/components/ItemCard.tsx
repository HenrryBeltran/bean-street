import type { FC } from "react";
import type { Item } from "../lib/sanity";
import AddToCartButton from "./AddToCartButton";

interface Props {
  item: Item;
}

const CoffeeCard: FC<Props> = ({ item }) => {
  const itemLink = `/shop/item/${item.slugName}`;

  return (
    <div className="mb-4 flex flex-col">
      <a
        href={itemLink}
        className="flex aspect-square w-full items-center justify-center overflow-hidden tap-highlight-transparent"
      >
        <picture className="w-full">
          <source
            srcSet={`${item.imageUrl}?h=360&dpr=1 1x, ${item.imageUrl}?h=360&dpr=2 2x`}
            media="(min-width:768px)"
          />
          <source
            srcSet={`${item.imageUrl}?h=280&dpr=1 1x, ${item.imageUrl}?h=280&dpr=2 2x`}
            media="(min-width:640px)"
          />
          <source
            srcSet={`${item.imageUrl}?h=200&dpr=1 1x, ${item.imageUrl}?h=200&dpr=2 2x`}
            media="(min-width:400px)"
          />
          <source
            srcSet={`${item.imageUrl}?h=120&dpr=1 1x, ${item.imageUrl}?h=120&dpr=2 2x`}
          />
          <img
            width={120}
            height={120}
            className="w-full transition-transform duration-700 hover:scale-105"
            src={`${item.imageUrl}?h=120&dpr=1`}
            alt={item.name}
            style={{
              background: `url(${item.imageUrl}?h=32&blur=200')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            loading="lazy"
          />
        </picture>
      </a>
      <h1 className="mb-auto mt-2 text-sm font-medium text-brown-800 transition-colors hover:text-brown-600 md:mt-3 md:text-base">
        <a href={itemLink}>{item.name}</a>
      </h1>
      <p className="mt-1 font-bold text-brown-600 md:mt-2 md:text-lg">
        $ {item.price.toFixed(2)}
      </p>
      <AddToCartButton item={item} />
    </div>
  );
};

export default CoffeeCard;
