import React from 'react';
import { motion } from 'framer-motion';
// No specific Lucide React icons are needed for an "Under Construction" page,
// so they are removed to keep the bundle size small and focus the intent.
// import { Users, Mail, Lightbulb, Target, Presentation, Palette, Code, Star, Heart, Award, Sparkles } from 'lucide-react';

// Particle component for background animation
// This creates the subtle animated dots in the background to maintain some visual interest.
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
        duration: Math.random() * 20 + 10, // Random duration for varied movement
        repeat: Infinity, // Loop animation indefinitely
        repeatType: "reverse", // Reverse direction on each repeat
        ease: "linear", // Linear easing for consistent speed
        delay: index * 0.2, // Stagger particles to create a flowing effect
      }}
    />
  );
};

// The main Judges component, now simplified to display an "Under Construction" message.
const Judges = () => {
  // All state management (hoveredCard, isMobile) and related useEffects are removed
  // as they are no longer relevant for this simplified component.

  // All data structures (judgingCriteria) and animation variants (containerVariants,
  // itemVariants, cardVariants, callToActionVariants) are removed as they are not used.

  return (
    <section 
      id="judges" 
      className="py-20 bg-gray-800 relative overflow-hidden flex items-center justify-center min-h-screen"
      // This class ensures the content is vertically and horizontally centered on the page.
    >
      {/* Particle Background: This creates the subtle animated dots in the background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Generates 25 particles for the background effect */}
        {Array.from({ length: 25 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Main content for the "Under Construction" message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Animated "Under Construction" heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }} // Start slightly above and transparent
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth animation duration
          className="text-white text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          judges & sponsors section Under Construction
        </motion.h2>

        {/* Animated descriptive text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }} // Start slightly below and transparent
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Smooth animation with a slight delay
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          We're working hard to bring you something amazing! Please check back soon.
        </motion.p>
      </div>
    </section>
  );
};

export default Judges;