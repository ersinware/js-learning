// ||| declarations

// // it can be accessed from another file
// var globalVariable = 10
// // they cannot be accessed from another file
// let letValue = 'let value' // -> mutable
// const constValue = 'const value'; // -> read only
//
// const first = second = 1
// const third = 3, fourth = 4
//
// // the difference is that technically, a simple assignment as globalVar = 'something'; doesn't declare a variable,
// // that assignment will just create a property on the global object, and the fact that the global object is the last object in the scope chain, makes it resolvable.
// myName = 'Ersin'
// console.log(myName)
//
// var myName = 'Ersin2'
// console.log(myName)

// ||| strings

// let fullName = 'Ersin'
// //fullName = fullName + ' Karaer'
// //or
// fullName += ' Karaer'
// console.log(fullName)
//
// const string = 'string value'
// console.log(string[0])
//
// console.log(string.length)
//
// console.log(string.indexOf('val'))
// console.log(string.indexOf('e'))
// console.log(string.indexOf('s'))
//
// console.log(string.slice(0, 6))
// console.log(string.slice(7, 12))
// console.log(string.slice(0))
// console.log(string.slice(7))
//
// console.log(string.toLowerCase())
// console.log(string.toLocaleLowerCase())
// console.log(string.toUpperCase())
// console.log(string.toLocaleUpperCase())
//
// console.log(string.replace('value', 'thing'))
//
// const string2 = '1,2,3,4,5'
// const array = string2.split(',')
// console.log(array)
//
// const string3 = array.join(',')
// console.log(string3)

// ||| template literals

// // you have to use ` not '
// const first = 1
// const second = 2
// console.log(`first: ${first}, third: ${second}`)
// console.log(`today's date is ${new Date().toDateString()}`)
//
// const score = 50
// console.log(`${score >= 70 ? 'pass' : 'fail'}`)

// ||| numbers

// |||| octal, hexadecimal, binaries, exponentiation and modulo

// //octal start with 0o or 0O
// console.log(0O777)
//
// //binaries start with 0b or 0B
// console.log(0b10000000000000000000000000000000)
// console.log(0b01111111100000000000000000000000)
// console.log(0B00000000011111111111111111111111)
//
// //hexadecimals start with 0x or 0X
// console.log(0xFFFFFFFFFFFFFFFFF)
// console.log(0x123456789ABCDEF)
// console.log(0XA)
//
//
// //2^3
// console.log(2 ** 3)
//
// //adds three zero to 2
// console.log(2e3)
// console.log(2E10)
//
// console.log(5 % 2)

// |||| min, max, nan

//console.log(Number.MAX_VALUE)
//console.log(Number.MAX_SAFE_INTEGER)
//console.log(Number.MIN_VALUE)
//console.log(Number.MIN_SAFE_INTEGER)
//console.log(Number.POSITIVE_INFINITY)
//console.log(Number.NEGATIVE_INFINITY)
//console.log(Number.NaN)

// |||| decimals

// const lotsOfDecimal = 1.21321378213
// console.log(lotsOfDecimal)
// console.log(lotsOfDecimal.toFixed(2))

// |||| string numbers, conventions

// const stringNumber = '74'
// console.log(stringNumber + 3)
// console.log(typeof stringNumber)
//
// const number = Number(stringNumber) + 3
// console.log(number)
// console.log(typeof number)
//
// const stringified = number.toString()
// console.log(stringified)
// console.log(typeof stringified)
//
// // Note: Additionally, a best practice for parseInt is to always include the radix parameter.
// // The radix parameter is used to specify which numerical system is to be used.
// console.log(parseInt('101', 2))

// |||| increments, decrements

//let myNumber = 10
//console.log(myNumber--)
//console.log(myNumber)
//console.log(++myNumber)
//
//console.log(myNumber--)
//console.log(myNumber)
//console.log(--myNumber)

// ||| equality checks

// const stringNumber = '75'
// const number = 75
// const number2 = 75
// console.log(stringNumber == number)
// console.log(number2 == number)
// console.log(stringNumber === number)
// console.log(number2 === number)

// ||| Falsy values

// The following values evaluate to false (also known as Falsy values):
// false
// undefined
// null
// 0
// NaN
// the empty string ("")
// All other values —including all objects— evaluate to true when passed to a conditional statement

// const value = 'non-null'
// if (value) console.log('not null')
// else console.log('null')
//
// const nullValue = null
// let ifNull = nullValue ? 'non-null' : 'null'
// console.log(ifNull)
// ifNull = nullValue === null ? 'null' : 'non-null'
// console.log(ifNull)
//
// //it assigns which one is not null (x || x expressions returns)
// const notNull = 'non-null' || null
// console.log(notNull)

// ||| escaping characters

//const escaping = 'my name is \'Ersin\''
//console.log(escaping)
