"use client";

import { motion, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const Nav = ({ scroll }: any) => {
  const navLinks = [
    { name: "THESE", href: "" },
    { name: "LINKS", href: "" },
    { name: "FOR", href: "" },
    { name: "SHOW", href: "" },
    { name: "ONLY", href: "" },
  ];

  const [isHidden, setIsHidden] = useState(false);
  const lastYRef = useRef(0);

  useMotionValueEvent(scroll, "change", (progress: number) => {
    const diff = progress - lastYRef.current;
    console.log(diff);
    if (Math.abs(diff) > 0.03) {
      setIsHidden(diff > 0);
      lastYRef.current = progress;
    }
  });

  return (
    <nav className="z-100 fixed z-30 left-1/2 transform -translate-x-1/2">
      <motion.ul
        animate={isHidden ? "hidden" : "visible"}
        variants={{
          hidden: { y: "-90%" },
          visible: { y: "0%" },
        }}
        whileHover="visible"
        onFocusCapture={() => setIsHidden(false)}
        className="mt-2 p-4 font-semibold text-md flex gap-20 bg-white bg-opacity-40 backdrop-blur-sm rounded-xl border"
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Nav;
