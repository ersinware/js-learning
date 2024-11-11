// 8.5 oku önce ve 8.7 göz at

// ||| version 1 - waiting after executing
// YANILTICI, eş zamanlı işlenme yanılgısı oluşturuyor
// eğer, 3 saniye beklemek yerine, 3 saniyelik işlem yapsa, alttakinde de 9 saniye sürerdi

// function timeoutPromise(interval) {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             () => resolve('done'),
//             interval
//         )
//     })
// }
//
// let startTime = Date.now()
// timeTest().then(() => {
//     let finishTime = Date.now()
//     let timeTaken = finishTime - startTime
//     alert('Time taken in milliseconds: ' + timeTaken)
// })
//
// //takes 9 seconds
// // async function timeTest() {
// //  await timeoutPromise(3000)
// //  await timeoutPromise(3000)
// //  await timeoutPromise(3000)
// // }
//
// //takes 3 seconds
// async function timeTest() {
//     const timeoutPromise1 = timeoutPromise(3000);
//     const timeoutPromise2 = timeoutPromise(3000);
//     const timeoutPromise3 = timeoutPromise(3000);
//
//     //await timeoutPromise1;
//     //await timeoutPromise2;
//     //await timeoutPromise3;
//     //or
//     //The Promise.all() rejects when any of the input promises are rejected. If you want all the
//     //promises to settle and then use some of their fulfilled values, even when some of them are
//     //rejected, you could use Promise.allSettled() instead.
//
//     await Promise.all([timeoutPromise1, timeoutPromise2, timeoutPromise3])
// }

//

// ||| version 2 - waiting after executing
// parallel execution yok task queue'e ekliyor

// function timeoutPromise(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 console.log('for: ', number)
//
//                 for (let i = 0; i < 1000; i++)
//                     console.log(i)
//
//                 resolve('done')
//             }, 0
//         )
//     })
// }
//
// let startTime = Date.now()
// timeTest().then(() => {
//     let finishTime = Date.now()
//     let timeTaken = finishTime - startTime
//     alert('Time taken in milliseconds: ' + timeTaken)
// })
//
// // yukarıdaki ile aynı !!!
// async function timeTest() {
//     const timeoutPromise1 = timeoutPromise(1)
//     const timeoutPromise2 = timeoutPromise(2)
//     const timeoutPromise3 = timeoutPromise(3)
//
//     await Promise.all([timeoutPromise1, timeoutPromise2, timeoutPromise3])
// }