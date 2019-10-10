const lowerCase = require('./ex01')
const upperCase = require('./ex02')
const length = require('./ex03')
const capitalize = require('./ex04')
const decapitalize = require('./ex05')
const kebabCase = require('./ex06')
const snakeCase = require('./ex07')
const swapCase = require('./ex08')
const charAt = require('./ex09')
const first = require('./ex10')
const last = require('./ex11')
const substr = require('./ex12')
const slice = require('./ex13')
const count = require('./ex14')
const countSubstring = require('./ex15')

console.log('lowerCase');
console.log(lowerCase('Chopper'));
console.log(lowerCase('TONY TONY'));
console.log("end \n")

console.log('upperCase');
console.log(upperCase('Chopper'));
console.log(upperCase('TONY TONY'));
console.log("end \n")

console.log('Length');
console.log(length('ch0pper'));
console.log("end \n")

console.log('capitalize')
console.log(capitalize('one Code', false))
console.log(capitalize('one CODE', true))
console.log("end \n")

console.log('decapitalize')
console.log(decapitalize("Woonan"))
console.log(decapitalize("El drago"))
console.log("end \n")

console.log('kebabCase')
console.log(kebabCase('love one code'))
console.log(kebabCase('LoveOneCode'))
console.log(kebabCase('-Love-One-Code-'))
console.log("end \n")

console.log('snakecase')
console.log(snakeCase('gold g roger'))
console.log(snakeCase('GoldGRoger'))
console.log(snakeCase('-Gold-G-Roger-'))
console.log("end \n")

console.log('swapCase')
console.log(swapCase('One Code'))
console.log(swapCase('1337 Fruits'))
console.log("end \n")

console.log('charAt')
console.log(charAt('chopper', 0))
console.log(charAt('chopper', 1))
console.log("end \n")

console.log('first')
console.log(first('chopper'))
console.log(first('chopper', 2))
console.log(first('tony', 7))
console.log("end \n")

console.log('last')
console.log(last('chopper'))
console.log(last('chopper', 2))
console.log(last('tony', 5))
console.log("end \n")

console.log('substr')
console.log(substr('tony tony chopper', 10))
console.log(substr('ch0pper', 2, 10))
console.log("end \n")

console.log('substr')
console.log(slice('ch0pper', 1))
console.log(slice('ch0pper', -4))
console.log(slice('ch0pper', 1, 4))
console.log("end \n")