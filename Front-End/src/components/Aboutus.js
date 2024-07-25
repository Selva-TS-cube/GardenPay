import React from "react";
import styled from "styled-components";
import facebook from "../components/images/Facebook.png";
import Instagram from "../components/images/Instagram.png";
import X from "../components/images/X.png";
import Linkedin from "../components/images/Linkedin.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #0e1520 10%, #131b2b 50%, #182335 100%);
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

const Header = styled.header`
  background: #8647C5;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Button = styled.button`
  background-color: #093336;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const Section = styled.section`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #1f2a38;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 20px 0 10px;
  animation: slideInLeft 1s ease-out;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  margin: 10px 0 30px;
  line-height: 1.6;
  animation: slideInRight 1s ease-out;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const ListItem = styled.li`
  margin: 10px 0;
`;

const Footer = styled.footer`
  border-radius: 25px 25px 0px 0px;
  background: #8647C5;
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterNav = styled.nav`
  margin: 20px 0;
`;

const FooterLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: #ffffff;
`;

const SocialIcons = styled.div`
  margin: 20px 0;
`;

const SocialIcon = styled.img`
  width: 30px;
  margin: 0 10px;
`;

const Copyright = styled.div`
  margin: 20px 0;
`;

const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Title>About GardenPay</Title>
      </Header>
      <Section>
        <SectionTitle>Our Vision</SectionTitle>
        <Paragraph>
          At GardenPay, we envision a world where payroll processing is as seamless and efficient as possible. Leveraging the power of blockchain technology, we aim to eliminate the barriers and inefficiencies that plague traditional payroll systems. Our goal is to empower businesses and their employees with real-time, transparent, and secure payment solutions.
        </Paragraph>
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>
          Our mission is to revolutionize the payroll industry by providing a decentralized platform that ensures speed, security, and compliance. We are committed to delivering innovative solutions that simplify payroll processes, reduce costs, and enhance employee satisfaction. By integrating blockchain technology, we create a trusted environment where every transaction is immutable and verifiable.
        </Paragraph>
        <SectionTitle>Why Choose GardenPay?</SectionTitle>
        <Paragraph>
          Choosing GardenPay means choosing a future-proof payroll solution. Our platform offers several key advantages:
          <List>
            <ListItem>Experience the convenience of real-time payroll transactions, ensuring your employees receive their wages without delay.</ListItem>
            <ListItem>Benefit from the security of blockchain technology, which provides unalterable and transparent payroll records.</ListItem>
            <ListItem>Stay effortlessly compliant with local and international payroll regulations, reducing the burden on your HR department.</ListItem>
            <ListItem>Lower your operational costs and transaction fees, enabling your business to allocate resources more effectively.</ListItem>
            <ListItem>Seamlessly integrate GardenPay with your existing systems, ensuring a smooth transition and minimal disruption.</ListItem>
          </List>
        </Paragraph>
        <SectionTitle>Our Team</SectionTitle>
        <Paragraph>
          GardenPay is driven by a diverse team of experts in blockchain technology, finance, and payroll management. Our collective experience and dedication enable us to deliver cutting-edge solutions that meet the evolving needs of businesses worldwide. We are passionate about transforming the payroll landscape and are committed to providing exceptional service to our clients.
        </Paragraph>
        <SectionTitle>Contact Us</SectionTitle>
        <Paragraph>
          We would love to hear from you! Whether you have questions about our platform, need support, or want to learn more about how GardenPay can benefit your business, feel free to reach out. Contact us through our support email, live chat, or follow us on our social media channels for the latest updates.
        </Paragraph>
      </Section>
      <Footer>
        <FooterNav>
          <FooterLink href="/features">Features</FooterLink>
          <FooterLink href="/contact-us">Contact Us</FooterLink>
        </FooterNav>
        <SocialIcons>
          <span>Let's get social:</span>
          <SocialIcon src={Linkedin} alt="Linkedin" />
          <SocialIcon src={facebook} alt="Facebook" />
          <SocialIcon src={X} alt="X" />
          <SocialIcon src={Instagram} alt="Instagram" />
        </SocialIcons>
        <Copyright>
          <h6>© 2024 GardenPay @WREAKVERSE. All Rights Reserved.</h6>
          <h5>Privacy Policy . Terms & Conditions</h5>
        </Copyright>
      </Footer>
    </Container>
  );
};

export default Aboutus;
