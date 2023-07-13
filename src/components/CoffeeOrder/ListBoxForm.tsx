import { Listbox, Transition } from "@headlessui/react";
import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  array: string[];
  isMilk?: boolean;
}

const ListBoxForm: FC<Props> = ({ state, setState, array, isMilk = false }) => {
  // const hasNone = array.includes("none");

  // if (state !== "none" && isMilk) {
  //   array = array.slice(1);
  // }

  return (
    <Listbox value={state} onChange={setState}>
      <div className="relative w-full">
        <Listbox.Button className="group flex h-12 w-full items-center justify-between border-b border-b-brown-700 px-6 tap-highlight-transparent ui-open:bg-beige-200/70">
          <span className="font-medium capitalize text-brown-700">{state}</span>
          <span className="inline-block text-brown-700 transition-transform duration-200 ui-open:rotate-180">
            {chevronDownIcon}
          </span>
        </Listbox.Button>
        <Transition
          className="absolute top-[110%] z-20"
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="w-fit divide-y divide-brown-200/80 rounded-md border border-beige-200 bg-beige-100/50 py-1 shadow-3xl shadow-brown-700/40 backdrop-blur-lg">
            {array.map((item, index) => (
              <Listbox.Option
                key={index}
                value={item}
                className="flex cursor-pointer gap-x-3 py-3 pl-4 pr-6 capitalize"
              >
                <span className="text-transparent ui-selected:text-brown-700">
                  {checkMarkIcon}
                </span>
                <span className="font-light text-brown-600 ui-selected:font-semibold ui-selected:text-brown-700 ui-active:font-semibold">
                  {item}
                </span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

const checkMarkIcon = (
  <svg
    className="fill-current"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.9111 5.90594L9.04874 19.4629L3.08582 13.5L4.50003 12.0858L8.95132 16.5371L19.406 4.58893L20.9111 5.90594Z" />
  </svg>
);

const chevronDownIcon = (
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
