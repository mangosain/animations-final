"use client";

import Lenis from "@studio-freight/lenis";

import TextPage from "@/components/text/page";
import Homepage from "../components/homepage/page";
import { useEffect } from "react";
import Page1 from "@/components/page1/page";
import Page2 from "@/components/page2/page";
import Nav from "@/components/nav/page";
import { useScroll } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const { scrollYProgress: scrollForNav } = useScroll();

  return (
    <main className="bg-black">
      <Nav scroll={scrollForNav} />
      <Homepage />
      <TextPage />
      <Page1 />
      <Page2 />
    </main>
  );
}
