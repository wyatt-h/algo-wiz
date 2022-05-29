import React, { useEffect, useState } from "react";
import reactDOM from "react-dom";
import styled from "styled-components";
import SortAnimCard from "./components/SortAnimCard";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
