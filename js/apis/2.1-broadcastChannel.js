////The Broadcast Channel API allows basic communication between browsing contexts (that is,
////windows, tabs, frames, or iframes) and workers on the same origin.
//
//let channel
//
////safari desteklemiyor, kontrol böyle olur sanırım
//if(BroadcastChannel)
//	initiateChannel()
//else console.log('browser does not support BroadcastChannel')
//
//function initiateChannel() {
//	channel = new BroadcastChannel('testChannel')
//
//	sendMessage()
//	listenForMessages()
//	disconnect()
//}
//
//function sendMessage() {
//	channel.postMessage('message from index.html')
//}
//
//function listenForMessages() {
//	channel.onmessage = event => console.log(event.data)
//}
//
//function disconnect() {
//	//channel.close()
//}
//
