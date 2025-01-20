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
- **`at()`**: RETURNS index of string character to be returned.

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

---

### Code Snippets

#### `.at(index)`
Takes integer and returns item at that integers index.

RETURNS the string at index.
RETURNS undefined if not found.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"hello".at(4) // o
```
---

#### `charAt(index)`
Returns a string consisting of UTF code at index.

RETURNS string at index.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"hello".charAt(4) // o
```

---
#### `concat()`
#### `concat(str1)`
#### `concat(str1, str2)`
#### `concat(str1, str2 /* ... */ strN)`
Merges strings together.

RETURNS a NEW string concatenated.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"Java".concat("Script") // JavaScript
```

---
#### `endsWith(searchElement)`
#### `endsWith(searchElement, endPosition)`
Determines if string ends with specified string.

RETURNS boolean.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"I love JavaScript".toLowerCase().endsWith("javascript")
```

---
#### `includes(searchString)`
#### `includes(searchString, position)`
Performs case-sensitive search for given string.

RETURNS boolean.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"JavaScript".includes("Java") // true
```

---
#### `indexOf(searchString)`
#### `indexOf(searchString, position)`
Searches string and returns index of first occurrence of string.

RETURNS the index of first occurrence or -1 if not found.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"I love JavaScript".indexOf("love") // 2
```

---
#### `lastIndexOf(searchString)`
#### `lastIndexOf(searchString, position)`
Searches string and returns index of last occurrence of string.

RETURNS the index of last occurrence or -1 if not found.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"JavaScript Python JavaScript".toLowerCase().lastIndexOf("javascript") // 18
```

---
#### `padEnd(targetLength)`
#### `padEnd(targetLength, padString)`
Pads the string with supplied string at end of string.

RETURNS newly padded string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"JavaScript".padEnd(15, "*") // JavaScript*****
```

---
#### `padStart(targetLength)`
#### `padStart(targetLength, padString)`
Pads the string with supplied string at start of string.

RETURNS newly padded string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"JavaScript".padStart(15, "*") // *****JavaScript
```

---
#### `repeat(count)`
Creates a new string which containing item to repeat.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
const emotion = "Love! "
console.log(`I ${emotion.repeat(3)}JavaScript`) // I Love! Love! Love! JavaScript
```

---
#### `replace(pattern, replacement)`
##### `pattern - string or regex that you want replaced`
##### `replacement - string or regex that you want to replace it with`
Returns a new string with one, some, or all matches of a pattern (string or regex).

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE
```js
"Testing the replace method".replace("Testing", "Studying") // Studying the replace method.
```

---
#### `replaceAll(pattern, replacement)`
Returns a new string with all matches of a pattern (string or regex).

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"Love Hate Love Hate Love Hate".replaceAll("Hate", "Love") // "Love Love Love Love Love Love"
```

---
#### `search(regexp)`
Searches for a match between the string and a regexp, returning index for first match.

RETURNS index of first match or -1 if not found.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js

```

---
#### `slice(indexStart)`
#### `slice(indexStart, indexEnd)
Extracts a section of a string and returns it as new string.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.

```js
"I love JavaScript".slice(2, 6) // "love"
```

---
#### `split(separator)`
#### `split(separator, limit)`
Takes a pattern(separator) and divides the string into an array.

RETURNS array.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"the quick brown fox jumps over the lazy dog".split(" ") // ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```

---
#### `startsWith(searchString)`
#### `startsWith(searchString, position)`
Determines if string begins with searchString.

RETURNS boolean.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"Its Friday Night".startsWith("Friday") // false
"Its Friday Night".startsWith("Friday", 4) // true
```

---
#### `substring(indexStart)`
#### `substring(indexStart, indexEnd)`
Returns the part of the string from the start index up to but
not including the end index. end of string if no end is specified.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"JavaScript".substring(4) // 'Script'
```

---
#### `toLocaleLowerCase()`
#### `toLocaleLowerCase(locales)`
Returns the string converted to lower case, according 
to locale-specific mappings.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js

```

---
#### `toLocaleUpperCase()`
#### `toLocaleUpperCase(locales)`
Returns the string converted to upper case, according 
to locale-specific mappings.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js

```

---
#### `toLowerCase()`
Returns the string converted to lower case.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"JAVASCRIPT".toLowerCase() // "javascript"
```

---
#### `toUpperCase()`
Returns the string converted to upper case.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"javascript".toUpperCase() // "JAVASCRIPT"
```

---
#### `trim()`
Removes whitespace from both ends of string.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"    JavaScript     ".trim() // "JavaScript"
```

---
#### `trimEnd()`
#### `trimRight()`
Removes whitespace from the end/right of the string.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
"Javascript ".trimEnd() // "JavaScript"
```

---
#### `trimStart()`
#### `trimLeft()`
Removes whitespace from the beginning/left of the string.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
" JavaScript".trimStart() // "JavaScript"
```

---
#### `valueOf()`
Returns the string value.

RETURNS new string.

DOES NOT MUTATE STRING. STRINGS ARE IMMUTABLE.
```js
const str = new String("Hello world") // { "Hello world" }
str.valueOf() // "Hello world"
```