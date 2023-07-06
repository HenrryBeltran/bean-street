import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const QuantitySelector: FC<Props> = ({ quantity, setQuantity }) => {
  return (
    <div className="flex h-12 items-center border-b border-b-brown-700">
      <div className="flex w-full items-center justify-between px-2">
        <button
          type="button"
          className="relative flex h-12 w-12 items-center justify-center rounded-full transition-colors tap-highlight-transparent hover:bg-beige-200"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(prev => prev - 1);
            }
          }}
        >
          <svg height={16} width={16} className="stroke-brown-700">
            <polyline points="0,8 16,8" strokeWidth="2" />
          </svg>
          <span className="absolute left-1/2 top-1/2 inline-block h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brown-700"></span>
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button
          type="button"
          className="relative flex h-12 w-12 items-center justify-center rounded-full transition-colors tap-highlight-transparent hover:bg-beige-200"
          onClick={() => {
            setQuantity(prev => prev + 1);
          }}
        >
          <svg height={16} width={16} className="stroke-brown-700">
            <polyline points="0,8 16,8" strokeWidth="2" />
            <polyline points="8,16 8,0" strokeWidth="2" />
          </svg>
          <span className="absolute left-1/2 top-1/2 inline-block h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brown-700"></span>
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
