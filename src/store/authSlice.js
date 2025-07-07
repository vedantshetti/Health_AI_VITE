import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('token');

const initialState = {
  user: user || null,
  token: token || null,
  loading: false,
  error: null,
  registerSuccess: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading: (state, action) => { state.loading = action.payload; },
    setAuthError: (state, action) => { state.error = action.payload; },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    setRegisterSuccess: (state, action) => { state.registerSuccess = action.payload; },
    clearAuthError: (state) => { state.error = null; },
    clearRegisterSuccess: (state) => { state.registerSuccess = false; }, // <-- Add this line
  },
});

export const {
  setAuthLoading,
  setAuthError,
  setUser,
  clearAuth,
  setRegisterSuccess,
  clearAuthError,
  clearRegisterSuccess, // <-- And export it here
} = authSlice.actions;

export default authSlice.reducer;
