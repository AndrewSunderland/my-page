import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Border = styled.div`
  border-bottom: 4px solid white;
  width: 100px;
`;

const Content = styled.span`
  padding: 0 10px 0 10px;
  color: white;
  font-size: 2.5em;
`;

const Divider = ({ children }) => (
  <Container>
    <Border />
    <Content>
      {children}
    </Content>
    <Border />
  </Container>
);
export default Divider;
