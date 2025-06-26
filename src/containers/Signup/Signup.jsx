import React from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css"

const Signup = () => {
  return (
    <div className="su-container">
      <div className="su-box">
        <h2>Create Account</h2>
        <form>
          <div className="su-form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="su-form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="su-form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="su-btn">Sign Up</button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/login" className="su-link">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup