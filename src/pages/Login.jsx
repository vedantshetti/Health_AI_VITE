import { useState } from "react";
import { LockClosedIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { FaGoogle, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setAuthLoading,
  setAuthError,
  setUser,
  clearAuthError,
} from "../store/authSlice";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(state => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setAuthLoading(true));
    dispatch(clearAuthError());
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, form);
      dispatch(setUser({ user: res.data.user, token: res.data.tokens.accessToken }));
      dispatch(setAuthLoading(false));
      navigate("/");
    } catch (err) {
      dispatch(setAuthError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Login failed"
      ));
      dispatch(setAuthLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
      <div className="bg-[#1E293B] rounded-xl p-8 shadow-lg max-w-md w-full mx-4">
        <div className="mb-6 text-center">
          <LockClosedIcon className="h-10 w-10 text-emerald-500 mx-auto mb-2" />
          <h2 className="text-3xl font-semibold text-white mb-2">Log in to your account</h2>
          <p className="text-gray-400 text-sm">Continue tracking, analyzing, and verifying health claims.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-400 text-xs mb-1">Username</label>
            <input
              type="text"
              className="w-full p-3 rounded-md bg-[#0B1120] text-white focus:outline-emerald-500"
              placeholder="Enter your username"
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-md bg-[#0B1120] text-white focus:outline-emerald-500"
              placeholder="Enter your password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-white w-full py-3 rounded-md flex items-center justify-center gap-2 font-semibold"
          >
            {loading ? "Logging in..." : "Log In"}
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </form>
        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-700" />
          <span className="mx-3 text-gray-400 text-xs">OR</span>
          <div className="flex-grow h-px bg-gray-700" />
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={`${API_BASE_URL}/api/auth/google`}
            className="w-full flex items-center justify-center gap-3 bg-[#0B1120] hover:bg-[#273449] transition-colors text-gray-100 py-2.5 rounded-md"
          >
            <FaGoogle className="text-emerald-500" size={20} />
            Continue with Google
          </a>
          <button className="w-full flex items-center justify-center gap-3 bg-[#0B1120] hover:bg-[#273449] transition-colors text-gray-100 py-2.5 rounded-md" disabled>
            <FaLinkedinIn className="text-emerald-500" size={20} />
            Continue with LinkedIn
          </button>
          <a
            href={`${API_BASE_URL}/api/auth/github`}
            className="w-full flex items-center justify-center gap-3 bg-[#0B1120] hover:bg-[#273449] transition-colors text-gray-100 py-2.5 rounded-md"
          >
            <FaGithub className="text-emerald-500" size={20} />
            Continue with GitHub
          </a>
        </div>
        <p className="mt-8 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-emerald-400 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
