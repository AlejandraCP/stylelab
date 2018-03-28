import React from "react";
import styled from "styled-components";
// const bitter = require('typeface-bitter');

const pink = "#FF009E";
const green = "#56f89a";
const yellow = "#ffe521";

export const Color = styled.span`
  color: ${props => {
    if (props.yellow) return yellow;
    else if (props.green) return green;
    else if (props.pink) return pink;
    else "black";
  }};
  background-color: ${props => {
    if (props.bgyellow) return yellow;
    else if (props.bggreen) return green;
    else if (props.bgpink) return pink;
    else "#fff";
  }};
`;
