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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&family=Roboto+Slab&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Cabin\", sans-serif;\r\n}\r\n\r\n:root {\r\n    --primary: black;\r\n    --hover-links: grey;\r\n}\r\n\r\n/* HTML Frame */\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-left: 3vw;\r\n    padding-right: 5vw;\r\n    padding-top: 0.3rem;\r\n}\r\n\r\n.main {\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr;    \r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n    padding-left: 0.5rem;\r\n}\r\n\r\n/* Priority sidebar */\r\n.priority {\r\n    padding-top: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.priority > a {\r\n    text-decoration: none;\r\n    color: var(--primary);\r\n}\r\n.priority > a:hover {\r\n    color: var(--hover-links);\r\n}\r\n\r\n/* Tags sidebar */\r\n.tags {\r\n    padding-top: 1rem;\r\n}\r\n\r\n.tag_header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 0.3rem;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n#add_tag_button {\r\n    margin-right: max(2rem, 1vw);\r\n    margin-bottom: 2px;\r\n    font-size: 2rem;\r\n    border: none;\r\n    background-color: transparent;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n#add_tag_button:hover {\r\n    color: var(--hover-links);\r\n    transform: scale(1.5);\r\n}\r\n#add_tag_button:active {\r\n    transform: scale(0.9);\r\n}\r\n#add_tag_button:focus {\r\n    outline: none;\r\n}\r\n\r\n.tags {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.tags > a {\r\n    text-decoration: none;\r\n    color: var(--primary);\r\n}\r\n.tags > a:hover {\r\n    color: var(--hover-links);\r\n}\r\n\r\n/* Tasks */\r\n.all_tasks_container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.task_container {\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"name name name name name name\"\r\n    \"description description description description . .\"\r\n    \"date date date date completed delete\"\r\n    \"priority priority priority priority completed delete\"\r\n    \"tags tags tags tags tags tags\";\r\n    gap: 0.5rem;\r\n}\r\n\r\n.name {\r\n    grid-area: name;\r\n    text-align: center;\r\n}\r\n\r\n.description {\r\n    grid-area: description;\r\n}\r\n\r\n.date {\r\n    grid-area: date;\r\n}\r\n\r\n.priority {\r\n    grid-area: priority;\r\n}\r\n\r\n.task_buttons {\r\n    width: 3rem;\r\n    height: 2rem;\r\n}\r\n\r\n.complete_button {\r\n    grid-area: completed;\r\n}\r\n\r\n.delete_button {\r\n    grid-area: delete;\r\n}\r\n\r\n.tags {\r\n    grid-area: tags;\r\n}\r\n\r\n/* Task complete */\r\n.task_finished > h3, .task_finished > .description {\r\n    text-decoration: line-through;\r\n}\r\n.task_finished > p {\r\n    opacity: 0.7;\r\n}\r\n\r\n/* Modal */\r\ndialog {\r\n    /* Centering elements */\r\n    margin: auto;\r\n    /* Styling the modal box */\r\n    border: none;\r\n    /* Styling modal contents */\r\n}\r\n\r\ndialog > form {\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.priority_radio {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM/modal.js":
/*!**************************!*\
  !*** ./src/DOM/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearFields: () => (/* binding */ clearFields),\n/* harmony export */   closeOnOutsideClick: () => (/* binding */ closeOnOutsideClick),\n/* harmony export */   collectFieldsData: () => (/* binding */ collectFieldsData),\n/* harmony export */   keyModalOpen: () => (/* binding */ keyModalOpen),\n/* harmony export */   modalOpen: () => (/* binding */ modalOpen),\n/* harmony export */   submitForm: () => (/* binding */ submitForm),\n/* harmony export */   tagSubmit: () => (/* binding */ tagSubmit)\n/* harmony export */ });\n\r\nfunction modalOpen(button, modal) {\r\n    button.addEventListener('click', () => {\r\n        modal.showModal();\r\n    });\r\n}\r\n\r\nfunction keyModalOpen(modal) {\r\n    document.addEventListener('keydown', (event) => {\r\n        if (event.key === 'a' || event.key === \"A\") {\r\n            if (modal.open == false) {\r\n                modal.showModal();\r\n                // Prevents the \"a\" from showing up in the input field\r\n                event.preventDefault();\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\nfunction closeOnOutsideClick(modal) {\r\n    modal.addEventListener(\"click\", (event) => {\r\n        const dialogDimensions = modal.getBoundingClientRect()\r\n        if (\r\n          event.clientX < dialogDimensions.left ||\r\n          event.clientX > dialogDimensions.right ||\r\n          event.clientY < dialogDimensions.top ||\r\n          event.clientY > dialogDimensions.bottom\r\n        ) {\r\n          modal.close()\r\n        }\r\n      })\r\n}\r\n\r\nfunction submitForm(name_field, description_field, date_field, priority_field, tags_field) {\r\n    let result_object = {\r\n        name: name_field.value,\r\n        description: description_field.value,\r\n        date: date_field.value,\r\n        priority: priority_field.value,\r\n        tags: tags_field.value,\r\n    }\r\n\r\n    return result_object;\r\n}\r\n\r\nfunction collectFieldsData(class_name) {\r\n    let fields = document.querySelectorAll(class_name);\r\n    let value_array = [];\r\n    fields.forEach((field) => {\r\n        //Handle radio\r\n        if (field.type == \"radio\") {\r\n            //Only push if value is checked\r\n            if (field.checked == true) {\r\n                value_array.push(field.value);\r\n            }\r\n        }\r\n        //Handles everything else\r\n        else if (field.value != \"radio\") {\r\n            value_array.push(field.value);\r\n        }\r\n    })\r\n\r\n    //Clears everything after pressing submit\r\n    clearFields(...fields);\r\n\r\n    return value_array;\r\n}\r\n\r\nfunction clearFields(...fields) {\r\n    //fields is the array tcontaining all fields to be cleared\r\n    fields.forEach((field) => {\r\n        field.value = \"\";\r\n    })\r\n}\r\n\r\nfunction tagSubmit(tag_field) {\r\n    let tag = tag_field.value;\r\n    //Clears field\r\n    tag_field.value = \"\";\r\n    return tag;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/modal.js?");

/***/ }),

/***/ "./src/DOM/tasksDOM.js":
/*!*****************************!*\
  !*** ./src/DOM/tasksDOM.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkButtons: () => (/* binding */ checkButtons),\n/* harmony export */   deleteButtons: () => (/* binding */ deleteButtons),\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks)\n/* harmony export */ });\n\r\nfunction displayTasks(task_array) {\r\n\r\n    let task_div_array = [];\r\n\r\n    task_array.forEach((task) => {\r\n\r\n        //Create a div for each task\r\n        let task_div = document.createElement('div');\r\n        task_div.classList.add('task_container');\r\n        task_div.dataset.name = task.name;\r\n\r\n        //Fill in details\r\n        let task_name = document.createElement('h3');\r\n        task_name.classList.add('name');\r\n        task_name.textContent = task.name;\r\n\r\n        let task_description = document.createElement('p');\r\n        task_description.classList.add('description');\r\n        task_description.textContent = task.description;\r\n\r\n        let task_date = document.createElement('p');\r\n        task_date.classList.add('date');\r\n        task_date.textContent = task.date;\r\n\r\n        let task_priority = document.createElement('p');\r\n        task_priority.classList.add('priority');\r\n        task_priority.textContent = task.priority;\r\n\r\n        let task_tags = document.createElement('p');\r\n        task_tags.classList.add('tags');\r\n        task.tags.forEach((tag) => {\r\n            task_tags.textContent += tag + \" \";\r\n        })\r\n\r\n        let task_complete_button = document.createElement('button');\r\n        task_complete_button.classList.add('complete_button');\r\n        task_complete_button.textContent = \"✔\";\r\n\r\n        let task_delete_button = document.createElement('button');\r\n        task_delete_button.classList.add('delete_button');\r\n        task_delete_button.textContent = \"X\";\r\n\r\n        [task_complete_button, task_delete_button].forEach((button) => {\r\n            button.classList.add('task_buttons');\r\n        })\r\n\r\n        //Append all details into the div\r\n        let task_info = [task_name, task_description, task_date, task_priority, task_tags, task_complete_button, task_delete_button];\r\n        task_info.forEach((element) => {\r\n            task_div.appendChild(element);\r\n        })\r\n\r\n        //Append div into array\r\n        task_div_array.push(task_div);\r\n\r\n    })\r\n\r\n    const task_container = document.createElement('div');\r\n    task_container.classList.add(\"all_tasks_container\");\r\n\r\n    task_div_array.forEach((element) => {\r\n        task_container.appendChild(element);\r\n    \r\n    })\r\n\r\n    return task_container;\r\n    \r\n}\r\n\r\nfunction deleteButtons(task_array_class) {\r\n    let all_delete_buttons = document.querySelectorAll(\".delete_button\");\r\n\r\n    all_delete_buttons.forEach((button) => {\r\n        button.addEventListener(\"click\", () => {\r\n            let selected_task = button.parentElement.dataset.name;\r\n            let task = task_array_class.findTask(selected_task);\r\n            task_array_class.removeTask(task);\r\n            //Removes the div from the DOM\r\n            button.parentElement.remove();\r\n        })\r\n    })\r\n}\r\n\r\nfunction checkButtons(task_array_class) {\r\n    let all_check_buttons = document.querySelectorAll(\".complete_button\");\r\n\r\n    all_check_buttons.forEach((button) => {\r\n        button.addEventListener(\"click\", () => {\r\n            let selected_task = button.parentElement.dataset.name;\r\n            let parent_element = button.parentElement;\r\n            let result = task_array_class.findTask(selected_task);\r\n            if (result.complete == false) {\r\n                //Add class that modifies style of button\r\n                parent_element.classList.add(\"task_finished\");\r\n                result.setCompleted();\r\n                result.tags.push(\"completed\");\r\n            }\r\n            else if (result.complete == true) {\r\n                //Removes that class to mark that it is not complete\r\n                parent_element.classList.remove(\"task_finished\");\r\n                result.setIncomplete();\r\n                result.tags.splice((() => {\r\n                    return result.tags.indexOf(\"completed\");\r\n                }), 1);\r\n            }            \r\n            console.log(button.parentElement);\r\n        })\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/tasksDOM.js?");

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   TaskHandler: () => (/* binding */ TaskHandler)\n/* harmony export */ });\n\r\nclass TaskHandler { //An array containing all of the tasks and associated methods to handle the \"library\"\r\n    constructor() {\r\n        this.tasks = []; //the array itself\r\n    }\r\n\r\n    returnTaskArray() {\r\n        return this.tasks;\r\n    }\r\n\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    taskSize() {\r\n        return this.tasks.length;\r\n    }\r\n\r\n    findTask(name) {\r\n        let results_array = this.tasks.find((element) => {\r\n            return element.name == name;\r\n        })\r\n\r\n        return results_array;\r\n    }\r\n\r\n    removeTaskById(id) {\r\n        this.tasks.splice(id, 1);\r\n    }\r\n\r\n    removeTask(task) {\r\n        //Otherwise, splice would just treat undefined as  0 and remove the first task from array\r\n        if (task == undefined) {\r\n            return \"Task not found\";\r\n        }\r\n        this.tasks.splice(this.tasks.indexOf(task), 1);\r\n    }\r\n}\r\n\r\nclass Task { //An individual task\r\n    constructor(name, description, date, priority) {\r\n        this.name = name;\r\n        this.description = description;\r\n        this.date = date;\r\n        this.priority = priority;\r\n        this.tags = [];\r\n        this.complete = false;\r\n    }\r\n\r\n    addTags(tag) {\r\n        this.tags.push(tag);\r\n    }\r\n\r\n    setCompleted() {\r\n        this.complete = true;\r\n    }\r\n\r\n    setIncomplete() {\r\n        this.complete = false;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _components_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/task.js */ \"./src/components/task.js\");\n/* harmony import */ var _DOM_tasksDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/tasksDOM.js */ \"./src/DOM/tasksDOM.js\");\n/* harmony import */ var _DOM_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/modal.js */ \"./src/DOM/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst Task1 = new _components_task_js__WEBPACK_IMPORTED_MODULE_1__.Task(\"Task 1\", \"This is a task\", \"2021-10-10\", \"Urgent and Important\");\r\nconst Task2 = new _components_task_js__WEBPACK_IMPORTED_MODULE_1__.Task(\"Task 2\", \"This is task 2\", \"2023-9-12\", \"Urgent and Important\");\r\nconst Task3 = new _components_task_js__WEBPACK_IMPORTED_MODULE_1__.Task(\"Task 3\", \"This is task 3\", \"2021-10-10\", \"Urgent, and Important\");\r\nconst Task4 = new _components_task_js__WEBPACK_IMPORTED_MODULE_1__.Task(\"Task 4\", \"This is task 4\", \"2021-10-10\", \"Not Urgent, not Important\");\r\n\r\nconst allTasks = new _components_task_js__WEBPACK_IMPORTED_MODULE_1__.TaskHandler();\r\n\r\nallTasks.addTask(Task1);\r\nallTasks.addTask(Task2);\r\nallTasks.addTask(Task3);\r\nallTasks.addTask(Task4);\r\n\r\nallTasks.removeTask(Task2);\r\n\r\n//DOM\r\nlet div_of_all_tasks = _DOM_tasksDOM_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks(allTasks.tasks);\r\ndocument.querySelector(\".content\").appendChild(div_of_all_tasks);\r\n\r\n//Tasks\r\n_DOM_tasksDOM_js__WEBPACK_IMPORTED_MODULE_2__.deleteButtons(allTasks);\r\n_DOM_tasksDOM_js__WEBPACK_IMPORTED_MODULE_2__.checkButtons(allTasks);\r\n\r\n//Modal\r\nconst add_task_button = document.querySelector(\".add_button\");\r\nconst modal_window = document.querySelector(\"#add_task_modal\");\r\n\r\nfunction modalFunctions() {\r\n    (0,_DOM_modal_js__WEBPACK_IMPORTED_MODULE_3__.modalOpen)(add_task_button, modal_window);\r\n    // keyModalOpen(modal_window);\r\n    (0,_DOM_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeOnOutsideClick)(modal_window);\r\n}\r\nmodalFunctions();\r\n\r\n//Modal submit\r\nconst submit_button = document.querySelector(\"#submit_button\");\r\n\r\nfunction submit() {\r\n    if (document.querySelector(\"#task_name\").value == \"\" || document.querySelector(\"#task_description\").value == \"\") {\r\n        return \"Please fill in all fields\";\r\n    }\r\n    let value_array = (0,_DOM_modal_js__WEBPACK_IMPORTED_MODULE_3__.collectFieldsData)(\".modal_field\");\r\n    let new_task = new _components_task_js__WEBPACK_IMPORTED_MODULE_1__.Task(...value_array);\r\n    allTasks.addTask(new_task);\r\n    //TODO: add a check that only displays the task added if it matches the tag\r\n    // console.log(allTasks.tasks[allTasks.tasks.length - 1])\r\n    while (document.querySelector(\".content\").firstChild) {\r\n        document.querySelector(\".content\").removeChild(document.querySelector(\".content\").firstChild);\r\n    }\r\n    document.querySelector(\".content\").appendChild(_DOM_tasksDOM_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks(allTasks.tasks));\r\n    document.querySelector(\"#add_task_modal\").close();\r\n}\r\n\r\nsubmit_button.addEventListener((\"click\"), (event) => {\r\n    event.preventDefault();\r\n    submit();\r\n\r\n})\r\ndocument.addEventListener(\"keydown\", (event) => {\r\n    if (document.querySelector(\"#add_task_modal\").open == true) {\r\n        if (event.key == \"Enter\") {\r\n            submit();\r\n        }\r\n    }\r\n})\r\n\r\n// Tags modal\r\nconst add_tag_button = document.querySelector(\"#add_tag_button\");\r\nconst tags_modal = document.querySelector(\"#tags_modal\");\r\n\r\nfunction tagModalFunctions() {\r\n    (0,_DOM_modal_js__WEBPACK_IMPORTED_MODULE_3__.modalOpen)(add_tag_button, tags_modal);\r\n    (0,_DOM_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeOnOutsideClick)(tags_modal);\r\n}\r\ntagModalFunctions();\r\n\r\ntags_modal.addEventListener(\"keydown\", ((event) => {\r\n    if (tags_modal.open == true) {\r\n        if (event.key == \"Enter\") {\r\n            let tag_field = (0,_DOM_modal_js__WEBPACK_IMPORTED_MODULE_3__.tagSubmit)(document.querySelector(\"#tag_input\"));\r\n            console.log(tag_field);\r\n        }\r\n    }\r\n}))\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;