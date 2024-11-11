// do dom operations on onload
window.onload = () => {
    // ||| adding, removing events

    // const button = document.querySelector('button')
    //
    // ////diğerlerini siler
    // ////ekleme
    // //button.onclick = () => {
    // //  console.log('clicked')
    // //  //silme
    // //  button.onclick = undefined
    // //}
    //
    // const listener1 = () => {
    //     console.log('first')
    //
    //     //capture false olanı siler
    //     button.removeEventListener('click', listener1, {capture: false})
    //     //böyle de olabilir
    //     //button.removeEventListener('click', listener1, false)
    //
    //     //capture true olanı siler
    //     button.removeEventListener('click', listener1, {capture: true})
    // }
    // const listener2 = () => {
    //     console.log('second')
    //     //button.removeEventListener('click', listener2)
    // }
    //
    // button.addEventListener('click', listener1)
    //
    // //capture: true olmazsa, aynı function 2 kere eklenemez (en sondaki ya da options field'ı olarak)
    // button.addEventListener('click', listener1, {capture: true})
    // //böyle de olabilir
    // //button.addEventListener('click', listener1, true)
    //
    // button.addEventListener('click', listener2, {once: true})

    // ||| onsubmit event

    //form.onsubmit = mFunction

    // |||| adding, removing events with AbortController

    //const button = document.querySelector('button')
    //const controller = new AbortController()
    //button.addEventListener(
    //  'click',
    //  () => {
    //    console.log('clicked')
    //    //removes the listener
    //    controller.abort()
    //  },
    //  { signal: controller.signal }
    //)

    // ||| preventDefault()

    // //event'in çalışmasını durdurur, örneğin checkbox işaretlenemez
    // //örneğin keypress event'inde, eğer büyük harf girişi yaparsa, bunun edittext'e girilmesini engellemek
    // document
    //     .querySelector('#id-checkbox')
    //     .addEventListener(
    //         'click',
    //         function(event) {
    //             document
    //                 .getElementById('output-box')
    //                 .innerHTML += 'Sorry! <code>preventDefault()</code> won\'t let you check this!<br>'
    //
    //             event.preventDefault()
    //         }
    //     )

    // ||| event bubbling

    // //when you click child, parent's onClick event is handled too to prevent this, with child's event, call stopPropagation()
    // const parent = document.querySelector('div')
    // const child = document.querySelector('div > div')
    //
    // parent.addEventListener(
    //     'click',
    //     () => {
    //         console.log('parent was clicked')
    //     }
    // )
    //
    // child.addEventListener(
    //     'click',
    //     (event) => {
    //         console.log('child was clicked')
    //         event.stopPropagation()
    //     }
    // )

    // ||| event delegation

    //<ul id="parent-list">
    //  <li id="post-1">Item 1</li>
    //  <li id="post-2">Item 2</li>
    //  <li id="post-3">Item 3</li>
    //  <li id="post-4">Item 4</li>
    //  <li id="post-5">Item 5</li>
    //  <li id="post-6">Item 6</li>
    //</ul>

    //// Get the element, add a click listener...
    //document
    //  .getElementById('parent-list')
    //  .addEventListener(
    //    'click',
    //    function (e) {
    //      // e.target is the clicked element!
    //      // If it was a list item
    //      if (e.target && e.target.nodeName === 'LI')
    //        // List item found!  Output the ID!
    //        console.log('List item ', e.target.id.replace('post-', ''), ' was clicked!')
    //    }
    //  )

    ////Let's have a parent DIV with many children but all we care about is an A tag with the classA
    ////CSS class:
    //// Get the parent DIV, add click listener...
    //document
    //  .getElementById('myDiv')
    //  .addEventListener(
    //    'click',
    //    function (e) {
    //      // e.target was the clicked element
    //      if (e.target && e.target.matches('a.classA')) {
    //        console.log('Anchor element clicked!')
    //      }
    //    }
    //  )

    // ||| matches

    //function determineIfElementMatches(element, selector) {
    //  return element.matches(selector)
    //}
    //
    //// Sample usage
    //var matches = determineIfElementMatches(
    //  myDiv,
    //  'div.someSelector[some-attribute=true]'
    //)
}