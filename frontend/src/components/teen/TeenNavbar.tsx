
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '../../contexts/AuthContext';

const TeenNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const navItems = [
    { name: 'Home', path: '/teen-dashboard' },
    { name: 'Dashboard', path: '/teen-dashboard/dashboard' },
    { name: 'Heal', path: '/teen-dashboard/heal' },
    { name: 'Chatroom', path: '/teen-dashboard/chatroom' },
    { name: 'Community', path: '/teen-dashboard/community' },
    { name: 'Journal', path: '/teen-dashboard/journal' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">DualCare</h1>
            <span className="ml-1 px-1.5 py-0.5 bg-pink-500 text-white text-xs rounded-md font-medium transform -translate-y-1">Teen</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => navigate(item.path)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(item.path) 
                    ? "text-pink-600 bg-pink-50/70 backdrop-blur-sm shadow-sm" 
                    : "text-gray-600 hover:text-pink-600 hover:bg-pink-50/50"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
                )}
              </Button>
            ))}
          </div>

          <Button
            onClick={logout}
            variant="outline"
            size="sm"
            className="border-gray-200 text-gray-600 hover:bg-gray-50 text-sm px-3 py-1.5"
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default TeenNavbar;
