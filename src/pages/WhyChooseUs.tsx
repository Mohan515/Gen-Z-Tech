import React from "react";
import { CheckCircle, Award, Users, Zap, Target, BarChart3, TrendingUp, Handshake, Code, X } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
// --- UPDATED IMPORTS ---
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Use standard Button for the CTA
// -----------------------

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

const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 12,
        },
    },
};
// ----------------------------

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  color: string;
}

interface Stat {
  number: string;
  label: string;
  color: string;
}

const WhyChooseUs: React.FC = () => {
  const reasons: Reason[] = [
    {
      icon: TrendingUp, 
      title: "PROVEN METRICS & OUTCOMES",
      description: "Validated 95% placement rate with quantified salary acceleration.",
      details: [
        "10,000+ Students Successfully Deployed",
        "Average Salary Increase: 300% (High-Efficacy ROI)",
        "Partnerships with 500+ Hiring Corporations",
        "Industry-Leading Success Metrics and Audits"
      ],
      color: "text-neon-green"
    },
    {
      icon: Code,
      title: "INDUSTRY-ALIGNED CURRICULUM",
      description: "Live training protocols designed by senior tech architects.",
      details: [
        "Curriculum Protocol Reviewed Quarterly by Global Tech Panels",
        "Latest Technology Stacks and Frameworks (Gen-AI, Web3)",
        "Real-World Project-Based Simulation Labs",
        "Mandatory Hands-On Experience with Enterprise Tools"
      ],
      color: "text-electric-blue"
    },
    {
      icon: Handshake,
      title: "DIRECT RECRUITER CHANNEL",
      description: "Exclusive partnerships for priority placement access.",
      details: [
        "Direct Access to Corporate Hiring Managers",
        "Exclusive Job Openings for Our Student Stream",
        "Regular Recruiter Interaction & Hacking Sessions",
        "Priority Consideration for High-Value Positions"
      ],
      color: "text-deep-purple"
    },
    {
      icon: Zap,
      title: "AI-POWERED PERSONALIZED LEARNING",
      description: "Adaptive technology for customized skill optimization.",
      details: [
        "AI-Driven Skill Gap Diagnostics (Real-Time)",
        "Personalized Adaptive Learning Pathways",
        "Smart Resume Optimization and Auto-Filtering",
        "AI-Powered, Real-Time Interview Simulation"
      ],
      color: "text-neon-pink"
    },
    {
      icon: BarChart3,
      title: "TRANSPARENT & MEASURABLE RESULTS",
      description: "Practical development with continuous data tracking.",
      details: [
        "Mandatory Portfolio of Real Project Assets",
        "Measurable Skill Development Metrics (Skill Trees)",
        "Continuous Automated Assessment and Feedback Loops",
        "Industry-Standard Certifications and Verifiable Badges"
      ],
      color: "text-neon-green"
    }
  ];

  const stats: Stat[] = [
    { number: "10,000+", label: "Students Deployed", color: "text-neon-green" },
    { number: "500+", label: "Hiring Partners", color: "text-electric-blue" },
    { number: "95%", label: "Placement Efficacy", color: "text-deep-purple" },
    { number: "₹18L+", label: "Avg. Package (AUDIT)", color: "text-neon-pink" }
  ];

  const achievements = [
    "Best EdTech Platform - Global Tech Awards 2024",
    "Top 10 Innovative Companies - Forbes Digital",
    "Excellence in Digital Education - NASSCOM Recognition",
    "Student Choice Award - Future-Ready Review"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 relative overflow-hidden">
        
        {/* --- Hero Section: Header --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-b border-neon-green/30">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tight"
            >
              SYSTEM <span className="text-electric-blue drop-shadow-lg">ADVANTAGE</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 border-b-4 border-deep-purple/30 inline-block pb-1"
            >
              We don't just teach - we transform the data stream. Here's what makes us the preferred choice.
            </motion.p>
          </div>
        </section>

        {/* --- Stats Section: Animated Data Console --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 relative border-b border-deep-purple/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div variants={statVariants} key={index} className="text-center p-6 border-2 border-electric-blue/30 bg-black/70 rounded-lg shadow-xl hover:shadow-electric-blue/30 transition-shadow duration-300">
                  <div className={`text-5xl md:text-7xl font-extrabold ${stat.color} mb-2 animate-pulse-slow`} style={{ animationDelay: `${index * 0.2}s` }}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Reasons Section: Layered Data Blocks --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider text-neon-green"
            >
              5 Core <span className="text-white">Protocols</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-10"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.1 }}
            >
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                const isOdd = index % 2 !== 0;

                return (
                  <motion.div variants={itemVariants} key={index} className="group transition-all duration-500 hover:scale-[1.01]">
                    {/* Replaced NeonCard with Card */}
                    <Card className={`bg-gray-900/90 border border-deep-purple/50 shadow-2xl transition-all duration-500 hover:border-electric-blue`}>
                      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 items-center ${isOdd ? 'lg:grid-flow-col-dense' : ''}`}>
                        
                        {/* Title/Header Column */}
                        <div className={`lg:col-span-1 border-r-4 border-deep-purple/30 p-4 ${isOdd ? 'lg:order-2 lg:border-l-4 lg:border-r-0' : 'lg:order-1'}`}>
                          {/* Replaced NeonCardHeader with CardHeader */}
                          <CardHeader className="p-0">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className={`p-3 rounded-lg bg-black border-2 ${reason.color.replace('text-', 'border-')} transition-all duration-300 group-hover:bg-electric-blue/20`}>
                                <Icon className={`h-8 w-8 ${reason.color} transition-transform duration-300 group-hover:scale-110`} />
                              </div>
                              <div>
                                {/* Replaced NeonCardTitle with CardTitle */}
                                <CardTitle className="text-2xl font-bold uppercase tracking-widest text-white">
                                  {reason.title}
                                </CardTitle>
                                {/* Replaced NeonCardDescription with CardDescription */}
                                <CardDescription className="text-lg text-gray-400 mt-1">
                                  {reason.description}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                        </div>
                        
                        {/* Details/List Column */}
                        <div className={`lg:col-span-2 p-4 ${isOdd ? 'lg:order-1' : 'lg:order-2'}`}>
                          {/* Replaced NeonCardContent with CardContent */}
                          <CardContent className="p-0">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {reason.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start space-x-3 text-sm border-b border-gray-700 pb-1 group-hover:border-neon-green/50 transition-colors duration-300">
                                  <CheckCircle className={`h-5 w-5 ${reason.color} mt-0.5 flex-shrink-0 animate-pulse-slow`} style={{ animationDelay: `${idx * 0.1}s` }} />
                                  <span className="text-gray-300">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* --- Achievements Section: Verified Credentials --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 border-t-2 border-neon-pink/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider text-neon-pink"
            >
              SYSTEM <span className="text-white">CREDENTIALS</span>
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div variants={itemVariants} key={index} className="group transition-all duration-500 hover:scale-[1.02]">
                  {/* Replaced NeonCard with Card */}
                  <Card className="bg-black/80 border-l-4 border-electric-blue/50 shadow-xl group-hover:border-neon-pink">
                    {/* Replaced NeonCardContent with CardContent */}
                    <CardContent className="flex items-center space-x-4 p-6">
                      <Award className="h-8 w-8 text-neon-pink flex-shrink-0 animate-pulse-slow" style={{ animationDelay: `${index * 0.1}s` }} />
                      <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{achievement}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Comparison Section: Diagnostic Check --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider text-electric-blue"
            >
              DIAGNOSTIC <span className="text-white">REPORT</span>
            </motion.h2>
            
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Traditional Training - FAILURE State */}
              <motion.div variants={itemVariants}>
                {/* Replaced NeonCard with Card */}
                <Card className="border-4 border-red-700/50 bg-red-900/10 shadow-xl shadow-red-700/30">
                  <CardHeader className="p-6 border-b border-red-700/50">
                    {/* Replaced NeonCardTitle with CardTitle */}
                    <CardTitle className="text-2xl text-red-400 uppercase tracking-widest flex items-center">
                      <Zap className="h-6 w-6 mr-2 rotate-45" />
                      TRADITIONAL TRAINING (LEGACY)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="text-gray-400 flex items-center text-lg">
                        <X className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                        Outdated Curriculum Protocol
                      </li>
                      <li className="text-gray-400 flex items-center text-lg">
                        <X className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                        Limited Industry Connection Points
                      </li>
                      <li className="text-gray-400 flex items-center text-lg">
                        <X className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                        Generic One-Size-Fits-All Approach
                      </li>
                      <li className="text-gray-400 flex items-center text-lg">
                        <X className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                        No Guaranteed Placement Efficacy
                      </li>
                      <li className="text-gray-400 flex items-center text-lg">
                        <X className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                        Minimal Hands-On Simulation
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Gen-Z Technologies - PASS State */}
              <motion.div variants={itemVariants}>
                {/* Replaced NeonCard with Card */}
                <Card className="border-4 border-neon-green/50 bg-neon-green/10 shadow-xl shadow-neon-green/30">
                  <CardHeader className="p-6 border-b border-neon-green/50">
                    {/* Replaced NeonCardTitle with CardTitle */}
                    <CardTitle className="text-2xl text-neon-green uppercase tracking-widest flex items-center">
                      <Zap className="h-6 w-6 mr-2" />
                      GEN-Z TECHNOLOGIES (ADVANCED)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="text-gray-300 font-semibold flex items-center text-lg">
                        <CheckCircle className="h-6 w-6 text-electric-blue mr-3 flex-shrink-0 animate-pulse-slow" />
                        Latest Industry-Aligned Protocol
                      </li>
                      <li className="text-gray-300 font-semibold flex items-center text-lg">
                        <CheckCircle className="h-6 w-6 text-electric-blue mr-3 flex-shrink-0 animate-pulse-slow" />
                        Direct Recruiter Partnership Channel
                      </li>
                      <li className="text-gray-300 font-semibold flex items-center text-lg">
                        <CheckCircle className="h-6 w-6 text-electric-blue mr-3 flex-shrink-0 animate-pulse-slow" />
                        AI-Powered Personalized Learning
                      </li>
                      <li className="text-gray-300 font-semibold flex items-center text-lg">
                        <CheckCircle className="h-6 w-6 text-electric-blue mr-3 flex-shrink-0 animate-pulse-slow" />
                        95% Verified Placement Efficacy
                      </li>
                      <li className="text-gray-300 font-semibold flex items-center text-lg">
                        <CheckCircle className="h-6 w-6 text-electric-blue mr-3 flex-shrink-0 animate-pulse-slow" />
                        Extensive Hands-On Project Portfolio
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- CTA Section: Final Command Prompt --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-t-2 border-deep-purple/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 uppercase"
            >
              Ready to Execute the <span className="text-neon-pink drop-shadow-neon">DIFFERENCE</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 mb-8"
            >
              Join the successful professionals who chose **System Advantage** for their career transformation.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              {/* Replaced NeonButton with Button */}
              <Button size="lg" className="uppercase font-bold tracking-widest bg-neon-green hover:bg-neon-green/80 text-gray-900 border border-neon-green shadow-neon">
                Start Your Journey
              </Button>
              {/* Replaced NeonButton with Button */}
              <Button size="lg" variant="outline" className="uppercase font-bold tracking-widest border-electric-blue/50 text-electric-blue hover:text-white hover:bg-electric-blue/20">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhyChooseUs;