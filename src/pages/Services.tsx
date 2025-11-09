import React from "react";
import { Code, Users, Brain, Zap, Award, BookOpen, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import { NeonButton } from "@/components/ui/neon-button"; // Assuming this component exists
// Using standard Card component with custom styling for better control
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; 

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

interface Service {
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  color: string;
  glowClass: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Campus Recruitment Training (CRT)",
      icon: Code,
      description: "300+ hours of structured, skill-intensive code training.",
      features: [
        "Technical Skills: DSA, Full-Stack, Gen-AI, DBMS, OS, CN.",
        "Aptitude & Soft Skills: Quant, Logic, GDs, PIs, Communication.",
        "Mock drives, hackathons, coding contests, and live projects.",
        "Personality development and confidence workshops."
      ],
      color: "text-neon-green",
      glowClass: "group-hover:shadow-neon-green/40"
    },
    {
      title: "Placements & Internships",
      icon: Users,
      description: "End-to-end career transition and placement support.",
      features: [
        "Corporate tie-ups with 100+ top-tier tech companies.",
        "PPO/PPI internship programs for early career exposure.",
        "Resume shortlisting, optimization, and expert mentoring.",
        "Real-time mock assessments and behavioral interview prep."
      ],
      color: "text-electric-blue",
      glowClass: "group-hover:shadow-electric-blue/40"
    },
    {
      title: "AI-Powered LMS & Innovation Labs",
      icon: Brain,
      description: "Cutting-edge tools for personalized and smart skill development.",
      features: [
        "AI Resume Builder & Virtual Interview Practice Engine.",
        "Smart Dashboard for progress tracking & Code Compiler access.",
        "Innovation Labs: AI, Data Science, IoT, AR/VR, Blockchain.",
        "Project-to-startup guidance and incubation mentorship."
      ],
      color: "text-deep-purple",
      glowClass: "group-hover:shadow-deep-purple/40"
    },
    {
      title: "Workshops & Webinars",
      icon: BookOpen,
      description: "Focused learning programs for niche, high-demand tech domains.",
      features: [
        "Domains: AI/ML, Cybersecurity, Cloud (AWS/Azure), Blockchain, Web3.",
        "1-2 day intense workshops & 1-week focused bootcamps.",
        "Ongoing webinars with global industry subject-matter experts.",
        "Certifications, badging, and portfolio-ready project completion."
      ],
      color: "text-neon-pink",
      glowClass: "group-hover:shadow-neon-pink/40"
    },
    {
      title: "Mentorship & Career Guidance",
      icon: Award,
      description: "Personalized, long-term strategic career pathway support.",
      features: [
        "1:1 mentorship sessions with established industry professionals.",
        "Mock interviews with real-time, actionable feedback loops.",
        "Job referrals through our exclusive partner networks.",
        "Personalized, adaptive career roadmaps based on performance."
      ],
      color: "text-neon-green",
      glowClass: "group-hover:shadow-neon-green/40"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 relative overflow-hidden">
        
        {/* --- Hero Section: Service Header --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-b border-deep-purple/30">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tight"
            >
              Our <span className="text-electric-blue drop-shadow-lg">Service Matrix</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 border-b-4 border-neon-green/30 inline-block pb-1"
            >
              Comprehensive solutions designed to transform students into **industry-ready cyber-professionals**
            </motion.p>
          </div>
        </section>

        {/* --- Services Grid: The Feature Stream --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group transition-all duration-500 cursor-pointer"
                  >
                    <Card 
                      className={`relative bg-gray-900/80 border border-electric-blue/30 overflow-hidden shadow-2xl transition-all duration-500 hover:border-neon-green ${service.glowClass} hover:shadow-xl`}
                    >
                      {/* Technical Corner Accent */}
                      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-neon-green/50 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <CardHeader className="p-6">
                        <div className="flex items-start space-x-5 mb-4">
                          {/* Animated Icon Box */}
                          <div className={`p-3 rounded-md bg-black border-2 ${service.color.replace('text-', 'border-')} transition-all duration-300 group-hover:bg-electric-blue/20`}>
                            <Icon className={`h-8 w-8 ${service.color} transition-transform duration-300 group-hover:scale-110`} />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold uppercase tracking-wider text-white">
                              {service.title}
                            </CardTitle>
                            <CardDescription className="text-lg text-gray-400 mt-1">
                              {service.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="px-6 pb-6">
                        <ul className="space-y-3 border-t border-deep-purple/30 pt-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-sm">
                              <Zap className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0 animate-pulse-slow" style={{ animationDelay: `${idx * 0.1}s` }} />
                              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Call to Action Link */}
                        <div className="mt-8">
                          <NeonButton variant="default" className="w-full justify-between group/button">
                            <span>INITIATE DEPLOYMENT</span>
                            <ChevronRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </NeonButton>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* --- CTA Section: Final Command Prompt --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-t-2 border-neon-green/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-black mb-6 uppercase"
            >
              Ready to <span className="text-neon-green drop-shadow-neon">ACCESS</span> Your Career?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 mb-10"
            >
              Join thousands of users who have successfully launched their careers with our comprehensive digital programs.
            </motion.p>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <motion.div variants={itemVariants}>
                <NeonButton variant="hero" size="xl" className="uppercase font-bold tracking-widest">
                  // ENROLL NOW
                </NeonButton>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NeonButton variant="ghost" size="xl" className="uppercase font-bold tracking-widest border-electric-blue/50 text-electric-blue hover:text-white">
                  // SCHEDULE CONSULT
                </NeonButton>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;