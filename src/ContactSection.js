import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const ContactSection = () => {
  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <p>Email:<a href="mailto:prateushsharma@gmail.com">prateushsharma@gmail.com</a></p>
      <p>LinkedIn:<a href="https://www.linkedin.com/in/prateushsharma">prateushsharma</a></p>
      <p>Phone: +91-9123699828</p>
      
    </ContactContainer>
  );
};

export default ContactSection;
