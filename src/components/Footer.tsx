import React from 'react';
import { Linkedin, Instagram, MessageCircle, BookOpen, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/hack-united/posts/?feedView=all',
      icon: Linkedin,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Devpost',
      url: 'https://unitedhacksv6.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*3d8olg*_gcl_au*MTU3NzE2NzUxOC4xNzU0MDE2OTU4*_ga*NzQ5OTA3MDkwLjE3NTQwMTY5NTg.*_ga_0YHJK3Y10M*czE3NTQwMTY5NTgkbzEkZzEkdDE3NTQwMTY5NjIkajU2JGwwJGgw',
      icon: ExternalLink,
      color: 'hover:text-green-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hack_united/',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/invite/hackunited',
      icon: MessageCircle,
      color: 'hover:text-purple-500'
    },
    {
      name: 'Blog',
      url: 'https://blog.hackunited.org/',
      icon: BookOpen,
      color: 'hover:text-orange-500'
    }
  ];

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">United Hacks V6</h3>
            <p className="text-gray-400 text-sm">
              The Ultimate Global Online Hackathon - Code. Create. Compete.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#explore" className="block text-gray-400 hover:text-white transition-colors">Explore</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${link.color} transition-colors duration-200 p-2 rounded-full hover:bg-gray-800`}
                    title={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 United Hacks V6. Made with ❤️ for the global developer community.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;