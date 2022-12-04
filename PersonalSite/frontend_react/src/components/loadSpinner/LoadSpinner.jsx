import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// css
import "static/style/css/Common.css";

function LoadingSpinner(props) {
  return (
    <LoadingSpinnerWrap>
      <LoadingSpinnerDiv>
        <img
          src={require("static/img/icon/spinner.png")}
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

const SpinningEffect = keyframes`
    from{
        transform: rotate(0deg) !important;
    }

    to{
      transform: rotate(360deg) !important;
    }
`;

const SpinLoader = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-top: auto;

  //   .loading-icon {
  //     animation: ${SpinningEffect} 1s infinite;
  //   }
`;

const LoadingText = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: #b82e5a;
`;
