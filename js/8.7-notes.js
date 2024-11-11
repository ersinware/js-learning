// promise'lerin asenkronluk ile hiçbir alakası yok
// resolve edince 'then' function microtask queue'e ekleniyor sadece

// await ile kullanımında ise, await'ten sonraki kod microtask queue'ye ekleniyor
// ancak await'ten microtask, context level'ına bakılmadan önce execute ediliyor

//

// ||| task queue, execution stack, microtask queue

// Tasks added to the queue after the iteration begins will not run until the next iteration. (setTimeout)
// 1. task queue (yeni task eklenebilir ama bir sonraki loop'ta execute edilir)
// 2. microtask queue (yeni microtask eklenebilir ve bu loop'ta execute edilir)
// 3. browser events, updates etc..
// then again 1 > 2 > 3 > 1 > 2 > 3 .....

// task queue var, task queue içindeki fonksiyonlar, call stack'e ekleniyor ve execute ediliyor
// microtask queue, task queue bitince execute edilmeye başlanıyor
// her context'in kendine ait microtask queue'si var
// microtask queue'leri tutan bir stack var
//    context level'ı en derin olan, stack'e en son ekleneceği için, en önce execute edilecek
// yani, context level'ı daha derin olan microtask queue'ler, daha önce execute ediliyor
// ANCAK, yukarda söylenenler then ile ilgiliydi
// await ile kullanınca durum öyle değil, await'ten sonraki kod, microtask queue'ye ekleniyor ama önce execute ediliyor, level'ına bakılmadan
// örnek:

// mFunction(1)
//   .then(() => {
//     // 1
//     console.log('first mFunction then')
//   })
//
// mFunction(2)
//   .then(() => {
//     // 2
//     console.log('second mFunction then')
//   })
//
// async function mFunction(number) {
//   mAsyncFunction()
//     .then(() => {
//       // 3, number: 1
//       // 5, number: 2
//       console.log('mAsyncFunction then: ', number)
//     })
//
//   mOtherAsyncFunction()
//     // 4, number: 1
//     // 6, number: 2
//     .then(() => {
//       console.log('mOtherAsyncFunction then: ', number)
//     })
// }
//
// async function mAsyncFunction() {
//   return new Promise((resolve) => {
//     resolve()
//   })
// }
//
// async function mOtherAsyncFunction() {
//   return new Promise((resolve) => {
//     resolve()
//   })
// }