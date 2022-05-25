import React, { useEffect } from "react";
import useBubbleSort from "../hooks/useBubbleSort";
import useInsertionSort from "../hooks/useInsertionSort";
import useSelectionSort from "../hooks/useSelectionSort";

let generateRandNums = (num) => {
  let randNums = [];
  for (let i = 0; i < num; i++) {
    randNums.push(Math.random());
  }
  return randNums;
};

export const createSortAnim = (
  Component,
  numOfStick,
  duration,
  sortingAlgo
) => {
  return (props) => {
    let randNums = generateRandNums(numOfStick);

    useEffect(() => {
      if (props.startSorting) {
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
    }, [props.startSorting]);

    return <Component {...props} randNums={randNums} />;
  };
};
