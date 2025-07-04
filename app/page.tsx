"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function NotFoundPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLoadDeveloper = () => {
    setLoading(true)
    setTimeout(() => {
      router.push("/elevator")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">404</h1>
          <h2 className="text-2xl md:text-3xl mb-6">Developer Not Found</h2>

          <div className="bg-gray-900 p-6 rounded-lg mb-8 text-left">
            <div className="text-red-400 mb-2">Error: Developer.exe has stopped working</div>
            <div className="text-yellow-400 mb-2">Reason: Probably stuck in an infinite loop</div>
            <div className="text-blue-400 mb-4">
              <code>
                while(!done) {"{"}
                <br />
                &nbsp;&nbsp;console.log("Still coding...");
                <br />
                &nbsp;&nbsp;// TODO: fix this loop
                <br />
                {"}"}
              </code>
            </div>
            <div className="text-green-400">Status: Debugging in progress...</div>
          </div>

          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="mb-8"
          >
            <div className="text-lg">Attempting to load developer...</div>
            <div className="flex justify-center mt-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-green-400 rounded-full mx-1"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>

          <Button
            onClick={handleLoadDeveloper}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-8 text-lg"
          >
            {loading ? (
              <div className="flex items-center">
                <motion.div
                  className="w-4 h-4 border-2 border-black border-t-transparent rounded-full mr-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                Loading Developer...
              </div>
            ) : (
              "Load Developer"
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
