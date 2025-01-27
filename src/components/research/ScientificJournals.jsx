// src/components/research/ScientificJournals.jsx
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

const ScientificJournals = ({ selectedJournals, setSelectedJournals }) => {
  const [isAddingJournal, setIsAddingJournal] = useState(false);
  const [newJournal, setNewJournal] = useState('');

  const handleAddJournal = () => {
    if (newJournal.trim()) {
      setSelectedJournals([...selectedJournals, newJournal.trim()]);
      setNewJournal('');
      setIsAddingJournal(false);
    }
  };

  const handleSelectAll = () => {
    // Implement select all logic
  };

  const handleDeselectAll = () => {
    // Implement deselect all logic
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-200">Scientific Journals</h3>
        <div className="space-x-4">
          <button 
            onClick={handleSelectAll}
            className="text-emerald-400 text-sm hover:text-emerald-300"
          >
            Select All
          </button>
          <button 
            onClick={handleDeselectAll}
            className="text-emerald-400 text-sm hover:text-emerald-300"
          >
            Deselect All
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {selectedJournals.map((journal) => (
          <div
            key={journal}
            className="flex items-center justify-between bg-[#0F172A]/50 p-3 rounded-md border border-emerald-900/30"
          >
            <span className="text-gray-200">{journal}</span>
            <span className="w-4 h-4 rounded-full bg-emerald-500" />
          </div>
        ))}
      </div>

      {isAddingJournal ? (
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            value={newJournal}
            onChange={(e) => setNewJournal(e.target.value)}
            placeholder="Enter journal name"
            className="flex-1 bg-[#0F172A]/50 border border-emerald-900/30 rounded-md p-2 text-white placeholder-gray-500"
          />
          <button
            onClick={handleAddJournal}
            className="bg-emerald-500 text-white px-3 py-2 rounded-md hover:bg-emerald-600"
          >
            Add
          </button>
          <button
            onClick={() => setIsAddingJournal(false)}
            className="text-gray-400 hover:text-gray-300"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button 
          onClick={() => setIsAddingJournal(true)}
          className="flex items-center text-emerald-400 mt-4 hover:text-emerald-300"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add New Journal
        </button>
      )}
    </div>
  );
};

export default ScientificJournals;