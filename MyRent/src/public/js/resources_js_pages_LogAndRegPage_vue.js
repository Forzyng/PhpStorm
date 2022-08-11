"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_LogAndRegPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/auth */ "./resources/js/store/auth.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LogAndReg",
  mounted: function mounted() {
    var signUpButton = document.getElementById('signUp');
    var signInButton = document.getElementById('signIn');
    var container = document.getElementById('container');
    signUpButton.addEventListener('click', function () {
      container.classList.add('right-panel-active');
    });
    signInButton.addEventListener('click', function () {
      container.classList.remove('right-panel-active');
    });
  },
  setup: function setup() {
    var store = (0,_store_auth__WEBPACK_IMPORTED_MODULE_0__.useAuthStore)();
    var emailForLogin = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var passwordForLogin = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();

    var tryLogin = function tryLogin() {
      console.log('Start Login: ' + emailForLogin.value + ' ' + passwordForLogin.value);
      store.tryLogin(emailForLogin.value, passwordForLogin.value);
    };

    var canSendForm = store.Sending;
    var canSendLoginForm = store.Sending;
    var login = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var email = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var password = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var password_confirmation = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var registerCheck = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();

    var tryCreateUser = function tryCreateUser() {
      console.log('Start Creating: ');
      store.tryRegister(email.value, login.value, password.value, password_confirmation.value, registerCheck.value);
    };

    return {
      emailForLogin: emailForLogin,
      passwordForLogin: passwordForLogin,
      tryLogin: tryLogin,
      canSendForm: canSendForm,
      canSendLoginForm: canSendLoginForm,
      tryCreateUser: tryCreateUser,
      login: login,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      registerCheck: registerCheck
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LogAndRegPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LogAndRegPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Auth_LogAndReg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Auth/LogAndReg */ "./resources/js/components/Auth/LogAndReg.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LogAndRegPage",
  components: {
    LogAndReg: _components_Auth_LogAndReg__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=template&id=a146a3f6&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=template&id=a146a3f6&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a146a3f6"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container",
  id: "container"
};
var _hoisted_2 = {
  "class": "form-container sign-up-container"
};
var _hoisted_3 = {
  action: "#"
};

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Create Account", -1
  /* HOISTED */
  );
});

var _hoisted_5 = {
  "class": "form-check d-flex justify-content-center mb-5"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-check-label mb-3",
    "for": "registerCheck"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" I agree all statements in "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, "Terms of service")], -1
  /* HOISTED */
  );
});

var _hoisted_7 = ["disabled"];
var _hoisted_8 = {
  "class": "form-container sign-in-container"
};
var _hoisted_9 = {
  action: "#"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Sign in", -1
  /* HOISTED */
  );
});

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, "Forgot your password?", -1
  /* HOISTED */
  );
});

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, "Did not get email confirmation?", -1
  /* HOISTED */
  );
});

var _hoisted_13 = ["disabled"];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"overlay-container\" data-v-a146a3f6><div class=\"overlay\" data-v-a146a3f6><div class=\"overlay-panel overlay-left\" data-v-a146a3f6><h1 data-v-a146a3f6>Welcome Back!</h1><p data-v-a146a3f6>To keep connected with us please login with your personal info</p><button class=\"ghost\" id=\"signIn\" data-v-a146a3f6>Sign In</button></div><div class=\"overlay-panel overlay-right\" data-v-a146a3f6><h1 data-v-a146a3f6>Hello, Friend!</h1><p data-v-a146a3f6>Enter your personal details and start journey with us</p><button class=\"ghost\" id=\"signUp\" data-v-a146a3f6>Sign Up</button></div></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.login = $event;
    }),
    id: "RegisterLogin",
    type: "text",
    placeholder: "Login"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.login]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.email = $event;
    }),
    id: "RegisterEmail",
    type: "email",
    placeholder: "Email"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.password = $event;
    }),
    id: "RegisterPassword",
    type: "password",
    placeholder: "Password"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.password_confirmation = $event;
    }),
    id: "RegisterPasswordConfirmation",
    type: "password",
    placeholder: "Password Confirm"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.password_confirmation]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.registerCheck = $event;
    }),
    style: {
      "alignment": "left",
      "margin-top": "6px",
      "width": "30px"
    },
    type: "checkbox",
    value: "",
    id: "registerCheck"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.registerCheck]]), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    id: "RegisterBtn",
    onClick: _cache[5] || (_cache[5] = function () {
      return $setup.tryCreateUser && $setup.tryCreateUser.apply($setup, arguments);
    }),
    disabled: $setup.canSendForm
  }, "Sign Up", 8
  /* PROPS */
  , _hoisted_7)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.emailForLogin = $event;
    }),
    id: "LoginEmail",
    type: "text",
    placeholder: "Email"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.emailForLogin]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.passwordForLogin = $event;
    }),
    id: "LoginPassword",
    type: "password",
    placeholder: "Password"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.passwordForLogin]]), _hoisted_11, _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    id: "LoginBtn",
    onClick: _cache[8] || (_cache[8] = function () {
      return $setup.tryLogin && $setup.tryLogin.apply($setup, arguments);
    }),
    disabled: $setup.canSendLoginForm
  }, "Sign In", 8
  /* PROPS */
  , _hoisted_13)])]), _hoisted_14]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LogAndRegPage.vue?vue&type=template&id=08d24f17":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LogAndRegPage.vue?vue&type=template&id=08d24f17 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_LogAndReg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LogAndReg");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LogAndReg);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-a146a3f6] {\n    box-sizing: border-box;\n}\n.isa_error[data-v-a146a3f6] {\n    color: #D8000C;\n    background-color: #FFD2D2;\n    font-size: 16px;\n    font-weight: bold;\n    padding: 2px;\n}\n.isa_success[data-v-a146a3f6] {\n    color: #4F8A10;\n    background-color: #DFF2BF;\n    font-size: 16px;\n    font-weight: bold;\n    padding: 2px;\n}\nbody[data-v-a146a3f6] {\n    background: #f6f5f7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    font-family: 'Montserrat', sans-serif;\n    height: 100vh;\n    margin: -20px 0 50px;\n}\nh1[data-v-a146a3f6] {\n    font-weight: bold;\n    margin: 0;\n}\nh2[data-v-a146a3f6] {\n    text-align: center;\n}\np[data-v-a146a3f6] {\n    font-size: 14px;\n    font-weight: 100;\n    line-height: 20px;\n    letter-spacing: 0.5px;\n    margin: 20px 0 30px;\n}\nspan[data-v-a146a3f6] {\n    font-size: 12px;\n}\na[data-v-a146a3f6] {\n    color: #2779d6;\n    font-size: 14px;\n    text-decoration: none;\n    margin: 15px 0;\n}\nbutton[data-v-a146a3f6] {\n    border-radius: 20px;\n    border: 1px solid #FF4B2B;\n    background-color: #FF4B2B;\n    color: #FFFFFF;\n    font-size: 12px;\n    font-weight: bold;\n    padding: 12px 45px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    transition: transform 80ms ease-in;\n}\nbutton[data-v-a146a3f6]:active {\n    transform: scale(0.95);\n}\nbutton[data-v-a146a3f6]:focus {\n    outline: none;\n}\nbutton.ghost[data-v-a146a3f6] {\n    background-color: transparent;\n    border-color: #FFFFFF;\n}\nform[data-v-a146a3f6] {\n    background-color: #FFFFFF;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 0 50px;\n    height: 100%;\n    text-align: center;\n}\ninput[data-v-a146a3f6] {\n    background-color: #eee;\n    border: none;\n    padding: 12px 15px;\n    margin: 8px 0;\n    width: 100%;\n}\n.container[data-v-a146a3f6] {\n    background-color: #fff;\n    border-radius: 10px;\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25),\n    0 10px 10px rgba(0,0,0,0.22);\n    position: relative;\n    overflow: hidden;\n    width: 768px;\n    max-width: 100%;\n    min-height: 480px;\n}\n.form-container[data-v-a146a3f6] {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    transition: all 0.6s ease-in-out;\n}\n.sign-in-container[data-v-a146a3f6] {\n    left: 0;\n    width: 50%;\n    z-index: 2;\n}\n.container.right-panel-active .sign-in-container[data-v-a146a3f6] {\n    transform: translateX(100%);\n}\n.sign-up-container[data-v-a146a3f6] {\n    left: 0;\n    width: 50%;\n    opacity: 0;\n    z-index: 1;\n}\n.container.right-panel-active .sign-up-container[data-v-a146a3f6] {\n    transform: translateX(100%);\n    opacity: 1;\n    z-index: 5;\n    -webkit-animation: show-a146a3f6 0.6s;\n            animation: show-a146a3f6 0.6s;\n}\n@-webkit-keyframes show-a146a3f6 {\n0%, 49.99% {\n        opacity: 0;\n        z-index: 1;\n}\n50%, 100% {\n        opacity: 1;\n        z-index: 5;\n}\n}\n@keyframes show-a146a3f6 {\n0%, 49.99% {\n        opacity: 0;\n        z-index: 1;\n}\n50%, 100% {\n        opacity: 1;\n        z-index: 5;\n}\n}\n.overlay-container[data-v-a146a3f6] {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    transition: transform 0.6s ease-in-out;\n    z-index: 100;\n}\n.container.right-panel-active .overlay-container[data-v-a146a3f6]{\n    transform: translateX(-100%);\n}\n.overlay[data-v-a146a3f6] {\n    background: #FF416C;\n    background: linear-gradient(to right, #FF4B2B, #FF416C);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 0 0;\n    color: #FFFFFF;\n    position: relative;\n    left: -100%;\n    height: 100%;\n    width: 200%;\n    transform: translateX(0);\n    transition: transform 0.6s ease-in-out;\n}\n.container.right-panel-active .overlay[data-v-a146a3f6] {\n    transform: translateX(50%);\n}\n.overlay-panel[data-v-a146a3f6] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 0 40px;\n    text-align: center;\n    top: 0;\n    height: 100%;\n    width: 50%;\n    transform: translateX(0);\n    transition: transform 0.6s ease-in-out;\n}\n.overlay-left[data-v-a146a3f6] {\n    transform: translateX(-20%);\n}\n.container.right-panel-active .overlay-left[data-v-a146a3f6] {\n    transform: translateX(0);\n}\n.overlay-right[data-v-a146a3f6] {\n    right: 0;\n    transform: translateX(0);\n}\n.container.right-panel-active .overlay-right[data-v-a146a3f6] {\n    transform: translateX(20%);\n}\n.social-container[data-v-a146a3f6] {\n    margin: 20px 0;\n}\n.social-container a[data-v-a146a3f6] {\n    border: 1px solid #DDDDDD;\n    border-radius: 50%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 5px;\n    height: 40px;\n    width: 40px;\n}\nfooter[data-v-a146a3f6] {\n    background-color: #222;\n    color: #fff;\n    font-size: 14px;\n    bottom: 0;\n    position: fixed;\n    left: 0;\n    right: 0;\n    text-align: center;\n    z-index: 999;\n}\nfooter p[data-v-a146a3f6] {\n    margin: 10px 0;\n}\nfooter i[data-v-a146a3f6] {\n    color: red;\n}\nfooter a[data-v-a146a3f6] {\n    color: #3c97bf;\n    text-decoration: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndReg_vue_vue_type_style_index_0_id_a146a3f6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndReg_vue_vue_type_style_index_0_id_a146a3f6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndReg_vue_vue_type_style_index_0_id_a146a3f6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Auth/LogAndReg.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Auth/LogAndReg.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogAndReg_vue_vue_type_template_id_a146a3f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogAndReg.vue?vue&type=template&id=a146a3f6&scoped=true */ "./resources/js/components/Auth/LogAndReg.vue?vue&type=template&id=a146a3f6&scoped=true");
/* harmony import */ var _LogAndReg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogAndReg.vue?vue&type=script&lang=js */ "./resources/js/components/Auth/LogAndReg.vue?vue&type=script&lang=js");
/* harmony import */ var _LogAndReg_vue_vue_type_style_index_0_id_a146a3f6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css */ "./resources/js/components/Auth/LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css");
/* harmony import */ var D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_LogAndReg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LogAndReg_vue_vue_type_template_id_a146a3f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a146a3f6"],['__file',"resources/js/components/Auth/LogAndReg.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/LogAndRegPage.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/LogAndRegPage.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogAndRegPage_vue_vue_type_template_id_08d24f17__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogAndRegPage.vue?vue&type=template&id=08d24f17 */ "./resources/js/pages/LogAndRegPage.vue?vue&type=template&id=08d24f17");
/* harmony import */ var _LogAndRegPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogAndRegPage.vue?vue&type=script&lang=js */ "./resources/js/pages/LogAndRegPage.vue?vue&type=script&lang=js");
/* harmony import */ var D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LogAndRegPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LogAndRegPage_vue_vue_type_template_id_08d24f17__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/LogAndRegPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Auth/LogAndReg.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Auth/LogAndReg.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndReg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndReg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogAndReg.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/LogAndRegPage.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/LogAndRegPage.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndRegPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndRegPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogAndRegPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LogAndRegPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Auth/LogAndReg.vue?vue&type=template&id=a146a3f6&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Auth/LogAndReg.vue?vue&type=template&id=a146a3f6&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndReg_vue_vue_type_template_id_a146a3f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndReg_vue_vue_type_template_id_a146a3f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogAndReg.vue?vue&type=template&id=a146a3f6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=template&id=a146a3f6&scoped=true");


/***/ }),

/***/ "./resources/js/pages/LogAndRegPage.vue?vue&type=template&id=08d24f17":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/LogAndRegPage.vue?vue&type=template&id=08d24f17 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndRegPage_vue_vue_type_template_id_08d24f17__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndRegPage_vue_vue_type_template_id_08d24f17__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogAndRegPage.vue?vue&type=template&id=08d24f17 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LogAndRegPage.vue?vue&type=template&id=08d24f17");


/***/ }),

/***/ "./resources/js/components/Auth/LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Auth/LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LogAndReg_vue_vue_type_style_index_0_id_a146a3f6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/LogAndReg.vue?vue&type=style&index=0&id=a146a3f6&scoped=true&lang=css");


/***/ })

}]);