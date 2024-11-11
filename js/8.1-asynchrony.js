//The timeout can also fire later than expected if the page (or the OS/browser) is busy with //other tasks.
// setTimeout fonksiyonu bir dahaki task queue'ye ekleniyor

// function foo() {
//     console.log('foo has been called')
// }
//
// setTimeout(foo, 0)
//
// someFunction()
//
// function someFunction() {
//     console.log('After setTimeout')
// }

// |||

// const timer = setTimeout(
//     myFunction1,
//     2000,
//     'after', '2 seconds'
// )
//
// function myFunction1(p1, p2) {
//     console.log(p1, p2)
// }
//
// // clearTimeout(timer)
//
// const interval = setInterval(
//     myFunction2,
//     2000,
//     'after', 'every', '2 seconds'
// )
//
// function myFunction2(p1, p2, p3) {
//     console.log(p1, p2, p3)
// }
//
// // ilki her türlü işler
// // clearInterval(interval)