const toggleButton = document.querySelector("#toggleMode");
const body = document.querySelector("body");

let isDarkMode = localStorage.getItem("darkMode") === "true";

if (isDarkMode) {
  body.classList.add("darkMode");
}

const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle("darkMode", isDarkMode);
  localStorage.setItem("darkMode", isDarkMode);
};

toggleButton.addEventListener("click", toggleTheme);

// Working demo:
// https://codepen.io/caleblopez/pen/raNvMzG

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40763046#overview
