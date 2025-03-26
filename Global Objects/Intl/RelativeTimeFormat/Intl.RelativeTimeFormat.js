// use Intl.RelativeTimeFormat() to format how much time is between something

// CONSTRUCTOR:
// new Intl.RelativeTimeFormat();
// new Intl.RelativeTimeFormat(locales);
// new Intl.RelativeTimeFormat(locales, options);

// PARAMETERS:
// locales - string representing the locale
// options -
/**
 * Options object for Intl.RelativeTimeFormat
 *
 * All properties are optional and retrieved in the following order:
 *
 * @property {string} [localeMatcher="best fit"] - The locale matching algorithm to use.
 *   - "lookup": Uses a lookup algorithm.
 *   - "best fit" (default): Attempts a more flexible matching approach.
 *   - See MDN for more details on locale identification and negotiation.
 *
 * @property {string} [numberingSystem] - The numbering system to use for number formatting.
 *   - Examples: "arab", "hans", "mathsans", etc.
 *   - Refer to Intl.supportedValuesOf() for a list of supported numbering systems.
 *   - This option can also be set via the `nu` Unicode extension key.
 *   - If both are provided, this property takes precedence.
 *
 * @property {string} [style="long"] - The style of the formatted relative time.
 *   - "long" (default): E.g., "in 1 month"
 *   - "short": E.g., "in 1 mo."
 *   - "narrow": E.g., "in 1 mo." (similar to short style in some locales)
 *
 * @property {string} [numeric="always"] - Whether to use numeric values in the output.
 *   - "always" (default): Forces numeric values, e.g., "1 day ago".
 *   - "auto": Uses idiomatic phrasing where possible, e.g., "yesterday" instead of "1 day ago".
 */

// INSTANCE METHODS:
// .format()

const rtf = new Intl.RelativeTimeFormat("en", {
  // this makes it so that it says "next month" instead of "1 month"
  numeric: "auto", // first Arg < 1 ? "next" : "in"
});

console.log(rtf.format(10, "days")); // in 10 days
console.log(rtf.format(1, "month")); // 'next month'
console.log(rtf.format(1, "day")); // tomorrow

console.log(rtf.formatToParts(10, "months"));
