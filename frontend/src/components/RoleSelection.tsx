
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const RoleSelection: React.FC = () => {
  const { setUserRole } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelection = (role: 'teen' | 'senior') => {
    setUserRole(role);
    navigate(role === 'teen' ? '/teen-dashboard' : '/senior-dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/90 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-4xl font-bold text-gradient">
            How do you identify yourself?
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Choose your category to get personalized mental health support
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card 
              className="cursor-pointer hover-scale border-2 border-pink-200 hover:border-pink-400 transition-all duration-300"
              onClick={() => handleRoleSelection('teen')}
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🧑‍🎓</div>
                <h3 className="text-2xl font-bold text-pink-600 mb-2">Teen</h3>
                <p className="text-gray-600">
                  Navigate through adolescence with specialized support for academic pressure, relationships, and identity exploration
                </p>
                <Button className="mt-4 bg-gradient-primary hover:opacity-90 text-white">
                  I'm a Teen
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover-scale border-2 border-purple-200 hover:border-purple-400 transition-all duration-300"
              onClick={() => handleRoleSelection('senior')}
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">👴</div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Senior Citizen</h3>
                <p className="text-gray-600">
                  Find companionship and support for life transitions, health concerns, and maintaining independence
                </p>
                <Button className="mt-4 bg-gradient-ocean hover:opacity-90 text-white">
                  I'm a Senior
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoleSelection;
