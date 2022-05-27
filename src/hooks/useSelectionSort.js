import { sleep, swapHeight } from "../utilities";

const useSelectionSort = async (duration) => {
  const sticks = document.querySelectorAll(".stick");
  const sortBtn = document.querySelector(".sort-btn");
  await Array.from(sortBtn.classList).includes("on-sorting");
  for (let i = 0; i < sticks.length; i++) {
    sticks[i].classList.add("on-sorted");
    let minStickIndex = 0;
    let minHeight = Number.MAX_VALUE;
    for (let j = i; j < sticks.length; j++) {
      if (!Array.from(sortBtn.classList).includes("on-sorting")) break;
      let height = sticks[j].offsetHeight;
      sticks[j].classList.add("on-compared");
      if (height < minHeight) {
        sticks[minStickIndex].classList.remove("on-swap");
        minHeight = height;
        minStickIndex = j;
        sticks[minStickIndex].classList.add("on-swap");
      }
      await sleep(duration);
      sticks[j].classList.remove("on-compared");
    }
    swapHeight(sticks[minStickIndex], sticks[i]);
    sticks[minStickIndex].classList.remove("on-swap");
    sticks[i].classList.remove("on-sorted");
  }
};

export default useSelectionSort;
