import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { CiGlobe } from "react-icons/ci";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import StarryBackground from "../components/StarryBackground";

const Hero = () => {
    const textRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const textWidth = textRef.current?.offsetWidth || 0;
            
            // Set initial position
            gsap.set(textRef.current, {
                x: 0
            });

            gsap.from(textRef.current,{
                x: textWidth * 0.3,
                duration: 10,
                ease: "none",
                repeat: -1,
                yoyo: true,
                delay: 0.5
            })


            // Create timeline for smooth infinite scroll
            gsap.to(textRef.current, {
                x: -textWidth * 0.3,
                duration: 10,
                ease: "none",
                repeat: -1,
                yoyo: true,
                delay: 0.5

            });

        }, containerRef);

        
        
        return () => ctx.revert();
    }, []);



    return (
        <div className="relative min-h-screen pt-20 bg-[#09152f]" style={{
            backgroundImage: "url('/img/meeeee.png')",
            backgroundSize: "cover", // Changed to cover for more zoom
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",       // Added zoom effect
        }}>

            <StarryBackground />
            <div ref={containerRef} className="absolute inset-0 z-10 flex items-end justify-center overflow-hidden">
                <h1 ref={textRef} 
                    className="text-[20vh] md:text-[30vh] lg:text-[40vh] font-extrabold leading-none text-white uppercase tracking-tighter whitespace-nowrap font-circular-web"
                >
                    Roshan Kumar Sahu
                </h1>
            </div>

            <div className="absolute inset-0 z-10 top-1/2 left-0 -translate-x-0 -translate-y-1/2 hidden md:flex items-center justify-center bg-black backdrop-blur-sm rounded-r-full h-fit w-fit p-6 text-white font-robert-medium text-base lg:text-lg gap-6">
                <p>
                    Located in <br/>Ranchi, Jharkhand
                </p>
                <div className="flex items-center justify-center rounded-full bg-gray-400 w-16 h-16 lg:w-20 lg:h-20">
                    <CiGlobe className="text-5xl animate-earth-spin" />
                </div>


            </div>
            <motion.div className="absolute top:1/3 lg:top-1/2 right-0 translate-y-1/4 md:translate-y-1/3 lg:-translate-y-1/2 z-30 text-lg sm:text-xl md:text-2xl w-[70%] sm:w-[50%] md:w-[35%] lg:w-[25%] font-bold flex items-center justify-center uppercase font-general text-white p-4 md:p-6 rounded-l-full gap-4 md:gap-6">
                <motion.div className="flex flex-col gap-2 overflow-hidden">
                    <span className="text-gray-400 text-sm sm:text-lg">
                        Hi, Welcome to my portfolio
                    </span>
                    <span className="text-gray-400 text-sm sm:text-lg">
                        My Profession is
                    </span>
                    <Typewriter
                        words={["Data Scientist", "AI Engineer", "Web Developer"]}
                        loop={Infinity}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </motion.div>
            </motion.div>
            

        </div>
    );
}

export default Hero;
  