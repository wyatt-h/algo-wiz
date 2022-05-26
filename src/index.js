import React, { useEffect, useState } from "react";
import reactDOM from "react-dom";
import styled from "styled-components";
import SortAnimCard from "./components/SortAnimCard";

const GlobalStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <GlobalStyle>
      <SortAnimCard />
    </GlobalStyle>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
