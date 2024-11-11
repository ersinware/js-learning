/*
 MICROTASKS AND SEPARATING LONG TASKS

 Window event loop
 The window event loop is the one that drives all of the windows sharing a similar origin (though there are further limits to this, as described below).

 Worker event loop
 A worker event loop is one which drives a worker; this includes all forms of workers, including basic web workers, shared workers, and service workers. Workers are kept in one or more agents that are separate from the "main" code; the browser may use a single event loop for all of the workers of a given type or may use multiple event loops to handle them.

 Worklet event loop
 A worklet event loop is the event loop used to drive agents which run the code for the worklets for a given agent. This includes worklets of type Worklet, AudioWorklet, and PaintWorklet.

 A microtask is a short function which is executed after the function or program which created it exits and only if the JavaScript execution stack is empty, but before returning control to the event loop being used by the user agent to drive the script's execution environment.
 then function creates a microtask

 When executing tasks from the task queue, the runtime executes each task that is in the queue at the moment a new iteration of the event loop begins.
 Tasks added to the queue after the iteration begins will not run until the next iteration. (setTimeout)
 Each time a task exits, and the execution context stack is empty, each microtask in the microtask queue is executed, one after another. The difference is that execution of microtasks continues until the queue is empty—even if new ones are scheduled in the interim. In other words, microtasks can enqueue new microtasks and those new microtasks will execute before the next task begins to run, and before the end of the current event loop iteration.

 Tasks get added to the task queue when:
 A new JavaScript program or subprogram is executed (such as from a console, or by running the code in a <script> element) directly.
 An event fires, adding the event's callback function to the task queue.
 A timeout or interval created with setTimeout() or setInterval() is reached, causing the corresponding callback to be added to the task queue.

 The oldest runnable task in the task queue will be executed during a single iteration of the event loop. After that, microtasks will be executed until the microtask queue is empty, and then the browser may choose to update rendering. Then the browser moves on to the next iteration of event loop.
 Second, if a microtask adds more microtasks to the queue by calling queueMicrotask(), those newly-added microtasks execute before the next task is run. That's because the event loop will keep calling microtasks until there are none left in the queue, even if more keep getting added.
 */

// queueMicrotask(callback)