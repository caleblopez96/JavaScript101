// .toLocaleString() converts a number or date to a string, using locale-specific conventions.

// SYNTAX:
// number.toLocaleString()
// number.toLocaleString(locales)
// number.toLocaleString(locales, options)
// date.toLocaleString()
// date.toLocaleString(locales)
// date.toLocaleString(locales, options)

// PARAMETERS:
// locales (optional) - A string with a BCP 47 language tag or an array of such strings that represents the locale(s) to use.
// options (optional) - An object that specifies options for formatting. This can include options like:
//   - style: 'decimal' | 'currency' | 'percent' (for numbers)
//   - currency: A string specifying the currency to use (if style is 'currency')
//   - minimumFractionDigits: Minimum number of decimal places
//   - maximumFractionDigits: Maximum number of decimal places
//   - timeZone: A string representing the time zone (for dates)

// RETURNS:
// A string representing the number or date formatted according to the specified locale and options.

// MUTATION:
// Does NOT mutate the original number or date.

// EXAMPLE 1: formatting a number
const number = 1234567.89;
console.log(number.toLocaleString("en-US")); // '1,234,567.89'
console.log(number.toLocaleString("de-DE")); // '1.234.567,89'

// EXAMPLE 2: formatting a date
const date = new Date("2025-02-20T10:30:00");
console.log(date.toLocaleString("en-US")); // '2/20/2025, 10:30:00 AM'
console.log(date.toLocaleString("fr-FR")); // '20/02/2025 à 10:30:00'

// EXAMPLE 3: formatting a currency
const price = 1234.56;
console.log(
  price.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // '$1,234.56'
console.log(
  price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
); // '1.234,56 €'

// EXAMPLE 4: formatting a percentage
const percent = 0.1234;
console.log(percent.toLocaleString("en-US", { style: "percent" })); // '12%'
console.log(percent.toLocaleString("fr-FR", { style: "percent" })); // '12 %'

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
