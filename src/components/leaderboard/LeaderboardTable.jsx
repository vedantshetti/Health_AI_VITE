import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

const LeaderboardTable = ({ influencers, selectedCategory, isHighest }) => {
  const filteredInfluencers =
    selectedCategory === "all"
      ? influencers
      : influencers.filter(
          (inf) => inf.category && inf.category.toLowerCase() === selectedCategory
        );

  const sortedInfluencers = [...filteredInfluencers].sort((a, b) => {
    const scoreA = parseInt(a.trustScore);
    const scoreB = parseInt(b.trustScore);
    return isHighest ? scoreB - scoreA : scoreA - scoreB;
  });

  return (
    <div className="bg-[#0B1120] rounded-lg border border-gray-800">
      <div className="overflow-hidden">
        <div className="overflow-x-auto">
          <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-track-[#0B1120] scrollbar-thumb-gray-700 hover:scrollbar-thumb-gray-600">
            <table className="w-full">
              <thead className="sticky top-0 bg-[#0B1120] z-10">
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4 text-gray-400 text-sm font-medium whitespace-nowrap">RANK</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium whitespace-nowrap">INFLUENCER</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium whitespace-nowrap">CATEGORY</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium whitespace-nowrap">TRUST SCORE</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium whitespace-nowrap">TREND</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium whitespace-nowrap">FOLLOWERS</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium whitespace-nowrap">VERIFIED CLAIMS</th>
                </tr>
              </thead>
              <tbody>
                {sortedInfluencers.map((influencer, index) => (
                  <tr
                    key={influencer._id || influencer.rank || index}
                    className="border-b border-gray-800 hover:bg-[#1E293B]/50"
                  >
                    <td className="p-4 text-gray-400 text-sm">#{index + 1}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                          {influencer.image && (
                            <img
                              src={influencer.image}
                              alt={influencer.name}
                              className="w-full h-full object-cover"
                              onError={e => { e.target.onerror = null; e.target.src = '/default-profile.png'; }}
                            />
                          )}
                        </div>
                        <span className="text-white text-sm whitespace-nowrap">{influencer.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-400 text-sm whitespace-nowrap">{influencer.category}</td>
                    <td className="p-4">
                      <span className={`text-sm ${parseInt(influencer.trustScore) >= 90 ? "text-emerald-500" : "text-yellow-500"}`}>
                        {influencer.trustScore}
                      </span>
                    </td>
                    <td className="p-4">
                      {influencer.trend === "up" ? (
                        <ArrowUpIcon className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <ArrowDownIcon className="w-4 h-4 text-red-500" />
                      )}
                    </td>
                    <td className="p-4 text-gray-400 text-sm whitespace-nowrap">{influencer.followers}</td>
                    <td className="p-4 text-gray-400 text-sm">{influencer.verifiedClaims}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;
