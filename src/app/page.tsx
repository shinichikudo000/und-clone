'use client'

import { transcode } from "buffer";
import { easeIn, motion, useInView } from "framer-motion";
import Link from "next/link";
import { use, useEffect, useRef } from "react";
import Roulette from "./Roulette";

export default function Home() {
  const mainContent = useRef(null)
  const mainContentIsInView = useInView(mainContent, { margin: "0% 0px -100% 0px"})

  const undLogoResize = {
    small: {
      fontSize: "2rem",
      transition: {
        duration: 0.6,
        ease: [.3,.86,.36,.95],
      }
    },
    big: {
      fontSize: "50vh",
      transition: {
        duration: 0.9,
        ease: [.3,.86,.36,.95],
      }
    }
  }

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
    <main className="w-screen h-screen">
      <div className="w-full h-[48vh] overflow-hidden p-4 bg-[#eeeeee]">
          <img src="https://und-ny.com/_next/image/?url=%2Fund-hero.jpg&w=3840&q=75" className="object-cover h-auto"></img>
      </div>
      <div className="w-full bg-[#eeeeee]" ref={mainContent}>
         <motion.div variants={undLogoResize} animate={mainContentIsInView ? "small" : "big"} className={`sticky top-4 uppercase flex h-[48vh] leading-none text-black font-bold pl-4 text-[25rem]`}>
            <h1>u</h1>
            <h1>n</h1>
            <h1>d</h1>
        </motion.div>
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
