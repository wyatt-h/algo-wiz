import { sleep, swapHeight } from "../utilities";

const useInsertionSort = async () => {
  const sticks = document.querySelectorAll(".stick");
  for (let i = 1; i < sticks.length; i++) {
    for (let temp = i; temp >= 1; temp--) {
      let height_temp = sticks[temp].offsetHeight;
      let height_temp_nxt = sticks[temp - 1].offsetHeight;
      if (height_temp > height_temp_nxt) {
        break;
      }
      sticks[temp].classList.add("on-sorted");
      sticks[temp - 1].classList.add("on-compared");
      await sleep(5);
      swapHeight(sticks[temp], sticks[temp - 1]);
      sticks[temp].classList.remove("on-sorted");
      sticks[temp - 1].classList.remove("on-compared");
    }
  }
};

export default useInsertionSort;
