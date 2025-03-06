// throttling is a technique used to make sure a function is called at most one time throughout some duration

// EXAMPLE: infinite scroll that loads 10 randomly colored div if youre within 200 px of the bottom of the page

// writing your own throttle logic isnt recommened.

function getRandomColor() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#33FFF5",
    "#F5FF33",
    "#FF8C33",
    "#8C33FF",
    "#33FF8C",
    "#FF3333",
    "#33A1FF",
    "#A1FF33",
    "#FF33F5",
    "#F533FF",
  ];

  const randInd = Math.floor(Math.random() * colors.length);
  return colors[randInd];
}
// made up element
const content = document.getElementById("content");

function loadMoreItems() {
  const scrollDistanceBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  if (scrollDistanceBottom < 200) {
    console.log("loading data from api");
    for (let i = 0; i < 10; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.textContent = "item " + (content.children.length + 1);
      item.style.backgroundColor = getRandomColor();
      content.appendChild(item);
    }
  }
}
let isThrottled = false;
window.addEventListener("scroll", () => {
  if (!isThrottled) {
    loadMoreItems();
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 300);
  }
});

// initial load
loadMoreItems();

// REFERENCE:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746864#overview
