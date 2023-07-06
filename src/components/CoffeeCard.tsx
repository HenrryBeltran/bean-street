import type { FC } from "react";
import type { Coffee } from "../lib/sanity";
import AddToCartButton from "./AddToCartButton";

interface Props {
  coffee: Coffee;
}

const CoffeeCard: FC<Props> = ({ coffee }) => {
  const coffeeLink = `/shop/${coffee._id}`;

  return (
    <div className="mb-4">
      <a
        href={coffeeLink}
        className="flex aspect-square w-full items-center justify-center overflow-hidden bg-rose-500/30 tap-highlight-transparent"
      >
        <picture className="w-full">
          <source
            srcSet={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
              .replace("image-", "")
              .replace("-jpg", ".jpg")}?h=360&dpr=1=center 1x,
                https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
                  .replace("image-", "")
                  .replace("-jpg", ".jpg")}?h=360&dpr=2=center 2x`}
            media="(min-width:768px)"
          />
          <source
            srcSet={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
              .replace("image-", "")
              .replace("-jpg", ".jpg")}?h=280&dpr=1=center 1x,
                https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
                  .replace("image-", "")
                  .replace("-jpg", ".jpg")}?h=280&dpr=2=center 2x`}
            media="(min-width:640px)"
          />
          <source
            srcSet={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
              .replace("image-", "")
              .replace("-jpg", ".jpg")}?h=220&dpr=1=center 1x,
                https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
                  .replace("image-", "")
                  .replace("-jpg", ".jpg")}?h=220&dpr=2=center 2x`}
            media="(min-width:540px)"
          />
          <source
            srcSet={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
              .replace("image-", "")
              .replace("-jpg", ".jpg")}?h=180&dpr=1=center 1x,
                https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
                  .replace("image-", "")
                  .replace("-jpg", ".jpg")}?h=180&dpr=2=center 2x`}
            media="(min-width:400px)"
          />
          <source
            srcSet={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
              .replace("image-", "")
              .replace("-jpg", ".jpg")}?h=120&dpr=1=center 1x,
                https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
                  .replace("image-", "")
                  .replace("-jpg", ".jpg")}?h=120&dpr=2=center 2x`}
          />
          <img
            width={120}
            height={120}
            className="w-full transition-transform duration-700 hover:scale-105"
            src={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
              .replace("image-", "")
              .replace("-jpg", ".jpg")}?h=120&dpr=1`}
            alt={coffee.name}
            style={{
              background: `url('https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
                .replace("image-", "")
                .replace("-jpg", ".jpg")}?h=32&blur=200')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            loading="lazy"
          />
        </picture>
      </a>
      <h1 className="mt-2 min-h-[40px] font-semibold leading-tight tracking-tight text-brown-800 transition-colors hover:text-brown-600 md:mt-6 md:text-lg lg:text-xl">
        <a href={coffeeLink}>{coffee.name}</a>
      </h1>
      <p className="my-2 text-lg font-extrabold leading-6 text-brown-600 md:text-xl">
        $ {coffee.price.toFixed(2)}
      </p>
      <AddToCartButton coffee={coffee} />
    </div>
  );
};
export default CoffeeCard;
