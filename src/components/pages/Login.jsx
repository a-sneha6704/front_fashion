import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  // Added Loading State
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);  // Disable button while logging in

    try {
      const res = await axios.post("http://localhost:4001/user/login", {
        email,
        password,
      });

      if (res.data.status) {
        window.alert("Login Successful!");
        toast.success(res.data.message || "Login Successful!");

        // Store user info in localStorage
        localStorage.setItem("Users", JSON.stringify(res.data.data));

        // Update Header Component (Trigger Event)
        window.dispatchEvent(new Event("storage"));

        // Redirect to Home Page
        navigate("/");
      } else {
        window.alert("Invalid credentials! Try again."); 
        toast.error(res.data.message || "Invalid credentials! Try again.");
      }
    } catch (err) {
      window.alert("Username or Password is invalid!");
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);  // Enable button again
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    navigate("/");
  };

  return (
    <div className="signup-overlay"> 
      <div className="signup-card"> 
        <button className="close-button" onClick={handleClose}>×</button>
        <h2 className="signup-title">Login</h2>
        <form onSubmit={handleLogin} className="signup-form">
          <div className="form-group">
            <label>Email</label>
            <div className="input-box">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"} 
          </button>
        </form>
        <p className="login-text">
          Don't have an account? <a href="/user/signup">Signup</a>
        </p>
      </div>
    </div>
  );
};
