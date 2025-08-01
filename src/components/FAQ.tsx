import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Particle component for background animation
const Particle = ({ index }: { index: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: Math.random() * 20 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: index * 0.2,
      }}
    />
  );
};

const FAQ = () => {
  // State to manage the currently open FAQ item
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // State to detect if the user is on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check and update the screen size for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Array of FAQ data
  const faqs = [
    {
      question: 'Can I join as a beginner?',
      answer: 'Of course! We welcome beginners and experienced developers alike. This is a great opportunity to learn and build something new.'
    },
    {
      question: 'How much does it cost to participate?',
      answer: 'United Hacks V6 is completely free to participate. We believe in making technology accessible to everyone.'
    },
    {
      question: 'Can I participate as a team?',
      answer: 'Yes! You can form teams of up to 4 members. You can find teammates on our Discord server or participate solo.'
    },
    {
      question: 'What are the rules and guidelines?',
      answer: 'You can find the rules and guidelines on the Discord and Devpost.'
    },
    {
      question: 'What should I build?',
      answer: 'Anything! Build web apps, mobile apps, games, AI/ML projects, or any innovative solution. Creativity is encouraged!'
    },
    {
      question: 'How will projects be judged?',
      answer: 'Projects are evaluated based on Creativity, Practicality, Presentation, Design, and Technical Complexity.'
    },
    {
      question: 'When is the deadline to register?',
      answer: 'Registration is open now! Registration deadline is 1st January 18th 2026. Make sure to sign up on Devpost, complete the Google Form, and join our Discord server.'
    },
    {
      question: 'Where is the workshop scheduled?',
      answer: 'The workshop schedule is available on the Discord.'
    },
    {
      question: 'What do I need to submit?',
      answer: 'You need to submit: 1) Public GitHub repository, 2) Demo video (2-5 mins), 3) Written explanation via Devpost. Live demo link is optional but helpful.'
    },
    {
      question: 'Do I have to pay?',
      answer: 'Nope! everything is free!'
    },
    {
      question: 'How does finding teammates work?',
      answer: 'You can find teammates in Devpost or you can work solo. Make sure to include all team members names while submitting the project.'
    },
    {
      question: 'I have more questions',
      answer: 'You can ask your questions on the Discord or email us at humans@hackunited.org.'
    }
  ];

  // Toggles the open/closed state of an FAQ item
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Framer Motion variants for the container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Framer Motion variants for the individual card item
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Framer Motion variants for the card flip animation (desktop)
  const cardVariants = {
    closed: {
      rotateY: 0,
      scale: 1,
    },
    open: {
      rotateY: isMobile ? 0 : 180,
      scale: isMobile ? 1 : 1.02,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="faq" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Got questions? We've got answers!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative perspective-1000 h-36 md:h-40"
            >
              <motion.div
                className="relative w-full h-full preserve-3d cursor-pointer"
                variants={cardVariants}
                animate={openIndex === index ? "open" : "closed"}
                whileHover={
                  isMobile 
                    ? {} 
                    : {
                        rotateX: 5,
                        rotateZ: 2,
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                        transition: { duration: 0.3 }
                      }
                }
                onClick={() => toggleFAQ(index)}
              >
                {/* Front of card */}
                <div 
                  className={`absolute inset-0 backface-hidden rounded-xl transform rotate-2 ${
                    isMobile ? '' : 'backface-hidden'
                  }`}
                  style={{ 
                    background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                    border: '1px solid #374151',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="p-4 h-full flex flex-col justify-between">
                    <h3 className="text-white font-semibold text-lg leading-tight mb-2">
                      {faq.question}
                    </h3>
                    <div className="flex justify-center">
                      <motion.div
                        animate={{ 
                          rotate: openIndex === index ? 180 : 0,
                          color: openIndex === index ? '#a855f7' : '#60a5fa'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={24} />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Gradient overlay for hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Back of card (for desktop) or expanded content (for mobile) */}
                {!isMobile ? (
                  <div 
                    className="absolute inset-0 backface-hidden rounded-xl transform rotate-2"
                    style={{ 
                      background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
                      transform: 'rotateY(180deg) rotate(2deg)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      <p className="text-white leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                      <div className="flex justify-center">
                        <motion.div
                          animate={{ 
                            rotate: 180,
                            color: '#fff'
                          }}
                        >
                          <ChevronUp size={24} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 transform rotate-2"
                        style={{ zIndex: 10 }}
                      >
                        <p className="text-white leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
