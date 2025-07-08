import { useEffect, useState } from "react";
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import StatsCards from "@/components/leaderboard/StatsCards";
import CategoryFilter from "@/components/leaderboard/CategoryFilter";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const InfluencerLeaderboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isHighest, setIsHighest] = useState(true);
  const [stats, setStats] = useState(null);
  const [categories, setCategories] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch summary stats
  useEffect(() => {
    axios
      .get(`${API_BASE}/analytics/summary`)
      .then((res) => setStats(res.data.data))
      .catch(() => setStats(null));
  }, []);

  // Fetch categories
  useEffect(() => {
    axios
      .get(`${API_BASE}/analytics/categories`)
      .then((res) => setCategories(res.data.data || []))
      .catch(() => setCategories([]));
  }, []);

  // Fetch leaderboard data
  useEffect(() => {
    setLoading(true);
    setError("");
    let url = `${API_BASE}/analytics/leaderboard?`;
    if (selectedCategory && selectedCategory !== "all") {
      url += `category=${encodeURIComponent(selectedCategory)}&`;
    }
    url += `sortBy=${isHighest ? "trustScore" : "trustScore"}&order=${isHighest ? "desc" : "asc"}`;
    axios
      .get(url)
      .then((res) => setLeaderboard(res.data.data || []))
      .catch(() => {
        setLeaderboard([]);
        setError("Failed to load leaderboard.");
      })
      .finally(() => setLoading(false));
  }, [selectedCategory, isHighest]);

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

        {/* Stats Cards */}
        <StatsCards stats={stats} loading={!stats} />

        {/* Category Filter */}
        <CategoryFilter
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
  isHighest={isHighest}
  setIsHighest={setIsHighest}
  categories={["all", ...categories.filter(c => typeof c === "string").map(c => c.toLowerCase())]}
/>

        {/* Leaderboard Table */}
        <div className="mt-8">
          {loading ? (
            <div className="text-white text-center py-8">Loading leaderboard...</div>
          ) : error ? (
            <div className="text-red-500 text-center py-8">{error}</div>
          ) : (
            <LeaderboardTable
              influencers={leaderboard}
              selectedCategory={selectedCategory}
              isHighest={isHighest}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InfluencerLeaderboard;
