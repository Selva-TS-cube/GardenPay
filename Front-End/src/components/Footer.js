import React from "react";
import { Link } from "react-router-dom";
import facebook from "./images/Facebook.png";
import Instagram from "./images/Instagram.png";
import X from "./images/X.png";
import Linkedin from "./images/Linkedin.png";

const Footer = () => {
  return (
    <footer>
      <style>
        {`
        /* Footer Styles */
        footer {
        border-radius: 25px 25px 0px 0px;
          background: #8647C5;
          color: #ffffff;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-logo {
          font-size: 2em;
          margin-bottom: 20px;
        }

        .footer-nav {
          margin: 20px 0;
        }

        .footer-nav a {
          color: #ffffff;
          text-decoration: none;
          margin: 0 15px;
          font-size: 1.1em;
        }

        .footer-nav a:hover {
          text-decoration: underline;
        }

        .footer-social {
          margin: 20px 0;
        }

        .footer-social span {
          display: block;
          margin-bottom: 10px;
        }

        .social-icons {
          display: flex;
          justify-content: center;
        }

        .social-icon {
          width: 30px;
          margin: 0 10px;
        }

        .footer-bottom {
          margin-top: 20px;
        }

        .footer-bottom p {
          margin: 5px 0;
        }

        .footer-policy {
          font-size: 1em;
        }
        `}
      </style>
      <div className="footer-content">
        <div className="footer-logo">GardenPay</div>

        <nav className="footer-nav">
          <Link to="/about-us">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>

        <div className="footer-social">
          <span>Let's get social:</span>
          <div className="social-icons">
            <img className="social-icon" src={Linkedin} alt="Linkedin" />
            <img className="social-icon" src={facebook} alt="Facebook" />
            <img className="social-icon" src={X} alt="X" />
            <img className="social-icon" src={Instagram} alt="Instagram" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 GardenPay @WREAKVERSE. All Rights Reserved.</p>
        <p className="footer-policy">Privacy Policy . Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
