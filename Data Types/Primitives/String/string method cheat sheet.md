## String Methods Overview

### Modify or Add Strings
- **`concat()`**: Combines two or more strings into one.
- **`padStart()`**: Pad current string with another string from start.
- **`padEnd()`**: Pad current string with another string from start.
- **`replace()`**: Replaces part of a string with another string or pattern.
- **`replaceAll()`**: Replaces all matches of pattern in string.

### Extract/Return Substrings
- **`slice()`**: Extracts a section of a string and RETURNS it.
- **`substring()`**: RETURNS a part of the string between two indexes.
- **`substr()`**: RETURNS a portion of the string with specified index.
- **`split()`**: Splits a string into array of substrings based on separator.

### Search/Find Strings
- **`indexOf()`**: RETURNS first index where substring is found.
- **`lastIndexOf()`**: RETURNS last index where substring is found.
- **`includes()`**: Checks if a string contains specified substring.
- **`startsWith()`**: Checks if a string starts with specified substring.
- **`endsWith()`**: Checks if a string ends with specified substring.
- **`match()`**: Matches string against regex and returns match.
- **`search()`**: Searches for match against regex and returns index. 

### Transform/Change Case
- **`toUpperCase()`**: Converts entire string to uppercase.
- **`toLowerCase()`**: Converts entire string to lowercase.
- **`trim()`**: Removes whitespace from both ends of the string.
- **`trimStart()`**: Removes whitespace from the start of the string.
- **`trimEnd()`**: Removes whitespace from the end of the string.

### Compare Strings
- **`localeCompare`**: Compares two strings in the current locale.

### Iterate
- **`charAt()`**: RETURNS the character at specified index.
- **`charCodeAt()`**: RETURNS the unicode of the character at specified index.
- **`codePointAt()`**: RETURNS the code point value of character at specified index.
- **`repeat()`**: RETURNS a new string with specified number of copies of original string.