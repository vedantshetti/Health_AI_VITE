// src/components/leaderboard/LeaderboardTable.jsx
const LeaderboardTable = ({ selectedCategory }) => {
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
            {/* Add table rows here with influencer data */}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default LeaderboardTable;
  