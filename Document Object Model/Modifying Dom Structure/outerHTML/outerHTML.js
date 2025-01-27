// outerHTML returns a string containing an HTML serialization of the element and its descendants.

// SYNTAX:
// element.outerHTML

// EXAMPLE:
<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

const unorderedList = document.querySelector("ul")

console.log(unorderedList.outerHTML)
// "<ul>
//    <li>A</li>
//    <li>B</li>
//    <li>C</li>
//  </ul>"