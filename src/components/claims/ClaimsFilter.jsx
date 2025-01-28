const ClaimsFilter = () => {
    return (
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex gap-2">
          {['All Claims', 'Verified', 'Questionable', 'Debunked'].map(status => (
            <button
              key={status}
              className={`px-4 py-2 rounded-full text-sm ${
                status === 'All Claims'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-[#0B1120] text-gray-400 hover:bg-[#1E293B]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
        
        <div className="ml-auto flex gap-2">
          <button className="bg-[#0B1120] text-gray-400 px-4 py-2 rounded-full text-sm hover:bg-[#1E293B]">
            Export Claims
          </button>
        </div>
      </div>
    );
  };
export default ClaimsFilter;  