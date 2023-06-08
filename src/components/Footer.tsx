function Footer() {
  return (
    <footer className="relative flex w-full justify-center overflow-hidden border-t border-t-brown-300 bg-beige-200">
      <div className="grid max-w-[1920px] grid-cols-1 px-6 pt-6 text-brown-700 md:grid-cols-6 md:grid-rows-2 md:gap-8 md:px-16 md:pt-16 xl:grid-cols-7 xl:grid-rows-none xl:px-24 xl:pt-24">
        <div className="mb-11 md:col-span-2 md:mb-32 xl:m-0 xl:h-fit">
          <img
            className="mb-6"
            width={83}
            height={64}
            src="/assets/bean-street-big-logo.svg"
            alt="Bean Street SVG logo"
            loading="lazy"
          />
          <div className="space-y-4">
            <h3 className="font-bold text-brown-800">Bean Street</h3>
            <p className="text-sm font-light leading-6">
              Enjoy the cozy and modern atmosphere of our coffee shop as you catch up with
              friends or take a break from your busy day.
            </p>
          </div>
        </div>
        <div className="mb-7 xl:col-start-4 xl:m-0 xl:h-fit">
          <ul className="space-y-3 text-brown-600">
            <li>
              <span className="font-bold text-brown-800">Coffee Shop</span>
            </li>
            <li>
              <a
                className="transition-colors hover:text-brown-800"
                href="/about-us"
                aria-label="About us link"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="trasnition-colors hover:text-brown-800"
                href="/locations"
                aria-label="Locations link"
              >
                Locations
              </a>
            </li>
            <li>
              <a
                className="trasnition-colors hover:text-brown-800"
                href="/faqs"
                aria-label="FAQs link"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                className="trasnition-colors hover:text-brown-800"
                href="/sign-up"
                aria-label="Sign up link"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-11 space-y-7 xl:m-0 xl:h-fit">
          <ul className="space-y-3 text-brown-600">
            <li>
              <span className="font-bold text-brown-800">Buy</span>
            </li>
            <li>
              <a
                className="transition-colors hover:text-brown-800"
                href="/shop"
                aria-label="Shop link"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-brown-800"
                href="/menu"
                aria-label="Menu link"
              >
                Menu
              </a>
            </li>
          </ul>
          <ul className="space-y-3 text-brown-600">
            <li>
              <span className="font-bold text-brown-800">Policy</span>
            </li>
            <li>
              <a
                className="transition-colors hover:text-brown-800"
                href="/privacy-policy"
                aria-label="Shop link"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-brown-800"
                href="/licenses"
                aria-label="Menu link"
              >
                Licenses
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-16 space-y-7 md:col-span-2 xl:m-0 xl:h-fit">
          <div className="space-y-3 text-brown-800">
            <h4 className="font-bold">Contact Us</h4>
            <a
              className="block w-fit hover:underline"
              href="mailto:info@beanstreet.com"
              aria-label="Bean Street email"
            >
              info@beanstreet.com
            </a>
            <span className="block">+01 555 222 4444</span>
          </div>
          <div>
            <p className="text-sm font-light leading-6">
              If you have any questions or concerns, please do not hesitate to contact us
              at. We are always happy to hear from our customers.
            </p>
          </div>
        </div>
        <div className="mb-16 md:col-span-2 md:place-self-end md:justify-self-start xl:mb-24 xl:h-min">
          <ul className="flex items-center justify-center gap-6 text-brown-500">
            <li className="flex h-7 w-7 items-center justify-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram social link"
                className="group"
              >
                <span className="fill-current transition-colors duration-200 hover:text-red-400">
                  <svg
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.5063 9.4295C10.5313 9.4295 7.325 12.6358 7.325 16.6108C7.325 20.5858 10.5313 23.792 14.5063 23.792C18.4812 23.792 21.6875 20.5858 21.6875 16.6108C21.6875 12.6358 18.4812 9.4295 14.5063 9.4295ZM14.5063 21.2795C11.9375 21.2795 9.8375 19.1858 9.8375 16.6108C9.8375 14.0358 11.9313 11.942 14.5063 11.942C17.0813 11.942 19.175 14.0358 19.175 16.6108C19.175 19.1858 17.075 21.2795 14.5063 21.2795ZM23.6563 9.13575C23.6563 10.067 22.9063 10.8108 21.9813 10.8108C21.05 10.8108 20.3063 10.0608 20.3063 9.13575C20.3063 8.21075 21.0563 7.46075 21.9813 7.46075C22.9063 7.46075 23.6563 8.21075 23.6563 9.13575ZM28.4125 10.8358C28.3063 8.592 27.7937 6.6045 26.15 4.967C24.5125 3.3295 22.525 2.817 20.2813 2.7045C17.9688 2.57325 11.0375 2.57325 8.725 2.7045C6.4875 2.81075 4.5 3.32325 2.85625 4.96075C1.2125 6.59825 0.70625 8.58575 0.59375 10.8295C0.4625 13.142 0.4625 20.0732 0.59375 22.3857C0.7 24.6295 1.2125 26.617 2.85625 28.2545C4.5 29.892 6.48125 30.4045 8.725 30.517C11.0375 30.6483 17.9688 30.6483 20.2813 30.517C22.525 30.4107 24.5125 29.8983 26.15 28.2545C27.7875 26.617 28.3 24.6295 28.4125 22.3857C28.5438 20.0732 28.5438 13.1483 28.4125 10.8358ZM25.425 24.867C24.9375 26.092 23.9938 27.0358 22.7625 27.5295C20.9188 28.2608 16.5437 28.092 14.5063 28.092C12.4688 28.092 8.0875 28.2545 6.25 27.5295C5.025 27.042 4.08125 26.0983 3.5875 24.867C2.85625 23.0233 3.025 18.6483 3.025 16.6108C3.025 14.5733 2.8625 10.192 3.5875 8.3545C4.075 7.1295 5.01875 6.18575 6.25 5.692C8.09375 4.96075 12.4688 5.1295 14.5063 5.1295C16.5437 5.1295 20.925 4.967 22.7625 5.692C23.9875 6.1795 24.9313 7.12325 25.425 8.3545C26.1563 10.1983 25.9875 14.5733 25.9875 16.6108C25.9875 18.6483 26.1563 23.0295 25.425 24.867Z" />
                  </svg>
                </span>
              </a>
            </li>
            <li className="flex h-7 w-7 items-center justify-center">
              <a
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter social link"
                className="group"
              >
                <span className="fill-current transition-colors duration-200 hover:text-red-400">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M29.2106 10.0993C29.2309 10.3835 29.2309 10.6678 29.2309 10.9521C29.2309 19.6221 22.632 29.6119 10.5711 29.6119C6.85531 29.6119 3.40356 28.5358 0.5 26.6678C1.02794 26.7287 1.5355 26.749 2.08375 26.749C5.14969 26.749 7.97206 25.7135 10.2259 23.947C7.34262 23.8861 4.92637 21.9978 4.09387 19.3988C4.5 19.4596 4.90606 19.5003 5.3325 19.5003C5.92131 19.5003 6.51019 19.419 7.05837 19.2769C4.05331 18.6678 1.79944 16.0282 1.79944 12.8404V12.7592C2.6725 13.2465 3.68781 13.5511 4.76388 13.5916C2.99738 12.4139 1.84006 10.4038 1.84006 8.12969C1.84006 6.91144 2.16488 5.79469 2.73344 4.82007C5.96187 8.79976 10.8147 11.3987 16.2563 11.683C16.1548 11.1957 16.0938 10.6881 16.0938 10.1805C16.0938 6.56626 19.0177 3.62213 22.6522 3.62213C24.5405 3.62213 26.2461 4.41401 27.4441 5.69319C28.9263 5.40894 30.3476 4.86069 31.6065 4.10944C31.1191 5.63232 30.0836 6.91151 28.7232 7.72363C30.0431 7.58157 31.3222 7.21601 32.4999 6.70844C31.6066 8.00788 30.4898 9.16519 29.2106 10.0993Z" />
                  </svg>
                </span>
              </a>
            </li>
            <li className="flex h-7 w-7 items-center justify-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook social link"
                className="group"
              >
                <span className="fill-current transition-colors duration-200 hover:text-red-400">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32 16.617C32 8.0545 25.0625 1.117 16.5 1.117C7.9375 1.117 1 8.0545 1 16.617C1 24.3533 6.66813 30.7658 14.0781 31.9295V21.0976H10.1406V16.617H14.0781V13.202C14.0781 9.31763 16.3906 7.172 19.9325 7.172C21.6287 7.172 23.4025 7.4745 23.4025 7.4745V11.287H21.4475C19.5225 11.287 18.9219 12.482 18.9219 13.7076V16.617H23.2206L22.5331 21.0976H18.9219V31.9295C26.3319 30.7658 32 24.3533 32 16.617Z" />
                  </svg>
                </span>
              </a>
            </li>
            <li className="flex h-7 w-7 items-center justify-center">
              <a
                href="https://www.youtube.com"
                target="_blank"
                aria-label="Youtube social link"
                className="group"
              >
                <span className="fill-current transition-colors duration-200 hover:text-red-400">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M31.8314 8.91482C31.4635 7.53794 30.3792 6.45376 29.0024 6.08576C26.5066 5.41701 16.5 5.41701 16.5 5.41701C16.5 5.41701 6.49331 5.41701 3.99756 6.08576C2.62094 6.45376 1.5365 7.53794 1.16856 8.91482C0.5 11.4103 0.5 16.6172 0.5 16.6172C0.5 16.6172 0.5 21.8239 1.16856 24.3192C1.5365 25.6961 2.62094 26.7806 3.99756 27.1485C6.49331 27.817 16.5 27.817 16.5 27.817C16.5 27.817 26.5066 27.817 29.0024 27.1485C30.3792 26.7806 31.4635 25.6961 31.8314 24.3192C32.4999 21.8239 32.4999 16.6172 32.4999 16.6172C32.4999 16.6172 32.4999 11.4103 31.8314 8.91482ZM13.2998 21.4173V11.8171L21.6135 16.6172L13.2998 21.4173Z" />
                  </svg>
                </span>
              </a>
            </li>
            <li className="flex h-7 w-7 items-center justify-center">
              <a
                href="https://www.tiktok.com"
                target="_blank"
                aria-label="Tiktok social link"
                className="group"
              >
                <span className="fill-current transition-colors duration-200 hover:text-red-400">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.5 0.617004C7.66344 0.617004 0.5 7.78044 0.5 16.617C0.5 25.4536 7.66344 32.617 16.5 32.617C25.3366 32.617 32.5 25.4536 32.5 16.617C32.5 7.78044 25.3366 0.617004 16.5 0.617004ZM24.6012 15.1409C22.9023 15.1409 21.2491 14.5895 19.9762 13.6565L19.9661 20.0003C19.9651 21.1757 19.6056 22.3229 18.9356 23.2887C18.2656 24.2546 17.317 24.9931 16.2163 25.4058C15.1157 25.8185 13.9153 25.8857 12.7755 25.5984C11.6357 25.3112 10.6105 24.6832 9.83692 23.7982C9.0633 22.9132 8.57797 21.8133 8.4457 20.6453C8.31343 19.4773 8.54052 18.2967 9.09665 17.2611C9.65278 16.2255 10.5115 15.3842 11.5582 14.8493C12.605 14.3145 13.7899 14.1116 14.955 14.2677V17.383C14.4054 17.2206 13.8187 17.2354 13.278 17.4253C12.7373 17.6151 12.2701 17.9704 11.9426 18.4407C11.6152 18.911 11.4442 19.4725 11.4538 20.0455C11.4634 20.6184 11.6531 21.1738 11.9961 21.6329C12.3391 22.092 12.8179 22.4314 13.3647 22.6031C13.9114 22.7747 14.4984 22.7698 15.0422 22.5892C15.586 22.4085 16.0592 22.0612 16.3945 21.5965C16.7299 21.1318 16.9104 20.5733 16.9105 20.0003V7.45032H20.1152C20.1152 8.03941 20.2312 8.62273 20.4567 9.16698C20.6821 9.71123 21.0125 10.2057 21.4291 10.6223C21.8456 11.0388 22.3401 11.3693 22.8844 11.5947C23.4286 11.8201 24.012 11.9361 24.6011 11.9361L24.6012 15.1409Z" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="pb-[420px] md:col-span-2 md:col-start-5 md:mb-16 md:place-self-end md:justify-self-start md:p-0 xl:col-start-6 xl:mb-24 xl:h-min">
          <div>
            <span className="block px-6 text-center text-sm md:p-0 md:text-start">
              &copy;2023 Bean Street, Design and Code{" "}
              <a
                className="transition-all hover:font-semibold hover:text-brown-900"
                href="https://henrrybeltran.vercel.app"
                target="_blank"
                aria-label="Developer & Designer - Henrry Beltrán"
              >
                <span className="whitespace-nowrap">by Henrry Beltrán</span>
              </a>
            </span>
          </div>
        </div>
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 xl:relative xl:bottom-0 xl:col-span-2 xl:col-start-3 xl:row-start-2 xl:max-h-[calc(428px-64px)]">
          <img
            width={187}
            height={428}
            src="/assets/frappe-coffee.svg"
            alt="Frappe Coffee SVG"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
