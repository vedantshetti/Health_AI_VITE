// src/pages/InfluencerProfile.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { influencers } from '@/data/influencers';
import { claims } from '@/data/claims';

const InfluencerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Claims Analysis');
  const [influencer, setInfluencer] = useState(null);
  
  useEffect(() => {
    const foundInfluencer = influencers.find(inf => inf.rank.toString() === id);
    if (!foundInfluencer) {
      navigate('/influencers');
      return;
    }
    setInfluencer(foundInfluencer);
  }, [id, navigate]);

  if (!influencer) return null;

  const tabs = ['Claims Analysis', 'Recommended Products', 'Monetization'];
  const categories = ['All Categories', 'Sleep', 'Performance', 'Hormones', 'Nutrition', 'Exercise', 'Stress', 'Cognition', 'Motivation', 'Recovery', 'Mental Health'];

  return (
    <div className="min-h-screen bg-[#0B1120] p-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-6 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img src={influencer.image} alt={influencer.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-semibold text-white mb-2">{influencer.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Neuroscience', 'Sleep', 'Performance', 'Hormones'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[#1E293B] text-gray-400 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm max-w-3xl">
                Stanford Professor of Neurobiology and Ophthalmology, focusing on neural development, brain plasticity, and neural regeneration...
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
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfile;
