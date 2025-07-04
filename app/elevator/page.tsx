"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ElevatorPage() {
  const [elevatorOpen, setElevatorOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer1 = setTimeout(() => setElevatorOpen(true), 1000)
    const timer2 = setTimeout(() => setShowIntro(true), 2500)
    const timer3 = setTimeout(() => setShowButton(true), 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-4xl">
        {/* Elevator */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Elevator shaft */}
            <div className="w-32 h-64 bg-gray-800 border-4 border-gray-600 relative">
              {/* Elevator doors */}
              <div className="absolute inset-0 flex">
                <motion.div
                  className="w-1/2 h-full bg-gradient-to-r from-gray-700 to-gray-600 border-r-2 border-gray-500"
                  animate={{ x: elevatorOpen ? -64 : 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                  className="w-1/2 h-full bg-gradient-to-l from-gray-700 to-gray-600 border-l-2 border-gray-500"
                  animate={{ x: elevatorOpen ? 64 : 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>

              {/* Girl character */}
              <AnimatePresence>
                {elevatorOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-6xl">👩‍💻</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Elevator floor indicator */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-3 py-1 rounded">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                FLOOR 1
              </motion.div>
            </div>
          </div>
        </div>

        {/* Introduction text */}
        <AnimatePresence>
          {showIntro && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center text-white"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Hello everybody 
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-xl md:text-2xl mb-4"
              ></motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="text-lg mb-8 max-w-2xl mx-auto"
              >
                I am Gunasri J R <br />
                An ambitious girl, studying 3rd year Computer Science Engineering in Vidyavardhaka College of
                Engineering, Mysore.
                <br />
                Ready to show you some projects and my journey in tech!
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue button */}
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Button
                onClick={() => router.push("/projects")}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Let's Explore My Projects!
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
