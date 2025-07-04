"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
// import { Building2, Calendar, MapPin, Trophy } from 'lucide-react'

export default function ExperiencePage() {
  const router = useRouter()

  const internships = [
    {
      company: "IBM SkillsBuild with CSRBOX",
      role: "AI/ML Intern",
      duration: "2 months(June 2024)",
      location: "Remote",
      description:
        "Developed skills in data analysis, model training, and implementation of machine-learning algorithms. Contributed to an SDG-focused project applying AI/ML techniques to solve environmental and social challenges.",
      achievements: [
        "Built 3 ML models",

        "Presented findings to senior mentors",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "Infosys limited",
      role: "Trainee",
      duration: "1 month(April 2018) ",
      location: "Infosys,Mysore",
      description:
        " Acquired foundational knowledge of IT tools, technologies, and problem-solving strategies in businesscontexts.Developed a strong understanding of technology’s role in delivering business solutions and enhancing operational efficiency.",

      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 pt-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            My Journey
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Two amazing internships that taught me more than just coding.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-12">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-2xl flex items-center gap-3">
                        <span>🏢</span>
                        {internship.company}
                      </CardTitle>
                      <CardDescription
                        className={`text-transparent bg-gradient-to-r ${internship.color} bg-clip-text font-semibold text-lg`}
                      >
                        {internship.role}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-white/70">
                        <span>📅</span>
                        {internship.duration}
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <span>📍</span>
                        {internship.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-6 leading-relaxed text-lg">{internship.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-yellow-400">🏆</span>
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {internship.achievements?.map((achievement, achievementIndex) => (
                        <Badge
                          key={achievementIndex}
                          variant="secondary"
                          className="bg-white/20 text-white justify-start p-2"
                        >
                          ✨ {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Cups of Coffee", value: "∞", icon: "☕" },
            { label: "Lines of Code", value: "10K+", icon: "💻" },
            { label: "Bugs Fixed", value: "99+", icon: "🐛" },
            { label: "Late Nights", value: "Many", icon: "🌙" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <Button
            onClick={() => router.push("/secret")}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Ready for a Secret? 🤫
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
