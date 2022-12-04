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
          //   src={require("static/img/icon/spinner.png")}
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
`;

const LoadingSpinnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
