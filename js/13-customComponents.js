//desteklemiyorsa siteyi gösterme
const supportsShadowDOMV1 = !!HTMLElement.prototype.attachShadow;
console.log('supportsShadowDOMV1: ', supportsShadowDOMV1)
if (!supportsShadowDOMV1) {
    document.body.innerHTML = ''
    alert('use another browser or try to update')
}

//you can extend any HTMLElement like HTMLButtonElement
//while defining:
//customElements.define('fancy-button', FancyButton, {extends: 'button'});
//while markuping:
//<!-- This <button> is a fancy button. -->
//<button is="fancy-button" disabled>Fancy button!</button>
//while creating:
//Custom elements overload createElement() to support the is="" attribute.
//let button = document.createElement('button', {is: 'fancy-button'});
//button.textContent = 'Fancy button!';
//button.disabled = true;
//document.body.appendChild(button);
class Card extends HTMLElement {
    constructor() {
        super()

        this.setAttribute('loading', '')

        //This scoped subtree is called a shadow tree. The element it's attached
        //to is its shadow host.
        //A shadow root is a document fragment that gets attached to a “host” element

        //document.createElement('input').attachShadow({mode: 'open'});
        //Error. `<input>` cannot host shadow dom.
        //There are several reasons an element cannot be a host
        //The browser already hosts its own internal shadow DOM for the element (<textarea>, <input>).
        //It doesn't make sense for the element to host a shadow DOM (<img>).

        //If you attach a shadow root to a custom element with mode: closed set, you won't be able to
        //access the shadow DOM from the outside — myCustomElem.shadowRoot returns null. This is the
        //case with built in elements that contain shadow DOMs, such as <video>.
        this.attachShadow({mode: 'open'})
            .append(document.getElementById('my-card')
                .content
                .cloneNode(true))

        this.addListeners()

        //bu şekilde JS ile parametre gönderebilirsin
        this.querySelector('span[slot=title]').innerText = 'Title from JS'

        //başka yerden:
        //document.querySelectorAll('my-card')
        //        .forEach(card => {
        //          card.querySelector('span[slot=title]').innerHTML = 'Title from JS'
        //        })
    }

    addListeners() {
        this.shadowRoot.addEventListener(
            'click',
            () => {
                //console.log(this.children)
                //console.log(this.shadowRoot.children)

                //if (!this.hasAttribute('newAttribute'))
                //  this.setAttribute(
                //      'newAttribute',
                //      'it was null, so, assigned from JS'
                //  )
                //
                //console.log('newAttribute: ', this.getAttribute('newAttribute'))
                //console.log(
                //    'newBooleanAttribute: ',
                //    this.hasAttribute('newBooleanAttribute')
                //)

                //bunu ekleyip kaldırınca, my-card[beige] selector'u aktif/devredışı oluyor
                if (this.hasAttribute('beige'))
                    this.removeAttribute('beige')
                else
                    this.setAttribute('beige', '')
            }
        )

        this.shadowRoot
            .querySelector('.positiveButton')
            .addEventListener(
                'click',
                event => {
                    console.log('positive button clicked')
                    event.stopPropagation()
                }
            )

        this.shadowRoot
            .querySelector('.negativeButton')
            .addEventListener(
                'click',
                event => {
                    console.log('negative button clicked')
                    event.stopPropagation()
                }
            )
    }

    //defining a new attribute
    //ama bunlara gerek yok, sadece html'e ekleyince oluyor
    //bunların amacı JS ile direkt erişmek (this.attribute şeklinde)
    //özel attribute'ler ekleyerek css'ten seçebilirsin o element'leri
    //get newAttribute() {
    //  return this.getAttribute('newAttribute')
    //}
    //
    //set newAttribute(newValue) {
    //  this.setAttribute('newAttribute', newValue)
    //}

    //Reaction callbacks are synchronous. !!!
    //If someone calls el.setAttribute() on your element, the browser will
    //immediately call attributeChangedCallback()

    //Called every time the element is inserted into the DOM.
    connectedCallback() {
        console.log('connected')
        setTimeout(
            () => this.removeAttribute('loading'),
            100
        )
    }

    //Called every time the element is removed from the DOM.
    disconnectedCallback() {
        console.log('disconnected')
    }

    static get observedAttributes() {
        return ['newAttribute', 'newBooleanAttribute', 'beige']
    }

    //Called when an observed attribute has been added, removed, updated, or
    //replaced. Also called for initial values when an element is created by
    //the parser, or upgraded.
    //Note: only attributes listed in the observedAttributes property will
    //receive this callback.
    //update işlemi olurken bu function tetiklenmiyor
    attributeChangedCallback(attrName, oldVal, newVal) {
        //console.log(`${attrName} changed, oldVal: ${oldVal}, newVal, ${newVal}`)
    }

    //The custom element has been moved into a new document (e.g. someone
    //called document.adoptNode(el)).
    adoptedCallback() {
        console.log('adopted')
    }
}

customElements.define(
    'my-card',
    Card
)

// ||| notes
//https://developers.google.com/web/fundamentals/web-components/shadowdom#workwithslots in this page

// |||| Working with slots in JS
//
//The shadow DOM API provides utilities for working with slots and distributed nodes. These come in handy when authoring a custom element.
//slotchange event
//
//The slotchange event fires when a slot's distributed nodes changes. For example, if the user adds/removes children from the light DOM.
//
//const slot = this.shadowRoot.querySelector('#slot');
//slot.addEventListener('slotchange', e => {
//  console.log('light dom children changed!');
//});
//
//Note: slotchange does not fire when an instance of the component is first initialized.
//
//To monitor other types of changes to light DOM, you can setup a MutationObserver in your element's constructor.
//What elements are being rendering in a slot?
//
//Sometimes it's useful to know what elements are associated with a slot.
// Call slot.assignedNodes() to find which elements the slot is rendering.
// The {flatten: true} option will also return a slot's fallback content (if
// no nodes are being distributed).
//
//As an example, let's say your shadow DOM looks like this:
//
//<slot><b>fallback content</b></slot>
//
// |||| Usage Call Result
//<my-component>component text</my-component> 	slot.assignedNodes(); 	[component text]
//<my-component></my-component> 	slot.assignedNodes(); 	[]
//<my-component></my-component> 	slot.assignedNodes({flatten: true}); 	[<b>fallback content</b>]
//What slot is an element assigned to?
//Answering the reverse question is also possible. element.assignedSlot tells you which of the component slots your element is assigned to.

// |||| The Shadow DOM event model
//
//When an event bubbles up from shadow DOM it's target is adjusted to
// maintain the encapsulation that shadow DOM provides. That is, events are
// re-targeted to look like they've come from the component rather than
// internal elements within your shadow DOM. Some events do not even
// propagate out of shadow DOM.
//
//The events that do cross the shadow boundary are:
//
//    Focus Events: blur, focus, focusin, focusout
//    Mouse Events: click, dblclick, mousedown, mouseenter, mousemove, etc.
//    Wheel Events: wheel
//    Input Events: beforeinput, input
//    Keyboard Events: keydown, keyup
//    Composition Events: compositionstart, compositionupdate, compositionend
//    DragEvent: dragstart, drag, dragend, drop, etc.
//
//Tips
//If the shadow tree is open, calling event.composedPath() will return an
// array of nodes that the event traveled through.

//
// |||| Using custom events
//
//Custom DOM events which are fired on internal nodes in a shadow tree do
// not bubble out of the shadow boundary unless the event is created using
// the composed: true flag:
//
//// Inside <fancy-tab> custom element class definition:
//selectTab() {
//  const tabs = this.shadowRoot.querySelector('#tabs');
//  tabs.dispatchEvent(new Event('tab-select', {bubbles: true, composed: true}));
//}
//
//If composed: false (default), consumers won't be able to listen for the event outside of your shadow root.
//
//<fancy-tabs></fancy-tabs>
//<script>
//  const tabs = document.querySelector('fancy-tabs');
//  tabs.addEventListener('tab-select', e => {
//    // won't fire if `tab-select` wasn't created with `composed: true`.
//  });
//</script>
//
// |||| Handling focus
//
//If you recall from shadow DOM's event model, events that are fired inside
// shadow DOM are adjusted to look like they come from the hosting element.
// For example, let's say you click an <input> inside a shadow root:
//
//<x-focus>
//  #shadow-root
//    <input type="text" placeholder="Input inside shadow dom">
//
//The focus event will look like it came from <x-focus>, not the <input>.
// Similarly, document.activeElement will be <x-focus>. If the shadow root
// was created with mode:'open' (see closed mode), you'll also be able
// access the internal node that gained focus:
//
//document.activeElement.shadowRoot.activeElement // only works with open mode.
//
//If there are multiple levels of shadow DOM at play (say a custom element
// within another custom element), you need to recursively drill into the
// shadow roots to find the activeElement:
//
//function deepActiveElement() {
//  let a = document.activeElement;
//  while (a && a.shadowRoot && a.shadowRoot.activeElement) {
//    a = a.shadowRoot.activeElement;
//  }
//  return a;
//}
//
//Another option for focus is the delegatesFocus: true option, which expands the focus behavior of element's within a shadow tree:
//
//    If you click a node inside shadow DOM and the node is not a focusable area, the first focusable area becomes focused.
//    When a node inside shadow DOM gains focus, :focus applies to the host in addition to the focused element.
//
//Example - how delegatesFocus: true changes focus behavior
//
//<style>
//  :focus {
//    outline: 2px solid red;
//  }
//</style>
//
//<x-focus></x-focus>
//
//<script>
//customElements.define('x-focus', class extends HTMLElement {
//  constructor() {
//    super(); // always call super() first in the constructor.
//
//    const root = this.attachShadow({mode: 'open', delegatesFocus: true});
//    root.innerHTML = `
//      <style>
//        :host {
//          display: flex;
//          border: 1px dotted black;
//          padding: 16px;
//        }
//        :focus {
//          outline: 2px solid blue;
//        }
//      </style>
//      <div>Clickable Shadow DOM text</div>
//      <input type="text" placeholder="Input inside shadow dom">`;
//
//    // Know the focused element inside shadow DOM:
//    this.addEventListener('focus', function(e) {
//      console.log('Active element (inside shadow dom):',
//                  this.shadowRoot.activeElement);
//    });
//  }
//});
//</script>