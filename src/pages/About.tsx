import { IoDocumentAttachOutline } from "react-icons/io5"
import { FaRegArrowAltCircleRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Typewriter from "typewriter-effect"
import Button from "../components/Button"
import StarryBackground from "../components/StarryBackground"
import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate();
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div
      ref={sectionRef}
      id="About"
      className="relative flex flex-col items-center justify-start w-full min-h-screen bg-[#09152f] px-0 sm:px-4 md:px-12 py-12 md:py-16 overflow-hidden"
    >
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover opacity-20">
        <source src="/videos/videoplayback.mp4" type="video/mp4" />
      </video>
      <StarryBackground />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center w-full mb-2 md:mb-12"
      >
        <h1 className="special-font hero-heading text-white text-2xl sm:text-4xl md:text-6xl lg:text-8xl">
          {inView && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("About").start()
              }}
            />
          )}
        </h1>
      </motion.div>

      <div className="flex flex-col items-center w-full justify-center max-w-6xl px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col text-white max-w-3xl text-center md:text-left"
        >
          <motion.h2 variants={itemVariants} className="text-lg md:text-3xl font-bold mb-4">
            {inView && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Hi, I'm Roshan").start()
                }}
              />
            )}
          </motion.h2>

          <motion.div variants={itemVariants} className="text-xs md:text-lg leading-relaxed text-justify">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              I am a passionate Full-Stack Developer and Machine Learning & AI Engineer with a strong foundation in
              building scalable, user-friendly applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4"
            >
              My interest in AI and machine learning allows me to develop intelligent systems that solve real-world
              problems, leveraging data-driven insights and automation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4"
            >
              I am always eager to explore new technologies, contribute to meaningful projects, and enhance my skills to
              stay ahead in the ever-evolving tech landscape.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-8 justify-center md:justify-start"
          >
            <Button
              id="resume"
              title="My Resume"
              leftIcon={<IoDocumentAttachOutline />}
              containerClass="!bg-yellow-300 flex-center gap-2 w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Pk5NXCGgSIw_BtuURbFtg0lEM5riFDth/view?usp=sharing",
                  "_blank",
                )
              }
            />
            <Button
              id="contact"
              title="Hire Me"
              containerClass="flex-center gap-2 w-full sm:w-auto"
              rightIcon={<FaRegArrowAltCircleRight />}
              onClick={() => {
                navigate("/contact")
              }}
            />
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default About

