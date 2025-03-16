async function postData() {
  const payload = {
    key1: "value1",
    key2: "value2",
  };

  try {
    const response = await fetch("https://api.example.com/data", {
      method: "POST", // specify POST method
      headers: {
        "Content-Type": "application/json", // tells the server you're sending JSON
      },
      body: JSON.stringify(payload), // convert the payload object to JSON
    });

    const result = await response.json(); // parse the response
    console.log(result); // Log the result
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

postData();

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40789484#overview
