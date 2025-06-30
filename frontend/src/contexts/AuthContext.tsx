
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  role: 'teen' | 'senior' | null;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  setUserRole: (role: 'teen' | 'senior') => void;
  googleLogin: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    console.log('Logging in:', email);
    setUser({ name: 'User', email, role: null });
  };

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call
    console.log('Signing up:', name, email);
    setUser({ name, email, role: null });
  };

  const googleLogin = async () => {
    // Simulate Google OAuth
    console.log('Google login');
    setUser({ name: 'Google User', email: 'user@gmail.com', role: null });
  };

  const logout = () => {
    setUser(null);
  };

  const setUserRole = (role: 'teen' | 'senior') => {
    if (user) {
      setUser({ ...user, role });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      setUserRole,
      googleLogin
    }}>
      {children}
    </AuthContext.Provider>
  );
};
