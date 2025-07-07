const InfluencerStats = ({ influencer, onClose }) => {
  return (
    <div className="bg-[#0F172A] rounded-lg border border-gray-800 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-white">Performance Metrics</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-300"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-track-[#0B1120] scrollbar-thumb-gray-700 hover:scrollbar-thumb-gray-600">
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Category Distribution</h4>
            <div className="grid grid-cols-2 gap-4">
              {influencer.claims?.map(claim => (
                <div key={claim.id} className="flex justify-between items-center">
                  <span className="text-sm text-white">{claim.category}</span>
                  <span className="text-sm text-emerald-500">{claim.confidenceScore}%</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Recent Claims</h4>
            <div className="space-y-2">
              {influencer.claims?.map(claim => (
                <div key={claim.id} className="flex justify-between items-center">
                  <span className="text-sm text-white">{claim.content}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    claim.verificationStatus === 'verified' ? 'bg-emerald-500/10 text-emerald-500' :
                    claim.verificationStatus === 'questionable' ? 'bg-yellow-500/10 text-yellow-500' :
                    'bg-red-500/10 text-red-500'
                  }`}>
                    {claim.verificationStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerStats;
