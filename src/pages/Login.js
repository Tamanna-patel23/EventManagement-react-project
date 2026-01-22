import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      {/* Left Side Event Section */}
      <div className="login-left">
        <h1>Welcome to EventHub 🎉</h1>
        <p>Book tickets for your favorite matches, concerts, and events — all in one place.</p>
        <img
          src="https://images.unsplash.com/photo-1511798616182-aab3698ac53e" 
          alt="Event Banner"
        />
      </div>

      {/* Right Side Form */}
      <div className="login-right">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Enter Email" required />
            <input type="password" placeholder="Enter Password" required />
            <button type="submit" className="login-btn">Login</button>
          </form>

          <div className="divider">or</div>

          <div className="social-login">
            <button className="google">Login with Google</button>
            <button className="facebook">Login with Facebook</button>
          </div>

          <p className="signup-link">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
