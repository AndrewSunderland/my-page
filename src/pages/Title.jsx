import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/icon.png';
import Divider from '../components/Divider';

const Background = styled.div`
  background-color: #18bc9c;
  display: flex;
  flex-direction: column;
  padding: 1.5em 0;
`;

const Image = styled.img`
  width: 260px;
  align-self: center;
`;

const StyledTitle = styled.h1`
  font-size: 4.75em;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
`;

const Subheader = styled.p`
  font-size: 1.75em;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
`;

const Title = () => (
  <Background>
    <Image src={avatar} alt="Cartoon" />
    <StyledTitle>
      Andrew Sunderland
    </StyledTitle>
    <Divider>★</Divider>
    <Subheader>App Developer - Software Engineer - Web Developer</Subheader>
  </Background>
);
export default Title;
