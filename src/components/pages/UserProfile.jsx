import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const UserProfile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("Users")) || {};

  const [formData, setFormData] = useState({
    fullname: user.fullname || "",
    email: user.email || "",
    address: user.address || "",
    gender: user.gender || "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    localStorage.setItem("Users", JSON.stringify(formData));
    setIsEditing(false);
  };

  return (
    
      <div className="container-profile">
      <div className="profile-box">
        <h2 className="profile-title">Your Profile</h2>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            disabled
            className="input-field disabled"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled
            className="input-field disabled"
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
            className={`input-field ${isEditing ? "editable" : "disabled"}`}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            disabled={!isEditing}
            className={`input-field ${isEditing ? "editable" : "disabled"}`}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="button-group">
          {!isEditing ? (
            <button onClick={handleEdit} className="btn edit-btn">Edit</button>
          ) : (
            <button onClick={handleSave} className="btn save-btn">Save</button>
          )}

          <button onClick={() => navigate("/")} className="btn back-btn">
            Back to Home
          </button>
          </div>
        </div>
      </div>
    
  );
};

export default UserProfile;
