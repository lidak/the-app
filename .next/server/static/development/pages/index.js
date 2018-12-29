module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this));

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

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          title = _this$state2.title,
          amount = _this$state2.amount;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "add-liability"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.addClicked
      }, "Add"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.changeTitle,
        value: title
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        value: amount,
        onChange: this.changeAmount
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/AuthForm/index.js":
/*!**************************************!*\
  !*** ./components/AuthForm/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/actionCreators */ "./actions/actionCreators.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Message */ "./components/Message/index.js");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-materialize */ "react-materialize");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_5__);


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
      debugger;
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
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          password = _this$state2.password,
          messageType = _this$state2.messageType,
          messageText = _this$state2.messageText;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "input-field col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        value: name,
        onChange: this.onNameChange,
        id: "name",
        className: "validate"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "name"
      }, "Name")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "input-field col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        value: password,
        onChange: this.onPasswordChange,
        id: "password",
        className: "validate"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "password"
      }, "Password")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        waves: "light",
        className: "col s12 m2 offset-m7",
        onClick: this.submitForm.bind(this, true)
      }, "Register"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "col s12 m2 offset-m1",
        onClick: this.submitForm.bind(this, false)
      }, "Log In"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: messageType,
        message: messageText
      }));
    }
  }]);

  return AuthForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapDispatchToProps(dispatch) {
  return {
    setUser: function setUser(user) {
      return dispatch(Object(_actions_actionCreators__WEBPACK_IMPORTED_MODULE_3__["setUser"])(user));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AuthForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AuthForm */ "./components/AuthForm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-materialize */ "react-materialize");
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

Header.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.obj,
  logOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

function mapStateToProps(_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./components/LiablilityItem/style.styl":
/*!**********************************************!*\
  !*** ./components/LiablilityItem/style.styl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
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

/***/ "./components/Message/style.styl":
/*!***************************************!*\
  !*** ./components/Message/style.styl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/home.styl":
/*!*************************!*\
  !*** ./pages/home.styl ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _home_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.styl */ "./pages/home.styl");
/* harmony import */ var _home_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LiablilityItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LiablilityItem */ "./components/LiablilityItem/index.js");
/* harmony import */ var _components_AddLiability__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AddLiability */ "./components/AddLiability/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, liabilities && !!liabilities.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, liabilities.map(function (_ref2) {
        var title = _ref2.title,
            amount = _ref2.amount;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LiablilityItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: title,
          amount: amount,
          removeClicked: _this2.removeLiability.bind(_this2),
          key: title
        });
      })), !liabilities.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "You must be a happy person. You don't have any liabilities."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AddLiability__WEBPACK_IMPORTED_MODULE_4__["default"], {
        save: this.addLiability
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-materialize":
/*!************************************!*\
  !*** external "react-materialize" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-materialize");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map