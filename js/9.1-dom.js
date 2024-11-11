//// do dom operations on onload
//window.onload = () => {
//  // ||| window
//
//  //console.log(window.innerWidth)
//  //console.log(window.innerHeight)
//
//  // ||| query selectors
//
//  //document.querySelector()
//  //document.querySelectorAll()
//  //document.getElementById()
//  //document.getElementsByClassName()
//  //document.getElementsByTagName()
//
//  // ||| manipulating HTML elements
//
//	////:scope > div yaparsan, sadece body'nin direct child'i olan div'leri alır
//	////yani :scope element'in kendisini temsil ediyor
//  //const element = document.querySelector('body')
//	////element'in içindeki elementleri arar
//	////element.querySelector('someSelector')
//  //console.log(element.parentElement)
//  //console.log(element.parentNode)
//  //
//  //console.log(element.childElementCount)
//  //console.log(element.children)
//  //console.log(element.childNodes)
//  //
//  //console.log(element.firstElementChild)
//  //console.log(element.lastElementChild)
//  //console.log(element.firstChild)
//  //console.log(element.lastChild)
//
//  // |||| creating
//
//  //const div = document.createElement('div')
//  //div.innerHTML = '<a href="https://www.google.com">google</a>'
//  //div.innerHTML += ', text'
//  //
//  //const p = document.createElement('p')
//  //p.textContent = 'HTMLParagraphElement'
//  //
//  //const a = document.createElement('a')
//  //a.textContent = 'google2'
//  //a.href = 'https://www.google.com'
//  //
//  //console.log(element.childNodes.length)
//
//  // |||| appending
//
//  //const text = document.createTextNode(' — the premier source for web development knowledge.')
//  //document.body.append(text)
//  //
//  ////it is the same with
//  //document.body.append(' — the premier source for web development knowledge.')
//  //
//  //if you want to move 'text' in another node, just append it
//  //anotherElement.append(text) // this will move it
//  //to make its a copy: anotherElement.append(text.cloneNode(true))
//  //
//  //element.append(
//  //  div,
//  //  p,
//  //  'appended text',
//  //  ', appended text 2',
//  //  // the same HTMLParagraphElement object cannot be appended
//  //  p.cloneNode(true),
//  //  a
//  //)
//  //
//  //element.appendChild(p)                               // --> online one
//  //element.append('appended text', ', appended text 2') // --> more than one
//  //
//  //element.insertAdjacentHTML(position, text);
//  //<!-- beforebegin -->
//  //<p>
//  //  <!-- afterbegin -->
//  //  foo
//  //  <!-- beforeend -->
//  //</p>
//  //<!-- afterend -->
//
//  // |||| removing
//
//  //element.removeChild(p)
//  //// removes self
//  //element.remove()
//
//  // ||| reading, setting
//
//  //element.value
//  //element.defaultValue
//  //element.text
//
//  //element.value = 'new value'
//}