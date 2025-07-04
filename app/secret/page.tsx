"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { DoorOpenIcon as Door, MessageCircle } from 'lucide-react'

export default function SecretPage() {
  const [knockStage, setKnockStage] = useState(0)
  const [showDoor, setShowDoor] = useState(true)

  const knockSequence = [
    "🚪 *knock knock*",
    "Who's there?",
    "A secret.",
    "A secret who?",
    "A secret… I built this entire portfolio in one night! 🌙",
    "Did I use an LLM? Yes. 🤖",
    "Did I learn something? Also yes. 📚",
  ]

  useEffect(() => {
    setShowDoor(true)
  }, [])

  const handleKnock = () => {
    if (knockStage < knockSequence.length - 1) {
      setKnockStage(knockStage + 1)
    }
  }

  const isUserTurn = knockStage === 1 || knockStage === 3

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 p-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Door Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={knockStage > 0 ? { rotate: [0, -2, 2, -1, 1, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="text-9xl mb-4"
          >
            🚪
          </motion.div>

          {knockStage === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white text-xl mb-8"
            >
              There's someone at the door... 🤔
            </motion.div>
          )}
        </motion.div>

        {/* Knock Knock Dialogue */}
        <div className="space-y-4 mb-8 min-h-[300px]">
          <AnimatePresence mode="wait">
            {knockSequence.slice(0, knockStage + 1).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`${
                    index % 2 === 0
                      ? "bg-blue-600/20 border-blue-400/30 ml-8"
                      : "bg-purple-600/20 border-purple-400/30 mr-8"
                  } backdrop-blur-lg`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 ${index % 2 === 0 ? "text-blue-400" : "text-purple-400"}`}>💬</span>
                      <span className={`text-lg ${index % 2 === 0 ? "text-blue-100" : "text-purple-100"}`}>{line}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Buttons */}
        <div className="space-y-4">
          {knockStage === 0 && (
            <Button
              onClick={handleKnock}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span className="mr-2">🚪</span>
              Knock Knock! 👊
            </Button>
          )}

          {isUserTurn && (
            <Button
              onClick={handleKnock}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {knockStage === 1 ? "Who's there? 🤷‍♀️" : "A secret who? 🤫"}
            </Button>
          )}

          {knockStage > 1 && knockStage < knockSequence.length - 1 && !isUserTurn && (
            <Button
              onClick={handleKnock}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Continue... 👂
            </Button>
          )}

          {knockStage === knockSequence.length - 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
              <Button
                onClick={() => (window.location.href = "/goodbye")}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Time to Say Goodbye! 👋
              </Button>
            </motion.div>
          )}
        </div>

        {/* Fun fact at the bottom */}
        {knockStage >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
           
          </motion.div>
        )}
      </div>
    </div>
  )
}
