import type { FC } from "react";
import type { Menu } from "../../lib/sanity";

interface Props {
  typeParam: string;
  menu: Menu[];
}

const shopTypes = [
  { key: "hot-coffees", value: "Hot Coffees" },
  { key: "hot-drinks", value: "Hot Drinks" },
  { key: "cold-coffees", value: "Cold Coffees" },
  { key: "sandwiches", value: "Sandwiches & more" },
  { key: "pastries", value: "Pastries" },
  { key: "none", value: "All" },
];

const ShopList: FC<Props> = ({ typeParam, menu }) => {
  const title = shopTypes.find(section => section.key === typeParam);

  return (
    <div>
      <div className="flex w-full items-center gap-6 after:h-px after:w-full after:bg-brown-300 after:content-['']">
        <h1 className="min-w-max text-4xl font-bold text-brown-800">{title?.value}</h1>
      </div>
      {menu.map(item => (
        <div key={item._id}>
          <h1>{item.name}</h1>
          <picture className="h-[420px] w-[420px]">
            <img
              width={420}
              height={420}
              src={`https://cdn.sanity.io/images/ydwwqgnu/production/${item.productImage.asset._ref
                .replace("image-", "")
                .replace("-jpg", ".jpg")}?h=320&dpr=2`}
              alt={item.name}
              style={{
                background: `url('https://cdn.sanity.io/images/ydwwqgnu/production/${item.productImage.asset._ref
                  .replace("image-", "")
                  .replace("-jpg", ".jpg")}?h=64&blur=200')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </picture>
        </div>
      ))}
      <div>
        <div>
          <h2>Hot Coffees</h2>
          <div className="grid grid-cols-2">
            <div>Card 1</div>
            <div>Card 2</div>
            <div>Card 3</div>
            <div>Card 4</div>
          </div>
          <h2>Hot Drinks</h2>
          <div className="grid grid-cols-2">
            <div>Card 1</div>
            <div>Card 2</div>
            <div>Card 3</div>
            <div>Card 4</div>
          </div>
          <h2>Cold Coffees</h2>
          <div className="grid grid-cols-2">
            <div>Card 1</div>
            <div>Card 2</div>
            <div>Card 3</div>
            <div>Card 4</div>
          </div>
          <h2>Sandwiches & more</h2>
          <div className="grid grid-cols-2">
            <div>Card 1</div>
            <div>Card 2</div>
            <div>Card 3</div>
            <div>Card 4</div>
          </div>
          <h2>Pastries</h2>
          <div className="grid grid-cols-2">
            <div>Card 1</div>
            <div>Card 2</div>
            <div>Card 3</div>
            <div>Card 4</div>
          </div>
          <h2>Hot Coffees</h2>
          <div className="grid grid-cols-2">
            <div>Card 1</div>
            <div>Card 2</div>
            <div>Card 3</div>
            <div>Card 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
