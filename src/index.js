import React, { useEffect } from "react";
import reactDOM from "react-dom";
import styled from "styled-components";
import BubbleSort from "./components/BubbleSort";

const GlobalStyle = styled.div`
  box-sizing: border-box;
`;

let generateRandNums = (num) => {
  let randNums = [];
  for (let i = 0; i < num; i++) {
    randNums.push(Math.random());
  }
  return randNums;
};

const App = () => {
  return (
    <GlobalStyle>
      <BubbleSort randNums={generateRandNums(100)} />
    </GlobalStyle>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
