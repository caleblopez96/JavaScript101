// A truthy value is a value that is considered true when encountered in a boolean.

// All values are truthy unless defined as falsy.

// All values are truthy EXCEPT false, 0, -0, 0n, "", null, undefined, NaN and document.all

// EXAMPLES:

if (true); // true
if ({}); // true
if ([]); // true
if (42); // true
if ("0"); // true
if ("false"); // true
if (new Date()); // true
if (-42); // true
if (12n); // true
if (3.14); // true
if (-3.14); // true
if (Infinity); // true
if (-Infinity); // true