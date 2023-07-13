import { Fragment, type FC } from "react";
import ItemCard from "../ItemCard";
import CardsContainer from "./CardsContainer";
import type { Item, Section } from "../../lib/sanity";

interface Props {
  menu: Item[];
  sections: Section[];
  currentSlugTitle: string;
}

const ShopScrollList: FC<Props> = ({ menu, sections, currentSlugTitle }) => {
  const all = sections.map(section => (
    <Fragment key={section._id}>
      <h2 className="col-span-2 mt-10 min-w-max text-3xl font-bold capitalize leading-none text-brown-700 first:mt-0 lg:col-span-3">
        {section.title}
      </h2>
      {menu
        .filter(item => item.section.slugTitle === section.slugTitle)
        .map(item => (
          <ItemCard item={item} />
        ))}
    </Fragment>
  ));

  const section = menu.map(item => <ItemCard item={item} />);

  return (
    <CardsContainer>
      {currentSlugTitle === "all" ? all : section}
    </CardsContainer>
  );
};

export default ShopScrollList;
