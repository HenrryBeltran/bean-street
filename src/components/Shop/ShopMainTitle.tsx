import type { FC } from "react";

interface Props {
  mainTitle: string;
  count: number;
}

const ShopMainTitle: FC<Props> = ({ mainTitle, count }) => {
  return (
    <h1 className="max-w-[75%] text-3xl font-bold tracking-tight text-brown-800 sm:max-w-full sm:whitespace-nowrap md:text-4xl">
      <span>{mainTitle} </span>
      <span className="text-2xl md:text-3xl">({count})</span>
    </h1>
  );
};

export default ShopMainTitle;
