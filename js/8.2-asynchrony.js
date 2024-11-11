// ||| using async functions
// async function async değil, normal sequential işler
// then fonksiyonu microtask ekler

// task (1)
async function asyncFunction(result) {
    for (let i = 0; i < 2000; i++)
        console.log(i)

    console.log('async function called')

    if (result) return 'sent value'
    else throw new Error('reason')
}

asyncFunction(true)
    .then(firstThen)
    .catch(_catch)
    .then(secondThen)
    .finally(_finally)

function firstThen(value) {
    for (let i = 0; i < 3000; i++)
        console.log(i)

    console.log(value)
    return 'secondSentValue'
}

// muhtemelen microtask (1)
function _catch(reason) {
    for (let i = 0; i < 1000; i++)
        console.log(i)

    console.log(reason)
}

// muhtemelen microtask (1)
function secondThen(secondSentValue) {
    for (let i = 0; i < 5000; i++)
        console.log(i)

    console.log(secondSentValue)
    console.log('do this, no matter what happened before')
}

// muhtemelen microtask (1)
function _finally() {
    for (let i = 0; i < 8000; i++)
        console.log(i)

    console.log('do this too, no matter what happened before')
}

afterAsyncFunction()

// task (1)
function afterAsyncFunction() {
    for (let i = 0; i < 9000; i++)
        console.log(i)

    console.log('after asyncFunction')
}

//you can use like this
// (async() => {
//
// })()
// .then()
// .catch()
