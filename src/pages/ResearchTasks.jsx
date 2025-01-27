// src/pages/ResearchTasks.jsx
import { useState } from 'react';
import { ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const ResearchTasks = () => {
  const [timeRange, setTimeRange] = useState('last-month');
  const [includeRevenue, setIncludeRevenue] = useState(false);
  const [verifyJournals, setVerifyJournals] = useState(true);
  const [selectedJournals, setSelectedJournals] = useState([
    'PubMed Central',
    'Nature',
    'Science',
    'Cell',
    'The Lancet',
    'JAMA Network',
    'New England Journal of Medicine'
  ]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <Link to="/dashboard" className="text-emerald-400 flex items-center">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
        <h1 className="text-2xl font-semibold text-white">Research Tasks</h1>
      </div>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h2 className="flex items-center text-lg font-medium text-white mb-6">
          <span className="inline-block w-5 h-5 mr-2 bg-emerald-500 rounded-md" />
          Research Configuration
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-emerald-900/20 p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Specific Influencer</h3>
            <input
              type="text"
              placeholder="Research a known health influencer by name"
              className="w-full bg-transparent border border-emerald-900/50 rounded-md p-2"
            />
          </div>
          <div className="bg-secondary-light p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Discover New</h3>
            <input
              type="text"
              placeholder="Find and analyze new health influencers"
              className="w-full bg-transparent border border-gray-700 rounded-md p-2"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Time Range</h3>
          <div className="grid grid-cols-4 gap-4">
            {['Last Week', 'Last Month', 'Last Year', 'All Time'].map((range) => (
              <button
                key={range}
                className={`p-2 rounded-md text-center ${
                  timeRange === range.toLowerCase().replace(' ', '-')
                    ? 'bg-emerald-900/20 border border-emerald-500'
                    : 'bg-secondary-light border border-gray-700'
                }`}
                onClick={() => setTimeRange(range.toLowerCase().replace(' ', '-'))}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Include Revenue Analysis</h3>
              <p className="text-sm text-gray-400">Analyze monetization methods and estimate earnings</p>
            </div>
            <button
              onClick={() => setIncludeRevenue(!includeRevenue)}
              className={`w-12 h-6 rounded-full transition-colors ${
                includeRevenue ? 'bg-emerald-500' : 'bg-gray-700'
              }`}
            >
              <span
                className={`block w-4 h-4 bg-white rounded-full transition-transform ${
                  includeRevenue ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Verify with Scientific Journals</h3>
              <p className="text-sm text-gray-400">Cross-reference claims with scientific literature</p>
            </div>
            <button
              onClick={() => setVerifyJournals(!verifyJournals)}
              className={`w-12 h-6 rounded-full transition-colors ${
                verifyJournals ? 'bg-emerald-500' : 'bg-gray-700'
              }`}
            >
              <span
                className={`block w-4 h-4 bg-white rounded-full transition-transform ${
                  verifyJournals ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium">Scientific Journals</h3>
            <div className="space-x-4">
              <button className="text-emerald-400 text-sm">Select All</button>
              <button className="text-emerald-400 text-sm">Deselect All</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {selectedJournals.map((journal) => (
              <div
                key={journal}
                className="flex items-center justify-between bg-emerald-900/20 p-3 rounded-md"
              >
                <span>{journal}</span>
                <span className="w-4 h-4 rounded-full bg-emerald-500" />
              </div>
            ))}
          </div>
          <button className="flex items-center text-emerald-400 mt-4">
            <PlusIcon className="w-4 h-4 mr-2" />
            Add New Journal
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Notes for Research Assistant</h3>
          <textarea
            placeholder="Add any specific instructions or focus areas..."
            className="w-full h-24 bg-secondary-light border border-gray-700 rounded-md p-2"
          />
        </div>

        <div className="flex justify-end">
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-md flex items-center">
            <PlusIcon className="w-4 h-4 mr-2" />
            Start Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchTasks;
