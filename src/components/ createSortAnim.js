import React from "react";

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

    console.log(numOfStick);
    console.log(randNums);

    return <Component {...props} randNums={randNums} />;
  };
};
