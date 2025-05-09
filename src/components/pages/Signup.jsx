import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Signup = ({ onClose }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fullname || !email || !password) {
      toast.error("All fields are required!");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }
    if (password.length < 6) {
      window.alert("Password must be at least 6 characters long!");
      return;
    }
  
    const userInfo = { fullname, email, password };
  
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
  
      if (res.data.status) {
        window.alert("Signup Successful! Please log in.");
        toast.success(res.data.message || "Signup Successful!");
        navigate("/user/login");  // Redirect to login page instead of home
      } else {
        toast.error(res.data.message || "Signup failed! Please try again.");
      }
    }  catch (err) {
      if (err.response?.status === 400 && err.response?.data?.message === "User already exists") {
        window.alert("User already exists! Please log in.");
      } else {
        toast.error(err.response?.data?.message || "Something went wrong!");
      }
    }
  };
  

  const handleClose = () => {
    if (onClose) {
      onClose(); // Close the form if the function is provided
    }
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="signup-overlay">
      <div className="signup-card">
        <button className="close-button" onClick={handleClose}>×</button>
        <h2 className="signup-title">Signup</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <label>Name</label>
            <div className="input-box">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Enter your fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
          </div>
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
          <button type="submit" className="signup-button">Signup</button>
        </form>
        <p className="login-text">Have account? <a href="/user/login">Login</a></p>
      </div>
    </div>
  );
};
