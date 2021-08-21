/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_TinyPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/TinyPopup */ \"./src/models/TinyPopup.ts\");\n\nlet popup = new _models_TinyPopup__WEBPACK_IMPORTED_MODULE_0__.default({\n  content: '<p>Hello World<p>'\n});\nconsole.log(popup);\n\n//# sourceURL=webpack://tiny-popup/./src/index.ts?");

/***/ }),

/***/ "./src/models/DOMHandler.ts":
/*!**********************************!*\
  !*** ./src/models/DOMHandler.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOMHandler)\n/* harmony export */ });\n/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/index.css */ \"./src/assets/index.css\");\n// @ts-ignore\n\nclass DOMHandler {\n  body = document.getElementsByTagName('body')[0];\n  head = document.getElementsByTagName('head')[0];\n\n  initPopupElements() {\n    try {\n      this.addCSS();\n      this.createOverlay();\n    } catch (e) {\n      console.error(e);\n    }\n  }\n  /**\r\n   * Add all style popup in HEAD element\r\n   */\n\n\n  addCSS() {\n    let styleElement = document.createElement('STYLE');\n    styleElement.id = \"tinypopup-style\";\n    styleElement.innerHTML = _assets_index_css__WEBPACK_IMPORTED_MODULE_0__.default.toString();\n    this.head.append(styleElement);\n  }\n  /**\r\n   * Create overlay\r\n   */\n\n\n  createOverlay() {\n    this.overlay = document.createElement('DIV');\n    this.overlay.classList.add('tinypopup-overlay');\n    this.body.append(this.overlay);\n  }\n\n  activeOverlay() {\n    if (!this.overlay.classList.contains('active')) {\n      this.overlay.classList.add('active');\n    }\n\n    this.overlay.classList.remove('unactive');\n  }\n\n  unactiveOverlay() {\n    this.overlay.classList.add('unactive');\n  }\n\n}\n\n//# sourceURL=webpack://tiny-popup/./src/models/DOMHandler.ts?");

/***/ }),

/***/ "./src/models/TinyPopup.ts":
/*!*********************************!*\
  !*** ./src/models/TinyPopup.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TinyPopup)\n/* harmony export */ });\n/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMHandler */ \"./src/models/DOMHandler.ts\");\n\nclass TinyPopup {\n  options = {\n    content: null,\n    url: null,\n    callback: null,\n    name: null,\n    title: null,\n    appendElement: null\n  };\n  DOMEngine = new _DOMHandler__WEBPACK_IMPORTED_MODULE_0__.default();\n  isOpening = false;\n\n  constructor(options) {\n    this.initOptions(options);\n    this.DOMEngine.initPopupElements();\n  }\n  /**\r\n   * Merge options and check if one content is set\r\n   * @param options {PopupOptions}\r\n   */\n\n\n  initOptions(options) {\n    try {\n      this.options = Object.assign(this.options, options);\n    } catch (e) {\n      console.error(e);\n    }\n  }\n\n  open() {\n    try {\n      if (!(this.options.content || this.options.url)) {\n        throw new Error('TinyPopup need at least a content or a url.');\n      }\n    } catch (e) {\n      console.error(e);\n    }\n  }\n\n}\n\n//# sourceURL=webpack://tiny-popup/./src/models/TinyPopup.ts?");

/***/ }),

/***/ "./src/assets/index.css":
/*!******************************!*\
  !*** ./src/assets/index.css ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* OVERLAY */\\r\\n.tinypopup-overlay{\\r\\n    position:fixed;\\r\\n    background-color:black;\\r\\n    top:0;\\r\\n    left:0;\\r\\n    width: 0;\\r\\n    height: 0;\\r\\n    opacity: 0;\\r\\n}\\r\\n.tinypopup-overlay.active {\\r\\n    animation: appear .4s;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    opacity: .4;\\r\\n}\\r\\n.tinypopup-overlay.active.unactive {\\r\\n    animation: disappear .4s;\\r\\n    width: 0;\\r\\n    height: 0;\\r\\n    opacity: 0;\\r\\n}\\r\\n@keyframes appear {\\r\\n    0% {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        opacity: 0;\\r\\n    }\\r\\n    100% {\\r\\n        opacity: .4;\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes disappear {\\r\\n    0% {\\r\\n        opacity: .4;\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n    }\\r\\n    100% {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        opacity: 0;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tiny-popup/./src/assets/index.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tiny-popup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;