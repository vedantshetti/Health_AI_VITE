// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ResearchTasks from './pages/ResearchTasks';
import InfluencerLeaderboard from './pages/InfluencerLeaderboard';
import Claims from './pages/Claims';
import Influencers from './pages/Influencers';
import InfluencerProfile from './pages/InfluencerProfile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ResearchTasks />} />
          <Route path="/leaderboard" element={<InfluencerLeaderboard />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/influencers/:id" element={<InfluencerProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
