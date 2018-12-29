webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./actions/constants.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["SET_USER"]:
      var _action$payload = action.payload,
          name = _action$payload.name,
          id = _action$payload.id;
      return {
        name: name,
        id: id
      };

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT"]:
      return {};

    default:
      return {};
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.1f1842120cdced44b6ff.hot-update.js.map