
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/role-selection');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate('/role-selection');
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-gradient">
            Welcome Back to DualCare
          </CardTitle>
          <CardDescription className="text-gray-600">
            Sign in to continue your mental wellness journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-primary hover:opacity-90 text-white font-semibold"
            >
              Sign In
            </Button>
          </form>

          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex justify-center">
              <span className="bg-white px-2 text-gray-500 text-sm">OR</span>
            </div>
          </div>

          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full h-12 border-2 hover:bg-gray-50"
          >
            Continue with Google
          </Button>

          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-pink-500 hover:text-pink-600 font-semibold"
              >
                Sign up
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
