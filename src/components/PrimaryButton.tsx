import type { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  path?: string;
  buttonClass?: string;
  hoverClass?: string;
}

const PrimaryButton: FC<Props> = ({
  name,
  path = "/",
  buttonClass = "",
  hoverClass = "",
}) => {
  return (
    <a
      href={path}
      className={twMerge(
        "group relative flex items-center overflow-hidden whitespace-nowrap bg-brown-700 px-3 py-1 font-medium text-beige-100",
        buttonClass
      )}
    >
      <span className="z-10">{name}</span>
      <span
        className={twMerge(
          "absolute -bottom-[150%] left-0 h-full w-full bg-red-400 transition-all duration-300 group-hover:bottom-0",
          hoverClass
        )}
      ></span>
    </a>
  );
};

export default PrimaryButton;
