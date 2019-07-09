import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: tomato;
    font-family: 'Bangers', Arial Black, cursive;
    font-size: 80px;
    color: white;
    letter-spacing: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const EarthEmoji = styled.span`
  display: inline-block;
  margin-left: 30px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        Hello world{' '}
        <EarthEmoji role="img" aria-label="planet earth">
          🌏
        </EarthEmoji>
      </Wrapper>
    </>
  );
}

export default App;
