import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SortAnimLayout from "./SortAnimLayout";
import {
  Box,
  TextField,
  Slider,
  FormControl,
  Select,
  Stack,
  MenuItem,
  Typography,
  InputLabel,
  Button,
} from "@mui/material";

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

  /* .sort-btn {
    background-color: #ffc857;
    color: #1f2041;
    width: 50%;
  }

  .sort-btn.on-sorting {
    background-color: #1f2041;
    color: #ffc857;
  } */

  .sort-algo-dropdown {
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  .param-form {
    width: 40;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 0.5rem;
    grid-column-gap: 1rem;
    align-content: center;
    justify-content: center;
  }

  .duration-input {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  .sorting-algo-input {
    grid-column: 3 / 5;
    grid-row: 1 / 2;
  }

  .stick-number-input {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  .submit-btn {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }
`;

const SortAnimCard = () => {
  const [startSorting, setStartSorting] = useState(false);
  const [sortingAlgo, setSortingAlgo] = useState("");
  const [duration, setDuration] = useState(5);
  const [numOfStick, setNumOfStick] = useState(60);

  const resetAnim = () => {
    document.querySelector(".sort-btn").classList.remove("on-sorting");
    setStartSorting(false);
  };

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
      <Box component="form" noValidate autoComplete="off">
        <div className="param-form">
          <TextField
            required
            id="outlined-required"
            label="Animation Duration(ms)"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
              resetAnim();
            }}
            className="duration-input"
          />
          <FormControl fullWidth className="sorting-algo-input">
            <InputLabel id="sorting-algo-select-label">
              Sorting Algorithm
            </InputLabel>
            <Select
              required
              labelId="sorting-algo-select-label"
              id="sorting-algo-select"
              value={sortingAlgo}
              label="SortingAlgorithm"
              onChange={(e) => {
                setSortingAlgo(e.target.value);
                resetAnim();
              }}
            >
              <MenuItem value={"bubble"}>Bubble Sort</MenuItem>
              <MenuItem value={"insertion"}>Insertion Sort</MenuItem>
              <MenuItem value={"selection"}>Selection Sort</MenuItem>
              <MenuItem value={"merge"}>Merge Sort</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className="stick-number-input">
            <Typography id="input-slider" gutterBottom>
              Number of Sticks
            </Typography>
            <Slider
              aria-labelledby="input-slider"
              valueLabelDisplay="auto"
              value={numOfStick}
              onChange={(e) => {
                setNumOfStick(e.target.value);
                resetAnim();
              }}
              step={30}
              marks
              min={30}
              max={150}
            />
          </FormControl>
          <Button
            variant="outlined"
            className="submit-btn btn sort-btn"
            onClick={() => setStartSorting(!startSorting)}
          >
            {startSorting ? "Reset" : "Click to Start"}
          </Button>
        </div>
      </Box>
      <div className="row">
        <SortAnimLayout
          startSorting={startSorting}
          duration={duration}
          numOfStick={numOfStick}
          sortingAlgo={sortingAlgo}
        />
      </div>
    </GlobalStyle>
  );
};

export default SortAnimCard;
