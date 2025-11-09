import { Brain, Target, Zap, Flame } from "lucide-react"
import { motion } from "framer-motion" // Importing motion for enhanced interactivity
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" // Using a standard Card component and adding custom styling

// Note: Assuming 'motion' from framer-motion is available (i.e., 'framer-motion' is installed)

const HighlightItem = ({ highlight, index }) => {
  const Icon = highlight.icon

  // Framer-motion variants for staggered animation on load
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1, // Staggered delay
      },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(76, 252, 255, 0.6)" }} // Dynamic hover effect
      className="relative group w-full"
    >
      <div className={`absolute -inset-0.5 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ${highlight.backgroundGlow}`}></div>

      <Card
        className={`relative bg-gray-900/90 border border-transparent group-hover:border-electric-blue transition-all duration-500 overflow-hidden shadow-2xl ${highlight.borderColor}`}
      >
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none [background:radial-gradient(50%_50%_at_50%_50%,_#33ff3320_0%,_transparent_50%)]"></div>

        <CardHeader className="text-center p-6 pb-4">
          <div
            className={`mx-auto mb-4 p-4 rounded-full bg-black/50 border-2 ${highlight.borderColor} transition-all duration-500 group-hover:bg-black/80 w-fit`}
          >
            <Icon className={`h-8 w-8 transition-colors duration-500 ${highlight.color}`} />
          </div>
          <CardTitle className="text-xl font-bold text-white group-hover:text-neon-green transition-colors duration-500">
            {highlight.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <CardDescription className="text-center text-gray-400 leading-relaxed text-sm">
            {highlight.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Industry-Ready Training Programs",
      description: "Comprehensive curriculum designed with industry experts to ensure you're job-ready from day one.",
      color: "text-neon-green",
      borderColor: "border-neon-green",
      backgroundGlow: "bg-gradient-to-r from-neon-green to-electric-blue"
    },
    {
      icon: Target,
      title: "Placement & Internship Support",
      description: "Direct connections with top companies and personalized placement assistance for guaranteed success.",
      color: "text-electric-blue",
      borderColor: "border-electric-blue",
      backgroundGlow: "bg-gradient-to-r from-electric-blue to-deep-purple"
    },
    {
      icon: Zap,
      title: "AI-Powered Learning Tools",
      description: "Cutting-edge AI tools including resume builders, interview practice, and personalized learning paths.",
      color: "text-deep-purple",
      borderColor: "border-deep-purple",
      backgroundGlow: "bg-gradient-to-r from-deep-purple to-neon-pink"
    },
    {
      icon: Flame,
      title: "Hands-On Workshops & Labs",
      description: "Practical experience through innovation labs, hackathons, and real-world project development.",
      color: "text-neon-pink",
      borderColor: "border-neon-pink",
      backgroundGlow: "bg-gradient-to-r from-neon-pink to-neon-green"
    }
  ]

  // Framer-motion variant for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background Lighting/Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-wider text-white">
            Why <span className="text-neon-green/90 drop-shadow-neon">Gen-Z Technologies</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light border-b border-neon-green/30 pb-4">
            We're revolutionizing education with **future-focused training** that bridges the gap between learning and earning in the digital age.
          </p>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when in view
        >
          {highlights.map((highlight, index) => (
            <HighlightItem key={index} highlight={highlight} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HighlightsSection

/*
  NOTE: This unique design uses custom Tailwind classes for the 'Cyberpunk' theme. 
  For this component to work correctly, you would need to define the following in your Tailwind config (tailwind.config.js):

  extend: {
    colors: {
      'neon-green': '#33ff33',
      'electric-blue': '#4cfffa',
      'deep-purple': '#a020f0',
      'neon-pink': '#ff69b4',
    },
    keyframes: {
      blob: {
        "0%": { transform: "translate(0px, 0px) scale(1)" },
        "33%": { transform: "translate(30px, -50px) scale(1.1)" },
        "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        "100%": { transform: "translate(0px, 0px) scale(1)" },
      },
    },
    animation: {
      blob: "blob 7s infinite cubic-bezier(0.64, 0.0, 0.35, 1.0)",
    },
    boxShadow: {
      'neon': '0 0 5px #33ff33, 0 0 10px #33ff33, 0 0 20px #33ff33',
    },
  },
*/