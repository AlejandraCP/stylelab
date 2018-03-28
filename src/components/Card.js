import React from "react";
import styled from "styled-components";

const pink = "#FF009E";
const green = "#56f89a";
const yellow = "#ffe521";

export const Card = styled.div`
  border-radius: 2px;
  height: ${props => {
    if (props.big) return '129px';
    else if (props.small) return '106px';
    else return "auto";
  }};
  width: ${props => {
    if (props.big) return '196px';
    else if (props.small) return '180px';
    else return "200px";
  }};
  text-align: center;
  background: ${props => {
    if (props.yellow) return yellow;
    else if (props.green) return green;
    else if (props.pink) return pink;
    else "#fff";
  }};
  span {
    font-size:${props => {
      if (props.small) return '16px';
      else return "61px";
    }};
    padding-top: ${props => {
      if (props.small) return '20px';
      else return '8px';
    }};
    font-weight: 800;
    display: flex;
    justify-content:center;
  }
  p {
    font-size:${props => {
    if (props.small) return '14px';
    else return "14px";
  }};
    font-weight: 400;
    display: block;
  }
`;
