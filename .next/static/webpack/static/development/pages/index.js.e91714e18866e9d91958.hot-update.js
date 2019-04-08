webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UseState.js":
/*!********************************!*\
  !*** ./components/UseState.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_hooks_useTitleInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hooks/useTitleInput */ "./lib/hooks/useTitleInput.js");



var _jsxFileName = "/Users/Roa/Desktop/next-hooks/components/UseState.js";



var UseStateComponent = function UseStateComponent() {
  var _useTitleInput = Object(_lib_hooks_useTitleInput__WEBPACK_IMPORTED_MODULE_4__["useTitleInput"])(''),
      _useTitleInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useTitleInput, 2),
      name = _useTitleInput2[0],
      setName = _useTitleInput2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      dishes = _useState2[0],
      setDishes = _useState2[1];

  var fetchDishes =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes");

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              setDishes(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchDishes() {
      return _ref.apply(this, arguments);
    };
  }(); // control use effect with the second parameter
  // empty array is equal to onmount
  // be sure to control it by adding a param to array


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchDishes();
  }, [name]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    value: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Submit")), dishes.map(function (dish) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
      className: "dish-card dish-card--withImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, dish.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, dish.desc), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "ingredients",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, dish.ingredients.map(function (ingredient) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, ingredient);
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UseStateComponent);

/***/ })

})
//# sourceMappingURL=index.js.e91714e18866e9d91958.hot-update.js.map