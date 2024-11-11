// setTimeout ile eklenen task'ler, bir sonraki loop'a bırakılıyor
// main thread'ın event'leri handle etmesi için, kendi diğer işlemlerini yapabilmesi için zaman tanınmış oluyor
// ancak yine task olarak execute edilecek, main thread kendi task'lerini execute edemeden senin task'in execute edilebilir
// bu yüzden, bir sonraki task'e microtask olarak eklemek lazım
// ama dökümanda şöyle yazıyor: but they have a significant downside: when you yield to the main thread by deferring code to run in a subsequent task, that code gets added to the very end of the task queue.
// sonraki task queue'de execute edilmesi yeterli olabilir

// 50 milisaniyeden uzun sürenler long task!

// In addition to setTimeout(), there are a few other APIs that allow you to defer code execution to a subsequent task. One involves using postMessage() for faster timeouts. You can also break up work using requestIdleCallback()—but beware!—requestIdleCallback() schedules tasks at the lowest possible priority, and only during browser idle time. When the main thread is congested, tasks scheduled with requestIdleCallback() may never get to run.
// setTimeout in most browsers doesn't allow a delay less than about 10 milliseconds (it forces any smaller delays to be longer), so the work wasn't finishing as fast as it could. (Chrome has changed this to 2 milliseconds, though, and apparently had some problems with it.)
// A while ago, Jeff Walden suggested to me that Web pages could get the equivalent of setTimeout, with a real zero delay, using postMessage. This turns out to be relatively straightforward:
(() => {
    const
        timeouts = [],
        messageName = "zero-timeout-message"

    function setZeroTimeout(f) {
        timeouts.push(f)
        window.postMessage(messageName, "*")
    }

    function handleMessage(event) {
        if (event.source !== window || event.data !== messageName)
            return

        event.stopPropagation()

        if (timeouts.length > 0)
            (timeouts.shift())()
    }

    window.addEventListener("zero-timeout-message", handleMessage, true)
    window.setZeroTimeout = setZeroTimeout
})()

async function saveSettings() {
    const tasks = [
        validateForm,
        showSpinner,
        saveToDatabase,
        updateUI,
        sendAnalytics
    ]

    while (tasks.length > 0) {
        (tasks.shift())()

        await yieldToMain()
    }
}

function validateForm() {
    for (let i = 0; i < 1000; i++)
        console.log(i)
}

function showSpinner() {
    for (let i = 0; i < 1000; i++)
        console.log(i)
}

function saveToDatabase() {
    for (let i = 0; i < 1000; i++)
        console.log(i)
}

function updateUI() {
    for (let i = 0; i < 1000; i++)
        console.log(i)
}

function sendAnalytics() {
    for (let i = 0; i < 1000; i++)
        console.log(i)
}

function yieldToMain() {
    return new Promise(resolve => setZeroTimeout(resolve))
}

setZeroTimeout(() => queueMicrotask(saveSettings))