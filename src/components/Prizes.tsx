import React from 'react';
import { Trophy, Award, Users, Video, Zap, Gift, Camera, Star } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      category: 'First Place - General',
      prize: '$250 in cash',
      winners: '1 winner',
      icon: Trophy,
      color: 'from-yellow-500 to-yellow-600',
      items: [
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        '$250 Cash Prize',
        'Hack United Swag Pack',
        '1 Year VIP CodeCrafters Membership ($180)',
        'Chance to Pitch for a 50k investment from Switchon Capital',
        'All Participant Prizes'
      ]
    },
    {
      category: 'First Place - Theme',
      prize: '$250 in cash',
      winners: '1 winner',
      icon: Trophy,
      color: 'from-yellow-500 to-yellow-600',
      items: [
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        '$250 Cash Prize',
        'Hack United Swag Pack',
        '2 Year VIP CodeCrafters Membership ($360)',
        'Chance to Pitch 50k investment from Switchon Capital',
        'All Participant Prizes'
      ]
    },
    {
      category: 'Second Place - General',
      prize: '$100 in cash',
      winners: '1 winner',
      icon: Award,
      color: 'from-gray-400 to-gray-500',
      items: [
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        '$100 Cash Prize',
        'Hack United Swag Pack',
        'All Participant Prizes'
      ]
    },
    {
      category: 'Second Place - Theme',
      prize: '$100 in cash',
      winners: '1 winner',
      icon: Award,
      color: 'from-gray-400 to-gray-500',
      items: [
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        '$100 Cash Prize',
        'Hack United Swag Pack',
        '6 Month VIP CodeCrafters Membership ($90)',
        'All Participant Prizes'
      ]
    },
    {
      category: 'Best Solo Hack',
      prize: 'Airpods Pro 2 ($250)',
      winners: '1 winner',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      description: 'Best project developed by an individual rather than a team. In order to be eligible for this prize, your project MUST be based around the theme!',
      items: [
        'Airpods Pro 2 ($250)',
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        'Hack United Swag Pack',
        'All Participant Prizes'
      ]
    },
    {
      category: 'Best Pitch',
      prize: 'Digital Camera for EVERY Team Member',
      winners: '1 winner',
      icon: Video,
      color: 'from-blue-500 to-blue-600',
      description: 'This prize is given to the team with the most compelling video presentation.',
      items: [
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        'Hack United Swag Pack',
        'Digital Camera for EVERY Team Member'
      ]
    },
    {
      category: 'Moonshot Prize',
      prize: '$50,000 in cash',
      winners: '1 winner',
      icon: Zap,
      color: 'from-red-500 to-red-600',
      description: 'Build a hack that is way too ambitious for a weekend, yet you dared to dream big anyway.',
      items: [
        'Chance to Pitch with SwitchOn Capital for a $50,000 investment'
      ]
    },
    {
      category: 'Participant Prize',
      prize: 'Various Prizes',
      winners: 'All participants',
      icon: Gift,
      color: 'from-green-500 to-green-600',
      items: [
        'Certificate of Participation',
        '2 Months of Balsamiq Cloud Pro ($24)',
        '1 Month Interview Cake License ($249)',
        'Free .xyz domain for 1 year ($13)',
        'Wolfram 1 Access 6 Months ($50)'
      ]
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Prizes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            $50,700+ in prizes + other prizes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${prize.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{prize.category}</h3>
                    <p className="text-sm text-gray-400">{prize.winners}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-xl font-semibold text-yellow-400 mb-2">{prize.prize}</p>
                  {prize.description && (
                    <p className="text-gray-300 text-sm mb-3">{prize.description}</p>
                  )}
                </div>

                <div className="space-y-2">
                  {prize.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <Star className="text-yellow-400 mt-1 flex-shrink-0" size={12} />
                      <p className="text-gray-300 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Prize Pool */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-white mb-2">Total Prize Pool</h3>
            <p className="text-2xl font-semibold text-white">$50,700+</p>
            <p className="text-yellow-100 mt-2">in cash prizes and rewards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes; 