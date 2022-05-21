import React from "react";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const useBubbleSort = async () => {
  const sticks = document.querySelectorAll(".stick");
  for (let i = 0; i < sticks.length; i++) {
    sticks[i].style.backgroundColor = "green";
    console.log(sticks[i].style);
    console.log(typeof sticks[i]);
    for (let j = i + 1; j < sticks.length; j++) {
      sticks[j].style.backgroundColor = "red";
      console.log("counter");
      await sleep(50);
      sticks[j].style.backgroundColor = "#222";
    }
    sticks[i].style.backgroundColor = "#222";
  }
};

export default useBubbleSort;
