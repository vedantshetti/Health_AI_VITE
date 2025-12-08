import { format } from "date-fns";
import { useMemo, useState } from "react";
import PropTypes from "prop-types";

const ClaimsTable = ({
  claims,
  selectedStatus,
  selectedCategory,
  isHighest,
  dateRange,
  loading,
  onVerifyClaim,
}) => {
  const [verifyingId, setVerifyingId] = useState(null);
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
                  <th className="text-left p-4 text-gray-400 text-sm font-medium">ACTION</th>
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
                    <td className="p-4">
                      {claim.verificationStatus === 'pending' && onVerifyClaim && (
                        <button
                          onClick={async () => {
                            setVerifyingId(claim._id);
                            await onVerifyClaim(claim._id);
                            setVerifyingId(null);
                          }}
                          disabled={verifyingId === claim._id}
                          className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-3 py-1 rounded text-xs transition-colors"
                          title="Verify this claim using AI"
                        >
                          {verifyingId === claim._id ? (
                            <>
                              <svg className="animate-spin h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Verifying
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Verify
                            </>
                          )}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredAndSortedClaims.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-gray-400 text-center py-8">
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
