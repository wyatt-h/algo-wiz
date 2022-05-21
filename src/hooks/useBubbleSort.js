import React from "react";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const useBubbleSort = async () => {
  const sticks = document.querySelectorAll(".stick");
  for (let i = 0; i < sticks.length; i++) {
    sticks[i].style.backgroundColor = "green";
    let height_i = sticks[i].offsetHeight;
    for (let j = i + 1; j < sticks.length; j++) {
      let height_j = sticks[j].offsetHeight;
      sticks[j].style.backgroundColor = "red";
      if (height_i > height_j) {
        sticks[i].style.height = `${height_j}px`;
        sticks[j].style.height = `${height_i}px`;
        height_i = sticks[i].offsetHeight;
      }
      await sleep(10);
      sticks[j].style.backgroundColor = "#222";
    }
    sticks[i].style.backgroundColor = "#222";
  }
};

export default useBubbleSort;
