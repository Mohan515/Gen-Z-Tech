import React from "react";
import { Quote, Star, ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import { NeonButton } from "@/components/ui/neon-button";
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
// ----------------------------

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  beforeAfter: {
    before: string;
    after: string;
  };
}

interface RecruiterTestimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

interface InstitutionFeedback {
  name: string;
  role: string;
  institution: string;
  quote: string;
  image: string;
}

interface BeforeAfterCardProps {
  before: string;
  after: string;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ before, after }) => (
  <div className="space-y-4">
    <div className="p-4 rounded-lg bg-red-900/30 border border-red-500/50 shadow-inner shadow-red-500/20">
      <h4 className="font-bold text-red-400 mb-2 flex items-center">
        <GraduationCap className="h-5 w-5 mr-2 text-red-400" />
        STATUS_BEFORE:
      </h4>
      <p className="text-sm text-gray-300 italic">{before}</p>
    </div>
    
    <ArrowRight className="h-7 w-7 text-neon-green mx-auto animate-pulse-slow" />
    
    <div className="p-4 rounded-lg bg-green-900/30 border border-neon-green/50 shadow-inner shadow-neon-green/20">
      <h4 className="font-bold text-neon-green mb-2 flex items-center">
        <Briefcase className="h-5 w-5 mr-2 text-neon-green" />
        STATUS_AFTER:
      </h4>
      <p className="text-sm text-white font-semibold">{after}</p>
    </div>
  </div>
);


const SuccessStories: React.FC = () => {
  const testimonials: Testimonial[] = [
    // ... (Your existing testimonial data)
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Microsoft",
      image: "👩‍💻",
      quote: "Gen-Z Technologies transformed my career completely. From struggling with basic coding to landing a job at Microsoft - their comprehensive training and placement support made it possible.",
      rating: 5,
      beforeAfter: {
        before: "Final year CS student with no industry experience",
        after: "Software Engineer at Microsoft with ₹18 LPA package"
      }
    },
    {
      name: "Rahul Kumar",
      role: "Data Scientist",
      company: "Amazon",
      image: "👨‍💼",
      quote: "The AI-powered learning tools and hands-on workshops gave me practical skills that directly translated to my job. The mentorship program was exceptional!",
      rating: 5,
      beforeAfter: {
        before: "Mechanical Engineering graduate seeking career change",
        after: "Data Scientist at Amazon with ₹22 LPA package"
      }
    },
    {
      name: "Sneha Patel",
      role: "Full Stack Developer",
      company: "Google",
      image: "👩‍🚀",
      quote: "The mock interviews and industry connections through Gen-Z Tech helped me crack Google's interview process. Their support throughout the journey was incredible.",
      rating: 5,
      beforeAfter: {
        before: "ECE student with basic programming knowledge",
        after: "Full Stack Developer at Google with ₹28 LPA package"
      }
    }
  ];

  const recruiterTestimonials: RecruiterTestimonial[] = [
    // ... (Your existing recruiter testimonial data)
    {
      name: "Sarah Johnson",
      role: "Technical Recruiter",
      company: "TCS",
      quote: "Students trained by Gen-Z Technologies consistently show exceptional technical skills and professional readiness. They're our preferred candidates.",
      image: "👩‍💼"
    },
    {
      name: "Amit Verma",
      role: "Hiring Manager",
      company: "Infosys",
      quote: "The quality of candidates from Gen-Z Tech is outstanding. They come prepared, confident, and ready to contribute from day one.",
      image: "👨‍💻"
    }
  ];

  const institutionFeedback: InstitutionFeedback[] = [
    // ... (Your existing institution feedback data)
    {
      name: "Dr. Rajesh Kumar",
      role: "Head of Placement",
      institution: "NIT Warangal",
      quote: "Our partnership with Gen-Z Technologies has significantly improved our placement statistics. Their workshops are highly effective.",
      image: "👨‍🏫"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 relative overflow-hidden">
        
        {/* --- Hero Section: Header --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-b border-electric-blue/30">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tight"
            >
              HALL OF <span className="text-neon-green drop-shadow-lg">FAME</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 border-b-4 border-electric-blue/30 inline-block pb-1"
            >
              Real transformations, real career boosts, and authenticated success data streams.
            </motion.p>
          </div>
        </section>

        {/* --- Student Success Stories: Transformation Grid --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider text-electric-blue"
            >
              User <span className="text-white">Transformation Log</span>
            </motion.h2>
            
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-10"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-deep-purple/40"
                >
                  <Card className="bg-gray-900/80 border border-deep-purple/50 transition-all duration-300 group-hover:border-neon-green">
                    <CardHeader className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-4xl p-2 rounded-full bg-deep-purple/30">{testimonial.image}</div>
                        <div>
                          <CardTitle className="text-xl font-bold text-white">
                            {testimonial.name}
                          </CardTitle>
                          <CardDescription className="text-gray-400">
                            {testimonial.role} @ <span className="text-electric-blue">{testimonial.company}</span>
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-neon-green text-neon-green animate-pulse-slow" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <Quote className="h-6 w-6 text-deep-purple mb-4" />
                      <p className="text-gray-300 mb-8 italic border-l-4 border-deep-purple/50 pl-4">
                        "{testimonial.quote}"
                      </p>
                      
                      {/* Before/After Custom Component */}
                      <BeforeAfterCard 
                        before={testimonial.beforeAfter.before} 
                        after={testimonial.beforeAfter.after} 
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Recruiter Testimonials: Corporate Validation --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950/50 border-t border-b border-deep-purple/30">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider text-neon-green"
            >
              Corporate <span className="text-white">Validation Log</span>
            </motion.h2>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {recruiterTestimonials.map((testimonial, index) => (
                <motion.div variants={itemVariants} key={index} className="group transition-all duration-300 hover:scale-[1.02]">
                  <Card className="bg-black/80 border-l-4 border-electric-blue/50 shadow-xl group-hover:border-electric-blue">
                    <CardContent className="p-6">
                      <Quote className="h-6 w-6 text-electric-blue mb-4" />
                      <p className="text-gray-300 italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center space-x-4 border-t border-gray-700 pt-4">
                        <div className="text-3xl">{testimonial.image}</div>
                        <div>
                          <CardTitle className="text-lg font-bold text-white">
                            {testimonial.name}
                          </CardTitle>
                          <CardDescription className="text-gray-400">
                            {testimonial.role} @ <span className="text-neon-green">{testimonial.company}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Institution Feedback: Partnership Metrics --- */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider text-deep-purple"
            >
              Academic <span className="text-white">Partnership Metrics</span>
            </motion.h2>
            
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              {institutionFeedback.map((feedback, index) => (
                <motion.div variants={itemVariants} key={index} className="transition-all duration-500 hover:scale-[1.01]">
                  <Card className="bg-gray-900/80 border-2 border-neon-pink/50 shadow-xl">
                    <CardContent className="text-center p-8">
                      <div className="text-6xl mb-4 text-neon-pink">{feedback.image}</div>
                      <Quote className="h-8 w-8 text-neon-pink mx-auto mb-6" />
                      <p className="text-xl text-gray-300 italic mb-6">
                        "{feedback.quote}"
                      </p>
                      <div className="border-t border-gray-700 pt-4">
                        <h4 className="text-xl font-bold text-white">{feedback.name}</h4>
                        <p className="text-gray-400">{feedback.role} @ <span className="text-neon-pink">{feedback.institution}</span></p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              className="text-4xl md:text-5xl font-black mb-6 uppercase"
            >
              Ready to Write Your <span className="text-neon-green drop-shadow-neon">ACCESS LOG</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 mb-8"
            >
              Join our community of successful professionals and **initiate your career transformation** today.
            </motion.p>
            <NeonButton variant="hero" size="xl" className="uppercase font-bold tracking-widest">
              Start Your Journey
            </NeonButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuccessStories;