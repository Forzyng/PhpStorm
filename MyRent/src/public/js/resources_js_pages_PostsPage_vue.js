"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_PostsPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LoadingComponent",
  props: {
    color: {
      type: String,
      "default": '#41b883'
    },
    scale: {
      type: Number,
      "default": 1
    }
  },
  computed: {
    cssVars: function cssVars() {
      return {
        '--color': this.color,
        '--scale': this.scale
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/posts */ "./resources/js/store/posts.js");
/* harmony import */ var _components_Loading_LoadingComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loading/LoadingComponent */ "./resources/js/components/Loading/LoadingComponent.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PostsPage",
  components: {
    LoadingComponent: _components_Loading_LoadingComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    var store = (0,_store_posts__WEBPACK_IMPORTED_MODULE_0__.usePostStore)();

    var doGetMorePosts = function doGetMorePosts() {
      store.getMorePosts();
    };

    if (store.total === 0) console.log("First do");
    doGetMorePosts();
    return {
      store: store,
      doGetMorePosts: doGetMorePosts
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=template&id=18ca591f&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=template&id=18ca591f&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-18ca591f"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<span class=\"rot-1\" data-v-18ca591f></span><span class=\"rot-2\" data-v-18ca591f></span><span class=\"rot-3\" data-v-18ca591f></span><span class=\"rot-4\" data-v-18ca591f></span><span class=\"rot-5\" data-v-18ca591f></span><span class=\"rot-6\" data-v-18ca591f></span><span class=\"rot-7\" data-v-18ca591f></span><span class=\"rot-8\" data-v-18ca591f></span>", 8);

var _hoisted_10 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "preloader",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.cssVars)
  }, _hoisted_10, 4
  /* STYLE */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=template&id=04b78e6e&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=template&id=04b78e6e&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-04b78e6e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 1,
  "class": "main_bg"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "content"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "container_12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grid_8"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "This week's best proposals "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "img_inner ident-right-1 fleft"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "/frontend/images/250x156_img4.jpg",
    alt: ""
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "extra_wrapper"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    "class": "link1"
  }, "Quisque nulla. Vestibulum libero nisl, porta vel, sceleris que eget, malesuada at, neque. Vivamus eget nibh.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Etiam cursus leo metus aenean nec eros. Vestibulum ante ipsum primis in faucibus luctus et ultrices posuere cubilia curae. Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit magna, hendrerit sit amet, tincidunt ac, viverra sed, nulla.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "clear"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grid_4 alpha t2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "title-effect"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("search by "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Country")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "box b2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    id: "form4",
    "class": "form-style form1",
    method: "post"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "text"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Enter Country Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "input"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text"
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "clear"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "alright"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: "document.getElementById('form1').submit()",
    href: "#",
    "class": "button-red ident-top-1"
  }, "Search")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grid_4 omega t2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "title-effect"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("search by "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " House Type")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "box b2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    id: "form2",
    "class": "form-style form1",
    method: "post"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "text"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "House Type")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "input"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text"
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "clear"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "alright"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "button-red ident-top-1"
  }, "Search")])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grid_4"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "title-effect"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Advanced "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "search")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "box b2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    id: "form3",
    "class": "form1-1 form1",
    method: "post"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "text"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Keyword: ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "input inp3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text"
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "clear"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "text tx1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Price Range: ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "input inp1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text"
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "text tx2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "To:")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "input inp2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text"
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "clear"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "text"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Country:")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "input inp3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text"
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "clear"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "text"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "City:")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "input inp3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text"
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "clear"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "text"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Property type: ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "input inp3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text"
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "clear"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "text"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Square Feet: ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "input inp3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text"
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "clear"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "alright"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: "document.getElementById('form3').submit()",
    href: "#",
    "class": "button-red ident-top-1"
  }, "Search")])])])])])], -1
  /* HOISTED */
  );
});

var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  "class": "main_bg"
};
var _hoisted_6 = {
  "class": "content"
};
var _hoisted_7 = {
  "class": "container_12"
};
var _hoisted_8 = {
  key: 0,
  "class": "wrapper"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"grid_12\" data-v-04b78e6e><h2 class=\"fleft\" data-v-04b78e6e>All Properties</h2><!-- start Filter categories --><ul id=\"filter\" data-v-04b78e6e><li data-v-04b78e6e><a href=\"#\" class=\"all\" data-v-04b78e6e>All</a></li><li data-v-04b78e6e><a href=\"#\" class=\"forrent\" data-v-04b78e6e>For Rent</a></li><li data-v-04b78e6e><a href=\"#\" class=\"forsale\" data-v-04b78e6e>For Sale</a></li></ul></div><div class=\"clear\" data-v-04b78e6e></div>", 2);

var _hoisted_11 = {
  id: "stage"
};
var _hoisted_12 = ["data-id"];
var _hoisted_13 = {
  "class": "inner-block box b1"
};
var _hoisted_14 = ["href"];
var _hoisted_15 = ["src"];

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_17 = {
  "class": "port-title"
};

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "port-corner-top"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_19 = ["href"];
var _hoisted_20 = {
  "class": "listbox-1"
};

var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Property Type:", -1
  /* HOISTED */
  );
});

var _hoisted_22 = ["textContent"];
var _hoisted_23 = {
  key: 0
};

var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Sale Type:", -1
  /* HOISTED */
  );
});

var _hoisted_25 = {
  href: "#"
};

var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Address:", -1
  /* HOISTED */
  );
});

var _hoisted_27 = {
  href: "#"
};

var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Year Built:", -1
  /* HOISTED */
  );
});

var _hoisted_29 = {
  href: "#"
};

var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Building Size (sq ft):", -1
  /* HOISTED */
  );
});

var _hoisted_31 = {
  href: "#"
};

var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Country:", -1
  /* HOISTED */
  );
});

var _hoisted_33 = {
  href: "#"
};

var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "City:", -1
  /* HOISTED */
  );
});

var _hoisted_35 = {
  href: "#"
};

var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "clear"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_37 = {
  key: 1,
  style: {
    "text-align": "center"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_LoadingComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LoadingComponent");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [!$setup.store.isLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" here put a spinner or whatever you want to indicate that a request is in progress "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LoadingComponent)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, _hoisted_4)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [$setup.store.posts ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [_hoisted_9, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.store.posts, function (post) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
      "class": "grid_6 p8",
      "data-id": 'id-' + post.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "page3-img1 fixed-img magnifier",
      href: 'http://127.0.0.1:8000/posts/' + post.slug
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: '/storage/' + post.image,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_15), _hoisted_16], 8
    /* PROPS */
    , _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: 'http://127.0.0.1:8000/posts/' + post.slug
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.title), 9
    /* TEXT, PROPS */
    , _hoisted_19)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.category.name)
    }, null, 8
    /* PROPS */
    , _hoisted_22)]), post.sale_type ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.sale_type.name), 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.address), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.year), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.size), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.country), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.city), 1
    /* TEXT */
    )])])])])], 8
    /* PROPS */
    , _hoisted_12)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )), _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    id: "loadMore",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.doGetMorePosts && $setup.doGetMorePosts.apply($setup, arguments);
    })
  }, "Load More")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_37, " 0oopsss. It seems like there is no posts "))])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/store/posts.js":
/*!*************************************!*\
  !*** ./resources/js/store/posts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePostStore": () => (/* binding */ usePostStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/store/api.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast */ "./resources/js/store/toast.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./resources/js/store/user.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ "./resources/js/store/auth.js");






var usePostStore = (0,pinia__WEBPACK_IMPORTED_MODULE_5__.defineStore)('post', {
  state: function state() {
    return {
      posts: [],
      total: 0,
      // общее количество загруженных постов
      per_page: 2,
      // количество постов на страницу
      page: 0,
      // текущая страница
      isCanMore: true,
      postLast: null,
      isLoaded: false,
      isUserPost: false,
      Categories: null,
      SaleTypes: null
    };
  },
  getters: {},
  actions: {
    GetCategories: function GetCategories() {
      var _this = this;

      var toast = (0,_toast__WEBPACK_IMPORTED_MODULE_1__.useToastStore)(); //get-categories

      _api__WEBPACK_IMPORTED_MODULE_0__.api.get("/get-categories").then(function (res) {
        if (res.token) {
          var AuthStore = (0,_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthStore)();
          AuthStore.rememberJwt(res.token);
          toast.info("Try again");
        }

        if (res.error) {
          toast.error(res.error);
        } else {
          if (res) {
            console.log('getData: ');
            console.log(res);
            _this.Categories = res;
            _this.isLoaded = true;
          }
        }
      });
    },
    GetSaleTypes: function GetSaleTypes() {
      var _this2 = this;

      var toast = (0,_toast__WEBPACK_IMPORTED_MODULE_1__.useToastStore)();
      console.log("check before");
      this.isLoaded = false; //get-sale-types

      _api__WEBPACK_IMPORTED_MODULE_0__.api.get("/get-sale-types").then(function (res) {
        if (res.token) {
          var AuthStore = (0,_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthStore)();
          AuthStore.rememberJwt(res.token);
          toast.info("Try again");
        }

        if (res.error) {
          toast.error(res.error);
        } else {
          if (res) {
            console.log('getData: ');
            console.log(res);
            _this2.SaleTypes = res;

            _this2.GetCategories();
          }
        }
      });
    },
    CreatePost: function CreatePost(title, body, price, address, size, year, country, city, number_categ, toBeConfirmed, number_sale, image) {
      var toast = (0,_toast__WEBPACK_IMPORTED_MODULE_1__.useToastStore)();
      var data = new FormData();

      if (title !== undefined && body !== undefined && price !== undefined && address !== undefined && size !== undefined && year !== undefined && country !== undefined && city !== undefined && number_categ !== undefined && number_sale !== undefined && image !== undefined && image !== null) {
        if (title !== '' && body !== '' && price !== '' && address !== '' && size !== '' && year !== '' && country !== '' && city !== '' && number_categ !== '' && number_sale !== '' && image !== '' && image !== null) {
          if (price > 0 && size > 1 && year > 1800) {
            if (toBeConfirmed) {
              if (toBeConfirmed === true) {
                data.append('toBeConfirmed', toBeConfirmed);
              }
            }

            data.append('title', title);
            data.append('body', body);
            data.append('price', price);
            data.append('address', address);
            data.append('size', size);
            data.append('year', year);
            data.append('country', country);
            data.append('city', city);
            data.append('category_id', number_categ);
            data.append('sale_type_id', number_sale);
            data.append('file', image);
            /*    console.log(title)
            console.log(body)
             console.log(size)
            console.log(address)
            console.log(price)
            console.log(number_categ)
            console.log(number_sale)*/

            _api__WEBPACK_IMPORTED_MODULE_0__.api.post('/create-post', data).then(function (res) {
              console.log(res); // toast.success( "Loaded" )

              if (res) {
                console.log(res);

                if (!res.error) {
                  toast.success("Post created");
                } else {
                  if (res.token) {
                    var AuthStore = (0,_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthStore)();
                    AuthStore.rememberJwt(res.token);
                    toast.info("Try again");
                  }

                  toast.error(res.error);
                }

                _router__WEBPACK_IMPORTED_MODULE_3__["default"].push('/my-profile');
              }
            });
          } else {
            toast.info("False data");
          }
        } else {
          toast.info("Everything required");
        }
      } else {
        toast.info("Everything required");
      }
    },
    RedactPost: function RedactPost(body, price, address, size, year, country, city, number_categ, toBeConfirmed, number_sale, image) {
      var toast = (0,_toast__WEBPACK_IMPORTED_MODULE_1__.useToastStore)();
      var data = new FormData();

      if (body !== undefined && price !== undefined && address !== undefined && size !== undefined && year !== undefined && country !== undefined && city !== undefined && number_categ !== undefined && number_sale !== undefined) {
        if (body !== '' && price !== '' && address !== '' && size !== '' && year !== '' && country !== '' && city !== '' && number_categ !== '' && number_sale !== '') {
          if (price > 0 && size > 1 && year > 1800) {
            if (toBeConfirmed) {
              if (toBeConfirmed === true) {
                data.append('toBeConfirmed', toBeConfirmed);
              }
            }

            data.append('body', body);
            data.append('price', price);
            data.append('address', address);
            data.append('size', size);
            data.append('year', year);
            data.append('country', country);
            data.append('city', city);
            data.append('category_id', number_categ);
            data.append('sale_type_id', number_sale);
            data.append('post_id', this.postLast.id);

            if (image) {
              data.append('file', image);
            }
            /*    console.log(title)
            console.log(body)
             console.log(size)
            console.log(address)
            console.log(price)
            console.log(number_categ)
            console.log(number_sale)*/


            _api__WEBPACK_IMPORTED_MODULE_0__.api.post('/UpdatePost', data).then(function (res) {
              console.log(res); // toast.success( "Loaded" )

              if (res) {
                console.log(res);

                if (!res.error) {
                  toast.success("Post updated");
                } else {
                  if (res.token) {
                    var AuthStore = (0,_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthStore)();
                    AuthStore.rememberJwt(res.token);
                    toast.info("Try again");
                  }

                  toast.error(res.error);
                }

                _router__WEBPACK_IMPORTED_MODULE_3__["default"].push('/my-profile');
              }
            });
          } else {
            toast.info("False data");
          }
        } else {
          toast.info("Everything required");
        }
      } else {
        toast.info("Everything required");
      }
    },
    getPostBySlug: function getPostBySlug(slug, isRedact) {
      var _this3 = this;

      this.isUserPost = false;
      this.isLoaded = false;
      var toast = (0,_toast__WEBPACK_IMPORTED_MODULE_1__.useToastStore)();
      var data = new FormData();
      data.append('slug', slug);
      _api__WEBPACK_IMPORTED_MODULE_0__.api.post('/get-post-slug', data).then(function (res) {
        console.log(res); // toast.success( "Loaded" )

        if (res.token) {
          var AuthStore = (0,_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthStore)();
          AuthStore.rememberJwt(res.token);
          toast.info("Try again");
        }

        if (res.error) {
          toast.error(res.error);
        } else {
          if (res) {
            _this3.postLast = res;
            _this3.isLoaded = true;
            var userStore = (0,_user__WEBPACK_IMPORTED_MODULE_2__.useUserStore)();

            if (isRedact) {
              if (isRedact === true) {
                if (_this3.postLast.author_id.id === userStore.user.id) {
                  _this3.isUserPost = true;
                } else {
                  _router__WEBPACK_IMPORTED_MODULE_3__["default"].push('/home');
                }
              }
            } else {
              if (_this3.postLast.author_id.id === userStore.user.id) {
                _this3.isUserPost = true;
              }
            }

            if (!_this3.postLast.image.includes("-medium.jpg") && !_this3.postLast.image.includes("-medium.jpeg") && !_this3.postLast.image.includes("-medium.png") && !_this3.postLast.image.includes("-medium.webp")) {
              _this3.postLast.image = _this3.postLast.image.replace(".jpg", "-medium.jpg");
              _this3.postLast.image = _this3.postLast.image.replace(".jpeg", "-medium.jpeg");
              _this3.postLast.image = _this3.postLast.image.replace(".png", "-medium.png");
              _this3.postLast.image = _this3.postLast.image.replace(".webp", "-medium.webp");
            }
          }
        }
      });
    },
    DeletePost: function DeletePost(id) {
      var toast = (0,_toast__WEBPACK_IMPORTED_MODULE_1__.useToastStore)();
      var data = new FormData();
      data.append('id', id);
      _api__WEBPACK_IMPORTED_MODULE_0__.api.post('/DeletePost', data).then(function (res) {
        console.log(res); // toast.success( "Loaded" )

        if (res.token) {
          var AuthStore = (0,_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthStore)();
          AuthStore.rememberJwt(res.token);
          toast.info("Try again");
        }

        if (res.error) {
          toast.error(res.error);
        } else {
          if (res) {
            _router__WEBPACK_IMPORTED_MODULE_3__["default"].push('/my-profile');
          }
        }
      });
    },
    // Получить посты
    getMorePosts: function getMorePosts() {
      var _this4 = this;

      console.log("Get post");

      if (this.page * this.per_page > this.total) {
        this.isCanMore = false;
        return;
      }

      this.page++;
      this.isLoaded = false;
      var url = '/offers/?page=' + this.page + '&per_page=' + this.per_page;
      console.log('get new posts: ' + url);
      _api__WEBPACK_IMPORTED_MODULE_0__.api.get(url).then(function (res) {
        if (res.token) {
          var AuthStore = (0,_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthStore)();
          AuthStore.rememberJwt(res.token);
          toast.info("Try again");
        }

        if (res.error) {
          toast.error(res.error);
        } else {
          if (res) {
            _this4.total = res.total;
            console.log('getData: ');
            console.log(res.data);
            _this4.posts = _this4.posts.concat(res.data);

            _this4.posts.forEach(function (value, index) {
              if (!value.image.includes("-medium.jpg") && !value.image.includes("-medium.jpeg") && !value.image.includes("-medium.png") && !value.image.includes("-medium.webp")) {
                value.image = value.image.replace(".jpg", "-medium.jpg");
                value.image = value.image.replace(".jpeg", "-medium.jpeg");
                value.image = value.image.replace(".png", "-medium.png");
                value.image = value.image.replace(".webp", "-medium.webp");
              }

              console.log(value);
              console.log(index);
            });

            _this4.isLoaded = true;
          }
        }
      });
    },
    getLatestPosts: function getLatestPosts() {}
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-18ca591f] {\n    position: fixed;\n    width: 500px;\n    height: 200px;\n    padding: 10px;\n    top: 50%;\n    left: 50%;\n    margin-top: -100px;  /* Negative half of height. */\n    margin-left: -250px;  /* Negative half of width. */\n}\n.preloader[data-v-18ca591f] {\n    position: relative;\n    width: 125px;\n    height: 125px;\n    margin: auto;\n    transform: scale(var(--scale));\n}\n.preloader > span[data-v-18ca591f] {\n    position: absolute;\n    background-color: transparent;\n    height: 22px;\n    width: 22px;\n    border-radius: 12px;\n    -webkit-animation-name: f_fadeG-18ca591f;\n            animation-name: f_fadeG-18ca591f;\n    -webkit-animation-duration: 1.2s;\n            animation-duration: 1.2s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-direction: normal;\n            animation-direction: normal;\n}\n.rot-1[data-v-18ca591f] {\n    left: 0;\n    top: 51px;\n    -webkit-animation-delay: 0.45s;\n            animation-delay: 0.45s;\n}\n.rot-2[data-v-18ca591f] {\n    left: 15px;\n    top: 15px;\n    -webkit-animation-delay: 0.6s;\n            animation-delay: 0.6s;\n}\n.rot-3[data-v-18ca591f] {\n    left: 51px;\n    top: 0;\n    -webkit-animation-delay: 0.75s;\n            animation-delay: 0.75s;\n}\n.rot-4[data-v-18ca591f] {\n    right: 15px;\n    top: 15px;\n    -webkit-animation-delay: 0.9s;\n            animation-delay: 0.9s;\n}\n.rot-5[data-v-18ca591f] {\n    right: 0;\n    top: 51px;\n    -webkit-animation-delay: 1.05s;\n            animation-delay: 1.05s;\n}\n.rot-6[data-v-18ca591f] {\n    right: 15px;\n    bottom: 15px;\n    -webkit-animation-delay: 1.2s;\n            animation-delay: 1.2s;\n}\n.rot-7[data-v-18ca591f] {\n    left: 51px;\n    bottom: 0;\n    -webkit-animation-delay: 1.35s;\n            animation-delay: 1.35s;\n}\n.rot-8[data-v-18ca591f] {\n    left: 15px;\n    bottom: 15px;\n    -webkit-animation-delay: 1.5s;\n            animation-delay: 1.5s;\n}\n@-webkit-keyframes f_fadeG-18ca591f {\n0% {\n        background-color: var(--color);\n}\n100% {\n        background-color: transparent;\n}\n}\n@keyframes f_fadeG-18ca591f {\n0% {\n        background-color: var(--color);\n}\n100% {\n        background-color: transparent;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#loadMore[data-v-04b78e6e] {\n    width: 200px;\n    color: #fff;\n    display: block;\n    text-align: center;\n    margin: 20px auto;\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    background-color: blue;\n    transition: .3s;\n}\n#loadMore[data-v-04b78e6e]:hover {\n    color: blue;\n    background-color: #fff;\n    border: 1px solid blue;\n    text-decoration: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingComponent_vue_vue_type_style_index_0_id_18ca591f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingComponent_vue_vue_type_style_index_0_id_18ca591f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingComponent_vue_vue_type_style_index_0_id_18ca591f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PostsPage_vue_vue_type_style_index_0_id_04b78e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PostsPage_vue_vue_type_style_index_0_id_04b78e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PostsPage_vue_vue_type_style_index_0_id_04b78e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Loading/LoadingComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Loading/LoadingComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingComponent_vue_vue_type_template_id_18ca591f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingComponent.vue?vue&type=template&id=18ca591f&scoped=true */ "./resources/js/components/Loading/LoadingComponent.vue?vue&type=template&id=18ca591f&scoped=true");
/* harmony import */ var _LoadingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingComponent.vue?vue&type=script&lang=js */ "./resources/js/components/Loading/LoadingComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _LoadingComponent_vue_vue_type_style_index_0_id_18ca591f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css */ "./resources/js/components/Loading/LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css");
/* harmony import */ var D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_LoadingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoadingComponent_vue_vue_type_template_id_18ca591f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-18ca591f"],['__file',"resources/js/components/Loading/LoadingComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/PostsPage.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/PostsPage.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostsPage_vue_vue_type_template_id_04b78e6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostsPage.vue?vue&type=template&id=04b78e6e&scoped=true */ "./resources/js/pages/PostsPage.vue?vue&type=template&id=04b78e6e&scoped=true");
/* harmony import */ var _PostsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostsPage.vue?vue&type=script&lang=js */ "./resources/js/pages/PostsPage.vue?vue&type=script&lang=js");
/* harmony import */ var _PostsPage_vue_vue_type_style_index_0_id_04b78e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css */ "./resources/js/pages/PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css");
/* harmony import */ var D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Programming_Projects_PhpStorm_MyRent_src_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PostsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PostsPage_vue_vue_type_template_id_04b78e6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-04b78e6e"],['__file',"resources/js/pages/PostsPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Loading/LoadingComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Loading/LoadingComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/PostsPage.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/pages/PostsPage.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PostsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PostsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PostsPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Loading/LoadingComponent.vue?vue&type=template&id=18ca591f&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Loading/LoadingComponent.vue?vue&type=template&id=18ca591f&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingComponent_vue_vue_type_template_id_18ca591f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingComponent_vue_vue_type_template_id_18ca591f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingComponent.vue?vue&type=template&id=18ca591f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=template&id=18ca591f&scoped=true");


/***/ }),

/***/ "./resources/js/pages/PostsPage.vue?vue&type=template&id=04b78e6e&scoped=true":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/PostsPage.vue?vue&type=template&id=04b78e6e&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PostsPage_vue_vue_type_template_id_04b78e6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PostsPage_vue_vue_type_template_id_04b78e6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PostsPage.vue?vue&type=template&id=04b78e6e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=template&id=04b78e6e&scoped=true");


/***/ }),

/***/ "./resources/js/components/Loading/LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Loading/LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingComponent_vue_vue_type_style_index_0_id_18ca591f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Loading/LoadingComponent.vue?vue&type=style&index=0&id=18ca591f&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/pages/PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PostsPage_vue_vue_type_style_index_0_id_04b78e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/PostsPage.vue?vue&type=style&index=0&id=04b78e6e&scoped=true&lang=css");


/***/ })

}]);