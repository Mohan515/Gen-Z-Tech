import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion"; // Import Variants type
import React, { MouseEvent } from "react"; // Import React and MouseEvent type
import heroImage from "@/assets/hero-students.jpg"; // Ensure this path is correct

// --- Framer Motion Variants (Typed as Variants) ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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
// --------------------------------

const HeroSection: React.FC = () => {
  // Enhanced Parallax/3D Hover Effect Handler (Typed with React.MouseEvent)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Apply 3D transform using style property, ensuring transformStyle is set
    target.style.transform = `perspective(1000px) rotateX(${y * 15}deg) rotateY(${-x * 15}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    // Reset the transform on mouse leave
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) rotate(2deg)`;
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center overflow-hidden bg-black text-white py-20 md:py-32 border-b border-electric-blue/20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* --- Dynamic Background: Animated Grids & Blobs --- */}
      <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        {/* Subtle Diagonal Grid Pattern */}
        <div className="absolute inset-0 bg-[size:40px_40px] bg-[repeating-linear-gradient(45deg,#111_0,#111_1px,transparent_1px,transparent_50%)]"></div>
        
        {/* Neon Light Sources (Blobs) */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-neon-green/30 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-deep-purple/30 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* --- Left Column: Text Content (Cyber-Enhanced) --- */}
          <div className="text-center lg:text-left">
            
            {/* Impact Statement */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-5 py-2 rounded-full bg-deep-purple/30 border border-electric-blue/50 mb-8 group cursor-pointer transform hover:scale-[1.03] transition-transform duration-300 shadow-lg hover:shadow-electric-blue/40"
            >
              <span className="text-sm font-medium text-neon-green mr-3">
                // DATA_STREAM_ONLINE
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">
                Boost your skills. Land your dream job. Stay future-ready.
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter text-white uppercase drop-shadow-lg"
            >
              ACCESS GRANTED TO THE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue drop-shadow-neon">
                FUTURE
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 mb-12 max-w-2xl lg:mx-0 mx-auto leading-relaxed border-l-4 border-neon-green/50 pl-4"
            >
              We empower the next generation with the right skills, confidence, and **career opportunities in the digital matrix**.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              {/* Primary CTA (Glow Button) */}
              <Link to="/services" className="relative group inline-flex h-14 items-center justify-center rounded-lg px-8 py-3 text-lg font-bold text-black bg-neon-green transition-all duration-300 overflow-hidden shadow-xl hover:shadow-neon/80">
                {/* Subtle glitch effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-neon-green to-electric-blue rounded-lg"></span>
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 15px rgba(51, 255, 51, 1)' }}></span>
                <span className="relative z-10 flex items-center text-gray-900 group-hover:text-black">
                  INITIATE TRAINING
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              {/* Secondary CTA (Holographic/Outline) */}
              <button className="group inline-flex items-center justify-center rounded-lg px-8 py-3 text-lg font-semibold text-electric-blue border-2 border-electric-blue/70 bg-black/50 hover:bg-electric-blue/10 transition-all duration-300 transform hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-black">
                <Play className="mr-2 h-5 w-5 transition-colors group-hover:text-neon-green" />
                VIRTUAL DEMO
              </button>
            </motion.div>
          </div>
          
          {/* --- Right Column: Image and Decorative Elements (Holographic Panel) --- */}
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] w-full lg:h-[600px] perspective-1000 lg:mt-0 mt-16"
          >
            {/* Parallax Image Container (Technical Display Look) */}
            <div 
              // The component receiving the mouse events must be explicitly typed as HTMLDivElement
              className="absolute inset-0 z-10 rounded-2xl overflow-hidden shadow-2xl shadow-deep-purple/50 transform rotate-2 transition-transform duration-700 ease-out-back cursor-pointer border-4 border-electric-blue/50"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(0) rotateY(0deg) rotate(2deg)' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={heroImage}
                alt="Students collaborating in a high-tech setting"
                className="w-full h-full object-cover transform scale-110 group-hover:scale-105 transition-transform duration-700 ease-out-back"
              />
              {/* Scanning Line Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-neon-green/70 animate-scan-line"></div>
              
            </div>
            
            {/* Decorative Cybernetic Panel Lines */}
            <div className="absolute -bottom-4 -left-4 w-48 h-48 border-l-4 border-b-4 border-deep-purple/50 transform -skew-x-12"></div>
            <div className="absolute top-4 -right-4 w-32 h-32 border-t-4 border-r-4 border-electric-blue/50 transform skew-x-12"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;