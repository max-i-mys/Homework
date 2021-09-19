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