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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        description: \"\",\n        price: \"0\",\n        brand: \"\",\n        category: \"\"\n    }), createProduct1 = ref[0], setCreateProduct = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), createProducts = ref1[0], setCreateProducts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context), user = ref2.state.user, dispatch = ref2.dispatch;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (user === null) router.push(\"/login\");\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: \"Latest Product\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anna\\\\Desktop\\\\system\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, _this),\n            createProducts.map(function(createProduct) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: JSON.stringify(createProduct, null, 4)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anna\\\\Desktop\\\\system\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 6\n                    }, _this1)\n                }, void 0, false);\n            })\n        ]\n    }, void 0, true));\n};\n_s(Index, \"7MDjn0Qrag8rgIZKiKm66V0NYRk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBQ25CO0FBQ0c7OztBQUV2QyxHQUFLLENBQUNLLEtBQUssR0FBRyxRQUFRLEdBQUYsQ0FBQzs7O0lBQ3BCLEdBQUssQ0FBcUNMLEdBTXhDLEdBTndDQSwrQ0FBUSxDQUFDLENBQUM7UUFDbkRNLElBQUksRUFBRSxDQUFFO1FBQ1JDLFdBQVcsRUFBRSxDQUFFO1FBQ2ZDLEtBQUssRUFBRSxDQUFHO1FBQ1ZDLEtBQUssRUFBRSxDQUFFO1FBQ1RDLFFBQVEsRUFBRSxDQUFFO0lBQ2IsQ0FBQyxHQU5NQyxjQUFhLEdBQXNCWCxHQU14QyxLQU5vQlksZ0JBQWdCLEdBQUlaLEdBTXhDO0lBQ0YsR0FBSyxDQUF1Q0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFoRGEsY0FBYyxHQUF1QmIsSUFBWSxLQUFqQ2MsaUJBQWlCLEdBQUlkLElBQVk7SUFDeEQsR0FBSyxDQUdEQyxJQUFtQixHQUFuQkEsaURBQVUsQ0FBQ0UsNkNBQU8sR0FGWlksSUFBSSxHQUVWZCxJQUFtQixDQUZ0QmUsS0FBSyxDQUFJRCxJQUFJLEVBQ2JFLFFBQVEsR0FDTGhCLElBQW1CLENBRHRCZ0IsUUFBUTtJQUdUZixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2hCLEVBQUUsRUFBRWEsSUFBSSxLQUFLLElBQUksRUFBRUcsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBUTtJQUN4QyxDQUFDO0lBRUQsR0FBSyxDQUFDRCxNQUFNLEdBQUdkLHNEQUFTO0lBQ3hCLE1BQU07O3dGQUVIZ0IsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQWE7MEJBQUMsQ0FBYzs7Ozs7O1lBQ3pDUixjQUFjLENBQUNTLEdBQUcsQ0FBQ1gsUUFBUSxDQUFSQSxhQUFhOzhCQUNoQyxNQUNGOzBHQUNJWSxDQUFHO2tDQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2QsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7O0FBS2hELENBQUM7R0E5QktOLEtBQUs7O1FBa0JLRCxrREFBUzs7O0tBbEJuQkMsS0FBSztBQWdDWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHRjb25zdCBbY3JlYXRlUHJvZHVjdCwgc2V0Q3JlYXRlUHJvZHVjdF0gPSB1c2VTdGF0ZSh7XHJcblx0XHRuYW1lOiBcIlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiXCIsXHJcblx0XHRwcmljZTogXCIwXCIsXHJcblx0XHRicmFuZDogXCJcIixcclxuXHRcdGNhdGVnb3J5OiBcIlwiXHJcblx0fSk7XHJcblx0Y29uc3QgW2NyZWF0ZVByb2R1Y3RzLCBzZXRDcmVhdGVQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3Qge1xyXG5cdFx0c3RhdGU6IHsgdXNlciB9LFxyXG5cdFx0ZGlzcGF0Y2hcclxuXHR9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICh1c2VyID09PSBudWxsKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5MYXRlc3QgUHJvZHVjdDwvaDE+XHJcblx0XHRcdHtjcmVhdGVQcm9kdWN0cy5tYXAoY3JlYXRlUHJvZHVjdCA9PiAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdHsvKiA8aW1nIHNyYz17Y3JlYXRlUHJvZHVjdC5pbWFnZX0gLz4gKi99XHJcblx0XHRcdFx0XHQ8ZGl2PntKU09OLnN0cmluZ2lmeShjcmVhdGVQcm9kdWN0LCBudWxsLCA0KX08L2Rpdj5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KSl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJDb250ZXh0IiwidXNlUm91dGVyIiwiSW5kZXgiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImJyYW5kIiwiY2F0ZWdvcnkiLCJjcmVhdGVQcm9kdWN0Iiwic2V0Q3JlYXRlUHJvZHVjdCIsImNyZWF0ZVByb2R1Y3RzIiwic2V0Q3JlYXRlUHJvZHVjdHMiLCJ1c2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInJvdXRlciIsInB1c2giLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsImRpdiIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});