import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import analyticsService from '../services/analyticsService';
import influencerService from '../services/influencerService';
import claimService from '../services/claimService';
import { 
  FiUsers, 
  FiCheckCircle, 
  FiAlertTriangle, 
  FiTrendingUp,
  FiArrowRight 
} from 'react-icons/fi';

const Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [recentInfluencers, setRecentInfluencers] = useState([]);
  const [recentClaims, setRecentClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [summaryRes, influencersRes, claimsRes] = await Promise.all([
        analyticsService.getSummary(),
        influencerService.getAll({ limit: 5, sort: '-createdAt' }),
        claimService.getAll({ limit: 5, sort: '-createdAt' }),
      ]);

      if (summaryRes.success) setSummary(summaryRes.data);
      if (influencersRes.success) setRecentInfluencers(influencersRes.data);
      if (claimsRes.success) setRecentClaims(claimsRes.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'text-green-600 bg-green-100';
      case 'debunked': return 'text-red-600 bg-red-100';
      default: return 'text-yellow-600 bg-yellow-100';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0e27]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e27] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-2">Welcome back! Here's what's happening.</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<FiUsers className="w-8 h-8" />}
            title="Total Influencers"
            value={summary?.totalInfluencers || 0}
            color="bg-blue-500"
          />
          <StatCard
            icon={<FiCheckCircle className="w-8 h-8" />}
            title="Verified Claims"
            value={summary?.verifiedClaims || 0}
            color="bg-green-500"
          />
          <StatCard
            icon={<FiAlertTriangle className="w-8 h-8" />}
            title="Pending Claims"
            value={summary?.pendingClaims || 0}
            color="bg-yellow-500"
          />
          <StatCard
            icon={<FiTrendingUp className="w-8 h-8" />}
            title="Avg Trust Score"
            value={summary?.avgTrustScore ? `${summary.avgTrustScore.toFixed(1)}%` : '0%'}
            color="bg-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Influencers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1a1f3a] rounded-lg shadow-lg border border-gray-800 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Recent Influencers</h2>
              <Link 
                to="/influencers" 
                className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1"
              >
                View All <FiArrowRight />
              </Link>
            </div>
            <div className="space-y-4">
              {recentInfluencers.length > 0 ? (
                recentInfluencers.map((influencer) => (
                  <Link
                    key={influencer._id}
                    to={`/influencers/${influencer._id}`}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#252a45] transition"
                  >
                    <img
                      src={influencer.image || '/default-avatar.png'}
                      alt={influencer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-white">{influencer.name}</h3>
                      <p className="text-sm text-gray-400">@{influencer.handle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-white">
                        Trust Score: {influencer.trustScore}
                      </div>
                      <div className="text-xs text-gray-400">
                        {influencer.followers?.toLocaleString()} followers
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-gray-400 text-center py-4">No influencers yet</p>
              )}
            </div>
          </motion.div>

          {/* Recent Claims */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1a1f3a] rounded-lg shadow-lg border border-gray-800 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Recent Claims</h2>
              <Link 
                to="/claims" 
                className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1"
              >
                View All <FiArrowRight />
              </Link>
            </div>
            <div className="space-y-4">
              {recentClaims.length > 0 ? (
                recentClaims.map((claim) => (
                  <div
                    key={claim._id}
                    className="p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition bg-[#252a45]"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(claim.verificationStatus)}`}>
                        {claim.verificationStatus}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(claim.datePublished).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-200 line-clamp-2">{claim.content}</p>
                    <div className="mt-2 flex gap-4 text-xs text-gray-400">
                      <span>Confidence: {claim.confidenceScore}%</span>
                      <span>Trust: {claim.trustScore}%</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-4">No claims yet</p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <QuickActionCard
            title="Browse Influencers"
            description="Explore and analyze health influencers"
            link="/influencers"
            color="bg-blue-600"
          />
          <QuickActionCard
            title="View Claims"
            description="Review verified and pending claims"
            link="/claims"
            color="bg-emerald-600"
          />
          <QuickActionCard
            title="Research Tasks"
            description="Contribute to claim verification"
            link="/research-tasks"
            color="bg-purple-600"
          />
        </motion.div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-[#1a1f3a] rounded-lg shadow-lg border border-gray-800 p-6"
  >
    <div className="flex items-center gap-4">
      <div className={`${color} text-white p-3 rounded-lg`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  </motion.div>
);

const QuickActionCard = ({ title, description, link, color }) => (
  <Link to={link}>
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#1a1f3a] rounded-lg shadow-lg border border-gray-800 p-6 hover:shadow-xl hover:border-gray-700 transition"
    >
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
        <FiArrowRight className="text-white w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  </Link>
);

export default Dashboard;
