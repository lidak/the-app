((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./actions/actionCreators.js":
/*!***********************************!*\
  !*** ./actions/actionCreators.js ***!
  \***********************************/
/*! exports provided: setUser, logOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./actions/constants.js");

var setUser = function setUser(payload) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_USER"],
    payload: payload
  };
};
var logOut = function logOut() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT"]
  };
};

/***/ }),

/***/ "./actions/constants.js":
/*!******************************!*\
  !*** ./actions/constants.js ***!
  \******************************/
/*! exports provided: SET_USER, LOG_OUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
var SET_USER = 'SET_USER';
var LOG_OUT = 'LOG_OUT';

/***/ }),

/***/ "./components/AddLiability/index.js":
/*!******************************************!*\
  !*** ./components/AddLiability/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddLiability; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-materialize */ "./node_modules/react-materialize/lib/index.js");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var AddLiability =
/*#__PURE__*/
function (_Component) {
  _inherits(AddLiability, _Component);

  function AddLiability() {
    var _this;

    _classCallCheck(this, AddLiability);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddLiability).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeTitle", function (e) {
      _this.setState({
        title: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeAmount", function (e) {
      _this.setState({
        amount: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addClicked", function () {
      var save = _this.props.save;
      var _this$state = _this.state,
          title = _this$state.title,
          amount = _this$state.amount;
      save({
        title: title,
        amount: amount
      });
    });

    _this.state = {
      title: '',
      amount: 0
    };
    return _this;
  }

  _createClass(AddLiability, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          title = _this$state2.title,
          amount = _this$state2.amount;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "add-liability"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: this.addClicked
      }, "Add"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.changeTitle,
        value: title,
        placeholder: "Liability title"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        value: amount,
        onChange: this.changeAmount,
        placeholder: "Amount"
      }));
    }
  }]);

  return AddLiability;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(AddLiability, "propTypes", {
  save: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
});



/***/ }),

/***/ "./components/AuthForm/index.js":
/*!**************************************!*\
  !*** ./components/AuthForm/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-names */ "./node_modules/class-names/index.js");
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(class_names__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_actionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/actionCreators */ "./actions/actionCreators.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Message */ "./components/Message/index.js");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-materialize */ "./node_modules/react-materialize/lib/index.js");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.styl */ "./components/AuthForm/style.styl");
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_8__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var AuthForm =
/*#__PURE__*/
function (_Component) {
  _inherits(AuthForm, _Component);

  function AuthForm() {
    var _this;

    _classCallCheck(this, AuthForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthForm).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setTextInputRef", function (element) {
      _this.textInput = element;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNameChange", function (e) {
      _this.setState({
        name: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPasswordChange", function (e) {
      _this.setState({
        password: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitForm", function (isRegister) {
      var _this$state = _this.state,
          name = _this$state.name,
          password = _this$state.password;
      var urlEnding = isRegister ? 'sign-up' : 'sign-in';
      var successMessage = isRegister ? 'User created' : 'User Logged In';
      var setUser = _this.props.setUser;

      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var rawResponse, content;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(window.location.origin, "/users/").concat(urlEnding), {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    name: name,
                    password: password
                  })
                });

              case 2:
                rawResponse = _context.sent;
                _context.next = 5;
                return rawResponse.json();

              case 5:
                content = _context.sent;

                if (content.error) {
                  _this.setState({
                    messageType: 'error',
                    messageText: content.error
                  });
                } else {
                  _this.setState({
                    messageType: 'info',
                    messageText: successMessage
                  });

                  setUser({
                    name: name,
                    password: password
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _this.state = {
      name: '',
      password: '',
      messageType: '',
      messageText: '',
      userId: null
    };
    return _this;
  }

  _createClass(AuthForm, [{
    key: "isNameValid",
    value: function isNameValid() {
      var name = this.state.name;
      return name.length && name.match(/^.{2,}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    }
  }, {
    key: "isPasswordValid",
    value: function isPasswordValid() {
      var password = this.state.password;
      return password.match(/(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/);
    }
  }, {
    key: "isFormValid",
    value: function isFormValid() {
      return this.isNameValid() && this.isPasswordValid();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          password = _this$state2.password,
          messageType = _this$state2.messageType,
          messageText = _this$state2.messageText;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_7__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "email",
        value: name,
        onChange: this.onNameChange,
        className: class_names__WEBPACK_IMPORTED_MODULE_4___default()(this.isNameValid() ? 'valid' : 'invalid', 'form-input'),
        label: "email",
        s: 12,
        m: 6
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "password",
        value: password,
        onChange: this.onPasswordChange,
        label: "password",
        className: this.isPasswordValid() ? 'valid' : 'invalid',
        s: 12,
        m: 6
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_7__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        s: 12,
        offset: "m6",
        m: 3
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        waves: "light",
        onClick: this.submitForm.bind(this, true),
        className: "button",
        disabled: !this.isFormValid()
      }, "Register")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        s: 12,
        m: 3
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: this.submitForm.bind(this, false),
        disabled: !this.isFormValid(),
        className: "button"
      }, "Log In")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: messageType,
        message: messageText
      })));
    }
  }]);

  return AuthForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

AuthForm.propTypes = {
  setUser: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    setUser: function setUser(user) {
      return dispatch(Object(_actions_actionCreators__WEBPACK_IMPORTED_MODULE_5__["setUser"])(user));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(AuthForm));

/***/ }),

/***/ "./components/Layout/components/Header/index.js":
/*!******************************************************!*\
  !*** ./components/Layout/components/Header/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AuthForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AuthForm */ "./components/AuthForm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-materialize */ "./node_modules/react-materialize/lib/index.js");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_actionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../actions/actionCreators */ "./actions/actionCreators.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          user = _this$props.user,
          logOut = _this$props.logOut;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, !user.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthForm__WEBPACK_IMPORTED_MODULE_2__["default"], null), !!user.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Welcome ".concat(user.name, "!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: logOut,
        className: "offset-m1"
      }, "Log Out")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Header, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  logOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user;
  return {
    user: user
  };
};

function mapDispatchToProps(dispatch) {
  return {
    logOut: function logOut() {
      dispatch(Object(_actions_actionCreators__WEBPACK_IMPORTED_MODULE_5__["logOut"])());
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./components/Layout/components/Header/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "layout"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};

/***/ }),

/***/ "./components/LiablilityItem/index.js":
/*!********************************************!*\
  !*** ./components/LiablilityItem/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.styl */ "./components/LiablilityItem/style.styl");
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      amount = _ref.amount,
      removeClicked = _ref.removeClicked;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "liability-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: removeClicked.bind(null, title)
  }, "Remove"));
});
"";

/***/ }),

/***/ "./components/Message/index.js":
/*!*************************************!*\
  !*** ./components/Message/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.styl */ "./components/Message/style.styl");
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Message =
/*#__PURE__*/
function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    var _this;

    _classCallCheck(this, Message);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Message).call(this));
    _this.state = {
      lastShown: new Date()
    };
    return _this;
  }

  _createClass(Message, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.message !== this.props.message || prevProps.type !== this.props.type) {
        this.setState({
          lastShown: new Date()
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'info' : _this$props$type,
          message = _this$props.message,
          _this$props$hideAfter = _this$props.hideAfter,
          hideAfter = _this$props$hideAfter === void 0 ? 5000 : _this$props$hideAfter;
      var lastShown = this.state.lastShown;
      var isVisible = new Date() - lastShown < hideAfter;
      return !!message.length && isVisible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message ".concat(type)
      }, message);
    }
  }]);

  return Message;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Message.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  hideAfter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/class-names/index.js":
/*!*******************************************!*\
  !*** ./node_modules/class-names/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/*!****************************************************!*\
  !*** ./node_modules/isomorphic-unfetch/browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__(/*! unfetch */ "./node_modules/next/node_modules/unfetch/dist/unfetch.es.js").default || __webpack_require__(/*! unfetch */ "./node_modules/next/node_modules/unfetch/dist/unfetch.es.js"));


/***/ }),

/***/ "./node_modules/next/node_modules/unfetch/dist/unfetch.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/node_modules/unfetch/dist/unfetch.es.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var index = typeof fetch=='function' ? fetch.bind() : function(url, options) {
	options = options || {};
	return new Promise( function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials=='include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body);

		function response() {
			var keys = [],
				all = [],
				headers = {},
				header;

			request.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function (m, key, value) {
				keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? (header + "," + value) : value;
			});

			return {
				ok: (request.status/200|0) == 1,		// 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function () { return Promise.resolve(request.responseText); },
				json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
				blob: function () { return Promise.resolve(new Blob([request.response])); },
				headers: {
					keys: function () { return keys; },
					entries: function () { return all; },
					get: function (n) { return headers[n.toLowerCase()]; },
					has: function (n) { return n.toLowerCase() in headers; }
				}
			};
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=unfetch.es.js.map


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_52339ab353c8e0db40da ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_52339ab353c8e0db40da */ "dll-reference dll_52339ab353c8e0db40da"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_52339ab353c8e0db40da ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_52339ab353c8e0db40da */ "dll-reference dll_52339ab353c8e0db40da"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_52339ab353c8e0db40da ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_52339ab353c8e0db40da */ "dll-reference dll_52339ab353c8e0db40da"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_52339ab353c8e0db40da ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_52339ab353c8e0db40da */ "dll-reference dll_52339ab353c8e0db40da"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-materialize/lib/Autocomplete.js":
/*!************************************************************!*\
  !*** ./node_modules/react-materialize/lib/Autocomplete.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! ./constants */ "./node_modules/react-materialize/lib/constants.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/react-materialize/lib/Icon.js"));

var _idgen = _interopRequireDefault(__webpack_require__(/*! ./idgen */ "./node_modules/react-materialize/lib/idgen.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Autocomplete =
/*#__PURE__*/
function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Autocomplete).call(this, props));
    _this.state = {
      value: props.value || '',
      itemSelected: false
    };
    _this.renderIcon = _this.renderIcon.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderDropdown = _this.renderDropdown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onChange = _this._onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value;

      if (value !== undefined) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "renderIcon",
    value: function renderIcon(icon, iconClassName) {
      return _react.default.createElement(_Icon.default, {
        className: iconClassName
      }, icon);
    }
  }, {
    key: "renderDropdown",
    value: function renderDropdown(data, minLength, limit) {
      var _this2 = this;

      var _this$state = this.state,
          value = _this$state.value,
          itemSelected = _this$state.itemSelected;

      if (minLength && minLength > value.length || !value || itemSelected) {
        return null;
      }

      var matches = Object.keys(data).filter(function (key) {
        var index = key.toUpperCase().indexOf(value.toUpperCase());
        return index !== -1 && value.length < key.length;
      });
      if (limit) matches = matches.slice(0, limit);

      if (matches.length === 0) {
        return null;
      }

      return _react.default.createElement("ul", {
        className: "autocomplete-content dropdown-content"
      }, matches.map(function (key, idx) {
        var index = key.toUpperCase().indexOf(value.toUpperCase());
        return _react.default.createElement("li", {
          key: key + '_' + idx,
          onClick: _this2._onAutocomplete.bind(_this2, key)
        }, data[key] ? _react.default.createElement("img", {
          src: data[key],
          className: "right circle"
        }) : null, _react.default.createElement("span", null, index !== 0 ? key.substring(0, index) : '', _react.default.createElement("span", {
          className: "highlight"
        }, value), key.length !== index + value.length ? key.substring(index + value.length) : ''));
      }));
    }
  }, {
    key: "_onChange",
    value: function _onChange(evt) {
      var onChange = this.props.onChange;
      var value = evt.target.value;

      if (onChange) {
        onChange(evt, value);
      }

      this.setState({
        value: value,
        itemSelected: false
      });
    }
  }, {
    key: "_onAutocomplete",
    value: function _onAutocomplete(value, evt) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onAutocomplete = _this$props.onAutocomplete;

      if (onAutocomplete) {
        onAutocomplete(value);
      }

      if (onChange) {
        onChange(evt, value);
      }

      this.setState({
        value: value,
        itemSelected: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          title = _this$props2.title,
          data = _this$props2.data,
          icon = _this$props2.icon,
          iconClassName = _this$props2.iconClassName,
          s = _this$props2.s,
          m = _this$props2.m,
          l = _this$props2.l,
          offset = _this$props2.offset,
          minLength = _this$props2.minLength,
          placeholder = _this$props2.placeholder,
          limit = _this$props2.limit,
          value = _this$props2.value,
          onChange = _this$props2.onChange,
          onAutocomplete = _this$props2.onAutocomplete,
          props = _objectWithoutProperties(_this$props2, ["id", "className", "title", "data", "icon", "iconClassName", "s", "m", "l", "offset", "minLength", "placeholder", "limit", "value", "onChange", "onAutocomplete"]);

      var _id = id || "autocomplete-".concat((0, _idgen.default)());

      var sizes = {
        s: s,
        m: m,
        l: l
      };
      var classes = {
        col: true
      };

      _constants.default.SIZES.forEach(function (size) {
        classes[size + sizes[size]] = sizes[size];
      });

      return _react.default.createElement("div", _extends({
        offset: offset,
        className: (0, _classnames.default)('input-field', className, classes)
      }, props), icon && this.renderIcon(icon, iconClassName), _react.default.createElement("input", {
        placeholder: placeholder,
        className: "autocomplete",
        id: _id,
        onChange: this._onChange,
        type: "text",
        value: this.state.value
      }), _react.default.createElement("label", {
        htmlFor: _id
      }, title), this.renderDropdown(data, minLength, limit));
    }
  }]);

  return Autocomplete;
}(_react.Component);

Autocomplete.propTypes = {
  /**
   * Uniquely identifies <input> generated by this component
   * Used by corresponding <label> for attribute
   */
  id: _propTypes.default.string,
  className: _propTypes.default.string,

  /*
   * The title of the autocomplete component.
   */
  title: _propTypes.default.string,

  /*
   * An object with the keys of the items to match in autocomplete
   * The values are either null or a location to an image
   */
  data: _propTypes.default.object.isRequired,

  /*
   * Optional materialize icon to add to the autocomplete bar
   */
  icon: _propTypes.default.string,
  iconClassName: _propTypes.default.string,
  s: _propTypes.default.number,
  m: _propTypes.default.number,
  l: _propTypes.default.number,
  offset: _propTypes.default.string,

  /*
   * Determine input length before dropdown
   */
  minLength: _propTypes.default.number,

  /**
   * The max amount of results that can be shown at once. Default: Infinity
   * */
  limit: _propTypes.default.number,

  /**
   * Placeholder for input element
   * */
  placeholder: _propTypes.default.string,

  /**
   * Called when the value of the input gets changed - by user typing or clicking on an auto-complete item.
   * Function signature: (event, value) => ()
   */
  onChange: _propTypes.default.func,

  /**
   * Called when auto-completed item is selected.
   * Function signature: (value) => ()
   */
  onAutocomplete: _propTypes.default.func,

  /**
   * The value of the input
   */
  value: _propTypes.default.string
};
var _default = Autocomplete;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Badge.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-materialize/lib/Badge.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Badge = function Badge(_ref) {
  var className = _ref.className,
      newIcon = _ref.newIcon,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "newIcon", "children"]);

  var classes = {
    badge: true,
    new: newIcon
  };
  return _react.default.createElement("span", _extends({}, props, {
    className: (0, _classnames.default)(classes, className)
  }), children);
};

Badge.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Add the <b>new</b> class name
   */
  newIcon: _propTypes.default.bool
};
var _default = Badge;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Breadcrumb.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-materialize/lib/Breadcrumb.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Col = _interopRequireDefault(__webpack_require__(/*! ./Col */ "./node_modules/react-materialize/lib/Col.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumb = function Breadcrumb(_ref) {
  var cols = _ref.cols,
      children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("nav", {
    className: (0, _classnames.default)('row', className)
  }, _react.default.createElement("div", {
    className: "nav-wrapper"
  }, _react.default.createElement(_Col.default, {
    s: cols
  }, _react.default.Children.map(children, function (item) {
    return _react.default.cloneElement(item, {
      className: 'breadcrumb'
    });
  }))));
};

Breadcrumb.propTypes = {
  children: _propTypes.default.node,
  cols: _propTypes.default.number,
  className: _propTypes.default.string
};
Breadcrumb.defaultProps = {
  cols: 12
};
var _default = Breadcrumb;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Button.js":
/*!******************************************************!*\
  !*** ./node_modules/react-materialize/lib/Button.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! ./constants */ "./node_modules/react-materialize/lib/constants.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/react-materialize/lib/Icon.js"));

var _idgen = _interopRequireDefault(__webpack_require__(/*! ./idgen */ "./node_modules/react-materialize/lib/idgen.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));
    _this.renderIcon = _this.renderIcon.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderFab = _this.renderFab.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          tooltip = _this$props.tooltip,
          tooltipOptions = _this$props.tooltipOptions;

      if (typeof $ !== 'undefined' && (typeof tooltip !== 'undefined' || typeof tooltipOptions !== 'undefined')) {
        $(this._btnEl).tooltip(tooltipOptions);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          node = _this$props2.node,
          fab = _this$props2.fab,
          fabClickOnly = _this$props2.fabClickOnly,
          modal = _this$props2.modal,
          flat = _this$props2.flat,
          floating = _this$props2.floating,
          large = _this$props2.large,
          disabled = _this$props2.disabled,
          waves = _this$props2.waves,
          tooltip = _this$props2.tooltip,
          other = _objectWithoutProperties(_this$props2, ["className", "node", "fab", "fabClickOnly", "modal", "flat", "floating", "large", "disabled", "waves", "tooltip"]);

      var toggle = fabClickOnly ? 'click-to-toggle' : '';
      var C = node;
      var classes = {
        btn: true,
        disabled: disabled,
        'waves-effect': waves
      };

      if (_constants.default.WAVES.indexOf(waves) > -1) {
        classes['waves-' + waves] = true;
      }

      var styles = {
        flat: flat,
        floating: floating,
        large: large
      };

      _constants.default.STYLES.forEach(function (style) {
        classes['btn-' + style] = styles[style];
      });

      if (modal) {
        classes['modal-action'] = true;
        classes['modal-' + modal] = true;
      }

      if (fab) {
        return this.renderFab((0, _classnames.default)(classes, className), fab, toggle);
      } else {
        return _react.default.createElement(C, _extends({}, other, {
          disabled: !!disabled,
          onClick: this.props.onClick,
          className: (0, _classnames.default)(classes, className),
          ref: function ref(el) {
            return _this2._btnEl = el;
          },
          "data-tooltip": tooltip
        }), this.renderIcon(), this.props.children);
      }
    }
  }, {
    key: "renderFab",
    value: function renderFab(className, mode, clickOnly) {
      var classes = (0, _classnames.default)(mode, clickOnly);
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('fixed-action-btn', classes)
      }, _react.default.createElement("a", {
        className: className
      }, this.renderIcon()), _react.default.createElement("ul", null, _react.default.Children.map(this.props.children, function (child) {
        return _react.default.createElement("li", {
          key: (0, _idgen.default)()
        }, child);
      })));
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var icon = this.props.icon;
      if (!icon) return;
      return _react.default.createElement(_Icon.default, null, icon);
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,

  /**
   * Enable other styles
   */
  flat: _propTypes.default.bool,
  large: _propTypes.default.bool,
  floating: _propTypes.default.bool,

  /**
   * Fixed action button
   * If enabled, any children button will be rendered as actions, remember to provide an icon.
   * @default vertical. This will disable any onClick function from being called on the main button.
   */
  fab: _propTypes.default.oneOf(['vertical', 'horizontal', 'toolbar']),

  /**
   * The icon to display, if specified it will create a button with the material icon.
   */
  icon: _propTypes.default.string,
  modal: _propTypes.default.oneOf(['close', 'confirm']),
  node: _propTypes.default.node,

  /**
   * Will be disabled when fab is set.
   */
  onClick: _propTypes.default.func,

  /**
   * Tooltip to show when mouse hovered
   */
  tooltip: _propTypes.default.string,

  /**
   * Tooltips options as here
   * http://archives.materializecss.com/0.100.2/dialogs.html#tooltip
   */
  tooltipOptions: _propTypes.default.shape({
    delay: _propTypes.default.number,
    position: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
    tooltip: _propTypes.default.string,
    html: _propTypes.default.bool
  }),
  waves: _propTypes.default.oneOf(['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal']),

  /**
   * FAB Click-Only
   * Turns a FAB from a hover-toggle to a click-toggle
   */
  fabClickOnly: _propTypes.default.bool
};
Button.defaultProps = {
  node: 'button'
};
var _default = Button;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Card.js":
/*!****************************************************!*\
  !*** ./node_modules/react-materialize/lib/Card.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/react-materialize/lib/Icon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Card =
/*#__PURE__*/
function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    var _this;

    _classCallCheck(this, Card);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Card).call(this, props));
    _this.renderTitle = _this.renderTitle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderReveal = _this.renderReveal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderAction = _this.renderAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderContent = _this.renderContent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderAll = _this.renderAll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Card, [{
    key: "renderTitle",
    value: function renderTitle(title, reveal) {
      return _react.default.createElement("span", {
        className: (0, _classnames.default)('card-title', 'grey-text', 'text-darken-4', {
          activator: reveal
        })
      }, title, reveal && _react.default.createElement(_Icon.default, {
        right: true
      }, "more_vert"));
    }
  }, {
    key: "renderReveal",
    value: function renderReveal(title, reveal) {
      return _react.default.createElement("div", {
        className: "card-reveal"
      }, _react.default.createElement("span", {
        className: "card-title grey-text text-darken-4"
      }, title, _react.default.createElement(_Icon.default, {
        right: true
      }, "close")), reveal);
    }
  }, {
    key: "renderAction",
    value: function renderAction(actions) {
      return _react.default.createElement("div", {
        className: "card-action"
      }, actions);
    }
  }, {
    key: "renderContent",
    value: function renderContent(title, reveal, textClassName, children) {
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('card-content', textClassName)
      }, title && this.renderTitle(title, reveal), _react.default.createElement("div", null, children));
    }
  }, {
    key: "renderAll",
    value: function renderAll(title, reveal, textClassName, children, actions) {
      return _react.default.createElement(_react.default.Fragment, null, this.renderContent(title, reveal, textClassName, children), this.renderReveal(title, reveal), actions && this.renderAction(actions));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          header = _this$props.header,
          className = _this$props.className,
          textClassName = _this$props.textClassName,
          actions = _this$props.actions,
          reveal = _this$props.reveal,
          children = _this$props.children,
          horizontal = _this$props.horizontal,
          other = _objectWithoutProperties(_this$props, ["title", "header", "className", "textClassName", "actions", "reveal", "children", "horizontal"]);

      var classes = {
        card: true,
        horizontal: horizontal
      };
      return _react.default.createElement("div", _extends({}, other, {
        className: (0, _classnames.default)(className, classes)
      }), header, horizontal ? _react.default.createElement("div", {
        className: "card-stacked"
      }, this.renderAll(title, reveal, textClassName, children, actions)) : this.renderAll(title, reveal, textClassName, children, actions));
    }
  }]);

  return Card;
}(_react.Component);

Card.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  textClassName: _propTypes.default.string,
  reveal: _propTypes.default.element,
  header: _propTypes.default.element,
  // The buttons to be displayed at the action area
  actions: _propTypes.default.arrayOf(_propTypes.default.element),
  horizontal: _propTypes.default.bool
};
var _default = Card;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/CardPanel.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-materialize/lib/CardPanel.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CardPanel = function CardPanel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = {
    'card-panel': true
  };
  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(classes, className)
  }, props), children);
};

CardPanel.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = CardPanel;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/CardTitle.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-materialize/lib/CardTitle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! ./constants */ "./node_modules/react-materialize/lib/constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CardTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(CardTitle, _Component);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardTitle).apply(this, arguments));
  }

  _createClass(CardTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          image = _this$props.image,
          reveal = _this$props.reveal,
          waves = _this$props.waves,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["image", "reveal", "waves", "children"]);

      var classes = (0, _classnames.default)(_defineProperty({
        'card-image': true,
        'waves-effect': waves,
        'waves-block': waves
      }, "waves-".concat(waves), waves));
      return _react.default.createElement("div", _extends({
        className: (0, _classnames.default)(classes)
      }, props), _react.default.createElement("img", {
        className: (0, _classnames.default)({
          activator: reveal
        }),
        src: image
      }), _react.default.createElement("span", {
        className: (0, _classnames.default)('card-title')
      }, children));
    }
  }]);

  return CardTitle;
}(_react.Component);

CardTitle.propTypes = {
  children: _propTypes.default.node,
  // Whether the image serves as activator for the reveal
  reveal: _propTypes.default.bool,
  // the waves effect
  waves: _propTypes.default.oneOf(_constants.default.WAVES),
  // The path to the image
  image: _propTypes.default.string.isRequired
};
var _default = CardTitle;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Carousel.js":
/*!********************************************************!*\
  !*** ./node_modules/react-materialize/lib/Carousel.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));
    _this.renderFixedItem = _this.renderFixedItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$options = this.props.options,
          options = _this$props$options === void 0 ? {} : _this$props$options;

      if (typeof $ !== 'undefined') {
        $(this._carousel).carousel(options);
      }
    }
  }, {
    key: "renderItems",
    value: function renderItems(child, idx) {
      if (typeof child === 'string') {
        return _react.default.createElement("a", {
          className: "carousel-item"
        }, _react.default.createElement("img", {
          src: child
        }));
      }

      return _react.default.cloneElement(child, {
        className: (0, _classnames.default)(child.props.className, 'carousel-item')
      });
    }
  }, {
    key: "renderFixedItem",
    value: function renderFixedItem() {
      var fixedItem = this.props.fixedItem;
      return fixedItem && _react.default.createElement("div", {
        className: "carousel-fixed-item center"
      }, fixedItem);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          carouselId = _this$props.carouselId,
          images = _this$props.images,
          _this$props$options2 = _this$props.options,
          options = _this$props$options2 === void 0 ? {} : _this$props$options2;
      var elemsToRender = children || images || [];
      return elemsToRender && _react.default.createElement("div", {
        id: carouselId,
        ref: function ref(el) {
          _this2._carousel = el;
        },
        className: (0, _classnames.default)('carousel', {
          'carousel-slider': options.fullWidth
        }, className)
      }, this.renderFixedItem(), _react.default.Children.map(elemsToRender, this.renderItems));
    }
  }]);

  return Carousel;
}(_react.default.Component);

Carousel.propTypes = {
  /*
  * Children to render as slider elements
  */
  children: _propTypes.default.any,

  /*
  * Array of image url's
  */
  images: _propTypes.default.arrayOf(_propTypes.default.string),

  /*
  * Fixed element on slider
  */
  fixedItem: _propTypes.default.node,

  /*
  * Additional classNames for carousel wrapper
  */
  className: _propTypes.default.string,

  /*
  * Carousel ID for jQuery manipulating
  */
  carouselId: _propTypes.default.string,

  /*
   * Carousel initialization options
   * <a href="http://materializecss.com/carousel.html">http://materializecss.com/carousel.html</a>
  */
  options: _propTypes.default.shape({
    /*
    * Transition duration in milliseconds. (Default: 200)
    */
    duration: _propTypes.default.number,

    /*
    * Perspective zoom. If 0, all items are the same size. (Default: -100)
    */
    dist: _propTypes.default.number,

    /*
    * Set the spacing of the center item. (Default: 0)
    */
    shift: _propTypes.default.number,

    /*
    * Set the padding between non center items. (Default: 0)
    */
    padding: _propTypes.default.number,

    /*
    * Make the carousel a full width slider like the second example. (Default: false)
    */
    fullWidth: _propTypes.default.bool,

    /*
    * Set to true to show indicators. (Default: false)
    */
    indicators: _propTypes.default.bool,

    /*
     * Don't wrap around and cycle through items. (Default: false)
    */
    noWrap: _propTypes.default.bool
  })
};
var _default = Carousel;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Chip.js":
/*!****************************************************!*\
  !*** ./node_modules/react-materialize/lib/Chip.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/react-materialize/lib/Icon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Chip = function Chip(_ref) {
  var children = _ref.children,
      close = _ref.close,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "close", "className"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)('chip', className)
  }, props), children, close && _react.default.createElement(_Icon.default, null, "close"));
};

Chip.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Shows a close icon
   */
  close: _propTypes.default.bool
};
Chip.defaultProps = {
  close: false
};
var _default = Chip;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Col.js":
/*!***************************************************!*\
  !*** ./node_modules/react-materialize/lib/Col.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! ./constants */ "./node_modules/react-materialize/lib/constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Col =
/*#__PURE__*/
function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, _getPrototypeOf(Col).apply(this, arguments));
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          _this$props$node = _this$props.node,
          C = _this$props$node === void 0 ? 'div' : _this$props$node,
          s = _this$props.s,
          m = _this$props.m,
          l = _this$props.l,
          xl = _this$props.xl,
          offset = _this$props.offset,
          push = _this$props.push,
          pull = _this$props.pull,
          other = _objectWithoutProperties(_this$props, ["children", "className", "node", "s", "m", "l", "xl", "offset", "push", "pull"]);

      var sizes = {
        s: s,
        m: m,
        l: l,
        xl: xl
      };
      var classes = {
        col: true
      };

      _constants.default.SIZES.forEach(function (size) {
        return classes[size + sizes[size]] = sizes[size];
      });

      if (offset) {
        offset.split(' ').forEach(function (offset) {
          return classes['offset-' + offset] = true;
        });
      }

      if (push) {
        push.split(' ').forEach(function (push) {
          return classes['push-' + push] = true;
        });
      }

      if (pull) {
        pull.split(' ').forEach(function (pull) {
          return classes['pull-' + pull] = true;
        });
      }

      return _react.default.createElement(C, _extends({}, other, {
        className: (0, _classnames.default)(classes, className)
      }), children);
    }
  }]);

  return Col;
}(_react.Component);

Col.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Columns for extra large size screens (Large Desktop Devices > 1200px)
   */
  xl: _propTypes.default.number,

  /**
   * Columns for large size screens (Desktop Devices > 992px)
   */
  l: _propTypes.default.number,

  /**
   * Columns for middle size screens (Tablet Devices > 600px)
   */
  m: _propTypes.default.number,

  /**
   * Columns for small size screens (Mobile Devices <= 600px)
   */
  s: _propTypes.default.number,

  /**
   * The node to be used for the column
   * @default div
   */
  node: _propTypes.default.node,

  /**
   * To offset/push/pull, simply add s2 to the class where s signifies the screen
   * class-prefix (s = mobile devices, m = tablet devices, l = desktop devices, xl= large desktop devices) and the number after
   * is the number of columns you want to offset/push/pull by.
   */
  offset: _propTypes.default.string,
  push: _propTypes.default.string,
  pull: _propTypes.default.string
};
var _default = Col;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Collapsible.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-materialize/lib/Collapsible.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Collapsible =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapsible, _Component);

  function Collapsible(props) {
    var _this;

    _classCallCheck(this, Collapsible);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapsible).call(this, props));
    _this.state = {
      activeKey: props.defaultActiveKey
    };
    _this.renderItem = _this.renderItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Collapsible, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $(this._collapsible).collapsible();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          accordion = _this$props.accordion,
          popout = _this$props.popout,
          className = _this$props.className,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["accordion", "popout", "className", "children"]);

      delete props.defaultActiveKey;
      var classes = {
        collapsible: true,
        popout: popout
      };
      var collapsible = accordion ? 'accordion' : 'expandable';
      return _react.default.createElement("ul", _extends({
        ref: function ref(node) {
          _this2._collapsible = node;
        },
        className: (0, _classnames.default)(className, classes),
        "data-collapsible": collapsible
      }, props), _react.default.Children.map(children, this.renderItem));
    }
  }, {
    key: "renderItem",
    value: function renderItem(child, key) {
      if (!child) return null;
      var props = {
        onSelect: this.handleSelect
      }; // Extend with props if child is a react component

      if (typeof child.type === 'function') {
        Object.assign(props, {
          expanded: this.state.activeKey === key || child.props.expanded,
          eventKey: key
        });
      }

      return _react.default.cloneElement(child, props);
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(key) {
      var onSelect = this.props.onSelect;

      if (onSelect) {
        onSelect(key);
      }

      if (this.state.activeKey === key) {
        key = null;
      }

      if (this.props.accordion) {
        this.setState({
          activeKey: key
        });
      }
    }
  }]);

  return Collapsible;
}(_react.Component);

Collapsible.propTypes = {
  /**
   * There are two ways a collapsible can behave. It can either allow multiple sections to stay open,
   * or it can only allow one section to stay open at a time, which is called an accordion.
   * @default false
   */
  accordion: _propTypes.default.bool,
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Enable popout style
   */
  popout: _propTypes.default.bool,

  /**
   * The default CollapsibleItem that should be expanded. This value should match the specified
   * item's eventKey value. Ignored if accordion is false.
   */
  defaultActiveKey: _propTypes.default.any,
  onSelect: _propTypes.default.func
};
Collapsible.defaultProps = {
  accordion: false
};
var _default = Collapsible;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/CollapsibleItem.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-materialize/lib/CollapsibleItem.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/react-materialize/lib/Icon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CollapsibleItem = function CollapsibleItem(_ref) {
  var className = _ref.className,
      eventKey = _ref.eventKey,
      expanded = _ref.expanded,
      header = _ref.header,
      children = _ref.children,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      Node = _ref.node,
      onSelect = _ref.onSelect,
      props = _objectWithoutProperties(_ref, ["className", "eventKey", "expanded", "header", "children", "icon", "iconClassName", "node", "onSelect"]);

  return _react.default.createElement("li", _extends({
    className: (0, _classnames.default)(className, {
      active: expanded
    })
  }, props), _react.default.createElement(Node, {
    className: (0, _classnames.default)('collapsible-header', {
      active: expanded
    }),
    onClick: function onClick() {
      return onSelect(eventKey);
    }
  }, icon && _react.default.createElement(_Icon.default, {
    className: iconClassName
  }, icon), header), _react.default.createElement("div", {
    className: "collapsible-body"
  }, children));
};

CollapsibleItem.propTypes = {
  header: _propTypes.default.any.isRequired,
  icon: _propTypes.default.string,
  iconClassName: _propTypes.default.string,
  children: _propTypes.default.node,
  onSelect: _propTypes.default.func,

  /**
   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
   * @default false
   */
  expanded: _propTypes.default.bool,

  /**
   * The value to pass to the onSelect callback.
   */
  eventKey: _propTypes.default.any,
  className: _propTypes.default.string,

  /**
   * The node type of the header
   * @default a
   */
  node: _propTypes.default.node,

  /**
   * The scroll behavior for scrollIntoView
   */
  scroll: _propTypes.default.oneOf(['auto', 'instant', 'smooth'])
};
CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'div'
};
var _default = CollapsibleItem;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Collection.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-materialize/lib/Collection.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Collection =
/*#__PURE__*/
function (_Component) {
  _inherits(Collection, _Component);

  function Collection(props) {
    var _this;

    _classCallCheck(this, Collection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collection).call(this, props));
    _this.renderHeader = _this.renderHeader.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Collection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          header = _this$props.header,
          className = _this$props.className;
      var C = 'ul';

      _react.default.Children.forEach(children, function (child) {
        if (child.props.href) {
          C = 'div';
        }
      });

      return _react.default.createElement(C, {
        className: (0, _classnames.default)('collection', {
          'with-header': !!header
        }, className)
      }, header ? this.renderHeader() : null, children);
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var header;

      if (this.props.header) {
        if (_react.default.isValidElement(this.props.header)) {
          header = this.props.header;
        } else {
          header = _react.default.createElement("h4", null, this.props.header);
        }

        return _react.default.createElement("li", {
          className: "collection-header"
        }, header);
      }
    }
  }]);

  return Collection;
}(_react.Component);

Collection.propTypes = {
  children: _propTypes.default.node,
  header: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = Collection;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/CollectionItem.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-materialize/lib/CollectionItem.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CollectionItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CollectionItem, _Component);

  function CollectionItem() {
    _classCallCheck(this, CollectionItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(CollectionItem).apply(this, arguments));
  }

  _createClass(CollectionItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["active", "children", "className"]);

      var classes = {
        'collection-item': true,
        active: active
      };
      var C = this.props.href ? 'a' : 'li';
      return _react.default.createElement(C, _extends({}, other, {
        className: (0, _classnames.default)(className, classes)
      }), children);
    }
  }]);

  return CollectionItem;
}(_react.Component);

CollectionItem.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  href: _propTypes.default.string
};
var _default = CollectionItem;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Container.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-materialize/lib/Container.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = function Container(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)('container', className)
  }, props), children);
};

Container.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = Container;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Divider.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-materialize/lib/Divider.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider() {
  return _react.default.createElement("div", {
    className: "divider"
  });
};

var _default = Divider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Dropdown.js":
/*!********************************************************!*\
  !*** ./node_modules/react-materialize/lib/Dropdown.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _idgen = _interopRequireDefault(__webpack_require__(/*! ./idgen */ "./node_modules/react-materialize/lib/idgen.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var classes = {
  'dropdown-content': true
};

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.idx = 'dropdown_' + (0, _idgen.default)();
    _this.renderTrigger = _this.renderTrigger.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options || {};
      $(this._trigger).dropdown(options);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      $(this._trigger).off();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ["children", "className"]);

      delete props.trigger;
      delete props.options;
      return _react.default.createElement("span", null, this.renderTrigger(), _react.default.createElement("ul", _extends({}, props, {
        className: (0, _classnames.default)(classes, className),
        id: this.idx
      }), children));
    }
  }, {
    key: "renderTrigger",
    value: function renderTrigger() {
      var _this2 = this;

      var trigger = this.props.trigger;
      return _react.default.cloneElement(trigger, {
        ref: function ref(t) {
          return _this2._trigger = "[data-activates=".concat(_this2.idx, "]");
        },
        className: (0, _classnames.default)(trigger.props.className, 'dropdown-button'),
        'data-activates': this.idx
      });
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  /**
   * The node to trigger the dropdown
   */
  trigger: _propTypes.default.node.isRequired,
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Options hash for the dropdown
   * more info: http://materializecss.com/dropdown.html#options
   */
  options: _propTypes.default.shape({
    inDuration: _propTypes.default.number,
    outDuration: _propTypes.default.number,
    constrainWidth: _propTypes.default.bool,
    hover: _propTypes.default.bool,
    gutter: _propTypes.default.number,
    belowOrigin: _propTypes.default.bool,
    alignment: _propTypes.default.oneOf(['left', 'right'])
  })
};
var _default = Dropdown;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Footer.js":
/*!******************************************************!*\
  !*** ./node_modules/react-materialize/lib/Footer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Row = _interopRequireDefault(__webpack_require__(/*! ./Row */ "./node_modules/react-materialize/lib/Row.js"));

var _Col = _interopRequireDefault(__webpack_require__(/*! ./Col */ "./node_modules/react-materialize/lib/Col.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          copyrights = _this$props.copyrights,
          links = _this$props.links,
          moreLinks = _this$props.moreLinks,
          props = _objectWithoutProperties(_this$props, ["children", "className", "copyrights", "links", "moreLinks"]);

      var classes = {
        'page-footer': true
      };
      return _react.default.createElement("footer", _extends({
        className: (0, _classnames.default)(classes, className)
      }, props), _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement(_Row.default, null, _react.default.createElement(_Col.default, {
        l: 6,
        s: 12
      }, children), _react.default.createElement(_Col.default, {
        l: 4,
        s: 12,
        offset: "l2"
      }, links))), _react.default.createElement("div", {
        className: "footer-copyright"
      }, _react.default.createElement("div", {
        className: "container"
      }, copyrights, moreLinks)));
    }
  }]);

  return Footer;
}(_react.Component);

Footer.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  copyrights: _propTypes.default.string,
  links: _propTypes.default.node,
  moreLinks: _propTypes.default.node
};
var _default = Footer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Icon.js":
/*!****************************************************!*\
  !*** ./node_modules/react-materialize/lib/Icon.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! ./constants */ "./node_modules/react-materialize/lib/constants.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this = this;

      var classes = {
        'material-icons': true
      };

      _constants.default.PLACEMENTS.forEach(function (p) {
        classes[p] = _this.props[p];
      });

      _constants.default.ICON_SIZES.forEach(function (s) {
        classes[s] = _this.props[s];
      });

      return _react.default.createElement("i", {
        className: (0, _classnames.default)(classes, this.props.className)
      }, this.props.children);
    }
  }]);

  return Icon;
}(_react.default.Component);

Icon.propTypes = {
  /*
   * Classname passed to i tag
   */
  className: _propTypes.default.string,

  /*
   * Icon type: <a href='https://material.io/icons/'>https://material.io/icons/</a>
   */
  children: _propTypes.default.string,

  /*
   * Placement for icon if used beside a text ↓
   */
  left: _propTypes.default.bool,
  center: _propTypes.default.bool,
  right: _propTypes.default.bool,

  /*
   * Sizes for icons ↓
   */
  tiny: _propTypes.default.bool,
  small: _propTypes.default.bool,
  medium: _propTypes.default.bool,
  large: _propTypes.default.bool
};
var _default = Icon;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Input.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-materialize/lib/Input.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _idgen = _interopRequireDefault(__webpack_require__(/*! ./idgen */ "./node_modules/react-materialize/lib/idgen.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! ./constants */ "./node_modules/react-materialize/lib/constants.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/react-materialize/lib/Icon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));
    _this.state = {
      value: props.value || props.defaultValue,
      checked: !!props.checked
    };
    _this._onChange = _this._onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getMultipleValues = _this.getMultipleValues.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.isSelect = _this.isSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isMaterialSelect()) {
        $(this.selectInput).material_select();
        $(this.selectInput).on('change', this._onChange);
      }

      if (this.isDatePicker) {
        $(this.dateInput).pickadate(this.props.options);
        $(this.dateInput).on('change', this._onChange);
      }

      if (this.isTimePicker) {
        $(this.timeInput).pickatime(this.props.options);
        $(this.timeInput).on('change', this._onChange);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.isMaterialSelect() && !this.props.multiple) {
        $(this.selectInput).material_select();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.type === 'checkbox' && this.state.checked !== nextProps.checked) {
        this.setState({
          checked: nextProps.checked
        });
      }

      if (this.isMaterialSelect() && !this.props.multiple) {
        this.setState({
          value: nextProps.defaultValue
        }, function () {
          return $(_this2.selectInput).material_select();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isMaterialSelect()) {
        $(this.selectInput).off('change', this._onChange);
      }
    }
  }, {
    key: "getMultipleValues",
    value: function getMultipleValues(_ref) {
      var options = _ref.options;

      if (!options) {
        return;
      }

      return Array.from(options).filter(function (opt) {
        return opt.selected;
      }).map(function (opt) {
        return opt.value;
      });
    }
  }, {
    key: "_onChange",
    value: function _onChange(e) {
      var onChange = this.props.onChange;
      var types = {
        checkbox: e.target.checked,
        radio: e.target.checked,
        'select-multiple': this.getMultipleValues(e.target),
        default: e.target.value
      };
      var value = types.hasOwnProperty(e.target.type) ? types[e.target.type] : types['default'];

      if (onChange) {
        onChange(e, value);
      }

      this.setState({
        value: value,
        checked: e.target.checked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          browserDefault = _this$props.browserDefault,
          children = _this$props.children,
          className = _this$props.className,
          labelClassName = _this$props.labelClassName,
          defaultValue = _this$props.defaultValue,
          error = _this$props.error,
          label = _this$props.label,
          multiple = _this$props.multiple,
          placeholder = _this$props.placeholder,
          success = _this$props.success,
          s = _this$props.s,
          m = _this$props.m,
          l = _this$props.l,
          xl = _this$props.xl,
          type = _this$props.type,
          validate = _this$props.validate,
          onLabel = _this$props.onLabel,
          offLabel = _this$props.offLabel,
          inline = _this$props.inline,
          other = _objectWithoutProperties(_this$props, ["browserDefault", "children", "className", "labelClassName", "defaultValue", "error", "label", "multiple", "placeholder", "success", "s", "m", "l", "xl", "type", "validate", "onLabel", "offLabel", "inline"]);

      var sizes = {
        s: s,
        m: m,
        l: l,
        xl: xl
      };
      this._id = this._id || this.props.id || "input_".concat((0, _idgen.default)());
      var classes = {
        col: true,
        inline: type !== 'checkbox' && type !== 'radio' && inline,
        'input-field': type !== 'checkbox' && type !== 'radio' && type !== 'file',
        'file-field': type === 'file'
      };

      _constants.default.SIZES.forEach(function (size) {
        classes[size + sizes[size]] = sizes[size];
      });

      var inputClasses = {
        validate: validate,
        invalid: error,
        valid: success,
        'browser-default': browserDefault && this.isSelect()
      };
      var C, inputType;

      switch (type) {
        case 'textarea':
          C = 'textarea';
          inputClasses['materialize-textarea'] = true;
          break;

        case 'switch':
          C = 'input';
          inputType = 'checkbox';
          break;

        case 'file':
          C = 'input';
          inputClasses['file-path'] = true;
          break;

        default:
          C = 'input';
          inputType = type || 'text';
      }

      var labelClasses = {
        active: this.state.value || this.isSelect() || placeholder
      };
      var htmlLabel = label || inputType === 'radio' ? _react.default.createElement("label", {
        className: (0, _classnames.default)(labelClasses, labelClassName),
        "data-success": success,
        "data-error": error,
        htmlFor: this._id
      }, label) : null;

      if (this.isSelect()) {
        var options = placeholder && !defaultValue ? [_react.default.createElement("option", {
          disabled: true,
          key: (0, _idgen.default)()
        }, placeholder)] : [];
        options = options.concat(_react.default.Children.map(children, function (child) {
          return _react.default.cloneElement(child, {
            key: child.props.value
          });
        }));
        return _react.default.createElement("div", {
          className: (0, _classnames.default)(classes)
        }, this.renderIcon(), htmlLabel, _react.default.createElement("select", _extends({}, other, {
          multiple: multiple,
          id: this._id,
          className: (0, _classnames.default)(className, inputClasses),
          ref: function ref(_ref2) {
            return _this3.selectInput = _ref2;
          },
          defaultValue: defaultValue
        }), options));
      } else if (type === 'date') {
        this.isDatePicker = true;
        delete other.options;
        return _react.default.createElement("div", {
          className: (0, _classnames.default)(classes)
        }, this.renderIcon(), _react.default.createElement(C, _extends({}, other, {
          className: (0, _classnames.default)(className, inputClasses),
          defaultValue: defaultValue,
          id: this._id,
          ref: function ref(_ref3) {
            return _this3.dateInput = _ref3;
          },
          placeholder: placeholder,
          type: "date"
        })), htmlLabel);
      } else if (type === 'time') {
        this.isTimePicker = true;
        delete other.options;
        return _react.default.createElement("div", {
          className: (0, _classnames.default)(classes)
        }, this.renderIcon(), _react.default.createElement(C, _extends({}, other, {
          className: (0, _classnames.default)(className, inputClasses),
          defaultValue: defaultValue,
          id: this._id,
          ref: function ref(_ref4) {
            return _this3.timeInput = _ref4;
          },
          placeholder: placeholder
        })), htmlLabel);
      } else if (type === 'switch') {
        return _react.default.createElement("div", {
          className: "switch"
        }, _react.default.createElement("label", null, offLabel || 'Off', _react.default.createElement("input", _extends({}, other, {
          onChange: this._onChange,
          type: "checkbox"
        })), _react.default.createElement("span", {
          className: "lever"
        }), onLabel || 'On'));
      } else if (type === 'file') {
        return _react.default.createElement("div", {
          className: (0, _classnames.default)(classes)
        }, _react.default.createElement("div", {
          className: "btn"
        }, _react.default.createElement("span", null, label), _react.default.createElement(C, _extends({
          type: "file",
          multiple: multiple
        }, other))), _react.default.createElement("div", {
          className: "file-path-wrapper"
        }, _react.default.createElement(C, {
          type: "text",
          className: (0, _classnames.default)(className, inputClasses),
          defaultValue: defaultValue,
          id: this._id,
          placeholder: placeholder
        })));
      } else {
        var _defaultValue = inputType !== 'checkbox' && inputType !== 'radio' ? this.state.value : _defaultValue;

        if (inputType === 'checkbox' || inputType === 'radio') {
          return _react.default.createElement("div", {
            className: (0, _classnames.default)(classes)
          }, this.renderIcon(), _react.default.createElement(C, _extends({}, other, {
            className: (0, _classnames.default)(className, inputClasses),
            ref: function ref(_ref5) {
              return _this3.input = _ref5;
            },
            id: this._id,
            checked: this.state.checked,
            onChange: this._onChange,
            placeholder: placeholder,
            type: inputType
          })), htmlLabel);
        }

        return _react.default.createElement("div", {
          className: (0, _classnames.default)(classes)
        }, this.renderIcon(), _react.default.createElement(C, _extends({}, other, {
          className: (0, _classnames.default)(className, inputClasses),
          ref: function ref(_ref6) {
            return _this3.input = _ref6;
          },
          defaultValue: _defaultValue,
          id: this._id,
          onChange: this._onChange,
          placeholder: placeholder,
          type: inputType
        })), htmlLabel);
      }
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          children = _this$props2.children;

      if (icon) {
        return _react.default.createElement(_Icon.default, {
          className: "prefix"
        }, icon);
      } else {
        var _icon = null;

        if (_react.default.Children.count(children) === 1 && !Array.isArray(children)) {
          _icon = _react.default.Children.only(children);
        }

        return _icon === null ? null : _react.default.cloneElement(_icon, {
          className: 'prefix'
        });
      }
    }
  }, {
    key: "isSelect",
    value: function isSelect() {
      return this.props.type === 'select';
    }
  }, {
    key: "isMaterialSelect",
    value: function isMaterialSelect() {
      return this.props.type === 'select' && !this.props.browserDefault && typeof $ !== 'undefined';
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  /*
   * Responsive size for Mobile Devices
   */
  s: _propTypes.default.number,

  /*
   * Responsive size for Tablet Devices
   */
  m: _propTypes.default.number,

  /*
   * Responsive size for Desktop Devices
   */
  l: _propTypes.default.number,

  /**
   *  Responsive size for Large Desktop Devices
   */
  xl: _propTypes.default.number,
  inline: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  labelClassName: _propTypes.default.string,
  label: _propTypes.default.node,
  error: _propTypes.default.string,
  success: _propTypes.default.string,

  /**
   * Input field type, e.g. select, checkbox, radio, text, tel, email, file
   * @default 'text'
   */
  type: _propTypes.default.string,
  defaultValue: _propTypes.default.any,
  placeholder: _propTypes.default.string,
  id: _propTypes.default.string,
  icon: _propTypes.default.string,
  name: _propTypes.default.string,
  validate: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  browserDefault: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  onLabel: _propTypes.default.string,
  offLabel: _propTypes.default.string,
  onChange: _propTypes.default.func,
  options: _propTypes.default.any,

  /**
   * Value used to set a initial value
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array])
};
Input.defaultProps = {
  type: 'text',
  checked: false
};
var _default = Input;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/MediaBox.js":
/*!********************************************************!*\
  !*** ./node_modules/react-materialize/lib/MediaBox.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MediaBox =
/*#__PURE__*/
function (_Component) {
  _inherits(MediaBox, _Component);

  function MediaBox() {
    _classCallCheck(this, MediaBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(MediaBox).apply(this, arguments));
  }

  _createClass(MediaBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('.materialboxed').materialbox();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          src = _this$props.src,
          className = _this$props.className,
          caption = _this$props.caption,
          props = _objectWithoutProperties(_this$props, ["src", "className", "caption"]);

      return _react.default.createElement("img", _extends({
        className: (0, _classnames.default)('materialboxed', className),
        "data-caption": caption,
        src: src
      }, props));
    }
  }]);

  return MediaBox;
}(_react.Component);

MediaBox.propTypes = {
  className: _propTypes.default.string,

  /**
   * The caption shown below the image when opened
   */
  caption: _propTypes.default.string,

  /**
   * The path to the image
   */
  src: _propTypes.default.string.isRequired
};
var _default = MediaBox;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/MenuItem.js":
/*!********************************************************!*\
  !*** ./node_modules/react-materialize/lib/MenuItem.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// This should be used within any component that has a menu like interface
var MenuItem =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuItem).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          href = _this$props.href,
          breadcrumbItem = _this$props.breadcrumbItem,
          children = _this$props.children,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ["href", "breadcrumbItem", "children", "className"]);

      var classes = {
        breadcrumb: breadcrumbItem
      };
      return _react.default.createElement("a", _extends({
        href: href
      }, props, {
        className: (0, _classnames.default)(classes, className)
      }), children);
    }
  }]);

  return MenuItem;
}(_react.Component);

MenuItem.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  // internal
  breadcrumbItem: _propTypes.default.bool,

  /**
   * The link for the anchor
   */
  href: _propTypes.default.string
};
var _default = MenuItem;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Modal.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-materialize/lib/Modal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _idgen = _interopRequireDefault(__webpack_require__(/*! ./idgen */ "./node_modules/react-materialize/lib/idgen.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ "./node_modules/react-materialize/lib/Button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.modalID = props.id || "modal_".concat((0, _idgen.default)());
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.createRoot();

    return _this;
  }

  _createClass(Modal, [{
    key: "createRoot",
    value: function createRoot() {
      this.modalRoot = document.createElement('div');
      document.body.appendChild(this.modalRoot);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          trigger = _this$props.trigger,
          modalOptions = _this$props.modalOptions,
          open = _this$props.open;

      if (!trigger) {
        $("#".concat(this.modalID)).modal(modalOptions);
      }

      if (open) this.showModal();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.modalRoot);
      this.modalRoot = null;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // if the modal is not open yet
      if (!this.props.open && nextProps.open) {
        this.showModal(); // open could be undefined
      } else if (nextProps.open === false) {
        this.hideModal();
      }
    }
  }, {
    key: "renderModalPortal",
    value: function renderModalPortal() {
      var _this$props2 = this.props,
          actions = _this$props2.actions,
          bottomSheet = _this$props2.bottomSheet,
          children = _this$props2.children,
          fixedFooter = _this$props2.fixedFooter,
          header = _this$props2.header,
          className = _this$props2.className,
          other = _objectWithoutProperties(_this$props2, ["actions", "bottomSheet", "children", "fixedFooter", "header", "className"]);

      delete other.modalOptions;
      delete other.trigger;
      var classes = (0, _classnames.default)('modal', {
        'modal-fixed-footer': fixedFooter,
        'bottom-sheet': bottomSheet
      }, className);
      return this.modalRoot ? _reactDom.default.createPortal(_react.default.createElement("div", _extends({}, other, {
        className: classes,
        id: this.modalID
      }), _react.default.createElement("div", {
        className: "modal-content"
      }, _react.default.createElement("h4", null, header), children), _react.default.createElement("div", {
        className: "modal-footer"
      }, _react.default.Children.toArray(actions))), this.modalRoot) : null;
    }
  }, {
    key: "showModal",
    value: function showModal(e) {
      if (e) e.preventDefault();
      var _this$props$modalOpti = this.props.modalOptions,
          modalOptions = _this$props$modalOpti === void 0 ? {} : _this$props$modalOpti;
      $("#".concat(this.modalID)).modal(modalOptions);
      $("#".concat(this.modalID)).modal('open');
    }
  }, {
    key: "hideModal",
    value: function hideModal(e) {
      if (e) e.preventDefault();
      $("#".concat(this.modalID)).modal('close');
    }
  }, {
    key: "render",
    value: function render() {
      var trigger = this.props.trigger;
      return _react.default.createElement("div", null, trigger && _react.default.cloneElement(trigger, {
        onClick: this.showModal
      }), this.renderModalPortal());
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  /**
   * ModalOptions
   * Object with options for modal
   */
  modalOptions: _propTypes.default.shape({
    /*
     * Modal can be dismissed by clicking outside of the modal
     */
    dismissible: _propTypes.default.bool,

    /*
     * Opacity of modal background ( from 0 to 1 )
     */
    opacity: _propTypes.default.number,

    /*
     * Transition in duration
     */
    inDuration: _propTypes.default.number,

    /*
     * Transition out duration
     */
    outDuration: _propTypes.default.number,

    /*
     * Starting top style attribute
     */
    startingTop: _propTypes.default.string,

    /*
     * Ending top style attribute
     */
    endingTop: _propTypes.default.string,

    /*
     * Callback for Modal open. Modal and trigger parameters available.
     */
    ready: _propTypes.default.func,

    /*
     *  Callback for Modal close
     */
    complete: _propTypes.default.func
  }),

  /**
   * Extra class to added to the Modal
   */
  className: _propTypes.default.string,

  /**
   * Modal is opened on mount
   */
  open: _propTypes.default.bool,

  /**
   * BottomSheet styled modal
   * @default false
   */
  bottomSheet: _propTypes.default.bool,

  /**
   * Component children
   */
  children: _propTypes.default.node,

  /**
   * FixedFooter styled modal
   * @default false
   */
  fixedFooter: _propTypes.default.bool,

  /**
   * Text to shown in the header of the modal
   */
  header: _propTypes.default.string,

  /**
   * The button to trigger the display of the modal
   */
  trigger: _propTypes.default.node,

  /**
   * The buttons to show in the footer of the modal
   * @default <Button>Close</Button>
   */
  actions: _propTypes.default.node,

  /**
   * The ID to trigger the modal opening/closing
   */
  id: _propTypes.default.string
};
Modal.defaultProps = {
  modalOptions: {},
  fixedFooter: false,
  bottomSheet: false,
  actions: [_react.default.createElement(_Button.default, {
    waves: "light",
    modal: "close",
    flat: true
  }, "Close")]
};
var _default = Modal;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/NavItem.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-materialize/lib/NavItem.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NavItem = function NavItem(_ref) {
  var divider = _ref.divider,
      children = _ref.children,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '' : _ref$href,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["divider", "children", "href", "onClick"]);

  if (divider) return _react.default.createElement("li", {
    className: "divider"
  });
  var a = onClick ? _react.default.createElement("a", {
    onClick: onClick
  }, children) : _react.default.createElement("a", {
    href: href
  }, children);
  return _react.default.createElement("li", props, a);
};

NavItem.propTypes = {
  /**
   * children can be a string value or a node
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  divider: _propTypes.default.bool,
  href: _propTypes.default.string,

  /**
   * NavItem can have onClick. If it does have, href
   * will not be rendered
   */
  onClick: _propTypes.default.func
};
var _default = NavItem;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Navbar.js":
/*!******************************************************!*\
  !*** ./node_modules/react-materialize/lib/Navbar.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Col = _interopRequireDefault(__webpack_require__(/*! ./Col */ "./node_modules/react-materialize/lib/Col.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/react-materialize/lib/Icon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));
    _this.renderSideNav = _this.renderSideNav.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof $ !== 'undefined') {
        $('.button-collapse').sideNav(this.props.options);
      }
    }
  }, {
    key: "renderSideNav",
    value: function renderSideNav() {
      return _react.default.createElement("ul", {
        id: "nav-mobile",
        className: "side-nav"
      }, this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          brand = _this$props.brand,
          className = _this$props.className,
          fixed = _this$props.fixed,
          left = _this$props.left,
          right = _this$props.right,
          centerLogo = _this$props.centerLogo,
          href = _this$props.href,
          other = _objectWithoutProperties(_this$props, ["brand", "className", "fixed", "left", "right", "centerLogo", "href"]);

      delete other.options;
      var classes = {
        right: right,
        'hide-on-med-and-down': true
      };
      var brandClasses = {
        'brand-logo': true,
        right: left,
        center: centerLogo
      };

      var content = _react.default.createElement("nav", _extends({}, other, {
        className: className
      }), _react.default.createElement("div", {
        className: "nav-wrapper"
      }, _react.default.createElement(_Col.default, {
        s: 12
      }, _react.default.createElement("a", {
        href: href,
        className: (0, _classnames.default)(brandClasses)
      }, brand), _react.default.createElement("ul", {
        className: (0, _classnames.default)(className, classes)
      }, this.props.children), this.renderSideNav(), _react.default.createElement("a", {
        className: "button-collapse",
        href: "#",
        "data-activates": "nav-mobile"
      }, _react.default.createElement(_Icon.default, null, "view_headline")))));

      if (fixed) {
        content = _react.default.createElement("div", {
          className: "navbar-fixed"
        }, content);
      }

      return content;
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.propTypes = {
  brand: _propTypes.default.node,
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Makes the navbar links left aligned
   */
  left: _propTypes.default.bool,

  /**
   * Makes the navbar links right aligned
   */
  right: _propTypes.default.bool,

  /**
   * The logo will center itself on medium and down screens.
   * Specifying centerLogo as a prop the logo will always be centered
   */
  centerLogo: _propTypes.default.bool,
  href: _propTypes.default.string,

  /**
   * Makes the navbar fixed
   */
  fixed: _propTypes.default.bool,

  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: _propTypes.default.shape({
    menuWidth: _propTypes.default.number,
    edge: _propTypes.default.oneOf(['left', 'right']),
    closeOnClick: _propTypes.default.bool,
    draggable: _propTypes.default.bool
  })
};
Navbar.defaultProps = {
  href: '/',
  options: {}
};
var _default = Navbar;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Pagination.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-materialize/lib/Pagination.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/react-materialize/lib/Icon.js"));

var _PaginationButton = _interopRequireDefault(__webpack_require__(/*! ./PaginationButton */ "./node_modules/react-materialize/lib/PaginationButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));
    var activePage = props.activePage,
        items = props.items;
    _this.state = {
      activePage: activePage > 0 && activePage <= items ? activePage : 1
    };
    _this.renderButtons = _this.renderButtons.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onClick = _this._onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Pagination, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activePage !== this.props.activePage) {
        this.setState({
          activePage: nextProps.activePage
        });
      }
    }
  }, {
    key: "_onClick",
    value: function _onClick(i) {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          onSelect = _this$props.onSelect;
      return function () {
        if (i > 0 && i <= items) {
          if (onSelect) {
            onSelect(i);
          }

          _this2.setState({
            activePage: i
          });
        }
      };
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _this$props2 = this.props,
          items = _this$props2.items,
          children = _this$props2.children,
          _this$props2$maxButto = _this$props2.maxButtons,
          maxButtons = _this$props2$maxButto === void 0 ? items : _this$props2$maxButto;
      var activePage = this.state.activePage;
      if (children) return children;
      var buttonsCount = Math.min(maxButtons, items);
      var maxPos = items - buttonsCount;
      var halfButtons = parseInt(buttonsCount / 2, 10);
      var hiddenPagesBefore = activePage - halfButtons;

      if (hiddenPagesBefore > maxPos) {
        hiddenPagesBefore = maxPos + 1;
      }

      var from = Math.max(hiddenPagesBefore, 1);
      var to = Math.min(items, from + maxButtons - 1);
      var buttons = [_react.default.createElement(_PaginationButton.default, {
        disabled: activePage === 1,
        key: 'pagination-0',
        onSelect: this._onClick(activePage - 1)
      }, _react.default.createElement(_Icon.default, null, "chevron_left"))];

      for (var i = from; i <= to; i++) {
        buttons.push(_react.default.createElement(_PaginationButton.default, {
          active: i === activePage,
          key: "pagination-".concat(i),
          onSelect: this._onClick(i)
        }, i));
      }

      buttons.push(_react.default.createElement(_PaginationButton.default, {
        key: "pagination-".concat(items + 1),
        disabled: activePage === items,
        onSelect: this._onClick(activePage + 1)
      }, _react.default.createElement(_Icon.default, null, "chevron_right")));
      return buttons;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("ul", {
        className: (0, _classnames.default)('pagination', this.props.className)
      }, this.renderButtons());
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  /**
   * Number of items in the component
   */
  items: _propTypes.default.number.isRequired,

  /**
   * The initial activePage
   */
  activePage: _propTypes.default.number,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  maxButtons: _propTypes.default.number,
  onSelect: _propTypes.default.func
};
Pagination.defaultProps = {
  activePage: 1,
  items: 10
};
var _default = Pagination;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/PaginationButton.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-materialize/lib/PaginationButton.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationButton = function PaginationButton(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      children = _ref.children,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      href = _ref.href,
      onSelect = _ref.onSelect;
  var classes = {
    'waves-effect': true,
    disabled: disabled,
    active: active
  };
  var linkProps = href ? {
    href: href
  } : null;
  return _react.default.createElement("li", {
    className: (0, _classnames.default)(classes, className),
    onClick: onSelect
  }, _react.default.createElement("a", linkProps, children));
};

PaginationButton.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  href: _propTypes.default.string,
  onSelect: _propTypes.default.func
};
var _default = PaginationButton;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Parallax.js":
/*!********************************************************!*\
  !*** ./node_modules/react-materialize/lib/Parallax.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Parallax =
/*#__PURE__*/
function (_Component) {
  _inherits(Parallax, _Component);

  function Parallax() {
    _classCallCheck(this, Parallax);

    return _possibleConstructorReturn(this, _getPrototypeOf(Parallax).apply(this, arguments));
  }

  _createClass(Parallax, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('.parallax').parallax();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          imageSrc = _this$props.imageSrc;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('parallax-container', className)
      }, _react.default.createElement("div", {
        className: "parallax"
      }, _react.default.createElement("img", {
        src: imageSrc
      })));
    }
  }]);

  return Parallax;
}(_react.Component);

Parallax.propTypes = {
  className: _propTypes.default.string,

  /**
   * The image path which will be used for the background of the parallax
   */
  imageSrc: _propTypes.default.string
};
var _default = Parallax;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Preloader.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-materialize/lib/Preloader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Spinner = _interopRequireDefault(__webpack_require__(/*! ./Spinner */ "./node_modules/react-materialize/lib/Spinner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var colors = ['blue', 'red', 'yellow', 'green'];

var Preloader =
/*#__PURE__*/
function (_Component) {
  _inherits(Preloader, _Component);

  function Preloader() {
    _classCallCheck(this, Preloader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Preloader).apply(this, arguments));
  }

  _createClass(Preloader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          size = _this$props.size,
          color = _this$props.color,
          flashing = _this$props.flashing,
          className = _this$props.className;
      var classes = (0, _classnames.default)('preloader-wrapper', {
        active: active,
        size: size
      });
      var spinners;

      if (flashing) {
        spinners = colors.map(function (color) {
          return _react.default.createElement(_Spinner.default, {
            color: color,
            only: false,
            key: color
          });
        });
      } else {
        spinners = _react.default.createElement(_Spinner.default, {
          color: color
        });
      }

      return _react.default.createElement("div", {
        className: (0, _classnames.default)(className, classes)
      }, spinners);
    }
  }]);

  return Preloader;
}(_react.Component);

Preloader.propTypes = {
  className: _propTypes.default.string,

  /**
   * The scale of the circle
   * @default 'medium'
   */
  size: _propTypes.default.oneOf(['big', 'small', 'medium']),

  /**
   * Whether to spin
   * @default true
   */
  active: _propTypes.default.bool,

  /**
   * The color of the circle, if not flashing
   * @default 'blue'
   */
  color: _propTypes.default.oneOf(['blue', 'red', 'yellow', 'green']),

  /**
   * Wheter to circle four different colors
   * @default false
   */
  flashing: _propTypes.default.bool
};
Preloader.defaultProps = {
  active: true,
  flashing: false,
  color: 'blue'
};
var _default = Preloader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/ProgressBar.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-materialize/lib/ProgressBar.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      className = _ref.className;
  var style;
  var classes = {
    indeterminate: progress === undefined,
    determinate: !!progress
  };

  if (progress) {
    style = {
      width: progress + '%'
    };
  }

  return _react.default.createElement("div", {
    className: (0, _classnames.default)('progress lighten-5', className)
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(classes, className),
    style: style
  }));
};

ProgressBar.propTypes = {
  className: _propTypes.default.string,

  /**
   * A number between 0..100 that indicates the current progress,
   * when provided, a determinate bar with the progress is displayed,
   * otherwise a indeterminate bar is shown
   */
  progress: _propTypes.default.number
};
var _default = ProgressBar;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Row.js":
/*!***************************************************!*\
  !*** ./node_modules/react-materialize/lib/Row.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$node = _ref.node,
      Node = _ref$node === void 0 ? 'div' : _ref$node,
      props = _objectWithoutProperties(_ref, ["children", "className", "node"]);

  return _react.default.createElement(Node, _extends({
    className: (0, _classnames.default)('row', className)
  }, props), children);
};

Row.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  node: _propTypes.default.node
};
var _default = Row;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/SearchForm.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-materialize/lib/SearchForm.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/react-materialize/lib/Icon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchForm = function SearchForm() {
  return _react.default.createElement("form", null, _react.default.createElement("div", {
    className: "input-field"
  }, _react.default.createElement("input", {
    id: "search",
    type: "search",
    required: true
  }), _react.default.createElement("label", {
    htmlFor: "search"
  }, _react.default.createElement(_Icon.default, null, "search")), _react.default.createElement(_Icon.default, null, "close")));
};

var _default = SearchForm;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Section.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-materialize/lib/Section.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Section =
/*#__PURE__*/
function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, _getPrototypeOf(Section).apply(this, arguments));
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          node = _this$props.node,
          id = _this$props.id,
          other = _objectWithoutProperties(_this$props, ["className", "node", "id"]);

      var C = node;
      var classes = {
        section: true
      };
      return _react.default.createElement(C, _extends({}, other, {
        id: id,
        className: (0, _classnames.default)(classes, className)
      }), this.props.children);
    }
  }]);

  return Section;
}(_react.Component);

Section.propTypes = {
  children: _propTypes.default.node,
  node: _propTypes.default.node,
  id: _propTypes.default.string,
  className: _propTypes.default.string
};
Section.defaultProps = {
  node: 'div'
};
var _default = Section;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/SideNav.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-materialize/lib/SideNav.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _idgen = _interopRequireDefault(__webpack_require__(/*! ./idgen */ "./node_modules/react-materialize/lib/idgen.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SideNav =
/*#__PURE__*/
function (_Component) {
  _inherits(SideNav, _Component);

  function SideNav(props) {
    var _this;

    _classCallCheck(this, SideNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNav).call(this, props));
    _this.id = props.id || "sidenav_".concat((0, _idgen.default)());
    return _this;
  }

  _createClass(SideNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$options = this.props.options,
          options = _this$props$options === void 0 ? {} : _this$props$options;
      $(this._trigger).sideNav(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          trigger = _this$props.trigger,
          fixed = _this$props.fixed,
          props = _objectWithoutProperties(_this$props, ["className", "children", "trigger", "fixed"]);

      delete props.id;
      delete props.options;
      var classNames = (0, _classnames.default)('side-nav', {
        fixed: fixed || !trigger
      }, className);
      return _react.default.createElement("span", null, this.renderTrigger(), _react.default.createElement("ul", _extends({
        id: this.id,
        className: classNames
      }, props), children));
    }
  }, {
    key: "renderTrigger",
    value: function renderTrigger() {
      var _this2 = this;

      var _this$props2 = this.props,
          trigger = _this$props2.trigger,
          fixed = _this$props2.fixed;

      if (!trigger) {
        return;
      }

      var triggerView = fixed ? 'hide-on-large-only' : 'show-on-large';
      var classNames = (0, _classnames.default)(trigger.props.className, triggerView);
      return _react.default.cloneElement(trigger, {
        ref: function ref(t) {
          return _this2._trigger = "[data-activates=".concat(_this2.id, "]");
        },
        'data-activates': this.id,
        className: classNames
      });
    }
  }]);

  return SideNav;
}(_react.Component);

SideNav.propTypes = {
  /**
   * Adds fixed class to side-nav
   */
  fixed: _propTypes.default.bool,

  /**
   * sidenav id. If none is passed, an id will be generated.
   */
  id: _propTypes.default.string,

  /**
   * Component that is rendered to trigger the sidenav
   */
  trigger: _propTypes.default.node,

  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: _propTypes.default.shape({
    menuWidth: _propTypes.default.number,
    edge: _propTypes.default.oneOf(['left', 'right']),
    closeOnClick: _propTypes.default.bool,
    draggable: _propTypes.default.bool
  }),

  /**
   * Additional classes added to 'side-nav'
   */
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = SideNav;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/SideNavItem.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-materialize/lib/SideNavItem.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _UserView = __webpack_require__(/*! ./UserView */ "./node_modules/react-materialize/lib/UserView.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SideNavItem =
/*#__PURE__*/
function (_Component) {
  _inherits(SideNavItem, _Component);

  function SideNavItem() {
    _classCallCheck(this, SideNavItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideNavItem).apply(this, arguments));
  }

  _createClass(SideNavItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          divider = _this$props.divider,
          subheader = _this$props.subheader,
          userView = _this$props.userView,
          icon = _this$props.icon,
          _this$props$href = _this$props.href,
          href = _this$props$href === void 0 ? '#!' : _this$props$href,
          waves = _this$props.waves,
          _this$props$user = _this$props.user,
          user = _this$props$user === void 0 ? {} : _this$props$user,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["divider", "subheader", "userView", "icon", "href", "waves", "user", "children"]);

      var itemClasses = {
        divider: divider
      };
      var linkClasses = {
        subheader: subheader,
        'waves-effect': waves
      };
      return _react.default.createElement("li", _extends({
        className: (0, _classnames.default)(itemClasses)
      }, props), userView && user && _react.default.createElement(_UserView.UserView, user), !userView && _react.default.createElement("a", {
        className: (0, _classnames.default)(linkClasses),
        href: href
      }, icon && _react.default.createElement("i", {
        className: "material-icons"
      }, icon), children));
    }
  }]);

  return SideNavItem;
}(_react.Component);

SideNavItem.propTypes = {
  children: _propTypes.default.node,
  divider: _propTypes.default.bool,
  subheader: _propTypes.default.bool,
  userView: _propTypes.default.bool,
  waves: _propTypes.default.bool,
  href: _propTypes.default.string,
  icon: _propTypes.default.string,
  user: _propTypes.default.shape(_UserView.UserShape)
};
var _default = SideNavItem;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Slide.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-materialize/lib/Slide.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! ./constants */ "./node_modules/react-materialize/lib/constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Slide =
/*#__PURE__*/
function (_Component) {
  _inherits(Slide, _Component);

  function Slide(props) {
    var _this;

    _classCallCheck(this, Slide);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slide).call(this, props));
    _this.renderCaption = _this.renderCaption.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Slide, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("li", null, _react.default.createElement("img", {
        src: this.props.src
      }), this.renderCaption());
    }
  }, {
    key: "renderCaption",
    value: function renderCaption() {
      var _this$props = this.props,
          title = _this$props.title,
          className = _this$props.className,
          placement = _this$props.placement,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["title", "className", "placement", "children"]);

      delete props.placement;

      var classes = _defineProperty({
        caption: true
      }, placement + '-align', placement);

      if (typeof title !== 'undefined' || typeof children !== 'undefined') {
        return _react.default.createElement("div", _extends({
          className: (0, _classnames.default)(classes)
        }, props), _react.default.createElement("h3", null, title), _react.default.createElement("h5", {
          className: className
        }, children));
      } else return null;
    }
  }]);

  return Slide;
}(_react.Component);

Slide.propTypes = {
  /**
   * Aliment of the caption
   * @default 'center'
   */
  placement: _propTypes.default.oneOf(_constants.default.PLACEMENTS),
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * The tagline of the caption
   */
  title: _propTypes.default.string,

  /**
   * The path of the background image
   */
  src: _propTypes.default.string.isRequired
};
Slide.defaultProps = {
  placement: 'center'
};
var _default = Slide;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Slider.js":
/*!******************************************************!*\
  !*** ./node_modules/react-materialize/lib/Slider.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          fullscreen = _this$props.fullscreen,
          indicators = _this$props.indicators,
          interval = _this$props.interval,
          transition = _this$props.transition;
      $('.slider').slider({
        full_width: fullscreen,
        indicators: indicators,
        interval: interval,
        transition: transition
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          fullscreen = _this$props2.fullscreen,
          children = _this$props2.children,
          className = _this$props2.className;
      var classes = {
        fullscreen: fullscreen,
        slider: true
      };
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(classes, className)
      }, _react.default.createElement("ul", {
        className: "slides"
      }, children));
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  fullscreen: _propTypes.default.bool,

  /**
   * Set to false to hide slide indicators
   * @default true
   */
  indicators: _propTypes.default.bool,

  /**
   * The interval between transitions in ms
   * @default 6000
   */
  interval: _propTypes.default.number,

  /**
   * The duration of the transation animation in ms
   * @default 500
   */
  transition: _propTypes.default.number
};
Slider.defaultProps = {
  fullscreen: false,
  indicators: true,
  interval: 6000
};
var _default = Slider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Spinner.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-materialize/lib/Spinner.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spinner = function Spinner(_ref) {
  var _cx;

  var color = _ref.color,
      only = _ref.only,
      className = _ref.className;
  var spinnerClasses = (0, _classnames.default)('spinner-layer', (_cx = {}, _defineProperty(_cx, "spinner-".concat(color, "-only"), only), _defineProperty(_cx, "spinner-".concat(color), !only), _cx));
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(spinnerClasses, className)
  }, _react.default.createElement("div", {
    className: "circle-clipper left"
  }, _react.default.createElement("div", {
    className: "circle"
  })), _react.default.createElement("div", {
    className: "gap-patch"
  }, _react.default.createElement("div", {
    className: "circle"
  })), _react.default.createElement("div", {
    className: "circle-clipper right"
  }, _react.default.createElement("div", {
    className: "circle"
  })));
};

Spinner.defaultProps = {
  only: true
};
Spinner.propTypes = {
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  only: _propTypes.default.bool
};
var _default = Spinner;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Tab.js":
/*!***************************************************!*\
  !*** ./node_modules/react-materialize/lib/Tab.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// This is just a holder for the props and children for tab, thus
// there is no logic here.
var Tab =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Tab;
}(_react.default.Component);

Tab.propTypes = {
  /**
   * The title shown in the tabs list
   */
  title: _propTypes.default.node.isRequired,

  /**
   * The width of the Tab
   */
  tabWidth: _propTypes.default.number,

  /**
   * Pre-select the tab
   * @default false
   */
  active: _propTypes.default.bool,

  /**
   * Disable the tab
   * @default false
   */
  disabled: _propTypes.default.bool
};
Tab.defaultProps = {
  active: false,
  disabled: false
};
var _default = Tab;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Table.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-materialize/lib/Table.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Table =
/*#__PURE__*/
function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bordered = _this$props.bordered,
          centered = _this$props.centered,
          children = _this$props.children,
          className = _this$props.className,
          hoverable = _this$props.hoverable,
          responsive = _this$props.responsive,
          striped = _this$props.striped,
          props = _objectWithoutProperties(_this$props, ["bordered", "centered", "children", "className", "hoverable", "responsive", "striped"]);

      var classes = {
        centered: centered,
        highlight: hoverable,
        'responsive-table': responsive,
        striped: striped,
        bordered: bordered
      };
      return _react.default.createElement("table", _extends({
        className: (0, _classnames.default)(classes, className)
      }, props), children);
    }
  }]);

  return Table;
}(_react.Component);

Table.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Center align all the text in the table
   * @default false
   */
  centered: _propTypes.default.bool,

  /**
   * Highlight the row that's hovered
   * @default false
   */
  hoverable: _propTypes.default.bool,

  /**
   * Enable response to make the table horizontally scrollable on smaller screens
   * @default false
   */
  responsive: _propTypes.default.bool,

  /**
   * striped style
   * @default false
   */
  striped: _propTypes.default.bool,

  /**
   * Add border to each row
   * @default false
   */
  bordered: _propTypes.default.bool
};
var _default = Table;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Tabs.js":
/*!****************************************************!*\
  !*** ./node_modules/react-materialize/lib/Tabs.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _idgen = _interopRequireDefault(__webpack_require__(/*! ./idgen */ "./node_modules/react-materialize/lib/idgen.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Row = _interopRequireDefault(__webpack_require__(/*! ./Row */ "./node_modules/react-materialize/lib/Row.js"));

var _Col = _interopRequireDefault(__webpack_require__(/*! ./Col */ "./node_modules/react-materialize/lib/Col.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$tabOption = this.props.tabOptions,
          tabOptions = _this$props$tabOption === void 0 ? {} : _this$props$tabOption;

      if (typeof $ !== 'undefined') {
        $(this._tabsEl).tabs(tabOptions);
      }
    }
  }, {
    key: "_onSelect",
    value: function _onSelect(idx, e) {
      var onChange = this.props.onChange;
      if (onChange) onChange(idx, e);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$tabOptions = nextProps.tabOptions,
          tabOptions = _nextProps$tabOptions === void 0 ? {} : _nextProps$tabOptions;

      if (typeof $ !== 'undefined') {
        $(this._tabsEl).tabs(tabOptions);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props$tabOption2 = this.props.tabOptions,
          tabOptions = _this$props$tabOption2 === void 0 ? {} : _this$props$tabOption2;

      if (typeof $ !== 'undefined') {
        $(this._tabsEl).tabs(tabOptions);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          defaultValue = _this$props.defaultValue;
      var scope = "".concat((0, _idgen.default)());
      return _react.default.createElement(_Row.default, null, _react.default.createElement(_Col.default, {
        s: 12
      }, _react.default.createElement("ul", {
        className: (0, _classnames.default)('tabs', className),
        ref: function ref(el) {
          return _this._tabsEl = el;
        }
      }, _react.default.Children.map(children, function (child, id) {
        var _classes;

        var idx = "".concat(scope).concat(id);
        var _child$props = child.props,
            active = _child$props.active,
            className = _child$props.className,
            disabled = _child$props.disabled,
            tabWidth = _child$props.tabWidth,
            title = _child$props.title;
        var classes = (_classes = {}, _defineProperty(_classes, "s".concat(tabWidth), tabWidth), _defineProperty(_classes, "tab", true), _defineProperty(_classes, "disabled", disabled), _defineProperty(_classes, "col", true), _classes);
        return _react.default.createElement("li", {
          className: (0, _classnames.default)(classes, className),
          key: idx
        }, _react.default.createElement("a", _extends({
          href: "#tab_".concat(idx),
          className: active || defaultValue === idx ? 'active' : ''
        }, disabled ? {} : {
          onClick: _this._onSelect.bind(_this, idx)
        }), title));
      }))), _react.default.Children.map(children, function (child, id) {
        var idx = "".concat(scope).concat(id);
        return _react.default.createElement(_Col.default, {
          id: "tab_".concat(idx),
          s: 12,
          key: "tab".concat(idx),
          style: {
            display: child.props.active || defaultValue === idx ? 'block' : 'none'
          }
        }, child.props.children);
      }));
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  onChange: _propTypes.default.func,

  /*
   * More info
   * <a href='http://materializecss.com/tabs.html'>http://materializecss.com/tabs.html</a>
   */
  tabOptions: _propTypes.default.shape({
    onShow: _propTypes.default.func,
    swipeable: _propTypes.default.bool,
    responsiveThreshold: _propTypes.default.number
  })
};
var _default = Tabs;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Tag.js":
/*!***************************************************!*\
  !*** ./node_modules/react-materialize/lib/Tag.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Chip = _interopRequireDefault(__webpack_require__(/*! ./Chip */ "./node_modules/react-materialize/lib/Chip.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_Chip.default, {
    close: true
  }, children);
};

Tag.propTypes = {
  children: _propTypes.default.node
};
var _default = Tag;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Toast.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-materialize/lib/Toast.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ "./node_modules/react-materialize/lib/Button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Toast =
/*#__PURE__*/
function (_Component) {
  _inherits(Toast, _Component);

  function Toast(props) {
    var _this;

    _classCallCheck(this, Toast);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toast).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Toast, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rounded = _this$props.rounded,
          className = _this$props.className;
      var classes = {
        toast: true,
        rounded: rounded
      };
      return _react.default.createElement(_Button.default, {
        onClick: this.onClick,
        className: (0, _classnames.default)(classes, className)
      }, children);
    }
  }, {
    key: "onClick",
    value: function onClick() {
      Materialize.toast(this.props.toast, 1000);
    }
  }]);

  return Toast;
}(_react.Component);

Toast.propTypes = {
  className: _propTypes.default.string,
  toast: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  rounded: _propTypes.default.bool
};
var _default = Toast;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/UserView.js":
/*!********************************************************!*\
  !*** ./node_modules/react-materialize/lib/UserView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UserView = exports.UserShape = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UserShape = {
  background: _propTypes.default.string,
  image: _propTypes.default.string,
  name: _propTypes.default.string,
  email: _propTypes.default.string
};
exports.UserShape = UserShape;

var UserView =
/*#__PURE__*/
function (_Component) {
  _inherits(UserView, _Component);

  function UserView() {
    _classCallCheck(this, UserView);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserView).apply(this, arguments));
  }

  _createClass(UserView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          background = _this$props.background,
          image = _this$props.image,
          name = _this$props.name,
          email = _this$props.email;
      return _react.default.createElement("div", {
        className: "userView"
      }, background && _react.default.createElement("div", {
        className: "background"
      }, _react.default.createElement("img", {
        src: background
      })), image && _react.default.createElement("a", {
        href: "#!user"
      }, _react.default.createElement("img", {
        className: "circle",
        src: image
      })), name && _react.default.createElement("a", {
        href: "#!name"
      }, _react.default.createElement("span", {
        className: "white-text name"
      }, name)), email && _react.default.createElement("a", {
        href: "#!email"
      }, _react.default.createElement("span", {
        className: "white-text email"
      }, email)));
    }
  }]);

  return UserView;
}(_react.Component);

exports.UserView = UserView;
UserView.propTypes = UserShape;
var _default = UserView;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-materialize/lib/constants.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  STYLES: ['large', 'floating', 'flat'],
  WAVES: ['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal'],
  SIZES: ['s', 'm', 'l', 'xl'],
  PLACEMENTS: ['left', 'center', 'right'],
  SCALES: ['big', 'small'],
  ICON_SIZES: ['tiny', 'small', 'medium', 'large']
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-materialize/lib/idgen.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-materialize/lib/idgen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetID = resetID;
exports.default = idgen;
var id = 0;

function resetID() {
  id = 0;
}

function idgen() {
  var oldId = id;
  id += 1;
  return oldId;
}

/***/ }),

/***/ "./node_modules/react-materialize/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-materialize/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Autocomplete", {
  enumerable: true,
  get: function get() {
    return _Autocomplete.default;
  }
});
Object.defineProperty(exports, "Badge", {
  enumerable: true,
  get: function get() {
    return _Badge.default;
  }
});
Object.defineProperty(exports, "Breadcrumb", {
  enumerable: true,
  get: function get() {
    return _Breadcrumb.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function get() {
    return _Carousel.default;
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _Card.default;
  }
});
Object.defineProperty(exports, "CardPanel", {
  enumerable: true,
  get: function get() {
    return _CardPanel.default;
  }
});
Object.defineProperty(exports, "CardTitle", {
  enumerable: true,
  get: function get() {
    return _CardTitle.default;
  }
});
Object.defineProperty(exports, "Chip", {
  enumerable: true,
  get: function get() {
    return _Chip.default;
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _Col.default;
  }
});
Object.defineProperty(exports, "Collapsible", {
  enumerable: true,
  get: function get() {
    return _Collapsible.default;
  }
});
Object.defineProperty(exports, "CollapsibleItem", {
  enumerable: true,
  get: function get() {
    return _CollapsibleItem.default;
  }
});
Object.defineProperty(exports, "Collection", {
  enumerable: true,
  get: function get() {
    return _Collection.default;
  }
});
Object.defineProperty(exports, "CollectionItem", {
  enumerable: true,
  get: function get() {
    return _CollectionItem.default;
  }
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
});
Object.defineProperty(exports, "Divider", {
  enumerable: true,
  get: function get() {
    return _Divider.default;
  }
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function get() {
    return _Dropdown.default;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _Icon.default;
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _Input.default;
  }
});
Object.defineProperty(exports, "MediaBox", {
  enumerable: true,
  get: function get() {
    return _MediaBox.default;
  }
});
Object.defineProperty(exports, "MenuItem", {
  enumerable: true,
  get: function get() {
    return _MenuItem.default;
  }
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _Modal.default;
  }
});
Object.defineProperty(exports, "NavItem", {
  enumerable: true,
  get: function get() {
    return _NavItem.default;
  }
});
Object.defineProperty(exports, "Navbar", {
  enumerable: true,
  get: function get() {
    return _Navbar.default;
  }
});
Object.defineProperty(exports, "Pagination", {
  enumerable: true,
  get: function get() {
    return _Pagination.default;
  }
});
Object.defineProperty(exports, "PaginationButton", {
  enumerable: true,
  get: function get() {
    return _PaginationButton.default;
  }
});
Object.defineProperty(exports, "Parallax", {
  enumerable: true,
  get: function get() {
    return _Parallax.default;
  }
});
Object.defineProperty(exports, "Preloader", {
  enumerable: true,
  get: function get() {
    return _Preloader.default;
  }
});
Object.defineProperty(exports, "ProgressBar", {
  enumerable: true,
  get: function get() {
    return _ProgressBar.default;
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _Row.default;
  }
});
Object.defineProperty(exports, "SearchForm", {
  enumerable: true,
  get: function get() {
    return _SearchForm.default;
  }
});
Object.defineProperty(exports, "Section", {
  enumerable: true,
  get: function get() {
    return _Section.default;
  }
});
Object.defineProperty(exports, "SideNav", {
  enumerable: true,
  get: function get() {
    return _SideNav.default;
  }
});
Object.defineProperty(exports, "SideNavItem", {
  enumerable: true,
  get: function get() {
    return _SideNavItem.default;
  }
});
Object.defineProperty(exports, "Slide", {
  enumerable: true,
  get: function get() {
    return _Slide.default;
  }
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function get() {
    return _Slider.default;
  }
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _Tab.default;
  }
});
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: function get() {
    return _Table.default;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _Tabs.default;
  }
});
Object.defineProperty(exports, "Tag", {
  enumerable: true,
  get: function get() {
    return _Tag.default;
  }
});
Object.defineProperty(exports, "Toast", {
  enumerable: true,
  get: function get() {
    return _Toast.default;
  }
});

var _Autocomplete = _interopRequireDefault(__webpack_require__(/*! ./Autocomplete */ "./node_modules/react-materialize/lib/Autocomplete.js"));

var _Badge = _interopRequireDefault(__webpack_require__(/*! ./Badge */ "./node_modules/react-materialize/lib/Badge.js"));

var _Breadcrumb = _interopRequireDefault(__webpack_require__(/*! ./Breadcrumb */ "./node_modules/react-materialize/lib/Breadcrumb.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ "./node_modules/react-materialize/lib/Button.js"));

var _Carousel = _interopRequireDefault(__webpack_require__(/*! ./Carousel */ "./node_modules/react-materialize/lib/Carousel.js"));

var _Card = _interopRequireDefault(__webpack_require__(/*! ./Card */ "./node_modules/react-materialize/lib/Card.js"));

var _CardPanel = _interopRequireDefault(__webpack_require__(/*! ./CardPanel */ "./node_modules/react-materialize/lib/CardPanel.js"));

var _CardTitle = _interopRequireDefault(__webpack_require__(/*! ./CardTitle */ "./node_modules/react-materialize/lib/CardTitle.js"));

var _Chip = _interopRequireDefault(__webpack_require__(/*! ./Chip */ "./node_modules/react-materialize/lib/Chip.js"));

var _Col = _interopRequireDefault(__webpack_require__(/*! ./Col */ "./node_modules/react-materialize/lib/Col.js"));

var _Collapsible = _interopRequireDefault(__webpack_require__(/*! ./Collapsible */ "./node_modules/react-materialize/lib/Collapsible.js"));

var _CollapsibleItem = _interopRequireDefault(__webpack_require__(/*! ./CollapsibleItem */ "./node_modules/react-materialize/lib/CollapsibleItem.js"));

var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/react-materialize/lib/Collection.js"));

var _CollectionItem = _interopRequireDefault(__webpack_require__(/*! ./CollectionItem */ "./node_modules/react-materialize/lib/CollectionItem.js"));

var _Container = _interopRequireDefault(__webpack_require__(/*! ./Container */ "./node_modules/react-materialize/lib/Container.js"));

var _Divider = _interopRequireDefault(__webpack_require__(/*! ./Divider */ "./node_modules/react-materialize/lib/Divider.js"));

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! ./Dropdown */ "./node_modules/react-materialize/lib/Dropdown.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! ./Footer */ "./node_modules/react-materialize/lib/Footer.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/react-materialize/lib/Icon.js"));

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-materialize/lib/Input.js"));

var _MediaBox = _interopRequireDefault(__webpack_require__(/*! ./MediaBox */ "./node_modules/react-materialize/lib/MediaBox.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! ./MenuItem */ "./node_modules/react-materialize/lib/MenuItem.js"));

var _Modal = _interopRequireDefault(__webpack_require__(/*! ./Modal */ "./node_modules/react-materialize/lib/Modal.js"));

var _NavItem = _interopRequireDefault(__webpack_require__(/*! ./NavItem */ "./node_modules/react-materialize/lib/NavItem.js"));

var _Navbar = _interopRequireDefault(__webpack_require__(/*! ./Navbar */ "./node_modules/react-materialize/lib/Navbar.js"));

var _Pagination = _interopRequireDefault(__webpack_require__(/*! ./Pagination */ "./node_modules/react-materialize/lib/Pagination.js"));

var _PaginationButton = _interopRequireDefault(__webpack_require__(/*! ./PaginationButton */ "./node_modules/react-materialize/lib/PaginationButton.js"));

var _Parallax = _interopRequireDefault(__webpack_require__(/*! ./Parallax */ "./node_modules/react-materialize/lib/Parallax.js"));

var _Preloader = _interopRequireDefault(__webpack_require__(/*! ./Preloader */ "./node_modules/react-materialize/lib/Preloader.js"));

var _ProgressBar = _interopRequireDefault(__webpack_require__(/*! ./ProgressBar */ "./node_modules/react-materialize/lib/ProgressBar.js"));

var _Row = _interopRequireDefault(__webpack_require__(/*! ./Row */ "./node_modules/react-materialize/lib/Row.js"));

var _SearchForm = _interopRequireDefault(__webpack_require__(/*! ./SearchForm */ "./node_modules/react-materialize/lib/SearchForm.js"));

var _Section = _interopRequireDefault(__webpack_require__(/*! ./Section */ "./node_modules/react-materialize/lib/Section.js"));

var _SideNav = _interopRequireDefault(__webpack_require__(/*! ./SideNav */ "./node_modules/react-materialize/lib/SideNav.js"));

var _SideNavItem = _interopRequireDefault(__webpack_require__(/*! ./SideNavItem */ "./node_modules/react-materialize/lib/SideNavItem.js"));

var _Slide = _interopRequireDefault(__webpack_require__(/*! ./Slide */ "./node_modules/react-materialize/lib/Slide.js"));

var _Slider = _interopRequireDefault(__webpack_require__(/*! ./Slider */ "./node_modules/react-materialize/lib/Slider.js"));

var _Tab = _interopRequireDefault(__webpack_require__(/*! ./Tab */ "./node_modules/react-materialize/lib/Tab.js"));

var _Table = _interopRequireDefault(__webpack_require__(/*! ./Table */ "./node_modules/react-materialize/lib/Table.js"));

var _Tabs = _interopRequireDefault(__webpack_require__(/*! ./Tabs */ "./node_modules/react-materialize/lib/Tabs.js"));

var _Tag = _interopRequireDefault(__webpack_require__(/*! ./Tag */ "./node_modules/react-materialize/lib/Tag.js"));

var _Toast = _interopRequireDefault(__webpack_require__(/*! ./Toast */ "./node_modules/react-materialize/lib/Toast.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");





var Provider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Provider, _Component);

  function Provider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var store = props.store;
    _this.state = {
      storeState: store.getState(),
      store: store
    };
    return _this;
  }

  var _proto = Provider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this.subscribe();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
    this._isMounted = false;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.store !== prevProps.store) {
      if (this.unsubscribe) this.unsubscribe();
      this.subscribe();
    }
  };

  _proto.subscribe = function subscribe() {
    var _this2 = this;

    var store = this.props.store;
    this.unsubscribe = store.subscribe(function () {
      var newStoreState = store.getState();

      if (!_this2._isMounted) {
        return;
      }

      _this2.setState(function (providerState) {
        // If the value is the same, skip the unnecessary state update.
        if (providerState.storeState === newStoreState) {
          return null;
        }

        return {
          storeState: newStoreState
        };
      });
    }); // Actions might have been dispatched between render and mount - handle those

    var postMountStoreState = store.getState();

    if (postMountStoreState !== this.state.storeState) {
      this.setState({
        storeState: postMountStoreState
      });
    }
  };

  _proto.render = function render() {
    var Context = this.props.context || _Context__WEBPACK_IMPORTED_MODULE_3__["ReactReduxContext"];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Context.Provider, {
      value: this.state
    }, this.props.children);
  };

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Provider.propTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    subscribe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    getState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }),
  context: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-redux/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");









function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_8__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  invariant__WEBPACK_IMPORTED_MODULE_5___default()(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React dev tools profiling extension");
  invariant__WEBPACK_IMPORTED_MODULE_5___default()(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
  var customStoreWarningMessage = 'To use a custom Redux store for specific components,  create a custom React context with ' + "React.createContext(), and pass the context object to React-Redux's Provider and specific components" + ' like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
  invariant__WEBPACK_IMPORTED_MODULE_5___default()(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (true) {
      invariant__WEBPACK_IMPORTED_MODULE_5___default()(Object(react_is__WEBPACK_IMPORTED_MODULE_7__["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;
    var OuterBaseComponent = react__WEBPACK_IMPORTED_MODULE_6__["Component"];
    var FinalWrappedComponent = WrappedComponent;

    if (pure) {
      OuterBaseComponent = react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"];
    }

    function makeDerivedPropsSelector() {
      var lastProps;
      var lastState;
      var lastDerivedProps;
      var lastStore;
      var sourceSelector;
      return function selectDerivedProps(state, props, store) {
        if (pure && lastProps === props && lastState === state) {
          return lastDerivedProps;
        }

        if (store !== lastStore) {
          lastStore = store;
          sourceSelector = selectorFactory(store.dispatch, selectorFactoryOptions);
        }

        lastProps = props;
        lastState = state;
        var nextProps = sourceSelector(state, props);

        if (lastDerivedProps === nextProps) {
          return lastDerivedProps;
        }

        lastDerivedProps = nextProps;
        return lastDerivedProps;
      };
    }

    function makeChildElementSelector() {
      var lastChildProps, lastForwardRef, lastChildElement;
      return function selectChildElement(childProps, forwardRef) {
        if (childProps !== lastChildProps || forwardRef !== lastForwardRef) {
          lastChildProps = childProps;
          lastForwardRef = forwardRef;
          lastChildElement = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FinalWrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, childProps, {
            ref: forwardRef
          }));
        }

        return lastChildElement;
      };
    }

    var Connect =
    /*#__PURE__*/
    function (_OuterBaseComponent) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Connect, _OuterBaseComponent);

      function Connect(props) {
        var _this;

        _this = _OuterBaseComponent.call(this, props) || this;
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(forwardRef ? !props.wrapperProps[storeKey] : !props[storeKey], 'Passing redux store in props has been removed and does not do anything. ' + customStoreWarningMessage);
        _this.selectDerivedProps = makeDerivedPropsSelector();
        _this.selectChildElement = makeChildElementSelector();
        _this.renderWrappedComponent = _this.renderWrappedComponent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)));
        return _this;
      }

      var _proto = Connect.prototype;

      _proto.renderWrappedComponent = function renderWrappedComponent(value) {
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(value, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
        var storeState = value.storeState,
            store = value.store;
        var wrapperProps = this.props;
        var forwardedRef;

        if (forwardRef) {
          wrapperProps = this.props.wrapperProps;
          forwardedRef = this.props.forwardedRef;
        }

        var derivedProps = this.selectDerivedProps(storeState, wrapperProps, store);
        return this.selectChildElement(derivedProps, forwardedRef);
      };

      _proto.render = function render() {
        var ContextToUse = this.props.context || Context;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ContextToUse.Consumer, null, this.renderWrappedComponent);
      };

      return Connect;
    }(OuterBaseComponent);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Connect, {
          wrapperProps: props,
          forwardedRef: ref
        });
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_52339ab353c8e0db40da ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_52339ab353c8e0db40da */ "dll-reference dll_52339ab353c8e0db40da"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.styl */ "./pages/home.styl");
/* harmony import */ var _home_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LiablilityItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LiablilityItem */ "./components/LiablilityItem/index.js");
/* harmony import */ var _components_AddLiability__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AddLiability */ "./components/AddLiability/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    var _this;

    _classCallCheck(this, HomePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addLiability", function (_ref) {
      var title = _ref.title,
          amount = _ref.amount;
      var liabilities = _this.state.liabilities;
      liabilities.push({
        title: title,
        amount: amount
      });

      _this.setState({
        liabilities: liabilities
      });
    });

    _this.state = {
      liabilities: []
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: "removeLiability",
    value: function removeLiability(title) {
      var liabilityToRemoveIndex = this.state.liabilities.indexOf(this.state.liabilities.find(function (item) {
        return item.title === title;
      }));
      this.state.liabilities.splice(liabilityToRemoveIndex, 1);
      this.setState({
        liabilities: this.state.liabilities
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var liabilities = this.state.liabilities;
      var user = this.props.user;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, liabilities && !!liabilities.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, liabilities.map(function (_ref2) {
        var title = _ref2.title,
            amount = _ref2.amount;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LiablilityItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: title,
          amount: amount,
          removeClicked: _this2.removeLiability.bind(_this2),
          key: title
        });
      })), user.name && user.name.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !liabilities.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "You must be a happy person. You don't have any liabilities."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AddLiability__WEBPACK_IMPORTED_MODULE_6__["default"], {
        save: this.addLiability
      })));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(HomePage, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
});

var mapStateToProps = function mapStateToProps(_ref3) {
  var user = _ref3.user;
  return {
    user: user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(HomePage));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_52339ab353c8e0db40da":
/*!*******************************************!*\
  !*** external "dll_52339ab353c8e0db40da" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_52339ab353c8e0db40da;

/***/ })

},[[4,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=index.js.map