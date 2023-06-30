import { Fragment, type FC } from "react";
import { isMenu, Menu, Sections } from "../../lib/sanity";
import CoffeeCard from "../CoffeeCard";
import CardsContainer from "./CardsContainer";

interface Props {
  menuData: Menu | Sections;
  getSectionsTitles: (array: Sections) => string;
}

const ShopScrollList: FC<Props> = ({ menuData, getSectionsTitles }) => {
  const renderCofees = (data: Menu | Sections) => {
    if (isMenu(data)) {
      return (
        <CardsContainer>
          {Object.values(data).map((sections, index) => (
            <Fragment key={index}>
              <h2 className="col-span-2 mt-10 min-w-max text-3xl font-bold capitalize leading-none text-brown-700 first:mt-0 lg:col-span-3">
                {getSectionsTitles(sections)}
              </h2>
              {sections.map(coffees => (
                <CoffeeCard key={coffees._id} coffee={coffees} />
              ))}
            </Fragment>
          ))}
        </CardsContainer>
      );
    } else {
      return (
        <CardsContainer>
          {data.map(coffees => (
            <CoffeeCard key={coffees._id} coffee={coffees} />
          ))}
        </CardsContainer>
      );
    }
  };

  return <>{renderCofees(menuData)}</>;
};

export default ShopScrollList;
