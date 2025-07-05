import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { label: "Influencers Tracked", value: "1,234" },
  { label: "Claims Verified", value: "25,431" },
  { label: "Avg. Trust Score", value: "85.7%" },
];

const features = [
  {
    title: "Real-Time Twitter Integration",
    desc: "Automatically pulls health-related posts from influencers.",
  },
  {
    title: "AI-Powered Claim Verification",
    desc: "Uses OpenCV and scientific databases to verify claims.",
  },
  {
    title: "Influencer Analytics",
    desc: "Trust scores, engagement metrics, and trend analysis.",
  },
  {
    title: "Scientific References",
    desc: "Cross-references claims with top journals.",
  },
  {
    title: "Transparent Scoring",
    desc: "Shows how trust scores and verifications are calculated.",
  },
  {
    title: "Advanced Search & Filters",
    desc: "Find influencers or claims by category, credibility, or date.",
  },
];

const testimonials = [
  {
    quote:
      "This platform is a game-changer for health research. The claim verification is transparent and reliable.",
    name: "Dr. A. Sharma",
    title: "Medical Researcher",
  },
  {
    quote:
      "Finally, a way to separate fact from fiction in health advice on social media.",
    name: "Priya Verma",
    title: "Wellness Blogger",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
};

export default function LandingPage() {
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-gray-900 dark:text-white"
      style={{
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Verify Health Claims from Top Influencers Instantly
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          Analyze, verify, and track health-related posts from Twitter
          influencers using AI and scientific research.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
        >
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i + 2}
            >
              <div className="text-3xl font-bold text-blue-600">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {[
            {
              icon: "🔎",
              title: "Collect Posts",
              desc: "Real-time ingestion of influencer tweets and posts.",
            },
            {
              icon: "🤖",
              title: "AI Verification",
              desc: "Claims are analyzed and verified using OpenCV and scientific literature.",
            },
            {
              icon: "📊",
              title: "Trusted Insights",
              desc: "Get transparent trust scores and analytics for every influencer.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="flex-1 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i + 1}
            >
              <div className="text-5xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-white dark:bg-gray-900 rounded-lg shadow p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i + 1}
            >
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          What Experts Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6 shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i + 1}
            >
              <p className="italic mb-4">"{t.quote}"</p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {t.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-16 px-2 sm:px-4 max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl font-bold mb-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Top Influencers
        </motion.h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <motion.table
            className="min-w-[600px] w-full text-left bg-white dark:bg-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <thead>
              <tr>
                <th className="py-2 px-4 whitespace-nowrap">Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Category</th>
                <th className="py-2 px-4 whitespace-nowrap">Trust Score</th>
                <th className="py-2 px-4 whitespace-nowrap">Recent Claim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 font-semibold whitespace-nowrap">
                  Dr. Andrew Huberman
                </td>
                <td className="py-2 px-4 whitespace-nowrap">Neuroscience</td>
                <td className="py-2 px-4 text-green-600 font-bold whitespace-nowrap">
                  92%
                </td>
                <td className="py-2 px-4 whitespace-nowrap">
                  "Sunlight boosts dopamine"
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold whitespace-nowrap">
                  Dr. Rhonda Patrick
                </td>
                <td className="py-2 px-4 whitespace-nowrap">Nutrition</td>
                <td className="py-2 px-4 text-green-600 font-bold whitespace-nowrap">
                  89%
                </td>
                <td className="py-2 px-4 whitespace-nowrap">
                  "Omega-3s support brain health"
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold whitespace-nowrap">
                  Dr. Peter Attia
                </td>
                <td className="py-2 px-4 whitespace-nowrap">Longevity</td>
                <td className="py-2 px-4 text-yellow-600 font-bold whitespace-nowrap">
                  84%
                </td>
                <td className="py-2 px-4 whitespace-nowrap">
                  "Zone 2 cardio for lifespan"
                </td>
              </tr>
            </tbody>
          </motion.table>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/leaderboard"
            className="text-blue-600 hover:underline font-semibold"
          >
            View Full Leaderboard
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Who Is This For?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Researchers",
              desc: "Access verified health claims and analytics for studies and reviews.",
            },
            {
              title: "Brands",
              desc: "Identify credible influencers for partnerships and campaigns.",
            },
            {
              title: "General Users",
              desc: "Stay informed about trustworthy health advice and avoid misinformation.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i + 1}
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Signup & Community */}
      <section className="py-16 px-4 bg-blue-50 dark:bg-gray-800 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Join the Health Verification Community
        </motion.h2>
        <motion.p
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          Sign up to access advanced analytics, claim verification, and more.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        >
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Sign Up Now
          </Link>
        </motion.div>
        <div className="mt-6">
          <span className="text-gray-600 dark:text-gray-300">
            Already have an account?
          </span>
          <Link
            to="/login"
            className="ml-2 text-blue-600 hover:underline font-semibold"
          >
            Log in
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-200 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-lg">VerifyInfluencers</span> &copy;{" "}
            {new Date().getFullYear()}
          </div>
          <div className="space-x-6">
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
            <Link to="/leaderboard" className="hover:text-blue-400">
              Leaderboard
            </Link>
            <Link to="/claims" className="hover:text-blue-400">
              Claims
            </Link>
            <Link to="/research-tasks" className="hover:text-blue-400">
              Research Tasks
            </Link>
            <Link to="/admin" className="hover:text-blue-400">
              Admin
            </Link>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-4">
          Privacy Policy | Terms of Service
        </div>
      </footer>
    </div>
  );
}
