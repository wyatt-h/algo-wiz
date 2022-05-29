import { sleep, swapHeight } from "../utilities";

const merge = (arrL, arrR) => {
  if (arrL.length === 0) {
    return arrR;
  }
  if (arrR.length === 0) {
    return arrL;
  }
  let pointerL = 0;
  let pointerR = 0;
  let result = [];
  while (pointerL < arrL.length || pointerR < arrR.length) {
    console.log(arrL[pointerL]);
    console.log(arrR[pointerR]);
    console.log(arrL[pointerL].offsetHeight);
    console.log(arrR[pointerR].offsetHeight);
    if (
      pointerR === arrR.length ||
      arrL[pointerL].offsetHeight < arrR[pointerR].offsetHeight
    ) {
      result.push(arrL[pointerL++]);
    } else if (
      pointerL === arrL.length ||
      arrR[pointerR].offsetHeight < arrL[pointerL].offsetHeight
    ) {
      result.push(arrR[pointerR++]);
    }
  }
  return result;
};

const mergeSortHelper = (arr, left, right) => {
  if (right - left <= 1) {
    return arr.slice(left, right);
  }
  const mid = parseInt((left + right) / 2);
  console.log("one more layer");
  console.log("left: ", left, ", mid: ", mid, ", right: ", right);
  console.log(arr.slice(left, mid));
  console.log(arr.slice(mid, right));

  const result = merge(
    mergeSortHelper(arr, left, mid),
    mergeSortHelper(arr, mid, right)
  );
  return result;
};

const useMergeSort = async (duration) => {
  // const arr = [4, 6, 8, 2, 5, 9, 23, 1, 17, 88];
  // const result = mergeSortHelper(arr, 0, arr.length);
  // console.log(result);
  // return result;
  const sticks = document.querySelectorAll(".stick");
  const sortBtn = document.querySelector(".sort-btn");
  await Array.from(sortBtn.classList).includes("on-sorting");
  const result = mergeSortHelper(Array.from(sticks), 0, sticks.length);
  console.log(result);
  return result;
  // for (let i = 0; i < sticks.length; i++) {
  //   sticks[i].classList.add("on-sorted");
  //   let height_i = sticks[i].offsetHeight;
  //   for (let j = i + 1; j < sticks.length; j++) {
  //     if (!Array.from(sortBtn.classList).includes("on-sorting")) break;
  //     let height_j = sticks[j].offsetHeight;
  //     sticks[j].classList.add("on-compared");
  //     if (height_i > height_j) {
  //       swapHeight(sticks[i], sticks[j]);
  //       height_i = sticks[i].offsetHeight;
  //     }
  //     await sleep(duration);
  //     sticks[j].classList.remove("on-compared");
  //   }
  //   sticks[i].classList.remove("on-sorted");
  // }
};

export default useMergeSort;
