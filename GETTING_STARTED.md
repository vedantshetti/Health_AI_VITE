# Getting Started with Health AI VITE

## 🚀 Quick Start Guide

This guide will help you understand what you can get from this repository and how to use it effectively.

## 📦 What's Inside This Repository?

### 1. **Complete React Application**
A fully functional, production-ready frontend application for health claim verification.

### 2. **Rich Datasets**
- 27 health influencers with complete profiles
- 25 verified health claims with scientific references
- 40+ scientific journal references
- Real engagement metrics and trust scores

### 3. **Modern UI Components**
- Professional landing page
- Interactive data tables
- Animated components
- Responsive design
- Dark mode support

### 4. **Code Examples**
- React Router implementation
- Redux state management
- API integration patterns
- Form handling
- Data export functionality

## 🎯 What Can You Do With This?

### For Learning
✅ Study modern React patterns and best practices  
✅ Learn state management with Redux Toolkit  
✅ Understand routing with React Router v7  
✅ Explore Tailwind CSS styling techniques  
✅ See real-world component composition  
✅ Learn animation with Framer Motion  

### For Development
✅ Use as a template for similar applications  
✅ Extract and reuse UI components  
✅ Adapt the data structure for other domains  
✅ Build upon the existing features  
✅ Integrate with your own backend  

### For Research
✅ Access structured health claim data  
✅ Analyze influencer trust patterns  
✅ Export data for analysis  
✅ Study claim verification methodologies  
✅ Research health misinformation trends  

### For Business
✅ Identify credible health influencers  
✅ Verify claims before partnerships  
✅ Track influencer performance  
✅ Generate reports and analytics  

## 🛠️ Installation & Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/vedantshetti/Health_AI_VITE.git
cd Health_AI_VITE
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- React 18.3
- Vite 6.0
- Tailwind CSS 3.4
- Redux Toolkit 2.8
- And all other dependencies (~455 packages)

### Step 3: Start Development Server
```bash
npm run dev
```

Your app will be running at: **http://localhost:5173**

### Step 4: Explore the Application
Open your browser and navigate to:
- **Homepage**: http://localhost:5173/
- **Leaderboard**: http://localhost:5173/leaderboard
- **Claims**: http://localhost:5173/claims
- **Influencers**: http://localhost:5173/influencers
- **Research Tasks**: http://localhost:5173/research-tasks

## 📂 Understanding the Structure

```
Health_AI_VITE/
│
├── src/
│   ├── pages/              ← Main application pages
│   ├── components/         ← Reusable UI components
│   ├── data/              ← 📊 YOUR DATA IS HERE
│   │   ├── claims.js      ← 25 health claims
│   │   └── influencers.js ← 27 influencer profiles
│   ├── store/             ← Redux state management
│   └── App.jsx            ← Routing configuration
│
├── FEATURES.md            ← Complete feature list
├── DATA_REFERENCE.md      ← Data documentation
└── README.md              ← Overview and setup
```

## 🎨 Key Pages to Explore

### 1. Landing Page (`/`)
**Features:**
- Hero section with statistics
- "How It Works" section
- Key features showcase
- User testimonials
- Top influencers preview
- Call-to-action buttons

**Use Cases:**
- Marketing your platform
- Explaining value proposition
- User onboarding

### 2. Influencer Leaderboard (`/leaderboard`)
**Features:**
- Sortable table of 27 influencers
- Trust scores and rankings
- Trend indicators (↑↓)
- Follower counts
- Verified claims count

**Data Available:**
- Real trust scores (67%-94%)
- Engagement metrics
- Category classifications

### 3. Claims Explorer (`/claims`)
**Features:**
- Searchable table of 25 claims
- Filter by verification status
- Sort by confidence score
- View scientific references
- AI analysis summaries

**Data Available:**
- Claim content and context
- Verification status (Verified, Questionable, Debunked)
- Confidence scores (75%-97%)
- DOI links to research papers

### 4. Influencer Profiles (`/influencers/:id`)
**Features:**
- Detailed influencer information
- Claim history
- Trust score breakdown
- Scientific references

### 5. Research Tasks (`/research-tasks`)
**Features:**
- Create custom research workflows
- Configure time ranges
- Select scientific journals
- Track task progress
- Export results to CSV

**Configuration Options:**
- Time range: Week, Month, Quarter, Year
- Include revenue data
- Journal verification
- Specific influencer targeting
- New influencer discovery

## 💡 Common Use Cases

### Use Case 1: Verify a Health Claim
1. Navigate to `/claims`
2. Search for the claim or topic
3. Check verification status (✅ Verified, ❓ Questionable, ❌ Debunked)
4. Review confidence score and scientific references
5. Read AI analysis for detailed explanation

### Use Case 2: Research an Influencer
1. Go to `/leaderboard`
2. Find influencer by name or category
3. Check their trust score and trend
4. Click to view full profile
5. See their verified claims and engagement

### Use Case 3: Create a Research Task
1. Navigate to `/research-tasks`
2. Click "Create New Task"
3. Configure parameters:
   - Select time range
   - Choose scientific journals
   - Target specific influencers
4. Submit and track progress
5. Export results when complete

### Use Case 4: Export Data
1. Create or select a research task
2. Wait for completion
3. Click "Export to CSV"
4. Analyze data in Excel/Google Sheets

### Use Case 5: Find Credible Influencers
1. Open `/leaderboard`
2. Sort by trust score (highest first)
3. Filter by category (e.g., "Nutrition")
4. Review verified claims count
5. Check trend direction

## 🔧 Development Commands

### Available Scripts
```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

### Build Output
After running `npm run build`, you'll get:
- Optimized JavaScript bundle (~450KB)
- Minified CSS (~26KB)
- Static HTML
- All assets in `dist/` folder

## 📊 Accessing the Data

### Method 1: Direct Import
```javascript
import { claims } from '@/data/claims';
import { influencers } from '@/data/influencers';

// Use the data
console.log(`Total claims: ${claims.length}`);
console.log(`Total influencers: ${influencers.length}`);
```

### Method 2: In Components
```javascript
import { claims } from '@/data/claims';

function MyComponent() {
  const verifiedClaims = claims.filter(
    claim => claim.verificationStatus === 'verified'
  );
  
  return (
    <div>
      <h2>Verified Claims: {verifiedClaims.length}</h2>
    </div>
  );
}
```

### Method 3: Export to CSV
1. Use the built-in export functionality
2. Or write custom export script:
```javascript
import { exportToCsv } from 'export-to-csv';
import { claims } from '@/data/claims';

const options = {
  filename: 'health-claims',
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true,
  useTextFile: false,
  useBom: true,
  headers: ['id', 'content', 'verificationStatus', 'confidenceScore']
};

exportToCsv(options).generateCsv(claims);
```

## 🎓 Learning Path

### Beginner
1. ✅ Run the application locally
2. ✅ Explore all pages
3. ✅ View the data files in `src/data/`
4. ✅ Read component code in `src/components/`

### Intermediate
1. ✅ Modify styling in components
2. ✅ Add new data entries to `claims.js` or `influencers.js`
3. ✅ Create new components
4. ✅ Customize the landing page

### Advanced
1. ✅ Integrate with a real backend API
2. ✅ Add authentication and user management
3. ✅ Implement real-time data updates
4. ✅ Add new features (comments, ratings, bookmarks)
5. ✅ Deploy to production

## 🔗 Important Files

### Must-Read Documentation
- `README.md` - Project overview and setup
- `FEATURES.md` - Complete feature list
- `DATA_REFERENCE.md` - Detailed data documentation
- `package.json` - Dependencies and scripts

### Key Source Files
- `src/data/claims.js` - All 25 health claims
- `src/data/influencers.js` - All 27 influencer profiles
- `src/App.jsx` - Routing configuration
- `src/pages/LandingPage.jsx` - Homepage with all features

### Configuration Files
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS theming
- `components.json` - shadcn/ui setup
- `eslint.config.js` - Code quality rules

## 🚀 Next Steps

### For Users
1. ✅ Read `FEATURES.md` for complete capabilities
2. ✅ Explore all pages in the application
3. ✅ Try searching and filtering claims
4. ✅ Export data for your analysis

### For Developers
1. ✅ Study the component structure
2. ✅ Understand the routing setup
3. ✅ Learn from the styling patterns
4. ✅ Experiment with modifications
5. ✅ Consider backend integration

### For Researchers
1. ✅ Review `DATA_REFERENCE.md` for data details
2. ✅ Export claims data to CSV
3. ✅ Analyze trust score patterns
4. ✅ Study verification methodologies

## 📚 Additional Resources

### Internal Documentation
- [Complete Feature List](./FEATURES.md)
- [Data Reference Guide](./DATA_REFERENCE.md)
- [Main README](./README.md)

### External Resources
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [shadcn/ui Components](https://ui.shadcn.com)

## ❓ FAQ

### Q: Is this application production-ready?
**A:** The frontend is production-ready. You'll need to integrate a backend for user authentication and real-time data updates.

### Q: Can I use this data for research?
**A:** Yes! The data structure is designed for research purposes. Export to CSV and analyze as needed.

### Q: Can I modify the data?
**A:** Absolutely! Edit `src/data/claims.js` and `src/data/influencers.js` to add or modify entries.

### Q: How do I deploy this?
**A:** Run `npm run build` and deploy the `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages).

### Q: Is the data real?
**A:** The influencer names and categories are based on real public figures, but the specific claims, scores, and metrics are mock data for demonstration purposes.

### Q: Can I integrate this with a backend?
**A:** Yes! The application is designed with API integration points. Replace the mock data imports with actual API calls.

## 🤝 Need Help?

- Check existing [Issues](https://github.com/vedantshetti/Health_AI_VITE/issues)
- Create a new issue for bugs or questions
- Read the documentation files thoroughly
- Review the source code with comments

---

**Welcome to Health AI VITE! Start exploring the application now and discover everything this repository has to offer! 🎉**
