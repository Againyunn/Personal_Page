import React, { useEffect, useState } from "react";
import styled from "styled-components";

// css
import "static/style/css/Common.css";

function LoadingSpinner(props) {
  return (
    <LoadingSpinnerWrap>
      <LoadingSpinnerDiv>
        <SpinLoader
          src={require("static/img/icon/spinner.svg").default}
          className="loading-icon"
        />
        <LoadingText>{props.text}</LoadingText>
      </LoadingSpinnerDiv>
    </LoadingSpinnerWrap>
  );
}

export default LoadingSpinner;

const LoadingSpinnerWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
`;

const LoadingSpinnerDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  let: 50%;
  transition: -50% -50%;
`;

const SpinLoader = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-top: auto;
`;

const LoadingText = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: var(--primary-color);
`;
