import type { FC } from "react";

interface Props {
  getMainShopTitle: () => string;
  getCountMenu: () => number;
}

const ShopMainTitle: FC<Props> = ({ getMainShopTitle, getCountMenu }) => {
  return (
    <h1 className="whitespace-nowrap text-4xl font-bold capitalize tracking-tight text-brown-800">
      {getMainShopTitle()} <span className="text-3xl">({getCountMenu()})</span>
    </h1>
  );
};

export default ShopMainTitle;
