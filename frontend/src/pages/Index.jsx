import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12 max-w-4xl">
        <h1 className="text-6xl font-bold mb-6">
          <span className="animate-pulse bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]">
            DualCare
          </span>
        </h1>
        <p className="text-2xl text-gray-700 mb-4">
          Personalized Mental Health Support
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're navigating the challenges of adolescence or embracing your golden years, 
          DualCare provides tailored mental health resources and support for every stage of life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl w-full">
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 hover-scale">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">🧑‍🎓</div>
            <CardTitle className="text-2xl text-pink-600">For Teens</CardTitle>
            <CardDescription className="text-gray-600">
              Navigate peer pressure, relationships, academic stress, and identity challenges with specialized support
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• Mood tracking and AI suggestions</li>
              <li>• Articles on teen-specific challenges</li>
              <li>• Community support and journaling</li>
              <li>• Professional guidance resources</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 hover-scale">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">👴</div>
            <CardTitle className="text-2xl text-purple-600">For Seniors</CardTitle>
            <CardDescription className="text-gray-600">
              Find companionship, purpose, and support through life transitions with dignity and grace
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• Daily activity planning and wellness</li>
              <li>• Grief and loneliness support</li>
              <li>• Community connection tools</li>
              <li>• Meditation and sleep resources</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => navigate('/signup')}
          className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg"
        >
          Get Started
        </Button>
        <Button
          onClick={() => navigate('/login')}
          variant="outline"
          className="border-2 border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg"
        >
          Sign In
        </Button>
      </div>

      <div className="mt-12 text-center text-gray-500">
        <p>Join thousands of people taking control of their mental wellness journey</p>
      </div>
    </div>
  );
};

export default Index;
