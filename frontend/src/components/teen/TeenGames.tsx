
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Smile, Heart, Star, Zap } from 'lucide-react';
import TeenNavbar from './TeenNavbar';

const TeenGames: React.FC = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      title: 'Mood Booster Quiz',
      description: 'Answer fun questions to discover activities that boost your mood',
      color: 'bg-pink-500',
      icon: Smile,
      shadowColor: 'shadow-pink-500/20'
    },
    {
      id: 2,
      title: 'Gratitude Challenge',
      description: 'Build a daily gratitude practice with interactive challenges',
      color: 'bg-yellow-500',
      icon: Heart,
      shadowColor: 'shadow-yellow-500/20'
    },
    {
      id: 3,
      title: 'Confidence Builder',
      description: 'Complete tasks and challenges to build self-confidence',
      color: 'bg-purple-500',
      icon: Star,
      shadowColor: 'shadow-purple-500/20'
    },
    {
      id: 4,
      title: 'Energy Booster',
      description: 'Quick activities to energize your mind and body',
      color: 'bg-cyan-500',
      icon: Zap,
      shadowColor: 'shadow-cyan-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TeenNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          onClick={() => navigate('/teen-dashboard/heal')}
          variant="ghost"
          className="mb-6 text-pink-600 hover:text-pink-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Heal
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Play Games
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Engage in fun activities designed to boost your mental wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game) => (
            <Card
              key={game.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 border-0 shadow-lg ${game.shadowColor} bg-white`}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${game.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <game.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {game.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {game.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeenGames;
