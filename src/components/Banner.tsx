import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Offert, getAllOfferts } from "../lib/sanity";

const Banner = () => {
  const [description, setDescription] = useState("");
  const [linkName, setLinkName] = useState("");
  const [link, setLink] = useState("");
  const [fetchState, setFetchState] = useState("idle");

  useEffect(() => {
    setFetchState("loading");

    async function handleOfferts() {
      const menu: Offert[] = await getAllOfferts();

      setDescription(menu[0].description);
      setLinkName(menu[0].linkName);
      setLink(menu[0].link);
      setFetchState("finish");
    }

    handleOfferts();
  }, []);

  return (
    <div className="min-h-[64px] w-full overflow-hidden bg-beige-200 sm:min-h-[44px]">
      {fetchState === "finish" && (
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
              className="w-1/3 text-center text-sm text-brown-700 sm:w-2/5"
            >
              <span>{description} </span>
              <span className="group cursor-pointer whitespace-nowrap">
                <a
                  href={link}
                  aria-label="Go to shop"
                  className="font-semibold tap-highlight-transparent group-hover:underline"
                >
                  {linkName}
                </a>
                <span className="font-semibold"> {">"}</span>
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
export default Banner;
