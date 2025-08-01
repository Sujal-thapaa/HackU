import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Lightbulb, Users, DollarSign, ExternalLink, Zap, Cpu, Globe, Heart, Building } from 'lucide-react';

interface HackathonData {
  id: number;
  version: string;
  title: string;
  dates: string;
  theme: string;
  themeIcon: React.ReactNode;
  participants: number;
  prize: string;
  summary: [string, string];
  color: string;
  glowColor: string;
  position: { x: number; y: number; z: number };
  link: string;
  articleLink: string;
}

const hackathonData: HackathonData[] = [
  {
    id: 1,
    version: "V5",
    title: "United Hacks V5",
  dates: "July 11–13, 2025",
  theme: "Entertainment + General",
  themeIcon: <Zap className="w-4 h-4" />,
  participants: 1231,
  prize: "$51,000",
  summary: [
    "Enhance how people enjoy entertainment",
    "From new tech to novel experiences"
    ],
    color: "#FF6B6B",
    glowColor: "#FF6B6B40",
    position: { x: -220, y: -100, z: -60 },
    link: "https://unitedhacks23.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*1rfg15a*_gcl_au*MTU3NzE2NzUxOC4xNzU0MDE2OTU4*_ga*NzQ5OTA3MDkwLjE3NTQwMTY5NTg.*_ga_0YHJK3Y10M*czE3NTQwMjg4OTQkbzIkZzEkdDE3NTQwMzA3OTIkajckbDAkaDA.",
    articleLink: "#"
  },
  {
    id: 2,
    version: "V4",
    title: "United Hacks V4",
    dates: "January 17–19, 2025",
    theme: "Revealed Live + General",
    themeIcon: <Zap className="w-4 h-4" />,
    participants: 359,
    prize: "$138,000",
    summary: [
      "Theme revealed during kickoff",
      "Unleash creativity in any direction"
    ],
    color: "#FEC5E5",
    glowColor: "#F646AA",
    position: { x: -180, y: 150, z: -30 },
    link: "https://unitedhacksv4.devpost.com/",
    articleLink: "https://blog.hackunited.org/united-hacks-v4-celebrating-innovation-creativity-and-impact"
  },
  {
    id: 3,
    version: "V3",
  title: "United Hacks V3",
  dates: "September 6–8, 2024",
  theme: "Mini Hacks + General",
    themeIcon: <Heart className="w-4 h-4" />,
    participants: 151,
  prize: "$44,200",
  summary: [
    "Solve small problems with big impact",
    "Freedom to innovate without limits"
    ],
    color: "#45B7D1",
    glowColor: "#45B7D140",
    position: { x: 150, y: 180, z: 80 },
    link: "https://unitedhacksv3.devpost.com/",
    articleLink: "https://blog.hackunited.org/united-hacks-v3-recap"
  },
  {
    id: 4,
    version: "V2",
    title: "United Hacks V2",
  dates: "January 12–14, 2024",
  theme: "Resolution + General",
    themeIcon: <Building className="w-4 h-4" />,
    participants: 392,
  prize: "$39,500",
  summary: [
    "Build for self-growth or explore any domain",
    "Celebrate innovation with or without boundaries"
    ],
    color: "#88E788",
    glowColor: "#013220",
    position: { x: 250, y: -50, z: 50 },
    link: "https://unitedhacksv2.devpost.com/",
    articleLink: "https://blog.hackunited.org/united-hacks-v2-hackathon-recap"
  },
  {
    id: 5,
    version: "V1",
    title: "United Hacks 2023",
  dates: "August 4–6, 2023",
  theme: "Mental Health + General",
    themeIcon: <Zap className="w-4 h-4" />,
    participants: 386,
  prize: "$115,860",
    summary: [
      "Collaborate with like-minded innovators",
    "Tackle mental health or compete in the general track"
    ],
    color: "#FECA57",
    glowColor: "#FECA5740",
    position: { x: 80, y: -200, z: -40 },
    link: "https://unitedhacksv5.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*yj18gr*_gcl_au*MTU3NzE2NzUxOC4xNzU0MDE2OTU4*_ga*NzQ5OTA3MDkwLjE3NTQwMTY5NTg.*_ga_0YHJK3Y10M*czE3NTQwMTY5NTgkbzEkZzEkdDE3NTQwMTg5NDYkajU0JGwwJGgw",
    articleLink: "https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology"
  }
];

// V6 Core Data
const v6Data: HackathonData = {
  id: 6,
  version: "V6",
  title: "United Hacks V6",
  dates: "January 16–18, 2026", // update when you know the dates
  theme: "TBD",
  themeIcon: <Zap className="w-4 h-4" />,
  participants: 0, // update later
  prize: "$50,700",
  summary: [
    "The most awaited edition yet",
    "More innovation, more impact"
  ],
  color: "#C0C0C0",
  glowColor: "#888888",
  position: { x: 0, y: 0, z: 0 },
  link: "https://unitedhacksv6.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*3d8olg*_gcl_au*MTU3NzE2NzUxOC4xNzU0MDE2OTU4*_ga*NzQ5OTA3MDkwLjE3NTQwMTY5NTg.*_ga_0YHJK3Y10M*czE3NTQwMTY5NTgkbzEkZzEkdDE3NTQwMTY5NjIkajU2JGwwJGgw#prizes",
  articleLink: "#"
};

const AnimatedCounter: React.FC<{ target: number; isVisible: boolean }> = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return <span>{count.toLocaleString()}</span>;
};

const GalaxySection = () => {
  const [selectedShard, setSelectedShard] = useState<HackathonData | null>(null);
  const [hoveredShard, setHoveredShard] = useState<number | null>(null);
  const [coreRotation, setCoreRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoreRotation(prev => prev + 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const renderFloatingParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 4 + 1;
      const opacity = Math.random() * 0.6 + 0.2;
      const animationDelay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;
      
      particles.push(
        <div
          key={i}
          className="absolute rounded-full bg-blue-400 animate-pulse"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity,
            animationDelay: `${animationDelay}s`,
            animationDuration: `${duration}s`,
            transform: `translateZ(${Math.random() * 100 - 50}px)`
          }}
        />
      );
    }
    return particles;
  };

  const renderMemoryShards = () => {
    return hackathonData.map((hackathon) => {
      const isHovered = hoveredShard === hackathon.id;
      const isSelected = selectedShard?.id === hackathon.id;
      
      // Fast rotation for all versions (same as V1 and V2)
      const rotationSpeed = 2.0;

      return (
        <div
          key={hackathon.id}
          className="absolute transition-all duration-500 cursor-pointer"
          style={{
            transform: `translate3d(${hackathon.position.x}px, ${hackathon.position.y}px, ${hackathon.position.z}px)`,
            transformStyle: 'preserve-3d'
          }}
          onClick={() => setSelectedShard(isSelected ? null : hackathon)}
          onMouseEnter={() => setHoveredShard(hackathon.id)}
          onMouseLeave={() => setHoveredShard(null)}
        >
          {/* Memory Shard */}
          <div
            className={`relative w-20 h-20 md:w-24 md:h-24 transition-all duration-300 ${
              isHovered || isSelected ? 'scale-110' : 'scale-100'
            }`}
            style={{
              transform: `rotateX(${isHovered ? 15 : 0}deg) rotateY(${isHovered ? 15 : 0}deg) rotateZ(${coreRotation * rotationSpeed}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Shard body with glassmorphism */}
            <div
              className="w-full h-full rounded-lg backdrop-blur-md border border-opacity-30 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${hackathon.glowColor}, transparent 70%)`,
                borderColor: hackathon.color,
                boxShadow: `0 8px 32px ${hackathon.glowColor}, inset 0 0 20px ${hackathon.glowColor}`
              }}
            >
              {/* Inner glow effect */}
              <div 
                className="absolute inset-0 rounded-lg opacity-50"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${hackathon.color}80, transparent 70%)`
                }}
              />
              
              {/* Version label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className="text-white font-bold text-lg md:text-xl"
                  style={{ textShadow: `0 0 10px ${hackathon.color}` }}
                >
                  {hackathon.version}
                </span>
              </div>

              {/* Animated border */}
              <div 
                className="absolute inset-0 rounded-lg"
                style={{
                  background: `conic-gradient(from 0deg, ${hackathon.color}, transparent, ${hackathon.color})`,
                  mask: 'linear-gradient(white, white) content-box, linear-gradient(white, white)',
                  maskComposite: 'xor',
                  padding: '2px',
                  animation: isHovered ? 'spin 3s linear infinite' : 'none'
                }}
              />
            </div>

            {/* Floating connection lines */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${hackathon.glowColor} 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                opacity: isHovered ? 0.3 : 0.1,
                animation: 'float 4s ease-in-out infinite'
              }}
            />
          </div>

          {/* Holographic Info Panel - Positioned to avoid overlap */}
          {isSelected && (
            <div 
              className="absolute z-50"
              style={{ 
                animation: 'slideInFromRight 0.5s ease-out',
                // Custom positioning for better visibility
                left: hackathon.version === "V1" ? '300%' : 
                      hackathon.version === "V5" || hackathon.version === "V4" ? '-400%' :
                      hackathon.position.x > 0 ? '120%' : '-120%',
                top: '50%',
                transform: 'translateY(-50%) perspective(1000px) rotateY(-5deg)',
                width: '320px',
                maxWidth: '80vw'
              }}
            >
              <div 
                className="backdrop-blur-lg rounded-xl border border-opacity-40 p-6 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${hackathon.glowColor}, rgba(0,0,0,0.8))`,
                  borderColor: hackathon.color,
                  boxShadow: `0 20px 40px ${hackathon.glowColor}, inset 0 0 30px ${hackathon.glowColor}`
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: hackathon.color }}
                  />
                  <h3 className="text-white text-xl font-bold">{hackathon.title}</h3>
                  <span 
                    className="text-sm px-2 py-1 rounded-full"
                    style={{ 
                      backgroundColor: hackathon.glowColor,
                      color: hackathon.color
                    }}
                  >
                    {hackathon.version}
                  </span>
                </div>

                {/* Info Grid */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-4 h-4" style={{ color: hackathon.color }} />
                    <span className="text-sm">{hackathon.dates}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    {hackathon.themeIcon}
                    <span className="text-sm">{hackathon.theme}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-4 h-4" style={{ color: hackathon.color }} />
                    <span className="text-sm">
                      <AnimatedCounter target={hackathon.participants} isVisible={isSelected} /> Participants
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <DollarSign className="w-4 h-4" style={{ color: hackathon.color }} />
                    <span 
                      className="text-lg font-bold"
                      style={{ 
                        color: hackathon.color,
                        textShadow: `0 0 10px ${hackathon.color}`
                      }}
                    >
                      {hackathon.prize}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-4 p-3 rounded-lg bg-black bg-opacity-40 border border-opacity-30" style={{ borderColor: hackathon.color }}>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {hackathon.summary[0]}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">
                    {hackathon.summary[1]}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <button 
                    className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${hackathon.color}, ${hackathon.color}80)`,
                      boxShadow: `0 4px 20px ${hackathon.glowColor}`
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(hackathon.link, '_blank');
                    }}
                  >
                    <span className="text-white">Devpost</span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  
                  <button 
                    className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${hackathon.color}, ${hackathon.color}80)`,
                      boxShadow: `0 4px 20px ${hackathon.glowColor}`
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(hackathon.articleLink, '_blank');
                    }}
                  >
                    <span className="text-white text-sm">Article</span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Holographic scan lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `repeating-linear-gradient(90deg, transparent, transparent 2px, ${hackathon.color} 2px, ${hackathon.color} 4px)`,
                      animation: 'scan 3s linear infinite'
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  const renderV6Core = () => {
    const isV6Selected = selectedShard?.id === 6;
    const isV6Hovered = hoveredShard === 6;
    
    // Fast rotation for V6 core (same as other versions)
    const rotationSpeed = 2.0;

    return (
      <>
        <div 
          className="relative z-10 cursor-pointer transition-all duration-300"
          style={{
            transform: `rotateY(${coreRotation * rotationSpeed}deg)`,
            transformStyle: 'preserve-3d'
          }}
          onClick={() => setSelectedShard(isV6Selected ? null : v6Data)}
          onMouseEnter={() => setHoveredShard(6)}
          onMouseLeave={() => setHoveredShard(null)}
        >
          <div className={`relative w-32 h-32 md:w-40 md:h-40 transition-all duration-300 ${
            isV6Hovered || isV6Selected ? 'scale-110' : 'scale-100'
          }`}>
                      {/* Core glow */}
          <div 
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: 'radial-gradient(circle, #88888840, transparent 70%)',
              filter: 'blur(20px)',
              transform: 'scale(1.5)'
            }}
          />
          
          {/* Core body */}
          <div className="relative w-full h-full rounded-full backdrop-blur-md border-2 border-gray-400 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-gray-400/30 via-gray-500/20 to-transparent" />
            
            {/* Core content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="text-lg md:text-xl font-bold mb-1" style={{ textShadow: '0 0 10px #888888' }}>
                United Hacks
              </div>
              <div className="text-2xl md:text-3xl font-bold" style={{ textShadow: '0 0 15px #888888' }}>
                V6
              </div>
            </div>

            {/* Rotating inner rings */}
            <div 
              className="absolute inset-4 rounded-full border border-gray-400/50"
              style={{ animation: 'spin 10s linear infinite reverse' }}
            />
            <div 
              className="absolute inset-8 rounded-full border border-gray-400/30"
              style={{ animation: 'spin 15s linear infinite' }}
            />
            </div>
          </div>
        </div>

        {/* V6 Info Panel - Outside the rotating container */}
        {isV6Selected && (
          <div 
            className="absolute z-50"
            style={{ 
              animation: 'slideInFromRight 0.5s ease-out',
              left: '75%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '320px',
              maxWidth: '80vw'
            }}
          >
            <div 
              className="backdrop-blur-lg rounded-xl border border-opacity-40 p-6 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${v6Data.glowColor}, rgba(0,0,0,0.8))`,
                borderColor: v6Data.color,
                boxShadow: `0 20px 40px ${v6Data.glowColor}, inset 0 0 30px ${v6Data.glowColor}`
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: v6Data.color }}
                />
                <h3 className="text-white text-xl font-bold">{v6Data.title}</h3>
                <span 
                  className="text-sm px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: v6Data.glowColor,
                    color: v6Data.color
                  }}
                >
                  {v6Data.version}
                </span>
              </div>

              {/* Info Grid */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-4 h-4" style={{ color: v6Data.color }} />
                  <span className="text-sm">{v6Data.dates}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  {v6Data.themeIcon}
                  <span className="text-sm">{v6Data.theme}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-4 h-4" style={{ color: v6Data.color }} />
                  <span className="text-sm">
                    <AnimatedCounter target={v6Data.participants} isVisible={isV6Selected} /> Participants
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <DollarSign className="w-4 h-4" style={{ color: v6Data.color }} />
                  <span 
                    className="text-lg font-bold"
                    style={{ 
                      color: v6Data.color,
                      textShadow: `0 0 10px ${v6Data.color}`
                    }}
                  >
                    {v6Data.prize}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-4 p-3 rounded-lg bg-black bg-opacity-40 border border-opacity-30" style={{ borderColor: v6Data.color }}>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {v6Data.summary[0]}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-1">
                  {v6Data.summary[1]}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button 
                  className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${v6Data.color}, ${v6Data.color}80)`,
                    boxShadow: `0 4px 20px ${v6Data.glowColor}`
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(v6Data.link, '_blank');
                  }}
                >
                  <span className="text-white">Devpost</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </button>
                
                <button 
                  className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${v6Data.color}, ${v6Data.color}80)`,
                    boxShadow: `0 4px 20px ${v6Data.glowColor}`
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(v6Data.articleLink, '_blank');
                  }}
                >
                  <span className="text-white text-sm">Article</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Holographic scan lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `repeating-linear-gradient(90deg, transparent, transparent 2px, ${v6Data.color} 2px, ${v6Data.color} 4px)`,
                    animation: 'scan 3s linear infinite'
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <section id="previous" className="relative w-full min-h-screen bg-black overflow-hidden perspective-1000">
      {/* Background with floating particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-purple-900/10 to-transparent" />
        {renderFloatingParticles()}
      </div>

      {/* Title Section */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Previous Hackathons
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our legacy of innovation through an interactive galaxy
        </p>
      </div>

      {/* Main container */}
      <div 
        ref={containerRef}
        className="relative w-full h-screen flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Central Core - United Hacks V6 */}
        {renderV6Core()}

        {/* Memory Shards */}
        {renderMemoryShards()}

        {/* Instructions */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400">
          <p className="text-sm">Click on memory shards or the core to explore hackathons</p>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(50px) perspective(1000px) rotateY(-15deg);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0) perspective(1000px) rotateY(-5deg);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotateZ(0deg); }
          50% { transform: translateY(-10px) rotateZ(5deg); }
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default GalaxySection;