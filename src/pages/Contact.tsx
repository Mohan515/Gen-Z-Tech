import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Twitter, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button"; // Standard Button component
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

const Contact: React.FC = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    toast({
      title: "Message Sent Successfully! // TRANSMISSION CONFIRMED",
      description: "We'll open a dedicated communication channel within 24 hours.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: ""
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "DATA_STREAM: Email",
      value: "support@gen-ztechnologies.com",
      color: "text-neon-green",
      glow: "hover:shadow-neon-green/30"
    },
    {
      icon: Phone,
      title: "VOICE_CHANNEL: Call",
      value: "+91 98765 43210",
      color: "text-electric-blue",
      glow: "hover:shadow-electric-blue/30"
    },
    {
      icon: MapPin,
      title: "PHYSICAL_NODE: Visit",
      value: "Hyderabad, Telangana, India",
      color: "text-deep-purple",
      glow: "hover:shadow-deep-purple/30"
    }
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "text-electric-blue", hoverGlow: "hover:shadow-electric-blue" },
    { icon: Instagram, href: "#", color: "text-neon-pink", hoverGlow: "hover:shadow-neon-pink" },
    { icon: Twitter, href: "#", color: "text-neon-green", hoverGlow: "hover:shadow-neon-green" }
  ]

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
              COMMUNICATIONS <span className="text-electric-blue drop-shadow-lg">HUB</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 border-b-4 border-deep-purple/30 inline-block pb-1"
            >
              Open a secure channel. Let's connect and define your next career or institutional transformation protocol.
            </motion.p>
          </div>
        </section>

        {/* --- Contact Form & Info --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column: Contact Form (The Input Console) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Replaced NeonCard with Card */}
                <Card className="bg-gray-900/90 border border-electric-blue/50 shadow-xl shadow-electric-blue/20">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold uppercase text-neon-green">
                      SEND MESSAGE // ENCRYPTED
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-400">
                      Fill out the form below to initiate communication.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Input */}
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-electric-blue">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-black border border-deep-purple/50 focus:border-neon-green transition-all duration-300 focus:ring-0 text-white"
                          />
                        </div>
                        {/* Email Input */}
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-electric-blue">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-black border border-deep-purple/50 focus:border-neon-green transition-all duration-300 focus:ring-0 text-white"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Phone Input */}
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-electric-blue">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-black border border-deep-purple/50 focus:border-neon-green transition-all duration-300 focus:ring-0 text-white"
                          />
                        </div>
                        {/* Organization Input */}
                        <div className="space-y-2">
                          <Label htmlFor="organization" className="text-electric-blue">College/Organization</Label>
                          <Input
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            className="bg-black border border-deep-purple/50 focus:border-neon-green transition-all duration-300 focus:ring-0 text-white"
                          />
                        </div>
                      </div>
                      
                      {/* Message Textarea */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-electric-blue">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="bg-black border border-deep-purple/50 focus:border-neon-green transition-all duration-300 focus:ring-0 text-white"
                          placeholder="Tell us about your requirements, questions, or how we can deploy our solutions..."
                        />
                      </div>
                      
                      {/* Replaced NeonButton with Button */}
                      <Button type="submit" size="lg" className="w-full group bg-neon-green hover:bg-neon-green/80 text-gray-900 font-bold uppercase tracking-widest shadow-neon-sm hover:shadow-neon">
                        Transmit Data
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right Column: Contact Information, Socials, Quick Links */}
              <motion.div
                className="space-y-10"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <motion.div variants={itemVariants} key={index}>
                        {/* Replaced NeonCard with Card */}
                        <Card className={`bg-gray-900/70 border border-deep-purple/30 shadow-md transition-all duration-500 ${info.glow}`}>
                          <CardContent className="flex items-center space-x-4 p-6">
                            <div className="p-3 rounded-lg bg-black/50 border border-electric-blue/50">
                              <Icon className={`h-6 w-6 ${info.color}`} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg uppercase text-white">{info.title}</h3>
                              <p className="text-gray-400">{info.value}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Social Media */}
                <motion.div variants={itemVariants}>
                  {/* Replaced NeonCard with Card */}
                  <Card className="bg-gray-900/70 border border-deep-purple/30">
                    <CardHeader className="p-6 pb-4">
                      <CardTitle className="text-xl uppercase text-neon-pink">
                        NETWORK ACCESS
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Stay connected for updates and protocol tips
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-2">
                      <div className="flex space-x-5">
                        {socialLinks.map((social, index) => {
                          const Icon = social.icon
                          return (
                            <a
                              key={index}
                              href={social.href}
                              className={`p-3 rounded-full bg-black border-2 border-electric-blue/50 hover:bg-electric-blue/20 transition-all duration-300 shadow-md ${social.hoverGlow}`}
                              aria-label={`Link to our ${social.icon.name}`}
                            >
                              <Icon className={`h-6 w-6 ${social.color}`} />
                            </a>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* FAQ Quick Links */}
                <motion.div variants={itemVariants}>
                  {/* Replaced NeonCard with Card */}
                  <Card className="bg-gray-900/70 border border-deep-purple/30">
                    <CardHeader className="p-6 pb-4">
                      <CardTitle className="text-xl uppercase text-neon-green">
                        QUICK LINKS // DIAGNOSTICS
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Need immediate answers? Open a direct channel.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-2">
                      <div className="space-y-3">
                        {['Admission Process', 'Fee Structure', 'Course Curriculum', 'Partnership Opportunities'].map((link, index) => (
                          <a 
                            key={index}
                            href="#" 
                            className="block text-electric-blue hover:text-neon-green transition-colors font-semibold flex items-center group"
                          >
                            <ChevronRight className="h-5 w-5 mr-2 text-deep-purple group-hover:text-neon-green transition-transform group-hover:translate-x-0.5" />
                            {link}
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Map Section (Tactical Display) --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="aspect-video bg-black border-4 border-neon-green/50 rounded-lg shadow-2xl shadow-neon-green/20 relative overflow-hidden"
            >
              
              {/* Scanline effect over the map placeholder */}
              <div className="absolute inset-0 bg-[size:40px_40px] bg-[repeating-linear-gradient(45deg,#111_0,#111_1px,transparent_1px,transparent_50%)] opacity-30"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-neon-green/70 animate-scan-line"></div>
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-electric-blue mx-auto mb-4 animate-pulse" />
                  <h3 className="text-3xl font-bold mb-2 uppercase text-white">LOCATION_NODE ACTIVE</h3>
                  <p className="text-gray-400 text-lg">HYDERABAD, TELANGANA, INDIA</p>
                  {/* Replaced NeonButton with Button */}
                  <Button size="lg" className="mt-6 bg-deep-purple hover:bg-deep-purple/80 text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-deep-purple/50">
                    ACCESS TACTICAL DIRECTIONS
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- CTA Section: Final Command Prompt --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 border-t-2 border-electric-blue/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
              Ready to Start Your <span className="text-neon-green drop-shadow-neon">CONNECTION</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Don't wait - your dream career is just a **secure channel** away.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              {/* Replaced NeonButton with Button */}
              <Button size="xl" className="uppercase font-bold tracking-widest bg-electric-blue hover:bg-electric-blue/80 text-gray-900 border border-electric-blue shadow-lg">
                Book Free Consultation
              </Button>
              {/* Replaced NeonButton with Button */}
              <Button size="xl" variant="outline" className="uppercase font-bold tracking-widest border-deep-purple/50 text-deep-purple hover:text-white hover:bg-deep-purple/20">
                Download Protocol Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;