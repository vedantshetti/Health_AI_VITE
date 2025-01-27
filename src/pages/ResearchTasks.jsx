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

        {/* Time Range and Products to Find Per Influencer section */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Left column - Time Range */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-medium text-gray-200 mb-2">
              Time Range
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button
                onClick={() => setTimeRange("last-week")}
                className={`p-2 rounded-md text-left text-sm ${
                  timeRange === "last-week"
                    ? "bg-emerald-900/20 border border-emerald-500 text-white"
                    : "bg-[#0F172A]/50 border border-gray-800 text-gray-400"
                }`}
              >
                Last Week
              </button>
              <button
                onClick={() => setTimeRange("last-month")}
                className={`p-2 rounded-md text-left text-sm ${
                  timeRange === "last-month"
                    ? "bg-emerald-900/20 border border-emerald-500 text-white"
                    : "bg-[#0F172A]/50 border border-gray-800 text-gray-400"
                }`}
              >
                Last Month
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTimeRange("last-year")}
                className={`p-2 rounded-md text-left text-sm ${
                  timeRange === "last-year"
                    ? "bg-emerald-900/20 border border-emerald-500 text-white"
                    : "bg-[#0F172A]/50 border border-gray-800 text-gray-400"
                }`}
              >
                Last Year
              </button>
              <button
                onClick={() => setTimeRange("all-time")}
                className={`p-2 rounded-md text-left text-sm ${
                  timeRange === "all-time"
                    ? "bg-emerald-900/20 border border-emerald-500 text-white"
                    : "bg-[#0F172A]/50 border border-gray-800 text-gray-400"
                }`}
              >
                All Time
              </button>
            </div>
          </div>

          {/* Right column - Products to Find Per Influencer */}
          {/* Right column - Products to Find Per Influencer and Toggle Switches */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-200 mb-2">
                Products to Find Per Influencer
              </h3>
              <div className="bg-[#0F172A] rounded-md p-2">
                <input
                  type="number"
                  defaultValue={10}
                  className="w-full bg-transparent text-white"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Set to 0 to skip product research
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    Include Revenue Analysis
                  </h3>
                  <p className="text-xs text-gray-400">
                    Analyze monetization methods and estimate earnings
                  </p>
                </div>
                <button
                  onClick={() => setIncludeRevenue(!includeRevenue)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    includeRevenue ? "bg-emerald-500" : "bg-[#1E293B]"
                  }`}
                >
                  <span
                    className={`block w-4 h-4 bg-white rounded-full transition-transform ${
                      includeRevenue ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    Verify with Scientific Journals
                  </h3>
                  <p className="text-xs text-gray-400">
                    Cross-reference claims with scientific literature
                  </p>
                </div>
                <button
                  onClick={() => setVerifyJournals(!verifyJournals)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    verifyJournals ? "bg-emerald-500" : "bg-[#1E293B]"
                  }`}
                >
                  <span
                    className={`block w-4 h-4 bg-white rounded-full transition-transform ${
                      verifyJournals ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <ScientificJournals
          selectedJournals={selectedJournals}
          setSelectedJournals={setSelectedJournals}
        />

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
