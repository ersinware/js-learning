// Note: This feature is available in Web Workers

//In Chrome and Firefox you cannot request notifications at all unless the site is a secure
//context (i.e. HTTPS), and you can no longer allow notification permissions to be requested
//from cross-origin <iframe>s.

// ||| check permission

//can be default, granted, denied
//console.log('Notification.permission: ', Notification.permission)

/// ||| requesting permission
//
// const requestButton = document.getElementById('request')
//
// if (Notification.permission === 'granted') {
//   //this just makes it invisible
//   //requestButton.style.display = 'none'
//   requestButton.remove()
// } else
//   requestButton.onclick = (event) => {
//     if (checkNotificationPromise())
//       Notification.requestPermission().then(result => onRequested(result, event))
//     else Notification.requestPermission(result => onRequested(result, event))
//   }
//
// //safari does not support promise-based version
// function checkNotificationPromise() {
//   try {
//     Notification.requestPermission().then()
//   } catch (e) {
//     return false
//   }
//
//   return true
// }
//
// function onRequested(result, event) {
//   console.log('result: ', result)
//   console.log('Notification.permission: ', Notification.permission)
// }

/// ||| firing notification

// all properties : https://developer.mozilla.org/en-US/docs/Web/API/notification#instance_properties

// let notification
// let x = 1
// document
//   .getElementById('fire')
//   .onclick = () => {
//
//   notification = new Notification(
//     'Title',
//     {
//       body: `body text, ${x++}`,
//       icon: '../../assets/nature.jpg',
//       //tag vererek, var olan bildirimi değiştirebilirsin
//       //ama yine kapatılır ve baştan yaratılır
//       //sadece bildirim çubuğunda yer kaplamaz
//       tag: 'my notification'
//     }
//   )
//
//   notification.onshow = () => {
//     console.log('showed')
//   }
//
//   notification.onclick = () => {
//     console.log('clicked')
//   }
//
//   //it is closed when clicked, too
//   notification.onclose = () => {
//     console.log('closed')
//   }
//
//   notification.onerror = () => {
//     console.log('error')
//   }
// }

// ||| closing notification

// document.onvisibilitychange = () => {
// 	if(notification && document.visibilityState === 'hidden')
// 		notification.close()
// }
