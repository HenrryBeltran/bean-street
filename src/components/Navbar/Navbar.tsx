import { memo, useState } from "react";
import { useScrollPosition } from "../../utils/useScrollPosition";
import Cart from "../Cart/Cart";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import NavLinks from "./NavLinks";
import NavMenuButton from "./NavMenuButton";
import BeanStreet from "./BeanStreet";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`sticky top-0 z-20 w-full bg-beige-100 transition-all duration-300 ${
        scrollPosition > 0 ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="mx-auto flex h-12 max-w-[1728px] items-center bg-beige-100 md:h-16">
        <div className="basis-1/3 tap-highlight-transparent md:hidden">
          <NavMenuButton />
        </div>

        <div className="mx-auto tap-highlight-transparent md:basis-1/3">
          <div className="group flex w-fit items-center justify-center">
            <BeanStreet />
          </div>
        </div>

        <NavLinks />

        <div className="basis-1/3 tap-highlight-transparent">
          <div className="flex items-center justify-between text-brown-700 before:w-1/3 before:content-['']">
            <div className="hidden md:flex md:gap-x-5">
              <SecondaryButton
                path="/sign-in"
                name="Sign in"
                ariaLabel="Sign in"
              />
              <PrimaryButton
                path="/sign-up"
                name="Sign up"
                ariaLabel="Sign up"
              />
            </div>
            <button
              className="group relative mx-4 flex h-12 w-12 items-center justify-center md:mx-8"
              onClick={() => setIsCartOpen(true)}
            >
              <span className="absolute left-1/2 top-2.5 -translate-x-1/2 text-sm font-semibold transition-colors group-hover:text-brown-500">
                0
              </span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="mb-1"
              >
                <path
                  className="fill-brown-700 transition-colors [@media(hover:hover)]:group-hover:fill-brown-500"
                  d="M2 15.7022L6.19546 26.8901L6.43878 27.539H7.13179H7.41148H23.9136H24.1933H24.8863L25.1296 26.8901L29.3251 15.7022L27.4524 15L23.5003 25.539H7.82479L3.87266 15L2 15.7022Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </nav>
    </header>
  );
}

export default memo(Navbar);
