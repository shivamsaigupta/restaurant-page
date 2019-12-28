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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/home */ \"./src/tabs/home.js\");\n/* harmony import */ var _tabs_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/location */ \"./src/tabs/location.js\");\n/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/menu */ \"./src/tabs/menu.js\");\n/* harmony import */ var _tabs_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/about */ \"./src/tabs/about.js\");\n/* harmony import */ var _resetContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resetContent */ \"./src/resetContent.js\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_setup__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\nObject(_tabs_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst TabManager = (function(){\r\n  let lastActiveTab = 'home';\r\n  const homeTab = document.querySelector('#home');\r\n  const locationTab = document.querySelector('#location');\r\n  const menuTab = document.querySelector('#menu');\r\n  const aboutTab = document.querySelector('#about');\r\n  const tabs = [homeTab, locationTab, menuTab, aboutTab];\r\n\r\n  function _switchBtn(btnName){\r\n    //if found current tab, set active, if found previous tab, remove active\r\n    console.log(tabs);\r\n\r\n    tabs.map(tab => {\r\n      console.log(tab, ' ', tab.id);\r\n      if(tab.id === btnName){\r\n        tab.classList.add('active');\r\n      }else if(tab.id === lastActiveTab){\r\n        tab.classList.remove('active');\r\n      }\r\n    });\r\n  }\r\n\r\n  function _changeTab(btn){\r\n    Object(_resetContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n    switch (btn) {\r\n      case 'home':\r\n        Object(_tabs_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        _switchBtn(btn);\r\n        lastActiveTab = 'home';\r\n        break;\r\n      case 'location':\r\n        Object(_tabs_location__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        _switchBtn(btn);\r\n        lastActiveTab = 'location';\r\n        break;\r\n      case 'menu':\r\n        Object(_tabs_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        _switchBtn(btn);\r\n        lastActiveTab = 'menu';\r\n        break;\r\n      case 'about':\r\n        Object(_tabs_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n        _switchBtn(btn);\r\n        lastActiveTab = 'about';\r\n        break;\r\n      default:\r\n        throw new Error('Invalid changeTab argument.');\r\n    }\r\n  }\r\n\r\n  function addEventListeners(){\r\n    tabs.map(tab => {\r\n      tab.addEventListener('click', (e) => {\r\n        _changeTab(e.target.id);\r\n      });\r\n    })\r\n  }\r\n\r\n  return { addEventListeners };\r\n\r\n})();\r\n\r\nTabManager.addEventListeners();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/resetContent.js":
/*!*****************************!*\
  !*** ./src/resetContent.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst resetContent = () => {\r\n  const mainContainer = document.querySelector('#main-container');\r\n  const content = document.querySelector('.content-wrapper');\r\n  mainContainer.removeChild(content);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (resetContent);\r\n\n\n//# sourceURL=webpack:///./src/resetContent.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst setup = () => {\r\n  const mainContainer = document.querySelector('#main-container');\r\n  const header = document.createElement('header');\r\n\r\n  const titleContainer = document.createElement('div');\r\n  titleContainer.setAttribute('id', 'title-container');\r\n  const title = document.createElement('h2');\r\n  title.textContent = \"Gupta's Luxurious Indian Restaurant\";\r\n  titleContainer.appendChild(title);\r\n  header.appendChild(titleContainer);\r\n\r\n  const tabs = document.createElement('ul');\r\n  tabs.classList.add('tabs');\r\n  tabs.innerHTML = \"<li id='home' class='active'>Home</li> <li id='menu'>Menu</li> <li id='location'>Location</li> <li id='about'>About</li>\";\r\n  header.appendChild(tabs);\r\n\r\n  mainContainer.append(header);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (setup);\r\n\n\n//# sourceURL=webpack:///./src/setup.js?");

/***/ }),

/***/ "./src/tabs/about.js":
/*!***************************!*\
  !*** ./src/tabs/about.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst about = () => {\r\n  const mainContainer = document.querySelector('#main-container');\r\n  const content = document.createElement('div');\r\n  content.classList.add('content-wrapper');\r\n  const title = document.createElement('h3');\r\n  title.textContent = 'About';\r\n  const contentPara = document.createElement('p');\r\n  contentPara.textContent = \"I grew up in a middle class family in the Southern State of India, Kerala. Family circumstances kept me away from Film School and I Graduated from India’s Most Prestigious Hospitality Institution, Institute of Hotel Management Bhopal, India. Doesn’t matter what you do, but be good in what you do and enjoy doing it.  I spent time traveling India understanding its culinary and cultural fabric before taking flight to the United States. Spent time in New York and LA before deciding to settle in Vancouver, Worlds most coveted destination. Vancouver is evergreen, beautiful, with its vast waterfronts, inlets, lakes, parks, mountains, snow peaks, and shallow beaches and there’s something for everybody, all year round. The miner’s capital, is west coasts booming city is frequently ranked the best place to live on earth.\";\r\n  content.appendChild(title);\r\n  content.appendChild(contentPara);\r\n  mainContainer.append(content);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\r\n\n\n//# sourceURL=webpack:///./src/tabs/about.js?");

/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst home = () => {\r\n  const mainContainer = document.querySelector('#main-container');\r\n  const content = document.createElement('div');\r\n  content.classList.add('content-wrapper');\r\n  const title = document.createElement('h3');\r\n  title.textContent = 'Home';\r\n  const contentPara = document.createElement('p');\r\n  contentPara.textContent = \"Enjoy the taste of Bombay right here in Vancouver Canada. Come join us at Gupta's Indian Restaurant!\";\r\n  content.appendChild(title);\r\n  content.appendChild(contentPara);\r\n  mainContainer.append(content);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\r\n\n\n//# sourceURL=webpack:///./src/tabs/home.js?");

/***/ }),

/***/ "./src/tabs/location.js":
/*!******************************!*\
  !*** ./src/tabs/location.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst location = () => {\r\n  const mainContainer = document.querySelector('#main-container');\r\n  const content = document.createElement('div');\r\n  content.classList.add('content-wrapper');\r\n  const title = document.createElement('h3');\r\n  title.textContent = 'Location';\r\n  const contentPara = document.createElement('p');\r\n  contentPara.textContent = \"317 – 355 Burrard Street, Vancouver, British Columbia, Canada V6Z 1X6.\";\r\n  content.appendChild(title);\r\n  content.appendChild(contentPara);\r\n  mainContainer.append(content);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (location);\r\n\n\n//# sourceURL=webpack:///./src/tabs/location.js?");

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menu = () => {\r\n  const mainContainer = document.querySelector('#main-container');\r\n  const content = document.createElement('div');\r\n  content.classList.add('content-wrapper');\r\n  const title = document.createElement('h3');\r\n  title.textContent = 'Menu';\r\n  const contentPara = document.createElement('p');\r\n  contentPara.innerHTML = \"<ul><li>Salt and Roti: $70</li><li>Dal and Roti: $85</li><li>Rice and Salty Water: $99</li></ul>\";\r\n  content.appendChild(title);\r\n  content.appendChild(contentPara);\r\n  mainContainer.append(content);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\r\n\n\n//# sourceURL=webpack:///./src/tabs/menu.js?");

/***/ })

/******/ });