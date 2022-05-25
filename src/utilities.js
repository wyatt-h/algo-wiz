export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const swapHeight = (elementOne, elementTwo) => {
  let heightOne = elementOne.offsetHeight;
  elementOne.style.height = `${elementTwo.offsetHeight}px`;
  elementTwo.style.height = `${heightOne}px`;
};
