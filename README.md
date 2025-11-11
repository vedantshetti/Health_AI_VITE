# Health AI VITE - Influencer Health Claims Verification Platform

> A comprehensive React-based platform for tracking health influencers and verifying their claims using AI and scientific research databases.

![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Overview

Health AI VITE is a modern web application that helps users verify health-related claims made by influencers on social media platforms. The platform uses AI-powered analysis and cross-references claims with peer-reviewed scientific journals to provide transparency and trust scores.

## ✨ Key Features

- **🔍 Claim Verification**: AI-powered verification of 25+ health claims with confidence scores
- **👥 Influencer Tracking**: Monitor 25+ health influencers across multiple categories
- **📊 Trust Scores**: Transparent scoring system based on claim accuracy
- **📚 Scientific References**: Cross-reference with 20+ peer-reviewed journals
- **🏆 Leaderboard**: Real-time ranking of influencers by credibility
- **🔬 Research Tasks**: Create custom research workflows with configurable parameters
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🌙 Dark Mode**: Full dark mode support
- **📈 Analytics**: Engagement metrics and trend analysis

## 📋 What You Can Get From This Repository

### 1. Complete Frontend Application
- Production-ready React application
- Modern UI with Tailwind CSS and shadcn/ui components
- Smooth animations with Framer Motion
- State management with Redux Toolkit

### 2. Rich Dataset
- **25+ Health Influencers** with profiles including:
  - Trust scores, follower counts, verified claims
  - Categories: Medicine, Nutrition, Mental Health, Neuroscience, Longevity, etc.
- **25+ Verified Health Claims** with:
  - Verification status (Verified, Questionable, Debunked)
  - Confidence scores, scientific references, AI analysis
  - DOI links to peer-reviewed publications
- **20+ Scientific Journals** including:
  - Nature, Science, The Lancet, JAMA, New England Journal of Medicine, etc.

### 3. Multiple Page Components
- **Landing Page**: Marketing page with features and testimonials
- **Influencer Leaderboard**: Sortable ranking table
- **Claims Explorer**: Searchable claims database
- **Influencer Profiles**: Detailed influencer information
- **Research Tasks**: Task management dashboard
- **Authentication**: Login and signup pages

### 4. Reusable UI Components
- Layout components (Header, Sidebar, Footer)
- Influencer cards and tables
- Claims table with filters
- Scientific journal selectors
- Research task forms
- Leaderboard components

### 5. Technical Implementation Examples
- React Router v7 navigation
- Redux state management
- API integration patterns (ready for backend)
- Form handling and validation
- CSV export functionality
- Responsive design patterns
- Animation implementations
- Dark mode theming

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/vedantshetti/Health_AI_VITE.git

# Navigate to project directory
cd Health_AI_VITE

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
Health_AI_VITE/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── claims/        # Claims-related components
│   │   ├── influencers/   # Influencer components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── leaderboard/   # Leaderboard components
│   │   └── research/      # Research task components
│   ├── pages/             # Page components
│   │   ├── LandingPage.jsx
│   │   ├── Claims.jsx
│   │   ├── Influencers.jsx
│   │   ├── InfluencerProfile.jsx
│   │   ├── InfluencerLeaderboard.jsx
│   │   ├── ResearchTasks.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── data/              # Static data
│   │   ├── claims.js      # 25+ health claims
│   │   └── influencers.js # 25+ influencer profiles
│   ├── store/             # Redux store configuration
│   ├── lib/               # Utility functions
│   ├── assets/            # Images and static assets
│   ├── App.jsx            # Main app component with routing
│   └── main.jsx           # Application entry point
├── public/                # Public assets
├── FEATURES.md            # Comprehensive feature documentation
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── components.json        # shadcn/ui configuration
```

## 🛠️ Tech Stack

### Core
- **React 18.3** - UI library
- **Vite 6.0** - Build tool
- **React Router 7.1** - Routing
- **Redux Toolkit 2.8** - State management

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **shadcn/ui** - Component library
- **Radix UI** - Accessible primitives
- **Framer Motion 12** - Animations

### Tools & Libraries
- **Axios** - HTTP client
- **date-fns** - Date utilities
- **export-to-csv** - Data export
- **Heroicons & Lucide** - Icon libraries
- **ESLint** - Code linting

## 📊 Available Data

### Influencers (25+)
Categories include:
- Medicine, Nutrition, Mental Health, Neuroscience
- Longevity, Cardiology, Diabetes, Functional Medicine
- Exercise Physiology, Endocrinology, Oncology
- Gut Health, Epigenetics, Biohacking, and more

### Claims (25+)
Topics covered:
- Cardiovascular health, Brain function, Metabolic health
- Gut-brain axis, Anti-aging, Inflammation
- Diet impacts, Exercise benefits, Sleep optimization
- And many more evidence-based health topics

### Scientific Journals (20+)
- New England Journal of Medicine
- Nature Medicine & Nature Neuroscience
- Science, Cell Metabolism, The Lancet
- JAMA Network, PubMed Central
- And other top-tier peer-reviewed journals

## 🎯 Use Cases

1. **For Researchers**: Access verified health claims and influencer analytics for academic studies
2. **For Brands**: Identify credible influencers for partnerships and campaigns
3. **For Users**: Verify health advice from social media before following recommendations
4. **For Developers**: Learn modern React patterns, state management, and UI design
5. **For Students**: Study real-world application architecture and component design

## 📖 Documentation

For a complete list of features and capabilities, see [FEATURES.md](./FEATURES.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- **Repository**: https://github.com/vedantshetti/Health_AI_VITE
- **Issues**: https://github.com/vedantshetti/Health_AI_VITE/issues

## 👨‍💻 Author

**Vedant Shetti**

## 🙏 Acknowledgments

- Icons by Heroicons and Lucide
- UI components from shadcn/ui and Radix UI
- Images from Unsplash

---

**Note**: This is a frontend application with mock data. For production use, integrate with a backend API for real-time data fetching, user authentication, and database storage.
