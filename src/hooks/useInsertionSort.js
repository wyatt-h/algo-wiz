import { sleep, swapHeight } from "../utilities";

const useInsertionSort = async (duration) => {
  const sticks = document.querySelectorAll(".stick");
  const sortBtn = document.querySelector(".sort-btn");
  await Array.from(sortBtn.classList).includes("on-sorting");
  for (let i = 1; i < sticks.length; i++) {
    for (let temp = i; temp >= 1; temp--) {
      if (!Array.from(sortBtn.classList).includes("on-sorting")) break;
      let height_temp = sticks[temp].offsetHeight;
      let height_temp_nxt = sticks[temp - 1].offsetHeight;
      if (height_temp > height_temp_nxt) {
        break;
      }
      sticks[temp].classList.add("on-sorted");
      sticks[temp - 1].classList.add("on-compared");
      await sleep(duration);
      swapHeight(sticks[temp], sticks[temp - 1]);
      sticks[temp].classList.remove("on-sorted");
      sticks[temp - 1].classList.remove("on-compared");
    }
  }
};

export default useInsertionSort;
