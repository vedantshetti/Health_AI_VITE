// src/pages/InfluencerLeaderboard.jsx
import { useState } from "react";
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import StatsCards from "@/components/leaderboard/StatsCards";
import CategoryFilter from "@/components/leaderboard/CategoryFilter";

const InfluencerLeaderboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isHighest, setIsHighest] = useState(true);

  const stats = {
    activeInfluencers: "1,234",
    claimsVerified: "25,431",
    averageTrustScore: "85.7%",
  };

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-white mb-2">
            Influencer Trust Leaderboard
          </h1>
          <p className="text-gray-400 text-sm">
            Real-time rankings of health influencers based on scientific
            accuracy, credibility, and transparency. Updated daily using
            AI-powered analysis.
          </p>
        </div>

        <StatsCards stats={stats} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isHighest={isHighest}
          setIsHighest={setIsHighest}
        />
        <LeaderboardTable
          selectedCategory={selectedCategory}
          isHighest={isHighest}
        />
      </div>
    </div>
  );
};

export default InfluencerLeaderboard;
