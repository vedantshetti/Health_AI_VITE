// src/components/claims/ClaimsFilter.jsx
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

const ClaimsFilter = ({ selectedStatus, setSelectedStatus, isHighest, setIsHighest }) => {
  const statuses = ['All Claims', 'Verified', 'Questionable', 'Debunked'];

  const handleExport = () => {
    console.log('Exporting claims...');
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status === 'All Claims' ? 'all' : status.toLowerCase());
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <div className="flex gap-2">
        {statuses.map(status => (
          <button
            key={status}
            onClick={() => handleStatusChange(status)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              (selectedStatus === 'all' && status === 'All Claims') ||
              selectedStatus === status.toLowerCase()
                ? 'bg-emerald-500 text-white'
                : 'bg-[#0B1120] text-gray-400 hover:bg-[#1E293B]'
            }`}
          >
            {status}
          </button>
        ))}
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
          {isHighest ? 'Highest First' : 'Lowest First'}
        </button>
        <button 
          onClick={handleExport}
          className="bg-[#0B1120] text-gray-400 px-4 py-2 rounded-full text-sm hover:bg-[#1E293B] transition-colors"
        >
          Export Claims
        </button>
      </div>
    </div>
  );
};

export default ClaimsFilter;
