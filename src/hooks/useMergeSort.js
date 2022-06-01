import { sleep } from "../utilities";

const merge = async (arr, helper, low, mid, high, duration) => {
  for (let i = low; i <= high; i++) {
    helper[i] = arr[i].offsetHeight;
  }

  let helperL = low;
  let helperR = mid + 1;
  let curr = low;
  while (helperL <= mid && helperR <= high) {
    arr[curr].classList.add("on-sorted");
    await sleep(duration);
    arr[curr].classList.remove("on-sorted");
    if (helper[helperL] <= helper[helperR]) {
      arr[curr++].style.height = `${helper[helperL++]}px`;
    } else {
      arr[curr++].style.height = `${helper[helperR++]}px`;
    }
  }

  let remaining = mid - helperL;
  for (let i = 0; i <= remaining; i++) {
    arr[curr].classList.add("on-sorted");
    await sleep(duration);
    arr[curr + i].style.height = `${helper[helperL + i]}px`;
    arr[curr].classList.remove("on-sorted");
  }
};

const mergeSortHelper = async (arr, helper, low, high, duration) => {
  if (low < high) {
    let mid = parseInt((low + high) / 2);
    await mergeSortHelper(arr, helper, low, mid);
    await mergeSortHelper(arr, helper, mid + 1, high);
    await merge(arr, helper, low, mid, high, duration);
  }
};

const useMergeSort = async (duration) => {
  const sticks = document.querySelectorAll(".stick");
  const sortBtn = document.querySelector(".sort-btn");
  let helper = new Array(sticks.length);
  helper.fill(undefined);
  await Array.from(sortBtn.classList).includes("on-sorting");
  await mergeSortHelper(
    Array.from(sticks),
    helper,
    0,
    sticks.length - 1,
    duration
  );
};

export default useMergeSort;
