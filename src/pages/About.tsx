import React from "react";
import Navbar from "@/components/Navbar";
import { Users, Target, Lightbulb, TrendingUp, Briefcase, Code, Terminal } from "lucide-react";
import { motion, Variants } from "framer-motion"; // Assuming framer-motion is installed
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Using standard Card component with custom styling

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};
// ----------------------------

interface Pillar {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  glowClass: string;
}

const About: React.FC = () => {
  const pillars: Pillar[] = [
    {
      icon: Target,
      title: "SKILLS ACQUISITION",
      description: "Industry-aligned curriculum that prepares students for real-world cyber challenges and digital transformation.",
      color: "text-neon-green",
      glowClass: "group-hover:shadow-neon-green"
    },
    {
      icon: Users,
      title: "OPPORTUNITY MAPPING",
      description: "Direct pathways to internships, placements, and career advancement within the global tech ecosystem.",
      color: "text-electric-blue",
      glowClass: "group-hover:shadow-electric-blue"
    },
    {
      icon: Lightbulb,
      title: "FUTURE INNOVATION",
      description: "Cutting-edge labs and AI-powered tools for next-gen learning, research, and project incubation.",
      color: "text-deep-purple",
      glowClass: "group-hover:shadow-deep-purple"
    }
  ];

  const whatWeDo = [
    { icon: Code, title: "Deep-Dive Programming", desc: "Comprehensive training programs aligned with specialized industry needs." },
    { icon: Briefcase, title: "Strategic Career Hacking", desc: "Interview preparation, resume optimization, and high-impact networking." },
    { icon: Terminal, title: "Decentralized Lab Access", desc: "Hands-on experience with cutting-edge cloud and decentralized technologies." },
    { icon: TrendingUp, title: "Guaranteed Placement Stream", desc: "Direct connections with top-tier recruiters and personalized job placement assistance." }
  ];

  // Component structure uses motion.div for animation on scroll/load
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16 md:pt-20 relative overflow-hidden">
        
        {/* Animated Background Blob for the whole page */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-neon-green/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>

        {/* --- 1. Hero Section: The Manifesto --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-b border-electric-blue/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Left Column: Text Content */}
              <div>
                <motion.h1 
                  variants={itemVariants} 
                  className="text-6xl md:text-7xl font-black mb-6 uppercase tracking-tight"
                >
                  Our <span className="text-electric-blue drop-shadow-lg">Manifesto</span>
                </motion.h1>
                <motion.div variants={itemVariants} className="space-y-6 text-xl text-gray-400">
                  <p>
                    <strong className="text-neon-green">"Code is power. Opportunity must be ubiquitous."</strong>
                  </p>
                  <p>
                    At **Gen-Z Technologies**, we're more than an institution; we are a **digital accelerator**. Our mission is to transform the educational matrix by bridging the critical gap between academic theory and future industry demand.
                  </p>
                  <p>
                    Our comprehensive approach combines skill mastery, career simulation, decentralized innovation labs, and direct placement support to ensure every user (student) is not just educated, but **fully armed** for the future of work.
                  </p>
                </motion.div>
              </div>

              {/* Right Column: Vision Core (The Glowing Hexagon) */}
              <motion.div 
                variants={itemVariants} 
                className="relative flex justify-center items-center p-8 transition-transform duration-500 hover:scale-[1.03]"
              >
                <div className="w-full h-full absolute inset-0 z-0 bg-deep-purple/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
                <Card className="relative bg-black border-2 border-neon-green/50 w-full max-w-sm aspect-square shadow-2xl shadow-neon-green/30 transform transition-all duration-700 hover:shadow-electric-blue/50">
                  <div className="text-center p-8 absolute inset-0 flex flex-col justify-center">
                    <div className="text-7xl mb-4 text-neon-green/90 animate-pulse-slow">⚡</div>
                    <h3 className="text-3xl font-black text-electric-blue mb-2 uppercase">Core Vision</h3>
                    <p className="text-gray-400 text-lg">
                      Empowering the next generation with **future-ready skills** and unlimited possibilities in the global network.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* --- 2. Mission Pillars: Structured Grid --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950/50 relative border-b border-deep-purple/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-4 uppercase">
                Our <span className="text-neon-green">Operating Protocol</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-4xl mx-auto border-b border-deep-purple/30 pb-4">
                We focus on three fundamental pillars that drive student success and industry readiness
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.4 }}
            >
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div variants={itemVariants} key={index} className="group transition-all duration-500 cursor-pointer">
                    <Card className={`relative bg-black/70 border border-electric-blue/30 shadow-xl transition-all duration-500 hover:border-neon-green ${pillar.glowClass} hover:shadow-2xl`}>
                      {/* Decorative corner element */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-green/50"></div>
                      
                      <CardHeader className="text-center p-6">
                        <div className="mx-auto mb-4 p-4 rounded-full bg-deep-purple/50 border border-deep-purple w-fit transition-colors duration-300 group-hover:bg-deep-purple/80">
                          <Icon className={`h-10 w-10 ${pillar.color} transition-colors duration-300 group-hover:text-white`} />
                        </div>
                        <CardTitle className="text-2xl font-extrabold uppercase text-white tracking-widest">
                          {pillar.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center text-gray-400 text-lg leading-relaxed px-4">
                          {pillar.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* --- 3. What We Do: Technical Feature Stream --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-4 uppercase">
                Function <span className="text-deep-purple">Tree</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our defined operational streams ensure maximum efficacy and measurable student outcomes.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              {whatWeDo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div variants={itemVariants} key={index} className="group transition-transform duration-300 hover:scale-105">
                    <Card className="bg-gray-900 border-l-4 border-neon-green/50 hover:border-l-4 hover:border-neon-green transition-all duration-300 shadow-lg group-hover:shadow-neon-green/30">
                      <CardHeader className="flex flex-row items-center space-x-3">
                        <Icon className="h-6 w-6 text-neon-green transition-colors duration-300 group-hover:text-electric-blue" />
                        <CardTitle className="text-xl font-semibold uppercase tracking-wider text-white">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-400">
                          {item.desc}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;