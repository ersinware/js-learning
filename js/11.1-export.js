//You can export functions, var, let, const, and — as we'll see later — classes. They need to be top-level items; you can't use export inside a function

// ||| named export

// export const name = 'name'
//
// export function exportedFunction() {
//     console.log('exported function called')
// }

// or

// export {name, exportedFunction}
//
// const name = 'name'
//
// function exportedFunction() {
//     console.log('exported function called')
// }

// ||| default export

// export const name = 'name'

// export default function defaultFunction() {
// 	console.log('default function called')
// }

// or

// export const name = 'name'

// function defaultFunction() {
//     console.log('default function called')
// }
//
// export {defaultFunction as default}

// ||| for dynamic import

// export function moduleFunction() {
//     console.log('module function called')
// }

// ||| for top level await

// export {users}
//
// let users
// await getUsers().then(userList => users = userList)
//
// function getUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(['user1', 'user2']), 2000)
//     })
// }