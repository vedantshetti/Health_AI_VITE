import { useState, useEffect } from "react";
import { ArrowLeftIcon, PlusIcon, TrashIcon, CheckCircleIcon, ClockIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ScientificJournals from "@/components/research/ScientificJournals";
import researchService from "@/services/researchService";

const ResearchTasks = () => {
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
  const [topic, setTopic] = useState("");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [error, setError] = useState("");

  // Fetch reports on mount
  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await researchService.getReports();
      setReports(response.data || []);
    } catch (error) {
      console.error("Failed to fetch reports:", error);
    }
  };

  const handleStartResearch = async () => {
    if (!topic.trim()) {
      setError("Please enter a health topic to research");
      return;
    }

    setLoading(true);
    setError("");
    const payload = {
      topic: topic.trim(),
      verifyJournals,
      selectedJournals: verifyJournals ? selectedJournals : [],
    };
    
    try {
      const response = await researchService.generateReport(payload);
      if (response.success) {
        setTopic("");
        setError("");
        
        // Refresh reports after a delay to get the completed report
        setTimeout(() => {
          fetchReports();
        }, 3000);
      } else {
        setError("Failed to start research. Please try again.");
      }
    } catch (error) {
      console.error("Research error:", error);
      setError(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReport = async (reportId) => {
    try {
      await researchService.deleteReport(reportId);
      fetchReports();
      if (selectedReport?._id === reportId) {
        setSelectedReport(null);
      }
    } catch (error) {
      setError("Failed to delete report");
    }
  };

  const handleViewReport = (report) => {
    setSelectedReport(report);
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

      <div className="bg-[#0B1120] rounded-lg border border-gray-800 mb-6">
        <div className="flex items-center p-6 border-b border-gray-800">
          <div className="w-4 h-4 bg-emerald-500 rounded-md mr-3" />
          <h2 className="text-white text-3xl font-medium">
            Health Topic Research
          </h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Topic Input */}
          <div className="bg-[#0F172A] p-4 rounded-lg border border-gray-800">
            <h3 className="text-lg font-medium text-white mb-2">
              Research Topic
            </h3>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter a health topic (e.g., 'keto diet', 'CBD oil', 'intermittent fasting')"
              className="w-full bg-transparent border border-gray-800 rounded-md p-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              onKeyPress={(e) => e.key === 'Enter' && handleStartResearch()}
            />
            <p className="text-gray-400 text-xs mt-2">
              💡 AI will generate a comprehensive research report including scientific consensus, common claims, risk factors, and suggested influencers
            </p>
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
          </div>

          <div className="bg-[#0F172A] p-4 rounded-lg border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Verify with Scientific Journals</h3>
                <p className="text-gray-400 text-xs">Cross-reference claims with scientific literature</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={verifyJournals}
                  onChange={(e) => setVerifyJournals(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
              </label>
            </div>
          </div>

          {verifyJournals && (
            <ScientificJournals
              selectedJournals={selectedJournals}
              setSelectedJournals={setSelectedJournals}
            />
          )}

          <div className="flex justify-end pt-4">
            <button
              className="bg-emerald-500 text-white px-6 py-3 rounded-md flex items-center hover:bg-emerald-600 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleStartResearch}
              disabled={loading || !topic.trim()}
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              {loading ? "Generating Report..." : "Start Research"}
            </button>
          </div>
        </div>
      </div>

      {/* Research Reports Section */}
      <div className="bg-[#0B1120] rounded-lg border border-gray-800">
        <div className="p-6 border-b border-gray-800">
          <h3 className="text-white text-xl font-medium">Research Reports ({reports.length})</h3>
          <p className="text-gray-400 text-sm mt-1">AI-generated comprehensive health topic analysis</p>
        </div>

        <div className="p-6">
          {reports.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No research reports yet. Create your first report above!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {reports.map((report) => (
                <div
                  key={report._id}
                  className="bg-[#0F172A] border border-gray-800 rounded-lg p-4 hover:border-emerald-500/50 transition-colors cursor-pointer"
                  onClick={() => handleViewReport(report)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-white font-medium text-lg">{report.topic}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          report.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                          report.status === 'failed' ? 'bg-red-500/20 text-red-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {report.status === 'completed' && <CheckCircleIcon className="h-3 w-3 inline mr-1" />}
                          {report.status === 'failed' && <XCircleIcon className="h-3 w-3 inline mr-1" />}
                          {report.status === 'pending' && <ClockIcon className="h-3 w-3 inline mr-1" />}
                          {report.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        Created {new Date(report.createdAt).toLocaleDateString()} at {new Date(report.createdAt).toLocaleTimeString()}
                      </p>
                      {report.status === 'completed' && report.keyTakeaways && (
                        <p className="text-gray-300 text-sm mt-2">
                          {report.keyTakeaways[0] || "Click to view full report"}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteReport(report._id);
                      }}
                      className="text-red-400 hover:text-red-300 p-2"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Report Detail Modal */}
      {selectedReport && selectedReport.status === 'completed' && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedReport(null)}>
          <div className="bg-[#0B1120] border border-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-800 sticky top-0 bg-[#0B1120] z-10">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-white text-2xl font-semibold">{selectedReport.topic}</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Generated on {new Date(selectedReport.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <XCircleIcon className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Summary */}
              {selectedReport.summary && (
                <div>
                  <h3 className="text-emerald-400 text-lg font-medium mb-2">📋 Executive Summary</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedReport.summary}</p>
                </div>
              )}

              {/* Scientific Consensus */}
              {selectedReport.scientificConsensus && (
                <div>
                  <h3 className="text-emerald-400 text-lg font-medium mb-2">🔬 Scientific Consensus</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedReport.scientificConsensus}</p>
                </div>
              )}

              {/* Common Claims */}
              {selectedReport.commonClaims && selectedReport.commonClaims.length > 0 && (
                <div>
                  <h3 className="text-emerald-400 text-lg font-medium mb-3">✅ Common Claims Analysis</h3>
                  <div className="space-y-3">
                    {selectedReport.commonClaims.map((claim, idx) => (
                      <div key={idx} className="bg-[#0F172A] border border-gray-800 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <span className={`text-lg ${claim.isTrue ? 'text-emerald-400' : 'text-red-400'}`}>
                            {claim.isTrue ? '✓' : '✗'}
                          </span>
                          <div className="flex-1">
                            <p className="text-white font-medium">{claim.claim}</p>
                            <p className="text-gray-400 text-sm mt-1">{claim.explanation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Risk Factors */}
              {selectedReport.riskFactors && selectedReport.riskFactors.length > 0 && (
                <div>
                  <h3 className="text-emerald-400 text-lg font-medium mb-2">⚠️ Risk Factors</h3>
                  <ul className="space-y-2">
                    {selectedReport.riskFactors.map((risk, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Considerations */}
              {selectedReport.considerations && selectedReport.considerations.length > 0 && (
                <div>
                  <h3 className="text-emerald-400 text-lg font-medium mb-2">💡 Important Considerations</h3>
                  <ul className="space-y-2">
                    {selectedReport.considerations.map((consideration, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{consideration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Relevant Journals */}
              {selectedReport.relevantJournals && selectedReport.relevantJournals.length > 0 && (
                <div>
                  <h3 className="text-emerald-400 text-lg font-medium mb-3">📚 Relevant Scientific Journals</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedReport.relevantJournals.map((journal, idx) => (
                      <div key={idx} className="bg-[#0F172A] border border-gray-800 rounded-lg p-3">
                        <p className="text-white font-medium text-sm">{journal.name}</p>
                        <p className="text-gray-400 text-xs mt-1">{journal.relevance}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested Influencers */}
              {selectedReport.suggestedInfluencers && selectedReport.suggestedInfluencers.length > 0 && (
                <div>
                  <h3 className="text-emerald-400 text-lg font-medium mb-3">👥 Suggested Experts to Track</h3>
                  <div className="space-y-3">
                    {selectedReport.suggestedInfluencers.map((influencer, idx) => (
                      <div key={idx} className="bg-[#0F172A] border border-gray-800 rounded-lg p-4">
                        <p className="text-white font-medium">{influencer.name}</p>
                        <p className="text-emerald-400 text-sm mt-1">{influencer.expertise}</p>
                        <p className="text-gray-400 text-sm mt-1">{influencer.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Takeaways */}
              {selectedReport.keyTakeaways && selectedReport.keyTakeaways.length > 0 && (
                <div>
                  <h3 className="text-emerald-400 text-lg font-medium mb-2">🎯 Key Takeaways</h3>
                  <ul className="space-y-2">
                    {selectedReport.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">→</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchTasks;
