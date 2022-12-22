import React, { useState } from 'react';
import styled from 'styled-components';
import Divider from '../components/Divider';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
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
  display: flex;
  flex-wrap: wrap;
`;

const Form = styled.form`
  margin-right: auto;
  margin-left: auto;
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
  position: relative;
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;  
`;

const InputContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 0.5rem;
  margin-bottom: 0;
  font-family: 'Lato', sans-serif;
`;

const Label = styled.label`
  font-size: .85em;
  line-height: 1.764705882em;
  position: relative;
  z-index: 0;
  top: 2em;
  display: block;
  margin: 0;
  transition: top .3s ease,opacity .3s ease;
  vertical-align: baseline;
  opacity: 0;
`;

const Input = styled.input`
  font-size: 1.5em;
  position: relative;
  z-index: 1;
  padding-right: 0;
  padding-left: 0;
  resize: none;
  border: none;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  font-weight: 400;
  color: #495057;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  font-family: inherit;
`;

const MessageContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
`;

const MessageInput = styled.textarea`
  font-size: 1.5em;
  position: relative;
  z-index: 1;
  padding-right: 0;
  padding-left: 0;
  resize: none;
  border: none;
  width: 100%;
  height: auto;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  font-family: inherit;
`;

const SendButtonContainer = styled.div`
  margin-bottom: 1rem;
  display: block;
`;

const SendButton = styled.button`
  background-color: #18bc9c;
  padding: 1rem 1.75rem;
  font-size: 1.25rem;
  color: white;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s 
  ease-in-out;
  font-family: inherit;
`;

const ContactMe = ({ id }) => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <Background id={id}>
      <StyledTitle>
        Contact Me
      </StyledTitle>
      <Divider inputColor="#2c3e50">★</Divider>
      <Container>
        <Form>
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
            />
          </InputContainer>
          <MessageContainer>
            <MessageInput
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Message"
              rows="5"
            />
          </MessageContainer>
          <SendButtonContainer>
            <SendButton type="submit">Send</SendButton>
          </SendButtonContainer>
        </Form>
      </Container>
    </Background>
  );
};

export default ContactMe;
