import { sleep, swapHeight } from "../utilities";

const merge = async (arr, arrL, arrR, start) => {
  console.log("merge");
  if (arrL.length === 0) {
    return arrR;
  }
  if (arrR.length === 0) {
    return arrL;
  }
  let pointerL = 0;
  let pointerR = 0;
  let result = [];
  let index = start;
  let temp_height;
  console.log("arrL: ", arrL, ", arrR: ", arrR);
  while (pointerL < arrL.length || pointerR < arrR.length) {
    console.log(arrL[pointerL]);
    console.log(arrR[pointerR]);
    if (pointerR === arrR.length) {
      temp_height = arrL[pointerL].offsetHeight;
      result.push(arrL[pointerL++]);
      // arr[index++].style.height = arrL[pointerL++].offsetHeight;
    } else if (pointerL === arrL.length) {
      temp_height = arrR[pointerR].offsetHeight;
      result.push(arrR[pointerR++]);
      // arr[index++].style.height = arrR[pointerR++].offsetHeight;
    } else if (arrL[pointerL].offsetHeight < arrR[pointerR].offsetHeight) {
      temp_height = arrL[pointerL].offsetHeight;
      result.push(arrL[pointerL++]);
      // arr[index++].style.height = arrL[pointerL++].offsetHeight;
    } else {
      temp_height = arrR[pointerR].offsetHeight;
      result.push(arrR[pointerR++]);
      // arr[index++].style.height = arrR[pointerR++].offsetHeight;
    }
    arr[index].classList.add("on-sorted");
    await sleep(1000);
    arr[index].classList.remove("on-sorted");
    arr[index++].style.height = `${temp_height}px`;
    console.log(result);
    console.log(pointerL, pointerR);
    console.log(arrL.length, arrR.length);
  }
  return result;
};

const mergeSortHelper = async (arr, start, end) => {
  console.log("split");
  if (end - start <= 1) {
    return arr.slice(start, end);
  }
  const mid = parseInt((start + end) / 2);
  console.log("one more layer");
  console.log("left: ", start, ", mid: ", mid, ", right: ", end);
  console.log(arr.slice(start, mid));
  console.log(arr.slice(mid, end));

  const result = await merge(
    arr,
    await mergeSortHelper(arr, start, mid),
    await mergeSortHelper(arr, mid, end),
    start
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
  const result = await mergeSortHelper(Array.from(sticks), 0, sticks.length);
  result.forEach((stick) => console.log(stick.offsetHeight));
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
