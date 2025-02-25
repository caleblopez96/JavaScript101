// Promise chaining allows multiple asynchronous operations to be executed in sequence.

// return a new fetch call instead of nesting them

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}`;

// BEST WAY - ASYNC...AWAIT with TRY...CATCH
async function getFourPokemon() {
  try {
    const res1 = await fetch(`${url}/1`);
    const pokemon1 = await res1.json();
    console.log(res1);

    const res2 = await fetch(`${url}/2`);
    const pokemon2 = await res2.json();
    console.log(res2);

    const res3 = await fetch(`${url}/3`);
    const pokemon3 = await res3.json();
    console.log(res3);

    const res4 = await fetch(`${url}/4`);
    const pokemon4 = await res4.json();
    console.log(res4);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getFourPokemon();

// WRONG WAY - NESTED PROMISES = CALLBACK HELL:
fetch(`${url}/1`)
  .then((res1) => res1.json()) // Parse JSON response
  .then((data1) => {
    console.log("Response 1:", data1);
    fetch(`${url}/2`)
      .then((res2) => res2.json())
      .then((data2) => {
        console.log("Response 2:", data2);
        fetch(`${url}/3`)
          .then((res3) => res3.json())
          .then((data3) => {
            console.log("Response 3:", data3);
            fetch(`${url}/4`)
              .then((res4) => res4.json())
              .then((data4) => {
                console.log("Response 4:", data4);
              })
              .catch((err) => console.log("Error:", err));
          })
          .catch((err) => console.log("Error:", err));
      })
      .catch((err) => console.log("Error:", err));
  })
  .catch((err) => console.log("Error:", err));

// OKAY WAY - avoiding callback hell by returning promises instead of nesting them:
fetch(`${url}/1`)
  .then((res1) => res1.json()) // Parse JSON response
  .then((data1) => {
    console.log("Response 1:", data1);
    return fetch(`${url}/2`);
  })
  .then((res2) => res2.json())
  .then((data2) => {
    console.log("Response 2:", data2);
    return fetch(`${url}/3`);
  })
  .then((res3) => res3.json())
  .then((data3) => {
    console.log("Response 3:", data3);
    return fetch(`${url}/4`);
  })
  .then((res4) => res4.json())
  .then((data4) => {
    console.log("Response 4:", data4);
  })
  .catch((err) => console.log("Error:", err));
