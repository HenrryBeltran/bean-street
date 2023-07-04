import { RadioGroup } from "@headlessui/react";
import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  cupSize: string;
  setCupSize: Dispatch<SetStateAction<string>>;
}

const RadioButtonSizeCup: FC<Props> = ({ cupSize, setCupSize }) => {
  return (
    <RadioGroup value={cupSize} onChange={setCupSize} className="space-y-4">
      <RadioGroup.Option value="regular">
        {({ checked }) =>
          radioButtonStyle(checked, "Regular", "12 fl oz", regularCoffeeCup)
        }
      </RadioGroup.Option>
      <RadioGroup.Option value="large">
        {({ checked }) =>
          radioButtonStyle(checked, "Large", "16 fl oz", largeCoffeeCup, true)
        }
      </RadioGroup.Option>
    </RadioGroup>
  );
};

const radioButtonStyle = (
  checked: boolean,
  name: string,
  measure: string,
  svgIcon: (style: string) => JSX.Element,
  hasExtraCharge = false
) => {
  return (
    <div
      className={`flex h-16 items-center justify-between border px-6 ${
        checked ? "border-brown-700 bg-beige-200" : "border-brown-300"
      }`}
    >
      <div className="flex items-center gap-x-6">
        {svgIcon(checked ? "text-brown-700" : "text-brown-500")}
        <div className="flex flex-col">
          <span className="font-bold text-brown-700">{name}</span>
          <span className="font-light text-brown-500">{measure}</span>
        </div>
      </div>
      <span className="font-bold text-brown-700">
        {hasExtraCharge && checked ? "+ $0.50" : ""}
      </span>
    </div>
  );
};

const regularCoffeeCup = (colorClass: string) => (
  <span className={colorClass}>
    <svg
      className="fill-current"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.8744 0.992004H8.37439H7.24927L6.40353 4.3045H5.08813V7.8045H25.9109V4.3045H24.5825L23.6945 0.992004H21.8744ZM23.0296 4.3045H7.95164L8.41441 2.492H21.8744H22.5437L23.0296 4.3045ZM9.41471 30.2418L6.52271 9.27484L8.00864 9.06989L8.7258 14.2693H22.2718L22.989 9.06989L24.4749 9.27484L21.5829 30.2418H20.9288H10.0689H9.41471ZM21.3455 20.9854H9.65216L10.722 28.7418H20.2756L21.3455 20.9854Z" />
    </svg>
  </span>
);

const largeCoffeeCup = (colorClass: string) => (
  <span className={colorClass}>
    <svg
      className="fill-current"
      width="37"
      height="37"
      viewBox="0 0 37 37"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25.4248 2.68549H26.2032L26.9508 5.42352L10.0393 5.42352L10.7513 2.68549H10.7598H25.4248ZM6 5.42352H8.48939L9.59152 1.18549H10.7598H25.4248H27.3485L28.5057 5.42352H31.0007V8.92352L6 8.92352V5.42352ZM11.6842 36.0486L8.42584 10.1852L9.91408 9.99774L10.3616 13.5502H26.6364L27.084 9.99774L28.5722 10.1852L25.3139 36.0486H24.6514H12.3467H11.6842ZM24.6099 29.636H12.3882L13.0071 34.5486H23.991L24.6099 29.636Z" />
    </svg>
  </span>
);

export default RadioButtonSizeCup;
