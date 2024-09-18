// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.


function asyncfunc(callback) {
  setTimeout(() => {
    callback
  }, 2000);
}

asyncfunc(() => {
  console.log(`I run after two seconds`)
})



// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
const url = "www.example.com"

function fetchData(url) {

}



async function fetchData(){
  try {
    const response = await fetch()
    const data = await response.json()
  }
  catch(error) {
    console.log("error:", error)
  }
}