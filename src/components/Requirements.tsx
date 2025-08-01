import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Calendar, Github, Video, ExternalLink, AlertTriangle, MessageCircle, Clock, Users, Trophy, Zap } from 'lucide-react';

// Particle component for background
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

const Requirements = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const requirements = [
    {
      icon: Github,
      title: 'Public Github/Alternative Repository',
      description: 'Your project code must be publicly accessible',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-400'
    },
    {
      icon: Video,
      title: 'Demo Video of your Project (2-5 mins)',
      description: 'A video demonstration of your project functionality',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-400'
    },
    {
      icon: FileText,
      title: 'Written Explanation of your Project',
      description: 'Detailed project description done via Devpost',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      textColor: 'text-green-400'
    },
    {
      icon: ExternalLink,
      title: 'Link to Live Demo (Optional)',
      description: 'Link to live demo of your project (helpful but not required)',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      textColor: 'text-orange-400'
    }
  ];

  const importantDates = [
    {
      icon: Zap,
      event: 'Opening Ceremony',
      date: 'January 16th, 2026',
      time: '7:00 PM EST',
      description: 'Kickoff event with theme announcement and team formation',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      textColor: 'text-yellow-400'
    },
    {
      icon: Clock,
      event: 'Submissions Due',
      date: 'January 18th, 2026',
      time: '12:00 PM EST',
      description: 'Final deadline for all project submissions',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      textColor: 'text-red-400'
    },
    {
      icon: Trophy,
      event: 'Closing Ceremony',
      date: 'January 18th, 2025',
      time: '8:00 PM EST',
      description: 'Awards ceremony and winner announcements',
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-400'
    }
  ];

  const rules = [
    {
      text: 'Your submission MUST be a NEW project (All code must be written during the given time frame)',
      icon: AlertTriangle
    },
    {
      text: 'We will NOT accept submissions to other hackathons (Your creation must be original for United Hacks and not reused)',
      icon: ExternalLink
    },
    {
      text: 'You may ONLY work with ONE TEAM for the duration of the Hackathon',
      icon: Users
    }
  ];

  const registrationSteps = [
    {
      step: 'Sign up on this Devpost.',
      icon: FileText
    },
    {
      step: 'Join our Discord, as it\'s our primary method of communication with participants.',
      icon: MessageCircle
    }
  ];

  const themeInfo = {
    title: 'Our Theme',
    themeTrack: 'Theme Track: Announced during opening ceremony',
    generalTrack: 'United Hacks is a platform where innovators can unleash their creativity without limitations. If you choose to compete in the "General" track, you have the freedom to explore diverse topics—from accessibility to mental health and beyond, nurturing the potential of your ideas!'
  };

  const workshopInfo = {
    title: 'Workshop Schedule',
    status: 'Coming soon',
    description: 'All workshop links will be posted in our Discord, and are hyperlinked on the schedule'
  };

  const tabs = [
    { id: 'requirements', label: 'Requirements', icon: FileText },
    { id: 'dates', label: 'Important Dates', icon: Calendar },
    { id: 'rules', label: 'Rules & Registration', icon: AlertTriangle },
    { id: 'theme', label: 'Theme & Workshops', icon: MessageCircle }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: -15,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      rotateX: 5,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="requirements" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Requirements & Important Info
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about participating in United Hacks V6
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <motion.div
              key="requirements"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {requirements.map((req, index) => {
                const IconComponent = req.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className={`p-6 rounded-xl border transform rotate-1 hover:rotate-0 transition-transform duration-300 ${req.bgColor} ${req.borderColor}`}
                    style={{
                      background: `linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${req.color}`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className={`text-lg font-semibold mb-2 ${req.textColor}`}>{req.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{req.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Important Dates Tab */}
          {activeTab === 'dates' && (
            <motion.div
              key="dates"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {importantDates.map((date, index) => {
                const IconComponent = date.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className={`p-6 rounded-xl border transform -rotate-1 hover:rotate-0 transition-transform duration-300 ${date.bgColor} ${date.borderColor}`}
                    style={{
                      background: `linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)`,
                    }}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${date.color}`}>
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{date.event}</h4>
                      <p className={`font-semibold mb-1 ${date.textColor}`}>{date.date}</p>
                      <p className={`text-sm mb-3 ${date.textColor}`}>{date.time}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{date.description}</p>
                    </div>
                  </motion.div>
                );
              })}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-3 mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20"
              >
                <p className="text-blue-300 text-center">
                  <strong>Note:</strong> The link to the live streams will be posted in our Discord server.
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Rules & Registration Tab */}
          {activeTab === 'rules' && (
            <motion.div
              key="rules"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Rules */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-xl border border-red-500/20 bg-red-500/5 transform rotate-1"
                style={{
                  background: `linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)`,
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-red-400" size={28} />
                  Other Criteria
                </h3>
                <div className="space-y-6">
                  {rules.map((rule, index) => {
                    const IconComponent = rule.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="text-red-400 mt-1 flex-shrink-0" size={20} />
                        <p className="text-gray-300 leading-relaxed">{rule.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Registration Steps */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-xl border border-green-500/20 bg-green-500/5 transform -rotate-1"
                style={{
                  background: `linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)`,
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <ExternalLink className="text-green-400" size={28} />
                  How To Register
                </h3>
                <div className="space-y-6">
                  {registrationSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <IconComponent className="text-green-400 mb-2" size={20} />
                          <p className="text-gray-300 leading-relaxed">{step.step}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Theme & Workshops Tab */}
          {activeTab === 'theme' && (
            <motion.div
              key="theme"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Theme */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-xl border border-green-500/20 transform rotate-1"
                style={{
                  background: `linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)`,
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="text-green-400" size={28} />
                  {themeInfo.title}
                </h3>
                <div className="space-y-6">
                  <motion.div 
                    className="p-4 bg-green-500/10 rounded-lg border border-green-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                      <Trophy size={18} />
                      Theme Track
                    </h4>
                    <p className="text-gray-300">{themeInfo.themeTrack}</p>
                  </motion.div>
                  <motion.div 
                    className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                      <Zap size={18} />
                      General Track
                    </h4>
                    <p className="text-gray-300">{themeInfo.generalTrack}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Workshop Schedule */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-xl border border-orange-500/20 transform -rotate-1"
                style={{
                  background: `linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)`,
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <MessageCircle className="text-orange-400" size={28} />
                  {workshopInfo.title}
                </h3>
                <motion.div 
                  className="p-6 bg-orange-500/10 rounded-lg border border-orange-500/20 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={28} />
                  </div>
                  <h4 className="text-orange-400 font-semibold mb-2 text-xl">{workshopInfo.status}</h4>
                  <p className="text-gray-300">{workshopInfo.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Requirements;