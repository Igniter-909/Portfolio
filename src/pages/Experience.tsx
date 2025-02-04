"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { experiences } from "../lib/Experience"
import ExperienceCard from "../components/ExperienceCard"
import StarryBackground from "../components/StarryBackground"
import { Typewriter } from "react-simple-typewriter"

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0])
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  return (
    <section
      id="Experience"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#09152f] overflow-hidden"
    >
      <StarryBackground />
      <div className="container mx-auto px-4 py-16 z-10">
        <motion.h1 
        className='font-zentry font-extrabold text-white text-8xl text-center py-10'
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        >
                {inView && (
                  <Typewriter
                    words={['Experience']}
                    cursor
                    cursorStyle='|'
                    typeSpeed={90}
                  />
                )}
            </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white text-center mb-12"
        >
          My journey as a software engineer across different companies and projects.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-8 relative">
          <div className="w-full md:w-1/3">
            <ExperienceTimeline
              experiences={experiences}
              selectedExperience={selectedExperience}
              setSelectedExperience={setSelectedExperience}
            />
          </div>
          <div className="w-full md:w-2/3">
            <ExperienceCard experience={selectedExperience} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceTimeline({ experiences, selectedExperience, setSelectedExperience }:any ) {
  return (
    <div className="flex flex-col space-y-4 rounded-xl">
      {experiences.map((exp:any, index:any) => (

        <motion.button
          key={index}
          onClick={() => setSelectedExperience(exp)}
          className={`p-4 transition-all rounded-xl ${
            selectedExperience === exp ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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

