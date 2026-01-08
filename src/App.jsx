import React from "react";
import styled from "styled-components";

import { GlobalStyle } from "./GlobalStyles";
const H1 = styled.h1`
  color: red;
`;
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <H1>hello</H1>
    </div>
  );
}

export default App;
