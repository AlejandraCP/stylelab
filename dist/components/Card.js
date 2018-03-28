"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  height: ", ";\n  width: ", ";\n  text-align: center;\n  background: ", ";\n  span {\n    font-size:", ";\n    padding-top: ", ";\n    font-weight: 800;\n    display: flex;\n    justify-content:center;\n  }\n  p {\n    font-size:", ";\n    font-weight: 400;\n    display: block;\n  }\n"], ["\n  border-radius: 2px;\n  height: ", ";\n  width: ", ";\n  text-align: center;\n  background: ", ";\n  span {\n    font-size:", ";\n    padding-top: ", ";\n    font-weight: 800;\n    display: flex;\n    justify-content:center;\n  }\n  p {\n    font-size:", ";\n    font-weight: 400;\n    display: block;\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var pink = "#FF009E";
var green = "#56f89a";
var yellow = "#ffe521";

var Card = exports.Card = _styledComponents2.default.div(_templateObject, function (props) {
  if (props.big) return '129px';else if (props.small) return '106px';else return "auto";
}, function (props) {
  if (props.big) return '196px';else if (props.small) return '180px';else return "200px";
}, function (props) {
  if (props.yellow) return yellow;else if (props.green) return green;else if (props.pink) return pink;else "#fff";
}, function (props) {
  if (props.small) return '16px';else return "61px";
}, function (props) {
  if (props.small) return '20px';else return '8px';
}, function (props) {
  if (props.small) return '14px';else return "14px";
});