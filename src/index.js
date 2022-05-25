import React, { useEffect, useState } from "react";
import reactDOM from "react-dom";
import styled from "styled-components";
import { createSortAnim } from "./components/ createSortAnim";
import SortAnimLayout from "./layout/SortAnimLayout";

const GlobalStyle = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [startSorting, setStartSorting] = useState(false);
  const [sortingAlgo, setSortingAlgo] = useState("");
  const [duration, setDuration] = useState();
  const [numOfStick, setNumOfStick] = useState();
  const SortAnim = createSortAnim(
    SortAnimLayout,
    numOfStick,
    duration,
    sortingAlgo
  );

  return (
    <GlobalStyle>
      <div className="row">
        <div className="col col-md-3">
          <label htmlFor="">Sorting Algorithm</label>
          <input
            type="text"
            value={sortingAlgo}
            name="sortingAlgo"
            placeholder="choose sorting algorithm..."
            onChange={(e) => setSortingAlgo(e.target.value)}
          />
        </div>
        <div className="col col-md-3">
          <label htmlFor="">Animation Duration</label>
          <input
            type="text"
            value={duration}
            name="duration"
            placeholder="choose animation duration..."
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="col col-md-3">
          <label htmlFor="">Number of Sticks</label>
          <input
            type="text"
            value={numOfStick}
            name="numOfStick"
            placeholder="choose the number of sticks..."
            onChange={(e) => setNumOfStick(e.target.value)}
          />
        </div>
        <div className="col col-md-3">
          <button
            className="btn"
            onClick={() => setStartSorting(!startSorting)}
          >
            Click to Start
          </button>
        </div>
      </div>
      <div className="row">
        <SortAnim startSorting={startSorting} numOfStick={100} />
      </div>
    </GlobalStyle>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
