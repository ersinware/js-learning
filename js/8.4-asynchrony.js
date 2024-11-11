// task queue, microtask queue ve execution context'ler için, 8.7-notes.js dosyasına bak

// ||| version 1 - tamamen sequential

// async function mAsyncFunction() {
//     // 2
//     console.log('mAsyncFunction called')
//
//     return new Promise((resolve) => {
//         for (let i = 0; i < 5555; i++)
//             // 3
//             console.log(i)
//
//         // 4
//         console.log('promise resolving')
//         resolve()
//     })
// }
//
// async function mFunction() {
//     // 1
//     console.log('mFunction called')
//
//     mAsyncFunction()
//         .then(mAsyncFunctionThen)
//
//     // 5
//     console.log('after mAsyncFunction call')
// }
//
// function mAsyncFunctionThen() {
//     // 8
//     console.log('mAsyncFunction then block')
// }
//
// mFunction()
//     .then(mFunctionThen)
//
// function mFunctionThen() {
//     // 7
//     console.log('mFunction then block')
// }
//
// // 6
// console.log('normal execution')

//

// ||| version 2
// await'ten sonrası microtask olarak ekleniyor, ancak context level'ına bakılmadan, önce execute ediliyor

// async function mAsyncFunction() {
//     // 2
//     console.log('mAsyncFunction called')
//
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < 555; i++)
//             // 3
//             console.log(i)
//
//         // 4
//         console.log('promise resolving')
//         resolve()
//     })
// }
//
// async function mFunction() {
//     // 1
//     console.log('mFunction called')
//
//     await mAsyncFunction()
//
//     afterAsyncFunction()
// }
//
// function afterAsyncFunction() {
//     // 6
//     console.log('after mAsyncFunction call')
// }
//
// mFunction()
//     .then(() => {
//         // 7
//         console.log('mFunction then block')
//     })
//
// mFunction2()
//
// function mFunction2() {
//     // 5
//     console.log('mFunction2')
// }

//

// ||| version 3

// async function mAsyncFunction() {
//   // 2
//   console.log('mAsyncFunction called')
//
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       for (let i = 0; i < 5555; i++)
//         // 6
//         console.log(i)
//
//       // 7
//       console.log('promise resolving')
//       resolve()
//     }, 0)
//   })
// }
//
// async function mFunction() {
//   // 1
//   console.log('mFunction called')
//
//   mAsyncFunction()
//     .then(() => {
//     // 8
//     console.log('mAsyncFunction then block')
//   })
//
//   // 3
//   console.log('after mAsyncFunction call')
// }
//
// mFunction()
//   .then(() => {
//     // 5
//     console.log('mFunction then block')
//   })
//
// mFunction2()
//
// function mFunction2() {
//     // 4
//     console.log('mFunction2')
// }

//

// ||| version 4
// setTimeout ile eklenen task'ler, bir sonraki loop'a bırakılıyor
// main thread'ın event'leri handle etmesi için, kendi diğer işlemlerini yapabilmesi için zaman tanınmış oluyor
// ancak yine task olarak execute edilecek, main thread kendi task'lerini execute edemeden senin task'in execute edilebilir
// bu yüzden, bir sonraki task'e microtask olarak eklemek lazım
// await yaparak bunu yapabiliyorsun, mesela await mAsyncFunction() sonrası bir sonraki task'te microtask olarak çağırılıyor
// yieldToMainThread fonksiyonu yapabilirsin mAsyncFunction'ı, sadece setTimeout(resolve, 0) olacak (promise callback içinde)

// async function mAsyncFunction() {
//     // 2
//     console.log('mAsyncFunction called')
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             for (let i = 0; i < 555; i++)
//                 // 4
//                 console.log(i)
//
//             // 5
//             console.log('promise resolving')
//             resolve()
//         }, 0)
//     })
// }
//
// async function mFunction() {
//     // 1
//     console.log('mFunction called')
//
//     await mAsyncFunction()
//
//     // 6
//     console.log('after mAsyncFunction call')
//     for (let i = 0; i < 2000; i++)
//         console.log(i)
// }
//
// mFunction()
//     .then(() => {
//         // 7
//         console.log('mFunction then block')
//     })
//
// mFunction2()
//
// function mFunction2() {
//     // 3
//     console.log('mFunction2')
// }