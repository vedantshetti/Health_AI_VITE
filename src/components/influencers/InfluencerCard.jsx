import { useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const InfluencerCard = ({ influencer }) => {
  const navigate = useNavigate();
  
  const formatFollowers = (count) => {
    if (!count) return '0';
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <div
      onClick={() => navigate(`/influencers/${influencer._id}`)}
      className="bg-[#0F172A] rounded-lg border border-gray-800 p-6 cursor-pointer hover:border-emerald-500/50 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center">
          {influencer.image ? (
            <img
              src={influencer.image}
              alt={influencer.name}
              className="w-full h-full object-cover"
              onError={(e) => { 
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          ) : null}
          <UserCircleIcon className="w-16 h-16 text-gray-600" style={{ display: influencer.image ? 'none' : 'block' }} />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium text-lg">{influencer.name}</h3>
          <span className="text-gray-400 text-sm">@{influencer.handle}</span>
          <div className="mt-1">
            <span className="text-emerald-500 text-sm">{influencer.category || 'Health'}</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-semibold text-white">
                {influencer.trustScore || 0}
              </div>
              <div className="text-xs text-gray-400">Trust Score</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">
                {influencer.verifiedClaims || 0}
              </div>
              <div className="text-xs text-gray-400">Verified Claims</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">
                {formatFollowers(influencer.followers)}
              </div>
              <div className="text-xs text-gray-400">Followers</div>
            </div>
          </div>
        </div>
      </div>

      {influencer.bio && (
        <div className="mt-4">
          <p className="text-gray-400 text-sm line-clamp-2">{influencer.bio}</p>
        </div>
      )}

      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Claim Accuracy</span>
          <div className="w-48 bg-gray-800 rounded-full h-2">
            <div
              className="bg-emerald-500 h-2 rounded-full"
              style={{ width: `${influencer.claimAccuracy || 0}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Recent Claims</span>
          <span className="text-sm text-white">
            {influencer.recentClaims || 0} in last 30 days
          </span>
        </div>
      </div>

      <button
        className="w-full mt-6 bg-[#1E293B] text-white rounded-lg py-2 hover:bg-[#2E3B4B] transition-colors"
        onClick={e => {
          e.stopPropagation();
          navigate(`/influencers/${influencer._id}`);
        }}
      >
        View Full Profile
      </button>
    </div>
  );
};

export default InfluencerCard;
