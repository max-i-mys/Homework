// 1. Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
	let timer = setInterval(() => {
		if (from <= to) {
			console.log(from)
			from++
		} else {
			clearInterval(timer)
		}
	}, 1000)
}

function printNumbersRecur(from, to) {
	let timer = setTimeout(function step() {
		if (from <= to) {
			console.log(from)
			from++
			setTimeout(step, 1000)
		} else {
			clearTimeout(timer)
		}
	}, 1000)
}
// 2. Напишите часы с использованием setInterval (с выводом в консоль), при каждом новом выводе (каждую секунду) очищать сонсоль (console.clear)

function clock() {
	let hours = 0
	let minutes = 0
	let seconds = 0

	let timer = setInterval(() => {
		seconds++
		if (seconds === 60) {
			seconds = 0
			minutes++
		}
		if (minutes === 60) {
			minutes = 0
			hours++
		}
		if (hours === 24) {
			hours = 0
		}
		console.clear()
		console.log(
			`${formatNumbers(hours)}:${formatNumbers(minutes)}:${formatNumbers(
				seconds
			)}`
		)
	}, 1000)
}

function formatNumbers(num) {
	return num >= 0 && num <= 9 ? `0${num}` : `${num}`
}
// Следующие задачи могут быть сложными, поэтому можно найти решение в интернете и разобрать, как они работают

// *3. Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

function debounce(f, ms) {
	let isCooldown = false

	return function () {
		if (isCooldown) return

		f.apply(this, arguments)

		isCooldown = true

		setTimeout(() => (isCooldown = false), ms)
	}
}

let f = debounce(console.log, 1000)

f(1) // выполняется немедленно
f(2) // проигнорирован

setTimeout(() => f(3), 100) // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100) // выполняется
setTimeout(() => f(5), 1500) // проигнорирован (прошло только 400 мс от последнего вызова)

// *4. Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд.
// Те вызовы, которые попадают в период «торможения», игнорируются.

// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

function throttle(func, ms) {
	let isThrottled = false,
		savedArgs,
		savedThis

	function wrapper() {
		if (isThrottled) {
			// (2)
			savedArgs = arguments
			savedThis = this
			return
		}

		func.apply(this, arguments) // (1)

		isThrottled = true

		setTimeout(function () {
			isThrottled = false // (3)
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs)
				savedArgs = savedThis = null
			}
		}, ms)
	}

	return wrapper
}

function fnc(a) {
	console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000)

f1000(1) // показывает 1
f1000(2) // (ограничение, 1000 мс ещё нет)
f1000(3) // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
