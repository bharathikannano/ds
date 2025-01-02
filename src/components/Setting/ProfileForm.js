import React, { useState } from "react";
import "./ProfileForm.scss";

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Profile Updated!");
  };

  return (
    <div className="profile-form-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-image-section">
          <img
            src={profileImage || "https://via.placeholder.com/100"}
            alt="Profile"
            className="profile-image"
          />
          <label htmlFor="upload" className="edit-profile-image">
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </label>
          <input
            type="file"
            id="upload"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Charlene Reed" required />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input type="text" placeholder="Charlene Reed" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="charlenereed@gmail.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="********" required />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>Present Address</label>
            <input
              type="text"
              placeholder="San Jose, California, USA"
              required
            />
          </div>
          <div className="form-group">
            <label>Permanent Address</label>
            <input
              type="text"
              placeholder="San Jose, California, USA"
              required
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="San Jose" required />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" placeholder="45962" required />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" placeholder="USA" required />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
