
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TeenNavbar from './TeenNavbar';

const TeenHome = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: 'Peer Pressure',
      description: 'Learn how to handle social pressure and make your own decisions',
      color: 'bg-pink-500',
      shadowColor: 'shadow-pink-500/20',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 2,
      title: 'Breakups & Romantic Relationships',
      description: 'Navigate the ups and downs of teenage relationships',
      color: 'bg-red-500',
      shadowColor: 'shadow-red-500/20',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 3,
      title: 'Body Image',
      description: 'Develop a healthy relationship with your body and self-image',
      color: 'bg-blue-500',
      shadowColor: 'shadow-blue-500/20',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 4,
      title: 'Menstrual Mood Swings',
      description: 'Understanding and managing hormonal changes',
      color: 'bg-purple-500',
      shadowColor: 'shadow-purple-500/20',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 5,
      title: 'Being Misunderstood',
      description: 'Dealing with lack of support and feeling unheard',
      color: 'bg-cyan-500',
      shadowColor: 'shadow-cyan-500/20',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 6,
      title: 'Academic Pressure',
      description: 'Managing stress from school and future expectations',
      color: 'bg-yellow-500',
      shadowColor: 'shadow-yellow-500/20',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 7,
      title: 'Cyberbullying & Social Media Pressure',
      description: 'Protecting your mental health in the digital age',
      color: 'bg-indigo-500',
      shadowColor: 'shadow-indigo-500/20',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 8,
      title: 'Loneliness & Isolation',
      description: 'Finding connection and overcoming feelings of isolation',
      color: 'bg-pink-500',
      shadowColor: 'shadow-pink-500/20',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 9,
      title: 'Unresolved Trauma',
      description: 'Healing from past experiences and moving forward',
      color: 'bg-green-500',
      shadowColor: 'shadow-green-500/20',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 10,
      title: 'Fear of Judgement & Identity Struggles',
      description: 'Embracing your authentic self and building confidence',
      color: 'bg-blue-500',
      shadowColor: 'shadow-blue-500/20',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&h=200&q=80'
    },
    {
      id: 11,
      title: 'Bullying',
      description: 'Standing up to bullying and building resilience',
      color: 'bg-red-500',
      shadowColor: 'shadow-red-500/20',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&h=200&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TeenNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 relative">
            <span className="animate-pulse bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              Your Mental Health Matters
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore articles and resources tailored for teens navigating life's challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 border-0 shadow-lg ${article.shadowColor} bg-white overflow-hidden`}
              onClick={() => navigate(`/teen-dashboard/article/${article.id}`)}
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

export default TeenHome;
