import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SortAnimLayout from "./SortAnimLayout";

const GlobalStyle = styled.section`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  padding: 15vh 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  background-color: #119da4;
  color: #ffc857;

  .form-control {
    padding: 0.2rem 0.5rem;
  }

  .input-box {
    display: flex;
    justify-content: center;
    align-items: cneter;
    padding: 0.5rem;
  }

  .submit-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sort-btn {
    background-color: #ffc857;
    color: #1f2041;
    width: 50%;
  }

  .sort-btn.on-sorting {
    background-color: #1f2041;
    color: #ffc857;
  }

  .sort-algo-dropdown {
    padding: 0.5rem;
    border-radius: 0.375rem;
  }
`;

const SortAnimCard = () => {
  const [startSorting, setStartSorting] = useState(false);
  const [sortingAlgo, setSortingAlgo] = useState("");
  const [duration, setDuration] = useState(5);
  const [numOfStick, setNumOfStick] = useState(50);

  useEffect(() => {
    const sortBtn = document.querySelector(".sort-btn");
    if (startSorting) {
      sortBtn.classList.add("on-sorting");
    } else {
      sortBtn.classList.remove("on-sorting");
    }
  }, [startSorting]);

  return (
    <GlobalStyle>
      <div className="row">
        <div className="form-group row">
          <label htmlFor="" className="col-form-label col-sm-3">
            Sorting Algorithm
          </label>
          <div className="col-sm-9 input-box">
            <select
              className="custom-select custom-select-lg sort-algo-dropdown"
              onChange={(e) => setSortingAlgo(e.currentTarget.value)}
            >
              <option>Choose sorting algorithm</option>
              <option value="bubble">Bubble Sort</option>
              <option value="insertion">Insertion Sort</option>
              <option value="selection">Selection Sort</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <div className="row">
              <label htmlFor="" className="col-sm-4 col-form-label">
                Animation Duration
              </label>
              <div className="col-sm-8 input-box">
                <input
                  type="text"
                  className="form-control"
                  value={duration}
                  name="duration"
                  placeholder="choose animation duration..."
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group col-md-6">
            <div className="row">
              <label htmlFor="" className="col-sm-4 col-form-label">
                Number of Sticks
              </label>
              <div className="col-sm-8 input-box">
                <input
                  type="text"
                  className="form-control"
                  value={numOfStick}
                  name="numOfStick"
                  placeholder="choose the number of sticks..."
                  onChange={(e) => setNumOfStick(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row submit-box">
          <button
            className="btn sort-btn"
            onClick={() => setStartSorting(!startSorting)}
          >
            {startSorting ? "Reset" : "Click to Start"}
          </button>
        </div>
      </div>
      <div className="row">
        <SortAnimLayout
          startSorting={startSorting}
          setStartSorting={setStartSorting}
          duration={duration}
          numOfStick={numOfStick}
          sortingAlgo={sortingAlgo}
        />
      </div>
    </GlobalStyle>
  );
};

export default SortAnimCard;
