webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UseState.js":
/*!********************************!*\
  !*** ./components/UseState.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hooks_useTitleInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/hooks/useTitleInput */ "./lib/hooks/useTitleInput.js");

var _jsxFileName = "/Users/Roa/Desktop/next-hooks/components/UseState.js";



var UseStateComponent = function UseStateComponent() {
  var _useTitleInput = Object(_lib_hooks_useTitleInput__WEBPACK_IMPORTED_MODULE_2__["useTitleInput"])(''),
      _useTitleInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useTitleInput, 2),
      name = _useTitleInput2[0],
      setName = _useTitleInput2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      dishes = _useState2[0],
      setDishes = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    value: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Submit")), dishes.map(function (dish) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, dish.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, dish.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ingredients",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, dish.ingredients.map(function (ingredient) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, ingredient);
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UseStateComponent);

/***/ })

})
//# sourceMappingURL=index.js.70f76b03c04c116d1643.hot-update.js.map