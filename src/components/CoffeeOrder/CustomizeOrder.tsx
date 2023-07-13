import { useEffect, useState, type FC } from "react";
import { MenuSections, type Item } from "../../lib/sanity";
import ListBoxForm from "./ListBoxForm";
import QuantitySelector from "./QuantitySelector";
import RadioButtonSizeCup from "./RadioButtonSizeCup";

const CustomizeOrder: FC<{ item: Item }> = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [singlePrice, setSinglePrice] = useState(item.price);
  const [totalPrice, setTotalPrice] = useState(singlePrice);
  const [selectedSweetner, setSelectedSweetener] = useState("");
  const [selectedMilk, setSelectedMilk] = useState("");
  const [cupSize, setCupSize] = useState("regular");
  const [adjustOrder, setAdjustOrder] = useState("");

  useEffect(() => {
    if (item.isADrink) {
      setSelectedSweetener(item.recipe.defaultSweetener?.title || "unknown");
      setSelectedMilk(item.recipe.defaultMilk?.milkType || "unknown");
    }
  }, []);

  useEffect(() => {
    setTotalPrice(singlePrice * quantity);
  }, [singlePrice, quantity]);

  useEffect(() => {
    if (item.isADrink) {
      if (cupSize === "large") {
        setSinglePrice(prevPrice => prevPrice + 0.5);
      } else {
        setSinglePrice(item.price);
      }
    }
  }, [cupSize]);

  let order = (
    <ul className="space-y-8">
      <li className="space-y-4">
        <h3 className="text-xl font-semibold uppercase text-brown-600">
          Quantity
        </h3>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </li>
      <li className="space-y-4">
        <h3 className="text-xl font-semibold uppercase text-brown-600">
          Sweetener
        </h3>
        <ListBoxForm
          state={selectedSweetner}
          setState={setSelectedSweetener}
          array={["none", "sugar"]}
        />
      </li>
      <li className="space-y-4">
        <h3 className="text-xl font-semibold uppercase text-brown-600">Milk</h3>
        <ListBoxForm
          state={selectedMilk}
          setState={setSelectedMilk}
          array={[
            "none",
            "whole milk",
            "nonfat milk",
            "almond milk",
            "coconut milk",
            "oat milk",
          ]}
          isMilk={true}
        />
      </li>
      <li className="space-y-4">
        <h3 className="text-xl font-semibold uppercase text-brown-600">Size</h3>
        <RadioButtonSizeCup cupSize={cupSize} setCupSize={setCupSize} />
      </li>
    </ul>
  );

  if (!item.isADrink) {
    order = (
      <ul className="space-y-8">
        <li className="space-y-4">
          <h3 className="text-xl font-semibold uppercase text-brown-600">
            Quantity
          </h3>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </li>
        <li className="space-y-4">
          <h3 className="text-xl font-semibold uppercase text-brown-600">
            Adjust Order
          </h3>
          <textarea
            name="adjustOrder"
            id="adjustOrder"
            cols={30}
            rows={10}
          ></textarea>
        </li>
      </ul>
    );
  }

  return (
    <div className="space-y-6">
      <span className="text-2xl font-bold text-brown-700">
        $ {totalPrice.toFixed(2)}
      </span>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        className="space-y-12"
      >
        {order}
        <button
          type="submit"
          className="group relative flex w-full items-center justify-center overflow-hidden whitespace-nowrap border-2 border-brown-700 bg-brown-700 py-4 font-medium text-beige-100 tap-highlight-transparent"
        >
          <span className="z-10 text-xl transition group-hover:text-brown-800">
            Add to cart
          </span>
          <span className="absolute -bottom-[150%] left-0 h-full w-full bg-beige-100 transition-all duration-300 group-hover:bottom-0"></span>
        </button>
      </form>
    </div>
  );
};

const isADrink = (type: string) => {
  let value = true;
  const foods = [MenuSections.SANDWICHES_AND_MORE, MenuSections.PASTRIES];

  foods.forEach(foodType => {
    if (foodType === type.replaceAll("&", "and")) {
      value = false;
    }
  });

  return value;
};

export default CustomizeOrder;
