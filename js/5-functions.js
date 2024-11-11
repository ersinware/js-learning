// ||| random
//
//0 ile 100 arasında sayı üretme
//console.log(Math.floor(Math.random() * 100) + 1)
//
// ||| functions and lambdas

// const mFun = function() {
//     console.log('mFun is called')
// }
// mFun()
//
// const mLambda = (mParameter) => {
//     console.log(`mLambda is called, mParameter: ${mParameter}`)
// }
// mLambda('parameter')
//
// function higherOrderFunction(mLambda) {
//     mLambda('parameter from higherOrderFunction')
// }
//
// higherOrderFunction(mLambda)
//
// higherOrderFunction((mParameter) => {
//     console.log(`mLambda is called, mParameter: ${mParameter}`)
// })
//
// higherOrderFunction(function(mParameter) {
//     console.log(`mLambda is called, mParameter: ${mParameter}`)
// })

// ||| nested functions

// function addSquares(a, b) {
//     function square(x) {
//         return x * x
//     }
//
//     return square(a) + square(b)
// }
//
// console.log(addSquares(2, 3))
// console.log(addSquares(5, 10))

// ||| unnamed and just-in-called functions

// void function() {
//     console.log('voidFunction is called')
// }();
//
// (function myFunction() {
//     console.log('myFunction is called')
// })();
//
// (function() {
//     console.log('unnamed function is called')
// })();
//
// (() => {
//     console.log('lambda is called')
// })()

// ||| functions and lambdas with default and rest parameters

//// to make a parameter optional, place it in the last
// function withDefaultParameter(parameter = 'default') {
//     console.log(`parameter: ${parameter}`)
// }
//
// withDefaultParameter()
// withDefaultParameter('my parameter')
//
// function withRestParameters(...numbers) {
//     for(const number of numbers)
//         console.log(number)
// }
//
// withRestParameters(1, 2)
// withRestParameters(1, 2, 3, 4, 5)
//
// const lambdaWithDefaultParameter = (parameter = 'default') => {
//     console.log(`parameter: ${parameter}`)
// }
// lambdaWithDefaultParameter()
// lambdaWithDefaultParameter('my parameter')
//
// const lambdaWithRestParameters = (...numbers) => {
//     for(const number of numbers)
//         console.log(number)
// }
// lambdaWithRestParameters(1, 2)
// lambdaWithRestParameters(1, 2, 3, 4, 5)

// ||| this in functions

// //no separate 'this'
// //FirstPerson = function() { // böyle de tanımlanabilir
// function FirstPerson() {
//     // The Person() constructor defines `this` as itself.
//     this.age = 0;
//
//     (function growUp() {
//         // In non-strict mode, the growUp() function defines `this` as the global object, which is different from the `this` defined by the Person() constructor.
//         this.age = 2
//         console.log('this.age on growUp: ' + this.age)
//     })()
//
//     console.log('this.age on FirstPerson: ' + this.age)
// }
//
// const firstPerson = new FirstPerson()
//
// // In ECMAScript 3/5, this issue was fixed by assigning the value in this to a variable that could be closed over.
// function SecondPerson() {
//     const self = this // Some choose `that` instead of `self`.
//     // Choose one and be consistent.
//     self.age = 0
//     this.age = 0;
//
//     (function growUp() {
//         // The callback refers to the `self` variable of which
//         // the value is the expected object.
//         self.age = 2
//         this.age = 5
//         console.log('self.age in growUp: ' + self.age)
//         console.log('this.age in growUp: ' + this.age)
//     })()
//
//     console.log('self.age on SecondPerson: ' + self.age)
//     console.log('this.age on SecondPerson: ' + this.age)
// }
//
// const secondPerson = new SecondPerson()

// ||| bind() function

// const module = {
//     x: 42,
//     getX: function() {
//         return this.x;
//     }
// };
//
// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // expected output: undefined
//
// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // expected output: 42

// ||| this in lambdas

// function myFunction() {
//     this.age = 0;
//
//     setInterval(() => {
//         this.age++; // |this| properly refers to the person object
//         console.log(this.age)
//     }, 1000);
// }
//
// myFunction()

// ||| performance considerations

// ||||

// // when creating a new object/class, methods should normally be associated to the object's
// // prototype rather than defined into the object constructor. The reason is that whenever the
// // constructor is called, the methods would get reassigned (that is, for every object creation).
// // Consider the following case:
// function MyObject(name, message) {
// 	this.name = name.toString();
// 	this.message = message.toString();
//
// 	this.getName = function() {
// 		return this.name;
// 	};
//
// 	this.getMessage = function() {
// 		return this.message;
// 	};
// }

// ||||

// function getName() {
//     return this.name
// }
//
// function getMessage() {
//     return this.message
// }
//
// function MyObject(name, message) {
// 	this.name = name.toString();
// 	this.message = message.toString();
// }
//
// MyObject.prototype.getName = getName
// MyObject.prototype.getMessage = getMessage
//
// const myObject = new MyObject("name paremeter", "message parameter")
// console.log(myObject.getName())
// console.log(myObject.getMessage())

// In the two previous examples, the inherited prototype can be shared by all objects and the method definitions need not occur at every object creation

// ||| generator function

// function* generator(i) {
//     yield i;
//     yield i + 10;
//     yield 'a'
// }
//
// const gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// |||| id maker

// function* idMaker() {
//     let index = 0
//     while(true)
//         yield index++
// }
//
// const generator = idMaker()
// console.log(generator.next().value) // 0
// console.log(generator.next().value) // 1
// console.log(generator.next().value) // 2
// console.log(generator.next().value) // 3

// |||| yield*

// function* anotherGenerator(i) {
//     yield i + 1
//     yield i + 2
//     yield i + 3
// }
//
// function* generator(i) {
//     yield i
//     yield* anotherGenerator(i)
//     yield i + 10
// }
//
// const gen = generator(10)
// console.log(gen.next().value) // 10
// console.log(gen.next().value) // 11
// console.log(gen.next().value) // 12
// console.log(gen.next().value) // 13
// console.log(gen.next().value) // 20

// |||| passing arguments into generators

// function* logGenerator() {
//     console.log(0)
//     console.log(1, yield)
//     console.log(2, yield)
//     console.log(3, yield)
// }
//
// const gen = logGenerator()
//
// //the first call of next executes from the start of the function until the first yield statement
// gen.next()                    // 0
// gen.next('pretzel')     // 1 pretzel
// gen.next('california')  // 2 california
// gen.next('mayonnaise')  // 3 mayonnaise


// |||| powers

// function* powers(n) {
//     //endless loop to generate
//     for(let current = n; ; current *= n) {
//         yield current;
//     }
// }
//
// for(let power of powers(2)) {
//     //controlling generator
//     if(power > 32) break;
//     console.log(power)
// }


// |||| return statement in a generator

// function* yieldAndReturn() {
//     yield 'Y';
//     return 'R';
//     yield 'unreachable';
// }
//
// const gen = yieldAndReturn()
// console.log(gen.next()); // { value: 'Y', done: false }
// console.log(gen.next()); // { value: 'R', done: true }
// console.log(gen.next()); // { value: undefined, done: true }
