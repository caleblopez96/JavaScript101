// a boolean is a primitive data type that can have one of two values: true or false.

// EXAMPLE: 
let isNightMode = false;
toggleIcon.addEventListener('click', () => {
    isNightMode = !isNightMode;
    isNightMode ? (nightMode(), toggleIcon.setAttribute('src', 'icons/sun.png')) : (dayMode(), toggleIcon.setAttribute('src', 'icons/moon.png'));
});