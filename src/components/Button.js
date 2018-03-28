import React from "react";
import styled from "styled-components";

const pink = "#FF009E";
const green = "#56f89a";
const yellow = "#ffe521";

export const Button = styled.button`
  background: ${props => {
    if (props.yellow) return yellow;
    else if (props.green) return green;
    else if (props.pink) return pink;
    else "#fff";
  }};
   border-color: ${props => {
     if (props.yellow) return yellow;
     else if (props.green) return green;
     else if (props.pink) return pink;
     else "#fff";
   }};
  color: ${props => {
    if (props.white) return "white";
  }};
  width: ${props => {
    if (props.big) return "280px";
    else if (props.medium) return "240px";
    else if (props.small) return "150px";
  }};
  font-weight: ${props => {
    if (props.bold) return "800";
  }};
  height: 47px;
  text-align:center;
  font-size: 1.1em;
  margin: 1.5em;
  padding: 0.7rem 2rem 0.7rem 2rem;
  border: 4px;
  border-radius: 3px;
  cursor:pointer;
  `;
// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}
