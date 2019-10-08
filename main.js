const lowerCase = require('./ex01')
const upperCase = require('./ex02')
const length = require('./ex03')
const capitalize = require('./ex04')
const decapitalize = require('./ex05')
const kebabCase = require('./ex06')

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

console.log('decapitalize')
console.log(kebabCase('love one code'))
console.log(kebabCase('LoveOneCode'))
console.log(kebabCase('-Love-One-Code-'))
console.log("end \n")