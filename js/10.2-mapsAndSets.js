// ||| normal map
//
//let sayings = new Map()
//sayings.set('dog', 'woof')
//sayings.set('cat', 'meow')
//sayings.set('elephant', 'toot')
//sayings.size // 3
//sayings.get('dog') // woof
//sayings.get('fox') // undefined
//sayings.has('bird') // false
//sayings.delete('dog')
//sayings.has('dog') // false
//
//for(let [key, value] of sayings) {
//	console.log(key + ' goes ' + value)
//}
//// "cat goes meow"
//// "elephant goes toot"
//
//sayings.clear()
//sayings.size // 0
//
// ||| weak map
//
//The WeakMap object is a collection of key/value pairs in which the keys are objects only and
//the values can be arbitrary values.
//One difference to Map objects is that WeakMap keys are not enumerable (i.e., there is no
//method giving you a list of the keys).
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object
//
// ||| normal set
////
////A value in a Set may only occur once; it is unique in the Set's collection.
//let mySet = new Set()
//mySet.add(1)
//mySet.add('some text')
//mySet.add('foo')
//
//mySet.has(1) // true
//mySet.delete('foo')
//mySet.size // 2
//
//for(let item of mySet)
//	console.log(item)
//// 1
//// "some text"
//
// |||| Converting between Array and Set
//You can create an Array from a Set using Array.from or the spread syntax. Also, the Set
//constructor accepts an Array to convert in the other direction.
//Array.from(mySet);
//[...mySet2];
//
//mySet2 = new Set([1, 2, 3, 4]);
//
// ||| weak set
//
//WeakSet objects are collections of objects. An object in the WeakSet may only occur once. It
//is unique in the WeakSet's collection, and objects are not enumerable.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakset_object