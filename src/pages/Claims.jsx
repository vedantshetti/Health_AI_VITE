// src/pages/Claims.jsx
import { useState } from "react";
import ClaimsFilter from "@/components/claims/ClaimsFilter";
import ClaimsTable from "@/components/claims/ClaimsTable";
import { claims } from "@/data/claims";

const Claims = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isHighest, setIsHighest] = useState(true);
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  });

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
        />
        <ClaimsTable
          selectedStatus={selectedStatus}
          selectedCategory={selectedCategory}
          isHighest={isHighest}
          dateRange={dateRange}
        />
      </div>
    </div>
  );
};

export default Claims;
