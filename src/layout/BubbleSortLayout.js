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

const BubbleSortLayout = ({ startSorting, randNums }) => {
  useEffect(() => {
    if (startSorting) {
      useBubbleSort();
    }
  }, [startSorting]);

  return (
    <AnimContainer className="anim-container">
      {randNums.map((randNum, index) => (
        <Stick className="stick" key={index} height={randNum} />
      ))}
    </AnimContainer>
  );
};

export default BubbleSortLayout;
