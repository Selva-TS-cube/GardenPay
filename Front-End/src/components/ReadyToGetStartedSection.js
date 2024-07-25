import React from "react";
import "../styles.css";
import Employer from "./images/empolyer.png";
import Employee from "./images/employee.png";
import { useNavigate } from "react-router-dom";

const ReadyToGetStartedSection = () => {
  const navigate = useNavigate();
  return (
    <section className="ready-to-get-started-sectionhome">
      <h2>Excited to Begin?</h2>
      <p>The Next Generation of Payroll is Here!</p>
      <div className="cardshome">
        <div className="cardhome">
          <img className="emprhome" style={{width:'300px'}} src={Employer} alt="" />
          <h3>Are you an Employer?</h3>
        
          <button
            className="get-started-btnhome"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
        <div className="cardhome">
          <br />
          <img className="emprhome" style={{width:'300px'}} src={Employee} alt="" />
          <h3>Are you an Employee?</h3>
          
          <button
            className="learn-more-btnhome"
            onClick={() => navigate("/about-us")}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStartedSection;
