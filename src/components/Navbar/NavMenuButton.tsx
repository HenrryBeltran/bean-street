import { useEffect, useRef, useState } from "react";
import NavMenuIcon from "./NavMenuIcon";
import DropMenu from "./DropMenu";

const NavMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const topBreadOpen = useRef<SVGAnimateElement>(null);
  const topBreadClose = useRef<SVGAnimateElement>(null);
  const bottomBreadOpen = useRef<SVGAnimateElement>(null);
  const bottomBreadClose = useRef<SVGAnimateElement>(null);
  const dropMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        className="group ml-2.5 flex aspect-square w-12 items-center justify-center lg:hidden"
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
            topBreadOpen.current?.beginElement();
            bottomBreadOpen.current?.beginElement();
            const element = dropMenuRef.current;
            if (element) {
              element.style.display = "block";
            }
          } else {
            setIsOpen(false);
            topBreadClose.current?.beginElement();
            bottomBreadClose.current?.beginElement();
            const element = dropMenuRef.current;
            if (element) {
              element.style.display = "none";
            }
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

      <DropMenu ref={dropMenuRef} />
    </div>
  );
};

export default NavMenuButton;
