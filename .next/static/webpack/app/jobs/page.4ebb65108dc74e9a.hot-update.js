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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Jobs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"(app-pages-browser)/./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numeral */ \"(app-pages-browser)/./node_modules/numeral/numeral.js\");\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar relativeTime = __webpack_require__(/*! dayjs/plugin/relativeTime */ \"(app-pages-browser)/./node_modules/dayjs/plugin/relativeTime.js\");\ndayjs__WEBPACK_IMPORTED_MODULE_1___default().extend(relativeTime);\nconst JobItem = (param)=>{\n    let { item } = param;\n    const { title, location, remote, created_at, entry_price, end_price, company_name } = item;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid border rounded-xl bg-neutral-100 shadow cursor-pointer hover:bg-neutral-50 transition overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white p-4 grid gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"flex gap-2 items-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-12 h-12 bg-neutral-200 rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                                lineNumber: 11,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-[600]\",\n                                children: company_name\n                            }, void 0, false, {\n                                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                                lineNumber: 12,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-[600]\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: location\n                                    }, void 0, false, {\n                                        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                                        lineNumber: 17,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    \" |\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: numeral__WEBPACK_IMPORTED_MODULE_2___default()(entry_price).format(\"0a\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                                                lineNumber: 19,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"-\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                                                lineNumber: 20,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: numeral__WEBPACK_IMPORTED_MODULE_2___default()(end_price).format(\"0a\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                                                lineNumber: 21,\n                                                columnNumber: 13\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    \" |\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: remote ? \"Remote\" : \"Presential\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-neutral-500 px-4 py-2\",\n                children: [\n                    dayjs__WEBPACK_IMPORTED_MODULE_1___default()(item.created_at).fromNow(true),\n                    \" ago\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, undefined);\n};\n_c = JobItem;\nfunction Jobs() {\n    const jobs = [\n        {\n            title: \"Product Manager\",\n            created_at: \"2024-10-18T00:00:00\",\n            location: \"Bruxelles, Belgium\",\n            entry_price: 26000,\n            end_price: 28000,\n            remote: true,\n            company_name: \"Wesmart\"\n        },\n        {\n            title: \"Developer Python\",\n            created_at: \"2024-10-18T00:00:00\",\n            location: \"Bruxelles, Belgium\",\n            entry_price: 26000,\n            end_price: 28000,\n            remote: true,\n            company_name: \"Wesmart\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-3 gap-4\",\n            children: jobs.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JobItem, {\n                    item\n                }, index, false, {\n                    fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n            lineNumber: 52,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/guillaume/Desktop/GUILLAUME/DEV/codewithg.com/src/components/Jobs.tsx\",\n        lineNumber: 51,\n        columnNumber: 10\n    }, this);\n}\n_c1 = Jobs;\nvar _c, _c1;\n$RefreshReg$(_c, \"JobItem\");\n$RefreshReg$(_c1, \"Jobs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0pvYnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDSTtBQUM5QixJQUFJRSxlQUFlQyxtQkFBT0EsQ0FBQyxrR0FBMkI7QUFDdERILG1EQUFZLENBQUNFO0FBRWIsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLElBQUksRUFBTztJQUM1QixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUFHUDtJQUN0RixxQkFBTyw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ3BCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFPRCxXQUFVOzswQ0FDaEIsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7MENBQ2YsOERBQUNFO2dDQUFFRixXQUFVOzBDQUFjRjs7Ozs7Ozs7Ozs7O2tDQUU3Qiw4REFBQ0M7OzBDQUNDLDhEQUFDRztnQ0FBRUYsV0FBVTswQ0FBY1I7Ozs7OzswQ0FDM0IsOERBQUNPO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0U7a0RBQUdUOzs7Ozs7b0NBQWE7a0RBQ2pCLDhEQUFDTTt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNFOzBEQUFHaEIsOENBQU9BLENBQUNVLGFBQWFPLE1BQU0sQ0FBQzs7Ozs7OzBEQUNoQyw4REFBQ0M7MERBQUs7Ozs7OzswREFDTiw4REFBQ0Y7MERBQUdoQiw4Q0FBT0EsQ0FBQ1csV0FBV00sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7b0NBQzFCO2tEQUNOLDhEQUFDRDtrREFBR1IsU0FBUyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTlCLDhEQUFDUTtnQkFBRUYsV0FBVTs7b0JBQThCZiw0Q0FBS0EsQ0FBQ00sS0FBS0ksVUFBVSxFQUFFVSxPQUFPLENBQUM7b0JBQU07Ozs7Ozs7Ozs7Ozs7QUFFcEY7S0F2Qk1mO0FBeUJTLFNBQVNnQjtJQUN0QixNQUFNQyxPQUFPO1FBQ1g7WUFDRWYsT0FBTztZQUNQRyxZQUFZO1lBQ1pGLFVBQVU7WUFDVkcsYUFBYTtZQUNiQyxXQUFXO1lBQ1hILFFBQVE7WUFDUkksY0FBYztRQUNoQjtRQUFHO1lBQ0ROLE9BQU87WUFDUEcsWUFBWTtZQUNaRixVQUFVO1lBQ1ZHLGFBQWE7WUFDYkMsV0FBVztZQUNYSCxRQUFRO1lBQ1JJLGNBQWM7UUFDaEI7S0FDRDtJQUNELHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNwQiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWk8sS0FBS0MsR0FBRyxDQUFDLENBQUNqQixNQUFNa0Isc0JBQ2YsOERBQUNuQjtvQkFBMEJDO21CQUFia0I7Ozs7Ozs7Ozs7Ozs7OztBQUl0QjtNQTNCd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0pvYnMudHN4P2YxMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IG51bWVyYWwgZnJvbSBcIm51bWVyYWxcIjtcbnZhciByZWxhdGl2ZVRpbWUgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiKTtcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWUpXG5cbmNvbnN0IEpvYkl0ZW0gPSAoeyBpdGVtIH06IGFueSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBsb2NhdGlvbiwgcmVtb3RlLCBjcmVhdGVkX2F0LCBlbnRyeV9wcmljZSwgZW5kX3ByaWNlLCBjb21wYW55X25hbWUgfSA9IGl0ZW07XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgYm9yZGVyIHJvdW5kZWQteGwgYmctbmV1dHJhbC0xMDAgc2hhZG93IGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLW5ldXRyYWwtNTAgdHJhbnNpdGlvbiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBncmlkIGdhcC0yXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiBiZy1uZXV0cmFsLTIwMCByb3VuZGVkLWxnXCIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1bNjAwXVwiPntjb21wYW55X25hbWV9PC9wPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LVs2MDBdXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgPHA+e2xvY2F0aW9ufTwvcD4gfFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgPHA+e251bWVyYWwoZW50cnlfcHJpY2UpLmZvcm1hdCgnMGEnKX08L3A+XG4gICAgICAgICAgICA8c3Bhbj4tPC9zcGFuPlxuICAgICAgICAgICAgPHA+e251bWVyYWwoZW5kX3ByaWNlKS5mb3JtYXQoJzBhJyl9PC9wPlxuICAgICAgICAgIDwvZGl2PiB8XG4gICAgICAgICAgPHA+e3JlbW90ZSA/ICdSZW1vdGUnIDogJ1ByZXNlbnRpYWwnfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNTAwIHB4LTQgcHktMlwiPntkYXlqcyhpdGVtLmNyZWF0ZWRfYXQpLmZyb21Ob3codHJ1ZSl9IGFnbzwvcD5cbiAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvYnMoKSB7XG4gIGNvbnN0IGpvYnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiUHJvZHVjdCBNYW5hZ2VyXCIsXG4gICAgICBjcmVhdGVkX2F0OiBcIjIwMjQtMTAtMThUMDA6MDA6MDBcIixcbiAgICAgIGxvY2F0aW9uOiBcIkJydXhlbGxlcywgQmVsZ2l1bVwiLFxuICAgICAgZW50cnlfcHJpY2U6IDI2MDAwLFxuICAgICAgZW5kX3ByaWNlOiAyODAwMCxcbiAgICAgIHJlbW90ZTogdHJ1ZSxcbiAgICAgIGNvbXBhbnlfbmFtZTogXCJXZXNtYXJ0XCJcbiAgICB9LCB7XG4gICAgICB0aXRsZTogXCJEZXZlbG9wZXIgUHl0aG9uXCIsXG4gICAgICBjcmVhdGVkX2F0OiBcIjIwMjQtMTAtMThUMDA6MDA6MDBcIixcbiAgICAgIGxvY2F0aW9uOiBcIkJydXhlbGxlcywgQmVsZ2l1bVwiLFxuICAgICAgZW50cnlfcHJpY2U6IDI2MDAwLFxuICAgICAgZW5kX3ByaWNlOiAyODAwMCxcbiAgICAgIHJlbW90ZTogdHJ1ZSxcbiAgICAgIGNvbXBhbnlfbmFtZTogXCJXZXNtYXJ0XCJcbiAgICB9XG4gIF1cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgIHtqb2JzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPEpvYkl0ZW0ga2V5PXtpbmRleH0gey4uLnsgaXRlbSB9fSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2Pjtcbn0iXSwibmFtZXMiOlsiZGF5anMiLCJudW1lcmFsIiwicmVsYXRpdmVUaW1lIiwicmVxdWlyZSIsImV4dGVuZCIsIkpvYkl0ZW0iLCJpdGVtIiwidGl0bGUiLCJsb2NhdGlvbiIsInJlbW90ZSIsImNyZWF0ZWRfYXQiLCJlbnRyeV9wcmljZSIsImVuZF9wcmljZSIsImNvbXBhbnlfbmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsInAiLCJmb3JtYXQiLCJzcGFuIiwiZnJvbU5vdyIsIkpvYnMiLCJqb2JzIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Jobs.tsx\n"));

/***/ })

});