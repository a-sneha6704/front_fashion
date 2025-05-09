import { Menu } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navlink } from "../data/dummydata";
import logo from "../data/images/logo_logo.png";

// Import predefined avatars
import avatar1 from "../data/Avatar/avatar_1.jpeg";
import avatar2 from "../data/Avatar/avatar_2.jpeg";
import avatar3 from "../data/Avatar/avatar_3.jpeg";
import avatar4 from "../data/Avatar/avatar_4.jpeg";
import avatar5 from "../data/Avatar/avatar_5.jpeg";
import avatar6 from "../data/Avatar/avatar_6.jpeg";
import avatar7 from "../data/Avatar/avatar_7.jpeg";
import avatar8 from "../data/Avatar/avatar_8.jpeg";
import avatar9 from "../data/Avatar/avatar_9.jpeg";
import avatar10 from "../data/Avatar/avatar_10.jpeg";
import avatar11 from "../data/Avatar/avatar_11.jpeg";
import avatar12 from "../data/Avatar/avatar_12.jpeg";
import avatar13 from "../data/Avatar/avatar_13.jpeg";
import avatar14 from "../data/Avatar/avatar_14.jpeg";
import avatar15 from "../data/Avatar/avatar_15.jpeg";
import avatar16 from "../data/Avatar/avatar_16.jpeg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8,avatar9,avatar10,avatar11,avatar12,avatar13,avatar14,avatar15,avatar16];

export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const [showNavDropdown, setShowNavDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showAvatarSelection, setShowAvatarSelection] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);

  const navigate = useNavigate();
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem("Users");
      setIsLoggedIn(!!user);
    };
    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  useEffect(() => {
    const storedProfileImage = localStorage.getItem("profileImage");
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
        setShowAvatarSelection(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        localStorage.setItem("profileImage", imageData);
        setProfileImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarSelect = (avatar) => {
    localStorage.setItem("profileImage", avatar);
    setProfileImage(avatar);
    setShowAvatarSelection(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("Users");
    localStorage.removeItem("profileImage");
    setProfileImage(null);
    setIsLoggedIn(false);
    setShowProfileDropdown(false);
    navigate("/");
  };

  const toggleProfileDropdown = (e) => {
    e.stopPropagation();
    setShowProfileDropdown((prev) => !prev);
  };

  return (
    <header>
      <div className="container flexsb">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" data-aos="zoom-in-right" />
        </div>

        <nav className={responsive ? "nav open" : "nav"}>
          {navlink.map((links, i) =>
            links.dropdown ? (
              <div className="dropdown" key={i} onClick={() => setShowNavDropdown(!showNavDropdown)}>
                <span data-aos="zoom-in-left">{links.text}</span>
                {showNavDropdown && (
                  <div className="dropdown-menu">
                    {links.dropdown.map((item, j) => (
                      <Link to={item.url} key={j} data-aos="zoom-in-left" onClick={() => setShowNavDropdown(false)}>
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link to={links.url} key={i} data-aos="zoom-in-left">
                {links.text}
              </Link>
            )
          )}

          {isLoggedIn ? (
            <>
              <Link to="/cart" className="cart-btn" data-aos="zoom-in-left">
                🛒 
              </Link>

              <div className="profile-container" ref={profileDropdownRef}>
                <button className="profile-btn" onClick={toggleProfileDropdown} aria-expanded={showProfileDropdown}>
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="profile-image"
                      style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                    />
                  ) : (
                    "👤"
                  )}
                </button>

                {showProfileDropdown && (
                  <div className="dropdown-menu profile-dropdown">
                    <Link to="/userprofile" className="dropdown-item profile-link" onClick={() => setShowProfileDropdown(false)}>
                      View Profile
                    </Link>

                    <label className="dropdown-item profile-change-btn">
                      Change Profile Image
                      <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleProfileChange} />
                    </label>

                    <button onClick={() => setShowAvatarSelection(true)} className="dropdown-item choose-avatar-btn" style={{background:"white"}}>
                      Choose Avatar
                    </button>

                    <button onClick={handleLogout} className="dropdown-item logout-btn">
                      Logout
                    </button>
                  </div>
                )}

                {showAvatarSelection && (
                  <div className="avatar-popup">
                    <h3>Select Your Avatar</h3>
                    <div className="avatar-list">
                      {avatars.map((avatar, index) => (
                        <img
                          key={index}
                          src={avatar}
                          alt={`Avatar ${index + 1}`}
                          className="avatar-option"
                          onClick={() => handleAvatarSelect(avatar)}
                        />
                      ))}
                    </div>
                    <button className="close-avatar-popup" onClick={() => setShowAvatarSelection(false)}>Close</button>
                  </div>
                )}

              </div>
            </>
          ) : (
            <button className="signup-btn" onClick={() => navigate("/user/signup")} data-aos="zoom-in-left">
              Signup
            </button>
          )}
        </nav>

        <button className="toggle" onClick={() => setResponsive(!responsive)} aria-expanded={responsive}>
          <Menu className="icon" />
        </button>
      </div>
    </header>
  );
};
