// EXAMPLE:
async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await fetch("https://api.example.com/upload", {
      method: "POST",
      body: formData,
    });
    const result = response.json();
    console.log(result);
  } catch (error) {
    console.error("Error upload file: ", error);
  }
}

const fileInput = document.querySelector("#myFile");
fileInput.addEventListener("change", () => {
  const file = event.target.files[0];
  uploadFile(file);
});

// REFERENCE:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40789488#overview
