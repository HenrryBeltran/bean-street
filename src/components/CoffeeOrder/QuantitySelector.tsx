import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const QuantitySelector: FC<Props> = ({ quantity, setQuantity }) => {
  return (
    <div className="flex h-12 items-center border-b border-b-brown-700">
      <div className="flex w-full justify-between px-1 text-brown-700">
        <button
          type="button"
          className="global-select-none h-12 w-12 rounded-full text-2xl hover:bg-beige-200"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(prev => prev - 1);
            }
          }}
        >
          -
        </button>
        <span className="font-medium">{quantity}</span>
        <button
          type="button"
          className="global-select-none h-12 w-12 rounded-full text-2xl hover:bg-beige-200"
          onClick={() => {
            setQuantity(prev => prev + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
