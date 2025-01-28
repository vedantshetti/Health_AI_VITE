export const claims = [
    {
      id: 1,
      influencerId: 1, // Dr. Peter Attia
      influencer: {
        name: "Dr. Peter Attia",
        image:  "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        category: "Medicine"
      },
      content: "Regular exercise reduces risk of cardiovascular disease by 30%",
      category: "Medicine",
      verificationStatus: "debunked",
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
      influencerId: 2, // Dr. Rhonda Patrick
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
      influencerId: 3, // Dr. Chris Palmer
      influencer: {
        name: "Dr. Chris Palmer",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        category: "Mental Health"
      },
      content: "Meditation reduces symptoms of depression and anxiety",
      category: "Mental Health",
      verificationStatus: "verified",
      confidenceScore: 90,
      sourceLinks: [
        "Journal of Psychiatric Research",
        "American Psychological Association"
      ],
      scientificReferences: [
        {
          journal: "Journal of Psychiatric Research",
          title: "The Impact of Meditation on Mental Health",
          year: 2024,
          doi: "10.1016/j.psychres.2024.03.005"
        }
      ],
      datePublished: "2025-01-22",
      platform: "YouTube",
      engagement: 10234,
      aiAnalysis: "Scientific studies support the role of mindfulness meditation in reducing psychological stress."
    },
    {
      id: 4,
      influencerId: 4, // Andrew Huberman
      influencer: {
        name: "Andrew Huberman",
        image:   "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
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
      aiAnalysis: "Strong evidence suggests that exposure to morning light influences melatonin production and sleep quality."
    },
    {
      id: 5,
      influencerId: 5, // Dr. Dominic D'Agostino
      influencer: {
        name: "Dr. Dominic D'Agostino",
        image: "https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        category: "Nutrition"
      },
      content: "Ketogenic diets enhance cognitive function in older adults",
      category: "Nutrition",
      verificationStatus: "questionable",
      confidenceScore: 85,
      sourceLinks: [
        "Journal of Clinical Nutrition",
        "Nutritional Neuroscience"
      ],
      scientificReferences: [
        {
          journal: "Journal of Clinical Nutrition",
          title: "Effects of Ketogenic Diets on Cognitive Health",
          year: 2024,
          doi: "10.1080/1028415X.2024.987654"
        }
      ],
      datePublished: "2025-01-10",
      platform: "Blog",
      engagement: 8701,
      aiAnalysis: "Preliminary studies indicate potential benefits, but more randomized controlled trials are required."
    },
    {
        id: 6,
        influencerId: 6, // Dr. Jason Fung
        influencer: {
          name: "Dr. Jason Fung",
          image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Diabetes"
        },
        content: "Intermittent fasting improves insulin sensitivity and promotes weight loss",
        category: "Diabetes",
        verificationStatus: "verified",
        confidenceScore: 93,
        sourceLinks: [
          "Diabetes Care Journal",
          "International Journal of Obesity"
        ],
        scientificReferences: [
          {
            journal: "Diabetes Care Journal",
            title: "Impact of Intermittent Fasting on Insulin Sensitivity",
            year: 2024,
            doi: "10.2337/dc24-1020"
          }
        ],
        datePublished: "2025-01-18",
        platform: "Instagram",
        engagement: 12345,
        aiAnalysis: "Extensive studies indicate a strong positive relationship between intermittent fasting and metabolic health."
      },
      {
        id: 7,
        influencerId: 7, // Dr. Mark Hyman
        influencer: {
          name: "Dr. Mark Hyman",
          image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Functional Medicine"
        },
        content: "Sugar consumption accelerates aging through glycation",
        category: "Nutrition",
        verificationStatus: "verified",
        confidenceScore: 92,
        sourceLinks: [
          "Journal of Molecular Biology",
          "American Journal of Clinical Nutrition"
        ],
        scientificReferences: [
          {
            journal: "Journal of Molecular Biology",
            title: "Advanced Glycation End Products and Aging",
            year: 2024,
            doi: "10.1016/j.jmb.2024.09.002"
          }
        ],
        datePublished: "2025-01-17",
        platform: "Twitter",
        engagement: 16543,
        aiAnalysis: "Scientific consensus supports the role of high sugar intake in promoting glycation and oxidative stress."
      },
      {
        id: 8,
        influencerId: 8, // Dr. David Perlmutter
        influencer: {
          name: "Dr. David Perlmutter",
          image: "https://images.unsplash.com/photo-1586073613874-6e0e3f4a92b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Neurology"
        },
        content: "High dietary fiber intake improves gut-brain axis communication",
        category: "Neurology",
        verificationStatus: "verified",
        confidenceScore: 89,
        sourceLinks: [
          "Gut Microbiome Journal",
          "Nature Neuroscience"
        ],
        scientificReferences: [
          {
            journal: "Gut Microbiome Journal",
            title: "Dietary Fiber and the Gut-Brain Axis",
            year: 2024,
            doi: "10.1016/j.gut.2024.08.006"
          }
        ],
        datePublished: "2025-01-12",
        platform: "Blog",
        engagement: 9876,
        aiAnalysis: "Emerging evidence highlights the influence of gut health on brain functions, particularly mood and memory."
      },
      {
        id: 9,
        influencerId: 9, // Dr. Terry Wahls
        influencer: {
          name: "Dr. Terry Wahls",
          image: "https://images.unsplash.com/photo-1622495899017-57c1b2bb7b5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Autoimmune Health"
        },
        content: "Nutrient-dense diets reduce inflammation in autoimmune conditions",
        category: "Nutrition",
        verificationStatus: "verified",
        confidenceScore: 95,
        sourceLinks: [
          "The Autoimmune Protocol Journal",
          "International Journal of Inflammation"
        ],
        scientificReferences: [
          {
            journal: "International Journal of Inflammation",
            title: "Impact of Nutrient-Rich Diets on Autoimmune Disorders",
            year: 2024,
            doi: "10.1177/ijoi2024-1003"
          }
        ],
        datePublished: "2025-01-19",
        platform: "YouTube",
        engagement: 23412,
        aiAnalysis: "Studies affirm a direct link between micronutrient sufficiency and inflammatory biomarker reduction."
      },
      {
        id: 10,
        influencerId: 10, // Dr. Jeff Volekhttps://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        influencer: {
          name: "Dr. Jeff Volek",
          image: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Exercise Physiology"
        },
        content: "Low-carb diets enhance athletic performance for endurance athletes",
        category: "Nutrition",
        verificationStatus: "questionable",
        confidenceScore: 78,
        sourceLinks: [
          "Journal of Sports Medicine",
          "American Journal of Physiology"
        ],
        scientificReferences: [
          {
            journal: "Journal of Sports Medicine",
            title: "Low-Carb Diets and Exercise Efficiency",
            year: 2024,
            doi: "10.1007/s12345-2024-0005"
          }
        ],
        datePublished: "2025-01-21",
        platform: "Podcast",
        engagement: 16587,
        aiAnalysis: "Evidence shows mixed results, with benefits observed for some athletes while others experienced performance dips."
      },
      {
        id: 11,
        influencerId: 11, // Dr. Sara Gottfried
        influencer: {
          name: "Dr. Sara Gottfried",
          image: "https://images.unsplash.com/photo-1609782425273-29d0e6833d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Hormonal Health"
        },
        content: "Balancing cortisol levels improves sleep and stress resilience",
        category: "Endocrinology",
        verificationStatus: "debunked",
        confidenceScore: 91,
        sourceLinks: [
          "Hormone Research Journal",
          "Journal of Sleep Research"
        ],
        scientificReferences: [
          {
            journal: "Hormone Research Journal",
            title: "Cortisol Regulation and Its Impact on Sleep",
            year: 2024,
            doi: "10.1056/hrj2024.2567"
          }
        ],
        datePublished: "2025-01-14",
        platform: "Instagram",
        engagement: 18790,
        aiAnalysis: "Robust evidence links cortisol rhythm stabilization with improved overall health outcomes."
      },
      {
        id: 12,
        influencerId: 12, // Dr. Steven Gundry
        influencer: {
          name: "Dr. Steven Gundry",
          image: "https://images.unsplash.com/photo-1604066867775-c5cbe797fd3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Cardiology"
        },
        content: "Eliminating lectins reduces inflammation and promotes heart health",
        category: "Cardiology",
        verificationStatus: "debunked",
        confidenceScore: 75,
        sourceLinks: [
          "Cardiology Insights",
          "Journal of Inflammatory Medicine"
        ],
        scientificReferences: [
          {
            journal: "Cardiology Insights",
            title: "The Role of Lectins in Inflammation",
            year: 2024,
            doi: "10.1016/j.card.2024.06.001"
          }
        ],
        datePublished: "2025-01-16",
        platform: "YouTube",
        engagement: 20431,
        aiAnalysis: "Studies remain inconclusive, with conflicting results on lectins' actual inflammatory impact."
      },
      {
        id: 13,
        influencerId: 13, // Dr. Michael Greger
        influencer: {
          name: "Dr. Michael Greger",
          image: "https://images.unsplash.com/photo-1550333051-f6a5f3fe4c24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Preventive Medicine"
        },
        content: "Plant-based diets reduce all-cause mortality by 15%",
        category: "Nutrition",
        verificationStatus: "verified",
        confidenceScore: 94,
        sourceLinks: [
          "Journal of Preventive Medicine",
          "American Journal of Nutrition"
        ],
        scientificReferences: [
          {
            journal: "Journal of Preventive Medicine",
            title: "Plant-Based Diets and Mortality Rates",
            year: 2024,
            doi: "10.1093/jpm.2024.0901"
          }
        ],
        datePublished: "2025-01-09",
        platform: "Twitter",
        engagement: 23487,
        aiAnalysis: "Strong epidemiological data support the link between plant-based diets and reduced mortality."
      },
      {
        id: 14,
        influencerId: 14, // Dr. Eric Berg
        influencer: {
          name: "Dr. Eric Berg",
          image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Nutrition"
        },
        content: "Consuming apple cider vinegar aids in weight management",
        category: "Nutrition",
        verificationStatus: "debunked",
        confidenceScore: 80,
        sourceLinks: [
          "Journal of Clinical Endocrinology",
          "Nutritional Science Reports"
        ],
        scientificReferences: [
          {
            journal: "Nutritional Science Reports",
            title: "Effects of Apple Cider Vinegar on Body Weight",
            year: 2024,
            doi: "10.1016/j.nutrsci.2024.0209"
          }
        ],
        datePublished: "2025-01-11",
        platform: "Instagram",
        engagement: 14678,
        aiAnalysis: "Preliminary studies suggest weight loss effects, but evidence remains limited and inconsistent."
      },
      {
        id: 15,
        influencerId: 15, // Dr. Neal Barnard
        influencer: {
          name: "Dr. Neal Barnard",
          image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Nutrition"
        },
        content: "Low-fat, whole-food plant-based diets reverse type 2 diabetes",
        category: "Diabetes",
        verificationStatus: "debunked",
        confidenceScore: 97,
        sourceLinks: [
          "Diabetes Journal",
          "The Lancet"
        ],
        scientificReferences: [
          {
            journal: "The Lancet",
            title: "Reversing Type 2 Diabetes with Plant-Based Diets",
            year: 2024,
            doi: "10.1016/S0140-6736(24)01234-5"
          }
        ],
        datePublished: "2025-01-20",
        platform: "YouTube",
        engagement: 34567,
        aiAnalysis: "Compelling clinical trial data support the claim, with observed improvements in blood sugar regulation."
      },
      {
        id: 16,
        influencerId: 16, // Dr. Rhonda Patrick
        influencer: {
          name: "Dr. Rhonda Patrick",
          image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Longevity"
        },
        content: "Sauna use reduces cardiovascular disease risk by improving vascular function",
        category: "Cardiology",
        verificationStatus: "verified",
        confidenceScore: 92,
        sourceLinks: [
          "American Journal of Cardiology",
          "Frontiers in Physiology"
        ],
        scientificReferences: [
          {
            journal: "American Journal of Cardiology",
            title: "Sauna Bathing and Cardiovascular Health Benefits",
            year: 2024,
            doi: "10.1016/ajcard.2024.0601"
          }
        ],
        datePublished: "2025-01-10",
        platform: "YouTube",
        engagement: 23450,
        aiAnalysis: "Studies show consistent benefits of sauna bathing for heart health and stress reduction."
      },
      {
        id: 17,
        influencerId: 17, // Dr. Andrew Huberman
        influencer: {
          name: "Dr. Andrew Huberman",
          image: "https://images.unsplash.com/photo-1603415526792-c65ab29f9c31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Neuroscience"
        },
        content: "Morning sunlight exposure improves mood and regulates circadian rhythm",
        category: "Neuroscience",
        verificationStatus: "verified",
        confidenceScore: 96,
        sourceLinks: [
          "Nature Neuroscience",
          "Journal of Biological Rhythms"
        ],
        scientificReferences: [
          {
            journal: "Nature Neuroscience",
            title: "Impact of Natural Light on Mood and Circadian Regulation",
            year: 2024,
            doi: "10.1038/nn.2024.0841"
          }
        ],
        datePublished: "2025-01-15",
        platform: "Instagram",
        engagement: 34576,
        aiAnalysis: "Strong evidence links sunlight exposure with improvements in serotonin and melatonin regulation."
      },
      {
        id: 18,
        influencerId: 18, // Dr. Shawn Baker
        influencer: {
          name: "Dr. Shawn Baker",
          image: "https://images.unsplash.com/photo-1532074205216-d0e1c67c35cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Nutrition"
        },
        content: "Carnivore diets eliminate gut inflammation and improve digestion",
        category: "Nutrition",
        verificationStatus: "questionable",
        confidenceScore: 76,
        sourceLinks: [
          "Journal of Nutritional Biochemistry",
          "Gut Journal"
        ],
        scientificReferences: [
          {
            journal: "Journal of Nutritional Biochemistry",
            title: "Protein-Only Diets and Gastrointestinal Health",
            year: 2024,
            doi: "10.1016/j.jnutbio.2024.0214"
          }
        ],
        datePublished: "2025-01-09",
        platform: "Twitter",
        engagement: 16245,
        aiAnalysis: "Evidence remains limited, and long-term gut health effects are not fully understood."
      },
      {
        id: 19,
        influencerId: 19, // Dr. Ben Lynch
        influencer: {
          name: "Dr. Ben Lynch",
          image: "https://images.unsplash.com/photo-1531256379411-38c59e690392?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Epigenetics"
        },
        content: "Methylation support through diet and lifestyle enhances gene expression",
        category: "Epigenetics",
        verificationStatus: "verified",
        confidenceScore: 88,
        sourceLinks: [
          "Epigenetics Journal",
          "Journal of Clinical Nutrition"
        ],
        scientificReferences: [
          {
            journal: "Epigenetics Journal",
            title: "Impact of Lifestyle on DNA Methylation Patterns",
            year: 2024,
            doi: "10.1016/epi.2024.0506"
          }
        ],
        datePublished: "2025-01-20",
        platform: "Podcast",
        engagement: 24321,
        aiAnalysis: "Evidence supports the role of dietary methyl donors in modulating genetic expression and cellular repair."
      },
      {
        id: 20,
        influencerId: 20, // Dr. William Li
        influencer: {
          name: "Dr. William Li",
          image: "https://images.unsplash.com/photo-1583123810403-56a6b3e54325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Oncology"
        },
        content: "Anti-angiogenic foods starve cancer cells and slow tumor growth",
        category: "Oncology",
        verificationStatus: "verified",
        confidenceScore: 90,
        sourceLinks: [
          "Journal of Cancer Research",
          "Oncology Letters"
        ],
        scientificReferences: [
          {
            journal: "Journal of Cancer Research",
            title: "Dietary Anti-Angiogenic Strategies in Tumor Growth Suppression",
            year: 2024,
            doi: "10.1016/j.jcr.2024.0812"
          }
        ],
        datePublished: "2025-01-22",
        platform: "YouTube",
        engagement: 45987,
        aiAnalysis: "Strong data suggests that angiogenesis-inhibiting compounds in certain foods may assist cancer therapies."
      },
      {
        id: 21,
        influencerId: 21, // Dr. Dale Bredesen
        influencer: {
          name: "Dr. Dale Bredesen",
          image: "https://images.unsplash.com/photo-1555685812-4b7432e8b76e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Neurology"
        },
        content: "A ketogenic diet improves cognitive function in early Alzheimer's disease",
        category: "Neurology",
        verificationStatus: "verified",
        confidenceScore: 93,
        sourceLinks: [
          "Alzheimer's Research Journal",
          "Neurobiology of Aging"
        ],
        scientificReferences: [
          {
            journal: "Alzheimer's Research Journal",
            title: "Ketogenic Diets and Early Alzheimer's Symptom Management",
            year: 2024,
            doi: "10.1016/alzres.2024.1109"
          }
        ],
        datePublished: "2025-01-11",
        platform: "Blog",
        engagement: 23456,
        aiAnalysis: "Clinical evidence strongly supports the neuroprotective effects of ketone metabolism on brain health."
      },
      {
        id: 22,
        influencerId: 22, // Dr. Michael Mosley
        influencer: {
          name: "Dr. Michael Mosley",
          image: "https://images.unsplash.com/photo-1504712598893-24159a89200e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Public Health"
        },
        content: "The 5:2 intermittent fasting approach improves metabolic health",
        category: "Nutrition",
        verificationStatus: "verified",
        confidenceScore: 94,
        sourceLinks: [
          "Journal of Obesity",
          "The Lancet Diabetes & Endocrinology"
        ],
        scientificReferences: [
          {
            journal: "The Lancet Diabetes & Endocrinology",
            title: "Effects of Intermittent Fasting on Weight Loss and Insulin Resistance",
            year: 2024,
            doi: "10.1016/s0140-6736(24)12345-6"
          }
        ],
        datePublished: "2025-01-17",
        platform: "Podcast",
        engagement: 28453,
        aiAnalysis: "Numerous studies highlight intermittent fasting as a practical method for improving markers of metabolic health."
      },
      {
        id: 23,
        influencerId: 23, // Dr. Natasha Campbell-McBride
        influencer: {
          name: "Dr. Natasha Campbell-McBride",
          image: "https://images.unsplash.com/photo-1573497491063-74fabe8a6da6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Gut Health"
        },
        content: "The GAPS diet restores gut health and reduces neurological issues",
        category: "Neurology",
        verificationStatus: "questionable",
        confidenceScore: 79,
        sourceLinks: [
          "Journal of Functional Medicine",
          "Gut Microbiome Research"
        ],
        scientificReferences: [
          {
            journal: "Gut Microbiome Research",
            title: "Impact of GAPS Diet on Gut Microbial Health",
            year: 2024,
            doi: "10.1016/gutres.2024.0802"
          }
        ],
        datePublished: "2025-01-18",
        platform: "YouTube",
        engagement: 19465,
        aiAnalysis: "Limited clinical evidence exists, and more rigorous trials are required to substantiate these claims."
      },
      {
        id: 24,
        influencerId: 24, // Dr. Peter Attia
        influencer: {
          name: "Dr. Peter Attia",
          image: "https://images.unsplash.com/photo-1506290116055-59fbf25e2e34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Longevity"
        },
        content: "Zone 2 training enhances mitochondrial function and longevity",
        category: "Exercise Physiology",
        verificationStatus: "verified",
        confidenceScore: 92,
        sourceLinks: [
          "Journal of Sports Physiology",
          "Cell Metabolism"
        ],
        scientificReferences: [
          {
            journal: "Cell Metabolism",
            title: "Mitochondrial Adaptations to Zone 2 Training",
            year: 2024,
            doi: "10.1016/cm.2024.0512"
          }
        ],
        datePublished: "2025-01-16",
        platform: "Podcast",
        engagement: 31246,
        aiAnalysis: "Robust data highlights zone 2 training as a key intervention to improve metabolic health and longevity."
      },
      {
        id: 25,
        influencerId: 25, // Dr. Jack Kruse
        influencer: {
          name: "Dr. Jack Kruse",
          image: "https://images.unsplash.com/photo-1615397352274-dc6b17fc8e45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
          category: "Biohacking"
        },
        content: "Cold thermogenesis improves metabolism and supports fat loss",
        category: "Biohacking",
        verificationStatus: "verified",
        confidenceScore: 91,
        sourceLinks: [
          "Journal of Metabolic Research",
          "American Journal of Physiology"
        ],
        scientificReferences: [
          {
            journal: "Journal of Metabolic Research",
            title: "Cold Exposure and Thermogenic Fat Activation",
            year: 2024,
            doi: "10.1016/jmr.2024.1103"
          }
        ],
        datePublished: "2025-01-20",
        platform: "Blog",
        engagement: 23657,
        aiAnalysis: "Evidence indicates cold thermogenesis activates brown adipose tissue and boosts metabolic rate."
      },
    
  ];
  