// src/pages/InfluencerProfile.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const InfluencerProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Claims Analysis');
  
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src={influencer.image} alt={influencer.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">{influencer.name}</h1>
              <div className="flex gap-2 mt-2">
                {['Neuroscience', 'Sleep', 'Performance', 'Hormones'].map(tag => (
                  <span key={tag} className="text-xs bg-[#1E293B] text-gray-400 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4 max-w-2xl">
                Stanford Professor of Neurobiology and Ophthalmology, focusing on neural development, brain plasticity, and neural regeneration...
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-4">
            <div className="text-3xl font-semibold text-emerald-500">89%</div>
            <div className="text-sm text-gray-400">Trust Score</div>
            <div className="text-xs text-gray-500">Based on 127 verified claims</div>
          </div>
          {/* Similar stat boxes for Revenue, Products, Followers */}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {['Claims Analysis', 'Recommended Products', 'Monetization'].map(tab => (
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
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search claims..."
              className="w-full bg-[#1E293B] border border-gray-800 rounded-lg px-4 py-2 text-white"
            />
          </div>

          <div className="space-y-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {['All Categories', 'Sleep', 'Performance', 'Hormones'].map(category => (
                <button
                  key={category}
                  className="px-3 py-1 rounded-full text-xs bg-emerald-500 text-white"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Claims List */}
            <div className="space-y-4 mt-6">
              {/* Individual claim items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfile;
