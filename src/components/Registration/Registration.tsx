import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styles from "./Registration.module.css"; // Import the CSS Module
import { Link, useNavigate } from "react-router-dom";

const Registration: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  // Create refs for input fields
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus on the email input field when the component mounts
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setValidationErrors([]);
      return;
    }

    setError(null); // Clear error if passwords match

    // Prepare the payload for the API request
    const payload = {
      email: email,
      password: password,
    };

    console.log("Request Payload:", payload);

    try {
      // Make the API request
      const response = await axios.post("https://api-team4-auth-avdxa5htacfdg2gj.westeurope-01.azurewebsites.net/api/Auth/register", payload);

      navigate("/home");
      // Handle successful registration
      setSuccess("Registration successful");
      console.log("Registration response:", response.data);
    } catch (err: any) {
      // Handle errors
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Registration error response data:", err.response.data);
        console.error("Registration error response status:", err.response.status);
        console.error("Registration error response headers:", err.response.headers);

        if (err.response.data.errors && Array.isArray(err.response.data.errors)) {
          setValidationErrors(err.response.data.errors.map((error: any) => error.message || "An error occurred"));
        } else {
          setError(err.response.data.message || "Registration failed. Please try again.");
          setValidationErrors([]);
        }
      } else if (err.request) {
        // The request was made but no response was received
        console.error("Registration error request:", err.request);
        setError("No response from the server. Please try again later.");
        setValidationErrors([]);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Registration error message:", err.message);
        setError("Registration failed. Please try again.");
        setValidationErrors([]);
      }
      console.error("Registration error config:", err.config);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.app}>
        <div className={styles.leftContainer}>
          <div className={styles.loginContainer}>
            <h2>REGISTRATION</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  ref={emailRef} // Attach ref to email input
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  minLength={8}
                  ref={passwordRef} // Attach ref to password input
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  ref={confirmPasswordRef} // Attach ref to confirm password input
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
              {validationErrors.length > 0 && (
                <ul className={styles.errorMessage}>
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              )}
              {success && <div className={styles.successMessage}>{success}</div>}
              <div className={styles.loginButton}>
                <button type="submit">REGISTER</button>
              </div>
              <Link to="/" className={styles.action}>
                Already have an account? Login here
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

export default Registration;
