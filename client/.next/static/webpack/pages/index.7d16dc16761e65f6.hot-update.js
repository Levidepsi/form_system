"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: [],\n        description: \"\",\n        price: \"0\",\n        brand: \"\",\n        category: \"\"\n    }), createProduct = ref[0], setCreateProduct = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), createProducts = ref1[0], setCreateProducts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context), _state = ref2.state, user = _state.user, product = _state.product, dispatch = ref2.dispatch;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (user === null) router.push(\"/login\");\n        if (product === null) router.push(\"/product/create\");\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: product && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: product && product.name\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\anna\\\\Desktop\\\\system\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 16\n        }, _this)\n    }, void 0, false));\n};\n_s(Index, \"pO3zDXYb9M5aHte3ata0/dguxcE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBQ25CO0FBQ0c7OztBQUV2QyxHQUFLLENBQUNLLEtBQUssR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDcEIsR0FBSyxDQUFxQ0wsR0FPeEMsR0FQd0NBLCtDQUFRLENBQUMsQ0FBQztRQUNuRE0sSUFBSSxFQUFFLENBQUU7UUFDUkMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNUQyxXQUFXLEVBQUUsQ0FBRTtRQUNmQyxLQUFLLEVBQUUsQ0FBRztRQUNWQyxLQUFLLEVBQUUsQ0FBRTtRQUNUQyxRQUFRLEVBQUUsQ0FBRTtJQUNiLENBQUMsR0FQTUMsYUFBYSxHQUFzQlosR0FPeEMsS0FQb0JhLGdCQUFnQixHQUFJYixHQU94QztJQUNGLEdBQUssQ0FBdUNBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBaERjLGNBQWMsR0FBdUJkLElBQVksS0FBakNlLGlCQUFpQixHQUFJZixJQUFZO0lBQ3hELEdBQUssQ0FHREMsSUFBbUIsR0FBbkJBLGlEQUFVLENBQUNFLDZDQUFPLFlBQWxCRixJQUFtQixDQUZ0QmUsS0FBSyxFQUFJQyxJQUFJLFVBQUpBLElBQUksRUFBRUMsT0FBTyxVQUFQQSxPQUFPLEVBQ3RCQyxRQUFRLEdBQ0xsQixJQUFtQixDQUR0QmtCLFFBQVE7SUFHVGpCLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDaEIsRUFBRSxFQUFFZSxJQUFJLEtBQUssSUFBSSxFQUFFRyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFRO1FBQ3ZDLEVBQUUsRUFBRUgsT0FBTyxLQUFLLElBQUksRUFBRUUsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBaUI7SUFDcEQsQ0FBQztJQUVELEdBQUssQ0FBQ0QsTUFBTSxHQUFHaEIsc0RBQVM7SUFDeEIsTUFBTTtrQkFJSGMsT0FBTyxnRkFBS0ksQ0FBRTtzQkFBRUosT0FBTyxJQUFJQSxPQUFPLENBQUNaLElBQUk7Ozs7Ozs7QUFHM0MsQ0FBQztHQTVCS0QsS0FBSzs7UUFvQktELGtEQUFTOzs7S0FwQm5CQyxLQUFLO0FBOEJYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtjcmVhdGVQcm9kdWN0LCBzZXRDcmVhdGVQcm9kdWN0XSA9IHVzZVN0YXRlKHtcclxuXHRcdG5hbWU6IFwiXCIsXHJcblx0XHRpbWFnZTogW10sXHJcblx0XHRkZXNjcmlwdGlvbjogXCJcIixcclxuXHRcdHByaWNlOiBcIjBcIixcclxuXHRcdGJyYW5kOiBcIlwiLFxyXG5cdFx0Y2F0ZWdvcnk6IFwiXCJcclxuXHR9KTtcclxuXHRjb25zdCBbY3JlYXRlUHJvZHVjdHMsIHNldENyZWF0ZVByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCB7XHJcblx0XHRzdGF0ZTogeyB1c2VyLCBwcm9kdWN0IH0sXHJcblx0XHRkaXNwYXRjaFxyXG5cdH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKHVzZXIgPT09IG51bGwpIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG5cdFx0aWYgKHByb2R1Y3QgPT09IG51bGwpIHJvdXRlci5wdXNoKFwiL3Byb2R1Y3QvY3JlYXRlXCIpO1xyXG5cdH0pO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0ey8qIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyJz48L2gxPiAqL31cclxuXHJcblx0XHRcdHtwcm9kdWN0ICYmIDxoMT57cHJvZHVjdCAmJiBwcm9kdWN0Lm5hbWV9PC9oMT59XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJDb250ZXh0IiwidXNlUm91dGVyIiwiSW5kZXgiLCJuYW1lIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiYnJhbmQiLCJjYXRlZ29yeSIsImNyZWF0ZVByb2R1Y3QiLCJzZXRDcmVhdGVQcm9kdWN0IiwiY3JlYXRlUHJvZHVjdHMiLCJzZXRDcmVhdGVQcm9kdWN0cyIsInN0YXRlIiwidXNlciIsInByb2R1Y3QiLCJkaXNwYXRjaCIsInJvdXRlciIsInB1c2giLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});