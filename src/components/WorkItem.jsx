import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: #18bc9c;
  text-decoration: none;
  background-color: transparent;
  &:hover {
    color: #128f76;
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 0.5rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
`;
const WorkItem = ({ title, link, description }) => (
  <Container>
    <Title>
      <Link href={link}>{title}</Link>
    </Title>
    <Description>{description}</Description>
  </Container>

);
export default WorkItem;
