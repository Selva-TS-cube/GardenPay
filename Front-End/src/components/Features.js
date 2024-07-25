import React from "react";
import { useNavigate } from "react-router-dom";
import facebook from "./images/Facebook.png";
import Instagram from "./images/Instagram.png";
import X from "./images/X.png";
import Linkedin from "./images/Linkedin.png";

const Features = () => {
  const navigate = useNavigate();

  return (
    <div>
      <style>
        {`
        /* Global Styles */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #0e1520 10%, #131b2b 50%, #182335 100%);
          color: #ffffff;
        }
        
        /* Features Page Styles */
        .features-page {
          text-align: left;
          padding: 20px;
          animation: fadeIn 1.5s ease-in-out;
        }

        .backtohome {
          background-color: #093336;
          color: #ffffff;
          border-radius: 5px;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          float: right;
          margin: 20px;
          font-size: 16px;
        }

        .header {
          padding: 40px;
          text-align: center;
        }
        
        .header-title {
          font-size: 2.5em;
          margin: 0;
          color: #0d99ff;
        }
        
        .content {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .feature-item {
          margin-bottom: 40px;
          animation: slideInUp 1s ease-out;
        }
        
        .feature-title {
          font-size: 2em;
          margin: 20px 0 10px;
          color: #0d99ff;
        }
        
        .feature-paragraph {
          font-size: 1.2em;
          margin: 10px 0 20px;
          line-height: 1.6;
        }
        
        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        footer {
          background: #0e1520;
          padding: 20px;
          color: #ffffff;
        }

        .footerhome {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footerhome .logohome {
          font-size: 24px;
          font-weight: bold;
        }

        .footerhome nav a {
          margin: 0 15px;
          text-decoration: none;
          color: #ffffff;
          font-size: 18px;
        }
        
        .footerhome nav a:hover {
          text-decoration: underline;
        }

        .footerhome .socialshome {
          display: flex;
          align-items: center;
        }

        .social-iconshome {
          width: 30px;
          margin-right: 10px;
        }

        .copyrighthome {
          text-align: center;
          margin-top: 20px;
        }

        .copyrighthome h6 {
          margin: 0;
          font-size: 14px;
        }

        .policyhome {
          margin-top: 10px;
          font-size: 16px;
        }

        .policyhome a {
          color: #0d99ff;
          text-decoration: none;
        }

        .policyhome a:hover {
          text-decoration: underline;
        }
        `}
      </style>
      <div className="features-page">
        <button className="backtohome" onClick={() => navigate("/")}>
          Home
        </button>

        <header className="header">
          <h1 className="header-title">Features of GardenPay</h1>
        </header>
        <section className="content">
          <div className="feature-item">
            <h2 className="feature-title">Real-Time Transactions</h2>
            <p className="feature-paragraph">
              Experience the speed and efficiency of real-time transactions. With GardenPay, payments are processed instantly, ensuring that your workforce receives their wages without any delays.
            </p>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">Immutable Records</h2>
            <p className="feature-paragraph">
              Our blockchain technology ensures that all records are immutable and transparent. Once recorded, transactions cannot be altered or tampered with, providing a secure and reliable payroll system.
            </p>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">Effortless Compliance</h2>
            <p className="feature-paragraph">
              GardenPay simplifies compliance with regulatory standards. Our platform is designed to ensure that all transactions meet legal requirements, reducing the burden on your payroll department.
            </p>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">Global Accessibility</h2>
            <p className="feature-paragraph">
              No matter where your employees are located, GardenPay provides global accessibility. Cross-border payments are made easy, ensuring that distance is no barrier to timely payroll processing.
            </p>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">User-Friendly Interface</h2>
            <p className="feature-paragraph">
              Our platform is designed with the user in mind. The intuitive interface makes it easy to manage payroll, track transactions, and generate reports, all from one convenient location.
            </p>
          </div>
        </section>
      </div>
      <footer>
        <div className="footerhome">
          <div className="logohome">GardenPay</div>

          <nav>
            <a href="/about-us">About</a>
            <a href="/features">Features</a>
            <a href="/contact-us">Contact Us</a>
          </nav>
          <div className="socialshome">
            <img className="social-iconshome" src={Linkedin} alt="LinkedIn" />
            <img className="social-iconshome" src={facebook} alt="Facebook" />
            <img className="social-iconshome" src={X} alt="X" />
            <img className="social-iconshome" src={Instagram} alt="Instagram" />
          </div>
        </div>
        <div className="copyrighthome">
          <h6>© 2024 GardenPay @WREAKVERSE. All Rights Reserved.</h6>
          <div className="policyhome">
            <a href="/privacy-policy">Privacy Policy</a> . <a href="/terms-conditions">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
