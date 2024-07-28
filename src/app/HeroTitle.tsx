import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

interface HeroTitleProps {
    mainContentIsInView: boolean;
  }
  
export default function HeroTitle({ mainContentIsInView }: HeroTitleProps) {

    const [ scope, animate ] = useAnimate()

    useEffect(() => {
        animate([
            [
                ".hero-title-container",
                { y: 0 },
                { duration: 0.5, delay: 1.2 }
            ]
        ])
    }, [])

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

    return (
        <div ref={scope} className="sticky top-4 uppercase flex h-[48vh] text-black font-bold pl-4 z-50">
            <motion.div variants={undLogoResize} initial={{ y: 50 }} animate={mainContentIsInView ? "small" : "big"} className="hero-title-container flex leading-none">
                <h1>u</h1>
                <h1>n</h1>
                <h1>d</h1>
            </motion.div>
        </div>
    )
}