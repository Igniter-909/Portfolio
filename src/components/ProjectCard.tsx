import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubLink: string
  liveLink: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <motion.div
      className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] overflow-hidden cursor-pointer rounded-2xl"
      onClick={toggleExpand}
      layout
    >
      <LazyLoadImage
        src={project.image}
        alt={project.title}
        effect="blur"
        className="transition-all duration-1000 ease-in-out object-cover w-full h-full"
        style={{ filter: isExpanded ? "blur(10px)" : "none" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: isExpanded ? 0.8 : 0.6 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExpanded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h2>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-60 p-4 sm:p-6 text-white overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{project.title}</h2>
            <p className="text-xs sm:text-sm mb-2 sm:mb-4">{project.description}</p>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Technologies:</h3>
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between mt-4 sm:mt-10">
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-white hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-base sm:text-xl" />
                <span className="text-xs sm:text-sm">GitHub</span>
              </motion.a>
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-white hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="text-sm sm:text-lg" />
                <span className="text-xs sm:text-sm">Live Demo</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProjectCard

