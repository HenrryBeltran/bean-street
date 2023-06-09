import type { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  path?: string;
  buttonClass?: string;
  hoverClass?: string;
  ariaLabel: string;
}

const PrimaryButton: FC<Props> = ({
  name,
  path = "/",
  buttonClass = "",
  hoverClass = "",
  ariaLabel,
}) => {
  return (
    <a
      href={path}
      className={twMerge(
        "group relative flex items-center overflow-hidden whitespace-nowrap border-2 border-brown-700 bg-brown-700 px-3 py-1 font-medium text-beige-100 tap-highlight-transparent",
        buttonClass
      )}
      aria-label={ariaLabel}
    >
      <span className="z-10 transition group-hover:text-brown-800">{name}</span>
      <span
        className={twMerge(
          "absolute -bottom-[150%] left-0 h-full w-full bg-beige-100 transition-all duration-300 group-hover:bottom-0",
          hoverClass
        )}
      ></span>
    </a>
  );
};

export default PrimaryButton;
