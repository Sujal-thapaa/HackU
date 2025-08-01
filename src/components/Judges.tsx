import React from 'react';
import { Users, Mail, Lightbulb, Target, Presentation, Palette, Code, Star } from 'lucide-react';

const Judges = () => {
  const judgingCriteria = [
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'Is the project a new idea? Does the project provide a new experience or simplify an existing workflow?',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Practicality',
      description: 'Could this idea actually be implemented in real life? Would people be motivated to use it? Is it a functioning solution that can scale in the real world?',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Presentation,
      title: 'Presentation',
      description: 'Is the project pitched in a convincing and engaging manner? Is the idea presented clearly and in a way that\'s easy to approach? Does the team include a working demonstration of the project?',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Is the UI design user-friendly and intuitive? Does the design enhance user experience and engagement?',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Code,
      title: 'Technical Complexity',
      description: 'Does the project involve complex technologies or intricate systems? How relevant are the solutions your project presents?',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="judges" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Judges
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Looking for judges! Email humans@hackunited.org
          </p>
        </div>

        {/* Looking for Judges */}
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-xl border border-blue-500/30 mb-16">
          <div className="text-center">
            <Users className="text-blue-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Looking for Judges!</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're currently seeking experienced judges to evaluate the amazing projects at United Hacks V6. 
              If you're interested in being part of our judging panel, please reach out to us.
            </p>
            <a 
              href="mailto:humans@hackunited.org" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Mail size={20} />
              Contact Us
            </a>
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Judging Criteria</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {judgingCriteria.map((criterion, index) => {
              const IconComponent = criterion.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${criterion.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{criterion.title}</h4>
                  <p className="text-gray-300">{criterion.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Questions?</h3>
            <p className="text-gray-300 mb-6">
              Email the hackathon manager for any questions about judging or participation.
            </p>
            <a 
              href="mailto:humans@hackunited.org" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              <Mail size={20} />
              Email Hackathon Manager
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;