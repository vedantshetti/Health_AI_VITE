// src/pages/Influencers.jsx
import { useState } from 'react';
import { influencers } from '@/data/influencers';
import { claims } from '@/data/claims';
import InfluencerSearch from '@/components/influencers/InfluencerSearch';
import InfluencerCard from '@/components/influencers/InfluencerCard';
import InfluencerStats from '@/components/influencers/InfluencerStats';

const Influencers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

  // Filter influencers based on search query
  const filteredInfluencers = influencers.filter(influencer =>
    influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    influencer.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get claims for selected influencer
  const getInfluencerClaims = (influencerId) => {
    return claims.filter(claim => claim.influencerId === influencerId);
  };

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-white mb-2">
            Influencer Profiles
          </h1>
          <p className="text-gray-400 text-sm">
            Comprehensive analysis of health influencers with verified metrics, trust scores, and performance analytics.
          </p>
        </div>

        <InfluencerSearch 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {filteredInfluencers.map(influencer => (
            <div 
              key={influencer.rank}
              onClick={() => setSelectedInfluencer({
                ...influencer,
                claims: getInfluencerClaims(influencer.rank)
              })}
              className="cursor-pointer"
            >
              <InfluencerCard 
                influencer={{
                  ...influencer,
                  trustScore: parseInt(influencer.trustScore),
                  claimsVerified: influencer.verifiedClaims
                }} 
              />
            </div>
          ))}
        </div>

        {selectedInfluencer && (
          <div className="mt-8">
            <InfluencerStats 
              influencer={selectedInfluencer}
              onClose={() => setSelectedInfluencer(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Influencers;
