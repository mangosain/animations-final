"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Page2 = () => {
  const parentContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentContainer,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={parentContainer} className="h-[200vh]">
      <PageContent2 scroll={scrollYProgress} />
      <PageContent3 scroll={scrollYProgress} />
    </div>
  );
};

export default Page2;

const PageContent2 = ({ scroll }: any) => {
  const scale = useTransform(scroll, [0, 1], [1, 0.5]);
  const borderRadius = useTransform(scroll, [0, 1], [0, 50]);

  return (
    <motion.div
      className="w-full h-screen sticky top-0 shadow-lg shadow-slate-500"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/370260.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        scale,
        borderRadius,
      }}
    ></motion.div>
  );
};

const PageContent3 = ({ scroll }: any) => {
  const scale = useTransform(scroll, [0, 1], [0, 1]);
  const borderRadius = useTransform(scroll, [0, 1], [100, 0]);

  return (
    <motion.div
      className="w-full h-screen sticky top-0 bg-blue-300 flex justify-center items-center"
      style={{
        scale,
        borderRadius,
      }}
    >
      <h1 className="text-9xl text-white uppercase font-semibold">
        Thank you for visiting
      </h1>
    </motion.div>
  );
};
