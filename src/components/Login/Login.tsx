import React, { useState, useRef  ,useEffect} from "react";
import axios from "axios";
import styles from "./Login.module.css"; // Import the CSS module
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element when the component mounts
    }
  }, []);

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

    try {
      const response = await axios.post("https://api-team4-auth-avdxa5htacfdg2gj.westeurope-01.azurewebsites.net/api/Auth/login", payload);
      const { token, userId, email } = response.data;

      // Store user ID and token in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("email", email);
      
      if (email === "admin@example.com") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
      console.log("Login response:", response.data);
      // Handle successful login, e.g., redirect to another page or save token
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data.message || "Login failed. Please try again.");
      } else if (err.request) {
        setError("No response from the server. Please try again later.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.app}>
        <div className={styles.leftContainer}>
          <div className={styles.loginContainer}>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  ref={inputRef}
                  onChange={handleEmailChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className={styles.showPassword}>
                <input
                  type="checkbox"
                  id="show-password"
                  checked={showPassword}
                  onChange={handleShowPasswordChange}
                />
                <label htmlFor="show-password">Show Password</label>
              </div>
              {error && <div className={styles.errorMessage}>{error}</div>}
              <div className={styles.loginButton}>
                <button type="submit">LOGIN</button>
              </div>
              <Link to="/registration" className={styles.action}>
                Don't have an account? Register here
              </Link>
            </form>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.quoteContainer}>
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
