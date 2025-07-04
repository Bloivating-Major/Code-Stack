"use client"

import { motion } from "framer-motion"
import { Zap, Cpu, Shield, CloudLightning, Workflow, ColumnsSettings } from "lucide-react"

const solutions = [
  {
    icon: Zap,
    title: "AI Integration",
    description: "Supercharge workflows with predictive automation, LLMs, and GenAI.Use AI where it matters: decisions, operations, and customer experience.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Cpu,
    title: "RAG + LLM Applications",
    description: "Build enterprise knowledge systems powered by Retrieval-Augmented Generation. Think ChatGPT — but trained on your business.",
    gradient: "from-blue-400 to-purple-500",
  },
  {
    icon: Shield,
    title: "Web3 & Digital Identity",
    description: "Enable trust, transparency, and control with smart contracts and decentralized protocols.",
    gradient: "from-green-400 to-blue-500",
  },
  {
    icon: ColumnsSettings,
    title: "Custom Dev & Integration",
    description: "Bridge platforms. Build powerful internal tools. Launch apps. Tailored engineering meets enterprise-grade performance.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Optimize business ops with intelligent bots, RPA, and AI copilots.Faster. Smarter. Error-free.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: CloudLightning,
    title: "Cloud Transformation",
    description: "Scale effortlessly with secure, flexible cloud-native architectures. From legacy migration to multi-cloud deployment we’ve got you covered.",
    gradient: "from-pink-400 to-red-500",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Transforming Industries.</span> One Stack at a Time.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From smart automation to immersive virtual experiences, Coderstack delivers domain-ready solutions powered by AI, LLMs, RAG, Web3, and beyond. Explore how we future-proof your business. 
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative glass-effect rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-2xl">
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${solution.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>

                {/* Hover Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
