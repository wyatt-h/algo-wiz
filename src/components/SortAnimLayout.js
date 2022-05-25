import React, { useEffect } from "react";
import styled from "styled-components";
import { generateRandNums } from "../utilities";
import useBubbleSort from "../hooks/useBubbleSort";
import useInsertionSort from "../hooks/useInsertionSort";
import useSelectionSort from "../hooks/useSelectionSort";

const AnimContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 80vh;

  .stick {
    height: ${(props) => 100 * props.height}%;
    width: 100vw;
    background-color: #222;
    margin: 0.08vw;
  }

  .on-sorted {
    background-color: green;
  }

  .on-compared {
    background-color: red;
  }

  .on-swap {
    background-color: blue;
  }
`;

const SortAnimLayout = ({
  startSorting,
  numOfStick,
  duration,
  sortingAlgo,
}) => {
  useEffect(() => {
    if (startSorting) {
      switch (sortingAlgo) {
        case "bubble sort":
          useBubbleSort(duration);
          break;
        case "insertion sort":
          useInsertionSort(duration);
          break;
        case "selection sort":
          useSelectionSort(duration);
          break;
        default:
          break;
      }
    }
  }, [startSorting]);
  return (
    <AnimContainer className="anim-container">
      {generateRandNums(numOfStick).map((randNum, index) => (
        <div
          className="stick"
          key={index}
          style={{ height: `${100 * randNum}%` }}
        />
      ))}
    </AnimContainer>
  );
};

export default SortAnimLayout;
