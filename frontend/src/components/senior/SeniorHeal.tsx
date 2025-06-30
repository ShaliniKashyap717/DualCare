
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Heart } from 'lucide-react';
import SeniorNavbar from './SeniorNavbar';

const SeniorHeal: React.FC = () => {
  const navigate = useNavigate();

  const healingOptions = [
    {
      id: 'games',
      title: 'Brain Games',
      description: 'Engage in cognitive exercises and memory games to keep your mind sharp',
      icon: Brain,
      path: '/senior-dashboard/heal/games',
      color: 'bg-blue-500',
      shadowColor: 'shadow-blue-500/20'
    },
    {
      id: 'breathing',
      title: 'Breathing & Relaxation',
      description: 'Practice gentle breathing exercises and relaxation techniques',
      icon: Heart,
      path: '/senior-dashboard/heal/breathing',
      color: 'bg-green-500',
      shadowColor: 'shadow-green-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SeniorNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Wellness & Healing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose activities that promote mental wellness and relaxation
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

export default SeniorHeal;
