"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/jobs/page",{

/***/ "(app-pages-browser)/./src/components/Jobs.tsx":
/*!*********************************!*\
  !*** ./src/components/Jobs.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Jobs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"(app-pages-browser)/./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar relativeTime = __webpack_require__(/*! dayjs/plugin/relativeTime */ \"(app-pages-browser)/./node_modules/dayjs/plugin/relativeTime.js\");\ndayjs__WEBPACK_IMPORTED_MODULE_1___default().extend(relativeTime);\nconst JobItem = (param)=>{\n    let { item } = param;\n    const { title, location, remote, created_at } = item;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-start gap-4 border rounded-lg px-4 py-3 shadow w-90\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-12 h-12 bg-purple-100 rounded\"\n            }, void 0, false, {\n                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-[600]\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: location\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: remote ? \"Remote\" : \"Presential\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            dayjs__WEBPACK_IMPORTED_MODULE_1___default()(item.created_at).fromNow(true),\n                            \" ago\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Apply now\"\n            }, void 0, false, {\n                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, undefined);\n};\n_c = JobItem;\nfunction Jobs() {\n    const jobs = [\n        {\n            title: \"Product Manager\",\n            created_at: \"2024-10-18T00:00:00\",\n            location: \"Bruxelles, Belgium\",\n            remote: true\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid gap-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid gap-1\",\n            children: jobs.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JobItem, {\n                    item\n                }, index, false, {\n                    fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, this);\n}\n_c1 = Jobs;\nvar _c, _c1;\n$RefreshReg$(_c, \"JobItem\");\n$RefreshReg$(_c1, \"Jobs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0pvYnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQzFCLElBQUlDLGVBQWVDLG1CQUFPQSxDQUFDLGtHQUEyQjtBQUN0REYsbURBQVksQ0FBQ0M7QUFHYixNQUFNRyxVQUFVO1FBQUMsRUFBRUMsSUFBSSxFQUFPO0lBQzVCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdKO0lBQ2hELHFCQUFPLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDcEIsOERBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7MEJBR2YsOERBQUNEOztrQ0FDQyw4REFBQ0U7a0NBQ0MsNEVBQUNDOzRCQUFFRixXQUFVO3NDQUFjTDs7Ozs7Ozs7Ozs7a0NBRTdCLDhEQUFDTztrQ0FBR047Ozs7OztrQ0FDSiw4REFBQ007a0NBQUdMLFNBQVMsV0FBVzs7Ozs7O2tDQUN4Qiw4REFBQ0s7OzRCQUFHYiw0Q0FBS0EsQ0FBQ0ssS0FBS0ksVUFBVSxFQUFFSyxPQUFPLENBQUM7NEJBQU07Ozs7Ozs7Ozs7Ozs7MEJBRTNDLDhEQUFDQzswQkFBTzs7Ozs7Ozs7Ozs7O0FBRVo7S0FoQk1YO0FBa0JTLFNBQVNZO0lBQ3RCLE1BQU1DLE9BQU87UUFDWDtZQUNFWCxPQUFPO1lBQ1BHLFlBQVk7WUFDWkYsVUFBVTtZQUNWQyxRQUFRO1FBQ1Y7S0FDRDtJQUNELHFCQUFPLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNwQiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWk0sS0FBS0MsR0FBRyxDQUFDLENBQUNiLE1BQU1jLHNCQUNmLDhEQUFDZjtvQkFBMEJDO21CQUFiYzs7Ozs7Ozs7Ozs7Ozs7O0FBSXRCO01BaEJ3QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSm9icy50c3g/ZjEzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG52YXIgcmVsYXRpdmVUaW1lID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIik7XG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKVxuXG5cbmNvbnN0IEpvYkl0ZW0gPSAoeyBpdGVtIH06IGFueSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBsb2NhdGlvbiwgcmVtb3RlLCBjcmVhdGVkX2F0IH0gPSBpdGVtO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00IGJvcmRlciByb3VuZGVkLWxnIHB4LTQgcHktMyBzaGFkb3cgdy05MFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIGJnLXB1cnBsZS0xMDAgcm91bmRlZFwiPlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtWzYwMF1cIj57dGl0bGV9PC9wPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8cD57bG9jYXRpb259PC9wPlxuICAgICAgPHA+e3JlbW90ZSA/ICdSZW1vdGUnIDogJ1ByZXNlbnRpYWwnfTwvcD5cbiAgICAgIDxwPntkYXlqcyhpdGVtLmNyZWF0ZWRfYXQpLmZyb21Ob3codHJ1ZSl9IGFnbzwvcD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uPkFwcGx5IG5vdzwvYnV0dG9uPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9icygpIHtcbiAgY29uc3Qgam9icyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJQcm9kdWN0IE1hbmFnZXJcIixcbiAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAyNC0xMC0xOFQwMDowMDowMFwiLFxuICAgICAgbG9jYXRpb246IFwiQnJ1eGVsbGVzLCBCZWxnaXVtXCIsXG4gICAgICByZW1vdGU6IHRydWVcbiAgICB9XG4gIF1cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMVwiPlxuICAgICAge2pvYnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8Sm9iSXRlbSBrZXk9e2luZGV4fSB7Li4ueyBpdGVtIH19IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xufSJdLCJuYW1lcyI6WyJkYXlqcyIsInJlbGF0aXZlVGltZSIsInJlcXVpcmUiLCJleHRlbmQiLCJKb2JJdGVtIiwiaXRlbSIsInRpdGxlIiwibG9jYXRpb24iLCJyZW1vdGUiLCJjcmVhdGVkX2F0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwicCIsImZyb21Ob3ciLCJidXR0b24iLCJKb2JzIiwiam9icyIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Jobs.tsx\n"));

/***/ })

});