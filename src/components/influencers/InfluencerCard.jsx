// src/components/influencers/InfluencerCard.jsx
const InfluencerCard = ({ influencer }) => {
    return (
      <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
            <img 
              src={influencer.image} 
              alt={influencer.name}
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="flex-1">
            <h3 className="text-white font-medium text-lg">{influencer.name}</h3>
            <span className="text-emerald-500 text-sm">{influencer.category}</span>
            
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-semibold text-white">{influencer.trustScore}</div>
                <div className="text-xs text-gray-400">Trust Score</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">{influencer.claimsVerified}</div>
                <div className="text-xs text-gray-400">Verified Claims</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">{influencer.followers}</div>
                <div className="text-xs text-gray-400">Followers</div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Claim Accuracy</span>
            <div className="w-48 bg-gray-800 rounded-full h-2">
              <div 
                className="bg-emerald-500 h-2 rounded-full"
                style={{ width: `${influencer.claimAccuracy}%` }}
              />
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Recent Claims</span>
            <span className="text-sm text-white">{influencer.recentClaims} in last 30 days</span>
          </div>
        </div>
  
        <button className="w-full mt-6 bg-[#1E293B] text-white rounded-lg py-2 hover:bg-[#2E3B4B] transition-colors">
          View Full Profile
        </button>
      </div>
    );
  };

  export default InfluencerCard;