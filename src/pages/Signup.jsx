import { useState } from "react";
import { UserPlusIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  FaGoogle,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
      <div className="bg-[#1E293B] rounded-xl p-8 shadow-lg max-w-md w-full mx-4">
        <div className="mb-6 text-center">
          <UserPlusIcon className="h-10 w-10 text-emerald-500 mx-auto mb-2" />
          <h2 className="text-3xl font-semibold text-white mb-2">Create your account</h2>
          <p className="text-gray-400 text-sm">Join the health verification community today.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-400 text-xs mb-1">Username</label>
            <input
              type="text"
              className="w-full p-3 rounded-md bg-[#0B1120] text-white focus:outline-emerald-500"
              placeholder="Choose a username"
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-[#0B1120] text-white focus:outline-emerald-500"
              placeholder="Enter your email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-md bg-[#0B1120] text-white focus:outline-emerald-500"
              placeholder="Create a password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-white w-full py-3 rounded-md flex items-center justify-center gap-2 font-semibold"
          >
            Sign Up
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-700" />
          <span className="mx-3 text-gray-400 text-xs">OR</span>
          <div className="flex-grow h-px bg-gray-700" />
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-center gap-3 bg-[#0B1120] hover:bg-[#273449] transition-colors text-gray-100 py-2.5 rounded-md">
            <FaGoogle className="text-emerald-500" size={20} />
            Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 bg-[#0B1120] hover:bg-[#273449] transition-colors text-gray-100 py-2.5 rounded-md">
            <FaLinkedinIn className="text-emerald-500" size={20} />
            Sign up with LinkedIn
          </button>
          <button className="w-full flex items-center justify-center gap-3 bg-[#0B1120] hover:bg-[#273449] transition-colors text-gray-100 py-2.5 rounded-md">
            <FaGithub className="text-emerald-500" size={20} />
            Sign up with GitHub
          </button>
        </div>
        <p className="mt-8 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-400 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
