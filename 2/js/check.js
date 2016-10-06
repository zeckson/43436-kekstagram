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
	
		if (a = Boolean) {
			console.info('Переданное GIF-изображение анимировано и содержит [b] кадров');
			if (false) {
				console.info('Переданное GIF-изображение не анимировано');
			}
	
		} else if (a = number) {
			console.info('Переданное SVG-изображение содержит ' + a + '  объектов и ' + (b * 4) + ' атрибутов');
	
		} else if (Array.isArray(a)) {
			// var amountOfRedPoints = a.reduce(function(sum, current) {
			// 	return sum + current;
			// }, 0);
	
			var amountOfRedPoints = 0;
			for (var i = 0; i < a.length; i++) {
				amountOfRedPoints = amountOfRedPoints + parseInt(arr[i]);
			}
	
			console.info('Количество красных точек во всех строчках изображения: ' + amountOfRedPoints);
	
		} else if (Array.isArray(a) && Array.isArray(b)) {
			console.info('Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей');
		} else {
			console.info('Переданы некорректные данные');
		}
	}
	
	// Если первый аргумент, a, имеет тип boolean, то:
	//     Если он true, вернуть строку, в которую подставлен параметр b:
	//         "Переданное GIF-изображение анимировано и содержит [b] кадров"
	//     Если он false, то вернуть строку:
	//         "Переданное GIF-изображение не анимировано"
	
	// Если первый аргумент имеет числовой тип, то вернуть строку:
	//     "Переданное SVG-изображение содержит [a] объектов и [b * 4] атрибутов"
	
	// Если первый аргумент массив, то вернуть строку:
	//     "Количество красных точек во всех строчках изображения: [amountOfRedPoints]"
	//     где [amountOfRedPoints] — это сумма значений переданного массива
	
	// Если оба аргумента массивы, то вернуть строку:
	//     "Общая площадь артефактов сжатия: [artifactsSquare] пикселей"
	//     где [artifactsSquare] — это сумма произведений соответствующих элементов массивов a и b,
	//     cумма произведения первого элемента a с первым элементом b, второго со вторым и так далее
	
	// Во всех иных случаях, следует вывести сообщение — "Переданы некорректные данные"

/***/ }
/******/ ]);
//# sourceMappingURL=check.js.map?dropcache