// src/data/claims.js
export const claims = [
    {
      id: 1,
      influencerId: 1, // References Dr. Peter Attia
      influencer: {
        name: "Dr. Peter Attia",
        image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        category: "Medicine"
      },
      content: "Regular exercise reduces risk of cardiovascular disease by 30%",
      category: "Medicine",
      verificationStatus: "verified", // verified, questionable, debunked
      confidenceScore: 94,
      sourceLinks: [
        "New England Journal of Medicine",
        "American Heart Association",
        "British Medical Journal"
      ],
      scientificReferences: [
        {
          journal: "New England Journal of Medicine",
          title: "Physical Activity and Cardiovascular Health",
          year: 2024,
          doi: "10.1056/NEJMra2200542"
        }
      ],
      datePublished: "2025-01-15",
      platform: "Twitter",
      engagement: 15234,
      aiAnalysis: "Strong scientific consensus supports this claim with multiple large-scale studies confirming the correlation."
    },
    {
      id: 2,
      influencerId: 2, // References Dr. Rhonda Patrick
      influencer: {
        name: "Dr. Rhonda Patrick",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        category: "Nutrition"
      },
      content: "Sulforaphane in broccoli sprouts enhances detoxification pathways",
      category: "Nutrition",
      verificationStatus: "verified",
      confidenceScore: 91,
      sourceLinks: [
        "Cell Metabolism",
        "Nature Medicine"
      ],
      scientificReferences: [
        {
          journal: "Cell Metabolism",
          title: "Sulforaphane and Cellular Detoxification Mechanisms",
          year: 2024,
          doi: "10.1016/j.cmet.2024.01.003"
        }
      ],
      datePublished: "2025-01-20",
      platform: "Instagram",
      engagement: 8765,
      aiAnalysis: "Multiple peer-reviewed studies confirm the mechanism of action."
    },
    {
      id: 3,
      influencerId: 4, // References Andrew Huberman
      influencer: {
        name: "Andrew Huberman",
        image: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        category: "Neuroscience"
      },
      content: "Morning sunlight exposure helps regulate circadian rhythm",
      category: "Neuroscience",
      verificationStatus: "verified",
      confidenceScore: 89,
      sourceLinks: [
        "Science",
        "Nature Neuroscience"
      ],
      scientificReferences: [
        {
          journal: "Science",
          title: "Morning Light Exposure and Circadian Rhythm Regulation",
          year: 2024,
          doi: "10.1126/science.2024.1234"
        }
      ],
      datePublished: "2025-01-25",
      platform: "Podcast",
      engagement: 25678,
      aiAnalysis: "Well-established mechanism supported by chronobiology research."
    },
    {
      id: 4,
      influencerId: 5, // References Dr. Dominic D'Agostino
      influencer: {
        name: "Dr. Dominic D'Agostino",
        image: "https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        category: "Nutrition"
      },
      content: "Ketogenic diet reduces seizure frequency in epilepsy patients",
      category: "Nutrition",
      verificationStatus: "questionable",
      confidenceScore: 75,
      sourceLinks: [
        "Epilepsia Journal",
        "Neurology Today"
      ],
      scientificReferences: [
        {
          journal: "Epilepsia",
          title: "Ketogenic Diet in Epilepsy Management",
          year: 2024,
          doi: "10.1111/epi.20240115"
        }
      ],
      datePublished: "2025-01-28",
      platform: "YouTube",
      engagement: 12456,
      aiAnalysis: "More research needed to confirm efficacy across different patient populations."
    }
  ];
  