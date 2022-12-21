import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Border = styled.div.attrs((props) => ({
  inputColor: props.inputColor || 'white',
}))`
  border-bottom: 4px solid ${(props) => props.inputColor};
  width: 100px;
`;

const Content = styled.span.attrs((props) => ({
  inputColor: props.inputColor || 'white',
}))`
  padding: 0 10px 0 10px;
  color: ${(props) => props.inputColor};
  font-size: 2.5em;
`;

const Divider = ({ inputColor, children }) => (
  <Container>
    <Border inputColor={inputColor} />
    <Content inputColor={inputColor}>
      {children}
    </Content>
    <Border inputColor={inputColor} />
  </Container>
);
export default Divider;
