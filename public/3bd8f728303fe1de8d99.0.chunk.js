(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/babel-loader/lib/index.js!./src/containers/user/mobx.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/babel-loader/lib!./src/containers/user/mobx.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _assign = __webpack_require__(/*! lodash/assign */ \"./node_modules/lodash/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _utils = __webpack_require__(/*! utils */ \"./src/utils/index.js\");\n\nvar _mobxReact = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar IndexContainer = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {\n  _inherits(IndexContainer, _Component);\n\n  function IndexContainer() {\n    _classCallCheck(this, IndexContainer);\n\n    return _possibleConstructorReturn(this, (IndexContainer.__proto__ || Object.getPrototypeOf(IndexContainer)).apply(this, arguments));\n  }\n\n  _createClass(IndexContainer, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {}\n  }, {\n    key: 'render',\n    value: function render() {\n      var name = this.props.store.UserInfoStore.name;\n\n      return _react2.default.createElement('div', null, name);\n    }\n  }]);\n\n  return IndexContainer;\n}(_react.Component)) || _class) || _class);\nexports.default = (0, _reactRouterDom.withRouter)(IndexContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3JjL2NvbnRhaW5lcnMvdXNlci9tb2J4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL3VzZXIvbW9ieC5qcz8yOTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdsb2Rhc2gvYXNzaWduJ1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAndXRpbHMnXG5pbXBvcnQgeyBvYnNlcnZlciwgaW5qZWN0IH0gZnJvbSAnbW9ieC1yZWFjdCdcbkBpbmplY3QoJ3N0b3JlJylcbkBvYnNlcnZlclxuXG5jbGFzcyBJbmRleENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzLnN0b3JlLlVzZXJJbmZvU3RvcmVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge25hbWV9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihJbmRleENvbnRhaW5lcikiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/babel-loader/lib/index.js!./src/containers/user/mobx.js\n");

/***/ })

}]);