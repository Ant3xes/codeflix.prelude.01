// const lowerCase = require('./ex01')
// const upperCase = require('./ex02')
// const length = require('./ex03')
// const capitalize = require('./ex04')
// const decapitalize = require('./ex05')
// const kebabCase = require('./ex06')
// const snakeCase = require('./ex07')
// const swapCase = require('./ex08')
// const charAt = require('./ex09')
// const first = require('./ex10')
// const last = require('./ex11')
// const substr = require('./ex12')
// const slice = require('./ex13')
// const count = require('./ex14')
// const countSubstring = require('./ex15')
const countWords = require('./ex16')
// const indexOf = require('./ex17')
// const lastIndexOf = require('./ex18')
// const insert = require('./ex19')
// const repeat = require('./ex20')
// const reverse = require('./ex21')
// const splice = require('./ex22x')
// const trim = require('./ex23x')
// const endWith = require('./ex24')
// const includes = require('./ex25')
// const isAlpha = require('./ex26')
// const isString = require('./ex34')
const chars = require('./ex36')
const split = require('./ex37')
// const words = require('./ex38x')
const escapeHtml = require('./ex39')
const unescapeHtml = require('./ex40')
const escapeRegExp = require('./ex41')
const unescapeRegExp = require('./ex42')

// console.log('lowerCase');
// console.log(lowerCase('Chopper'));
// console.log(lowerCase('TONY TONY'));
// console.log("end \n")

// console.log('upperCase');
// console.log(upperCase('Chopper'));
// console.log(upperCase('TONY TONY'));
// console.log("end \n")

// console.log('Length');
// console.log(length('ch0pper'));
// console.log("end \n")

// console.log('capitalize')
// console.log(capitalize('one Code', false))
// console.log(capitalize('one CODE', true))
// console.log("end \n")

// console.log('decapitalize')
// console.log(decapitalize("Woonan"))
// console.log(decapitalize("El drago"))
// console.log("end \n")

// console.log('kebabCase')
// console.log(kebabCase('love one code'))
// console.log(kebabCase('LoveOneCode'))
// console.log(kebabCase('-Love-One-Code-'))
// console.log("end \n")

// console.log('snakecase')
// console.log(snakeCase('gold g roger'))
// console.log(snakeCase('GoldGRoger'))
// console.log(snakeCase('-Gold-G-Roger-'))
// console.log("end \n")

// console.log('swapCase')
// console.log(swapCase('One Code'))
// console.log(swapCase('1337 Fruits'))
// console.log("end \n")

// console.log('charAt')
// console.log(charAt('chopper', 0))
// console.log(charAt('chopper', 1))
// console.log("end \n")

// console.log('first')
// console.log(first('chopper'))
// console.log(first('chopper', 2))
// console.log(first('tony', 7))
// console.log("end \n")

// console.log('last')
// console.log(last('chopper'))
// console.log(last('chopper', 2))
// console.log(last('tony', 5))
// console.log("end \n")

// console.log('substr')
// console.log(substr('tony tony chopper', 10))
// console.log(substr('ch0pper', 2, 10))
// console.log("end \n")

// console.log('slice')
// console.log(slice('ch0pper', 1))
// console.log(slice('ch0pper', -4))
// console.log(slice('ch0pper', 1, 4))
// console.log("end \n")

// console.log('substr')
// console.log(slice('ch0pper', 1))
// console.log(slice('ch0pper', -4))
// console.log(slice('ch0pper', 1, 4))
// console.log("end \n")

console.log('countWords')
console.log(countWords('Tony Tony Ch0pper'))
console.log(countWords('TonyTonyCh0pper'))
console.log(countWords('Tony Tony - Ch0pper'))
console.log("end \n")

// console.log('indexOf')
// console.log(indexOf('ch0pper', '0'))
// console.log(indexOf('ch0pper', 'o'))
// console.log("end \n")

// console.log('lastIndexOf')
// console.log(lastIndexOf('ch0pper', 'p'))
// console.log(lastIndexOf('ch0pper', 'o'))
// console.log("end \n")

// console.log('insert')
// console.log(insert('chpper', '0', 2))
// console.log(insert('Tony', ' Tony Ch0pper', 4))
// console.log("end \n")

// console.log('repeat')
// console.log(repeat('w', 3))
// console.log(repeat('gomu', 0))
// console.log("end \n")

// console.log('reverse')
// console.log(reverse('ch0pper', 'o'))
// console.log("end \n")

// console.log('splice')
// console.log(splice('Tony Tony Ch0pper', 0, 10))
// console.log(splice('Tony Ch0pper', 0, 4, 'Tony Tony'))
// console.log(splice('Tony Tony Usopp', -5, 5, 'Ch0pper'))
// console.log("end \n")

// console.log('trim')
// console.log(trim(' Tony Tony Ch0pper '))
// console.log(trim('--Tony Tony Ch0pper--', '-'))
// console.log("end \n")

// console.log('endWith')
// console.log(endWith('Tony Tony Ch0pper', 'Ch0pper'))
// console.log(endWith('Tony Tony Ch0pper', 0, 4, 'Tony Tony'))
// console.log(endWith('Ch0pper', 'h0', 3))
// console.log("end \n")

// console.log('includes')
// console.log(includes('Ch0pper', 'pper'))
// console.log(includes('Ch0pper', 'h0', 3))
// console.log("end \n")

// console.log('isAlpha')
// console.log(isAlpha('Chopper'))
// console.log(isAlpha('Ch0pper!'))
// console.log(isAlpha('Ch0pper and Usopp'))
// console.log("end \n")

// console.log('isString')
// console.log(isString('chopper'))
// console.log(isString(1337))
// console.log("end \n")

console.log('chars')
console.log(chars('ch0pper'))
console.log("end \n")

console.log('split')
console.log(split('Tony Tony Ch0pper', ' '))
console.log(split('Gomu Gomu no bazooka', /\s/, 2))
console.log("end \n")

// console.log('words')
// console.log(words('Tony Tony Ch0pper'))
// console.log(words('TonyTonyCh0pper'))
// console.log(words('Tony - Tony - Ch0pper'))
// console.log("end \n")

console.log('escapeHtml')
console.log(escapeHtml('<p>I love programming</p>'))
console.log("end \n")

console.log('unescapeHtml')
console.log(unescapeHtml('%3Cp%3EI%20love%20programming%3C/p%3E'))
console.log("end \n")

console.log('escapeRegExp')
console.log(escapeRegExp('(Tony)[Tony]{Ch0pper}'))
console.log("end \n")


console.log('unescapeRegExp')
console.log(unescapeRegExp('\(Tony\)\[Tony\]\{Ch0pper\}'))
console.log("end \n")

