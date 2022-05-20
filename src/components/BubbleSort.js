import React, { useEffect } from "react";
import styled from "styled-components";

const AnimContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
`;

const Stick = styled.div`
  height: ${(props) => 100 * props.height}%;
  width: 0.2rem;
  background-color: #222;
  margin: 5px;
`;

const BubbleSort = ({ randNums }) => {
  useEffect(() => {
    console.log(randNums);
  }, []);
  return (
    <AnimContainer>
      {randNums.map((randNum, index) => (
        <Stick key={index} height={randNum} />
      ))}
    </AnimContainer>
  );
};

export default BubbleSort;
