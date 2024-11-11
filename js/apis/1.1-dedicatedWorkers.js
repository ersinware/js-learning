// content security policy olayını anlamadım:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy

// Data passed between the main page and workers is copied, not shared (except of transferable objects)

// ||| spawning subworkers

// Workers may spawn more workers if they wish. So-called sub-workers must be hosted within the same origin as the parent page.
// Also, the URIs for subworkers are resolved relative to the parent worker's location rather than that of the owning page.
// This makes it easier for workers to keep track of where their dependencies are.
// importing scripts and libraries:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#importing_scripts_and_libraries

// ||| About thread safety

// The Worker interface spawns real OS-level threads, and mindful programmers may be concerned that concurrency can cause
// "interesting" effects in your code if you aren't careful.
// However, since web workers have carefully controlled communication points with other threads, it's actually very hard to cause
// concurrency problems. There's no access to non-threadsafe components or the DOM. And you have to pass specific data in and out of a
// thread through serialized objects. So you have to work really hard to cause problems in your code.

// ||| https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects

let myWorker

if(window.Worker)
    initiateWorker()
else console.log('your browser does not support workers')

function initiateWorker() {
    myWorker = new Worker('../js/apis/1.2-dedicatedWorker.js', {type: 'classic', name: 'myWorker'})

    setEvents()
    sendMessage()
    terminate()
}

function setEvents() {
    myWorker.onmessage = message => {
        console.log('received: ', message)
    }

    myWorker.onerror = error => {
        console.log(error.message, error.filename, error.lineno)
    }
}

function sendMessage() {
    //you can send JSON
    myWorker.postMessage(['first message from main thread', 'second message from main thread'])
}

function terminate() {
    //If you need to immediately terminate a running worker from the main thread, you can do so by calling the worker's terminate method:
    //myWorker.terminate();
}