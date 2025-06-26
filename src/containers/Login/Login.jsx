import React from 'react'
import { Link } from 'react-router-dom';
import "../Login/Login.css"

const Login = () => {
  return (
     <div className="lg-container">
      <div className="lg-box">
        <h2>Welcome Back!</h2>
        <form>
          <div className="lg-form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="lg-form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="lg-btn">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="lg-link">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login