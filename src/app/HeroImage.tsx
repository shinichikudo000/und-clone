import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function HeroImage() {
    const [ scope, animate ] = useAnimate()

    useEffect(() => {
        animate([
            [
                ".hero-image",
                { y: 0 },
                { duration: 0.5, delay: 1.4 }
            ]
        ])
    }, [])

    return (
        <div ref={scope} className="w-full h-[48vh] overflow-hidden p-4 bg-[#eeeeee]">
            <motion.img initial={{ y: 50 }} src="https://und-ny.com/_next/image/?url=%2Fund-hero.jpg&w=3840&q=75" className="hero-image object-cover h-auto">
            </motion.img>
        </div>
    )
}