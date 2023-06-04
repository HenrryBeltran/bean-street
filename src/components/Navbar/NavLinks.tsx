import { motion } from "framer-motion";
import { HTMLAttributes, createRef, memo, useEffect, useRef, useState } from "react";

const links = [
  { name: "Shop", route: "/shop" },
  { name: "Locations", route: "/locations" },
  { name: "About us", route: "/about-us" },
  { name: "Menu", route: "/menu" },
];

const NavLinks = () => {
  const [pathname, setPathname] = useState("");
  console.log(pathname);

  useEffect(() => {
    setPathname(window.location.pathname);
  });

  return (
    <ul className="mx-4 hidden text-brown-700 transition-all lg:flex lg:basis-1/3 lg:justify-center lg:space-x-8">
      {links.map(link => (
        <motion.li
          key={link.name}
          className="group relative"
          initial="idle"
          whileHover="hover"
        >
          <a href={link.route}>{link.name}</a>
          <motion.span
            animate={{ scale: pathname === link.route ? 1 : 0 }}
            variants={{
              idle: { scale: 0 },
              hover: { scale: 1 },
            }}
            className="absolute -bottom-2.5 left-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brown-700"
          ></motion.span>
        </motion.li>
      ))}
    </ul>
  );
};

export default memo(NavLinks);
