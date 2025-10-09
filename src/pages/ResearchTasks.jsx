import { useState, useEffect } from "react";
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
  const [specificInfluencer, setSpecificInfluencer] = useState("");
  const [discoverNew, setDiscoverNew] = useState("");
  const [productsPerInfluencer, setProductsPerInfluencer] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch tasks on mount
  useEffect(() => {
    fetch("/api/research/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data.data || []));
  }, []);

  const handleStartResearch = async () => {
    setLoading(true);
    const payload = {
      timeRange,
      includeRevenue,
      verifyJournals,
      selectedJournals,
      specificInfluencer,
      discoverNew,
      productsPerInfluencer,
    };
    try {
      const res = await fetch("/api/research/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setTasks((prev) => [...prev, data.data]);
      }
    } finally {
      setLoading(false);
    }
  };

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
            <div className="bg-[#0F172A] p-4 rounded-lg border border-gray-800">
              <h3 className="text-ls font-medium text-white mb-2">
                Specific Influencer
              </h3>
              <input
                type="text"
                value={specificInfluencer}
                onChange={(e) => setSpecificInfluencer(e.target.value)}
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
                value={discoverNew}
                onChange={(e) => setDiscoverNew(e.target.value)}
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
              productsPerInfluencer={productsPerInfluencer}
              setProductsPerInfluencer={setProductsPerInfluencer}
            />
          </div>

          <ScientificJournals
            selectedJournals={selectedJournals}
            setSelectedJournals={setSelectedJournals}
          />

          <div className="flex justify-end pt-4">
            <button
              className="bg-emerald-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-emerald-600 transition-colors text-sm"
              onClick={handleStartResearch}
              disabled={loading}
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              {loading ? "Starting..." : "Start Research"}
            </button>
          </div>

          {/* Display created tasks */}
          <div className="mt-8">
            <h3 className="text-white text-lg mb-2">Existing Research Tasks</h3>
            <ul>
              {tasks.map((task) => (
                <li key={task._id} className="text-gray-300 mb-1">
                  {task.specificInfluencer || task.discoverNew || "Untitled Task"}
                  {" - "}
                  <span className="text-xs text-gray-500">{task.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchTasks;
