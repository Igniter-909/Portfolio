import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import AnimatedTitle from "./AnimatedTitle"

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })
        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0
        } )
    })

  return (
    <div id="about" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:text-[10px]">
                Welcome to zentry
            </h2>
            <AnimatedTitle title="Disc<b>o</b>ver the world's largest shared <b>A</b>dventure" containerClass="mt-5 !text-black text-center" />
            
            <div className="about-subtext">
                <p>
                    Zentry is a platform that allows you to discover and share your adventures with the world.
                </p>
                <p>
                    We are a team of adventurers who are passionate about exploring the world and sharing our experiences with others.
                </p>
            </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                <img src="img/about.webp" alt="Background" className="absolute left-0 top-0 size-full object-cover" />
            </div>
        </div>
    </div>
  )
}

export default About