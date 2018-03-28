"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n   border-color: ", ";\n  color: ", ";\n  width: ", ";\n  font-weight: ", ";\n  height: 47px;\n  text-align:center;\n  font-size: 1.1em;\n  margin: 1.5em;\n  padding: 0.7rem 2rem 0.7rem 2rem;\n  border: 4px;\n  border-radius: 3px;\n  cursor:pointer;\n  "], ["\n  background: ", ";\n   border-color: ", ";\n  color: ", ";\n  width: ", ";\n  font-weight: ", ";\n  height: 47px;\n  text-align:center;\n  font-size: 1.1em;\n  margin: 1.5em;\n  padding: 0.7rem 2rem 0.7rem 2rem;\n  border: 4px;\n  border-radius: 3px;\n  cursor:pointer;\n  "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var pink = "#FF009E";
var green = "#56f89a";
var yellow = "#ffe521";

var Button = exports.Button = _styledComponents2.default.button(_templateObject, function (props) {
  if (props.yellow) return yellow;else if (props.green) return green;else if (props.pink) return pink;else "#fff";
}, function (props) {
  if (props.yellow) return yellow;else if (props.green) return green;else if (props.pink) return pink;else "#fff";
}, function (props) {
  if (props.white) return "white";
}, function (props) {
  if (props.big) return "280px";else if (props.medium) return "240px";else if (props.small) return "150px";
}, function (props) {
  if (props.bold) return "800";
});
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