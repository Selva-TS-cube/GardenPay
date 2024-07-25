import React from "react";
import { useNavigate } from "react-router-dom";
import facebook from "../components/images/Facebook.png";
import Instagram from "../components/images/Instagram.png";
import X from "../components/images/X.png";
import Linkedin from "../components/images/Linkedin.png";

const ContactUs = () => {
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
        
        /* Contact Page Styles */
        .contact-page {
          padding: 20px;
          animation: fadeIn 1.5s ease-in-out;
        }
        
        .backtohome {
          background-color: #093336;
          color: #ffffff;
          border-radius: 5px;
          float: right;
          margin: 20px 40px 20px 0;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }

        .header {
          text-align: center;
          padding: 40px 0;
          margin-bottom: 20px;
        }
        
        .header-title {
          font-size: 2.5em;
          margin: 0;
          color: #0d99ff;
        }
        
        .header-subtitle {
          font-size: 1.2em;
          margin-top: 10px;
        }
        
        .contact-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .contact-info,
        .contact-form-container {
          width: 90%;
          max-width: 700px;
          margin-bottom: 40px;
        }
        
        .info-title,
        .form-title {
          font-size: 2em;
          margin: 20px 0 10px;
          color: #0d99ff;
        }
        
        .info-paragraph {
          font-size: 1.2em;
          margin: 10px 0;
        }
        
        .contact-methods {
          list-style: none;
          padding: 0;
          font-size: 1.2em;
        }
        
        .contact-methods li {
          margin: 10px 0;
        }
        
        .contact-form {
          background-color: #0e1520;
          padding: 20px;
          border-radius: 10px;
          animation: slideInUp 1s ease-out;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-size: 1em;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          background-color: #fff;
          color: #ffffff;
        }
        
        .submit-button {
          background-color: #4e4376;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1em;
        }
        
        .submit-button:hover {
          background-color: #2b5876;
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
          flex-direction: column;
          align-items: center;
        }
        
        .footerhome .logohome {
          font-size: 24px;
          font-weight: bold;
        }

        .footerhome nav a {
          margin: 10px;
          text-decoration: none;
          color: #ffffff;
          font-size: 18px;
        }
        
        .footerhome nav a:hover {
          text-decoration: underline;
        }

        .socialshome {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .social-iconshome {
          width: 30px;
          margin: 0 10px;
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
      <div className="contact-page">
        <button className="backtohome" onClick={() => navigate("/")}>
          Home
        </button>
        <header className="header">
          <h1 className="header-title">Contact Us</h1>
          <p className="header-subtitle">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </header>
        <section className="contact-content">
          <div className="contact-info">
            <h2 className="info-title">Get in Touch</h2>
            <p className="info-paragraph">
              Feel free to reach out to us through any of the following methods:
            </p>
            <ul className="contact-methods">
              <li>Email: support@gardenpay.com</li>
              <li>Phone: +91 8870805058</li>
              <li>Address: Baga Beach, Calangute, Goa 403519</li>
            </ul>
          </div>
          <div className="contact-form-container">
            <h2 className="form-title">Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
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

export default ContactUs;
