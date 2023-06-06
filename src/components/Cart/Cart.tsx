import { Dispatch, FC, SetStateAction, memo, useEffect } from "react";
import PrimaryButton from "../PrimaryButton";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

const Cart: FC<Props> = ({ isCartOpen, setIsCartOpen }) => {
  useEffect(() => {
    if (isCartOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "visible";
    }
  }, [isCartOpen]);

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: "easeOut" }}
            className="absolute right-0 top-0 z-50 flex h-[100svh] w-full"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0, transition: { delay: 0, duration: 0 } }}
              transition={{ delay: 0.32 }}
              onClick={() => setIsCartOpen(false)}
              className="hidden h-screen flex-grow bg-brown-900 lg:block"
            ></motion.div>
            <section className="flex h-full w-full flex-col bg-beige-100 px-6 pb-6 lg:w-2/5 lg:max-w-2xl lg:px-10 lg:pt-3">
              <div className="mb-11 flex h-fit items-center  justify-between">
                <span className="text-lg font-semibold leading-none text-brown-700 lg:text-xl">
                  Cart (0)
                </span>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="global-select-none group flex aspect-square h-12 translate-x-3 items-center justify-center"
                  aria-label="Close Cart"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <polyline
                      className="stroke-brown-700 transition-colors group-hover:stroke-brown-500"
                      strokeWidth="2"
                      points="1 1, 23 23"
                    ></polyline>
                    <polyline
                      className="stroke-brown-700 transition-colors group-hover:stroke-brown-500"
                      strokeWidth="2"
                      points="1 23, 23 1"
                    ></polyline>
                  </svg>
                </button>
              </div>

              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-2">
                  <svg width="64" height="64" viewBox="0 0 37 37">
                    <path
                      className="fill-brown-500"
                      d="M25.4248 2.68549H26.2032L26.9508 5.42352L10.0393 5.42352L10.7513 2.68549H10.7598H25.4248ZM6 5.42352H8.48939L9.59152 1.18549H10.7598H25.4248H27.3485L28.5057 5.42352H31.0007V8.92352L6 8.92352V5.42352ZM11.6842 36.0486L8.42584 10.1852L9.91408 9.99774L10.3616 13.5502H26.6364L27.084 9.99774L28.5722 10.1852L25.3139 36.0486H24.6514H12.3467H11.6842ZM24.6099 29.636H12.3882L13.0071 34.5486H23.991L24.6099 29.636Z"
                    />
                  </svg>
                </div>
                <p className="mb-10 w-1/2 text-center text-lg font-medium leading-tight text-brown-600">
                  There's no coffee on your cart
                </p>
                <PrimaryButton
                  name="Go Shop"
                  path="/shop"
                  ariaLabel="Go to shop"
                  buttonClass="justify-center py-2 w-fit px-4"
                />
              </div>

              <div className="mt-auto">
                <div className="mb-6 flex justify-between text-xl font-semibold text-brown-700">
                  <p>Subtotal</p>
                  <span>$ 0</span>
                </div>
                <button
                  className="global-select-none group relative flex w-full items-center justify-center overflow-hidden whitespace-nowrap bg-brown-700 py-3 text-lg font-medium text-beige-100 disabled:cursor-not-allowed disabled:bg-brown-500"
                  aria-label="Checkout the cart"
                  disabled
                >
                  <span className="z-10">Checkout</span>
                  <span className="absolute -bottom-[150%] left-0 h-full w-full bg-red-400 transition-all duration-300 group-hover:bottom-0 group-disabled:bg-transparent"></span>
                </button>
              </div>
            </section>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Cart);
