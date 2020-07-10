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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/all.scss":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/all.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/Golostextregular.woff2 */ \"./fonts/Golostextregular.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/Golostextregular.woff */ \"./fonts/Golostextregular.woff\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/moon.svg */ \"./img/moon.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\n// Module\nexports.push([module.i, \".form {\\n  display: flex;\\n  flex-direction: column;\\n  width: 432px;\\n  background-color: #FFFFFF;\\n  box-shadow: 0 4px 8px rgba(109, 125, 167, 0.16);\\n  border-radius: 6px;\\n  padding: 32px 32px 40px;\\n  margin-bottom: 24px;\\n}\\n.form__title {\\n  font-weight: 500;\\n  font-size: 24px;\\n  line-height: 32px;\\n  color: #111111;\\n  margin: 0 0 24px;\\n}\\n.form__buttons-wrapper {\\n  display: flex;\\n  margin-bottom: 16px;\\n}\\n.form .btn {\\n  border: none;\\n  font-size: 14px;\\n  line-height: 20px;\\n  padding: 6px 16px;\\n}\\n.form__btn-resident {\\n  border-radius: 6px 0 0 6px;\\n  background-color: #FFE58D;\\n  transition: 0.5s;\\n}\\n.form__btn-resident:hover {\\n  box-shadow: -5px 0 15px 0 rgba(0, 0, 0, 0.2);\\n}\\n.form__btn-non-resident {\\n  border-radius: 0 6px 6px 0;\\n  background-color: rgba(109, 125, 167, 0.08);\\n  transition: 0.5s;\\n}\\n.form__btn-non-resident:hover {\\n  box-shadow: 5px 0 15px 0 rgba(0, 0, 0, 0.2);\\n}\\n.form__input-field {\\n  flex-grow: 1;\\n  font-size: 16px;\\n  line-height: 24px;\\n  border: 2px solid #D9D9D9;\\n  border-radius: 6px;\\n  padding: 10px 44px 10px 16px;\\n  transition: 0.5s;\\n}\\n.form__input-field::placeholder {\\n  color: #8D8D8D;\\n}\\n.form__input-wrapper:last-of-type {\\n  margin-bottom: 24px;\\n}\\n.form__input-field:hover {\\n  border: 2px solid #3D7FFF;\\n}\\n.form__input-wrapper {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  margin-bottom: 16px;\\n}\\n.form__input-verification-result-block {\\n  position: absolute;\\n  display: flex;\\n  right: 15px;\\n}\\n.form__icon-done {\\n  height: 32px;\\n  width: 32px;\\n}\\n.form__btn-submit {\\n  align-self: flex-start;\\n  font-weight: 700;\\n  font-size: 16px;\\n  line-height: 24px;\\n  border: none;\\n  border-radius: 6px;\\n  color: #111111;\\n  background-color: #FFD968;\\n  padding: 12px 32px;\\n  margin-bottom: 8px;\\n  transition: 0.5s;\\n}\\n.form__btn-submit-disabled {\\n  align-self: flex-start;\\n  font-weight: 700;\\n  font-size: 16px;\\n  line-height: 24px;\\n  border: none;\\n  border-radius: 6px;\\n  color: white;\\n  background-color: gray;\\n  padding: 12px 32px;\\n  margin-bottom: 8px;\\n}\\n.form__btn-submit:hover {\\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);\\n}\\n.form__text {\\n  color: #111111;\\n  font-size: 14px;\\n  line-height: 20px;\\n}\\n.form__link {\\n  color: #3D7FFF;\\n  border-bottom: 1px solid transparent;\\n  transition: 0.5s;\\n}\\n.form__link:hover {\\n  border-bottom: 1px solid #3D7FFF;\\n}\\n\\n@font-face {\\n  font-family: \\\"Golos\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.body {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n  box-sizing: border-box;\\n  font-family: Golos, sans-serif;\\n  background-color: #F0F3FA;\\n  padding: 140px 40px 40px;\\n}\\n\\na, button {\\n  cursor: pointer;\\n}\\n\\n.display-none {\\n  display: none;\\n}\\n\\n.list-style-reset {\\n  list-style: none;\\n}\\n\\n.link-style-reset {\\n  text-decoration: none;\\n}\\n\\n#js-transition-disabled * {\\n  transition: none !important;\\n}\\n\\ninput[type=number]::-webkit-outer-spin-button,\\ninput[type=number]::-webkit-inner-spin-button {\\n  -webkit-appearance: none;\\n  margin: 0;\\n}\\n\\ninput[type=number] {\\n  -moz-appearance: textfield;\\n}\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  margin-bottom: 37px;\\n}\\n.header__link {\\n  display: block;\\n}\\n\\n.main {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  flex: 1;\\n}\\n\\n.navigation__list {\\n  display: flex;\\n  font-size: 14px;\\n  line-height: 20px;\\n  padding: 0;\\n  margin: 0;\\n}\\n.navigation__item {\\n  display: flex;\\n  align-items: center;\\n}\\n.navigation__item:after {\\n  content: \\\"\\\";\\n  display: inline-block;\\n  width: 4px;\\n  height: 4px;\\n  border-radius: 50%;\\n  background-color: rgba(61, 127, 255, 0.24);\\n  margin-left: 8px;\\n  margin-right: 8px;\\n}\\n.navigation__item:last-child:after {\\n  display: none;\\n}\\n.navigation__link {\\n  color: #3D7FFF;\\n  border-bottom: 1px solid transparent;\\n  transition: 0.5s;\\n}\\n.navigation__link:hover {\\n  border-bottom: 1px solid #3D7FFF;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-self: flex-end;\\n  align-items: center;\\n  color: #111111;\\n}\\n.footer__copyright {\\n  margin-right: auto;\\n}\\n.footer__day-mode {\\n  width: 14px;\\n  height: 14px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  margin-right: 22px;\\n}\\n.footer__language-change {\\n  color: #111111;\\n  transition: 0.5s;\\n}\\n.footer__language-change:hover {\\n  color: #3D7FFF;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/all.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./fonts/Golostextregular.woff":
/*!*************************************!*\
  !*** ./fonts/Golostextregular.woff ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ec7d0d6496782977dd0053609dce4443.woff\");\n\n//# sourceURL=webpack:///./fonts/Golostextregular.woff?");

/***/ }),

/***/ "./fonts/Golostextregular.woff2":
/*!**************************************!*\
  !*** ./fonts/Golostextregular.woff2 ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"79beb6689f814c323459c0d911328812.woff2\");\n\n//# sourceURL=webpack:///./fonts/Golostextregular.woff2?");

/***/ }),

/***/ "./img/moon.svg":
/*!**********************!*\
  !*** ./img/moon.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"057d8e21022e48c251787cbc4a245ea7.svg\");\n\n//# sourceURL=webpack:///./img/moon.svg?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/all.scss */ \"./styles/all.scss\");\n/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_all_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_inputINN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/inputINN */ \"./scripts/inputINN.js\");\n/* harmony import */ var _scripts_inputSite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/inputSite */ \"./scripts/inputSite.js\");\n/* harmony import */ var _scripts_inputEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/inputEmail */ \"./scripts/inputEmail.js\");\n/* harmony import */ var _scripts_inputPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/inputPhone */ \"./scripts/inputPhone.js\");\n/* harmony import */ var _scripts_transitionOn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/transitionOn */ \"./scripts/transitionOn.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = () => Object(_scripts_transitionOn__WEBPACK_IMPORTED_MODULE_5__[\"transitionOn\"])();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./scripts/inputEmail.js":
/*!*******************************!*\
  !*** ./scripts/inputEmail.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm */ \"./scripts/validateForm.js\");\n\r\nconst inputINNElement = document.querySelector('.js-form__inn-field');\r\nconst inputPhoneElement = document.querySelector('.js-form__phone-field');\r\nconst inputEmailElement = document.querySelector('.js-form__email-field');\r\nconst inputSiteElement = document.querySelector('.js-form__site-field');\r\nconst verificationEmailIconElement = document.querySelector('.js-email-ok');\r\n\r\n//Замена значения placeholder при фокусировке и расфокусировке input`a\r\ninputEmailElement.addEventListener('focus', () => {\r\n    inputEmailElement.setAttribute('placeholder', 'example@mail.com');\r\n})\r\ninputEmailElement.addEventListener('blur', () => {\r\n    inputEmailElement.setAttribute('placeholder', 'Электронная почта');\r\n})\r\n\r\n//Отображение  картинки с галочкой при валидном значении адреса почты\r\ninputEmailElement.addEventListener('input', () => {\r\n    if (Object(_validateForm__WEBPACK_IMPORTED_MODULE_0__[\"validateEmail\"])(inputEmailElement.value)) {\r\n        verificationEmailIconElement.classList.remove('display-none');\r\n    } else {\r\n        verificationEmailIconElement.classList.add('display-none');\r\n    }\r\n    Object(_validateForm__WEBPACK_IMPORTED_MODULE_0__[\"validateForm\"]) (inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputSiteElement.value);\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/inputEmail.js?");

/***/ }),

/***/ "./scripts/inputINN.js":
/*!*****************************!*\
  !*** ./scripts/inputINN.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm */ \"./scripts/validateForm.js\");\n\r\n\r\nconst inputINNElement = document.querySelector('.js-form__inn-field');\r\nconst inputPhoneElement = document.querySelector('.js-form__phone-field');\r\nconst inputEmailElement = document.querySelector('.js-form__email-field');\r\nconst inputSiteElement = document.querySelector('.js-form__site-field');\r\nconst INNVerificationResultBlockElement = document.querySelector('.js-inn-verification-result-block');\r\nconst verificationINNIconElement = document.querySelector('.js-inn-ok');\r\n\r\n\r\n//Замена значения placeholder при фокусировке и расфокусировке input`a\r\ninputINNElement.addEventListener('focus', () => {\r\n    inputINNElement.setAttribute('placeholder', 'Введите 10 или 12 цифр');\r\n})\r\ninputINNElement.addEventListener('blur', () => {\r\n    inputINNElement.setAttribute('placeholder', 'ИНН организации или ИП');\r\n})\r\n\r\n//Отображение количества введенных цифр и отображение картинки с галочкой при 10 и 12 введенный цифрах\r\ninputINNElement.addEventListener('input', () => {\r\n\r\n    INNVerificationResultBlockElement.textContent = inputINNElement.value.length;\r\n    if (inputINNElement.value.length === 0) {\r\n        INNVerificationResultBlockElement.textContent = \"\";\r\n    }\r\n\r\n    if (Object(_validateForm__WEBPACK_IMPORTED_MODULE_0__[\"validateINN\"])(inputINNElement.value.length)) {\r\n        verificationINNIconElement.classList.remove('display-none');\r\n        INNVerificationResultBlockElement.classList.add('display-none');\r\n    } else {\r\n        verificationINNIconElement.classList.add('display-none');\r\n        INNVerificationResultBlockElement.classList.remove('display-none');\r\n    }\r\n    Object(_validateForm__WEBPACK_IMPORTED_MODULE_0__[\"validateForm\"]) (inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputSiteElement.value);\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/inputINN.js?");

/***/ }),

/***/ "./scripts/inputPhone.js":
/*!*******************************!*\
  !*** ./scripts/inputPhone.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm */ \"./scripts/validateForm.js\");\n\r\nconst inputINNElement = document.querySelector('.js-form__inn-field');\r\nconst inputPhoneElement = document.querySelector('.js-form__phone-field');\r\nconst inputEmailElement = document.querySelector('.js-form__email-field');\r\nconst inputSiteElement = document.querySelector('.js-form__site-field');\r\nconst verificationPhoneIconElement = document.querySelector('.js-phone-ok');\r\n\r\n//Замена значения placeholder при фокусировке и расфокусировке input`a\r\ninputPhoneElement.addEventListener('focus', () => {\r\n    inputPhoneElement.setAttribute('placeholder', 'X(XXX)XXX-XX-XX');\r\n})\r\ninputPhoneElement.addEventListener('blur', () => {\r\n    inputPhoneElement.setAttribute('placeholder', 'Номер телефона');\r\n})\r\n\r\n//Отображение  картинки с галочкой при валидном значении адреса почты\r\ninputPhoneElement.addEventListener('input', () => {\r\n    if (Object(_validateForm__WEBPACK_IMPORTED_MODULE_0__[\"validatePhone\"])(inputPhoneElement.value)) {\r\n        verificationPhoneIconElement.classList.remove('display-none');\r\n    } else {\r\n        verificationPhoneIconElement.classList.add('display-none');\r\n    }\r\n    Object(_validateForm__WEBPACK_IMPORTED_MODULE_0__[\"validateForm\"]) (inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputSiteElement.value);\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/inputPhone.js?");

/***/ }),

/***/ "./scripts/inputSite.js":
/*!******************************!*\
  !*** ./scripts/inputSite.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm */ \"./scripts/validateForm.js\");\n\r\nconst inputINNElement = document.querySelector('.js-form__inn-field');\r\nconst inputPhoneElement = document.querySelector('.js-form__phone-field');\r\nconst inputEmailElement = document.querySelector('.js-form__email-field');\r\nconst inputSiteElement = document.querySelector('.js-form__site-field');\r\nconst verificationSiteIconElement = document.querySelector('.js-site-ok');\r\n\r\n//Замена значения placeholder при фокусировке и расфокусировке input`a\r\ninputSiteElement.addEventListener('focus', () => {\r\n    inputSiteElement.setAttribute('placeholder', 'www.example.com');\r\n})\r\ninputSiteElement.addEventListener('blur', () => {\r\n    inputSiteElement.setAttribute('placeholder', 'Сайт магазина');\r\n})\r\n\r\n//Отображение  картинки с галочкой при валидном значении адреса почты\r\ninputSiteElement.addEventListener('input', () => {\r\n    if (Object(_validateForm__WEBPACK_IMPORTED_MODULE_0__[\"validateUrl\"])(inputSiteElement.value)) {\r\n        verificationSiteIconElement.classList.remove('display-none');\r\n    } else {\r\n        verificationSiteIconElement.classList.add('display-none');\r\n    }\r\n    Object(_validateForm__WEBPACK_IMPORTED_MODULE_0__[\"validateForm\"]) (inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputSiteElement.value);\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/inputSite.js?");

/***/ }),

/***/ "./scripts/transitionOn.js":
/*!*********************************!*\
  !*** ./scripts/transitionOn.js ***!
  \*********************************/
/*! exports provided: transitionOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transitionOn\", function() { return transitionOn; });\n\r\n\r\nconst transitionOn = () => {\r\n  const mainElem = document.querySelector('.main');\r\n  mainElem.removeAttribute('id');\r\n  console.log('transition on')\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/transitionOn.js?");

/***/ }),

/***/ "./scripts/validateForm.js":
/*!*********************************!*\
  !*** ./scripts/validateForm.js ***!
  \*********************************/
/*! exports provided: validateINN, validatePhone, validateEmail, validateUrl, validateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateINN\", function() { return validateINN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validatePhone\", function() { return validatePhone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateUrl\", function() { return validateUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateForm\", function() { return validateForm; });\n//Ф-ия вылидации длинный ИНН\r\nconst validateINN = (length) => {\r\n    let result = false;\r\n    if (length === 10 || length === 12) {\r\n        result = true;\r\n    }\r\n    return result;\r\n}\r\n\r\n// Ф-ия валидации почты (можно сделать более узкую валидацию расширя регулярное выражение,\r\n// но логика остается такой же)\r\nconst validatePhone = (phoneNumber) => {\r\n    let re = /^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$/;\r\n    return re.test(phoneNumber);\r\n}\r\n\r\n//Ф-ия валидации почты (можно сделать более узкую валидацию расширя регулярное выражение,\r\n// но логика остается такой же)\r\nconst validateEmail = (email) => {\r\n    let re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n    return re.test(email);\r\n}\r\n\r\n//Ф-ия валидации адреса сайта (можно сделать более узкую валидацию расширя регулярное выражение,\r\n// но логика остается такой же)\r\nconst validateUrl = (url) => {\r\n    let re = /^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/\\w .-]*)*\\/?$/;\r\n    return re.test(url);\r\n}\r\n\r\nconst btnSubmitElement = document.querySelector('#js-btn-submit');\r\n//Ф-ия активации кнопки отправки формы\r\nconst validateForm = (inn, phone, email, url) => {\r\n    let result = false;\r\n    if (validateINN(inn) && validatePhone(phone) && validateEmail(email) && validateUrl(url)) {\r\n        result = true;\r\n        btnSubmitElement.classList.remove('form__btn-submit-disabled');\r\n        btnSubmitElement.classList.add('form__btn-submit');\r\n        btnSubmitElement.removeAttribute('disabled');\r\n    } else {\r\n        btnSubmitElement.classList.add('form__btn-submit-disabled');\r\n        btnSubmitElement.classList.remove('form__btn-submit');\r\n        btnSubmitElement.setAttribute('disabled', 'true');\r\n    }\r\n    return result;\r\n}\n\n//# sourceURL=webpack:///./scripts/validateForm.js?");

/***/ }),

/***/ "./styles/all.scss":
/*!*************************!*\
  !*** ./styles/all.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./all.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/all.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./styles/all.scss?");

/***/ })

/******/ });