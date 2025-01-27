// src/components/research/TimeRange.jsx
const TimeRange = ({ timeRange, setTimeRange }) => {
    return (
      <div className="flex flex-col space-y-2">
        <h3 className="text-sm font-medium text-gray-200 mb-2">Time Range</h3>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <button
            onClick={() => setTimeRange("last-week")}
            className={`p-2 rounded-md text-left text-sm ${
              timeRange === "last-week"
                ? "bg-emerald-900/20 border border-emerald-500 text-white"
                : "bg-[#0F172A]/50 border border-gray-800 text-white"
            }`}
          >
            Last Week
          </button>
          <button
            onClick={() => setTimeRange("last-month")}
            className={`p-2 rounded-md text-left text-sm ${
              timeRange === "last-month"
                ? "bg-emerald-900/20 border border-emerald-500 text-white"
                : "bg-[#0F172A]/50 border border-gray-800 text-white"
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
                : "bg-[#0F172A]/50 border border-gray-800 text-white"
            }`}
          >
            Last Year
          </button>
          <button
            onClick={() => setTimeRange("all-time")}
            className={`p-2 rounded-md text-left text-sm ${
              timeRange === "all-time"
                ? "bg-emerald-900/20 border border-emerald-500 text-white"
                : "bg-[#0F172A]/50 border border-gray-800 text-white"
            }`}
          >
            All Time
          </button>
        </div>
      </div>
    );
  };
  
  export default TimeRange;
  