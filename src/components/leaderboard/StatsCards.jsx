// src/components/leaderboard/StatsCards.jsx
import { UserGroupIcon, CheckCircleIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { influencers } from "@/data/influencers";

const StatsCards = () => {
  // Calculate stats dynamically
  const stats = {
    activeInfluencers: influencers.length.toLocaleString(),
    claimsVerified: influencers.reduce((total, inf) => total + inf.verifiedClaims, 0).toLocaleString(),
    averageTrustScore: `${(influencers.reduce((total, inf) => total + parseFloat(inf.trustScore), 0) / influencers.length).toFixed(1)}%`
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-[#0B1120] rounded-lg p-4 border border-gray-800">
        <div className="flex items-center gap-3">
          <div className="text-emerald-500">
            <UserGroupIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-2xl font-semibold text-white">{stats.activeInfluencers}</div>
            <div className="text-sm text-gray-400">Active Influencers</div>
          </div>
        </div>
      </div>

      <div className="bg-[#0B1120] rounded-lg p-4 border border-gray-800">
        <div className="flex items-center gap-3">
          <div className="text-emerald-500">
            <CheckCircleIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-2xl font-semibold text-white">{stats.claimsVerified}</div>
            <div className="text-sm text-gray-400">Claims Verified</div>
          </div>
        </div>
      </div>

      <div className="bg-[#0B1120] rounded-lg p-4 border border-gray-800">
        <div className="flex items-center gap-3">
          <div className="text-emerald-500">
            <ChartBarIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-2xl font-semibold text-white">{stats.averageTrustScore}</div>
            <div className="text-sm text-gray-400">Average Trust Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
