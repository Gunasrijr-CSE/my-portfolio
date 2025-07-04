"use client"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Algae-Farming Chatbot",
      subtitle: "My Pehla Pyaar...No Pehela PROJECT",
      description:
        "Chatbot that answers algae-farming questions and an ML model that detects algal blooms. My very first AI adventure.",
      tech: ["Python", "TensorFlow", "IBM Cloud"],
      emoji: "🌱",
      gradient: "from-red-400 to-pink-600",
    },
    {
      title: "OceanVac",
      subtitle: "Cleaning the seas, one frame at a time",
      description:
        "YOLO-v8 underwater-plastic detector plus a gamified EcoPoints tracker that encourages divers to remove trash.",
      tech: ["Python", "YOLO-v8", "React", "FastAPI"],
      emoji: "🌊",
      gradient: "from-blue-400 to-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6 text-white">
      {/* header */}
      <header className="text-center mb-14">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          My Projects 🎨
        </h1>
      </header>

      {/* projects grid */}
      <section className="grid gap-10 md:grid-cols-2 mb-16">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
          >
            {/* card header */}
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">{p.emoji}</span>
              <div>
                <h2 className="text-2xl font-semibold">{p.title}</h2>
                <p className={`text-transparent bg-gradient-to-r ${p.gradient} bg-clip-text font-medium`}>
                  {p.subtitle}
                </p>
              </div>
            </div>

            {/* description */}
            <p className="text-white/80 mb-4">{p.description}</p>

            {/* tech badges */}
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium leading-none tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* navigation */}
      <div className="text-center">
        <a
          href="/experience"
          className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
        >
          Check Out My Experience 💼
        </a>
      </div>
    </div>
  )
}
