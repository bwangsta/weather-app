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

/***/ "./src/WeatherData.js":
/*!****************************!*\
  !*** ./src/WeatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction WeatherData() {\n    const API_KEY = \"889bd5d996785963fb222accad1e7be3\"\n    async function fetchWeatherData(city) {\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)\n        const data = await response.json()\n\n        return data\n    }\n\n    return {\n        fetchWeatherData\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherData);\n\n//# sourceURL=webpack://weather-app/./src/WeatherData.js?");

/***/ }),

/***/ "./src/WeatherUI.js":
/*!**************************!*\
  !*** ./src/WeatherUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction WeatherUI() {\n    async function displayCurrentWeather(data) {\n        const currentWeather = document.querySelector(\".current-weather-info\")\n        const cityName = document.createElement(\"p\")\n        const currentTemp = document.createElement(\"p\")\n        const minTemp = document.createElement(\"p\")\n        const maxTemp = document.createElement(\"p\")\n\n        cityName.textContent = data.name\n        currentTemp.textContent = data.main.temp\n        minTemp.textContent = data.main.temp_min\n        maxTemp.textContent = data.main.temp_max\n\n        currentWeather.append(\n            cityName,\n            currentTemp,\n            minTemp,\n            maxTemp\n        )\n    }\n\n    return {\n        displayCurrentWeather\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherUI);\n\n//# sourceURL=webpack://weather-app/./src/WeatherUI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherData */ \"./src/WeatherData.js\");\n/* harmony import */ var _WeatherUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherUI */ \"./src/WeatherUI.js\");\n\n\n\nconst searchBtn = document.querySelector(\".search-btn\")\nconst searchInput = document.querySelector(\".search-input\")\n\n// searchBtn.addEventListener(\"click\", async (e) => {\n//     e.preventDefault()\n//     const data = await fetchWeatherData(searchInput.value)\n//     displayCurrentWeather(data)\n// })\n\nconst weatherData = (0,_WeatherData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\nconst weatherUI = (0,_WeatherUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\nweatherData.fetchWeatherData(\"London\").then((data) => {\n    weatherUI.displayCurrentWeather(data)\n})\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;