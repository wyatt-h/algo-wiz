import React, { useEffect } from "react";
import styled from "styled-components";
import useBubbleSort from "../hooks/useBubbleSort";

const AnimContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
`;

const Stick = styled.div`
  height: ${(props) => 100 * props.height}%;
  width: 100vw;
  background-color: #222;
  margin: 0.08vw;
`;

let generateRandNums = (num) => {
  let randNums = [];
  for (let i = 0; i < num; i++) {
    randNums.push(Math.random());
  }
  return randNums;
};

const BubbleSort = ({ numOfStick }) => {
  const randNums = generateRandNums(numOfStick);

  useEffect(() => {
    setTimeout(useBubbleSort, 1000);
  }, []);

  return (
    <AnimContainer className="anim-container">
      {randNums.map((randNum, index) => (
        <Stick className="stick" key={index} height={randNum} />
      ))}
    </AnimContainer>
  );
};

export default BubbleSort;
