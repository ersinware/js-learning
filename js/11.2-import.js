// <script type="module" src="../js/11.2-import.js" async></script>
//modules are deferred automatically.
//
//modules use strict mode automatically.
//
//Modules are only executed once, even if they have been referenced in multiple <script> tags.

// ||| normal import-export

// import { name as importedValue, exportedFunction } from './11.1-export.js'

// console.log(importedValue)
// exportedFunction()

// ||| default import-export

// default export yapınca, isim vermeden alabilirsin

// import {name, default as importedFunction} from './11.1-export.js'
// console.log(name)
// importedFunction()

// import defaultFunction, {name} from './11.1-export.js'
// console.log(name)
// defaultFunction()

// ||| renaming

//import { name as squareName,
//	draw as drawSquare,
//	reportArea as reportSquareArea,
//	reportPerimeter as reportSquarePerimeter } from './modules/square.js';
//
//import { name as circleName,
//	draw as drawCircle,
//	reportArea as reportCircleArea,
//	reportPerimeter as reportCirclePerimeter } from './modules/circle.js';
//
//import { name as triangleName,
//	draw as drawTriangle,
//	reportArea as reportTriangleArea,
//	reportPerimeter as reportTrianglePerimeter } from './modules/triangle.js';
//
//Note that you could solve the problem in the module files instead, e.g.
//
//	// in square.js
//	export { name as squareName,
//	draw as drawSquare,
//	reportArea as reportSquareArea,
//	reportPerimeter as reportSquarePerimeter };
//
// in main.js
//import { squareName, drawSquare, reportSquareArea, reportSquarePerimeter } from './modules/square.js';

// ||| creating module object

//import * as Module from './modules/module.js';
//
//This grabs all the exports available inside module.js, and makes them available as members of
//an object Module, effectively giving it its own namespace. So for example:
//
//Module.function1()
//Module.function2()
//etc.

// ||| importing classes

//class Square {
//	constructor(ctx, listId, length, x, y, color) {
//	...
//	}
//
//	draw() {
//	...
//	}
//
//...
//}
//
//export { Square };
//
//import { Square } from './modules/square.js';
//let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');

// ||| aggregating modules

//instead of this
//import { Square } from './modules/square.js';
//import { Circle } from './modules/circle.js';
//import { Triangle } from './modules/triangle.js';
//do this:
//import { Square, Circle, Triangle } from './modules/shapes.js';

// ||| dynamic import

// await import('./11.1-export.js')
//     .then((module) => {
//         console.log("module loaded")
//         module.moduleFunction()
//     });
//
// console.log('after import')

// ||| top level await

// import {users} from './11.1-export.js'
// console.log(users)