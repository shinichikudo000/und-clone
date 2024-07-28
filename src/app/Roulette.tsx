'use client'

import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react"

export default function Roulette() {
    const data = [
       "adulterated",
       "contaminated",
       "altered",
       "toughted",
       "ique deseign",
       "ison delight",
       "disturbed",
       "lock delightful",
       "wind",
       "iting delectable",
       "damaged",
       "diniable",
       "ited state",
       "processed"
    ]
    
    const [rouletteData, setRouletteData] = useState<string[]>(data)
    const [containerHeight, setContainerHeight] = useState(0)
    const [unContainerWidth, setUnContainerWidth] = useState(0)

    const [scope, animate] = useAnimate()
    const dataContainer = useRef<HTMLDivElement | null>(null)
    const unContainer = useRef<HTMLDivElement | null>(null)

    const isInView = useInView(scope)
    
    useEffect(() => {
        if (!dataContainer.current) return;
        if (!unContainer.current) return;
    
        const { height } = dataContainer.current.getBoundingClientRect();
        const { width } = unContainer.current.getBoundingClientRect();
        setContainerHeight(height)
        setUnContainerWidth(width)

        const interval = setInterval(() => {
            const arrayCopy = [...rouletteData];
            if (arrayCopy.length > 0) {
                animate([
                    [
                        ".item-7-container",
                        { x: unContainerWidth },
                        { duration: 0.2 }
                    ],
                    [
                        ".roulette",
                        { y: -containerHeight },
                        { duration: 0.3 }
                    ],
                    [
                        ".item-7",
                        { fontSize: "10vh" },
                        { at: "<", duration: 0.3 }
                    ],
                    [
                        ".item-6",
                        { fontSize: "5vh" },
                        { at: "<", duration: 0.3 }
                    ],
                    [
                        ".letterD-7",
                        { color: "#000000"},
                        { at: "<", duration: 0.3 }
                    ],
                    [
                        ".letterD-6",
                        { color: "#cccccc"},
                        { at: "<", duration: 0.3 }
                    ],
                    [
                        ".item-6-container",
                        { x: 0 },
                        { at: ">", duration: 0.2 }
                    ],
                ]).then(() => {
                    animate([
                        [
                            ".roulette",
                            { y: 0 },
                            { duration: 0 }
                        ],
                        [
                            ".item-6-container",
                            { x: unContainerWidth },
                            { at: "<", duration: 0 }
                        ],
                        [
                            ".item-6",
                            { fontSize: "10vh" },
                            { at: "<", duration: 0 }
                        ],
                        [
                            ".item-7-container",
                            { x: 0 },
                            { at: "<", duration: 0 }
                        ],
                        [
                            ".item-7",
                            { fontSize: "5vh" },
                            { at: "<", duration: 0 }
                        ],
                        [
                            ".letterD-7",
                            { color: "#cccccc"},
                            { at: "<", duration: 0 }
                        ],
                        [
                            ".letterD-6",
                            { color: "#000000"},
                            { at: "<", duration: 0 }
                        ],
                    ])

                    const firstData = arrayCopy.shift();

                    if (firstData) {
                        arrayCopy.push(firstData);
                        setRouletteData(arrayCopy);
                    }
                })
            }
        }, 1000);
     
        return () => clearInterval(interval)
      }, [animate, rouletteData]);
    
    return(
        <AnimatePresence>
            <motion.div ref={scope} className="w-screen h-screen p-4 uppercase flex justify-center items-center font-oswald z-20">
                <div className="h-[72.5%] w-full flex">
                    <div className={`w-2/3 h-full overflow-hidden relative`}>
                        <div className="w-full h-full flex justify-start items-center absolute top-0 left-0">
                            <div ref={unContainer}>
                                <h2 className="uppercase text-[10vh] text-black font-medium"><span>un</span></h2>
                            </div>
                        </div>
                        {
                            rouletteData?.map((data, index) => {
                                if(index === 6) {
                                    return (
                                        <motion.div key={index} initial={{x: unContainerWidth}} className={`roulette item-${index}-container`}>
                                            <motion.h2 initial={{fontSize: "10vh"}} className={`item-${index} leading-none font-medium`}>
                                                {data.split('').map((letter, letterIndex) => (
                                                    <span key={`${letter}-${letterIndex}-${index}`}  className={`${letter.charCodeAt(0) === 100 ? `letterD-${index} text-black`: `letter-${index} text-[#cccccc]`}`}>
                                                        {letter}
                                                    </span>
                                                ))}
                                            </motion.h2>
                                        </motion.div>
                                    )
                                } else {
                                    return (
                                        <motion.div ref={dataContainer} key={index} className={`roulette item-${index}-container`}>
                                            <h2 key={index} className={`item-${index} text-[5vh] leading-none font-medium`}>
                                                {data.split('').map((letter, letterIndex) => ( 
                                                    <span key={`${letter}-${letterIndex}-${index}`}  className={`${letter.charCodeAt(0) === 100 ? `letterD-${index} text-[#cccccc]`: "text-[#cccccc]"}`}>
                                                        {letter}
                                                    </span>
                                                ))}
                                            </h2>
                                        </motion.div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="w-1/3 flex flex-col justify-center">
                        <p className="text-black text-3xl font-bold">
                            UND brings the essence of Japanese cuisine to your table, with our mouthwatering breads, pastries, and premium Japanese ingredients. <br></br>
                            The name UND is crafted from the words &apos;UN&apos; and &apos;D,&apos; with various words sandwiched between them to form positive expressions related to food. It&apos;s akin to the bread we use for our sandwiches, UND combines these elements to offer a unique and flavorful experience.
                        </p>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}