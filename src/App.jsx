// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ResearchTasks from './pages/ResearchTasks';
import InfluencerLeaderboard from './pages/InfluencerLeaderboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ResearchTasks />} />
          <Route path="/leaderboard" element={<InfluencerLeaderboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
