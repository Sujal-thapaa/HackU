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
}

const hackathonData: HackathonData[] = [
  {
    id: 1,
    version: "V5",
    title: "AI Revolution",
    dates: "March 15-17, 2024",
    theme: "Artificial Intelligence",
    themeIcon: <Cpu className="w-4 h-4" />,
    participants: 347,
    prize: "$25,000",
    summary: [
      "Pioneering the future with intelligent solutions",
      "Machine learning meets human creativity"
    ],
    color: "#FF6B6B",
    glowColor: "#FF6B6B40",
    position: { x: 200, y: -100, z: 50 },
    link: "#"
  },
  {
    id: 2,
    version: "V4",
    title: "Green Code",
    dates: "November 8-10, 2023",
    theme: "Sustainability Tech",
    themeIcon: <Globe className="w-4 h-4" />,
    participants: 289,
    prize: "$20,000",
    summary: [
      "Technology for environmental preservation",
      "Code that cares for our planet"
    ],
    color: "#4ECDC4",
    glowColor: "#4ECDC440",
    position: { x: -180, y: 120, z: -30 },
    link: "#"
  },
  {
    id: 3,
    version: "V3",
    title: "Digital Wellness",
    dates: "July 22-24, 2023",
    theme: "Health & Wellness",
    themeIcon: <Heart className="w-4 h-4" />,
    participants: 312,
    prize: "$18,000",
    summary: [
      "Innovating healthcare through technology",
      "Wellness solutions for digital age"
    ],
    color: "#45B7D1",
    glowColor: "#45B7D140",
    position: { x: 150, y: 180, z: 80 },
    link: "#"
  },
  {
    id: 4,
    version: "V2",
    title: "Urban Connect",
    dates: "April 5-7, 2022",
    theme: "Smart Cities",
    themeIcon: <Building className="w-4 h-4" />,
    participants: 256,
    prize: "$15,000",
    summary: [
      "Building tomorrow's intelligent cities",
      "Urban solutions for modern challenges"
    ],
    color: "#96CEB4",
    glowColor: "#96CEB440",
    position: { x: -220, y: -80, z: -60 },
    link: "#"
  },
  {
    id: 5,
    version: "V1",
    title: "Innovation Dawn",
    dates: "December 10-12, 2021",
    theme: "Open Innovation",
    themeIcon: <Zap className="w-4 h-4" />,
    participants: 198,
    prize: "$12,000",
    summary: [
      "The beginning of our innovation journey",
      "Where great ideas first took flight"
    ],
    color: "#FECA57",
    glowColor: "#FECA5740",
    position: { x: 80, y: -200, z: -40 },
    link: "#"
  }
];

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

const HackathonGalaxy: React.FC = () => {
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
              transform: `rotateX(${isHovered ? 15 : 0}deg) rotateY(${isHovered ? 15 : 0}deg) rotateZ(${coreRotation * 0.3}deg)`,
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

          {/* Holographic Info Panel */}
          {isSelected && (
            <div 
              className="absolute left-full ml-6 top-1/2 transform -translate-y-1/2 w-80 md:w-96 z-50"
              style={{ 
                animation: 'slideInFromRight 0.5s ease-out',
                transform: 'translateY(-50%) perspective(1000px) rotateY(-5deg)'
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

                {/* Action Button */}
                <button 
                  className="w-full mt-4 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${hackathon.color}, ${hackathon.color}80)`,
                    boxShadow: `0 4px 20px ${hackathon.glowColor}`
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(hackathon.link, '_blank');
                  }}
                >
                  <span className="text-white">View Highlights</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </button>

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

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden perspective-1000">
      {/* Background with floating particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-purple-900/10 to-transparent" />
        {renderFloatingParticles()}
      </div>

      {/* Main container */}
      <div 
        ref={containerRef}
        className="relative w-full h-screen flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Central Core - United Hacks V6 */}
        <div 
          className="relative z-10"
          style={{
            transform: `rotateX(${Math.sin(coreRotation * 0.01) * 5}deg) rotateY(${coreRotation}deg) rotateZ(${Math.sin(coreRotation * 0.02) * 3}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Core glow */}
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: 'radial-gradient(circle, #00D4FF40, transparent 70%)',
                filter: 'blur(20px)',
                transform: 'scale(1.5)'
              }}
            />
            
            {/* Core body */}
            <div className="relative w-full h-full rounded-full backdrop-blur-md border-2 border-cyan-400 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-cyan-400/30 via-blue-500/20 to-transparent" />
              
              {/* Core content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-lg md:text-xl font-bold mb-1" style={{ textShadow: '0 0 10px #00D4FF' }}>
                  United Hacks
                </div>
                <div className="text-2xl md:text-3xl font-bold" style={{ textShadow: '0 0 15px #00D4FF' }}>
                  V6
                </div>
              </div>

              {/* Rotating inner rings */}
              <div 
                className="absolute inset-4 rounded-full border border-cyan-400/50"
                style={{ animation: 'spin 10s linear infinite reverse' }}
              />
              <div 
                className="absolute inset-8 rounded-full border border-cyan-400/30"
                style={{ animation: 'spin 15s linear infinite' }}
              />
            </div>
          </div>
        </div>

        {/* Memory Shards */}
        {renderMemoryShards()}

        {/* Instructions */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400">
          <p className="text-sm">Click on memory shards to explore past hackathons</p>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
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
    </div>
  );
};

export default HackathonGalaxy;