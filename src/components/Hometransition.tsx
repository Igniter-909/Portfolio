import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HomeLoader } from "./PortfolioLoader"

interface HomeTransitionProps {
  children: ReactNode
}

export const HomeTransition: React.FC<HomeTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)


  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <HomeLoader onComplete={handleLoaderComplete} />
        </motion.div>
      ) : (
        <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

