import React, { useState } from 'react';
import { Mail, MessageSquare, Users, Instagram, Linkedin, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    try {
      // In a real application, you would send this to your backend
      console.log('Newsletter signup:', email);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thanks for subscribing! Check your email for a confirmation.');
      setEmail('');
    } catch (error) {
      setSubmitMessage('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      id: 'discord',
      href: 'https://discord.gg/hackunited',
      icon: MessageSquare,
      label: 'Discord',
      gradient: 'from-purple-500 to-purple-600',
      hoverGradient: 'from-purple-400 to-purple-500'
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/company/hack-united/posts/?feedView=all',
      icon: Linkedin,
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-700',
      hoverGradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/hack_united/',
      icon: Instagram,
      label: 'Instagram',
      gradient: 'from-pink-500 to-pink-600',
      hoverGradient: 'from-pink-400 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-blue-400 animate-pulse" size={24} />
            <span className="text-blue-400 font-medium tracking-wide uppercase text-sm">Connect With Us</span>
            <Sparkles className="text-purple-400 animate-pulse delay-500" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions? Want to get involved? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Email Card */}
            <motion.div
              className="group relative overflow-hidden"
              onMouseEnter={() => setIsHovered('email')}
              onMouseLeave={() => setIsHovered(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600 group-hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">Email</h3>
                  <p className="text-blue-400 hover:text-blue-300 transition-colors">
                    <a href="mailto:humans@hackunited.org" className="hover:underline">humans@hackunited.org</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(social.id)}
                    onMouseLeave={() => setIsHovered(null)}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${isHovered === social.id ? social.hoverGradient : social.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}></div>
                    <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <span className="text-white font-medium group-hover:text-blue-300 transition-colors">{social.label}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Newsletter Form */}
          <div
            className="group relative overflow-hidden"
            onMouseEnter={() => setIsHovered('newsletter')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl border border-gray-600 group-hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-white" size={16} />
                </div>
                <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest updates, announcements, and hackathon tips.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Subscribe to Newsletter
                    </>
                  )}
                </button>
              </form>
              {submitMessage && (
                <p className="mt-4 text-center text-sm font-semibold text-green-400">{submitMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
