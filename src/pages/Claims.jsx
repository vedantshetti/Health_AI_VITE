import ClaimsFilter from "@/components/claims/ClaimsFilter";
import ClaimsTable from "@/components/claims/ClaimsTable";

// src/pages/Claims.jsx
const Claims = () => {
    return (
      <div className="min-h-screen bg-[#0B1120]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="mb-8">
            <h1 className="text-4xl font-semibold text-white mb-2">
              Health Claims Verification
            </h1>
            <p className="text-gray-400 text-sm">
              Comprehensive database of verified health claims from influencers, cross-referenced with scientific research and expert analysis.
            </p>
          </div>
  
          <ClaimsFilter />
          <ClaimsTable />
        </div>
      </div>
    );
  };
  
  export default Claims;