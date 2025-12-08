# Verify Influencers - Frontend

A modern React application for browsing, analyzing, and verifying health claims made by social media influencers.

## 🚀 Features

- **User Authentication** - Secure login/signup with JWT, Google & GitHub OAuth
- **Dashboard** - Overview of influencers, claims, and trust scores
- **Influencer Browser** - Search, filter, and explore health influencers
- **Claim Verification** - View AI-verified health claims with scientific references
- **Leaderboard** - Ranked list of influencers by trust score
- **Research Tasks** - Collaborate on verifying questionable claims
- **Responsive Design** - Works seamlessly on desktop and mobile

## 📋 Prerequisites

- Node.js v16+ and npm
- Running backend API (see Verify-Backend)

## 🛠️ Installation

1. **Install dependencies**
```bash
npm install
```

2. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

3. **Start development server**
```bash
npm run dev
```

The app will start on `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
npm run preview  # Preview production build
```

## 📱 Pages & Routes

### Public Routes
- `/` - Landing page
- `/login` - User login
- `/signup` - User registration
- `/verify-email/:token` - Email verification

### Protected Routes (Require Authentication)
- `/dashboard` - Main dashboard
- `/influencers` - Browse influencers
- `/influencers/:id` - Influencer profile
- `/claims` - View claims
- `/leaderboard` - Rankings
- `/research-tasks` - Research tasks

## 🎨 Tech Stack

- **React 18** + **Vite**
- **Redux Toolkit** - State management
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Axios** - API calls

## 📦 Key Directories

- `src/services/` - API service layer
- `src/pages/` - Route components
- `src/components/` - Reusable UI
- `src/store/` - Redux store

## 🚀 Deployment

Recommended: **Vercel** or **Netlify**

Build command: `npm run build`
Publish directory: `dist`

## 👥 Author

Vedant Shetti
