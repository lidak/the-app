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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_USER; });
var SET_USER = 'SET_USER';

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-materialize");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./pages/home.styl
var home = __webpack_require__(12);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(13);

// EXTERNAL MODULE: ./components/LiablilityItem/style.styl
var style = __webpack_require__(14);

// CONCATENATED MODULE: ./components/LiablilityItem/index.js


/* harmony default export */ var LiablilityItem = (function (_ref) {
  var title = _ref.title,
      amount = _ref.amount,
      removeClicked = _ref.removeClicked;
  return external_react_default.a.createElement("div", {
    className: "liability-item"
  }, external_react_default.a.createElement("div", null, title), external_react_default.a.createElement("div", null, amount), external_react_default.a.createElement("button", {
    onClick: removeClicked.bind(null, title)
  }, "Remove"));
});
// CONCATENATED MODULE: ./components/AddLiability/index.js
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



var AddLiability_Index =
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
      return external_react_default.a.createElement("div", {
        className: "add-liability"
      }, external_react_default.a.createElement("button", {
        onClick: this.addClicked
      }, "Add"), external_react_default.a.createElement("input", {
        type: "text",
        onChange: this.changeTitle,
        value: title
      }), external_react_default.a.createElement("input", {
        type: "number",
        value: amount,
        onChange: this.changeAmount
      }));
    }
  }]);

  return Index;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(1);

// EXTERNAL MODULE: ./actions/constants.js
var constants = __webpack_require__(2);

// CONCATENATED MODULE: ./actions/actionCreators.js

function actionCreators_setUser(payload) {
  return {
    type: constants["a" /* SET_USER */],
    payload: payload
  };
}
// EXTERNAL MODULE: ./components/Message/style.styl
var Message_style = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Message/index.js
function Message_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Message_typeof = function _typeof(obj) { return typeof obj; }; } else { Message_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Message_typeof(obj); }

function Message_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Message_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Message_createClass(Constructor, protoProps, staticProps) { if (protoProps) Message_defineProperties(Constructor.prototype, protoProps); if (staticProps) Message_defineProperties(Constructor, staticProps); return Constructor; }

function Message_possibleConstructorReturn(self, call) { if (call && (Message_typeof(call) === "object" || typeof call === "function")) { return call; } return Message_assertThisInitialized(self); }

function Message_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Message_getPrototypeOf(o) { Message_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Message_getPrototypeOf(o); }

function Message_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Message_setPrototypeOf(subClass, superClass); }

function Message_setPrototypeOf(o, p) { Message_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Message_setPrototypeOf(o, p); }





var Message_Message =
/*#__PURE__*/
function (_Component) {
  Message_inherits(Message, _Component);

  function Message() {
    var _this;

    Message_classCallCheck(this, Message);

    _this = Message_possibleConstructorReturn(this, Message_getPrototypeOf(Message).call(this));
    _this.state = {
      lastShown: new Date()
    };
    return _this;
  }

  Message_createClass(Message, [{
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
      return !!message.length && isVisible && external_react_default.a.createElement("div", {
        className: "message ".concat(type)
      }, message);
    }
  }]);

  return Message;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "react-materialize"
var external_react_materialize_ = __webpack_require__(7);

// CONCATENATED MODULE: ./components/AuthForm/index.js


function AuthForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AuthForm_typeof = function _typeof(obj) { return typeof obj; }; } else { AuthForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AuthForm_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function AuthForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AuthForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AuthForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) AuthForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) AuthForm_defineProperties(Constructor, staticProps); return Constructor; }

function AuthForm_possibleConstructorReturn(self, call) { if (call && (AuthForm_typeof(call) === "object" || typeof call === "function")) { return call; } return AuthForm_assertThisInitialized(self); }

function AuthForm_getPrototypeOf(o) { AuthForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AuthForm_getPrototypeOf(o); }

function AuthForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AuthForm_setPrototypeOf(subClass, superClass); }

function AuthForm_setPrototypeOf(o, p) { AuthForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AuthForm_setPrototypeOf(o, p); }

function AuthForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AuthForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AuthForm_AuthForm =
/*#__PURE__*/
function (_Component) {
  AuthForm_inherits(AuthForm, _Component);

  function AuthForm() {
    var _this;

    AuthForm_classCallCheck(this, AuthForm);

    _this = AuthForm_possibleConstructorReturn(this, AuthForm_getPrototypeOf(AuthForm).call(this));

    AuthForm_defineProperty(AuthForm_assertThisInitialized(AuthForm_assertThisInitialized(_this)), "onNameChange", function (e) {
      _this.setState({
        name: e.target.value
      });
    });

    AuthForm_defineProperty(AuthForm_assertThisInitialized(AuthForm_assertThisInitialized(_this)), "onPasswordChange", function (e) {
      _this.setState({
        password: e.target.value
      });
    });

    AuthForm_defineProperty(AuthForm_assertThisInitialized(AuthForm_assertThisInitialized(_this)), "submitForm", function (isRegister) {
      var _this$state = _this.state,
          name = _this$state.name,
          password = _this$state.password;
      var urlEnding = isRegister ? 'sign-up' : 'sign-in';
      var successMessage = isRegister ? 'User created' : 'User Logged In';
      var setUser = _this.props.setUser;

      _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var rawResponse, content;
        return regenerator_default.a.wrap(function _callee$(_context) {
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

  AuthForm_createClass(AuthForm, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          password = _this$state2.password,
          messageType = _this$state2.messageType,
          messageText = _this$state2.messageText;
      return external_react_default.a.createElement("form", null, external_react_default.a.createElement("input", {
        type: "text",
        value: name,
        onChange: this.onNameChange,
        name: "name"
      }), external_react_default.a.createElement("input", {
        type: "password",
        value: password,
        onChange: this.onPasswordChange,
        name: "password"
      }), external_react_default.a.createElement(external_react_materialize_["Button"], {
        waves: "light",
        large: true,
        className: "red",
        onClick: this.submitForm.bind(this, true)
      }, "Sign Up"), external_react_default.a.createElement(external_react_materialize_["Button"], {
        type: "button",
        onClick: this.submitForm.bind(this, false)
      }, "Sign In"), external_react_default.a.createElement(Message_Message, {
        type: messageType,
        message: messageText
      }));
    }
  }]);

  return AuthForm;
}(external_react_["Component"]);

function mapDispatchToProps(dispatch) {
  return {
    setUser: function setUser(user) {
      return dispatch(actionCreators_setUser(user));
    }
  };
}

/* harmony default export */ var components_AuthForm = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(AuthForm_AuthForm));
// CONCATENATED MODULE: ./components/Layout/components/Header/index.js
function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }






var Header_Header =
/*#__PURE__*/
function (_Component) {
  Header_inherits(Header, _Component);

  function Header() {
    Header_classCallCheck(this, Header);

    return Header_possibleConstructorReturn(this, Header_getPrototypeOf(Header).apply(this, arguments));
  }

  Header_createClass(Header, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      return external_react_default.a.createElement("header", null, !user.name && external_react_default.a.createElement(components_AuthForm, null), !!user.name && "Welcome ".concat(user.name, "!"));
    }
  }]);

  return Header;
}(external_react_["Component"]);

function mapStateToProps(_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}

/* harmony default export */ var components_Header = (Object(external_react_redux_["connect"])(mapStateToProps)(Header_Header));
// CONCATENATED MODULE: ./components/Layout/index.js
function Layout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layout_typeof = function _typeof(obj) { return typeof obj; }; } else { Layout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layout_typeof(obj); }

function Layout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Layout_createClass(Constructor, protoProps, staticProps) { if (protoProps) Layout_defineProperties(Constructor.prototype, protoProps); if (staticProps) Layout_defineProperties(Constructor, staticProps); return Constructor; }

function Layout_possibleConstructorReturn(self, call) { if (call && (Layout_typeof(call) === "object" || typeof call === "function")) { return call; } return Layout_assertThisInitialized(self); }

function Layout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Layout_getPrototypeOf(o) { Layout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Layout_getPrototypeOf(o); }

function Layout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Layout_setPrototypeOf(subClass, superClass); }

function Layout_setPrototypeOf(o, p) { Layout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Layout_setPrototypeOf(o, p); }





var Layout_Layout =
/*#__PURE__*/
function (_Component) {
  Layout_inherits(Layout, _Component);

  function Layout() {
    Layout_classCallCheck(this, Layout);

    return Layout_possibleConstructorReturn(this, Layout_getPrototypeOf(Layout).apply(this, arguments));
  }

  Layout_createClass(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return external_react_default.a.createElement("div", {
        className: "layout"
      }, external_react_default.a.createElement(components_Header, null), children, external_react_default.a.createElement("footer", null));
    }
  }]);

  return Layout;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_HomePage; });
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var pages_HomePage =
/*#__PURE__*/
function (_Component) {
  pages_inherits(HomePage, _Component);

  function HomePage() {
    var _this;

    pages_classCallCheck(this, HomePage);

    _this = pages_possibleConstructorReturn(this, pages_getPrototypeOf(HomePage).call(this));

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "addLiability", function (_ref) {
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

  pages_createClass(HomePage, [{
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
      return external_react_default.a.createElement(Layout_Layout, null, liabilities && !!liabilities.length && external_react_default.a.createElement("ul", null, liabilities.map(function (_ref2) {
        var title = _ref2.title,
            amount = _ref2.amount;
        return external_react_default.a.createElement(LiablilityItem, {
          title: title,
          amount: amount,
          removeClicked: _this2.removeLiability.bind(_this2),
          key: title
        });
      })), !liabilities.length && external_react_default.a.createElement("div", null, "You must be a happy person. You don't have any liabilities."), external_react_default.a.createElement(AddLiability_Index, {
        save: this.addLiability
      }));
    }
  }]);

  return HomePage;
}(external_react_["Component"]);



/***/ })
/******/ ]);