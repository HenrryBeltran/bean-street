import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { links } from "./links";

const NavLinks = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  });

  return (
    <ul className="mx-4 hidden text-brown-700 transition-all md:flex md:basis-1/3 md:justify-center md:space-x-8">
      {links.slice(1).map(link => (
        <motion.li
          key={link.name}
          className="group relative"
          initial="idle"
          whileHover="hover"
        >
          <a
            href={link.route}
            className="whitespace-nowrap"
            aria-label={`${link.name} link`}
          >
            {link.name}
          </a>
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

export default NavLinks;
