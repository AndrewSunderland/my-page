import React from 'react';
import styled from 'styled-components';
import Divider from '../components/Divider';
import WorkItem from '../components/WorkItem';
import works from '../assets/works.json';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em 0;
`;

const StyledTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #2c3e50;
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
`;

const Work = () => (
  <Background>
    <StyledTitle>
      Work
    </StyledTitle>
    <Divider inputColor="#2c3e50">★</Divider>
    <Container>
      <List>
        {works && works.map((work) => (
          <li>
            <WorkItem
              title={work.title}
              link={work.link}
              description={work.description}
            />
          </li>
        ))}
      </List>
    </Container>
  </Background>
);
export default Work;
