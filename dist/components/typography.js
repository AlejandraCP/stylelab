"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typography = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  text-decoration: ", ";\n   @media (max-width: 600px) {\n    font-size: ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  text-decoration: ", ";\n   @media (max-width: 600px) {\n    font-size: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// const bitter = require('typeface-bitter');
var pink = "#FF009E";
var green = "#56f89a";
var yellow = "#ffe521";

var Typography = exports.Typography = _styledComponents2.default.p(_templateObject, function (props) {
  if (props.title1) return "50px";else if (props.title2) return "38px";else if (props.title3) return "32px";else if (props.phrase) return "28px";else if (props.body) return "22px";else if (props.body2) return "20px";else "15px";
}, function (props) {
  if (props.yellow) return yellow;else if (props.green) return green;else if (props.pink) return yellow;else "black";
}, function (props) {
  if (props.bold) return "900";
}, function (props) {
  if (props.under) return "underline";
}, function (props) {
  if (props.title1) return "28px";else if (props.title2) return "26px";else if (props.title3) return "20px";else if (props.phrase) return "20px";else if (props.body) return "18px";else if (props.body2) return "16px";else "15px";
});