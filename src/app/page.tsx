'use client'

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Roulette from "./Roulette";
import Preloader from "./Preloader.";
import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";

export default function Home() {
  const mainContent = useRef(null)
  const mainContentIsInView = useInView(mainContent, { margin: "0% 0px -100% 0px"})

  const navResize = {
    rest: {
      width: "100vw",
      transition: {
        ease: [.3,.86,.36,.95]
      }
    },
    viewed: {
      width: "75vw",
      transition: {
        ease: [.3,.86,.36,.95]
      }
    }
  }
  return (
    <main className="relative w-screen h-screen">
      <Preloader />
      <HeroImage />
      <div className="w-full bg-[#eeeeee]" ref={mainContent}>
        <HeroTitle mainContentIsInView={mainContentIsInView}/>
        <nav className="sticky top-4 w-full px-4 text-black flex justify-end items-center">
          <motion.ul variants={navResize} animate={mainContentIsInView ? "viewed" : "rest"} className="w-full uppercase flex justify-between text-base font-medium">
            <li>
              <Link href={""}>Shop</Link>
            </li>
            <li>
              <Link href={""}>Recipe</Link>
            </li>
            <li>
              <Link href={""}>About</Link>
            </li>
            <li>
              <Link href={""}>Contact</Link>
            </li>
            <li>
              <Link href={""}>Cart</Link>
            </li>
          </motion.ul>
        </nav>
        <section>
          <Roulette />
        </section>
        <section className="h-[200vh] bg-[#eeeeee]">

        </section>
      </div>
      <footer>

      </footer>
    </main>
  );
}
