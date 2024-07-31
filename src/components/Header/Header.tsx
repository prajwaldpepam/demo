import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.png"
import user from "../img/user.png";
import './Header.css';

const Header = ({  }) => {
    const role = "admin"
    const [showSidebar, setShowSidebar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const renderDropdownItems = () => {
        if (role !== 'admin') {
            return (
                <>
                    <NavLink to="">Manage Profiles</NavLink>
                    <NavLink to="">Manage Destinations</NavLink>
                    <NavLink to="">Profile</NavLink>
                    <NavLink to="">Manage Blogs and Posts</NavLink>
                    <NavLink to="">Notifications</NavLink>
                    <NavLink to="">Account Info</NavLink>
                    <NavLink to="">Sign Out</NavLink>
                </>
            );
        }
        return (
            <>
                <NavLink to="">Write a Review</NavLink>
                <NavLink to="">Profile</NavLink>
                <NavLink to="">Notifications</NavLink>
                <NavLink to="">Account Info</NavLink>
                <NavLink to="">Sign Out</NavLink>
            </>
        );
    };

    return (
        <>
            <div className="header" id="header">
                <button onClick={toggleSidebar} className="btn_icon_header">
                    &#9776;
                </button>
                <div className="logo_header">
                    <img src={logo} alt="Logo GN" className="img_logo_header" />
                </div>
                <nav className={`navigation_header ${showSidebar ? 'show' : ''}`} id="navigation_header">
                    <div className='button-div'>
                        <button onClick={toggleSidebar} className="btn_icon_header">
                            &#9747;
                        </button>
                    </div>
                    <div className="div">
                        <NavLink to="" className="active">Home</NavLink>
                        <NavLink to="">Plan</NavLink>
                        <NavLink to="">Blogs</NavLink>
                        <NavLink to="">About</NavLink>
                    </div>
                </nav>
                <div className="profile">
                    <img src={user} alt="User" onClick={toggleDropdown} />
                    {showDropdown && (
                        <div className="dropdown">
                            <div className='proflie-img-cointainer'>
                                <div className='proflie-img-div'>
                                    <img src={user} alt="User"/>
                                </div>
                                <div className='user-details'>
                                    <h4>user</h4>
                                    <h5>User@gmail.com</h5>
                                </div>
                            </div>
                            {renderDropdownItems()}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
