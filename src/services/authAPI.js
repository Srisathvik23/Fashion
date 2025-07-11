import axios from "axios";

const BASE_URL = "http://localhost:3000/auth";

// Send OTP for Signup
export const sendSignupOtp = async (user) => {
  return await axios.post(`${BASE_URL}/signup`, user);
};

// Verify OTP for Signup
export const verifySignupOtp = async (email, otp) => {
  return await axios.post(`${BASE_URL}/verify-otp`, { email, otp });
};

// Send OTP for Login
export const sendLoginOtp = async (emailOrPhone) => {
  return await axios.post(`${BASE_URL}/login`, emailOrPhone);
};

// Verify OTP for Login
export const verifyLoginOtp = async (email, otp) => {
  return await axios.post(`${BASE_URL}/login/verify`, { email, otp });
};
