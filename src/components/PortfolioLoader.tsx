import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type React from "react"

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Bonjour", lang: "French" },
  { text: "Namaste", lang: "Hindi" },
  { text: "Hola", lang: "Spanish" },
  { text: "Ciao", lang: "Italian" },
  { text: "Konnichiwa", lang: "Japanese" },
]

interface HomeLoaderProps {
  onComplete: () => void
}

export const HomeLoader: React.FC<HomeLoaderProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === greetings.length - 1) {
          clearInterval(timer)
          setTimeout(onComplete, 1000)
          return prevIndex
        }
        return prevIndex + 1
      })
    }, 1500)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#4a0e8f] to-[#6a1fbd]">
      <div className="relative w-72 h-72">
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-dashed border-purple-300 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        ></motion.div>
        <div className="absolute inset-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white">{greetings[index].text}</h2>
              <p className="text-sm text-purple-200">{greetings[index].lang}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              top: `${50 + 48 * Math.sin((i * Math.PI) / 6)}%`,
              left: `${50 + 48 * Math.cos((i * Math.PI) / 6)}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.15,
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  )
}

