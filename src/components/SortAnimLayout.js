import React, { useEffect } from "react";
import styled from "styled-components";
import { generateRandNums } from "../utilities";
import useBubbleSort from "../hooks/useBubbleSort";
import useInsertionSort from "../hooks/useInsertionSort";
import useSelectionSort from "../hooks/useSelectionSort";
import useMergeSort from "../hooks/useMergeSort";

const AnimContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 60vh;
  height: 60vh;

  .stick {
    background-color: #222;
    margin: 0.08vw;
    flex-grow: 1;
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
  useEffect(async () => {
    const ms = duration ? duration : 5;
    if (startSorting) {
      switch (sortingAlgo) {
        case "bubble":
          await useBubbleSort(ms);
          break;
        case "insertion":
          await useInsertionSort(ms);
          break;
        case "selection":
          await useSelectionSort(ms);
          break;
        case "merge":
          await useMergeSort(ms);
          break;
        default:
          break;
      }
    }
  }, [startSorting]);

  return (
    <AnimContainer>
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
