// src/components/claims/ClaimsFilter.jsx
import { useState } from "react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const ClaimsFilter = ({
  selectedStatus,
  setSelectedStatus,
  selectedCategory,
  setSelectedCategory,
  isHighest,
  setIsHighest,
  dateRange,
  setDateRange,
  claims,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const statuses = ["All Claims", "Verified", "Questionable", "Debunked"];
  const categories = [
    "All",
    "Medicine",
    "Nutrition",
    "Mental Health",
    "Neuroscience",
    "Cardiology",
    "Longevity",
  ];

  const handleExport = () => {
    const headers =
      [
        "Influencer",
        "Status",
        "Confidence Score",
        "Journal Reference",
        "Date",
        "Notes",
      ].join(",") + ",\n";

    const csvContent =
      "data:text/csv;charset=utf-8," +
      headers +
      claims
        .map((claim) => {
          const row = [
            `"${claim.influencer.name}"`,
            `"${claim.verificationStatus}"`,
            `${claim.confidenceScore}`,
            `"${claim.scientificReferences[0]?.journal || ""}"`,
            `"${new Date(claim.datePublished).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}"`,
            `"${claim.content}"`,
          ].join(",");
          return row + ",\n";
        })
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `health-claims-${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status === "All Claims" ? "all" : status.toLowerCase());
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === "All" ? "all" : category.toLowerCase());
  };

  return (
    <div className="space-y-4 mb-6">
      {/* Categories */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              (selectedCategory === "all" && category === "All") ||
              selectedCategory === category.toLowerCase()
                ? "bg-emerald-500 text-white"
                : "bg-[#0B1120] text-gray-400 hover:bg-[#1E293B]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Status and Actions */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex gap-2">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                (selectedStatus === "all" && status === "All Claims") ||
                selectedStatus === status.toLowerCase()
                  ? "bg-emerald-500 text-white"
                  : "bg-[#0B1120] text-gray-400 hover:bg-[#1E293B]"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Date Picker */}
        <div className="relative">
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="bg-[#0B1120] text-gray-400 px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-[#1E293B]"
          >
            <CalendarIcon className="h-4 w-4" />
            Date Range
          </button>

          {showDatePicker && (
            <div className="absolute top-full mt-2 bg-[#1E293B] rounded-lg p-4 shadow-lg z-50">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-xs mb-1">
                    From
                  </label>
                  <input
                    type="date"
                    value={dateRange?.start || ""}
                    onChange={(e) =>
                      setDateRange((prev) => ({
                        ...prev,
                        start: e.target.value,
                      }))
                    }
                    className="bg-[#0B1120] text-white px-3 py-2 rounded-md w-full text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1">To</label>
                  <input
                    type="date"
                    value={dateRange?.end || ""}
                    onChange={(e) =>
                      setDateRange((prev) => ({ ...prev, end: e.target.value }))
                    }
                    className="bg-[#0B1120] text-white px-3 py-2 rounded-md w-full text-sm"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setIsHighest(!isHighest)}
            className="bg-[#0B1120] text-gray-400 px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-[#1E293B] transition-colors"
          >
            {isHighest ? (
              <ArrowUpIcon className="h-4 w-4" />
            ) : (
              <ArrowDownIcon className="h-4 w-4" />
            )}
            {isHighest ? "Highest First" : "Lowest First"}
          </button>
          <button
            onClick={handleExport}
            className="bg-[#0B1120] text-gray-400 px-4 py-2 rounded-full text-sm hover:bg-[#1E293B] transition-colors"
          >
            Export Claims
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimsFilter;
