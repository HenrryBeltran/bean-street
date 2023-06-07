import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="h-fit w-full overflow-hidden bg-beige-200">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{
          type: "tween",
          duration: 0.36,
          ease: [0.35, 0.6, 0.5, 1],
        }}
      >
        <motion.div
          initial={{ backgroundColor: "#4d403d" }}
          animate={{ background: "#ede6dd" }}
          transition={{ delay: 1.5, duration: 0.32 }}
          className="flex items-center justify-center bg-beige-200 py-3"
        >
          <motion.p
            initial={{ color: "#f7f4f0" }}
            animate={{ color: "#4d403d" }}
            transition={{ delay: 1.5, duration: 0.32 }}
            className="w-2/5 text-center text-xs text-brown-700"
          >
            10% discount in all drinks{" "}
            <span className="whitespace-nowrap">
              <a
                href="/shop"
                aria-label="Go to shop"
                className="font-semibold hover:underline"
              >
                Shop Now
              </a>
              <span className="font-semibold hover:underline"> {">"}</span>
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Banner;
