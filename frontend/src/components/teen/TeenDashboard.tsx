
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import TeenNavbar from './TeenNavbar';

const TeenDashboard: React.FC = () => {
  const [mood, setMood] = useState([5]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateSuggestions = async () => {
    setLoading(true);
    // Simulate AI generation
    setTimeout(() => {
      const moodLevel = mood[0];
      let newSuggestions = [];

      if (moodLevel <= 3) {
        newSuggestions = [
          "Take deep breaths and try a 5-minute meditation",
          "Reach out to a trusted friend or family member",
          "Listen to your favorite uplifting music",
          "Write down three things you're grateful for today",
          "Consider speaking with a counselor if these feelings persist"
        ];
      } else if (moodLevel <= 6) {
        newSuggestions = [
          "Take a walk outside to get some fresh air",
          "Do a creative activity like drawing or writing",
          "Call a friend to catch up and share how you're feeling",
          "Try some light exercise or stretching",
          "Practice mindfulness for 10 minutes"
        ];
      } else {
        newSuggestions = [
          "Share your positive energy with others around you",
          "Try something new or challenge yourself today",
          "Help someone else who might be struggling",
          "Document this good mood in your journal",
          "Engage in activities that maintain your wellbeing"
        ];
      }

      setSuggestions(newSuggestions);
      setLoading(false);
    }, 1500);
  };

  const getMoodColor = (value: number) => {
    if (value <= 3) return 'text-red-500';
    if (value <= 6) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getMoodEmoji = (value: number) => {
    if (value <= 3) return '😢';
    if (value <= 6) return '😐';
    return '😊';
  };

  return (
    <div className="min-h-screen">
      <TeenNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-4">
            Your Daily Check-in
          </h1>
          <p className="text-gray-600">
            Share how you're feeling today and get personalized suggestions
          </p>
        </div>

        <Card className="mb-8 bg-white/90 backdrop-blur-sm shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              How are you feeling today?
            </CardTitle>
            <CardDescription className="text-center">
              Rate your mood on a scale from 1 (very low) to 10 (amazing)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-6xl">{getMoodEmoji(mood[0])}</div>
              <div className={`text-3xl font-bold ${getMoodColor(mood[0])}`}>
                {mood[0]}/10
              </div>
              <div className="w-full max-w-md">
                <Slider
                  value={mood}
                  onValueChange={setMood}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between w-full max-w-md text-sm text-gray-500">
                <span>Very Low</span>
                <span>Neutral</span>
                <span>Amazing</span>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={generateSuggestions}
                disabled={loading}
                className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3"
              >
                {loading ? 'Generating...' : 'Get AI Suggestions'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {suggestions.length > 0 && (
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-center text-gradient">
                Personalized Suggestions for You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gradient-cool rounded-lg"
                  >
                    <span className="text-purple-500 font-semibold">
                      {index + 1}.
                    </span>
                    <p className="text-gray-700">{suggestion}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TeenDashboard;
