// src/components/leaderboard/LeaderboardTable.jsx
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { influencers } from "@/data/influencers";

const LeaderboardTable = ({ selectedCategory }) => {
  const filteredInfluencers = selectedCategory === 'all' 
    ? influencers 
    : influencers.filter(inf => inf.category.toLowerCase() === selectedCategory);

  return (
    <div className="bg-[#0B1120] rounded-lg border border-gray-800">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left p-4 text-gray-400 text-sm font-medium">RANK</th>
            <th className="text-left p-4 text-gray-400 text-sm font-medium">INFLUENCER</th>
            <th className="text-left p-4 text-gray-400 text-sm font-medium">CATEGORY</th>
            <th className="text-left p-4 text-gray-400 text-sm font-medium">TRUST SCORE</th>
            <th className="text-left p-4 text-gray-400 text-sm font-medium">TREND</th>
            <th className="text-left p-4 text-gray-400 text-sm font-medium">FOLLOWERS</th>
            <th className="text-left p-4 text-gray-400 text-sm font-medium">VERIFIED CLAIMS</th>
          </tr>
        </thead>
        <tbody>
          {filteredInfluencers.map((influencer) => (
            <tr 
              key={influencer.rank} 
              className="border-b border-gray-800 hover:bg-gray-800/10"
            >
              <td className="p-4 text-gray-400 text-sm">#{influencer.rank}</td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700">
                    {/* Add image here if available */}
                  </div>
                  <span className="text-white text-sm">{influencer.name}</span>
                </div>
              </td>
              <td className="p-4 text-gray-400 text-sm">{influencer.category}</td>
              <td className="p-4">
                <span className={`text-sm ${
                  parseInt(influencer.trustScore) >= 90 
                    ? 'text-emerald-500' 
                    : 'text-yellow-500'
                }`}>
                  {influencer.trustScore}
                </span>
              </td>
              <td className="p-4">
                {influencer.trend === 'up' ? (
                  <ArrowUpIcon className="w-4 h-4 text-emerald-500" />
                ) : (
                  <ArrowDownIcon className="w-4 h-4 text-red-500" />
                )}
              </td>
              <td className="p-4 text-gray-400 text-sm">{influencer.followers}</td>
              <td className="p-4 text-gray-400 text-sm">{influencer.verifiedClaims}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
