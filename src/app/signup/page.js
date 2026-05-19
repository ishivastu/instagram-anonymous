"use client";

import React from "react";
import "../globals.css";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);

  const [data, setData] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/signup", data);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex align-items-center justify-content-center">
      <section id="auth" className="flex direction-column">
        <div className="panel login flex direction-column">
          <h1 className="flex justify-content-center">
            <img src="/img/instagram-logo.png" alt="Instagram" />
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="panel register flex justify-content-center">
          <p>Already have an account?</p>

          <a href="/">Log in</a>
        </div>
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
