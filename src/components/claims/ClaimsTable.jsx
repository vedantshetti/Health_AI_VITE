import { format } from "date-fns";
import { useMemo } from "react";

const ClaimsTable = ({
  claims,
  selectedStatus,
  selectedCategory,
  isHighest,
  dateRange,
  loading,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "bg-emerald-500/10 text-emerald-500";
      case "questionable":
        return "bg-yellow-500/10 text-yellow-500";
      case "debunked":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getConfidenceColor = (score) => {
    if (score >= 90) return "text-emerald-500";
    if (score >= 80) return "text-yellow-500";
    return "text-red-500";
  };

  // Filter and sort claims
  const filteredAndSortedClaims = useMemo(() => {
    let filtered = claims;

    // Status filter
    if (selectedStatus !== "all") {
      filtered = filtered.filter(
        (claim) => claim.verificationStatus === selectedStatus
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (claim) =>
          claim.category &&
          claim.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Date range filter
    if (dateRange.start || dateRange.end) {
      filtered = filtered.filter((claim) => {
        const claimDate = new Date(claim.datePublished);
        const start = dateRange.start ? new Date(dateRange.start) : null;
        const end = dateRange.end ? new Date(dateRange.end) : null;
        if (start && end) return claimDate >= start && claimDate <= end;
        if (start) return claimDate >= start;
        if (end) return claimDate <= end;
        return true;
      });
    }

    // Sorting
    return [...filtered].sort((a, b) => {
      return isHighest
        ? b.confidenceScore - a.confidenceScore
        : a.confidenceScore - b.confidenceScore;
    });
  }, [claims, selectedStatus, selectedCategory, isHighest, dateRange]);

  if (loading) {
    return <div className="text-white text-center py-8">Loading claims...</div>;
  }

  return (
    <div className="bg-[#0B1120] rounded-lg border border-gray-800">
      <div className="overflow-hidden">
        <div className="overflow-x-auto">
          <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-track-[#0B1120] scrollbar-thumb-gray-700 hover:scrollbar-thumb-gray-600">
            <table className="w-full">
              <thead className="sticky top-0 bg-[#0B1120] z-10">
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">INFLUENCER</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">CATEGORY</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">CLAIM</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">STATUS</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">CONFIDENCE</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">REFERENCES</th>
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">DATE</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedClaims.map((claim) => (
                  <tr
                    key={claim._id || claim.id}
                    className="border-b border-gray-800 hover:bg-[#1E293B]/50"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                          <img
                            src={claim.influencer?.image}
                            alt={claim.influencer?.name}
                            className="w-full h-full object-cover"
                            onError={e => { e.target.onerror = null; e.target.src = '/default-profile.png'; }}
                          />
                        </div>
                        <span className="text-white text-sm">
                          {claim.influencer?.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-400 text-sm">{claim.category}</td>
                    <td className="p-4 text-gray-400 text-sm max-w-md">{claim.content}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs capitalize ${getStatusColor(claim.verificationStatus)}`}>
                        {claim.verificationStatus}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`text-sm ${getConfidenceColor(claim.confidenceScore)}`}>
                        {claim.confidenceScore}%
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">
                          {claim.sourceLinks?.length || 0} Sources
                        </span>
                        <button className="text-emerald-400 text-sm hover:text-emerald-300">
                          View
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-gray-400 text-sm">
                      {format(new Date(claim.datePublished), "MMM dd, yyyy")}
                    </td>
                  </tr>
                ))}
                {filteredAndSortedClaims.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-gray-400 text-center py-8">
                      No claims found for the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimsTable;
