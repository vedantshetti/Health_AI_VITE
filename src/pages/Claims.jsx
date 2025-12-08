import { useState, useEffect } from "react";
import ClaimsFilter from "@/components/claims/ClaimsFilter";
import ClaimsTable from "@/components/claims/ClaimsTable";
import claimService from "@/services/claimService";
import axios from "axios";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

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
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

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
          setError(
            `Twitter Rate Limit Hit! Processed ${data.processedInfluencers} of ${data.totalInfluencers} influencers. ` +
            `Fetched ${data.totalPostsFetched} posts, Created ${data.totalClaimsCreated} claims. ` +
            `Please wait 15 minutes before fetching more.`
          );
          setTimeout(() => setError(null), 15000);
        } else {
          setSuccessMessage(
            `✅ ${data.message || 'Success!'} Processed: ${data.processedInfluencers}/${data.totalInfluencers} influencers, ` +
            `Posts: ${data.totalPostsFetched}, Claims Created: ${data.totalClaimsCreated}, Updated: ${data.totalClaimsUpdated}`
          );
          setTimeout(() => setSuccessMessage(null), 10000);
        }
        
        // Refresh claims list
        const claimsRes = await axios.get(`${API_BASE}/claims`);
        setClaims(claimsRes.data.data || []);
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      
      if (err.response?.status === 429) {
        setError('Twitter API rate limit exceeded. Please wait 15 minutes and try again.');
      } else {
        setError('Failed to fetch influencer posts. Please try again.');
      }
      
      setTimeout(() => setError(null), 10000);
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
        setSuccessMessage(
          `🤖 AI Verification Complete! Verified ${data.verifiedClaims || 0} claims. ${data.message || ''}`
        );
        setTimeout(() => setSuccessMessage(null), 10000);
        
        // Refresh claims list
        const claimsRes = await axios.get(`${API_BASE}/claims`);
        setClaims(claimsRes.data.data || []);
      }
    } catch (err) {
      console.error('Error verifying claims:', err);
      setError('Failed to verify claims with AI. Please check your OpenAI API key and try again.');
      setTimeout(() => setError(null), 10000);
    } finally {
      setVerifying(false);
    }
  };

  return (
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

        {successMessage && (
          <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg mb-4">
            {successMessage}
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

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
                setSuccessMessage(`✅ Claim verified successfully!`);
                setTimeout(() => setSuccessMessage(null), 5000);
                // Refresh claims
                const claimsRes = await axios.get(`${API_BASE}/claims`);
                setClaims(claimsRes.data.data || []);
              }
            } catch (err) {
              setError(`Failed to verify claim: ${err.message}`);
              setTimeout(() => setError(null), 5000);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Claims;
