
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Wind } from 'lucide-react';
import TeenNavbar from './TeenNavbar';

const TeenHeal: React.FC = () => {
  const navigate = useNavigate();

  const healingOptions = [
    {
      id: 'games',
      title: 'Play Games',
      description: 'Engage in fun, stress-relieving games to boost your mood and distract from worries',
      icon: Gamepad2,
      path: '/teen-dashboard/heal/games',
      color: 'bg-pink-500',
      shadowColor: 'shadow-pink-500/20'
    },
    {
      id: 'breathing',
      title: 'Breathing Exercises',
      description: 'Practice calming breathing techniques to reduce anxiety and find inner peace',
      icon: Wind,
      path: '/teen-dashboard/heal/breathing',
      color: 'bg-cyan-500',
      shadowColor: 'shadow-cyan-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TeenNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Heal & Wellness
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your path to wellness and inner peace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {healingOptions.map((option) => (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 border-0 shadow-lg ${option.shadowColor} bg-white`}
              onClick={() => navigate(option.path)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 ${option.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <option.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg">
                  {option.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeenHeal;
