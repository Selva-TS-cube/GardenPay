import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GardenPayLogo from "/Users/selvendrans/Documents/GardenPay/Front-End/src/icons/GardenPaywhite.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <style>
        {`
        /* Header Styles */
        header {
          border-radius: 0px 0px 90px 90px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #50227E;
          padding: 10px 40px;
          color: #ffffff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .logohome img {
          width: 160px;
          cursor: pointer;
        }

        nav ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        }

        nav ul li {
          margin: 0 15px;
        }

        nav ul li a {
          color: #ffffff;
          text-decoration: none;
          font-size: 25px;
        }

        nav ul li a:hover {
          text-decoration: underline;
        }

        .auth-linkshome {
          display: flex;
          align-items: center;
        }

        .auth-linkshome a {
          color: #ffffff;
          text-decoration: none;
          font-size: 20px;
          margin-left: 15px;
        }

        .auth-linkshome .register-btnhome {
          background-color: green;
          color: #ffffff;
          padding: 5px 15px;
          border-radius: 5px;
          border: none;
          font-weight: bold;
          text-align: center;
        }

        .auth-linkshome .register-btnhome:hover {
          background-color: darkgreen;
        }
        `}
      </style>
      <div className="logohome">
        <img src={GardenPayLogo} alt="GardenPay Logo" onClick={() => navigate("/")} />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="auth-linkshome">
        <Link to="/login">Sign In</Link>
        <Link to="/register" className="register-btnhome" style={{fontSize:'30px'}}>
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
