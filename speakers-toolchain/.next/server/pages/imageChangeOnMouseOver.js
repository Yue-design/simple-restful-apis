module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/imageChangeOnMouseOver.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/imageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/imageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ \"./src/ImageToggleOnMouseOver.js\");\n\nvar _jsxFileName = \"/Users/yue/Desktop/JSworkspace/simple-restful-apis/speakers-toolchain/pages/imageChangeOnMouseOver.js\";\n\n\n\nconst ImageChangeOnMouseOver = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      primaryImg: \"/static/speakers/bw/Speaker-187.jpg\",\n      secondaryImg: \"/static/speakers/Speaker-187.jpg\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), \"\\xA0\\xA0\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      primaryImg: \"/static/speakers/bw/Speaker-823.jpg\",\n      secondaryImg: \"/static/speakers/Speaker-823.jpg\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnMouseOver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzPzk2OWEiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPbk1vdXNlT3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLHNCQUFzQixHQUFHLE1BQU07QUFDbkMsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxtRUFBRDtBQUNFLGdCQUFVLEVBQUMscUNBRGI7QUFFRSxrQkFBWSxFQUFDLGtDQUZmO0FBR0UsU0FBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERiwrQkFPRSxxRUFBQyxtRUFBRDtBQUNFLGdCQUFVLEVBQUMscUNBRGI7QUFFRSxrQkFBWSxFQUFDLGtDQUZmO0FBR0UsU0FBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBaEJEOztBQWtCZUEscUZBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgZnJvbSBcIi4uL3NyYy9JbWFnZVRvZ2dsZU9uTW91c2VPdmVyXCI7XG5cbmNvbnN0IEltYWdlQ2hhbmdlT25Nb3VzZU92ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJbWFnZVRvZ2dsZU9uTW91c2VPdmVyXG4gICAgICAgIHByaW1hcnlJbWc9XCIvc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItMTg3LmpwZ1wiXG4gICAgICAgIHNlY29uZGFyeUltZz1cIi9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0xODcuanBnXCJcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgIC8+XG4gICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgIDxJbWFnZVRvZ2dsZU9uTW91c2VPdmVyXG4gICAgICAgIHByaW1hcnlJbWc9XCIvc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItODIzLmpwZ1wiXG4gICAgICAgIHNlY29uZGFyeUltZz1cIi9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci04MjMuanBnXCJcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uTW91c2VPdmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/imageChangeOnMouseOver.js\n");

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/yue/Desktop/JSworkspace/simple-restful-apis/speakers-toolchain/src/ImageToggleOnMouseOver.js\";\n\n\nconst ImageTogglerOnMouseOver = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    onMouseOver: () => {\n      imageRef.current.src = secondaryImg;\n    },\n    onMouseOut: () => {\n      imageRef.current.src = primaryImg;\n    },\n    src: primaryImg,\n    alt: \"\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageTogglerOnMouseOver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVPbk1vdXNlT3Zlci5qcz82Zjc0Il0sIm5hbWVzIjpbIkltYWdlVG9nZ2xlck9uTW91c2VPdmVyIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwiY3VycmVudCIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLHVCQUF1QixHQUFHLENBQUM7QUFBRUMsWUFBRjtBQUFjQztBQUFkLENBQUQsS0FBa0M7QUFDaEUsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFDQSxzQkFDRTtBQUNFLGVBQVcsRUFBRSxNQUFNO0FBQ2pCRCxjQUFRLENBQUNFLE9BQVQsQ0FBaUJDLEdBQWpCLEdBQXVCSixZQUF2QjtBQUNELEtBSEg7QUFJRSxjQUFVLEVBQUUsTUFBTTtBQUNoQkMsY0FBUSxDQUFDRSxPQUFULENBQWlCQyxHQUFqQixHQUF1QkwsVUFBdkI7QUFDRCxLQU5IO0FBT0UsT0FBRyxFQUFFQSxVQVBQO0FBUUUsT0FBRyxFQUFDLEVBUk47QUFTRSxPQUFHLEVBQUVFO0FBVFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0FmRDs7QUFpQmVILHNGQUFmIiwiZmlsZSI6Ii4vc3JjL0ltYWdlVG9nZ2xlT25Nb3VzZU92ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEltYWdlVG9nZ2xlck9uTW91c2VPdmVyID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcbiAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHtcbiAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5zcmMgPSBzZWNvbmRhcnlJbWc7XG4gICAgICB9fVxuICAgICAgb25Nb3VzZU91dD17KCkgPT4ge1xuICAgICAgICBpbWFnZVJlZi5jdXJyZW50LnNyYyA9IHByaW1hcnlJbWc7XG4gICAgICB9fVxuICAgICAgc3JjPXtwcmltYXJ5SW1nfVxuICAgICAgYWx0PVwiXCJcbiAgICAgIHJlZj17aW1hZ2VSZWZ9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlck9uTW91c2VPdmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ImageToggleOnMouseOver.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });