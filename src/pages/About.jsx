import React from 'react';
import styled from 'styled-components';
import Divider from '../components/Divider';
import aboutText from '../assets/about-text.json';

const Background = styled.div`
  background-color: #18bc9c;
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
`;

const StyledTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
  text-transform: uppercase;
  margin: 0;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  display: grid;
  
`;

const List = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  list-style-type: none;
  color: white;
  font-family: 'Lato', sans-serif;
  line-height: 1.5;
  text-align: left;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding: 0 15px;
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: relative;
`;

const ListItem = styled.li`
  font-weight: 600;
  padding: 0 15px;
`;

const About = ({ id }) => (
  <Background id={id}>
    <StyledTitle>
      About
    </StyledTitle>
    <Divider>★</Divider>
    <Container>
      <List>
        {aboutText && aboutText.map((aboutLine) => (
          <ListItem>
            {aboutLine.text}
          </ListItem>
        ))}
      </List>
    </Container>
  </Background>
);
export default About;
