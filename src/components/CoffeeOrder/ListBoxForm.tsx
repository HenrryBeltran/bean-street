import { Listbox } from "@headlessui/react";
import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  array: string[];
  isMilk?: boolean;
}

const ListBoxForm: FC<Props> = ({ state, setState, array, isMilk = false }) => {
  if (state !== "none" && isMilk) {
    array = array.slice(1);
  }

  return (
    <Listbox value={state} onChange={setState}>
      <div className="relative w-full">
        <Listbox.Button className="global-select-none flex h-12 w-full items-center justify-between border-b border-b-brown-700 px-6">
          <span className="font-medium capitalize text-brown-700">{state}</span>
          <span className="text-brown-700">{downArrow}</span>
        </Listbox.Button>
        <Listbox.Options className="absolute top-[110%] z-10 w-full border border-beige-200 bg-beige-100 py-1 shadow-xl">
          {array.map((item, index) => (
            <Listbox.Option key={index} value={item}>
              {({ selected }) => (
                <div
                  className={`cursor-pointer px-6 py-1.5 capitalize hover:bg-beige-200 ${
                    selected ? "bg-beige-200" : ""
                  }`}
                >
                  <span
                    className={
                      selected
                        ? "font-semibold text-brown-800"
                        : "font-ligth text-brown-600"
                    }
                  >
                    {item}
                  </span>
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

const downArrow = (
  <svg
    className="fill-current"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.29285 5.70719L2.70705 4.29297L7.99999 9.58583L13.2928 4.29297L14.7071 5.70719L8 12.4142L1.29285 5.70719Z" />
  </svg>
);

export default ListBoxForm;
