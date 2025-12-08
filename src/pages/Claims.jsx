import { useState, useEffect } from "react";
import ClaimsFilter from "@/components/claims/ClaimsFilter";
import ClaimsTable from "@/components/claims/ClaimsTable";
import claimService from "@/services/claimService";
import axios from "axios";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { ToastContainer } from "@/components/Toast";
import { useToast } from "@/hooks/useToast";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Claims = () => {
  const [claims, setClaims] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isHighest, setIsHighest] = useState(true);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const toast = useToast();

  // Fetch claims based on filters
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE}/claims`, {
        params: {
          verificationStatus: selectedStatus !== "all" ? selectedStatus : undefined,
          category: selectedCategory !== "all" ? selectedCategory : undefined,
          startDate: dateRange.start || undefined,
          endDate: dateRange.end || undefined,
        },
      })
      .then((res) => setClaims(res.data.data || []))
      .catch(() => setClaims([]))
      .finally(() => setLoading(false));
  }, [selectedStatus, selectedCategory, dateRange]);

  // Fetch categories from analytics/categories endpoint
  useEffect(() => {
    axios
      .get(`${API_BASE}/analytics/categories`)
      .then((res) => {
        const cats = (res.data.data || []).filter(
          (c) => typeof c === "string" && c.trim() !== ""
        );
        setCategories(["All", ...cats]);
      })
      .catch(() => setCategories(["All"]));
  }, []);

  const handleFetchAllPosts = async () => {
    try {
      setFetching(true);
      setError(null);
      setSuccessMessage(null);
      
      // Reduce to 10 posts to avoid rate limits
      const response = await claimService.fetchAllInfluencerPosts(10);
      
      if (response.success) {
        const data = response.data;
        
        if (data.rateLimitHit) {
          toast.warning(
            `⚠️ Twitter Rate Limit Reached!\n\n` +
            `📊 Progress: Processed ${data.processedInfluencers}/${data.totalInfluencers} influencers\n` +
            `📥 Fetched ${data.totalPostsFetched} posts | ✨ Created ${data.totalClaimsCreated} new claims\n\n` +
            `⏳ Please wait 15 minutes before fetching more posts.`,
            15000
          );
        } else {
          toast.success(
            `🎉 Posts Fetched Successfully!\n\n` +
            `✅ Processed: ${data.processedInfluencers}/${data.totalInfluencers} influencers\n` +
            `📥 Posts Fetched: ${data.totalPostsFetched}\n` +
            `✨ New Claims: ${data.totalClaimsCreated} | 🔄 Updated: ${data.totalClaimsUpdated}`,
            10000
          );
        }
        
        // Refresh claims list
        const claimsRes = await axios.get(`${API_BASE}/claims`);
        setClaims(claimsRes.data.data || []);
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      
      if (err.response?.status === 429) {
        toast.error(
          `⚠️ Twitter API Rate Limit Exceeded\n\n` +
          `The Twitter API allows only 50 requests per 15 minutes on the free tier.\n` +
          `⏳ Please wait 15 minutes and try again.`,
          10000
        );
      } else {
        toast.error(
          `❌ Failed to Fetch Posts\n\n` +
          `${err.response?.data?.message || err.message || 'An unexpected error occurred.'}\n\n` +
          `💡 Please check your internet connection and try again.`,
          10000
        );
      }
    } finally {
      setFetching(false);
    }
  };

  const handleVerifyPendingClaims = async () => {
    try {
      setVerifying(true);
      setError(null);
      setSuccessMessage(null);
      
      const response = await claimService.verifyAllPending(10); // Verify up to 10 pending claims
      
      if (response.success) {
        const data = response.data;
        toast.success(
          `🤖 AI Verification Complete!\n\n` +
          `✅ Successfully verified ${data.verifiedClaims || 0} out of ${data.totalClaims || 10} claims\n` +
          `🎯 Claims analyzed with OpenAI GPT-4 for accuracy\n\n` +
          `${data.message || 'Trust scores and confidence levels have been updated.'}`,
          10000
        );
        
        // Refresh claims list
        const claimsRes = await axios.get(`${API_BASE}/claims`);
        setClaims(claimsRes.data.data || []);
      }
    } catch (err) {
      console.error('Error verifying claims:', err);
      toast.error(
        `❌ AI Verification Failed\n\n` +
        `${err.response?.data?.message || err.message || 'Could not connect to OpenAI API'}\n\n` +
        `💡 Possible solutions:\n` +
        `• Check your OpenAI API key in .env file\n` +
        `• Ensure you have API credits available\n` +
        `• Verify your internet connection`,
        10000
      );
    } finally {
      setVerifying(false);
    }
  };

  return (
    <>
      <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />
      <div className="min-h-screen bg-[#0B1120]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-semibold text-white mb-2">
                Health Claims Verification
              </h1>
              <p className="text-gray-400 text-sm">
                Comprehensive database of verified health claims from influencers,
                cross-referenced with scientific research and expert analysis.
              </p>
            </div>
            <div className="flex gap-3">
            <button
              onClick={handleVerifyPendingClaims}
              disabled={verifying}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
              title="Verify up to 10 pending claims using OpenAI GPT-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${verifying ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {verifying ? 'Verifying...' : 'Verify Pending'}
            </button>
            <button
              onClick={handleFetchAllPosts}
              disabled={fetching}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
              title="Fetch latest 10 posts from all influencers on Twitter (Twitter API has rate limits - 50 requests per 15 min)"
            >
              <ArrowDownTrayIcon className={`h-5 w-5 ${fetching ? 'animate-bounce' : ''}`} />
              {fetching ? 'Fetching Posts...' : 'Fetch All Posts'}
            </button>
          </div>
        </div>

        <ClaimsFilter
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isHighest={isHighest}
          setIsHighest={setIsHighest}
          dateRange={dateRange}
          setDateRange={setDateRange}
          claims={claims}
          categories={categories}
        />
        <ClaimsTable
          claims={claims}
          selectedStatus={selectedStatus}
          selectedCategory={selectedCategory}
          isHighest={isHighest}
          dateRange={dateRange}
          loading={loading}
          onVerifyClaim={async (claimId) => {
            try {
              const response = await claimService.verifyWithAI(claimId);
              if (response.success) {
                const claim = response.data;
                toast.success(
                  `✅ Claim Verified Successfully!\n\n` +
                  `🎯 Status: ${claim.verificationStatus.toUpperCase()}\n` +
                  `📊 Trust Score: ${claim.trustScore}% | Confidence: ${claim.confidenceScore}%\n\n` +
                  `🤖 Analyzed by OpenAI GPT-4`,
                  6000
                );
                // Refresh claims
                const claimsRes = await axios.get(`${API_BASE}/claims`);
                setClaims(claimsRes.data.data || []);
              }
            } catch (err) {
              toast.error(
                `❌ Verification Failed\n\n` +
                `${err.response?.data?.message || err.message || 'Could not verify claim'}\n\n` +
                `Please try again or contact support if the issue persists.`,
                6000
              );
            }
          }}
        />
        </div>
      </div>
    </>
  );
};

export default Claims;
