import React, { useState } from "react";
import "../styles.css";

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs-sectionhome">
      <h2>FAQs</h2>
      <ul>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(0)}>
            <h3>How Safe is My Data with GardenPay?</h3>
            <span className="toggle-iconhome">
              {openIndex === 0 ? "-" : "+"}
            </span>
          </div>
          {openIndex === 0 && (
            <p>
              GardenPay safeguards data with cutting-edge blockchain encryption, guaranteeing the highest level of security and privacy.
            </p>
          )}
        </li>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(1)}>
            <h3>Can GardenPay Manage Multi-Currency Transactions?</h3>
            <span className="toggle-iconhome">
              {openIndex === 1 ? "-" : "+"}
            </span>
          </div>
          {openIndex === 1 && (
            <p>
              Absolutely! GardenPay enables multi-currency transactions, ideal for global businesses.
            </p>
          )}
        </li>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(2)}>
            <h3>How does GardenPay Maintain Compliance with Local Regulations?</h3>
            <span className="toggle-iconhome">
              {openIndex === 2 ? "-" : "+"}
            </span>
          </div>
          {openIndex === 2 && (
            <p>
              GardenPay automatically incorporates local and international payroll regulations into the system, ensuring your business remains compliant effortlessly.
            </p>
          )}
        </li>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(3)}>
            <h3>
            How Can I Start Using GardenPay?</h3>
            <span className="toggle-iconhome">
              {openIndex === 3 ? "-" : "+"}
            </span>
          </div>
          {openIndex === 3 && (
            <p>
              Starting is easy: sign up, integrate with your current systems, and begin processing payroll right away.
            </p>
          )}
        </li>
      </ul>
    </section>
  );
};

export default FAQsSection;
