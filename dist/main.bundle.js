/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/body_style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/body_style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".submit_form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 20px 10px;\\n  font-family: \\\"Monsterrat\\\", sans-serif;\\n  color: #edf0f1;\\n  font-size: 16px; }\\n\\n#body_info {\\n  font-size: 23px; }\\n\\n.input_fields {\\n  display: flex;\\n  flex-direction: column;\\n  width: 50%;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 20px; }\\n\\n.input_fields input {\\n  padding: 5px;\\n  margin: 10px 0;\\n  font-size: 16px;\\n  border-radius: 10px;\\n  transition: all 0.3s ease 0s;\\n  box-shadow: 0 0 4px #999; }\\n\\n#place-name {\\n  width: 300px;\\n  font-size: 16px; }\\n\\n#place-name:focus, #start-date:focus {\\n  outline: none;\\n  transform: scaleX(1.1); }\\n\\n#btn-sub {\\n  padding: 9px 25px;\\n  background-color: #2196f3;\\n  box-shadow: 0 0 4px #999;\\n  border: none;\\n  color: #edf0f1;\\n  border-radius: 7px;\\n  cursor: pointer;\\n  transition: all 0.3s ease 0s;\\n  margin: 20px 0; }\\n\\n#btn-sub:focus {\\n  outline: none; }\\n\\n.ripple {\\n  background-position: center;\\n  transition: background 0.8s; }\\n\\n.ripple:hover {\\n  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%; }\\n\\n.ripple:active {\\n  background-color: #6eb9f7;\\n  background-size: 100%;\\n  transition: background 0s; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/body_style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/formatdata_style.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/formatdata_style.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".container {\\n  font-family: 'Montserrat', sans-serif;\\n  margin: 20px auto;\\n  padding: 20px;\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n  grid-template-columns: repeat(6, 1fr);\\n  grid-template-rows: repeat(6, 100px);\\n  color: #edf0f1; }\\n\\n.invisible {\\n  display: none; }\\n\\n.picture_container {\\n  display: flex;\\n  justify-content: center;\\n  grid-column: 1 / 4;\\n  grid-row: 1 / 5; }\\n\\n#location-picture {\\n  width: 350px;\\n  height: auto;\\n  max-height: 400px; }\\n\\n.location_container {\\n  text-align: center;\\n  grid-column: 4 / 7;\\n  grid-row: 1 / 5;\\n  max-height: 400px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  padding: 15px; }\\n\\n#place-name {\\n  font-family: 'Montserrat', sans-serif;\\n  font-size: 21px;\\n  font-weight: 700;\\n  padding: 10px;\\n  width: 100%; }\\n\\n#counter {\\n  font-size: 18px;\\n  width: 100%;\\n  padding: 10px 15px; }\\n\\n#counter span {\\n  font-weight: 600; }\\n\\n.trip_control {\\n  padding: 10px;\\n  width: 100%;\\n  display: none; }\\n\\n.trip_control button {\\n  padding: 10px;\\n  font-size: 16px;\\n  border-radius: 7px;\\n  margin: 0 10px;\\n  background-color: #47a7f5;\\n  color: #edf0f1;\\n  border: none; }\\n\\n.trip_control button:focus {\\n  outline: none; }\\n\\n.ripple {\\n  background-position: center;\\n  transition: background 0.8s; }\\n\\n.ripple:hover {\\n  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%; }\\n\\n.ripple:active {\\n  outline: none;\\n  background-color: #6eb9f7;\\n  background-size: 100%;\\n  transition: background 0s; }\\n\\n.temp_card {\\n  border: 1px solid;\\n  border-radius: 10px;\\n  width: 40%;\\n  background-color: #edf0f1;\\n  color: #222222;\\n  border: 2px solid #6eb9f7;\\n  margin-top: 5px;\\n  padding: 10px; }\\n\\n#temp {\\n  font-size: 16px;\\n  padding: 5px;\\n  font-weight: 600; }\\n\\n.weather-icon img {\\n  color: #edf0f1;\\n  width: 50px;\\n  padding: 10px 0; }\\n\\n#weather-info {\\n  margin-top: 5px; }\\n\\n.weather_container {\\n  margin: 0 5px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border: 2px solid #6eb9f7;\\n  grid-row: 5 / 7;\\n  height: 200px;\\n  max-height: 200px;\\n  padding: 10px;\\n  border-radius: 7px; }\\n\\n.weather_container img {\\n  width: 80px;\\n  height: auto;\\n  margin: 10px 0; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/formatdata_style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header_style.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header_style.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"header {\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  padding: 20px 10%;\\n  background-color: #24252A;\\n  font-family: #24252A, sans-serif;\\n  font-size: 16px;\\n  text-decoration: none; }\\n\\n.logo {\\n  margin-right: auto;\\n  cursor: pointer;\\n  width: 250px; }\\n\\n.nav_links {\\n  list-style: none; }\\n\\n.nav_links li {\\n  display: inline-block;\\n  padding: 0 20px;\\n  margin-top: 10px; }\\n\\n.nav_links li a {\\n  transition: all 0.3s ease 0s;\\n  text-decoration: none;\\n  color: #edf0f1; }\\n\\n.nav_links li a:hover {\\n  color: #0088a9; }\\n\\n#btn_contact {\\n  padding: 9px 25px;\\n  background-color: #2196f3;\\n  border: none;\\n  color: #edf0f1;\\n  border-radius: 7px;\\n  cursor: pointer;\\n  transition: all 0.3s ease 0s;\\n  margin-left: 20px; }\\n\\n#btn_contact:hover {\\n  background-color: rgba(0, 136, 169, 0.5); }\\n\\n#btn_contact:focus {\\n  outline: none; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/header_style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/main_style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/main_style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap);\"]);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0; }\\n\\nbody {\\n  height: 100%;\\n  background-color: #24252A; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/main_style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var _js_fetchAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/fetchAll */ \"./src/client/js/fetchAll.js\");\n/* harmony import */ var _styles_main_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main_style.scss */ \"./src/client/styles/main_style.scss\");\n/* harmony import */ var _styles_main_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_header_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/header_style.scss */ \"./src/client/styles/header_style.scss\");\n/* harmony import */ var _styles_header_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_header_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_body_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/body_style.scss */ \"./src/client/styles/body_style.scss\");\n/* harmony import */ var _styles_body_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_body_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_formatdata_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/formatdata_style.scss */ \"./src/client/styles/formatdata_style.scss\");\n/* harmony import */ var _styles_formatdata_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_formatdata_style_scss__WEBPACK_IMPORTED_MODULE_4__);\nconsole.log(`Entry Point ${__filename}`);\n\n\n\n\n\ndocument.getElementById('btn-sub').addEventListener('click', function () {\n  console.log('Button Clicked');\n  Object(_js_fetchAll__WEBPACK_IMPORTED_MODULE_0__[\"fetchData\"])();\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/fetchAll.js":
/*!***********************************!*\
  !*** ./src/client/js/fetchAll.js ***!
  \***********************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\n/* \r\nFunction to fetch information from API's \r\n1. Fetch Geo Location \r\n2. Fetch Weather Data\r\n3. Fetch Image\r\n*/\nconst fetchData = async function () {\n  console.log(\":: Fetching Geo Location ::\");\n  const place_name = document.getElementById('place-name').value; // Validate the input\n\n  /* fetchLocationName(geoNames_URL)\r\n    .then((res) => {\r\n       if(res){\r\n           const country_name = res.countryName;\r\n           const weatherData = fetchWeatherData(res, weather_key)\r\n           .then(()=>{   \r\n               const pictureURL = fetchPicture(place_name, pixabay_key)\r\n           })\r\n           .then((pictureURL) => {\r\n               // Update the UI\r\n               updateUI(country_name, weatherData, pictureURL);\r\n           })\r\n       }\r\n       else{\r\n           console.log(\"Aborting Operation \")\r\n       }\r\n    });*/\n\n  await fetchLocationName(place_name);\n  const finData = await getData('/travel');\n\n  if (finData.statusCode == 200) {\n    console.log(\"Data received successfully\");\n  }\n\n  console.log(finData);\n  updateUI(finData, place_name);\n};\n\nconst fetchLocationName = async function (place_name) {\n  // Function to send a post request to the server and fetch the Details for the travel\n  console.log(':: Firing Fetch query ::'); // const response = await fetch(geoNames_URL);\n\n  console.log(place_name);\n  const response = await fetch('/fetchData', {\n    method: 'POST',\n    mode: 'cors',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      textInput: place_name\n    })\n  }).then(res => {\n    return res.json();\n  }).then(jsonData => {\n    console.log(\":: Received Data from server ::\");\n\n    if (jsonData.statusCode == 500) {\n      console.log(\"Something went wrong\");\n    } else {\n      console.log(\"Data Stored in server successfully\");\n    }\n\n    return jsonData;\n  });\n};\n\nconst getData = async route => {\n  try {\n    const response = await fetch(route);\n    const final_data = await response.json();\n    return final_data;\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst updateUI = function (data, place_name) {\n  document.getElementById('location-picture').setAttribute('src', data.pictureData.pictureURL);\n  document.querySelector('#country-name').textContent = data.geoData.countryName;\n  document.querySelector('#place-entered').textContent = place_name.toUpperCase(); // Object containing the weather data for the days to be displayed\n\n  const start_date = document.getElementById('start-date').value;\n  let weathers = data.weatherData;\n  const difference = calcDateDiff(start_date);\n  document.getElementById('difference').innerHTML = difference;\n\n  if (difference < 11) {\n    weathers = weathers.slice(difference, difference + 6);\n  } else {\n    weathers = weathers.slice(10, weathers.length);\n  }\n\n  document.getElementById('temp').innerHTML = `<span> ${weathers[0].temp}°C </span>`;\n  document.getElementById('weather-info').innerHTML = weathers[0].weather.description;\n\n  for (let i = 1; i <= weathers.length; i++) {\n    document.getElementById('degree' + i).innerHTML = `<span> ${weathers[0].temp}°C </span>`;\n    document.getElementById('weather' + i).innerHTML += weathers[i - 1].weather.description;\n  }\n\n  document.querySelector('.container').classList.remove('invisible');\n  console.log(weathers);\n}; // Helper Functions\n\n\nconst calcDateDiff = function (start_date) {\n  // Function to calculate the difference between two dates\n  const today = new Date();\n  const d1 = today.getDate();\n  const m1 = today.getMonth() + 1;\n  const y1 = today.getFullYear();\n  console.log(`Today's date is ${d1}-${m1}-${y1}`);\n  const dot = start_date.split('-');\n  const d2 = dot[2];\n  const m2 = dot[1];\n  const y2 = dot[0];\n  console.log(`Date of travel ${d2}-${m2}-${y2}`);\n  const num_days1 = Number(y1 * 365) + Number(d1) + Number(calDaysinMonth(m1)) + Number(calcLeapYears(m1, y1));\n  const num_days2 = Number(y2 * 365) + Number(d2) + Number(calDaysinMonth(m2)) + Number(calcLeapYears(m2, y2));\n  const difference = num_days2 - num_days1;\n  return difference;\n};\n\nconst calDaysinMonth = function (month) {\n  const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n  let days = 0;\n\n  for (let i = 0; i < month - 1; i++) {\n    days += month_days[i];\n  }\n\n  return days;\n};\n\nfunction calcLeapYears(month, years) {\n  if (month <= 2) {\n    years -= 1;\n  }\n\n  const leap_years = Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400);\n  return leap_years;\n}\n\n\n\n//# sourceURL=webpack:///./src/client/js/fetchAll.js?");

/***/ }),

/***/ "./src/client/styles/body_style.scss":
/*!*******************************************!*\
  !*** ./src/client/styles/body_style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./body_style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/body_style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/client/styles/body_style.scss?");

/***/ }),

/***/ "./src/client/styles/formatdata_style.scss":
/*!*************************************************!*\
  !*** ./src/client/styles/formatdata_style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./formatdata_style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/formatdata_style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/client/styles/formatdata_style.scss?");

/***/ }),

/***/ "./src/client/styles/header_style.scss":
/*!*********************************************!*\
  !*** ./src/client/styles/header_style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header_style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header_style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/client/styles/header_style.scss?");

/***/ }),

/***/ "./src/client/styles/main_style.scss":
/*!*******************************************!*\
  !*** ./src/client/styles/main_style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main_style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/main_style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/client/styles/main_style.scss?");

/***/ })

/******/ });