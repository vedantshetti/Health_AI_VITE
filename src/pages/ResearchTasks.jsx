// src/pages/ResearchTasks.jsx
import { useState } from "react";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ScientificJournals from "@/components/research/ScientificJournals";

const ResearchTasks = () => {
  const [timeRange, setTimeRange] = useState("last-month");
  const [includeRevenue, setIncludeRevenue] = useState(false);
  const [verifyJournals, setVerifyJournals] = useState(true);
  const [selectedJournals, setSelectedJournals] = useState([
    "PubMed Central",
    "Nature",
    "Science",
    "Cell",
    "The Lancet",
    "JAMA Network",
    "New England Journal of Medicine",
  ]);

  return (
    <div className="w-full">
      <div className="flex items-center space-x-4 mb-8">
        <Link
          to="/dashboard"
          className="text-emerald-400 flex items-center text-sm"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
        <h1 className="text-xl font-semibold text-white">Research Tasks</h1>
      </div>

      <div className="bg-[#1E293B] rounded-lg p-8">
        {" "}
        {/* Darker panel background */}
        <div className="flex items-center mb-8">
          <div className="w-5 h-5 bg-emerald-500 rounded-md mr-3" />
          <h2 className="text-white font-medium">Research Configuration</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-[#0F172A]/50 p-4 rounded-lg border border-emerald-900/30">
            <h3 className="text-sm font-medium text-gray-200 mb-2">
              Specific Influencer
            </h3>
            <input
              type="text"
              placeholder="Research a known health influencer by name"
              className="w-full bg-transparent border border-emerald-900/30 rounded-md p-2 text-white placeholder-gray-500"
            />
          </div>
          <div className="bg-[#0F172A]/50 p-4 rounded-lg border border-gray-800">
            <h3 className="text-sm font-medium text-gray-200 mb-2">
              Discover New
            </h3>
            <input
              type="text"
              placeholder="Find and analyze new health influencers"
              className="w-full bg-transparent border border-gray-800 rounded-md p-2 text-white placeholder-gray-500"
            />
          </div>
        </div>
        {/* Time Range buttons with updated styling */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-200 mb-3">Time Range</h3>
          <div className="grid grid-cols-4 gap-4">
            {["Last Week", "Last Month", "Last Year", "All Time"].map(
              (range) => (
                <button
                  key={range}
                  onClick={() =>
                    setTimeRange(range.toLowerCase().replace(" ", "-"))
                  }
                  className={`p-2 rounded-md text-center text-sm ${
                    timeRange === range.toLowerCase().replace(" ", "-")
                      ? "bg-emerald-900/20 border border-emerald-500 text-white"
                      : "bg-[#0F172A]/50 border border-gray-800 text-gray-400"
                  }`}
                >
                  {range}
                </button>
              )
            )}
          </div>
        </div>
        {/* Toggle switches with updated styling */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-200 font-medium">
                Include Revenue Analysis
              </h3>
              <p className="text-sm text-gray-400">
                Analyze monetization methods and estimate earnings
              </p>
            </div>
            <button
              onClick={() => setIncludeRevenue(!includeRevenue)}
              className={`w-12 h-6 rounded-full transition-colors ${
                includeRevenue ? "bg-emerald-500" : "bg-gray-700"
              }`}
            >
              <span
                className={`block w-4 h-4 bg-white rounded-full transition-transform ${
                  includeRevenue ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
        {/* Scientific Journals section with updated styling */}
        <ScientificJournals
          selectedJournals={selectedJournals}
          setSelectedJournals={setSelectedJournals}
        />
        {/* Start Research button with updated styling */}
        <div className="flex justify-end">
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-emerald-600 transition-colors">
            <PlusIcon className="h-4 w-4 mr-2" />
            Start Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchTasks;
