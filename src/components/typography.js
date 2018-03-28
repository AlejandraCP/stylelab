import React from "react";
import styled from 'styled-components';
// const bitter = require('typeface-bitter');
const pink = "#FF009E";
const green = "#56f89a";
const yellow = "#ffe521";

export const Typography = styled.p`
  font-size: ${props => {
    if (props.title1) return "50px";
    else if (props.title2) return "38px";
    else if (props.title3) return "32px";
    else if (props.phrase) return "28px";
    else if (props.body) return "22px";
    else if(props.body2) return "20px";
    else "15px";
  }};
  color: ${props => {
    if (props.yellow) return yellow;
    else if (props.green) return green;
    else if (props.pink) return yellow;
    else "black";
  }};
  font-weight: ${props => {
    if (props.bold) return "900";
  }};
  text-decoration: ${props => {
    if (props.under) return "underline";
  }};
   @media (max-width: 600px) {
    font-size: ${props => {
    if (props.title1) return "28px";
    else if (props.title2) return "26px";
    else if (props.title3) return "20px";
    else if (props.phrase) return "20px";
    else if (props.body) return "18px";
    else if(props.body2) return "16px";
    else "15px";
  }};
`;
