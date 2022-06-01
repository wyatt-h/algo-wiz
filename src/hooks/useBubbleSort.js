import { sleep, swapHeight } from "../utilities";

const useBubbleSort = async (duration) => {
  const sticks = document.querySelectorAll(".stick");
  const sortBtn = document.querySelector(".sort-btn");
  let flag = false;
  await Array.from(sortBtn.classList).includes("on-sorting");
  for (let i = 0; i < sticks.length; i++) {
    flag = false;
    for (let j = 0; j < sticks.length - 1; j++) {
      if (!Array.from(sortBtn.classList).includes("on-sorting")) break;
      let height_i = sticks[j].offsetHeight;
      let height_j = sticks[j + 1].offsetHeight;
      sticks[j].classList.add("on-sorted");
      sticks[j + 1].classList.add("on-compared");
      if (height_i > height_j) {
        flag = true;
        swapHeight(sticks[j], sticks[j + 1]);
      }
      await sleep(duration);
      sticks[j].classList.remove("on-sorted");
      sticks[j + 1].classList.remove("on-compared");
    }
    if (!flag) break;
  }
};

export default useBubbleSort;
