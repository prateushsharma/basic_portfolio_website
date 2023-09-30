import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-color: #f0f0f0;
  padding: 4rem;
  text-align: center;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <h2>Welcome to My Portfolio</h2>
    </HeroContainer>
  );
};

export default HeroSection;
