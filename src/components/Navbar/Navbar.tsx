import { useRef, useState } from "react";
import NavMenuIcon from "./NavMenuIcon";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const topBreadOpen = useRef<SVGAnimateElement>(null);
  const topBreadClose = useRef<SVGAnimateElement>(null);
  const bottomBreadOpen = useRef<SVGAnimateElement>(null);
  const bottomBreadClose = useRef<SVGAnimateElement>(null);

  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`sticky top-0 flex h-[60px] max-h-[60px] items-center justify-center gap-4 bg-beige-100 transition-all duration-300 ${
        scrollPosition > 0 ? "shadow-md" : "shadow-none"
      }`}
    >
      <button
        id="navMenu"
        className="ml-2.5 mr-auto flex aspect-square w-12 items-center justify-center"
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

      <a href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          className="h-[36px]"
          src="/assets/bean-street-name.svg"
          alt="Bean Stree Coffee Shop"
        />
      </a>

      <ul className="hidden text-brown-700 lg:flex lg:gap-8">
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Locations</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
      </ul>

      <div className="ml-auto flex gap-2 text-brown-700">
        <button className="text-sm font-medium">Sign in</button>
        <button className="relative mr-4 flex h-12 w-12 items-center justify-center">
          <span className="absolute left-1/2 top-2.5 -translate-x-1/2 text-sm font-semibold">
            0
          </span>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 15.7022L6.19546 26.8901L6.43878 27.539H7.13179H7.41148H23.9136H24.1933H24.8863L25.1296 26.8901L29.3251 15.7022L27.4524 15L23.5003 25.539H7.82479L3.87266 15L2 15.7022Z"
              fill="#4D403D"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
