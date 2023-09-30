import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
  text-align: center;
`;

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <h2>My Services</h2>
      <ul>
        <li>React Development</li>
        <li>Solidity development</li>
        <li>Block chain development</li>
        <li>web3 development</li>
        <li>IoT and embedded system programming</li>
      </ul>
    </ServicesContainer>
  );
};

export default ServicesSection;
