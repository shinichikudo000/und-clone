'use client'

import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function Preloader() {
    const [scope, animate] = useAnimate()
    
    useEffect(() => {
        animate([
            [
                ".loader-title-letter-1",
                { y: 0 },
                { duration: 0.5 }
            ],
            [
                ".loader-title-letter-2",
                { y: 0 },
                { at: "<", duration: 0.5, delay: 0.1 }
            ],
            [
                ".loader-title-letter-3",
                { y: 0 },
                { at: "<", duration: 0.5, delay: 0.2 }
            ],
            [
                ".loader-container",
                { clipPath: "inset(0% 0px 100%)"},
                { at: ">", duration: 0.5, delay: 0.5 }
            ],
            [
                ".loader",
                { opacity: 0, display: "hidden", z: 10 },
                { at: ">", duration: 0 }
            ]
        ])
    },[])

    return (
        <div ref={scope} className="loader w-screen h-screen absolute top-0 left-0 z-50 flex overflow-hidden">
            <motion.div style={{clipPath: "inset(0% 0px 0px)"}} className="bg-[#93862C] loader-container w-full h-full flex justify-start items-end p-4">
                <div className="loader-title-container">
                    <h1 className="relative flex justify-center items-center text-[#96FF00] uppercase text-[50vh] font-bold leading-[0.80]">
                        <motion.span initial={{y: 400}} className="loader-title-letter-1">u</motion.span>
                        <motion.span initial={{y: 400}} className="loader-title-letter-2">n</motion.span>
                        <motion.span initial={{y: 400}} className="loader-title-letter-3">d</motion.span>
                    </h1>
                </div>
            </motion.div>
        </div>
    )
}