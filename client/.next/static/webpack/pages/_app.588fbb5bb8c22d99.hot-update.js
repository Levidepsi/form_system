"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Provider\": function() { return /* binding */ Provider; },\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar initialState = {\n    user: null,\n    product: null\n};\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar rootReducer = function(state, action) {\n    switch(action.type){\n        case \"LOGIN\":\n            return _objectSpread({}, state, {\n                user: action.payload\n            });\n        case \"LOGOUT\":\n            return _objectSpread({}, state, {\n                user: null\n            });\n        default:\n            return state;\n    }\n};\nvar Provider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, initialState), state = ref[0], dispatch = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch({\n            type: \"LOGIN\",\n            payload: JSON.parse(window.localStorage.getItem(\"user\"))\n        });\n    }, []);\n    axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function(response) {\n        return response;\n    }, function(error1) {\n        var res = error1.response;\n        if (res.status === 401 && res.config && !res.config_isRetryRequest) {\n            return new Promise(function(resolve, reject) {\n                axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:5000/api/logout\").then(function(data) {\n                    console.log(\"Logout\");\n                    dispatch({\n                        type: \"LOGOUT\"\n                    });\n                    window, localStorage.removeItem(\"user\");\n                    router.push(\"/login\");\n                }).catch(function(error) {\n                    reject(error);\n                    console.log(error);\n                });\n            });\n        }\n        return Promise.reject(error1);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            state: state,\n            dispatch: dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anna\\\\Desktop\\\\system\\\\client\\\\context\\\\index.js\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, _this));\n};\n_s(Provider, \"VZb7FZted5FvRl5JEcU9+OfDRHc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Provider;\n\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFROzs7Ozs7QUFFekQsQ0FBQztHQXhDS0QsUUFBUTs7UUFHRVYsa0RBQVM7OztLQUhuQlUsUUFBUTtBQTBDZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IHVzZXI6IG51bGwsIHByb2R1Y3Q6IG51bGwgfTtcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBcIkxPR0lOXCI6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuXHRcdGNhc2UgXCJMT0dPVVRcIjpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogXCJMT0dJTlwiLFxyXG5cdFx0XHRwYXlsb2FkOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpXHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcblx0XHRmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHR9LFxyXG5cdFx0ZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0bGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlO1xyXG5cdFx0XHRpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWdfaXNSZXRyeVJlcXVlc3QpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdFx0LmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbG9nb3V0XCIpXHJcblx0XHRcdFx0XHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiTG9nb3V0XCIpO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogXCJMT0dPVVRcIiB9KTtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3csIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0LmNhdGNoKGVycm9yID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUHJvdmlkZXIsIENvbnRleHQgfTtcclxuIl0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwicHJvZHVjdCIsIkNvbnRleHQiLCJyb290UmVkdWNlciIsImFjdGlvbiIsInN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsImNvbmZpZ19pc1JldHJ5UmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlSXRlbSIsInB1c2giLCJjYXRjaCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ })

});