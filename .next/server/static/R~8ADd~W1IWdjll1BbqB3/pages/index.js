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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./pages/home.styl
var home = __webpack_require__(3);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/LiablilityItem/style.styl
var style = __webpack_require__(5);

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
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: ./components/Message/style.styl
var Message_style = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Message/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Message_Message =
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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.message != this.props.message || nextProps.type != this.props.type) {
        this.state.lastShown = new Date();
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


// CONCATENATED MODULE: ./components/Auth.js


function Auth_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Auth_typeof = function _typeof(obj) { return typeof obj; }; } else { Auth_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Auth_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Auth_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Auth_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Auth_createClass(Constructor, protoProps, staticProps) { if (protoProps) Auth_defineProperties(Constructor.prototype, protoProps); if (staticProps) Auth_defineProperties(Constructor, staticProps); return Constructor; }

function Auth_possibleConstructorReturn(self, call) { if (call && (Auth_typeof(call) === "object" || typeof call === "function")) { return call; } return Auth_assertThisInitialized(self); }

function Auth_getPrototypeOf(o) { Auth_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Auth_getPrototypeOf(o); }

function Auth_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Auth_setPrototypeOf(subClass, superClass); }

function Auth_setPrototypeOf(o, p) { Auth_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Auth_setPrototypeOf(o, p); }

function Auth_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Auth_Auth =
/*#__PURE__*/
function (_Component) {
  Auth_inherits(Auth, _Component);

  function Auth() {
    var _this;

    Auth_classCallCheck(this, Auth);

    _this = Auth_possibleConstructorReturn(this, Auth_getPrototypeOf(Auth).call(this));

    _defineProperty(Auth_assertThisInitialized(Auth_assertThisInitialized(_this)), "onNameChange", function (e) {
      _this.setState({
        name: e.target.value
      });
    });

    _defineProperty(Auth_assertThisInitialized(Auth_assertThisInitialized(_this)), "onPasswordChange", function (e) {
      _this.setState({
        password: e.target.value
      });
    });

    _defineProperty(Auth_assertThisInitialized(Auth_assertThisInitialized(_this)), "submitForm", function (isRegister) {
      var _this$state = _this.state,
          name = _this$state.name,
          password = _this$state.password;
      var urlEnding = isRegister ? 'sign-up' : 'sign-in';
      var successMessage = isRegister ? 'User created' : 'User Logged In';

      _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var rawResponse, content;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(location.origin, "/users/").concat(urlEnding), {
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

  Auth_createClass(Auth, [{
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
      }), external_react_default.a.createElement("input", {
        type: "button",
        value: "Sign Up",
        onClick: this.submitForm.bind(this, true)
      }), external_react_default.a.createElement("input", {
        type: "button",
        value: "Sign In",
        onClick: this.submitForm.bind(this, false)
      }), external_react_default.a.createElement(Message_Message, {
        type: messageType,
        message: messageText
      }));
    }
  }]);

  return Auth;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/AddLiability.js


function AddLiability_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AddLiability_typeof = function _typeof(obj) { return typeof obj; }; } else { AddLiability_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AddLiability_typeof(obj); }

function AddLiability_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AddLiability_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AddLiability_createClass(Constructor, protoProps, staticProps) { if (protoProps) AddLiability_defineProperties(Constructor.prototype, protoProps); if (staticProps) AddLiability_defineProperties(Constructor, staticProps); return Constructor; }

function AddLiability_possibleConstructorReturn(self, call) { if (call && (AddLiability_typeof(call) === "object" || typeof call === "function")) { return call; } return AddLiability_assertThisInitialized(self); }

function AddLiability_getPrototypeOf(o) { AddLiability_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AddLiability_getPrototypeOf(o); }

function AddLiability_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AddLiability_setPrototypeOf(subClass, superClass); }

function AddLiability_setPrototypeOf(o, p) { AddLiability_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AddLiability_setPrototypeOf(o, p); }

function AddLiability_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AddLiability_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var AddLiability_AddLiability =
/*#__PURE__*/
function (_Component) {
  AddLiability_inherits(AddLiability, _Component);

  function AddLiability() {
    var _this;

    AddLiability_classCallCheck(this, AddLiability);

    _this = AddLiability_possibleConstructorReturn(this, AddLiability_getPrototypeOf(AddLiability).call(this));

    AddLiability_defineProperty(AddLiability_assertThisInitialized(AddLiability_assertThisInitialized(_this)), "changeTitle", function (e) {
      _this.setState({
        title: e.target.value
      });
    });

    AddLiability_defineProperty(AddLiability_assertThisInitialized(AddLiability_assertThisInitialized(_this)), "changeAmount", function (e) {
      _this.setState({
        amount: e.target.value
      });
    });

    AddLiability_defineProperty(AddLiability_assertThisInitialized(AddLiability_assertThisInitialized(_this)), "addClicked", function () {
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

  AddLiability_createClass(AddLiability, [{
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
      }), external_react_default.a.createElement(Auth_Auth, null));
    }
  }]);

  return AddLiability;
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
      var hello = this.props.hello;
      return external_react_default.a.createElement("div", {
        className: "home-page-container"
      }, liabilities && !!liabilities.length && external_react_default.a.createElement("ul", null, liabilities.map(function (_ref2) {
        var title = _ref2.title,
            amount = _ref2.amount;
        return external_react_default.a.createElement(LiablilityItem, {
          title: title,
          amount: amount,
          removeClicked: _this2.removeLiability.bind(_this2)
        });
      })), !liabilities.length && external_react_default.a.createElement("div", null, "You must be a happy person. You don't have any liabilities."), hello, external_react_default.a.createElement(AddLiability_AddLiability, {
        save: this.addLiability
      }));
    }
  }]);

  return HomePage;
}(external_react_["Component"]);



/***/ })
/******/ ]);