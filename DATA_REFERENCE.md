# Data Reference Guide

## Available Data in Health AI VITE Repository

This document provides a comprehensive reference of all data available in the repository.

## 📊 Influencers Dataset

### Location
`src/data/influencers.js`

### Total Count
27 health influencers

### Data Structure
Each influencer contains:
```javascript
{
  rank: Number,           // Leaderboard ranking (1-27)
  name: String,           // Full name (e.g., "Dr. Peter Attia")
  image: String,          // Profile image URL (Unsplash)
  category: String,       // Primary expertise category
  trustScore: String,     // Trust percentage (e.g., "94%")
  trend: String,          // Trend direction ("up" or "down")
  followers: String,      // Follower count (e.g., "1.2M+")
  verifiedClaims: Number  // Number of verified claims
}
```

### Complete Influencer List

#### Top 10 Influencers
1. **Dr. Peter Attia** - Medicine (94% trust, 1.2M+ followers, 203 claims)
2. **Dr. Rhonda Patrick** - Nutrition (91% trust, 980K+ followers, 156 claims)
3. **Dr. Chris Palmer** - Mental Health (90% trust, 180K+ followers, 76 claims)
4. **Andrew Huberman** - Neuroscience (89% trust, 4.2M+ followers, 127 claims)
5. **Dr. Dominic D'Agostino** - Nutrition (89% trust, 290K+ followers, 112 claims)
6. **Dr. Gabrielle Lyon** - Medicine (88% trust, 380K+ followers, 84 claims)
7. **Dr. David Sinclair** - Longevity (87% trust, 1.1M+ followers, 145 claims)
8. **Dr. Michael Greger** - Nutrition (86% trust, 600K+ followers, 133 claims)
9. **Dr. Mark Hyman** - Functional Medicine (85% trust, 800K+ followers, 108 claims)
10. **Dr. Eric Berg** - Nutrition (84% trust, 1.7M+ followers, 154 claims)

#### Influencers 11-20
11. Dr. Terry Wahls - Autoimmune Diseases (83%)
12. Dr. Jason Fung - Fasting (82%)
13. Dr. Layne Norton - Fitness (81%)
14. Dr. Paul Saladino - Carnivore Diet (80%)
15. Dr. Sarah Ballantyne - Autoimmune Protocol (79%)
16. Dr. Steven Gundry - Plant-Based Diets (78%)
17. Dr. Ben Greenfield - Biohacking (77%)
18. Dr. Josh Axe - Herbal Medicine (76%)
19. Dr. William Davis - Cardiology (75%)
20. Dr. Tim Spector - Gut Health (74%)

#### Influencers 21-27
21. Dr. Frank Lipman - Functional Medicine (73%)
22. Dr. Terry Grossman - Longevity (72%)
23. Dr. Dean Ornish - Heart Health (71%)
24. Dr. Joel Kahn - Plant-Based Diets (70%)
25. Dr. Amy Myers - Autoimmune Diseases (69%)
26. Dr. Valter Longo - Fasting (68%)
27. Dr. Michael Mosley - Health Education (67%)

### Categories Represented
- Medicine
- Nutrition (most common)
- Mental Health
- Neuroscience
- Longevity
- Autoimmune Diseases
- Functional Medicine
- Fasting
- Fitness
- Carnivore Diet
- Autoimmune Protocol
- Plant-Based Diets
- Biohacking
- Herbal Medicine
- Cardiology
- Gut Health
- Heart Health
- Health Education

## 🔬 Claims Dataset

### Location
`src/data/claims.js`

### Total Count
25 health claims

### Data Structure
Each claim contains:
```javascript
{
  id: Number,
  influencerId: Number,
  influencer: {
    name: String,
    image: String,
    category: String
  },
  content: String,                    // The actual claim text
  category: String,                   // Claim category
  verificationStatus: String,         // "verified", "questionable", "debunked"
  confidenceScore: Number,            // 0-100
  sourceLinks: Array<String>,         // Journal names
  scientificReferences: Array<{
    journal: String,
    title: String,
    year: Number,
    doi: String
  }>,
  datePublished: String,              // ISO date format
  platform: String,                   // Twitter, Instagram, YouTube, etc.
  engagement: Number,                 // Engagement count
  aiAnalysis: String                  // AI-generated analysis
}
```

### Claims by Verification Status

#### Verified Claims (16 total)
1. "Sulforaphane in broccoli sprouts enhances detoxification pathways" - Dr. Rhonda Patrick (91%)
2. "Meditation reduces symptoms of depression and anxiety" - Dr. Chris Palmer (90%)
3. "Morning sunlight exposure helps regulate circadian rhythm" - Andrew Huberman (89%)
4. "Intermittent fasting improves insulin sensitivity and promotes weight loss" - Dr. Jason Fung (93%)
5. "Sugar consumption accelerates aging through glycation" - Dr. Mark Hyman (92%)
6. "High dietary fiber intake improves gut-brain axis communication" - Dr. David Perlmutter (89%)
7. "Nutrient-dense diets reduce inflammation in autoimmune conditions" - Dr. Terry Wahls (95%)
8. "Plant-based diets reduce all-cause mortality by 15%" - Dr. Michael Greger (94%)
9. "Sauna use reduces cardiovascular disease risk" - Dr. Rhonda Patrick (92%)
10. "Morning sunlight exposure improves mood and regulates circadian rhythm" - Dr. Andrew Huberman (96%)
11. "Methylation support through diet and lifestyle enhances gene expression" - Dr. Ben Lynch (88%)
12. "Anti-angiogenic foods starve cancer cells and slow tumor growth" - Dr. William Li (90%)
13. "A ketogenic diet improves cognitive function in early Alzheimer's disease" - Dr. Dale Bredesen (93%)
14. "The 5:2 intermittent fasting approach improves metabolic health" - Dr. Michael Mosley (94%)
15. "Zone 2 training enhances mitochondrial function and longevity" - Dr. Peter Attia (92%)
16. "Cold thermogenesis improves metabolism and supports fat loss" - Dr. Jack Kruse (91%)

#### Questionable Claims (5 total)
1. "Ketogenic diets enhance cognitive function in older adults" - Dr. Dominic D'Agostino (85%)
2. "Low-carb diets enhance athletic performance for endurance athletes" - Dr. Jeff Volek (78%)
3. "Carnivore diets eliminate gut inflammation and improve digestion" - Dr. Shawn Baker (76%)
4. "The GAPS diet restores gut health and reduces neurological issues" - Dr. Natasha Campbell-McBride (79%)

#### Debunked Claims (4 total)
1. "Regular exercise reduces risk of cardiovascular disease by 30%" - Dr. Peter Attia (94%)
2. "Balancing cortisol levels improves sleep and stress resilience" - Dr. Sara Gottfried (91%)
3. "Eliminating lectins reduces inflammation and promotes heart health" - Dr. Steven Gundry (75%)
4. "Consuming apple cider vinegar aids in weight management" - Dr. Eric Berg (80%)
5. "Low-fat, whole-food plant-based diets reverse type 2 diabetes" - Dr. Neal Barnard (97%)

### Claims by Category
- **Nutrition**: 11 claims
- **Neuroscience**: 3 claims
- **Medicine**: 2 claims
- **Mental Health**: 1 claim
- **Diabetes**: 2 claims
- **Cardiology**: 3 claims
- **Endocrinology**: 1 claim
- **Neurology**: 3 claims
- **Oncology**: 1 claim
- **Exercise Physiology**: 2 claims
- **Epigenetics**: 1 claim
- **Biohacking**: 1 claim

### Platforms Represented
- Twitter
- Instagram
- YouTube
- Podcast
- Blog

### Engagement Range
- Minimum: 8,701 engagements
- Maximum: 45,987 engagements
- Average: ~20,000 engagements

## 📚 Scientific Journals Referenced

### Complete List (20+ Journals)
1. **New England Journal of Medicine**
   - DOI example: 10.1056/NEJMra2200542

2. **American Heart Association**

3. **British Medical Journal**

4. **Cell Metabolism**
   - DOI example: 10.1016/j.cmet.2024.01.003

5. **Nature Medicine**

6. **Science**
   - DOI example: 10.1126/science.2024.1234

7. **Nature Neuroscience**
   - DOI example: 10.1038/nn.2024.0841

8. **Journal of Clinical Nutrition**
   - DOI example: 10.1080/1028415X.2024.987654

9. **Nutritional Neuroscience**

10. **Diabetes Care Journal**
    - DOI example: 10.2337/dc24-1020

11. **International Journal of Obesity**

12. **Journal of Molecular Biology**
    - DOI example: 10.1016/j.jmb.2024.09.002

13. **American Journal of Clinical Nutrition**

14. **Gut Microbiome Journal**
    - DOI example: 10.1016/j.gut.2024.08.006

15. **International Journal of Inflammation**
    - DOI example: 10.1177/ijoi2024-1003

16. **Journal of Sports Medicine**
    - DOI example: 10.1007/s12345-2024-0005

17. **American Journal of Physiology**

18. **Hormone Research Journal**
    - DOI example: 10.1056/hrj2024.2567

19. **Journal of Sleep Research**

20. **Cardiology Insights**

21. **Journal of Inflammatory Medicine**

22. **Journal of Preventive Medicine**

23. **American Journal of Nutrition**

24. **Journal of Clinical Endocrinology**

25. **Nutritional Science Reports**

26. **The Lancet**
    - DOI example: 10.1016/S0140-6736(24)01234-5

27. **American Journal of Cardiology**

28. **Frontiers in Physiology**

29. **Journal of Biological Rhythms**

30. **Journal of Nutritional Biochemistry**

31. **Gut Journal**

32. **Epigenetics Journal**

33. **Journal of Cancer Research**

34. **Oncology Letters**

35. **Alzheimer's Research Journal**

36. **Neurobiology of Aging**

37. **Journal of Obesity**

38. **The Lancet Diabetes & Endocrinology**

39. **Journal of Functional Medicine**

40. **Gut Microbiome Research**

41. **Journal of Sports Physiology**

42. **Journal of Metabolic Research**

43. **Journal of Psychiatric Research**

44. **American Psychological Association**

## 🎨 UI Assets

### Images
All influencer profile images are sourced from Unsplash with proper attribution.

### Icons
- **Heroicons v2.2.0** - Outline and solid icons
- **Lucide React v0.471.2** - Additional icon set
- **React Icons v5.5.0** - Comprehensive icon library

## 📁 Component Inventory

### Layout Components
- `Layout.jsx` - Main layout wrapper
- Header/Navigation
- Footer
- Sidebar (if applicable)

### Page Components
1. `LandingPage.jsx` - Marketing homepage
2. `Claims.jsx` - Claims explorer
3. `Influencers.jsx` - Influencer listing
4. `InfluencerProfile.jsx` - Individual influencer page
5. `InfluencerLeaderboard.jsx` - Rankings table
6. `ResearchTasks.jsx` - Research dashboard
7. `Login.jsx` - Authentication
8. `Signup.jsx` - Registration

### Feature Components
#### Claims Components (`src/components/claims/`)
- ClaimsTable
- ClaimCard
- ClaimModal
- VerificationBadge
- (and more)

#### Influencer Components (`src/components/influencers/`)
- InfluencerCard
- InfluencerList
- InfluencerStats
- (and more)

#### Leaderboard Components (`src/components/leaderboard/`)
- LeaderboardTable
- RankingRow
- TrendIndicator
- (and more)

#### Research Components (`src/components/research/`)
- ScientificJournals
- TimeRange
- ResearchSettings
- TaskList
- (and more)

## 🔌 API Endpoints (Mock)

### Currently Implemented (Frontend Only)
```javascript
// Research Tasks
GET  /api/research/tasks       // Fetch all tasks
POST /api/research/task        // Create new task

// These currently use mock data and would need backend implementation
```

### Expected Data Flow
1. Frontend makes API call
2. Currently returns mock/local data
3. Ready for backend integration

## 📊 Statistics

### Overall Numbers
- **Total Influencers**: 27
- **Total Claims**: 25
- **Total Scientific Journals**: 40+
- **Categories Covered**: 16+
- **Platforms Monitored**: 5 (Twitter, Instagram, YouTube, Podcast, Blog)
- **Average Trust Score**: ~80%
- **Total Followers Represented**: 20M+
- **Date Range**: 2024-2025 (mock data)

### Verification Distribution
- Verified: 64% (16 claims)
- Questionable: 20% (5 claims)
- Debunked: 16% (4 claims)

### Category Distribution
Most common categories:
1. Nutrition - 11 claims
2. Cardiology - 3 claims
3. Neuroscience - 3 claims
4. Neurology - 3 claims

## 🔍 Search Capabilities

### Available Filters
- By influencer name
- By category
- By verification status
- By confidence score range
- By date published
- By platform
- By engagement level

### Sort Options
- Trust score (high to low / low to high)
- Followers count
- Verified claims count
- Alphabetically
- Recent activity

## 🎯 Data Quality

### Confidence Scores
- Range: 75% - 97%
- Average: ~88%
- Methodology: Based on scientific consensus and evidence strength

### Trust Scores
- Range: 67% - 94%
- Average: ~80%
- Calculation: Based on verified claim accuracy over time

## 🚀 How to Access Data

### From Components
```javascript
import { claims } from '@/data/claims';
import { influencers } from '@/data/influencers';

// Use in your components
console.log(claims);        // Array of 25 claims
console.log(influencers);   // Array of 27 influencers
```

### From Redux Store
```javascript
// Access through Redux selectors (if implemented)
const claims = useSelector(state => state.claims);
const influencers = useSelector(state => state.influencers);
```

## 📝 Notes

- All data is currently static (hardcoded in JS files)
- Images are hosted on Unsplash (external URLs)
- DOI links are formatted but may need verification
- Dates are in ISO 8601 format
- Engagement numbers are mock data
- API endpoints exist but need backend implementation

---

This reference guide covers all available data in the repository. For implementation details, see the source files in `src/data/`.
