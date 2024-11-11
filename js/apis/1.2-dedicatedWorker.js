// iki kere yazdırıyor ama worker bir kere çalışıyor
// console.log(Math.floor(Math.random() * 100) + 1)

// ||| normal sending

//
// onmessage = message => {
// 	console.log('received: ', message.data)
//
// 	let sum = 0
// 	for(let i = 1; i < 9999999; i++)
// 		sum += i
//
// 	postMessage(`message from worker thread, sum: ${sum}`)
// }

// ||| transferable object

// çok büyük performans artışı ile veri iletimi sağlar
// when transferring an ArrayBuffer from your main app to a worker script, the original
// ArrayBuffer is cleared and no longer usable. Its content is (quite literally) transferred to
// the worker context.

// transferable objects -> https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects

onmessage = message => {
    console.log('received: ', message.data)

    // Create an 8MB "file" and fill it.
    const uInt8Array = new Uint8Array(1024 * 1024 * 8); // 8MB

    console.log('uInt8Array.length: ', uInt8Array.length)

    for(let i = 0; i < uInt8Array.length; i++)
        uInt8Array[i] = i;

    console.log(uInt8Array.byteLength);  // 8388608

    // Transfer the underlying buffer to a worker
    postMessage(uInt8Array, [uInt8Array.buffer]);

    console.log(uInt8Array.byteLength);  // 0
}