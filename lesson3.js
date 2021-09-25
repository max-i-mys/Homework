// 1) Написать функцию, которая раскладывает число на входе на простые множители

// а) В императивном стиле
function getFactorsImp(n) {
	const factors = []
	if (n && n > 1) {
		for (let i = 2; i <= n; i++) {
			while (n % i === 0) {
				factors.push(i)
				n /= i
			}
		}
	}
	return factors
}

// б) В декларативном стиле:
function getFactorsDecl(n, factors = [], i = 2) {
	if (n && n > 1) {
		if (n % i === 0) {
			return getFactorsDecl(n / i, [...factors, i])
		} else {
			return getFactorsDecl(n, factors, ++i)
		}
	}
	return factors
}

// 2) Реализуйте класс Validator, который будет иметь методы isEmail, isUrkainianPhoneNumber и isDate,
// которые будут возвращать true, если переданная строка является имейлом(включает в себя @ и домен),
// датой(в формате YYYY-MM-DD), номером телефона (включает в себя код Украины +38 и номер из 10 цифр)

class Validator {
	isEmail(str) {
		const reg = new RegExp(/.+\@.+\..+/)
		return reg.test(str)
	}
	isUrkainianPhoneNumber(str) {
		const reg = new RegExp(/(^\+38)(\d{10})$/)
		return reg.test(str)
	}
	isDate(str) {
		const reg = new RegExp(
			/^((((0[1-9])|([1-2][0-9])|(3[0-1]))|([1-9]))-(((0[1-9])|(1[0-2]))|([1-9]))-(([0-9]{2})|(((19)|([2]([0]{1})))([0-9]{2}))))$/
		)
		return reg.test(str)
	}
}
