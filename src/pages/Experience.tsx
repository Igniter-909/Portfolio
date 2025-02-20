"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { experiences } from "../lib/Experience"
import ExperienceCard from "../components/ExperienceCard"
import StarryBackground from "../components/StarryBackground"
import { Typewriter } from "react-simple-typewriter"
import { ChevronDown } from "lucide-react"

interface Experience {
  id: number;
  company: string;
  role: string;
  date: string;
  desc: string;
  skills: string[];
  img: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  selectedExperience: Experience;
  setSelectedExperience: (exp: Experience) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(experiences[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section
      id="Experience"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#09152f] overflow-hidden py-8 px-4 sm:py-12 sm:px-6 lg:px-8"
    >
      <StarryBackground />
      <div className="container mx-auto z-10 max-w-7xl">
        <motion.h1
          className="font-zentry font-extrabold text-white text-3xl sm:text-5xl lg:text-7xl text-center py-4 sm:py-8"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {inView && <Typewriter words={["Experience"]} cursor cursorStyle="|" typeSpeed={90} />}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-white text-center mb-6 sm:mb-10"
        >
          My journey as a software engineer across different companies and projects.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          {isMobile ? (
            <ExperienceDropdown
              experiences={experiences}
              selectedExperience={selectedExperience}
              setSelectedExperience={setSelectedExperience}
              isOpen={isDropdownOpen}
              setIsOpen={setIsDropdownOpen}
            />
          ) : (
            <ExperienceTimeline
              experiences={experiences}
              selectedExperience={selectedExperience}
              setSelectedExperience={setSelectedExperience}
            />
          )}
          <div className="w-full md:w-2/3">
            <ExperienceCard experience={selectedExperience} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceDropdown({ experiences, selectedExperience, setSelectedExperience, isOpen, setIsOpen }) {
  return (
    <div className="relative w-full md:w-1/3 mb-0">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 sm:p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex justify-between items-center shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div>
          <h3 className="text-base font-semibold">{selectedExperience.company}</h3>
          <p className="hidden sm:block text-sm text-gray-200">{selectedExperience.date}</p>
        </div>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-2 bg-gray-800 rounded-xl shadow-lg max-h-60 overflow-y-auto"
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setSelectedExperience(exp)
                  setIsOpen(false)
                }}
                className={`w-full p-4 text-left transition-colors ${
                  selectedExperience === exp
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{ backgroundColor: selectedExperience === exp ? "#4f46e5" : "#374151" }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-base font-semibold">{exp.company}</h3>
                <p className="text-sm">{exp.date}</p>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const ExperienceTimeline: React.FC<{
  experiences: Experience[];
  selectedExperience: Experience;
  setSelectedExperience: (exp: Experience) => void;
}> = ({ experiences, selectedExperience, setSelectedExperience }) => {
  return (
    <div className="hidden md:flex flex-col space-y-4 w-1/3">
      {experiences.map((exp: Experience, index: number) => (
        <motion.button
          key={index}
          onClick={() => setSelectedExperience(exp)}
          className={`p-4 transition-all rounded-xl ${
            selectedExperience === exp
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-lg font-semibold">{exp.company}</h3>
          <p className="text-sm">{exp.date}</p>
        </motion.button>
      ))}
    </div>
  )
}

export default Experience

