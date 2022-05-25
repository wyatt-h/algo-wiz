export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const swapHeight = (elementOne, elementTwo) => {
  let heightOne = elementOne.offsetHeight;
  elementOne.style.height = `${elementTwo.offsetHeight}px`;
  elementTwo.style.height = `${heightOne}px`;
};

export const generateRandNums = (num) => {
  let randNums = [];
  for (let i = 0; i < num; i++) {
    randNums.push(Math.random());
  }
  return randNums;
};
