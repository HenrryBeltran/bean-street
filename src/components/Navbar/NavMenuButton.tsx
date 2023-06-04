import { useRef, useState } from "react";
import NavMenuIcon from "./NavMenuIcon";

const NavMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const topBreadOpen = useRef<SVGAnimateElement>(null);
  const topBreadClose = useRef<SVGAnimateElement>(null);
  const bottomBreadOpen = useRef<SVGAnimateElement>(null);
  const bottomBreadClose = useRef<SVGAnimateElement>(null);

  return (
    <button
      className="group ml-2.5 flex aspect-square w-12 items-center justify-center lg:hidden"
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
  );
};

export default NavMenuButton;
