import React from "react";
import "./Footer.css";
import logo from "../img/FooterImg.png";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
const Footer: React.FC = () => {
  return (
    <div className="main-container">
      <footer>
        <div className="contact-info">
          <img src={logo} alt="logo" />
          <div className="address-div">
            <p>
              SALARPURIA SATTVA KNOWLEDGE CITY, Salarpuria Sattva Knowledge
              City, Hyderabad,
              Telangana 500081
            </p>
          </div>
        </div>

        <div className="company-info">
          <h3>Company</h3>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="popular-destinations">
          <h3>Popular destination</h3>
          <div className="destination-subcontainer">
            <ul>
              <li>Indonesia</li>
              <li>India</li>
              <li>France</li>
              <li>Italy</li>
            </ul>
            <ul>
              <li>America</li>
              <li>Switzerland</li>
              <li>Canada</li>
              <li>England</li>
            </ul>
          </div>
        </div>

        <div className="img-section">
          <h3>Instagram</h3>
          <div className="img-div">
            <div>
              <img src={img1}></img>
              <img src={img2}></img>
              <img src={img3}></img>
            </div>
            <div>
              <img src={img4}></img>
              <img src={img5}></img>
              <img src={img6}></img>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          Team 4
        </p>
      </div>
    </div>
  );
};

export default Footer;
