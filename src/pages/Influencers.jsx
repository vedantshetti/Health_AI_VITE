import { useEffect, useState } from "react";
import influencerService from "../services/influencerService";
import InfluencerSearch from "@/components/influencers/InfluencerSearch";
import InfluencerCard from "@/components/influencers/InfluencerCard";
import InfluencerStats from "@/components/influencers/InfluencerStats";
import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Influencers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const fetchInfluencers = async () => {
    try {
      setLoading(true);
      setError(null);
      const params = searchQuery ? { search: searchQuery } : {};
      const response = await influencerService.getAll(params);
      if (response.success) {
        setInfluencers(response.data);
      }
    } catch (error) {
      console.error('Error fetching influencers:', error);
      setError('Failed to fetch influencers. Please try again.');
      setInfluencers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfluencers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleUpdateFromTwitter = async () => {
    try {
      setUpdating(true);
      setError(null);
      setSuccessMessage(null);
      const response = await influencerService.updateAllFromTwitter();
      if (response.success) {
        await fetchInfluencers();
        setSuccessMessage('Successfully updated all influencer profiles from Twitter!');
        setTimeout(() => setSuccessMessage(null), 5000);
      }
    } catch (error) {
      console.error('Error updating from Twitter:', error);
      setError('Failed to update profiles from Twitter. Please try again.');
    } finally {
      setUpdating(false);
    }
  };

  const handleFetchFromTwitter = async () => {
    try {
      setFetching(true);
      setError(null);
      setSuccessMessage(null);
      const keywords = ['health', 'nutrition', 'fitness', 'wellness', 'diet', 'medical'];
      const response = await influencerService.fetchAndStoreFromTwitter(keywords, 'Health');
      
      if (response.success) {
        await fetchInfluencers();
        setSuccessMessage(
          `Successfully fetched influencers! Created: ${response.created}, Updated: ${response.updated}`
        );
        setTimeout(() => setSuccessMessage(null), 5000);
      }
    } catch (error) {
      console.error('Error fetching from Twitter:', error);
      setError('Failed to fetch influencers from Twitter. Please try again.');
    } finally {
      setFetching(false);
    }
  };

  const handleSelectInfluencer = async (influencer) => {
    try {
      const response = await influencerService.getById(influencer._id);
      if (response.success) {
        setSelectedInfluencer(response.data);
      }
    } catch {
      setSelectedInfluencer(influencer);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-white mb-2">
            Influencer Profiles
          </h1>
          <p className="text-gray-400 text-sm">
            Comprehensive analysis of health influencers with verified metrics,
            trust scores, and performance analytics.
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <InfluencerSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="flex gap-2 ml-4">
            <button
              onClick={handleFetchFromTwitter}
              disabled={fetching}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
              title="Search and import new health influencers from Twitter"
            >
              <MagnifyingGlassIcon className={`h-5 w-5 ${fetching ? 'animate-pulse' : ''}`} />
              {fetching ? 'Fetching...' : 'Find New Influencers'}
            </button>
            <button
              onClick={handleUpdateFromTwitter}
              disabled={updating}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
              title="Update existing influencer profiles from Twitter"
            >
              <ArrowPathIcon className={`h-5 w-5 ${updating ? 'animate-spin' : ''}`} />
              {updating ? 'Updating...' : 'Update Profiles'}
            </button>
          </div>
        </div>

        {successMessage && (
          <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg mt-4">
            {successMessage}
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mt-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-white text-center mt-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
            <p className="mt-4">Loading influencers...</p>
          </div>
        ) : influencers.length === 0 ? (
          <div className="text-center mt-8 bg-[#1E293B] rounded-lg p-8">
            <p className="text-gray-400 text-lg">No influencers found.</p>
            <p className="text-gray-500 text-sm mt-2">
              Try updating from Twitter to fetch the latest data.
            </p>
          </div>
        ) : (
          <div className="max-h-[720px] overflow-y-auto scrollbar-thin scrollbar-track-[#0B1120] scrollbar-thumb-gray-700/50 hover:scrollbar-thumb-gray-600/50 pr-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {influencers.map((influencer) => (
                <div
                  key={influencer._id}
                  onClick={() => handleSelectInfluencer(influencer)}
                  className="cursor-pointer"
                >
                  <InfluencerCard influencer={influencer} />
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedInfluencer && (
          <div className="mt-8">
            <InfluencerStats
              influencer={selectedInfluencer}
              onClose={() => setSelectedInfluencer(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Influencers;
