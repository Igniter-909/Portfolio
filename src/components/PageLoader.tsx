import { motion } from "framer-motion"

interface PageLoaderProps {
  pageName: string
  color: string
}

export const PageLoader = ({ pageName, color }: PageLoaderProps) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ borderColor: color }}
          initial={{ borderWidth: 2, borderStyle: "solid", pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        ></motion.div>
        <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
            style={{ color }}
          >
            {pageName}
          </motion.h2>
        </div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: color,
              top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
              left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
          ></motion.div>
        ))}
      </div>
    </div>
  )
}

