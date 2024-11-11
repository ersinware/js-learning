// |||

// const personPrototype = {
//     greet() {
//         console.log('hello! my name is ', this.name)
//     }
// }
//
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.printAge = () => {
//         console.log('my age is ', this.age)
//     }
// }
//
// Person.prototype = personPrototype
// Person.prototype.constructor = Person
//
// const me = new Person("Ersin", 24)
// me.greet()
// me.printAge()
//
// console.log(me.hasOwnProperty("name"))
// console.log(me.hasOwnProperty("greet"))
//
// const berra = new Person("Berra", 20)
// berra.greet()
// berra.printAge()
//
// let object = me
// while(object) {
//     console.log(object)
//     object = Object.getPrototypeOf(object)
// }

// |||

// function PersonPrototype(name) {
//     console.log('PersonPrototype constructor')
//
//     this.greet = () => {
//         console.log('hello! my name is ', name)
//     }
// }
//
// function Person(name, age) {
//     PersonPrototype.call(this, name)
//
//     this.age = age
//     this.printAge = () => {
//         console.log('my age is ', this.age)
//     }
// }
//
// Person.prototype = PersonPrototype
// Person.prototype.constructor = Person
//
// const me = new Person("Ersin", 24)
// me.greet()
// me.printAge()
//
// // different from document prototype
// console.log(me.hasOwnProperty("name"))
// console.log(me.hasOwnProperty("greet"))
//
// const berra = new Person("Berra", 20)
// berra.greet()
// berra.printAge()
//
// let object = me
// while(object) {
//     console.log(object)
//     object = Object.getPrototypeOf(object)
// }
//
// // In JavaScript, you can add properties to any object at run time. You are not constrained to use only the properties provided by the constructor function. To add a property that is specific to a single object, you assign a value to the object, as follows:
//
// me.bonus = 3000;
// console.log(me.bonus)
// console.log(berra.bonus)
//
// // If you add a new property to an object that is being used as the prototype for a constructor function, you add that property to all objects that inherit properties from the prototype. For example, you can add a specialty property to all employees with the following statement:
//
// Person.prototype.bonusTwo = 'bonus two';
// console.log(me.bonusTwo)
// console.log(berra.bonusTwo)

// ||| SONUÇ BURADA

// let uniqueId = 0
//
// function Employee(name, dept) {
//   console.log('Employee constructor')
//
//   this.name = name
//   this.dept = dept
//
//   // prototype new ile atandığı zaman constructor prototype atanırken de çalışıyor
//   // if(name)
//   this.id = uniqueId++
// }
//
// function display() {
//   console.log('display: ', this.name, this.dept)
// }
//
// Employee.prototype.display = display
//
// function WorkerBee(name, depth, projects) {
//   console.log('WorkerBee constructor')
//   Employee.call(this, name, depth)
//
//   this.projects = projects
// }
//
// // WorkerBee.prototype = new Employee;
// // ancak bu daha yavaş (alttaki)
// // Alternatively, you can create a copy of Employee's prototype object to assign to WorkerBee:
// WorkerBee.prototype = Object.create(Employee.prototype)
//
// // instead of WorkerBee.prototype = new Employee
//
// function Engineer(name, dept, projects, mach) {
//   WorkerBee.call(this, name, dept, projects)
//
//   this.dept = dept
//   this.machine = mach
// }
//
// // Engineer.prototype = new WorkerBee;
// // ancak bu daha yavaş (alttaki)
// // Alternatively, you can create a copy of Employee's prototype object to assign to WorkerBee:
// Engineer.prototype = Object.create(WorkerBee.prototype)
// // instead of WorkerBee.prototype = new Employee
//
// const jane = new Engineer('jane', 'dept parameter', ['proj1', 'proj2'], 'belau')
//
// // new ile prototype atanmadığı zaman -> WorkerBee nesnesinin name diye bi değişkeni olduğu için, onunkini döndürüyor direkt, Employee'ye varamadan
// // prototype'ı atarken new ile atarsan bu sorunu çözüyorsun ama bu da Employee constructur'ının çok defa çağırılması sorununa sebep oluyor
// // en iyi çözüm:
// //  // ancak bu daha yavaş (alttaki)
// //  // Alternatively, you can create a copy of Employee's prototype object to assign to WorkerBee:
// //  Engineer.prototype = Object.create(WorkerBee.prototype);
// //  // instead of WorkerBee.prototype = new Employee
//
// jane.display()
// console.log(jane.name)
// console.log(jane.dept)
// console.log(jane.projects)
// console.log(jane.machine)
// console.log(jane.id)
//
// const smith = new Engineer('smith', 'dept parameter 2', ['proj5', 'proj7'], 'random');
//
// console.log(smith.name)
// console.log(smith.dept)
// console.log(smith.projects)
// console.log(smith.machine)
// console.log(smith.id)