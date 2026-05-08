"use client";

import React from "react";
import "../globals.css";
import axios from "axios";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/forgot-password", { email });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="forgot-main flex align-items-center justify-content-center">
      <section id="auth" className="flex direction-column">
        <div className="panel login flex direction-column">
          <h1 className="flex justify-content-center">
            <img
              src="/img/instagram-logo.png"
              alt="Instagram"
              className="instagram-logo"
            />
          </h1>

          <h2 className="forgot-heading">Find Your Account</h2>


          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email, phone, or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Reset Password</button>
          </form>
        </div>

        <div className="panel register flex justify-content-center">
          <Link href="/">Back to Login</Link>
        </div>

        {/* App Download */}
        <div className="app-download flex direction-column align-items-center">
          <p>Get the app.</p>

          <div className="flex justify-content-center">
            <img
              src="/img/apple-button.png"
              alt="Apple Store"
              className="store-btn"
            />

            <img
              src="/img/googleplay-button.png"
              alt="Google Play"
              className="store-btn"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
