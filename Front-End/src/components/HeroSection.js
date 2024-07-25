import React from "react";
import "../styles.css";
import globe from "./images/india.png"; // Path to your image
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Herobabyhome" >
        <img className="top-globe" style={{bottom:'-60%', maxWidth:'100%'}} src={globe} alt="Globe" />
        <div className="hero-sectionhome">
          <h1 style={{color:'#B7B7B7', paddingTop:'150px'}}>ENDLESS PAYMENT OPTIONS</h1>
          <button
            className="get-started-btnhome" style={{backgroundColor:'white',color:'#810CA8', fontSize:'40px', fontWeight:'200'}}
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="video-sectionhome" style={{marginTop:'-170px',paddingBottom:'120px', opacity:'90%'}}>
        <iframe
          src="https://www.youtube.com"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          
          ></iframe>
      </div>
    
    </div>
  );
};

export default HeroSection;
