"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function GoodbyePage() {
  const [showGirl, setShowGirl] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = [
    "Thanks for visiting my portfolio! ",
    "See you in the digital world! 🌐",
    "Bye bye! ",
  ]

  useEffect(() => {
    // Show initial message
    const timer1 = setTimeout(() => setShowMessage(true), 1000)

    // Cycle through messages
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 2000)

    // Start the goodbye sequence after showing messages
    const timer2 = setTimeout(() => {
      setShowGirl(false)
    }, 12000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearInterval(messageInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 flex items-center justify-center overflow-hidden relative">
      {/* Swirl/Twirl Background Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-45"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent transform -rotate-45"></div>
      </motion.div>

      {/* Multiple swirl layers */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{
            duration: 15 + i * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 0.5,
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/${2 + i} to-transparent transform rotate-${i * 30}`}
          ></div>
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="text-center z-10 relative">
        <AnimatePresence mode="wait">
          {showGirl ? (
            <motion.div
              key="girl-present"
              initial={{ scale: 1, opacity: 1 }}
              exit={{
                scale: 0.3,
                opacity: 0,
                rotate: 720,
                y: -200,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                rotate: { duration: 2, ease: "easeInOut" },
              }}
              className="flex flex-col items-center"
            >
              {/* Girl Character */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="text-8xl md:text-9xl mb-8"
              >
                👩‍💻
              </motion.div>

              {/* Messages */}
              <AnimatePresence mode="wait">
                {showMessage && (
                  <motion.div
                    key={currentMessage}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-md mx-auto"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">{messages[currentMessage]}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="final-message"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8"
              >
                WHOOOOSH! 🌪️
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-2xl md:text-3xl text-white font-bold mb-4"
              >
                She's gone back to the code! 💻
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-lg text-white/80"
              >
                
              </motion.div>

              {/* Return home button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                onClick={() => (window.location.href = "/")}
                className="mt-8 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Over? 🔄
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Whoosh text effects */}
      <AnimatePresence>
        {!showGirl && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
                className="absolute text-4xl pointer-events-none"
              >
                {["💨", "🌪️", "✨", "⭐", "💫", "🌟", "💖", "👋"][i]}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
