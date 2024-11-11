//Version changes while a web app is open in another tab
//https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#version_changes_while_a_web_app_is_open_in_another_tab

//Warning about browser shutdown
//https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#warning_about_browser_shutdown

//transaction modes -> readonly, readwrite
//default transaction mode is readonly
//Only specify a readwrite transaction mode when necessary. You can concurrently run multiple
//readonly transactions with overlapping scopes, but you can have only one readwrite
//transaction for an object store

const DATABASE_NAME = 'db'
const DATABASE_VERSION = 3

//open function's transaction mode is versionchange default
const request = window.indexedDB.open(DATABASE_NAME, DATABASE_VERSION)

//onupgradeneeded handler (if needed) will run before the onsuccess handler
request.onupgradeneeded = onUpgradeNeeded
request.onsuccess = onSuccess
request.onerror = onError

function onUpgradeNeeded(event) {
	console.log('onupgradeneeded')
	const db = event.target.result

	//options'ta bu olmazsa, veri eklerken, kendin eklersin key'i
	//sadece autoIncrement: true olursa, kendin eklemene gerek kalmaz ama bu sefer de
	//key'e erişemiyorsun veriyi elde ettiğinde
	//{
	//	keyPath      : 'id',
	//	autoIncrement: true
	//}

	let studentsObjectStore

	////for first create
	if(!db.objectStoreNames.contains('students'))
		studentsObjectStore = db.createObjectStore(
			'students',
			{
				keyPath      : 'id',
				autoIncrement: true
			}
		)
	else
		////for db update
		studentsObjectStore = event.target.transaction.objectStore('students')

	studentsObjectStore.transaction.oncomplete = () => {
		console.log('upgrade completed')
	}

	if(!studentsObjectStore.indexNames.contains('name'))
		studentsObjectStore.createIndex('name', 'name', { unique: false })

	if(!studentsObjectStore.indexNames.contains('age'))
		studentsObjectStore.createIndex('age', 'age', { unique: false })
}

let db

function onSuccess(event) {
	db = event.target.result

	console.log('object stores:')
	for(const objectStore of db.objectStoreNames)
		console.log(objectStore)

	//addData()
	//updateData()
	//retrieveData()
	//retrieveDataByCursor()
	//deleteData()
}

function onError(event) {
	console.log('Error: ', event)
}

function addData() {
	//ömürleri çok kısa, oluşturur oluşturmaz kullan
	const transaction = db.transaction(['students'], 'readwrite')

	transaction.oncomplete = () => {
		console.log('adding transaction- oncomplete')
	}

	transaction.onerror = event => {
		console.log('adding transaction- onerror')
		console.log(event)
	}

	const studentsObjectStore = transaction.objectStore('students')
	for(let i = 1; i < 21; i++) {
		const request = studentsObjectStore.add({
			                                        name   : `name#${i}`,
			                                        age    : i,
			                                        faculty: 'Engineering'
		                                        })

		request.onsuccess = () => {
			console.log('adding request- onsuccess')
		}

		request.onerror = event => {
			console.log('adding request- onerror')
			console.log(event)
		}
	}
}

function retrieveData() {
	//her zaman sadece ihtiyacın olduğun şekilde transaction oluştur
	//mesela readonly ve gerekli object store için

	//birden fazla object store için -> db.transaction(['first', 'second], 'readonly')
	// const transaction = db.transaction('students', 'readonly')
    //
	// transaction.oncomplete = () => {
	// 	console.log('read transaction- oncomplete')
	// }
    //
	// transaction.onerror = event => {
	// 	console.log('read transaction- onerror')
	// 	console.log(event)
	// }
    //
	// const studentsObjectStore = transaction.objectStore('students')
    //
	// console.log('indexes:')
	// for(const index of studentsObjectStore.indexNames)
	// 	console.log(index)

	// ||| with keys

	////const request = studentsObjectStore.get(idKey)
	////const request = studentsObjectStore.getAllKeys()
	//const request = studentsObjectStore.getAll()
	//
	//request.onsuccess = event => {
	//	//const students = request.result/
	//	//or
	//	const students = event.target.result
	//
	//	// get fonksiyonlarında veri bulunamazsa, result undefined dönüyor
	//	if(students)
	//		if(Array.isArray(students))
	//			for(const student of students)
	//				console.log(student)
	//		else console.log(students)
	//	else console.log('cannot find')
	//}
	//
	//request.onerror = event => {
	//	console.log('read request- onerror')
	//	console.log(event)
	//}

	// ||| with index

	//const index = studentsObjectStore.index('name')
	////const request = index.getAll(IDBKeyRange.bound('name#1', 'name#11'))
	//const request = index.get('name#5')
	//
	//request.onsuccess = event => {
	//	//const students = request.result
	//	//or
	//	const students = event.target.result
	//
	//	// get fonksiyonlarında veri bulunamazsa, result undefined dönüyor
	//	if(students)
	//		if(Array.isArray(students))
	//			for(const student of students)
	//				console.log(student)
	//		else console.log(students)
	//	else console.log('cannot find')
	//}
	//
	//request.onerror = event => {
	//	console.log('read request- onerror')
	//	console.log(event)
	//}
}

function retrieveDataByCursor() {
	//const transaction = db.transaction('students', 'readonly')
	//
	//transaction.oncomplete = () => {
	//	console.log('read transaction- oncomplete')
	//}
	//
	//transaction.onerror = event => {
	//	console.log('read transaction- onerror')
	//	console.log(event)
	//}
	//
	//const studentsObjectStore = transaction.objectStore('students')
	//
	//console.log('indexes:')
	//for(const index of studentsObjectStore.indexNames)
	//	console.log(index)

	//// ||| with normal cursor
	//
	////const request = studentsObjectStore.openCursor(IDBKeyRange.lowerBound(10))
	////bu next, nextunique gibi parametreler deprecated edilmiş
	////const request = studentsObjectStore.openCursor(null, 'next')
	//const request = studentsObjectStore.openCursor()
	//
	//request.onsuccess = event => {
	//	const cursor = event.target.result
	//
	//	//kendi otomatik döngü oluşturur, continue onsuccess bloğunu hep çağırıyor
	//	if(cursor) {
	//		console.log(`key: ${cursor.key}`, cursor.value)
	//		cursor.continue()
	//	} else console.log('no entries anymore')
	//}
	//
	//request.onerror = event => {
	//	console.log('read request- onerror')
	//	console.log(event)
	//}

	// ||| with index cursor

	//const index = studentsObjectStore.index('name')
	//
	////const request = index.openCursor(IDBKeyRange.upperBound('name#10'))
	////const request = index.openCursor(IDBKeyRange.only('name#5'))
	//const request = index.openCursor()
	//
	//request.onsuccess = event => {
	//	const cursor = event.target.result
	//
	//	//kendi otomatik döngü oluşturur
	//	if(cursor) {
	//		console.log(`key: ${cursor.key}`, cursor.value)
	//		cursor.continue()
	//	}
	//}
	//
	//request.onerror = event => {
	//	console.log('read request- onerror')
	//	console.log(event)
	//}

	// ||| with index key cursor

	//const index = studentsObjectStore.index('name')
	//
	////sadece primary key ve index'lenen field'a (cursor.key) erişilebilir
	//const request = index.openKeyCursor()
	//
	//request.onsuccess = event => {
	//	const cursor = event.target.result
	//
	//	//kendi otomatik döngü oluşturur
	//	if(cursor) {
	//		console.log(`key: ${cursor.key}`, ` primary key: ${cursor.primaryKey}`)
	//		cursor.continue()
	//	}
	//}
	//
	//request.onerror = event => {
	//	console.log('read request- onerror')
	//	console.log(event)
	//}
}

function deleteData() {
	//const transaction = db.transaction('students', 'readwrite')
	//
	//transaction.oncomplete = () => {
	//	console.log('deleting transaction- oncomplete')
	//}
	//
	//transaction.onerror = event => {
	//	console.log('deleting transaction- onerror')
	//	console.log(event)
	//}
	//
	//const studentsObjectStore = transaction.objectStore('students')
	////const request = studentsObjectStore.delete(key or IDBKeyRange)
	//const request = studentsObjectStore.delete(IDBKeyRange.lowerBound(1))
	//
	//request.onsuccess = () => {
	//	console.log('deleting request- onsuccess')
	//}
	//
	//request.onerror = event => {
	//	console.log('deleting request- onerror')
	//	console.log(event)
	//}
}

function updateData() {
	//const transaction = db.transaction('students', 'readwrite')
	//
	//transaction.oncomplete = () => {
	//	console.log('read and write transaction- oncomplete')
	//}
	//
	//transaction.onerror = event => {
	//	console.log('read and write transaction- onerror')
	//	console.log(event)
	//}
	//
	//const studentsObjectStore = transaction.objectStore('students')
	//const readRequest = studentsObjectStore.get(20)
	//
	//readRequest.onsuccess = event => {
	//	event.target.result.age = 40
	//	const updateRequest = studentsObjectStore.put(event.target.result)
	//
	//	updateRequest.onsuccess = event => {
	//		console.log('old age: ', event.target.result)
	//	}
	//
	//	updateRequest.onerror = event => {
	//		console.log('update request- onerror ')
	//		console.log(event)
	//	}
	//}
	//
	//readRequest.onerror = event => {
	//	console.log('read request- onerror ')
	//	console.log(event)
	//}
}