import React, { useEffect } from "react";
import reactDOM from "react-dom";
import styled from "styled-components";
import BubbleSort from "./components/BubbleSort";

const GlobalStyle = styled.div`
  box-sizing: border-box;
`;

const App = () => {
  return (
    <GlobalStyle>
      <BubbleSort numOfStick={100} />
    </GlobalStyle>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
