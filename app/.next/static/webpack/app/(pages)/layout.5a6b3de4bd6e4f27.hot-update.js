"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/layout",{

/***/ "(app-pages-browser)/./app/(pages)/_components/Navbar/Navbar.jsx":
/*!***************************************************!*\
  !*** ./app/(pages)/_components/Navbar/Navbar.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_RxCross2_RxHamburgerMenu_react_icons_rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=RxCross2,RxHamburgerMenu!=!react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.esm.js\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.scss */ \"(app-pages-browser)/./app/(pages)/_components/Navbar/Navbar.module.scss\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/useToggle */ \"(app-pages-browser)/./app/(pages)/_hooks/useToggle.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Navbar(param) {\n    let { navLinks } = param;\n    _s();\n    const [active, toggleActive, _, setInactive] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().relative_wrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"./index\",\n                    children: \"LOGO IMG\"\n                }, void 0, false, {\n                    fileName: \"/Users/mattg/Documents/GitHub/Next.js-App-Router-Starter/app/(pages)/_components/Navbar/Navbar.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().nav_container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().links), \" \").concat(active ? (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : null),\n                            children: navLinks.map((link)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: link.slug,\n                                    onClick: setInactive,\n                                    children: link.name\n                                }, link.slug, false, {\n                                    fileName: \"/Users/mattg/Documents/GitHub/Next.js-App-Router-Starter/app/(pages)/_components/Navbar/Navbar.jsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/mattg/Documents/GitHub/Next.js-App-Router-Starter/app/(pages)/_components/Navbar/Navbar.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menu),\n                            onClick: toggleActive,\n                            children: active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RxCross2_RxHamburgerMenu_react_icons_rx__WEBPACK_IMPORTED_MODULE_4__.RxCross2, {}, void 0, false, {\n                                fileName: \"/Users/mattg/Documents/GitHub/Next.js-App-Router-Starter/app/(pages)/_components/Navbar/Navbar.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 23\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RxCross2_RxHamburgerMenu_react_icons_rx__WEBPACK_IMPORTED_MODULE_4__.RxHamburgerMenu, {}, void 0, false, {\n                                fileName: \"/Users/mattg/Documents/GitHub/Next.js-App-Router-Starter/app/(pages)/_components/Navbar/Navbar.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 38\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mattg/Documents/GitHub/Next.js-App-Router-Starter/app/(pages)/_components/Navbar/Navbar.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mattg/Documents/GitHub/Next.js-App-Router-Starter/app/(pages)/_components/Navbar/Navbar.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mattg/Documents/GitHub/Next.js-App-Router-Starter/app/(pages)/_components/Navbar/Navbar.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mattg/Documents/GitHub/Next.js-App-Router-Starter/app/(pages)/_components/Navbar/Navbar.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"6yZ6NxBq1yAEhz6k/Hcjt1VSKgw=\", false, function() {\n    return [\n        _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL19jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2QjtBQUM4QjtBQUVqQjtBQUNEO0FBRTFCLFNBQVNLLE9BQU8sS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNLENBQUNDLFFBQVFDLGNBQWNDLEdBQUdDLFlBQVksR0FBR04sNERBQVNBLENBQUM7SUFDekQscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVdULDZFQUF1QjtrQkFDckMsNEVBQUNRO1lBQUlDLFdBQVdULHNFQUFnQjs7OEJBQzlCLDhEQUFDWTtvQkFBSUMsS0FBSTs4QkFBVTs7Ozs7OzhCQUNuQiw4REFBQ0w7b0JBQUlDLFdBQVdULDBFQUFvQjs7c0NBQ2xDLDhEQUFDUTs0QkFBSUMsV0FBVyxHQUFtQkwsT0FBaEJKLGtFQUFZLEVBQUMsS0FBaUMsT0FBOUJJLFNBQVNKLG1FQUFhLEdBQUc7c0NBQ3pERyxTQUFTYSxHQUFHLENBQUMsQ0FBQ0M7Z0NBQ2IscUJBQ0UsOERBQUNwQixpREFBSUE7b0NBQWlCcUIsTUFBTUQsS0FBS0UsSUFBSTtvQ0FBRUMsU0FBU2I7OENBQzdDVSxLQUFLSSxJQUFJO21DQURESixLQUFLRSxJQUFJOzs7Ozs0QkFJeEI7Ozs7OztzQ0FFRiw4REFBQ0c7NEJBQU9iLFdBQVdULGlFQUFXOzRCQUFFb0IsU0FBU2Y7c0NBQ3RDRCx1QkFBUyw4REFBQ0wsb0dBQVFBOzs7O3FEQUFNLDhEQUFDRCwyR0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRDtHQXZCd0JJOztRQUN5QkQsd0RBQVNBOzs7S0FEbENDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocGFnZXMpL19jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4PzVmYzQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFJ4SGFtYnVyZ2VyTWVudSwgUnhDcm9zczIgfSBmcm9tICdyZWFjdC1pY29ucy9yeCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tICdAaG9va3MvdXNlVG9nZ2xlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgbmF2TGlua3MgfSkge1xuICBjb25zdCBbYWN0aXZlLCB0b2dnbGVBY3RpdmUsIF8sIHNldEluYWN0aXZlXSA9IHVzZVRvZ2dsZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWxhdGl2ZV93cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9Jy4vaW5kZXgnPkxPR08gSU1HPC9pbWc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rc30gJHthY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogbnVsbH1gfT5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e2xpbmsuc2x1Z30gaHJlZj17bGluay5zbHVnfSBvbkNsaWNrPXtzZXRJbmFjdGl2ZX0+XG4gICAgICAgICAgICAgICAgICB7bGluay5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gb25DbGljaz17dG9nZ2xlQWN0aXZlfT5cbiAgICAgICAgICAgIHthY3RpdmUgPyA8UnhDcm9zczIgLz4gOiA8UnhIYW1idXJnZXJNZW51IC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSeEhhbWJ1cmdlck1lbnUiLCJSeENyb3NzMiIsInN0eWxlcyIsInVzZVRvZ2dsZSIsIk5hdmJhciIsIm5hdkxpbmtzIiwiYWN0aXZlIiwidG9nZ2xlQWN0aXZlIiwiXyIsInNldEluYWN0aXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVsYXRpdmVfd3JhcHBlciIsImNvbnRhaW5lciIsImltZyIsInNyYyIsIm5hdl9jb250YWluZXIiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJocmVmIiwic2x1ZyIsIm9uQ2xpY2siLCJuYW1lIiwiYnV0dG9uIiwibWVudSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/_components/Navbar/Navbar.jsx\n"));

/***/ })

});