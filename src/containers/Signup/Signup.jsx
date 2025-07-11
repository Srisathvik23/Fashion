import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { sendSignupOtp, verifySignupOtp } from "../../services/authAPI";
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  // Send OTP to user
const handleSignup = async (e) => {
  e.preventDefault();
  try {
    await sendSignupOtp(user);
    alert("OTP sent!");
    setShowOtp(true);
  } catch (err) {
    alert("Signup failed");
  }
};

  // Verify OTP
const handleVerifyOtp = async () => {
  try {
    const res = await verifySignupOtp(user.email, otp);
    alert("Signup successful!");
    navigate("/login");
  } catch (err) {
    alert("Invalid OTP");
  }
};

  return (
    <div className="su-container">
      <div className="su-box">
        <h2>Create Account</h2>

        {!showOtp ? (
          <form onSubmit={handleSignup}>
            <div className="su-form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
            </div>

            <div className="su-form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>

            <div className="su-form-group">
              <label>Phone</label>
              <input
                placeholder="Enter your phone number"
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                required
              />
            </div>

            <button type="submit">Send OTP</button>
          </form>
        ) : (
          <div className="su-otp-section">
            <label>Enter OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
          </div>
        )}

        <p>
          Already have an account?{" "}
          <Link to="/login" className="su-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
