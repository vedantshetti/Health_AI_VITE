import { useState, useEffect } from "react";
import ClaimsFilter from "@/components/claims/ClaimsFilter";
import ClaimsTable from "@/components/claims/ClaimsTable";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Claims = () => {
  const [claims, setClaims] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isHighest, setIsHighest] = useState(true);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [loading, setLoading] = useState(true);

  // Fetch claims based on filters
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE}/claims`, {
        params: {
          verificationStatus: selectedStatus !== "all" ? selectedStatus : undefined,
          category: selectedCategory !== "all" ? selectedCategory : undefined,
          startDate: dateRange.start || undefined,
          endDate: dateRange.end || undefined,
        },
      })
      .then((res) => setClaims(res.data.data || []))
      .catch(() => setClaims([]))
      .finally(() => setLoading(false));
  }, [selectedStatus, selectedCategory, dateRange]);

  // Fetch categories from analytics/categories endpoint
  useEffect(() => {
    axios
      .get(`${API_BASE}/analytics/categories`)
      .then((res) => {
        const cats = (res.data.data || []).filter(
          (c) => typeof c === "string" && c.trim() !== ""
        );
        setCategories(["All", ...cats]);
      })
      .catch(() => setCategories(["All"]));
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-white mb-2">
            Health Claims Verification
          </h1>
          <p className="text-gray-400 text-sm">
            Comprehensive database of verified health claims from influencers,
            cross-referenced with scientific research and expert analysis.
          </p>
        </div>

        <ClaimsFilter
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isHighest={isHighest}
          setIsHighest={setIsHighest}
          dateRange={dateRange}
          setDateRange={setDateRange}
          claims={claims}
          categories={categories}
        />
        <ClaimsTable
          claims={claims}
          selectedStatus={selectedStatus}
          selectedCategory={selectedCategory}
          isHighest={isHighest}
          dateRange={dateRange}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Claims;
