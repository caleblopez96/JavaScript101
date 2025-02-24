// Promise chaining allows multiple asynchronous operations to be executed in sequence.

// return a new fetch call instead of nesting them

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}`;

// WRONG WAY - NESTED PROMISES = CALLBACK HELL:
fetch(`${url}/1`)
  .then((res1) => {
    console.log("response 1: ", res1);
    fetch(`${url}/2`)
      .then((res2) => {
        console.log("response 2: ", res2);
        fetch(`${url}/3`)
          .then((res3) => {
            console.log("Response 3: ", res3);
            fetch(`${url}/4`)
              .then((res4) => {
                console.log("Response 4: ", res4);
              })
              .catch((err) => console.log("Error: ", err));
          })
          .catch((err) => console.log("Error: ", err));
      })
      .catch((err) => console.log("Error: ", err));
  })
  .catch((err) => console.log("Error: ", err));

// OKAY WAY - avoiding callback hell by returning promises instead of nesting them:
fetch(`${url}/1`)
  .then((res1) => {
    console.log("Response 1: ", res1);
    return fetch(`${url}/2`);
  })
  .then((res2) => {
    console.log("Response 2: ", res2);
    return fetch(`${url}/3`);
  })
  .then((res3) => {
    console.log("Response 3: ", res3);
    return fetch(`${url}/4`);
  })
  .then((res4) => {
    console.log("Response 4: ", res4);
  })
  .catch((err) => console.log("Error: ", err));

// BEST WAY - ASYNC...AWAIT with TRY...CATCH
async function getFourPokemon() {
  const res1 = await fetch(`${url}/1`);
  console.log(res1);

  const res2 = await fetch(`${url}/2`);
  console.log(res2);

  const res3 = await fetch(`${url}/3`);
  console.log(res3);

  const res4 = await fetch(`${url}/4`);
  console.log(res4);
}
