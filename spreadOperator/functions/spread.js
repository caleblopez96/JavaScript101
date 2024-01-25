// when passing arguments to a function, use spread to expand an iterable element.

// spread extracts values from iterables into individual elements.

// EXAMPLE:
const temperatures = [76, 72, 68, 79, 54, 65];
Math.min(temperatures); // NaN
Math.min(...temperatures); // 54
