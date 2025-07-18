import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const InfluencerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Claims Analysis');
  const [influencer, setInfluencer] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    axios
      .get(`${API_BASE}/influencers/${id}`)
      .then((res) => {
        if (res.data && res.data.data) {
          setInfluencer(res.data.data);
        } else {
          setError('Influencer not found');
          navigate('/influencers');
        }
      })
      .catch(() => {
        setError('Influencer not found');
        navigate('/influencers');
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);


  useEffect(() => {
    setPosts([]);
    setPostsLoading(true);
    axios
      .get(`${API_BASE}/influencers/${id}/posts`)
      .then((res) => {
        if (res.data && res.data.data) {
          setPosts(res.data.data);
        }
      })
      .catch(() => setPosts([]))
      .finally(() => setPostsLoading(false));
  }, [id]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (error || !influencer) return null;

  const tabs = ['Claims Analysis', 'Recommended Products', 'Monetization'];
  const categories = [
    'All Categories', 'Sleep', 'Performance', 'Hormones', 'Nutrition',
    'Exercise', 'Stress', 'Cognition', 'Motivation', 'Recovery', 'Mental Health'
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] p-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-6 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={influencer.image}
                alt={influencer.name}
                className="w-full h-full object-cover"
                onError={e => { e.target.onerror = null; e.target.src = '/default-profile.png'; }}
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-semibold text-white mb-2">{influencer.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {influencer.tags?.length
                  ? influencer.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[#1E293B] text-gray-400 rounded-full text-xs">
                        {tag}
                      </span>
                    ))
                  : ['Neuroscience', 'Sleep', 'Performance', 'Hormones'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[#1E293B] text-gray-400 rounded-full text-xs">
                        {tag}
                      </span>
                    ))
                }
              </div>
              <p className="text-gray-400 text-sm max-w-3xl">
                {influencer.bio ||
                  "Stanford Professor of Neurobiology and Ophthalmology, focusing on neural development, brain plasticity, and neural regeneration..."}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-4">
            <div className="text-3xl font-semibold text-emerald-500">{influencer.trustScore}</div>
            <div className="text-sm text-gray-400">Trust Score</div>
            <div className="text-xs text-gray-500">Based on {influencer.verifiedClaims} verified claims</div>
          </div>
          <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-4">
            <div className="text-3xl font-semibold text-emerald-500">$5.0M</div>
            <div className="text-sm text-gray-400">Yearly Revenue</div>
            <div className="text-xs text-gray-500">Estimated earnings</div>
          </div>
          <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-4">
            <div className="text-3xl font-semibold text-emerald-500">1</div>
            <div className="text-sm text-gray-400">Products</div>
            <div className="text-xs text-gray-500">Recommended products</div>
          </div>
          <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-4">
            <div className="text-3xl font-semibold text-emerald-500">{influencer.followers}</div>
            <div className="text-sm text-gray-400">Followers</div>
            <div className="text-xs text-gray-500">Total following</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeTab === tab 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-[#0F172A] text-gray-400 hover:bg-[#1E293B]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Claims Section */}
        <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-6">
          <input
            type="text"
            placeholder="Search claims..."
            className="w-full bg-[#1E293B] border border-gray-800 rounded-lg px-4 py-2 text-white mb-4"
          />

          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(category => (
              <button
                key={category}
                className={`px-3 py-1 rounded-full text-xs ${
                  category === 'All Categories' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-[#1E293B] text-gray-400 hover:bg-emerald-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-400">Verification Status</div>
            <select className="bg-[#1E293B] text-white rounded-lg px-3 py-1 text-sm border border-gray-800">
              <option>Date</option>
              <option>Trust Score</option>
            </select>
          </div>

          {/* Posts List */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Posts</h2>
            {postsLoading ? (
              <div className="text-gray-400">Loading posts...</div>
            ) : posts.length === 0 ? (
              <div className="text-gray-400">No posts found for this influencer.</div>
            ) : (
              <ul className="space-y-6">
                {posts.map(post => (
                  <li
                    key={post.id}
                    className="p-4 rounded-lg bg-[#1E293B] border border-gray-700"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">
                        {new Date(post.createdAt).toLocaleString()}
                      </span>
                      <div className="flex space-x-4 text-xs text-gray-400">
                        <span>❤️ {post.metrics.likes}</span>
                        <span>🔁 {post.metrics.retweets}</span>
                        <span>💬 {post.metrics.replies}</span>
                      </div>
                    </div>
                    <div className="text-white text-base break-words">
                      {post.text}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfile;
