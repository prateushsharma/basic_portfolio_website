import React from 'react';
import styled from 'styled-components'
//import styled from 'styled-components';
const SkillsContainer = styled.div`
  background-color: #2345;
  padding: 2rem;
  text-align: center;
`;
/*const skillcontainer = styled.div
` background-color: #f0f0f0;
 padding: 2rem;
  text-align: center;
   `;*/
const Skillsection=()=>{
    return (
<SkillsContainer>
       
            <h1>My SKills</h1>
        <ul>
            <li>C</li>
            <li>C++</li>
            <li>JAVA</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>ReactJs</li>
            <li>embedded c</li>
            <li>solidity</li>
        </ul>
       
        </SkillsContainer>
    );
};
export default Skillsection;