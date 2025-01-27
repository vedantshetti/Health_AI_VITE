// src/components/leaderboard/CategoryFilter.jsx
import { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const [isHighest, setIsHighest] = useState(true);
  const categories = ['All', 'Nutrition', 'Fitness', 'Medicine', 'Mental Health'];

  const handleSortToggle = () => {
    setIsHighest(!isHighest);
  };

  return (
    <div className="flex items-center gap-2 mb-6">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category.toLowerCase())}
          className={`px-4 py-2 rounded-full text-sm ${
            selectedCategory === category.toLowerCase()
              ? 'bg-emerald-500 text-white'
              : 'bg-[#0B1120] text-gray-400 hover:bg-[#1E293B]'
          }`}
        >
          {category}
        </button>
      ))}
      <div className="ml-auto">
        <button 
          onClick={handleSortToggle}
          className="bg-[#0B1120] text-gray-400 px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-[#1E293B]"
        >
          {isHighest ? (
            <ArrowUpIcon className="h-4 w-4" />
          ) : (
            <ArrowDownIcon className="h-4 w-4" />
          )}
          {isHighest ? 'Highest First' : 'Lowest First'}
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
