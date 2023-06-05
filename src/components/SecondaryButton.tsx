import type { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  path?: string;
  buttonClass?: string;
  hoverClass?: string;
}

const SecondaryButton: FC<Props> = ({
  name,
  path = "/",
  buttonClass = "",
  hoverClass = "",
}) => {
  return (
    <a
      href={path}
      className={twMerge(
        "item-center group relative flex overflow-hidden whitespace-nowrap border-2 border-brown-700 px-3 py-1 font-medium transition-colors hover:text-beige-100",
        buttonClass
      )}
    >
      <span className="z-10">{name}</span>
      <span
        className={twMerge(
          "absolute -bottom-[150%] left-0 h-full w-full bg-brown-700 transition-all duration-300 group-hover:bottom-0",
          hoverClass
        )}
      ></span>
    </a>
  );
};

export default SecondaryButton;
