import { useEffect, useState } from "react";
import axios from "axios";
import InfluencerSearch from "@/components/influencers/InfluencerSearch";
import InfluencerCard from "@/components/influencers/InfluencerCard";
import InfluencerStats from "@/components/influencers/InfluencerStats";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Influencers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE}/influencers${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ""}`)
      .then(res => setInfluencers(res.data.data))
      .catch(() => setInfluencers([]))
      .finally(() => setLoading(false));
  }, [searchQuery]);

  const handleSelectInfluencer = async (influencer) => {
    try {
      const res = await axios.get(`${API_BASE}/influencers/${influencer._id}`);
      setSelectedInfluencer(res.data.data);
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

        <InfluencerSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {loading ? (
          <div className="text-white text-center mt-8">Loading...</div>
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
