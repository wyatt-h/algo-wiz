import React, { useEffect } from "react";
import useBubbleSort from "../hooks/useBubbleSort";

let generateRandNums = (num) => {
  let randNums = [];
  for (let i = 0; i < num; i++) {
    randNums.push(Math.random());
  }
  return randNums;
};

export const createSortAnim = (Component, numOfStick) => {
  return (props) => {
    let randNums = generateRandNums(numOfStick);

    useEffect(() => {
      if (props.startSorting) {
        useBubbleSort();
      }
    }, [props.startSorting]);

    return <Component {...props} randNums={randNums} />;
  };
};
