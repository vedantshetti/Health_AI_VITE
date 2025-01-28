// src/components/influencers/InfluencerStats.jsx
const InfluencerStats = ({ influencer }) => {
    return (
      <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-medium text-white mb-6">Performance Metrics</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Category Distribution</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(influencer.categories).map(([category, percentage]) => (
                <div key={category} className="flex justify-between items-center">
                  <span className="text-sm text-white">{category}</span>
                  <span className="text-sm text-emerald-500">{percentage}%</span>
                </div>
              ))}
            </div>
          </div>
  
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Trust Score History</h4>
            {/* Add trust score chart here */}
          </div>
  
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Recent Claims</h4>
            <div className="space-y-2">
              {influencer.recentClaims.map(claim => (
                <div key={claim.id} className="flex justify-between items-center">
                  <span className="text-sm text-white">{claim.content}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    claim.status === 'verified' ? 'bg-emerald-500/10 text-emerald-500' :
                    claim.status === 'questionable' ? 'bg-yellow-500/10 text-yellow-500' :
                    'bg-red-500/10 text-red-500'
                  }`}>
                    {claim.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default InfluencerStats;