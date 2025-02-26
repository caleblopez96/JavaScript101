// getElementByName() method of the Document object returns a Nodelist collection of elements when given name attribute in the document.

// SYNTAX:
// getElementByName(name)

// PARAMETERS:
// name - the value of the name attribute of the element(s) you're looking for

// RETURN VALUE:
// nodelist

// EXAMPLE:
<input type="text" name='firstName'></input>

let firstNameInput = document.getElementByName('firstName')

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName