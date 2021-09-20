// 1) Написать функцию, которая принимает на вход 2 массива. На выходе функция должна выдать элемент,
// который в обоих массивах повторялся чаще всего
// Пример:
// 		Исходные массивы: [1, 2, 3, 3, 'a','test'], ['test', 2, 7,'a','a']
// Результат выполнения: yourFunc([1, 2, 3, 3, 'a', 'test'], ['test', 2, 7,  'a', 'a']) // 'a'

const findTheMostCommonEl = (firstArr, secondArr) => {
	const commonArr = [...firstArr, ...secondArr]
	let maxCount = 0
	let result = []
	const dataObj = commonArr.reduce((accum, current) => {
		accum[current] = (accum[current] || 0) + 1
		maxCount = maxCount < accum[current] ? accum[current] : maxCount
		return accum
	}, {})
	for (let key in dataObj) {
		if (dataObj[key] === maxCount) {
			result.push(key)
		}
	}
	return result.join(",")
}

// 2) Написать функцию, которая принимает на входе массив и на выходе выдает новый массив без дублирующихся элементов
// Пример:
// 		Исходный массив: [1, 2, 3, 3, 'a', 'test']
// Результат выполнения: yourFunc([1, 2, 3, 3, 'a', 'test']) // [1, 2, 3, 'a', 'test']

const createUniqueArray = array => {
	return [...new Set(array)]
}

// 3) задача со звездочкой. Написать функцию, которая принимает на вход массив чисел,
// а на выходе выдает новый массив, который содержит эти же числа в сокращенном виде
// (1000 = 1К, 1000000 = 1М, 1000000000 = 1В), округленные до двух чисел после запятой по правилам округления
// (числа <=4 округляются до меньшего, числа >4 округляются до бОльшего,
// Пример: Исходный массив: [111896, 9999, 9985 1024, 999999, 1000100, 60044943]
// Результат выполнения: yourFunc([111896, 9999, 9985, 1024, 999999, 1000100, 60044943]) // [111,90K, 10K, 9,99K 1,02K, 1M, 1M, 60,05M]

const creationAbbreviatedNumbers = array => {
	return array.map(item => {
		switch (true) {
			case item >= 995 && item < 999994:
				item = Math.round((item / 1000) * 100 + 0.05) / 100
				return (Number.isInteger(item) ? item : item.toFixed(2)) + "K"
			case item >= 999995 && item < 999999994:
				item = Math.round((item / 1000000) * 100 + 0.05) / 100
				return (Number.isInteger(item) ? item : item.toFixed(2)) + "M"
			case item >= 999999995 && item < 999999999994:
				item = Math.round((item / 1000000000) * 100 + 0.05) / 100
				return (Number.isInteger(item) ? item : item.toFixed(2)) + "B"
			default:
				return item
		}
	})
}
