// ||| Using arrays to store other properties
//
//Arrays can also be used like objects, to store related information.
//const arr = [1, 2, 3];
//arr.property = "value";
//console.log(arr.property);  // Logs "value"
//
// ||| creating
//
//The following statements create equivalent arrays:
//let arr = new Array(element0, element1, ..., elementN)
//let arr = Array(element0, element1, ..., elementN)
//let arr = [element0, element1, ..., elementN]
//
//
//let arr = [42]       // Creates an array with only one element:
//                     // the number 42.
//
//let arr = Array(42)  // Creates an array with no elements
//                     // and arr.length set to 42.
//                     //
//                     // This is equivalent to:
//let arr = []
//arr.length = 42
//
//
//let array = ['HTML', 'CSS']
//
// ||| assignments
//
//array[0] = 'XML'
//console.log(array[0])
//
// ||| push
//
////adds to end, returns the new length
//console.log(array.push('JAVASCRIPT'))
//console.log(array)
//
////adds to start, returns the new length
//console.log(array.unshift('FIRST'))
//console.log(array)
//
//// ||| delete
//
////deletes the end, returns deleted element- returns undefined if it is empty
//console.log(array.pop())
//console.log(array)
//
////deletes the first, returns deleted element- returns undefined if it is empty
//console.log(array.shift())
//console.log(array)
//
////deleting specific one
//function removeElement (array, toBeDeleted) {
//  return array.filter(function (element) {
//    return element !== toBeDeleted
//  })
//}
//
//array = removeElement(
//  array,
//  'HTML',
//)
//console.log(array)
//
// ||| in
//
////it refers value names ({0: HTML, 1: CSS, 2: JAVASCRIPT})
////actually, in this case, it refers to indexes but, in document, it refers to value names
//console.log(0 in array)
//console.log(1 in array)
//console.log(2 in array)
//console.log(3 in array)
//console.log('length' in array)
//
//// ||| typeof, instanceof
//
//console.log(array instanceof Array)
//console.log(typeof array)
//
// ||| length
//
//let cats = []
//cats[30] = ['Dusty']
//console.log(cats.length) // 31
//
//let cats = ['Dusty', 'Misty', 'Twiggy']
//console.log(cats.length)  // 3
//
//cats.length = 2
//console.log(cats)  // logs "Dusty, Misty" - Twiggy has been removed
//
//cats.length = 0
//console.log(cats)  // logs []; the cats array is empty
//
//cats.length = 3
//console.log(cats)  // logs [ <3 empty items> ]
//
// ||| iterating
//
//const colors = ['red', 'green', 'blue']
////colors -> [{1: red, 2: green, 3: blue}]
//for (const index in colors)
//  console.log(index)
//
//for (const color of colors)
//  console.log(color)
//
//for (const [key, value] of colors.entries())
//  console.log(key, value)
//
//colors.forEach(color => console.log(color))
//
// |||| Array.prototype
//
////Some JavaScript objects, such as the NodeList returned by document.getElementsByTagName() or
////the arguments object made available within the body of a function, look and behave like
////arrays on the surface but do not share all of their methods. The arguments object provides a
////length attribute but does not implement the forEach() method, for example.
////Array methods cannot be called directly on array-like objects.
//function printArguments() {
//	arguments.forEach(function(item) {  // TypeError: arguments.forEach is not a function
//		console.log(item)
//	})
//}
//
////But you can call them indirectly using Function.prototype.call().
//function printArguments() {
//	Array.prototype.forEach.call(arguments, function(item) {
//		console.log(item)
//	})
//}
//
////Array prototype methods can be used on strings as well, since they provide sequential access
//// to their characters in a similar way to arrays:
//Array.prototype.forEach.call('a string', function(chr) {
//	console.log(chr)
//})
//
// ||| array functions
//
// |||| toString
//
//const array = [1, 2, 3, 4, 5]
//console.log(array.toString())
//
// |||| map
//
//const array = [
//  'Hydrogen',
//  'Helium',
//  'Lithium',
//  'Beryllium'
//]
//
//const firstMapped = array.map(
//  function (element, index) {
//    return index + '#' + element
//  }
//)
//console.log(firstMapped)
//
//const secondMapped = array.map(element => element.length)
//console.log(secondMapped)
//
// |||| filter
//
////filter(callback[, thisObject]) returns a new array containing the items for which callback returned true.
//let a1 = ['a', 10, 'b', 20, 'c', 30]
//let a2 = a1.filter(function(item) {
//	return typeof item === 'number'
//})
//console.log(a2)  // logs [10, 20, 30]
//
// |||| concat, join, sort
//
//concat() joins two or more arrays and returns a new array.
//let myArray = new Array('1', '2', '3')
//myArray = myArray.concat('a', 'b', 'c')
//// myArray is now ["1", "2", "3", "a", "b", "c"]
//
////join(delimiter = ',') joins all elements of an array into a string.
//let myArray = new Array('Wind', 'Rain', 'Fire')
//let list = myArray.join(' - ') // list is "Wind - Rain - Fire"
//
////sort() sorts the elements of an array in place, and returns a reference to the array.
//let myArray = new Array('Wind', 'Rain', 'Fire')
//myArray.sort()
//// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
//
//sort() can also take a callback function to determine how array elements are compared.
//let sortFn = function(a, b) {
//	if (a[a.length - 1] < b[b.length - 1]) return -1;
//	if (a[a.length - 1] > b[b.length - 1]) return 1;
//	if (a[a.length - 1] == b[b.length - 1]) return 0;
//}
//myArray.sort(sortFn)
//// sorts the array so that myArray = ["Wind","Fire","Rain"]
//
// |||| finding index
//
//indexOf(searchElement[, fromIndex])
//lastIndexOf(searchElement[, fromIndex])
//
// |||| every, some
//
//every(callback[, thisObject]) returns true if callback returns true for every item in the array.
//some(callback[, thisObject]) returns true if callback returns true for at least one item in the array.
//
// |||| reduce
//
//for the purpose of reducing the list of items down to a single value.
//let a = [10, 20, 30]
//let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)
//console.log(total) // Prints 60

// ||| typed arrays

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#typed_arrays:
// JavaScript typed arrays are array-like objects and provide a mechanism for accessing raw binary data. As you already know, Array objects grow and shrink dynamically and can have any JavaScript value. JavaScript engines perform optimizations so that these arrays are fast. However, as web applications become more and more powerful, adding features such as audio and video manipulation, access to raw data using WebSockets, and so forth, it has become clear that there are times when it would be helpful for JavaScript code to be able to quickly and easily manipulate raw binary data in typed arrays.
// To achieve maximum flexibility and efficiency, JavaScript typed arrays split the implementation into buffers and views. A buffer (implemented by the ArrayBuffer object) is an object representing a chunk of data; it has no format to speak of, and offers no mechanism for accessing its contents. In order to access the memory contained in a buffer, you need to use a view. A view provides a context — that is, a data type, starting offset, and number of elements — that turns the data into an actual typed array.
// ArrayBuffer
// The ArrayBuffer is a data type that is used to represent a generic, fixed-length binary data buffer. You can't directly manipulate the contents of an ArrayBuffer; instead, you create a typed array view or a DataView which represents the buffer in a specific format, and use that to read and write the contents of the buffer.
// Typed array views
// Typed array views have self descriptive names and provide views for all the usual numeric types like Int8, Uint32, Float64 and so forth. There is one special typed array view, Uint8ClampedArray, which clamps the values between 0 and 255. This is useful for Canvas data processing, for example.