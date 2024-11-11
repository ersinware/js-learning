// ||| scope

// (() => {
//     // it can be accessed only in this scope
//     var scopedVariable = 'scoped variable'
//     console.log(scopedVariable)
// })()
//
// // ARD ARDA İKİ BLOK OLCAKSA ÜSTTEKİNİ ; İLE AYIRMAN GEREK
// var initializedValue = 'initialized value';
//
// // !!! önemli !!!
// (() => {
//     // it tries to access local variable into the scope
//     console.log(initializedValue)
//     var initializedValue = 'local value'
// })()

// ||||

// // !!! önemli !!!
// {
//     var globalValue = 'global value'
//     const blockValue = 'block value'
//
//     function blockFunction() {
//         console.log('block function is called')
//     }
// }
// // you can access the function
// blockFunction()
// // you can access the global value
// console.log(globalValue)
// // you cannot access the value
// console.log(blockValue)

// ||||

// const object = {
//     first: 'first',
//     second: 'second',
//     mFunction: () => {
//         console.log('mFunction')
//     }
// }
//
// with(object) {
//     console.log(first)
//     console.log(second)
//     mFunction()
// }

// ||||

// console.log(x); // ReferenceError
// let x = 3;

// ||||

// foo(); // "bar"
//
// function foo() {
// 	console.log('bar');
// }
//
// /* Function expression */
//
// // baz() // TypeError: baz is not a function
//
// var baz = function() {
// 	console.log('bar2');
// };
//
// baz()
