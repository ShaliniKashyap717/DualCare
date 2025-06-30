import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import RoleSelection from "./components/RoleSelection";
import TeenHome from "./components/teen/TeenHome";
import TeenDashboard from "./components/teen/TeenDashboard";
import TeenArticle from "./components/teen/TeenArticle";
import TeenHeal from "./components/teen/TeenHeal";
import TeenGames from "./components/teen/TeenGames";
import TeenBreathing from "./components/teen/TeenBreathing";
import TeenCommunity from "./components/teen/TeenCommunity";
import TeenChatroom from "./components/teen/TeenChatroom";
import TeenJournal from "./components/teen/TeenJournal";
import SeniorHome from "./components/senior/SeniorHome";
import SeniorDashboard from "./components/senior/SeniorDashboard";
import SeniorArticle from "./components/senior/SeniorArticle";
import SeniorHeal from "./components/senior/SeniorHeal";
import SeniorCommunity from "./components/senior/SeniorCommunity";
import SeniorPlanner from "./components/senior/SeniorPlanner";
import SeniorJournal from "./components/senior/SeniorJournal";
import SeniorMeditation from "./components/senior/SeniorMeditation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (!user.role) {
    return <Navigate to="/role-selection" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to={user.role === 'teen' ? '/teen-dashboard' : '/senior-dashboard'} replace /> : <Index />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      
      {/* Teen Routes */}
      <Route path="/teen-dashboard" element={
        <ProtectedRoute>
          <TeenHome />
        </ProtectedRoute>
      } />
      <Route path="/teen-dashboard/dashboard" element={
        <ProtectedRoute>
          <TeenDashboard />
        </ProtectedRoute>
      } />
      <Route path="/teen-dashboard/heal" element={
        <ProtectedRoute>
          <TeenHeal />
        </ProtectedRoute>
      } />
      <Route path="/teen-dashboard/heal/games" element={
        <ProtectedRoute>
          <TeenGames />
        </ProtectedRoute>
      } />
      <Route path="/teen-dashboard/heal/breathing" element={
        <ProtectedRoute>
          <TeenBreathing />
        </ProtectedRoute>
      } />
      <Route path="/teen-dashboard/chatroom" element={
        <ProtectedRoute>
          <TeenChatroom />
        </ProtectedRoute>
      } />
      <Route path="/teen-dashboard/community" element={
        <ProtectedRoute>
          <TeenCommunity />
        </ProtectedRoute>
      } />
      <Route path="/teen-dashboard/journal" element={
        <ProtectedRoute>
          <TeenJournal />
        </ProtectedRoute>
      } />
      <Route path="/teen-dashboard/article/:id" element={
        <ProtectedRoute>
          <TeenArticle />
        </ProtectedRoute>
      } />
      
      {/* Senior Routes */}
      <Route path="/senior-dashboard" element={
        <ProtectedRoute>
          <SeniorHome />
        </ProtectedRoute>
      } />
      <Route path="/senior-dashboard/dashboard" element={
        <ProtectedRoute>
          <SeniorDashboard />
        </ProtectedRoute>
      } />
      <Route path="/senior-dashboard/planner" element={
        <ProtectedRoute>
          <SeniorPlanner />
        </ProtectedRoute>
      } />
      <Route path="/senior-dashboard/heal" element={
        <ProtectedRoute>
          <SeniorHeal />
        </ProtectedRoute>
      } />
      <Route path="/senior-dashboard/community" element={
        <ProtectedRoute>
          <SeniorCommunity />
        </ProtectedRoute>
      } />
      <Route path="/senior-dashboard/journal" element={
        <ProtectedRoute>
          <SeniorJournal />
        </ProtectedRoute>
      } />
      <Route path="/senior-dashboard/meditation" element={
        <ProtectedRoute>
          <SeniorMeditation />
        </ProtectedRoute>
      } />
      <Route path="/senior-dashboard/article/:id" element={
        <ProtectedRoute>
          <SeniorArticle />
        </ProtectedRoute>
      } />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
