// src/components/claims/ClaimsFilter.jsx
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";


const ClaimsFilter = ({ selectedStatus, setSelectedStatus, isHighest, setIsHighest, claims }) => {
  const statuses = ['All Claims', 'Verified', 'Questionable', 'Debunked'];

  const handleExport = () => {
    const csvContent = 
      "data:text/csv;charset=utf-8," + 
      claims.map(claim => 
        [
          claim.influencer.name,
          claim.content,
          claim.verificationStatus,
          claim.confidenceScore,
          claim.sourceLinks.join(';'),
          claim.datePublished
        ].join(",")
      ).join("\n");
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `health-claims-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
