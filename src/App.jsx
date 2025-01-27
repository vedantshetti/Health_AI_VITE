// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ResearchTasks from './pages/ResearchTasks';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ResearchTasks />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
