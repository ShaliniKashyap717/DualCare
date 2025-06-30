
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Music, Moon, BookOpen } from 'lucide-react';
import SeniorNavbar from './SeniorNavbar';

const SeniorMeditation: React.FC = () => {
  const [playingBhajan, setPlayingBhajan] = useState<number | null>(null);
  const [playingMeditation, setPlayingMeditation] = useState<number | null>(null);

  const bhajans = [
    { id: 1, title: 'Om Shanti Om', duration: '15 min', description: 'Peaceful chanting for inner calm' },
    { id: 2, title: 'Gayatri Mantra', duration: '10 min', description: 'Ancient wisdom for clarity' },
    { id: 3, title: 'Hanuman Chalisa', duration: '8 min', description: 'Devotional prayer for strength' },
    { id: 4, title: 'Mahamrityunjaya Mantra', duration: '12 min', description: 'Healing vibrations' }
  ];

  const meditations = [
    { id: 1, title: 'Body Scan Meditation', duration: '20 min', description: 'Release tension throughout your body' },
    { id: 2, title: 'Breathing Exercise', duration: '10 min', description: 'Deep breathing for relaxation' },
    { id: 3, title: 'Loving-Kindness Meditation', duration: '15 min', description: 'Cultivate compassion and love' },
    { id: 4, title: 'Sleep Preparation', duration: '25 min', description: 'Gentle meditation for better sleep' }
  ];

  const articles = [
    { id: 1, title: 'The Science of Sleep and Aging', category: 'Sleep Health' },
    { id: 2, title: 'Benefits of Meditation for Seniors', category: 'Meditation' },
    { id: 3, title: 'Creating a Peaceful Bedtime Routine', category: 'Sleep Tips' },
    { id: 4, title: 'Managing Sleep Disorders in Later Life', category: 'Health' }
  ];

  const toggleBhajan = (id: number) => {
    setPlayingBhajan(playingBhajan === id ? null : id);
    setPlayingMeditation(null);
  };

  const toggleMeditation = (id: number) => {
    setPlayingMeditation(playingMeditation === id ? null : id);
    setPlayingBhajan(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SeniorNavbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Meditation & Sleep
          </h1>
          <p className="text-xl text-gray-600">
            Find peace through meditation, spiritual music, and sleep wellness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bhajans Section */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Music className="w-5 h-5" />
                Spiritual Bhajans
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {bhajans.map((bhajan) => (
                  <div key={bhajan.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{bhajan.title}</h3>
                      <p className="text-sm text-gray-600">{bhajan.description}</p>
                      <span className="text-xs text-orange-600 font-medium">{bhajan.duration}</span>
                    </div>
                    <Button
                      onClick={() => toggleBhajan(bhajan.id)}
                      variant={playingBhajan === bhajan.id ? "default" : "outline"}
                      size="sm"
                      className={playingBhajan === bhajan.id ? "bg-orange-500 hover:bg-orange-600" : ""}
                    >
                      {playingBhajan === bhajan.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Meditation Exercises */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Moon className="w-5 h-5" />
                Meditation Exercises
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {meditations.map((meditation) => (
                  <div key={meditation.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{meditation.title}</h3>
                      <p className="text-sm text-gray-600">{meditation.description}</p>
                      <span className="text-xs text-purple-600 font-medium">{meditation.duration}</span>
                    </div>
                    <Button
                      onClick={() => toggleMeditation(meditation.id)}
                      variant={playingMeditation === meditation.id ? "default" : "outline"}
                      size="sm"
                      className={playingMeditation === meditation.id ? "bg-purple-500 hover:bg-purple-600" : ""}
                    >
                      {playingMeditation === meditation.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sleep & Wellness Articles */}
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Sleep & Wellness Articles
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles.map((article) => (
                <div key={article.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800 hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    {article.category}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Playing */}
        {(playingBhajan || playingMeditation) && (
          <Card className="mt-6 border-0 shadow-lg bg-white">
            <CardContent className="py-4">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  {playingBhajan ? <Music className="w-5 h-5 text-orange-500" /> : <Moon className="w-5 h-5 text-purple-500" />}
                  <span className="font-medium text-gray-800">
                    Now Playing: {
                      playingBhajan 
                        ? bhajans.find(b => b.id === playingBhajan)?.title
                        : meditations.find(m => m.id === playingMeditation)?.title
                    }
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Playing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SeniorMeditation;
