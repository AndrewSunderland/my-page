import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #2c3e50;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  top: 0;
  padding: 1.5rem 1rem;
  flex-flow: row nowrap;
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  flex-wrap: wrap;
`;

const Navbar = () => (
  <Background>
    <Container>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </List>
    </Container>
  </Background>
);
export default Navbar;
