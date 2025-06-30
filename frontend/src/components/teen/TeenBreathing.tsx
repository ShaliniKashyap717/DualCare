
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react';
import TeenNavbar from './TeenNavbar';

const TeenBreathing: React.FC = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentExercise, setCurrentExercise] = useState<string | null>(null);

  const exercises = [
    {
      id: 'box',
      title: 'Box Breathing',
      description: 'Breathe in for 4, hold for 4, breathe out for 4, hold for 4',
      color: 'bg-blue-500',
      shadowColor: 'shadow-blue-500/20',
      duration: '4-4-4-4 pattern'
    },
    {
      id: 'calm',
      title: '4-7-8 Breathing',
      description: 'Breathe in for 4, hold for 7, breathe out for 8',
      color: 'bg-green-500',
      shadowColor: 'shadow-green-500/20',
      duration: '4-7-8 pattern'
    },
    {
      id: 'simple',
      title: 'Simple Deep Breathing',
      description: 'Slow, deep breaths to calm your mind',
      color: 'bg-purple-500',
      shadowColor: 'shadow-purple-500/20',
      duration: 'Natural rhythm'
    },
    {
      id: 'energize',
      title: 'Energizing Breath',
      description: 'Quick breathing to boost energy and focus',
      color: 'bg-orange-500',
      shadowColor: 'shadow-orange-500/20',
      duration: 'Quick rhythm'
    }
  ];

  const handleExercise = (exerciseId: string) => {
    setCurrentExercise(exerciseId);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const resetExercise = () => {
    setIsPlaying(false);
    setCurrentExercise(null);
  };

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
            Breathing Exercises
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice calming breathing techniques to reduce stress and anxiety
          </p>
        </div>

        {currentExercise ? (
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">
                  {exercises.find(e => e.id === currentExercise)?.title}
                </CardTitle>
                <p className="text-gray-600">
                  {exercises.find(e => e.id === currentExercise)?.description}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-full bg-white flex items-center justify-center ${isPlaying ? 'animate-pulse' : ''}`}>
                    <span className="text-2xl font-bold text-gray-800">
                      {isPlaying ? 'Breathe' : 'Ready'}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <Button
                    onClick={togglePlay}
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {isPlaying ? 'Pause' : 'Start'}
                  </Button>
                  <Button
                    onClick={resetExercise}
                    variant="outline"
                    className="border-gray-300 text-gray-700"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exercises.map((exercise) => (
              <Card
                key={exercise.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 border-0 shadow-lg ${exercise.shadowColor} bg-white`}
                onClick={() => handleExercise(exercise.id)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${exercise.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <CardTitle className="text-xl text-gray-800">
                    {exercise.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-2">
                    {exercise.description}
                  </p>
                  <p className="text-sm text-gray-500 text-center">
                    {exercise.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeenBreathing;
