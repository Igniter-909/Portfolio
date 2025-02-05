import { useInView } from "react-intersection-observer"
import { Typewriter } from "react-simple-typewriter"
import StarryBackground from "../components/StarryBackground"
import { motion } from "framer-motion"
import { useState, type FormEvent, type ChangeEvent } from "react"
import emailjs from "@emailjs/browser"
import Footer from "../components/Footer"

const Contact = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus("error")
    }
  }

  return (
    <div
      id="Contact"
      className="min-h-screen w-full px-4 pt-12 relative bg-[#09152f] text-white flex flex-col justify-between"
    >
      <StarryBackground />
      <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col justify-center">
        <motion.div
          ref={sectionRef}
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
            {inView && <Typewriter words={["Get in Touch"]} cursor cursorStyle="|" typeSpeed={90} />}
          </h1>
          <p className="text-sm sm:text-base text-gray-300">Let's work together on your next project</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto space-y-2 sm:space-y-6 p-4 sm:p-6 rounded-lg backdrop-blur"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="flex flex-col"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="name" className="mb-1 text-xs sm:text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-transparent border border-white/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-sm focus:outline-none focus:border-white transition-all hover:border-white/60"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="email" className="mb-1 text-xs sm:text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-transparent border border-white/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-sm focus:outline-none focus:border-white transition-all hover:border-white/60"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="message" className="mb-1 text-xs sm:text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="bg-transparent border border-white/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-sm focus:outline-none focus:border-white resize-none transition-all hover:border-white/60"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />
          </motion.div>
          <motion.button
            type="submit"
            disabled={status === "loading"}
            className={`w-full font-semibold py-2 sm:py-3 text-sm rounded-xl sm:rounded-2xl transition-colors ${
              status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-white text-black hover:bg-white/90"
            }`}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center text-sm">
              Message sent successfully!
            </motion.p>
          )}

          {status === "error" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-center text-sm">
              Failed to send message. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

