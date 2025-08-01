import React from 'react';
import { FileText, Calendar, Github, Video, ExternalLink, AlertTriangle, MessageCircle } from 'lucide-react';

const Requirements = () => {
  const requirements = [
    {
      icon: Github,
      title: 'Public Github/Alternative Repository',
      description: 'Your project code must be publicly accessible'
    },
    {
      icon: Video,
      title: 'Demo Video of your Project (2-5 mins)',
      description: 'A video demonstration of your project functionality'
    },
    {
      icon: FileText,
      title: 'Written Explanation of your Project',
      description: 'Detailed project description done via Devpost'
    },
    {
      icon: ExternalLink,
      title: 'Link to Live Demo (Optional)',
      description: 'Link to live demo of your project (helpful but not required)'
    }
  ];

  const importantDates = [
    {
      event: 'Opening Ceremony',
      date: 'January 16th, 2025',
      time: '7:00 PM EST',
      description: 'Kickoff event with theme announcement and team formation'
    },
    {
      event: 'Submissions Due',
      date: 'January 18th, 2025',
      time: '12:00 PM EST',
      description: 'Final deadline for all project submissions'
    },
    {
      event: 'Closing Ceremony',
      date: 'January 18th, 2025',
      time: '8:00 PM EST',
      description: 'Awards ceremony and winner announcements'
    }
  ];

  const rules = [
    'Your submission MUST be a NEW project (All code must be written during the given time frame)',
    'We will NOT accept submissions to other hackathons (Your creation must be original for United Hacks and not reused)',
    'You may ONLY work with ONE TEAM for the duration of the Hackathon'
  ];

  const registrationSteps = [
    'Sign up on Devpost',
    'Join our Discord server (primary method of communication with participants)'
  ];

  const workshopInfo = {
    title: 'Workshop Schedule',
    status: 'Coming soon',
    description: 'All workshop links will be posted in our Discord server, and are hyperlinked on the schedule'
  };

  const themeInfo = {
    title: 'Our Theme',
    themeTrack: 'Theme Track: Announced during opening ceremony',
    generalTrack: 'United Hacks is a platform where innovators can unleash their creativity without limitations. If you choose to compete in the "General" track, you have the freedom to explore diverse topics—from accessibility to mental health and beyond, nurturing the potential of your ideas!'
  };

  return (
    <section id="requirements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Requirements & Important Dates
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about participating in United Hacks V6
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Requirements */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="text-blue-400" size={28} />
              What to Submit
            </h3>
            <div className="space-y-6">
              {requirements.map((req, index) => {
                const IconComponent = req.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{req.title}</h4>
                      <p className="text-gray-300">{req.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Calendar className="text-purple-400" size={28} />
              Important Dates
            </h3>
            <div className="space-y-6">
              {importantDates.map((date, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">{date.event}</h4>
                  <p className="text-purple-400 font-semibold mb-1">{date.date} at {date.time}</p>
                  <p className="text-gray-300 text-sm">{date.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-blue-300 text-sm">
                <strong>Note:</strong> The link to the live streams will be posted in our Discord server.
              </p>
            </div>
          </div>
        </div>

        {/* Theme and Workshop Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Theme */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="text-green-400" size={28} />
              {themeInfo.title}
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">Theme Track</h4>
                <p className="text-gray-300">{themeInfo.themeTrack}</p>
              </div>
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">General Track</h4>
                <p className="text-gray-300">{themeInfo.generalTrack}</p>
              </div>
            </div>
          </div>

          {/* Workshop Schedule */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageCircle className="text-orange-400" size={28} />
              {workshopInfo.title}
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                <h4 className="text-orange-400 font-semibold mb-2">{workshopInfo.status}</h4>
                <p className="text-gray-300">{workshopInfo.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rules and Registration */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Rules */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="text-red-400" size={28} />
              Other Criteria
            </h3>
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Steps */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <ExternalLink className="text-green-400" size={28} />
              How To Register
            </h3>
            <div className="space-y-4">
              {registrationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements; 