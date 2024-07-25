import React from "react";
import "../styles.css";
import Frame from "./images/Vector.png";

const CrossBorderPaymentsSection = () => {
  return (
    <section className="cross-border-payments-sectionhome" style={{border:'1px solid #fff', boxShadow:'0px 0px 10px 10px #723EA6'}}>
      <h2 style={{color:'#000', backgroundColor:'#fff'}}>Rapid International Payments</h2>
      <div className="world-maphome">
        <img id="map-imghome" src={Frame} alt="World Map" />
      </div>
    </section>
  );
};

export default CrossBorderPaymentsSection;
