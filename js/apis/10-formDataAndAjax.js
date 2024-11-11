//Warning: When using FormData to submit POST requests using XMLHttpRequest or the Fetch_API with the multipart/form-data Content-Type (e.g. when
//uploading Files and Blobs to the server), do not explicitly set the Content-Type header on the request. Doing so will prevent the browser from
//being able to set the Content-Type header with the boundary expression it will use to delimit form fields in the request body.

//Note: If you pass in a reference to the form, the request method specified in the form will be used over the method specified in the open() call.

// ||| Creating a FormData object from scratch
//
// const httpRequest = new XMLHttpRequest();
// httpRequest.onload = () => {
//     console.log(httpRequest.status, httpRequest.statusText)
// }
// httpRequest.open("POST", "https://localhost:8443/forJS/sendingFormParameters");
//
// const formData = new FormData();
// //When using the append() method it is possible to use the third optional parameter to pass a filename inside the Content-Disposition header that
// //is sent to the server. When no filename is specified (or the parameter isn't supported), the name "blob" is used.
// formData.append("username", "Groucho");
// formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"
//
// httpRequest.send(formData);

// ||| Retrieving a FormData object from an HTML form

// const formElement = document.querySelector("form");
// const formData = new FormData(formElement);
// const request = new XMLHttpRequest();
// request.open("POST", "submitform.php");
// formData.append("serialnumber", serialNumber++);
// request.send(formData);

// ||| Sending files using a FormData object

// <form encType="multipart/form-data" method="post" name="fileinfo">
//     <label>Your email address:</label>
//     <input type="email" autoComplete="on" autoFocus name="userid" placeholder="email" required size="32" maxLength="64"/><br/>
//     <label>Custom file label:</label>
//     <input type="text" name="filelabel" size="12" maxLength="32"/><br/>
//     <label>File to stash:</label>
//     <input type="file" name="file" required/>
//     <input type="submit" value="Stash the file!"/>
// </form>
// <div></div>

// You can also append a File or Blob directly to the FormData object, like this:
// data.append("myfile", myBlob, "filename.txt");

// var form = document.forms.namedItem("fileinfo");
// form.addEventListener('submit', function(ev) {
//     var oOutput = document.querySelector("div"), oData = new FormData(form);
//
//     oData.append("CustomField", "This is some extra data");
//
//     var oReq = new XMLHttpRequest();
//     oReq.open("POST", "stash.php", true);
//     oReq.onload = function(oEvent) {
//         if (oReq.status == 200) {
//             oOutput.innerHTML = "Uploaded!";
//         } else {
//             oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
//         }
//     };
//
//     oReq.send(oData);
//     ev.preventDefault();
// }, false);

// ||| Using a formdata event
//
//
// A more recent addition to the platform than the FormData object is the formdata event — this is fired on an HTMLFormElement object after
// the entry list representing the form's data is constructed. This happens when the form is submitted, but can also be triggered by the
// invocation of a FormData() constructor.
//
// This allows a FormData object to be quickly obtained in response to a formdata event firing, rather than needing to put it together yourself.
//
// Typically this is used as shown in our simple formdata event demo — in the JavaScript we reference a form:
//
// const formElem = document.querySelector('form');
//
// In our submit event handler we use preventDefault to stop the default form submission, then invoke a FormData constructor to trigger the formdata event:
//
// formElem.addEventListener('submit', (e) => {
//   // on form submission, prevent default
//   e.preventDefault();
//
//   // construct a FormData object, which fires the formdata event
//   new FormData(formElem);
// });
//
// When the formdata event fires we can access the FormData object using FormDataEvent.formData, then do what we like with it (below we post
// it to the server using XMLHttpRequest).
//
// formElem.addEventListener('formdata', (e) => {
//   console.log('formdata fired');
//
//   // Get the form data from the event object
//   let data = e.formData;
//   for (var value of data.values()) {
//     console.log(value);
//   }
//
//   // submit the data via XHR
//   let request = new XMLHttpRequest();
//   request.open("POST", "/formHandler");
//   request.send(data);
// });