"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  background-color: ", ";\n"], ["\n  color: ", ";\n  background-color: ", ";\n"]);

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

var Color = exports.Color = _styledComponents2.default.span(_templateObject, function (props) {
  if (props.yellow) return yellow;else if (props.green) return green;else if (props.pink) return pink;else "black";
}, function (props) {
  if (props.bgyellow) return yellow;else if (props.bggreen) return green;else if (props.bgpink) return pink;else "#fff";
});