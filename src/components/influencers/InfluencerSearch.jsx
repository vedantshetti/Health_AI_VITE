// src/components/influencers/InfluencerSearch.jsx
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const InfluencerSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search influencers by name, category, or expertise..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-[#0F172A] border border-gray-800 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-500"
      />
      <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
    </div>
  );
};

export default InfluencerSearch;