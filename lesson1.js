const solveQuadraticEquation = array => {
	const [a, b, c] = array
	const discriminant = b ** 2 - 4 * a * c
	const equation = `${a !== 1 && a !== -1 ? a : a < 0 ? "-" : ""}x^2${
		b
			? b !== 1 && b !== -1
				? b < 0
					? `${b}x`
					: `+${b}x`
				: b > 0
				? "+x"
				: "-x"
			: ""
	}${c ? (c < 0 ? c : `+${c}`) : ""}=0;`
	const formulaX1 = (-b + Math.sqrt(discriminant)) / (2 * a)
	switch (true) {
		case a === 0: {
			console.log(`Первое значение не может быть "0"`)
			break
		}
		case discriminant === 0: {
			const x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
			console.log(
				`Уравнение: ${equation} Дискриминант: ${discriminant}; корень: x = ${x1}`
			)
			break
		}
		case discriminant > 0: {
			const x1 = formulaX1
			const x2 = (-b - Math.sqrt(discriminant)) / (2 * a)
			console.log(
				`Уравнение: ${equation} Дискриминант: ${discriminant}; корни: x1 = ${x1}, x2 = ${x2}`
			)
			break
		}
		case discriminant < 0:
			console.log(
				`Уравнение: ${equation} Дискриминант: ${discriminant}; корней нет`
			)
			break
		default:
			console.log(`Переданные значение или одно из них не является числом!`)
	}
}
