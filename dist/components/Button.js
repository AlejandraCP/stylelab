'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background: purple;\n  margin: 10px;\n  padding: 10px;\n  color:white;\n  border-radius:10px;\n'], ['\n  background: purple;\n  margin: 10px;\n  padding: 10px;\n  color:white;\n  border-radius:10px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = exports.Button = _styledComponents2.default.button(_templateObject);