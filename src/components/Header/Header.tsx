import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import user from "../img/user2.png";
import styles from "./Header.module.css";


const Header: React.FC = () => {
  const role = "admin";
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleViewProfile = () => {
    navigate("/viewprofile");
  }
  const handleHomePage = () => {
    navigate("/")
  }

  const handleSignOut = () => {
    // Clear user data from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("success");

    // Redirect to login page
    navigate("/login");
  };

  const renderDropdownItems = () => {
   console.log( localStorage.getItem("email"));
   
    if ( localStorage.getItem("email") === "admin@example.com") {
      return (
        <>
          <NavLink to="" className={styles.disabled}>Profile</NavLink>
          <NavLink to="" className={styles.disabled}>Manage Profiles</NavLink>
          <NavLink to="" className={styles.disabled}>Manage Destinations</NavLink>
          <NavLink to="" className={styles.disabled}>Manage Blogs and Posts</NavLink>
          <NavLink to="" className={styles.disabled}>Notifications</NavLink>
          <NavLink to="" className={styles.disabled}>Account Info</NavLink>
          <NavLink to="/login" onClick={handleSignOut}>
            Sign Out
          </NavLink>
        </>
      );
    }
    return (
      <>
        <NavLink to="/viewprofile" onClick={handleViewProfile} >Profile</NavLink>
        <NavLink to="" className={styles.disabled} >Write a Review</NavLink>
        <NavLink to="" className={styles.disabled}>Notifications</NavLink>
        <NavLink to="" className={styles.disabled}>Account Info</NavLink>
        <NavLink to="/login" onClick={handleSignOut}>
          Sign Out
        </NavLink>
      </>
    );
  };

  return (
    <div className={styles.header}>
      <button onClick={toggleSidebar} className={styles.btn_icon_header}>
        &#9776;
      </button>
      <div className={styles.logo_header}>
        <img src={logo} alt="Logo GN" className={styles.img_logo_header} />
      </div>
      <nav
        className={`${styles.navigation_header} ${
          showSidebar ? styles.show : ""
        }`}
      >
        <div className={styles.button_div}>
          <button onClick={toggleSidebar} className={styles.btn_icon_header}>
            &#9747;
          </button>
        </div>
        <div className={styles.div}>
          <NavLink to="/home" className={styles.active}>
            Home
          </NavLink>
          <NavLink to="">Plan</NavLink>
          <NavLink to="">Blogs</NavLink>
          <NavLink to="">About</NavLink>
        </div>
      </nav>
      {/* <div className={styles.user_name}>
        <span>Hi {localStorage.getItem("email")}</span>
      </div> */}
      <div className={styles.profile}>
        <img src={user} alt="User" onClick={toggleDropdown} />
        {showDropdown && (
          <div className={styles.dropdown}>
            <div className={styles.profile_img_container}>
              <div className={styles.profile_img_div}>
                <img src={user} alt="User" />
              </div>
              <div className={styles.user_details}>
                <h4>user</h4>
                <h5>{localStorage.getItem("email")}</h5>
              </div>
            </div>
            <div className={styles.items}>{renderDropdownItems()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
