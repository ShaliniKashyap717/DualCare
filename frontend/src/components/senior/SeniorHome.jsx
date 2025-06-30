
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SeniorNavbar from './SeniorNavbar';

const SeniorHome = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: 'Loneliness & Isolation',
      description: 'Finding connection and building meaningful relationships in your golden years',
      color: 'bg-blue-500',
      shadowColor: 'shadow-blue-500/20',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 2,
      title: 'Loss of Purpose',
      description: 'Discovering new meaning and direction after retirement or major life changes',
      color: 'bg-purple-500',
      shadowColor: 'shadow-purple-500/20',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 3,
      title: 'Grief & Bereavement',
      description: 'Coping with the loss of loved ones and processing grief in healthy ways',
      color: 'bg-green-500',
      shadowColor: 'shadow-green-500/20',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 4,
      title: 'Loss of Independence',
      description: 'Adapting to changes in mobility and maintaining dignity and autonomy',
      color: 'bg-yellow-500',
      shadowColor: 'shadow-yellow-500/20',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 5,
      title: 'Sleep Issues',
      description: 'Improving sleep quality and establishing healthy sleep patterns',
      color: 'bg-indigo-500',
      shadowColor: 'shadow-indigo-500/20',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 6,
      title: 'Technological Alienation',
      description: 'Staying connected in a digital world and overcoming tech barriers',
      color: 'bg-cyan-500',
      shadowColor: 'shadow-cyan-500/20',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&h=200&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SeniorNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 relative">
            <span className="animate-pulse bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,165,0,0.7)]">
              Your Wellbeing Journey Continues
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore resources designed to support you through life's transitions and challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 border-0 shadow-lg ${article.shadowColor} bg-white overflow-hidden`}
              onClick={() => navigate(`/senior-dashboard/article/${article.id}`)}
            >
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-32 object-cover opacity-70"
                />
                <div className={`absolute inset-0 ${article.color} opacity-60`}></div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-800">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {article.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeniorHome;
