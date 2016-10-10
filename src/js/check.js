function getMessage(a, b) {

	if (typeof a === 'boolean') {
		if (true) {
			return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
		} else {
			return 'Переданное GIF-изображение не анимировано';
		}

	} else if (typeof a === 'number') {
		if (true) {
			return 'Переданное SVG-изображение содержит ' + a + '  объектов и ' + (b * 4) + ' атрибутов';
		}

	} else if (Array.isArray(a)) {
		// var amountOfRedPoints = a.reduce(function(sum, current) {
		// 	return sum + current;
		// }, 0);
		if (true) {
			var amountOfRedPoints = 0;
			for (var i = 0; i < a.length; i++) {
				amountOfRedPoints = amountOfRedPoints + parseInt(a[i]);
			}
			return 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;
		}

	} else if (Array.isArray(a) && Array.isArray(b)) {

		if (a.length === b.length) {
			var artifactsSquare = 0;
			for (var i = 0; i < a.length; i++) {
				artifactsSquare += a[i] * b[i]
			}
			return 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей';
		}

	} else {
		return 'Переданы некорректные данные';
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