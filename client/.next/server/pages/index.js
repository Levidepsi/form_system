"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Provider\": () => (/* binding */ Provider),\n/* harmony export */   \"Context\": () => (/* binding */ Context)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst initialState = {\n    user: null,\n    product: []\n};\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst rootReducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\nconst Provider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, initialState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: \"LOGIN\",\n            payload: JSON.parse(window.localStorage.getItem(\"user\"))\n        });\n    }, []);\n    axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function(response) {\n        return response;\n    }, function(error1) {\n        let res = error1.response;\n        if (res.status === 401 && res.config && !res.config_isRetryRequest) {\n            return new Promise((resolve, reject)=>{\n                axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:5000/api/logout\").then((data)=>{\n                    console.log(\"Logout\");\n                    dispatch({\n                        type: \"LOGOUT\"\n                    });\n                    window, localStorage.removeItem(\"user\");\n                    router.push(\"/login\");\n                }).catch((error)=>{\n                    reject(error);\n                    console.log(error);\n                });\n            });\n        }\n        return Promise.reject(error1);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anna\\\\Desktop\\\\system\\\\client\\\\context\\\\index.js\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, undefined));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ25DO0FBQ2M7QUFFdkMsS0FBSyxDQUFDSyxZQUFZLEdBQUcsQ0FBQztJQUFDQyxJQUFJLEVBQUUsSUFBSTtJQUFFQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQUMsQ0FBQztBQUVoRCxLQUFLLENBQUNDLE9BQU8saUJBQUdQLG9EQUFhO0FBRTdCLEtBQUssQ0FBQ1EsV0FBVyxJQUFJQyxLQUFLLEVBQUVDLE1BQU0sR0FBSyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2xCLElBQUksQ0FBQyxDQUFPO1lBQ1gsTUFBTSxDQUFDLENBQUM7bUJBQUlGLEtBQUs7Z0JBQUVKLElBQUksRUFBRUssTUFBTSxDQUFDRSxPQUFPO1lBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsQ0FBUTtZQUNaLE1BQU0sQ0FBQyxDQUFDO21CQUFJSCxLQUFLO2dCQUFFSixJQUFJLEVBQUUsSUFBSTtZQUFDLENBQUM7O1lBRy9CLE1BQU0sQ0FBQ0ksS0FBSzs7QUFFZixDQUFDO0FBRUQsS0FBSyxDQUFDSSxRQUFRLElBQUksQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDbkMsS0FBSyxNQUFFTCxLQUFLLE1BQUVNLFFBQVEsTUFBSWhCLGlEQUFVLENBQUNTLFdBQVcsRUFBRUosWUFBWTtJQUU5RCxLQUFLLENBQUNZLE1BQU0sR0FBR2Isc0RBQVM7SUFFeEJGLGdEQUFTLEtBQU8sQ0FBQztRQUNoQmMsUUFBUSxDQUFDLENBQUM7WUFDVEosSUFBSSxFQUFFLENBQU87WUFDYkMsT0FBTyxFQUFFSyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNO1FBQ3ZELENBQUM7SUFDRixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUxuQixzRUFBK0IsQ0FDOUIsUUFBUSxDQUFDcUIsUUFBUSxFQUFFLENBQUM7UUFDbkIsTUFBTSxDQUFDQSxRQUFRO0lBQ2hCLENBQUMsRUFDRCxRQUFRLENBQUNFLE1BQUssRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHRCxNQUFLLENBQUNGLFFBQVE7UUFDeEIsRUFBRSxFQUFFRyxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFHLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLRixHQUFHLENBQUNHLHFCQUFxQixFQUFFLENBQUM7WUFDcEUsTUFBTSxDQUFDLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sR0FBSyxDQUFDO2dCQUN4QzlCLGdEQUNLLENBQUMsQ0FBa0MsbUNBQ3RDZ0MsSUFBSSxFQUFDQyxJQUFJLEdBQUksQ0FBQztvQkFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUTtvQkFDcEJ0QixRQUFRLENBQUMsQ0FBQzt3QkFBQ0osSUFBSSxFQUFFLENBQVE7b0JBQUMsQ0FBQztvQkFDM0JRLE1BQU0sRUFBRUMsWUFBWSxDQUFDa0IsVUFBVSxDQUFDLENBQU07b0JBQ3RDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDLENBQVE7Z0JBQ3JCLENBQUMsRUFDQUMsS0FBSyxFQUFDZixLQUFLLEdBQUksQ0FBQztvQkFDaEJPLE1BQU0sQ0FBQ1AsS0FBSztvQkFDWlcsT0FBTyxDQUFDQyxHQUFHLENBQUNaLEtBQUs7Z0JBQ2xCLENBQUM7WUFDSCxDQUFDO1FBQ0YsQ0FBQztRQUNELE1BQU0sQ0FBQ0ssT0FBTyxDQUFDRSxNQUFNLENBQUNQLE1BQUs7SUFDNUIsQ0FBQztJQUVGLE1BQU0sNkVBQ0psQixPQUFPLENBQUNNLFFBQVE7UUFBQzRCLEtBQUssRUFBRSxDQUFDO1lBQUNoQyxLQUFLO1lBQUVNLFFBQVE7UUFBQyxDQUFDO2tCQUFHRCxRQUFROzs7Ozs7QUFFekQsQ0FBQztBQUU0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdXNlcjogbnVsbCwgcHJvZHVjdDogW10gfTtcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBcIkxPR0lOXCI6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuXHRcdGNhc2UgXCJMT0dPVVRcIjpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogXCJMT0dJTlwiLFxyXG5cdFx0XHRwYXlsb2FkOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpXHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcblx0XHRmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHR9LFxyXG5cdFx0ZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0bGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlO1xyXG5cdFx0XHRpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWdfaXNSZXRyeVJlcXVlc3QpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdFx0LmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbG9nb3V0XCIpXHJcblx0XHRcdFx0XHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiTG9nb3V0XCIpO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogXCJMT0dPVVRcIiB9KTtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3csIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0LmNhdGNoKGVycm9yID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUHJvdmlkZXIsIENvbnRleHQgfTtcclxuIl0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwicHJvZHVjdCIsIkNvbnRleHQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsImNvbmZpZ19pc1JldHJ5UmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlSXRlbSIsInB1c2giLCJjYXRjaCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Index = ()=>{\n    const { 0: createProduct , 1: setCreateProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: [],\n        description: \"\",\n        price: \"0\",\n        brand: \"\",\n        category: \"\"\n    });\n    const { 0: createProducts , 1: setCreateProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { state: { user , product  } , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user === null) router.push(\"/login\");\n        if (product === null) router.push(\"/product/create\");\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: \"Latest Product\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anna\\\\Desktop\\\\system\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, undefined),\n            product && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: product && product.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anna\\\\Desktop\\\\system\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 16\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDbkI7QUFDRztBQUV2QyxLQUFLLENBQUNLLEtBQUssT0FBUyxDQUFDO0lBQ3BCLEtBQUssTUFBRUMsYUFBYSxNQUFFQyxnQkFBZ0IsTUFBSVAsK0NBQVEsQ0FBQyxDQUFDO1FBQ25EUSxJQUFJLEVBQUUsQ0FBRTtRQUNSQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ1RDLFdBQVcsRUFBRSxDQUFFO1FBQ2ZDLEtBQUssRUFBRSxDQUFHO1FBQ1ZDLEtBQUssRUFBRSxDQUFFO1FBQ1RDLFFBQVEsRUFBRSxDQUFFO0lBQ2IsQ0FBQztJQUNELEtBQUssTUFBRUMsY0FBYyxNQUFFQyxpQkFBaUIsTUFBSWYsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkQsS0FBSyxDQUFDLENBQUMsQ0FDTmdCLEtBQUssRUFBRSxDQUFDLENBQUNDLElBQUksR0FBRUMsT0FBTyxFQUFDLENBQUMsR0FDeEJDLFFBQVEsRUFDVCxDQUFDLEdBQUdsQixpREFBVSxDQUFDRSw2Q0FBTztJQUV0QkQsZ0RBQVMsS0FBTyxDQUFDO1FBQ2hCLEVBQUUsRUFBRWUsSUFBSSxLQUFLLElBQUksRUFBRUcsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBUTtRQUN2QyxFQUFFLEVBQUVILE9BQU8sS0FBSyxJQUFJLEVBQUVFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQWlCO0lBQ3BELENBQUM7SUFFRCxLQUFLLENBQUNELE1BQU0sR0FBR2hCLHNEQUFTO0lBQ3hCLE1BQU07O3dGQUVIa0IsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQWE7MEJBQUMsQ0FBYzs7Ozs7O1lBRXpDTCxPQUFPLGdGQUFLSSxDQUFFOzBCQUFFSixPQUFPLElBQUlBLE9BQU8sQ0FBQ1YsSUFBSTs7Ozs7Ozs7QUFHM0MsQ0FBQztBQUVELGlFQUFlSCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblx0Y29uc3QgW2NyZWF0ZVByb2R1Y3QsIHNldENyZWF0ZVByb2R1Y3RdID0gdXNlU3RhdGUoe1xyXG5cdFx0bmFtZTogXCJcIixcclxuXHRcdGltYWdlOiBbXSxcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlwiLFxyXG5cdFx0cHJpY2U6IFwiMFwiLFxyXG5cdFx0YnJhbmQ6IFwiXCIsXHJcblx0XHRjYXRlZ29yeTogXCJcIlxyXG5cdH0pO1xyXG5cdGNvbnN0IFtjcmVhdGVQcm9kdWN0cywgc2V0Q3JlYXRlUHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IHtcclxuXHRcdHN0YXRlOiB7IHVzZXIsIHByb2R1Y3QgfSxcclxuXHRcdGRpc3BhdGNoXHJcblx0fSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAodXNlciA9PT0gbnVsbCkgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcblx0XHRpZiAocHJvZHVjdCA9PT0gbnVsbCkgcm91dGVyLnB1c2goXCIvcHJvZHVjdC9jcmVhdGVcIik7XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+TGF0ZXN0IFByb2R1Y3Q8L2gxPlxyXG5cclxuXHRcdFx0e3Byb2R1Y3QgJiYgPGgxPntwcm9kdWN0ICYmIHByb2R1Y3QubmFtZX08L2gxPn1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJJbmRleCIsImNyZWF0ZVByb2R1Y3QiLCJzZXRDcmVhdGVQcm9kdWN0IiwibmFtZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImJyYW5kIiwiY2F0ZWdvcnkiLCJjcmVhdGVQcm9kdWN0cyIsInNldENyZWF0ZVByb2R1Y3RzIiwic3RhdGUiLCJ1c2VyIiwicHJvZHVjdCIsImRpc3BhdGNoIiwicm91dGVyIiwicHVzaCIsImgxIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();