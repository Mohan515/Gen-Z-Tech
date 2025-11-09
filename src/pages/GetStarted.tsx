import React, { useState } from "react";
import { Rocket, ArrowRight, Star, CheckCircle, Zap, Code, DollarSign } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button"; // Standard Button component
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Standard Card component

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

const GetStarted: React.FC = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "ACCESS REQUEST LOGGED! 🎉",
      description: "A specialist will open a secure channel with you within 24 hours to define your roadmap.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      experience: ""
    })
  }

  const steps = [
    {
      step: "01",
      title: "DEFINE PATH",
      description: "Select the career protocol that aligns with your desired outcome.",
      icon: "🎯"
    },
    {
      step: "02",
      title: "FREE CONSULT",
      description: "Get personalized guidance from a certified career expert.",
      icon: "👥"
    },
    {
      step: "03",
      title: "INITIATE TRAINING",
      description: "Begin your transformation in a structured, measurable program.",
      icon: "📚"
    },
    {
      step: "04",
      title: "CAREER DEPLOYMENT",
      description: "Get placed in top-tier corporations with full support.",
      icon: "🚀"
    }
  ]

  const courses = [
    {
      title: "FULL STACK ACCELERATOR",
      duration: "6 months",
      price: "₹1,20,000",
      features: [
        "React, Node.js, MongoDB Mastery",
        "Mandatory Industry Projects",
        "Verified Placement Guarantee",
        "Dedicated 1:1 Mentorship"
      ]
    },
    {
      title: "DATA SCIENCE & AI BOOTCAMP",
      duration: "8 months",
      price: "₹1,50,000",
      features: [
        "Python, ML, Deep Learning & GenAI",
        "Analysis of Real-world Datasets",
        "Globally Recognized Certification",
        "Exclusive Job Assistance Stream"
      ]
    },
    {
      title: "CORPORATE RECRUITMENT TRAINING",
      duration: "3 months",
      price: "₹50,000",
      features: [
        "Technical Coding + Aptitude Hacking",
        "Intensive Mock Interview Simulations",
        "High-Impact Soft Skills Training",
        "Full Placement Pipeline Support"
      ]
    }
  ]

  const benefits = [
    "100% Practical Project Simulation",
    "Verified Industry Expert Mentors",
    "Lifetime Career Support Access",
    "Flexible Payment Protocol",
    "Money-back Efficacy Guarantee",
    "Free Live Demo Channel Access"
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 relative overflow-hidden">
        
        {/* --- Hero Section --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-b border-deep-purple/30">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-neon-pink/30 border border-neon-pink/50 text-neon-pink font-medium mb-6 uppercase tracking-widest"
            >
              <Rocket className="h-5 w-5 mr-2 animate-bounce-slow" />
              START YOUR CAREER DEPLOYMENT PROTOCOL
            </motion.div>
            
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tight"
            >
              REQUEST <span className="text-electric-blue drop-shadow-lg">ACCESS</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 border-b-4 border-neon-green/30 inline-block pb-1"
            >
              Take the first step towards your dream career. Join our accelerated professional stream.
            </motion.p>
          </div>
        </section>

        {/* --- Registration Form (Access Terminal) --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Replaced NeonCard with Card */}
            <Card className="bg-gray-900/90 border-2 border-neon-green/50 shadow-2xl shadow-neon-green/30">
              <CardHeader className="text-center p-6 border-b border-neon-green/30">
                <CardTitle className="text-3xl font-bold uppercase text-electric-blue">
                  INITIATE REGISTRATION // FREE
                </CardTitle>
                <CardDescription className="text-lg text-gray-400">
                  Get a free personalized career roadmap and consultation.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-neon-green">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-black border border-deep-purple/50 focus:border-electric-blue text-white"
                      />
                    </div>
                    {/* Email Input */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-neon-green">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-black border border-deep-purple/50 focus:border-electric-blue text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Input */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-neon-green">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-black border border-deep-purple/50 focus:border-electric-blue text-white"
                      />
                    </div>
                    {/* Course Select */}
                    <div className="space-y-2">
                      <Label htmlFor="course" className="text-neon-green">Interested Course *</Label>
                      <Select onValueChange={(value) => handleSelectChange("course", value)} value={formData.course}>
                        <SelectTrigger className="bg-black border border-deep-purple/50 focus:ring-0 text-white">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-electric-blue text-white">
                          <SelectItem value="fullstack">Full Stack Development</SelectItem>
                          <SelectItem value="datascience">Data Science & AI</SelectItem>
                          <SelectItem value="crt">Campus Recruitment Training</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="cloud">Cloud Computing</SelectItem>
                          <SelectItem value="blockchain">Blockchain</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Experience Select */}
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-neon-green">Current Experience Level</Label>
                    <Select onValueChange={(value) => handleSelectChange("experience", value)} value={formData.experience}>
                      <SelectTrigger className="bg-black border border-deep-purple/50 focus:ring-0 text-white">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-electric-blue text-white">
                        <SelectItem value="beginner">Complete Beginner</SelectItem>
                        <SelectItem value="student">Student/Recent Graduate</SelectItem>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="text-center">
                    {/* Replaced NeonButton with Button */}
                    <Button type="submit" size="xl" className="w-full group bg-electric-blue hover:bg-electric-blue/80 text-gray-900 font-bold uppercase tracking-widest shadow-lg hover:shadow-electric-blue/50">
                      ACCESS CONSULTATION // FREE
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-sm text-gray-400 mt-4">
                      Protocol secure. No spam, no hidden fees.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* --- How It Works (Protocol Stream) --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950/50 border-t border-deep-purple/30">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 uppercase text-neon-pink"
            >
              DEPLOYMENT <span className="text-white">PROTOCOL</span>
            </motion.h2>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              {steps.map((step, index) => (
                <motion.div variants={itemVariants} key={index} className="text-center group transition-all duration-300 hover:scale-[1.05]">
                  <div className="relative mb-6">
                    <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">{step.icon}</div>
                    <div className="absolute top-0 right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0 bg-neon-green text-black rounded-full w-10 h-10 flex items-center justify-center text-lg font-black shadow-neon animate-pulse-slow" style={{ animationDelay: `${index * 0.1}s` }}>
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 uppercase text-electric-blue">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-deep-purple mx-auto mt-4 hidden lg:block animate-pulse-slow" style={{ animationDelay: `${index * 0.2}s` }} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Popular Courses (Access Modules) --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 uppercase text-neon-green"
            >
              ACCESS <span className="text-white">MODULES</span>
            </motion.h2>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {courses.map((course, index) => (
                <motion.div variants={itemVariants} key={index} className="group transition-all duration-500 hover:scale-[1.05]">
                  {/* Replaced NeonCard with Card */}
                  <Card className="bg-gray-900/90 border border-deep-purple/50 shadow-xl group-hover:border-electric-blue">
                    <CardHeader className="p-6 pb-4 border-b border-deep-purple/30">
                      <div className="flex justify-between items-start mb-4">
                        <CardTitle className="text-xl font-bold uppercase text-white">
                          {course.title}
                        </CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-electric-blue flex items-center">
                            <DollarSign className="h-5 w-5 mr-1 text-neon-green" />{course.price}
                          </div>
                          <div className="text-sm text-gray-400">{course.duration}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-4">
                      <ul className="space-y-3 mb-8">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3 text-sm">
                            <CheckCircle className="h-5 w-5 text-neon-green flex-shrink-0 animate-pulse-slow" style={{ animationDelay: `${idx * 0.1}s` }} />
                            <span className="text-gray-400 group-hover:text-white transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {/* Replaced NeonButton with Button */}
                      <Button variant="outline" className="w-full uppercase font-bold tracking-widest border-neon-pink/50 text-neon-pink hover:text-white hover:bg-neon-pink/20">
                        View Module Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Benefits (User Advantages) --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950/50 border-b border-electric-blue/30">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 uppercase text-electric-blue"
            >
              USER <span className="text-white">ADVANTAGES</span>
            </motion.h2>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div variants={itemVariants} key={index} className="flex items-center space-x-3 p-5 rounded-lg bg-black/70 border border-neon-green/30 shadow-md transition-all duration-300 hover:shadow-neon-green/50">
                  <Star className="h-6 w-6 text-neon-green flex-shrink-0 animate-pulse-slow" style={{ animationDelay: `${index * 0.1}s` }} />
                  <span className="font-semibold text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 uppercase">
              Your Career Stream <span className="text-neon-pink drop-shadow-neon">ACTIVATES NOW</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Don't let another day pass without taking action. Your dream career is waiting for your access request.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              {/* Replaced NeonButton with Button */}
              <Button size="xl" className="uppercase font-bold tracking-widest bg-neon-green hover:bg-neon-green/80 text-gray-900 border border-neon-green shadow-lg">
                Book Free Demo Channel
              </Button>
              {/* Replaced NeonButton with Button */}
              <Button size="xl" variant="outline" className="uppercase font-bold tracking-widest border-electric-blue/50 text-electric-blue hover:text-white hover:bg-electric-blue/20">
                Download Course Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GetStarted;