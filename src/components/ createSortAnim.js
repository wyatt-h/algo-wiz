import React, { useEffect } from "react";
import useBubbleSort from "../hooks/useBubbleSort";
import useInsertionSort from "../hooks/useInsertionSort";

let generateRandNums = (num) => {
  let randNums = [];
  for (let i = 0; i < num; i++) {
    randNums.push(Math.random());
  }
  return randNums;
};

export const createSortAnim = (Component, numOfStick, sortingAlgo) => {
  return (props) => {
    let randNums = generateRandNums(numOfStick);

    useEffect(() => {
      if (props.startSorting) {
        switch (sortingAlgo) {
          case "bubble sort":
            useBubbleSort();
            break;
          case "insertion sort":
            useInsertionSort();
            break;
          default:
            break;
        }
      }
    }, [props.startSorting]);

    return <Component {...props} randNums={randNums} />;
  };
};
