import { useScrollPosition } from "../../hooks/useScrollPosition";
import NavLinks from "./NavLinks";
import NavMenuButton from "./NavMenuButton";

function Navbar() {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`fixed top-0 w-full bg-beige-100 transition-all duration-300 ${
        scrollPosition > 0 ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="mx-auto flex h-12 max-w-[1728px] items-center lg:h-16">
        <div className="global-select-none basis-1/3 lg:hidden">
          <NavMenuButton />
        </div>

        <div className="global-select-none mx-auto transition-opacity duration-200 hover:opacity-75 lg:ml-10 lg:basis-1/3">
          <a href="/">
            <img
              className="h-[36px]"
              src="/assets/bean-street-name.svg"
              alt="Bean Stree Coffee Shop"
            />
          </a>
        </div>

        <NavLinks />

        <div className="global-select-none basis-1/3">
          <div className="flex items-center justify-between text-brown-700 before:w-1/3 before:content-['']">
            <div className="hidden lg:flex lg:gap-x-5">
              <a
                href="/"
                className="item-center flex whitespace-nowrap border-2 border-brown-700 px-3 py-1 font-medium text-brown-700"
              >
                Sign in
              </a>
              <a
                href="/"
                className="flex items-center whitespace-nowrap bg-brown-700 px-3 py-1 font-medium text-beige-100"
              >
                Sign up
              </a>
            </div>

            <a
              href="/"
              className="whitespace-nowrap text-sm font-medium transition-colors hover:text-brown-500 lg:hidden"
            >
              Sign in
            </a>
            <button className="group relative mx-4 flex h-12 w-12 items-center justify-center lg:mx-8">
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
                  className="fill-brown-700 transition-colors group-hover:fill-brown-500"
                  d="M2 15.7022L6.19546 26.8901L6.43878 27.539H7.13179H7.41148H23.9136H24.1933H24.8863L25.1296 26.8901L29.3251 15.7022L27.4524 15L23.5003 25.539H7.82479L3.87266 15L2 15.7022Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
