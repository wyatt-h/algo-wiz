import React, { useEffect, useState } from "react";
import reactDOM from "react-dom";
import styled from "styled-components";
import { createSortAnim } from "./components/ createSortAnim";
import SortAnimLayout from "./layout/SortAnimLayout";

const GlobalStyle = styled.div`
  box-sizing: border-box;
`;

const SortAnim = createSortAnim(SortAnimLayout, 100, "insertion sort");

const App = () => {
  const [startSorting, setStartSorting] = useState(false);

  return (
    <GlobalStyle>
      <div className="row">
        <button
          className="btn btn-lg"
          onClick={() => setStartSorting(!startSorting)}
        >
          Click to Start
        </button>
      </div>
      <div className="row">
        <SortAnim startSorting={startSorting} numOfStick={100} />
      </div>
    </GlobalStyle>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
