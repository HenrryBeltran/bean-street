import { useRef, useState } from "react";
import NavMenuIcon from "./NavMenuIcon";
import DropMenu from "./DropMenu";

const NavMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const topBreadOpen = useRef<SVGAnimateElement>(null);
  const topBreadClose = useRef<SVGAnimateElement>(null);
  const bottomBreadOpen = useRef<SVGAnimateElement>(null);
  const bottomBreadClose = useRef<SVGAnimateElement>(null);
  const dropMenuRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <button
        className="group ml-2.5 flex aspect-square w-12 items-center justify-center lg:hidden"
        aria-label={!isOpen ? "Open Drop Menu" : "Close Drop Menu"}
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
            topBreadOpen.current?.beginElement();
            bottomBreadOpen.current?.beginElement();
          } else {
            setIsOpen(false);
            topBreadClose.current?.beginElement();
            bottomBreadClose.current?.beginElement();
          }
        }}
      >
        <NavMenuIcon
          topBreadOpen={topBreadOpen}
          topBreadClose={topBreadClose}
          bottomBreadOpen={bottomBreadOpen}
          bottomBreadClose={bottomBreadClose}
        />
      </button>

      <DropMenu ref={dropMenuRef} isOpen={isOpen} />
    </div>
  );
};

export default NavMenuButton;
