import React from 'react';
import { Link, Outlet, ScrollRestoration } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #2c3e50;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  top: 0;
  padding: 0.5rem;
  flex-flow: row nowrap;
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  flex-basis: auto;
  flex-grow: 1;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  flex-wrap: wrap;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 40px;
  justify-content: flex-end;
`;

const LinkItem = styled.li`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  display: list-item;
  text-align: -webkit-match-parent;
  letter-spacing: 0.0625rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  color: #212529;
`;

const NavLink = styled(Link)`
  color: white;
  padding: 1rem;
  border-radius: 0.25rem;
  display: block;
  text-decoration: none;
  background-color: transparent;
  &:hover {
    color: #18bc9a;
  }
`;

const Navbar = () => {
  const getKey = React.useCallback(
    (location, matches) => {
      const match = matches.find((m) => (m.handle)?.scrollMode);
      if ((match?.handle)?.scrollMode === 'pathname') {
        return location.pathname;
      }
      return location.key;
    },
    []
  );

  return (
    <>
      <Background>
        <Container>
          <List>
            <LinkItem>
              <NavLink to="/">Home</NavLink>
            </LinkItem>
            <LinkItem>
              <NavLink to="/home#work">Work</NavLink>
            </LinkItem>
            <LinkItem>
              <NavLink to="/home#about">About</NavLink>
            </LinkItem>
            <LinkItem>
              <NavLink to="/home#contact">Contact</NavLink>
            </LinkItem>
          </List>
        </Container>
      </Background>
      <Outlet />
      <ScrollRestoration getKey={getKey} />
    </>
  );
};
export default Navbar;
