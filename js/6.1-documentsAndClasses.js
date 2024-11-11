// ||| documents
//
// |||| creating
//
// ||||| normal creating and accessing fields

// const person = {
//     name: 'name',
//     surname: 'surname',
//     interests: {
//         first: 'interest one',
//         second: 'interest two'
//     },
//     getFullName: function() {
//         return `${this.name} ${this.surname}`
//     },
//     getNameAndSurname() {
//         return `${this.name} ${this.surname}`
//     }
// }
// console.log(person.hasOwnProperty('name'))
// console.log(person.name)
// console.log(person.getFullName())
// console.log(person.getNameAndSurname())
//
// console.log(person.interests.first)
// person['interests']['first'] = 'new interest';
// console.log(person.interests.first)
//
// // you can also create completely new members.
// person.newValue = 'new value'
// // person['newValue'] = 'new value' -> the same
//
// console.log(person.newValue)
// console.log(person['newValue'])

// ||||| creating by function

// function createNewPerson(name) {
//     return {
//         name: name,
//         surname: 'surname',
//         getFullName: function() {
//             return `${this.name} ${this.surname}`
//         },
//         greeting() {
//             console.log('greetings')
//         }
//     }
// }
//
// const newPerson = createNewPerson('person name')
// console.log(newPerson.name)
// console.log(newPerson.getFullName())
// newPerson.greeting()

// ||||| adding function after creating

// const manager = {
//     name: 'John',
//     age: 27,
//     job: 'Software Engineer'
// }
// const intern = {
//     name: 'Ben',
//     age: 21,
//     job: 'Software Engineer Intern'
// }
//
// function sayHi() {
//     console.log(`Hello, my name is ${this.name}`)
// }
//
// // add sayHi function to both objects
// manager.sayHi = sayHi
// intern.sayHi = sayHi
//
// manager.sayHi() // Hello, my name is John'
// intern.sayHi() // Hello, my name is Ben'

// ||||| creating by Object or empty document

// const secondPerson = new Object()
// //const secondPerson = {} --> the same
// secondPerson.name = 'name'
// secondPerson.surname = 'surname'
// secondPerson['age'] = 23
// secondPerson.greeting = () => {
//     console.log('greetings')
// }
// secondPerson.greeting()
//
// const thirdPerson = new Object({
//     name: 'name',
//     surname: 'surname',
//     age: 23,
//     greeting: () => {
//         console.log('greetings')
//     }
// })
// thirdPerson.name = 'third name'
//
// const fourthPerson = Object.create(thirdPerson)
// console.log(fourthPerson.name)
// fourthPerson.name = 'fourth name'
// console.log(fourthPerson.name)

// ||| classes
//
// |||| creating
//
// ||||| creating by function

// StupidClass = function(p1, p2) {
//     this.constant = 'constant value'
//     this.p1 = p1
//     this.p2 = p2
//     this.greeting = function() {
//         console.log('greetings')
//     }
// }
//
// // or
// // function StupidClass(p1, p1) {
// //
// // }
//
// // it uses delegation pattern instead of inheritance
// StupidClass.prototype.toString = () => {
//     return 'stupid class'
// }
//
// const stupidObject = new StupidClass('one', 'two')
// console.log(stupidObject.constant)
// console.log(stupidObject.p1)
// console.log(stupidObject.p2)
// stupidObject.greeting()
// console.log(stupidObject.toString())

// ||||| creating by class keyword

// class Student {
//     #privateField = 'private field'
//
//     #privateFunction() {
//         console.log('privateFunction')
//     }
//
//     //Public static fields are useful when you want a field to exist only once per class,
//     //not on every class instance you create. This is useful for caches, fixed-configuration, or
//     //any other data you don't need to be replicated across instances.
//     static staticField = 'static field'
//
//     //These are often utility functions, such as functions to create or clone objects.
//     static staticFunction() {
//         console.log('static function')
//     }
//
//     constant = 'constant'
//     constantObject = {
//         first: 'first',
//         second: 'second'
//     }
//     constantArray = ['first', 'second']
//     empty
//
//     constructor(name, surname) {
//         this._name = name
//         this.surname = surname
//
//         console.log(this.#privateField)
//         this.#privateFunction()
//     }
//
//     memberFunction() {
//         console.log('member function of Student is called')
//     }
//
//     get fullName() {
//         return `${this._name} ${this.surname}`
//     }
//
//     set name(name) {
//         console.log('name is set')
//         this._name = name
//     }
//
//     get name() {
//         console.log('name is gotten')
//         return this._name
//     }
// }
//
// const student = new Student('name', 'surname')
// console.log(student.name)
// student.name = 'new name'
// console.log(student.name)
// console.log(student.surname)
// console.log(student.constant)
// console.log(student.constantObject)
// console.log(student.constantArray)
// console.log(student.empty)
// student.memberFunction()
// console.log(student.fullName)
// // you can also create completely new members.
// student.newField = 'new field'
// console.log(student.newField)

// |||| inheritance

// class EngineeringStudent extends Student {
//     constructor(name, surname, engineeringDepartment) {
//         super(name, surname)
//         this.engineeringDepartment = engineeringDepartment
//     }
//
//     memberFunction() {
//         super.memberFunction()
//         console.log('member function of EngineeringStudent is called')
//     }
// }
//
// const engineeringStudent = new EngineeringStudent('name', 'surname', 'Software')
// console.log(engineeringStudent.name)
// console.log(engineeringStudent.surname)
// console.log(engineeringStudent.engineeringDepartment)
// engineeringStudent.memberFunction()
// console.log(engineeringStudent.fullName)

// ||| delete property

// const car = {
//     make: 'Honda',
//     model: 'Accord',
//     year: 1998
// }
// console.log('make' in car)
// delete car.make
// if(!('make' in car)) {
//     car.make = 'Suzuki'
// }
// console.log(car.make)

// ||| destructive assign

// const person = {
//     name: 'person name',
//     surname: 'person surname',
//     age: 23,
// }
// const {name, surname} = person
// console.log(name, surname)

// ||| instanceof and typeof keywords
//
//diğer dillerdeki gibi