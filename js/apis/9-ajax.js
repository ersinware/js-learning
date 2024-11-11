// ||| using XMLHttpRequest

const httpRequest = new XMLHttpRequest()

// httpRequest.onreadystatechange = () => {
//     // 0 (uninitialized) or (request not initialized)
//     // 1 (loading) or (server connection established)
//     // 2 (loaded) or (request received)
//     // 3 (interactive) or (processing request)
//     // 4 (complete) or (request finished and response is ready)
//
//     //In the event of a communication error (such as the server going down), an exception will be thrown in the onreadystatechange method when
//     //accessing the response status. To mitigate this problem, you could wrap your if...then statement in a try...catch:
//     try {
//         console.log(httpRequest.readyState)
//         if (httpRequest.readyState === XMLHttpRequest.DONE) {
//
//         }
//     } catch (e) {
//         console.log("caught: ", e)
//     }
// }

// Note: You need to add the event listeners before calling open() on the request. Otherwise the progress events will not fire.
// Note: Progress events are not available for the file: protocol.
httpRequest.onprogress = (event) => {
    if (event.lengthComputable) {
        console.log("completion: ", event.loaded / event.total * 100)
        // ...
    } else {
        // Unable to compute progress information since the total size is unknown
        console.log("total size is unknown")
    }
}

// on complete
httpRequest.onload = (event) => {
    console.log(httpRequest.status, httpRequest.statusText)

    if (httpRequest.status !== 200)
        return

    // httpRequest.responseText – returns the server response as a string of text
    // httpRequest.responseXML – returns the response as an XMLDocument object you can traverse with JavaScript DOM functions
    const response = JSON.parse(httpRequest.responseText)
    console.log("response.name: ", response.name)
    console.log("response.surname: ", response.surname)
}

httpRequest.onerror = (event) => {
    console.log("onerror")
}

httpRequest.onabort = (event) => {
    console.log("onabort")
}

// The optional third parameter sets whether the request is asynchronous. If true (the default), JavaScript execution will continue and the user
// can interact with the page while the server response has yet to arrive. This is the first A in AJAX.
httpRequest.open("POST", "https://localhost:8443/forJS")
httpRequest.setRequestHeader('Content-Type', "application/json")

//body'ye form verisi ekleme (manual)
//httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//var userName = document.getElementById("ajaxTextbox").value;
//httpRequest.send('userName=' + encodeURIComponent(userName));

const user = {
    "name": "Ersin",
    "surname": "Karaer"
}
httpRequest.send(JSON.stringify(user))