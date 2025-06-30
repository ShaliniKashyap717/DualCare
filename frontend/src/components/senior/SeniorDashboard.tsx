
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SeniorNavbar from './SeniorNavbar';

const SeniorDashboard: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const moods = [
    { id: 'content', emoji: '😊', label: 'Content', color: 'bg-green-100 text-green-800' },
    { id: 'lonely', emoji: '😔', label: 'Lonely', color: 'bg-blue-100 text-blue-800' },
    { id: 'anxious', emoji: '😰', label: 'Anxious', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'grateful', emoji: '🙏', label: 'Grateful', color: 'bg-purple-100 text-purple-800' },
    { id: 'tired', emoji: '😴', label: 'Tired', color: 'bg-gray-100 text-gray-800' },
    { id: 'nostalgic', emoji: '🌅', label: 'Nostalgic', color: 'bg-orange-100 text-orange-800' }
  ];

  const generateSuggestions = async () => {
    setLoading(true);
    // Simulate AI generation
    setTimeout(() => {
      let newSuggestions = [];

      switch (selectedMood) {
        case 'content':
          newSuggestions = [
            "Share your positive energy by calling a friend or family member",
            "Take a peaceful walk in nature or your garden",
            "Write in your gratitude journal about today's blessings",
            "Engage in a hobby you love, like reading or crafting",
            "Consider volunteering to help others in your community"
          ];
          break;
        case 'lonely':
          newSuggestions = [
            "Reach out to an old friend or family member for a chat",
            "Join a local senior center or community group activity",
            "Consider adopting a pet for companionship",
            "Attend a religious service or spiritual gathering",
            "Try video calling loved ones to feel more connected"
          ];
          break;
        case 'anxious':
          newSuggestions = [
            "Practice deep breathing exercises for 10 minutes",
            "Try gentle meditation or prayer",
            "Take a warm bath with calming essential oils",
            "Call a trusted friend or family member to talk",
            "Consider speaking with your doctor about your concerns"
          ];
          break;
        case 'grateful':
          newSuggestions = [
            "Write thank-you notes to people who've impacted your life",
            "Share your gratitude with loved ones",
            "Donate to a cause that's meaningful to you",
            "Reflect on your life's achievements and positive memories",
            "Spend time in nature appreciating its beauty"
          ];
          break;
        case 'tired':
          newSuggestions = [
            "Take a short nap if you haven't already today",
            "Ensure you're staying hydrated and eating well",
            "Try gentle stretching or light movement",
            "Consider an earlier bedtime tonight",
            "Speak with your doctor if fatigue persists"
          ];
          break;
        case 'nostalgic':
          newSuggestions = [
            "Look through old photo albums with loved ones",
            "Share memories and stories with family",
            "Write down important memories for future generations",
            "Visit places that hold special meaning for you",
            "Connect with old friends to reminisce together"
          ];
          break;
        default:
          newSuggestions = [
            "Take time for self-reflection and mindfulness",
            "Engage in activities that bring you joy",
            "Stay connected with your support network",
            "Practice gratitude for the present moment"
          ];
      }

      setSuggestions(newSuggestions);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <SeniorNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-4">
            My Companion Dashboard
          </h1>
          <p className="text-gray-600">
            How are you feeling today? Let me provide some personalized suggestions
          </p>
        </div>

        <Card className="mb-8 bg-white/90 backdrop-blur-sm shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              What describes your mood today?
            </CardTitle>
            <CardDescription className="text-center">
              Select the feeling that best matches how you're doing right now
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {moods.map((mood) => (
                <Card
                  key={mood.id}
                  className={`cursor-pointer hover-scale transition-all duration-300 ${
                    selectedMood === mood.id ? 'ring-2 ring-purple-400 bg-purple-50' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedMood(mood.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{mood.emoji}</div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${mood.color}`}>
                      {mood.label}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedMood && (
              <div className="text-center">
                <Button
                  onClick={generateSuggestions}
                  disabled={loading}
                  className="bg-gradient-ocean hover:opacity-90 text-white px-8 py-3"
                >
                  {loading ? 'Generating suggestions...' : 'Get Personalized Suggestions'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {suggestions.length > 0 && (
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-center text-gradient">
                Suggestions Just for You
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

export default SeniorDashboard;
