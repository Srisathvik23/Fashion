import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert("OTP sent to your email!");
      localStorage.setItem("tempEmail", email);
      navigate("/verify");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="su-container">
      <div className="su-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="su-form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className="su-form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="su-form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="su-btn">Sign Up</button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/login" className="su-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
