import type { FC } from "react";
import type { Section } from "../lib/sanity";
import AddToCartButton from "./AddToCartButton";

interface Props {
  coffee: Section;
}

const CoffeeCard: FC<Props> = ({ coffee }) => {
  return (
    <div className="mb-4">
      <picture>
        <source
          srcSet={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
            .replace("image-", "")
            .replace("-jpg", ".jpg")}?h=560&dpr=1 1x,
              https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
                .replace("image-", "")
                .replace("-jpg", ".jpg")}?h=560&dpr=2 2x`}
          media="(min-width:1280px)"
        />
        <source
          srcSet={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
            .replace("image-", "")
            .replace("-jpg", ".jpg")}?h=420&dpr=1 1x,
              https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
                .replace("image-", "")
                .replace("-jpg", ".jpg")}?h=420&dpr=2 2x`}
          media="(min-width:720px)"
        />
        <source
          srcSet={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
            .replace("image-", "")
            .replace("-jpg", ".jpg")}?h=300&dpr=1 1x,
              https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
                .replace("image-", "")
                .replace("-jpg", ".jpg")}?h=300&dpr=2 2x`}
          media="(min-width:400px)"
        />
        <source
          srcSet={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
            .replace("image-", "")
            .replace("-jpg", ".jpg")}?h=200&dpr=1 1x,
              https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
                .replace("image-", "")
                .replace("-jpg", ".jpg")}?h=200&dpr=2 2x`}
        />
        <img
          width={180}
          height={180}
          className="aspect-square w-full"
          src={`https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
            .replace("image-", "")
            .replace("-jpg", ".jpg")}?h=200&dpr=1`}
          alt={coffee.name}
          style={{
            background: `url('https://cdn.sanity.io/images/ydwwqgnu/production/${coffee.productImage.asset._ref
              .replace("image-", "")
              .replace("-jpg", ".jpg")}?h=32&blur=200')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          loading="lazy"
        />
      </picture>
      <h1 className="mt-2 min-h-[40px] font-semibold leading-tight tracking-tight text-brown-800 md:mt-6 md:text-lg lg:text-xl">
        {coffee.name}
      </h1>
      <p className="my-2 text-lg font-extrabold leading-6 text-brown-600 md:text-xl">
        $ {coffee.price.toFixed(2)}
      </p>
      <AddToCartButton coffee={coffee} />
    </div>
  );
};
export default CoffeeCard;
