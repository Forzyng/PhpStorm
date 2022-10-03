"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_SentEmailPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/auth */ "./resources/js/store/auth.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SentEmailComponent",
  setup: function setup() {
    var store = (0,_store_auth__WEBPACK_IMPORTED_MODULE_0__.useAuthStore)();
    var email = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var password = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();

    var tryToResend = function tryToResend() {
      console.log('Start Sending email: ' + email.value + ' ' + password.value);
      store.tryToResend(email.value, password.value);
    };

    return {
      store: store,
      email: email,
      password: password,
      tryToResend: tryToResend
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SentEmailPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SentEmailPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_EmailConfirmation_SentEmailComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/EmailConfirmation/SentEmailComponent */ "./resources/js/components/EmailConfirmation/SentEmailComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SentEmailPage",
  components: {
    SentEmailComponent: _components_EmailConfirmation_SentEmailComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=template&id=0b65c6e2&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=template&id=0b65c6e2&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0b65c6e2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "display": "none",
      "font-size": "1px",
      "color": "#fefefe",
      "line-height": "1px",
      "font-family": "'Lato', Helvetica, Arial, sans-serif",
      "max-height": "0px",
      "max-width": "0px",
      "opacity": "0",
      "overflow": "hidden"
    }
  }, " We're thrilled to have you here! Get ready to dive into your new account. ", -1
  /* HOISTED */
  );
});

var _hoisted_2 = {
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  width: "100%"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    bgcolor: "#000000",
    align: "center"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    border: "0",
    cellpadding: "0",
    cellspacing: "0",
    width: "100%",
    style: {
      "max-width": "600px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "center",
    valign: "top",
    style: {
      "padding": "40px 10px 40px 10px"
    }
  })])])])], -1
  /* HOISTED */
  );
});

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    bgcolor: "#000000",
    align: "center",
    style: {
      "padding": "0px 10px 0px 10px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    border: "0",
    cellpadding: "0",
    cellspacing: "0",
    width: "100%",
    style: {
      "max-width": "600px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    bgcolor: "#ffffff",
    align: "center",
    valign: "top",
    style: {
      "padding": "40px 20px 20px 20px",
      "border-radius": "4px 4px 0px 0px",
      "color": "#111111",
      "font-family": "'Lato', Helvetica, Arial, sans-serif",
      "font-size": "48px",
      "font-weight": "400",
      "letter-spacing": "4px",
      "line-height": "48px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    style: {
      "font-size": "48px",
      "font-weight": "400",
      "margin": "2px"
    }
  }, "Resend Email"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: " https://img.icons8.com/clouds/100/000000/handshake.png",
    width: "125",
    height: "120",
    style: {
      "display": "block",
      "border": "0px"
    }
  })])])])])], -1
  /* HOISTED */
  );
});

var _hoisted_5 = {
  bgcolor: "#dcdcdc",
  align: "center",
  style: {
    "padding": "0px 10px 0px 10px"
  }
};
var _hoisted_6 = {
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  width: "100%",
  style: {
    "max-width": "600px"
  }
};

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    bgcolor: "#ffffff",
    align: "left",
    style: {
      "padding": "20px 30px 40px 30px",
      "color": "#666666",
      "font-family": "'Lato', Helvetica, Arial, sans-serif",
      "font-size": "18px",
      "font-weight": "400",
      "line-height": "25px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "margin": "0"
    }
  }, "Enter your data and we will resend you email ")])], -1
  /* HOISTED */
  );
});

var _hoisted_8 = {
  bgcolor: "#ffffff",
  align: "left"
};
var _hoisted_9 = {
  width: "100%",
  border: "0",
  cellspacing: "0",
  cellpadding: "0"
};
var _hoisted_10 = {
  bgcolor: "#ffffff",
  align: "center",
  style: {
    "padding": "20px 30px 60px 30px"
  }
};
var _hoisted_11 = {
  border: "0",
  cellspacing: "0",
  cellpadding: "0"
};
var _hoisted_12 = {
  align: "center",
  style: {
    "border-radius": "3px"
  },
  bgcolor: "#ffffff"
};

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "Errors",
    "class": "text-danger"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_14 = {
  "class": "form-group"
};
var _hoisted_15 = ["disabled"];

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "font-family": "'Lato', Helvetica, Arial, sans-serif",
      "font-size": "12px",
      "font-weight": "400"
    },
    align: "center",
    id: "timer"
  }, "(After sending, page will be updated)", -1
  /* HOISTED */
  );
});

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    bgcolor: "#ffffff",
    align: "left",
    style: {
      "padding": "0px 30px 20px 30px",
      "color": "#666666",
      "font-family": "'Lato', Helvetica, Arial, sans-serif",
      "font-size": "18px",
      "font-weight": "400",
      "line-height": "25px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "margin": "0"
    }
  }, "If you have any questions, we're always happy to help out.")])], -1
  /* HOISTED */
  );
});

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    bgcolor: "#ffffff",
    align: "left",
    style: {
      "padding": "0px 30px 40px 30px",
      "border-radius": "0px 0px 4px 4px",
      "color": "#666666",
      "font-family": "'Lato', Helvetica, Arial, sans-serif",
      "font-size": "18px",
      "font-weight": "400",
      "line-height": "25px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "margin": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cheers,"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Triangle Team")])])], -1
  /* HOISTED */
  );
});

var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    bgcolor: "#dcdcdc",
    align: "center",
    style: {
      "padding": "30px 10px 0px 10px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    border: "0",
    cellpadding: "0",
    cellspacing: "0",
    width: "100%",
    style: {
      "max-width": "600px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    bgcolor: "#FFECD1",
    align: "center",
    style: {
      "padding": "30px 30px 30px 30px",
      "border-radius": "4px 4px 4px 4px",
      "color": "#666666",
      "font-family": "'Lato', Helvetica, Arial, sans-serif",
      "font-size": "18px",
      "font-weight": "400",
      "line-height": "25px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    style: {
      "font-size": "20px",
      "font-weight": "400",
      "color": "#111111",
      "margin": "0"
    }
  }, "Need more help?"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "margin": "0"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "/Home/Help",
    target: "_blank",
    style: {
      "color": "#FFA73B"
    }
  }, "We’re here to help you out")])])])])])], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" HIDDEN PREHEADER TEXT "), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LOGO "), _hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.email = $event;
    }),
    type: "email",
    bgcolor: "#dcdcdc",
    id: "Email",
    placeholder: "E-mail",
    color: "#000000"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.password = $event;
    }),
    type: "password",
    id: "Password",
    placeholder: "Password",
    bgcolor: "#dcdcdc",
    color: "#000000"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    style: {
      "margin-top": "15px"
    },
    id: "callbackSend",
    "class": "form-control btn btn-primary submit px-3",
    onClick: _cache[2] || (_cache[2] = function () {
      return $setup.tryToResend && $setup.tryToResend.apply($setup, arguments);
    }),
    disabled: $setup.store.Sending
  }, "Resend", 8
  /* PROPS */
  , _hoisted_15), _hoisted_16])])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" COPY "), _hoisted_17, _hoisted_18])])]), _hoisted_19])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SentEmailPage.vue?vue&type=template&id=6418f75a":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SentEmailPage.vue?vue&type=template&id=6418f75a ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SentEmailComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SentEmailComponent");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SentEmailComponent);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-0b65c6e2]         {\n    font-size:18px;\n    padding:10px 10px 10px 5px;\n    display:block;\n    width:300px;\n    border:none;\n    border-bottom:1px solid #757575;\n}\n/* CLIENT-SPECIFIC STYLES */\nbody[data-v-0b65c6e2],\ntable[data-v-0b65c6e2],\ntd[data-v-0b65c6e2],\na[data-v-0b65c6e2] {\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n}\ntable[data-v-0b65c6e2],\ntd[data-v-0b65c6e2] {\n    mso-table-lspace: 0pt;\n    mso-table-rspace: 0pt;\n}\nimg[data-v-0b65c6e2] {\n    -ms-interpolation-mode: bicubic;\n}\n/* RESET STYLES */\nimg[data-v-0b65c6e2] {\n    border: 0;\n    height: auto;\n    line-height: 100%;\n    outline: none;\n    text-decoration: none;\n}\ntable[data-v-0b65c6e2] {\n    border-collapse: collapse !important;\n}\nbody[data-v-0b65c6e2] {\n    height: 100% !important;\n    margin: 0 !important;\n    padding: 0 !important;\n    width: 100% !important;\n}\n/* iOS BLUE LINKS */\na[x-apple-data-detectors][data-v-0b65c6e2] {\n    color: inherit !important;\n    text-decoration: none !important;\n    font-size: inherit !important;\n    font-family: inherit !important;\n    font-weight: inherit !important;\n    line-height: inherit !important;\n}\n/* MOBILE STYLES */\nh1[data-v-0b65c6e2] {\n    font-size: 32px !important;\n    line-height: 32px !important;\n}\nz\n    \ndiv[style*=\"margin: 16px 0;\"][data-v-0b65c6e2] {\n    margin: 0 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailComponent_vue_vue_type_style_index_0_id_0b65c6e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailComponent_vue_vue_type_style_index_0_id_0b65c6e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailComponent_vue_vue_type_style_index_0_id_0b65c6e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/EmailConfirmation/SentEmailComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/EmailConfirmation/SentEmailComponent.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SentEmailComponent_vue_vue_type_template_id_0b65c6e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SentEmailComponent.vue?vue&type=template&id=0b65c6e2&scoped=true */ "./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=template&id=0b65c6e2&scoped=true");
/* harmony import */ var _SentEmailComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SentEmailComponent.vue?vue&type=script&lang=js */ "./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _SentEmailComponent_vue_vue_type_style_index_0_id_0b65c6e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css */ "./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css");
/* harmony import */ var D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SentEmailComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SentEmailComponent_vue_vue_type_template_id_0b65c6e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0b65c6e2"],['__file',"resources/js/components/EmailConfirmation/SentEmailComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/SentEmailPage.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/SentEmailPage.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SentEmailPage_vue_vue_type_template_id_6418f75a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SentEmailPage.vue?vue&type=template&id=6418f75a */ "./resources/js/pages/SentEmailPage.vue?vue&type=template&id=6418f75a");
/* harmony import */ var _SentEmailPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SentEmailPage.vue?vue&type=script&lang=js */ "./resources/js/pages/SentEmailPage.vue?vue&type=script&lang=js");
/* harmony import */ var D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SentEmailPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SentEmailPage_vue_vue_type_template_id_6418f75a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/SentEmailPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SentEmailComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/SentEmailPage.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/SentEmailPage.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SentEmailPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SentEmailPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=template&id=0b65c6e2&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=template&id=0b65c6e2&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailComponent_vue_vue_type_template_id_0b65c6e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailComponent_vue_vue_type_template_id_0b65c6e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SentEmailComponent.vue?vue&type=template&id=0b65c6e2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=template&id=0b65c6e2&scoped=true");


/***/ }),

/***/ "./resources/js/pages/SentEmailPage.vue?vue&type=template&id=6418f75a":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/SentEmailPage.vue?vue&type=template&id=6418f75a ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailPage_vue_vue_type_template_id_6418f75a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailPage_vue_vue_type_template_id_6418f75a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SentEmailPage.vue?vue&type=template&id=6418f75a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SentEmailPage.vue?vue&type=template&id=6418f75a");


/***/ }),

/***/ "./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SentEmailComponent_vue_vue_type_style_index_0_id_0b65c6e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/EmailConfirmation/SentEmailComponent.vue?vue&type=style&index=0&id=0b65c6e2&scoped=true&lang=css");


/***/ })

}]);