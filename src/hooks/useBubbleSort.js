import { sleep, swapHeight } from "../utilities";

const useBubbleSort = async () => {
  const sticks = document.querySelectorAll(".stick");
  for (let i = 0; i < sticks.length; i++) {
    sticks[i].classList.add("on-sorted");
    let height_i = sticks[i].offsetHeight;
    for (let j = i + 1; j < sticks.length; j++) {
      let height_j = sticks[j].offsetHeight;
      sticks[j].classList.add("on-compared");
      if (height_i > height_j) {
        swapHeight(sticks[i], sticks[j]);
        height_i = sticks[i].offsetHeight;
      }
      await sleep(10);
      sticks[j].classList.remove("on-compared");
    }
    sticks[i].classList.remove("on-sorted");
  }
};

export default useBubbleSort;
