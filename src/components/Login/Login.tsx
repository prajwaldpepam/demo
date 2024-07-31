import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    const payload = {
      email: email,
      password: password,
    };

    console.log("Request Payload:", payload);

    try {
      const response = await axios.post("https://stest76.azurewebsites.net/api/Auth/login", payload);
      console.log("Login response:", response.data);
      // Handle successful login, e.g., redirect to another page or save token
    } catch (err: any) {
      if (err.response) {
        console.error("Login error response data:", err.response.data);
        console.error("Login error response status:", err.response.status);
        console.error("Login error response headers:", err.response.headers);
        setError(err.response.data.message || "Login failed. Please try again.");
      } else if (err.request) {
        console.error("Login error request:", err.request);
        setError("No response from the server. Please try again later.");
      } else {
        console.error("Login error message:", err.message);
        setError("Login failed. Please try again.");
      }
      console.error("Login error config:", err.config);
    }
  };

  return (
    <div className="background">
      <div className="app">
        <div className="left-container">
          <div className="login-container">
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="show-password">
                <input
                  type="checkbox"
                  id="show-password"
                  checked={showPassword}
                  onChange={handleShowPasswordChange}
                />
                <label htmlFor="show-password">Show Password</label>
              </div>
              {error && <div className="error-message">{error}</div>}
              <div className="login-button">
                <button type="submit">LOGIN</button>
              </div>
              <Link to="/registration" className="action">
                Don't have an account? Register here
              </Link>
            </form>
          </div>
        </div>
        <div className="right-container">
          <div className="quote-container">
            <div>
              <h1>THE GOAL OF LIFE IS LIVING IN</h1>
            </div>
            <div>
              <h1>AGREEMENT WITH NATURE.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
