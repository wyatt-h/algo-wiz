import React from "react";
import styled from "styled-components";

const AnimContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;

  .on-sorted {
    background-color: green;
  }

  .on-compared {
    background-color: red;
  }

  .on-swap {
    background-color: blue;
  }
`;

const Stick = styled.div`
  height: ${(props) => 100 * props.height}%;
  width: 100vw;
  background-color: #222;
  margin: 0.08vw;
`;

const SortAnimLayout = ({ randNums }) => {
  return (
    <AnimContainer className="anim-container">
      {randNums.map((randNum, index) => (
        <Stick className="stick" key={index} height={randNum} />
      ))}
    </AnimContainer>
  );
};

export default SortAnimLayout;
