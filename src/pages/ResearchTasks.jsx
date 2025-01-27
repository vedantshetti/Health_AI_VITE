// src/pages/ResearchTasks.jsx
import { useState } from "react";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ScientificJournals from "@/components/research/ScientificJournals";
import TimeRange from "@/components/research/TimeRange";
import ResearchSettings from "@/components/research/ResearchSettings";

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
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Link
          to="/dashboard"
          className="text-emerald-400 flex items-center text-sm hover:text-emerald-300"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
        <span className="text-white text-lg">Research Tasks</span>
      </div>

      <div className="bg-[#0B1120] rounded-lg border border-gray-800">
        <div className="flex items-center p-6 border-b border-gray-800">
          <div className="w-4 h-4 bg-emerald-500 rounded-md mr-3" />
          <h2 className="text-white text-3xl font-medium">
            Research Configuration
          </h2>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {/* <div className="grid grid-cols-2 gap-4"> */}

            <div className="bg-[#0F172A] p-4 rounded-lg border border-gray-800">
              <h3 className="text-ls font-medium text-white mb-2">
                Specific Influencer
              </h3>
              <input
                type="text"
                placeholder="Research a known health influencer by name"
                className="w-full bg-transparent border border-gray-800 rounded-md p-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring focus:ring-emerald-900/20 focus:bg-emerald-900/20 focus:border-emerald-500"
              />
            </div>
            <div className="bg-[#0F172A] p-4 rounded-lg border border-gray-800">
              <h3 className="text-ls font-medium text-white mb-2">
                Discover New
              </h3>
              <input
                type="text"
                placeholder="Find and analyze new health influencers"
                className="w-full bg-transparent border border-gray-800 rounded-md p-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring focus:ring-emerald-900/20 focus:bg-emerald-900/20 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <TimeRange timeRange={timeRange} setTimeRange={setTimeRange} />
            <ResearchSettings
              includeRevenue={includeRevenue}
              setIncludeRevenue={setIncludeRevenue}
              verifyJournals={verifyJournals}
              setVerifyJournals={setVerifyJournals}
            />
          </div>

          <ScientificJournals
            selectedJournals={selectedJournals}
            setSelectedJournals={setSelectedJournals}
          />

          <div className="flex justify-end pt-4">
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-emerald-600 transition-colors text-sm">
              <PlusIcon className="h-4 w-4 mr-2" />
              Start Research
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchTasks;
