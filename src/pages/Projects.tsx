import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { projects } from "../lib/Projects"
import { useState, useRef } from "react"
import ProjectCard from "../components/ProjectCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import StarryBackground from "../components/StarryBackground"
import type React from "react" // Added import for React

interface ButtonProps {
  title: string
  selectedButton: string
  setSelectedButton: (button: string) => void
}

const ButtonItem: React.FC<ButtonProps> = ({ title, selectedButton, setSelectedButton }) => {
  return (
    <motion.button
      className={`text-white text-sm sm:text-base md:text-xl relative z-10 tracking-wide hover:bg-violet-300 transition-all duration-300 overflow-hidden px-2 py-0 sm:px-4 sm:py-2 rounded-full ${
        selectedButton === title ? "bg-violet-300" : "bg-black/80"
      }`}
      onClick={() => setSelectedButton(title)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {title}
      <motion.div
        className="absolute -z-10 inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent h-full w-full"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ ease: "linear", duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.button>
  )
}

const Projects: React.FC = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })
  const [selectedButton, setSelectedButton] = useState<string>("Web Development")
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 200 : 300 // Adjust scroll amount for mobile
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      ref={sectionRef}
      id="Projects"
      className="w-full min-h-screen bg-[#09152f] flex flex-col py-20 px-0 sm:px-20"
    >
      <StarryBackground />
      <motion.div
        className="flex items-center justify-center flex-col gap-3 sm:gap-5 mb-6 sm:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-robert-regular font-extrabold text-white text-2xl sm:text-4xl md:text-6xl">
          {inView && <Typewriter words={["My Projects"]} cursor cursorStyle="|" typeSpeed={70} />}
        </h1>
        <span className="text-white/70 text-xs sm:text-lg md:text-2xl text-center">
          Here is a list of projects I have worked on till now. It's still growing...
        </span>
      </motion.div>

      {/* Category Buttons */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-2 md:gap-6 lowercase mb-0 sm:mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {Object.keys(projects).map((category) => (
          <ButtonItem
            key={category}
            title={category}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
        ))}
      </motion.div>

      {/* Scroll Buttons and Project Cards */}
      <div className="relative flex items-center w-full max-w-7xl mx-auto">
        <button
          className="absolute left-0 z-10 bg-black/60 text-white p-2 sm:p-3 rounded-full hover:bg-black/80 transition-all"
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide w-full px-8 sm:px-12 py-2 sm:py-4 scroll-smooth"
        >
          <AnimatePresence mode="wait">
            {projects[selectedButton].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="shrink-0 w-[250px] sm:w-[300px] md:w-[450px]"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          className="absolute right-0 z-10 bg-black/60 text-white p-2 sm:p-3 rounded-full hover:bg-black/80 transition-all"
          onClick={() => scroll("right")}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  )
}

export default Projects

