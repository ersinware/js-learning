// ||| while loops

// let step = 5
// do {
//     console.log(`do block, step: ${5 - --step}`)
// } while(step > 0)
//
// let secondStep = 5
// while(secondStep > 0) {
//     if(secondStep === 4) {
//         secondStep--
//         continue
//     }
//
//     if(secondStep === 1)
//         break
//
//     console.log(`secondStep: ${secondStep--}`)
// }

// let thirdStep = 5
// mainWhile:
//     while(true) {
//         while(thirdStep > 0) {
//             if(thirdStep === 4) {
//                 thirdStep--
//                 break
//             }
//
//             if(thirdStep === 1)
//                 break mainWhile
//
//             console.log(`thirdStep: ${thirdStep--}`)
//         }
//         console.log('main while')
//     }

// ||| for loops

// for(let step = 1; step < 6; step++)
//     console.log(`step: ${step}`)
//
// for(let step = 1; step < 10; step++) {
//     if(step === 3) continue
//     if(step === 7) break
//     console.log(step)
// }
//
// const colors = ['red', 'green', 'blue']
// //colors -> [{1: red, 2: green, 3: blue}]
// //iterates a specified variable over all the enumerable properties of an object.
// for(const index in colors)
//     console.log(index)
//
// //usual for
// for(const color of colors)
//     console.log(color)
//
// //destructive
// for(const [key, value] of colors.entries())
//     console.log(key, value)
//
// colors.forEach(color => console.log(color))