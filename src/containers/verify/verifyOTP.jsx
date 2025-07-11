import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const email = localStorage.getItem('tempEmail');

  const handleVerify = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Account verified! Please login.");
      localStorage.removeItem("tempEmail");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="su-container">
      <div className="su-box">
        <h2>Enter OTP</h2>
        <form onSubmit={handleVerify}>
          <div className="su-form-group">
            <label>OTP</label>
            <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
          </div>
          <button type="submit" className="su-btn">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
