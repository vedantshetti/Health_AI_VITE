# VerifyInfluencers - Frontend 🎨

![React](https://img.shields.io/badge/React-18.3-blue) ![Vite](https://img.shields.io/badge/Vite-6.0-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan) ![Redux](https://img.shields.io/badge/Redux-9.2-764ABC)

A modern, responsive web application for tracking and verifying health claims from social media influencers using AI-powered analysis.

## 🎯 Features

- **Dashboard Analytics**: Real-time statistics and insights
- **Influencer Management**: Track and analyze health influencers
- **Claim Verification**: AI-powered fact-checking with trust scores
- **Leaderboard System**: Rank influencers by credibility
- **Research Reports**: Generate comprehensive health topic analysis
- **Dark Theme UI**: Modern, eye-friendly interface
- **Responsive Design**: Works seamlessly on all devices
- **Authentication**: Secure login with JWT and OAuth (Google, GitHub)

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Pages Overview](#pages-overview)

## 🛠 Tech Stack

- **Framework**: React 18.3
- **Build Tool**: Vite 6.0
- **Styling**: TailwindCSS 3.4
- **State Management**: Redux Toolkit + Redux Persist
- **Routing**: React Router DOM 7.1
- **Icons**: Heroicons, React Icons
- **Animations**: Framer Motion 12.23
- **HTTP Client**: Axios 1.10
- **UI Components**: Radix UI, Shadcn/ui

## 📦 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Backend API running (see [Backend Repository](https://github.com/vedantshetti/Verify-Backend))

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vedantshetti/verify-infulencers.git
   cd verify-infulencers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration (see [Environment Variables](#environment-variables))

4. **Run the application**
   ```bash
   # Development mode with hot reload
   npm run dev

   # Build for production
   npm run build

   # Preview production build
   npm run preview
   ```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api

# OAuth Configuration (Optional)
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_GITHUB_CLIENT_ID=your-github-client-id

# App Configuration
VITE_APP_NAME=VerifyInfluencers
VITE_APP_VERSION=1.0.0
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
Application runs on `http://localhost:5173` with hot module replacement.

### Production Build
```bash
npm run build
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
verify-infulencers/
├── src/
│   ├── assets/              # Static assets (images, fonts)
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/          # Reusable components
│   │   ├── claims/
│   │   │   ├── ClaimsFilter.jsx
│   │   │   └── ClaimsTable.jsx
│   │   ├── influencers/
│   │   │   ├── InfluencerCard.jsx
│   │   │   ├── InfluencerSearch.jsx
│   │   │   └── InfluencerStats.jsx
│   │   ├── leaderboard/
│   │   │   ├── CategoryFilter.jsx
│   │   │   ├── LeaderboardTable.jsx
│   │   │   └── StatsCards.jsx
│   │   ├── research/
│   │   │   ├── ResearchSettings.jsx
│   │   │   ├── ScientificJournals.jsx
│   │   │   └── TimeRange.jsx
│   │   ├── layout/
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Toast.jsx
│   ├── data/                # Mock/static data
│   │   ├── claims.js
│   │   └── influencers.js
│   ├── hooks/               # Custom React hooks
│   │   └── useToast.js
│   ├── lib/                 # Utility functions
│   │   └── utils.js
│   ├── pages/               # Page components
│   │   ├── Dashboard.jsx
│   │   ├── Influencers.jsx
│   │   ├── InfluencerProfile.jsx
│   │   ├── Claims.jsx
│   │   ├── InfluencerLeaderboard.jsx
│   │   ├── ResearchTasks.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── VerifyEmail.jsx
│   ├── services/            # API service layer
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── influencerService.js
│   │   ├── claimService.js
│   │   ├── analyticsService.js
│   │   └── researchService.js
│   ├── store/               # Redux store
│   │   ├── store.js
│   │   └── authSlice.js
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind imports
├── public/
│   └── vite.svg
├── .env                     # Environment variables
├── .env.example             # Environment template
├── components.json          # Shadcn/ui config
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
├── package.json
└── README.md

```

## 🎨 Pages Overview

### 1. Landing Page
- **Route**: `/`
- **Features**:
  - Hero section with call-to-action
  - Feature highlights
  - Statistics overview
  - Testimonials
  - Smart navigation (redirects to dashboard if logged in)

### 2. Dashboard
- **Route**: `/dashboard`
- **Auth**: Required
- **Features**:
  - Quick statistics (influencers tracked, claims verified, avg trust score)
  - Recent claims overview
  - Claims breakdown by status (verified, pending, questionable, debunked)
  - Quick action buttons

### 3. Influencers
- **Route**: `/influencers`
- **Auth**: Required
- **Features**:
  - Grid view of all tracked influencers
  - Search and filter functionality
  - Add new influencer
  - Fetch Twitter posts
  - View influencer profiles
  - Trust score indicators

### 4. Influencer Profile
- **Route**: `/influencers/:id`
- **Auth**: Required
- **Features**:
  - Detailed influencer information
  - All claims from this influencer
  - Trust score history
  - Recent posts analysis
  - Verification statistics

### 5. Claims
- **Route**: `/claims`
- **Auth**: Required
- **Features**:
  - Comprehensive claims list
  - Filter by status (all, verified, pending, questionable, debunked)
  - Individual claim verification with AI
  - Batch verification ("Verify Pending" button)
  - Detailed claim information
  - Trust & confidence scores
  - Scientific references

### 6. Leaderboard
- **Route**: `/leaderboard`
- **Auth**: Required
- **Features**:
  - Influencer rankings by trust score
  - Category filtering
  - Sort by highest/lowest
  - Stats cards (active influencers, claims verified, avg trust score)
  - Trend indicators (up/down arrows)

### 7. Research Tasks
- **Route**: `/research-tasks`
- **Auth**: Required
- **Features**:
  - Generate AI-powered health topic research reports
  - Select scientific journals for cross-referencing
  - View all generated reports
  - Detailed report modal with:
    - Executive summary
    - Scientific consensus
    - Common claims analysis (true/false)
    - Risk factors
    - Important considerations
    - Relevant journals
    - Suggested experts
    - Key takeaways

### 8. Authentication Pages
- **Login** (`/login`)
- **Signup** (`/signup`)
- **Email Verification** (`/verify-email`)

## 🔑 Key Features

### 1. AI-Powered Claim Verification

```jsx
// Verify single claim
const handleVerifyClaim = async (claimId) => {
  const result = await claimService.verifyWithAI(claimId);
  // Shows: status, trust score (%), confidence score (%)
};

// Batch verify all pending claims
const handleVerifyPending = async () => {
  const result = await claimService.verifyAllPending(10);
  // Verifies up to 10 claims at once
};
```

### 2. Research Report Generation

```jsx
// Generate comprehensive health topic research
const handleGenerateReport = async () => {
  const report = await researchService.generateReport({
    topic: "intermittent fasting",
    verifyJournals: true,
    selectedJournals: ["PubMed Central", "Nature"]
  });
  // Returns detailed analysis with scientific backing
};
```

### 3. Real-time Analytics

```jsx
// Dashboard statistics
const stats = await analyticsService.getSummary();
// Returns: activeInfluencers, claimsVerified, averageTrustScore

const claimStats = await analyticsService.getClaimStats();
// Returns: verified, pending, questionable, debunked counts
```

### 4. Influencer Management

```jsx
// Fetch latest Twitter posts
const handleFetchPosts = async (influencerId) => {
  const result = await influencerService.fetchPosts(influencerId);
  // Returns: postsProcessed, claimsCreated, claimsUpdated
};
```

## 🎨 UI Components

### Toast Notifications
- Success, error, warning, info types
- Auto-dismiss functionality
- Smooth animations with Framer Motion
- Custom hook: `useToast()`

### Protected Routes
- Automatic authentication checks
- Redirect to login if not authenticated
- Preserves intended destination

### Dark Theme
- Consistent color palette
- Eye-friendly dark backgrounds
- Emerald accent colors
- Proper contrast ratios

## 🔒 Authentication Flow

1. **Register**: User signs up with email/password
2. **Email Verification**: Receives verification email
3. **Login**: Authenticates with JWT token
4. **Token Storage**: Stored in Redux + localStorage
5. **Protected Routes**: Automatic access control
6. **Auto-logout**: Token expiration handling

### OAuth Flow (Google/GitHub)
1. User clicks "Login with Google/GitHub"
2. Redirected to provider
3. Authorized and redirected back
4. Token received and stored
5. Logged in automatically

## 📱 Responsive Design

- **Mobile**: < 768px (optimized for phones)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Wide Desktop**: > 1440px

All components are fully responsive with:
- Flexible grids
- Responsive typography
- Mobile-friendly navigation
- Touch-optimized interactions

## 🚀 Performance Optimizations

- **Vite HMR**: Lightning-fast hot module replacement
- **Code Splitting**: Route-based lazy loading
- **Redux Persist**: Offline-first data persistence
- **Memoization**: React.memo for expensive components
- **Debounced Search**: Optimized search inputs
- **Lazy Loading**: Images and heavy components

## 🎭 State Management

### Redux Store Structure
```javascript
{
  auth: {
    user: {...},
    token: "...",
    isAuthenticated: true,
    loading: false,
    error: null
  }
}
```

### Redux Slices
- **authSlice**: User authentication state
  - `setUser()` - Store user and token
  - `clearAuth()` - Logout user
  - `setAuthError()` - Handle errors

## 🔧 Services (API Layer)

All API calls are centralized in service files:

### authService.js
```javascript
- register(data)
- login(data)
- verifyEmail(token)
- getCurrentUser()
- logout()
```

### influencerService.js
```javascript
- getInfluencers()
- getInfluencerById(id)
- createInfluencer(data)
- updateInfluencer(id, data)
- fetchPosts(id)
```

### claimService.js
```javascript
- getClaims(filters)
- getClaimById(id)
- verifyWithAI(id)
- verifyMultipleWithAI(ids)
- verifyAllPending(limit)
```

### analyticsService.js
```javascript
- getSummary()
- getLeaderboard(query)
- getCategories()
- getClaimStats()
```

### researchService.js
```javascript
- generateReport(data)
- getReports()
- getReport(id)
- deleteReport(id)
```

## 🎨 Styling

### TailwindCSS Configuration
- Custom colors for dark theme
- Custom scrollbar styles
- Extended animations
- Custom utility classes

### Color Palette
- **Background**: `#0B1120`, `#0F172A`
- **Primary**: Emerald-500 (`#10B981`)
- **Text**: White, Gray shades
- **Borders**: Gray-800

## 🐛 Error Handling

### API Errors
```javascript
try {
  const result = await service.method();
} catch (error) {
  // Displays user-friendly error message
  setError(error.response?.data?.error || error.message);
}
```

### Form Validation
- Real-time input validation
- Clear error messages
- Disabled submit on invalid

## 📚 Additional Resources

- [Backend API Documentation](https://github.com/vedantshetti/Verify-Backend)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Output directory: `dist/`

### Deploy Options
- **Vercel**: Automatic deployment from GitHub
- **Netlify**: Drag-and-drop or CLI deployment
- **GitHub Pages**: Static site hosting
- **AWS S3**: Scalable static hosting

### Environment Variables in Production
Make sure to set these in your hosting platform:
- `VITE_API_URL` - Your production backend URL

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👨‍💻 Author

**Vedant Shetti**
- GitHub: [@vedantshetti](https://github.com/vedantshetti)
- LinkedIn: [Vedant Shetti](https://linkedin.com/in/vedantshetti)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- OpenAI for GPT-4 API
- Twitter for API access
- All contributors and users

---

**Made with ❤️ for healthier social media**
