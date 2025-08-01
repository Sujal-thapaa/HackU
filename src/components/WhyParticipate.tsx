import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Code2, Lightbulb, Users, Trophy, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

// Define the stages for the hackathon journey
const stages = [
  {
    id: 'hack',
    icon: Code2,
    title: 'Hack & Compete',
    subtitle: 'Innovate with cutting-edge tech',
    description: 'Build powerful solutions using the latest technologies. Challenge yourself against global talent and showcase your skills in the ultimate coding competition.',
    color: 'from-purple-600 to-pink-600',
    bgColor: 'bg-gradient-to-br from-purple-900/20 to-pink-900/20',
  },
  {
    id: 'learn',
    icon: Lightbulb,
    title: 'Learn & Grow',
    subtitle: 'Expand your skills with expert guidance',
    description: 'Join workshops, mentorships, and masterclasses led by top tech professionals. Level up your abilities and accelerate your developer journey.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-gradient-to-br from-amber-900/20 to-orange-900/20',
  },
  {
    id: 'network',
    icon: Users,
    title: 'Collaborate & Network',
    subtitle: 'Build lasting connections',
    description: 'Meet and team up with developers, founders, and innovators from around the world. Forge partnerships that go beyond the hackathon.',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20',
  },
  {
    id: 'win',
    icon: Trophy,
    title: 'Win Big',
    subtitle: 'Unlock prizes and opportunities',
    description: 'Stand out and earn recognition, cash rewards, and career-changing opportunities that can shape your future.',
    color: 'from-yellow-400 to-amber-500',
    bgColor: 'bg-gradient-to-br from-yellow-900/20 to-amber-900/20',
  }
];


// StageCard component for each individual stage
const StageCard = ({ stage, index }) => {
  const cardRef = useRef(null);
  // useInView hook to trigger animations when the element is in the viewport
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);
  
  // Function to trigger the confetti effect
  const triggerConfetti = () => {
    // Only run confetti once for the 'win' stage
    if (stage.id === 'win' && !hasTriggeredConfetti) {
      setHasTriggeredConfetti(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FFD700', '#FFA500', '#FF6347']
      });
    }
  };

  // useEffect to trigger confetti when the 'win' card comes into view
  useEffect(() => {
    if (isInView && stage.id === 'win') {
      const timer = setTimeout(triggerConfetti, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, stage.id, hasTriggeredConfetti]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${stage.bgColor} backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl`}
      // Initial state of the animation
      initial={{ opacity: 0, y: 50 }}
      // Animate to this state when the element is in view
      animate={isInView ? {
        opacity: 1,
        y: 0,
      } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      // Hover animation
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative z-10">
        <motion.div
          className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stage.color} mb-4`}
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <stage.icon className="w-6 h-6 text-white" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-white mb-2">
          {stage.title}
        </h3>
        
        <p className={`text-base font-semibold bg-gradient-to-r ${stage.color} bg-clip-text text-transparent mb-3`}>
          {stage.subtitle}
        </p>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {stage.description}
        </p>
      </div>
    </motion.div>
  );
};

// AnimatedPath component for the scrolling line animation
const AnimatedPath = () => {
  const pathRef = useRef(null);
  // useScroll to track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: pathRef,
    offset: ["start end", "end start"]
  });

  // useTransform to map the scroll progress to the path length
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={pathRef} className="absolute left-1/2 top-0 h-full hidden lg:block -translate-x-1/2">
      <svg width="4" height="100%" className="overflow-visible">
        <motion.line
          x1="2"
          y1="0"
          x2="2"
          y2="100%"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            pathLength,
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="33%" stopColor="#F59E0B" />
            <stop offset="66%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Main WhyParticipate component
function WhyParticipate() {
  const containerRef = useRef(null);
  
  return (
    <section id="why-join" className="relative min-h-screen bg-black py-16 overflow-hidden font-inter">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />

      <div ref={containerRef} className="relative max-w-5xl mx-auto px-6">
        {/* Header section with text and animations */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-semibold uppercase tracking-wider">The Journey</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Why <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Participate?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Embark on a transformative journey through four stages of innovation
          </p>
        </motion.div>

        {/* Journey stages section with the animated path */}
        <div className="relative">
          <AnimatedPath />
          
          <div className="grid gap-12 lg:gap-16">
            {stages.map((stage, index) => (
              <div key={stage.id} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <StageCard
                    stage={stage}
                    index={index}
                  />
                </div>
                <div className="hidden lg:block w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to action button with motion animations */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Changed from a button to a link with the provided href */}
          <motion.a
            href="https://unitedhacksv6.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 15px rgba(147, 51, 234, 0.2)",
                "0 0 25px rgba(147, 51, 234, 0.3)",
                "0 0 15px rgba(147, 51, 234, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            Join the Movement 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyParticipate;
