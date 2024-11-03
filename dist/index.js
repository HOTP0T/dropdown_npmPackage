"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Dropdown = function Dropdown(_ref) {
  var options = _ref.options,
    selectedOption = _ref.selectedOption,
    _onChange = _ref.onChange,
    placeholder = _ref.placeholder;
  return /*#__PURE__*/_react["default"].createElement("select", {
    value: selectedOption,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "",
    disabled: true
  }, placeholder || "Select an option"), options.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option.value || index,
      value: option.value || ''
    }, option.label, "  ");
  }));
};
Dropdown.propTypes = {
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].string.isRequired,
    label: _propTypes["default"].string.isRequired
  })).isRequired,
  selectedOption: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired,
  placeholder: _propTypes["default"].string
};
var _default = exports["default"] = Dropdown;