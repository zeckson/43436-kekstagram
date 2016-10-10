/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	function getMessage(a, b) {
	
		if (typeof a === 'boolean') {
			if (a === true) {
				return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
			} else {
				return 'Переданное GIF-изображение не анимировано';
			}
	
		} else if (typeof a === 'number') {
			return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' атрибутов';
	
		} else if (Array.isArray(a) && !Array.isArray(b)) {
			var amountOfRedPoints = 0;
			for (var i = 0; i < a.length; i++) {
				amountOfRedPoints = amountOfRedPoints + a[i];
			}
			return 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;
	
		} else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length === b.length) {
				var artifactsSquare = 0;
				for (var i = 0; i < a.length; i++) {
					artifactsSquare += a[i] * b[i];
				}
				return 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей';
			} else {
				return 'Длины массивов не совпадают';
			}
	
		} else {
			return 'Переданы некорректные данные';
		}
	}

/***/ }
/******/ ]);
//# sourceMappingURL=check.js.map?dropcache