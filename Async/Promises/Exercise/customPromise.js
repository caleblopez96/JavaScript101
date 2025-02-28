// EXAMPLE: create a promise that either resolves or rejects after 5 seconds based on if the num is < 0.5

function randomResolveReject(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.floor(Math.random() * 10);
      if (rand < 5) {
        resolve("resolved!");
      } else {
        reject("rejected!");
      }
    }, duration);
  });
}

async function handlePromise() {
  try {
    const val = await randomResolveReject(5000);
    console.log(val);
  } catch (error) {
    console.error(error);
  }
}

handlePromise();
