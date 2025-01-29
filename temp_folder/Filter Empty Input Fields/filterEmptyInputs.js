// Create a function that filters out empty input fields

function filterFormData(data) {
  // this is the object with the empty inputs filtered out
  const filteredData = {}

  // loop over the object to see if any of the values are empty
  for (let key in data) {
    // check if the value is an empty string
    if (data[key] !== "") {
      // add the key-value pair to the filteredData object
      filteredData[key] = data[key]
    }
  }
  // return the object with the filtered data
  return filteredData
}

const formData = {
  name: "John Doe",
  email: "",
  phone: "123-456-7890",
  address: ""
}

console.log(filterFormData(formData)) // {name: "John Doe", phone: "123-456-7890"}