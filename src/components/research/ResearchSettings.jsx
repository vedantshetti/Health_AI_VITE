// src/components/research/ResearchSettings.jsx
const ResearchSettings = ({
  includeRevenue,
  setIncludeRevenue,
  verifyJournals,
  setVerifyJournals,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-ls font-medium text-white mb-2">
          Products to Find Per Influencer
        </h3>
        <div className="bg-[#0F172A] rounded-md p-2 border border-gray-800 focus-within:border-emerald-500 focus-within:bg-emerald-900/20">
          <input
            type="number"
            defaultValue={0}
            min="0"
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              if (e.target.value < 0) {
                e.target.value = 0;
              }
            }}
            className="w-full bg-transparent text-white outline-none placeholder-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Set to 0 to skip product research
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-ls text-white">Include Revenue Analysis</h3>
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
            <h3 className="text-ls text-white">
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
  );
};

export default ResearchSettings;
