// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import ResearchTasks from './pages/ResearchTasks';
import InfluencerLeaderboard from './pages/InfluencerLeaderboard';
import Claims from './pages/Claims';
import Influencers from './pages/Influencers';
import InfluencerProfile from './pages/InfluencerProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import VerifyEmail from './pages/VerifyEmail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/influencers" element={<ProtectedRoute><Influencers /></ProtectedRoute>} />
          <Route path="/influencers/:id" element={<ProtectedRoute><InfluencerProfile /></ProtectedRoute>} />
          <Route path="/claims" element={<ProtectedRoute><Claims /></ProtectedRoute>} />
          <Route path="/leaderboard" element={<ProtectedRoute><InfluencerLeaderboard /></ProtectedRoute>} />
          <Route path="/research-tasks" element={<ProtectedRoute><ResearchTasks /></ProtectedRoute>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
