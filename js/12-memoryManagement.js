// ||| the mechanism

// let x = { a: { b: 2 } }
// let y = x
// let z = x.a
// let k = x.a.b
//
// x.a.b = 3
//
// console.log(x.a.b)
// console.log(y.a.b)
// console.log(z.b)
// console.log(k)
//
// // x = null
// // delete x
// // delete x.a
// // delete x.a.b
//
// console.log(y.a.b)
// console.log(z.b)
// console.log(k)

// ||| circular references

// //the reference-counting algorithm will not consider them reclaimable since each of the two
// //objects has at least one reference pointing to them, resulting in neither of them being
// //marked for garbage collection. Circular references are a common cause of memory leaks.
// function f() {
// 	var x = {};
// 	var y = {};
// 	x.a = y;        // x references y
// 	y.a = x;        // y references x
//
// 	return 'azerty';
// }
//
// f();

// ||| Mark-and-sweep algorithm

//This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable".