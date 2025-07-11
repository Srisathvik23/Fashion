import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Login/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login successful!");
      // You can store token or user info here
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="lg-container">
      <div className="lg-box">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <div className="lg-form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="lg-form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="lg-btn">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="lg-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
