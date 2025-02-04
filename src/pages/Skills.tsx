import { useInView } from "react-intersection-observer";
import StarryBackground from "../components/StarryBackground";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { skills } from "../lib/Skills";
import { LazyLoadImage } from "react-lazy-load-image-component";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Skills = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const totalWidth = container.scrollWidth / 2; // Since we are duplicating the content

    gsap.to(container, {
      x: `-${totalWidth}px`, // Move by half the total width
      duration: 15,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`, // Reset position when it reaches the end
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="Skills"
      className="h-screen bg-[#09152f] text-white relative overflow-hidden px-20 flex flex-col"
    >
      <StarryBackground />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center w-full h-1/3"
      >
        <h1 className="font-zentry font-extrabold text-white text-6xl">
          {inView && (
            <Typewriter words={["My Skills"]} cursor cursorStyle="|" typeSpeed={90} />
          )}
        </h1>
        <p className="text-lg text-neutral-400 sm:text-base pt-4">
          Here are some of my skills that I have been working on for the past 3 years.
        </p>
      </motion.div>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full overflow-hidden py-10 px-5">
        <motion.div
          ref={scrollRef}
          className="flex gap-6 scrollbar-hide whitespace-nowrap"
        >
          {/* Duplicate the skills array to create a seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <div
                className="min-w-[400px] max-w-[750px] h-[300px] border border-[rgba(255,255,255,0.125)] 
                  shadow-[0px_4px_24px_rgba(23,92,230,0.15)] rounded-[16px] p-[18px_36px] flex flex-col justify-between scroll-m-0"
              >
                <div className="text-xl font-semibold">{skill.title}</div>
                <div className="flex justify-center flex-wrap gap-3">
                  {skill.skills.map((item, index_x) => (
                    <div
                      key={`skill-x-${index_x}`}
                      className="text-[14px] font-normal text-[rgba(var(--text-primary),0.8)] 
                      border border-[rgba(var(--text-primary),0.8)] rounded-[12px] p-[8px_12px] 
                      flex items-center justify-center gap-2"
                    >
                      <LazyLoadImage
                        src={item.image}
                        alt={item.name}
                        effect="blur"
                        className="w-[20px] h-[20px]"
                      />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
