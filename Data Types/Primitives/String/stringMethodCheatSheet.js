"JavaScript".length // 10
"JavaScript"[2] // "v"
"JavaScript".charAt(2) // "v"
"JavaScript".charCodeAt(2) // 118
"JavaScript".indexOf('v') // 2
"JavaScript".toLowerCase() // "javascript"
"JavaScript".toUpperCase() // "JAVASCRIPT"
"JavaScript".slice(0, 4) // "Java"
"JavaScript".substring(4) // "Script"
"JavaScript".concat(" Developer") // "JavaScript Developer"
"JavaScript Developer".split(" ") // ["JavaScript", "Developer"]
"JavaScript Developer".includes("Developer") // true
"Java Developer".replace("Java", "JavaScript") // "JavaScript Developer"
"Developer Developer".replaceAll("Developer", "JavaScript") // "JavaScript JavaScript"
"  JavaScript  ".trim() // "JavaScript"
"  JavaScript".trimStart() // "JavaScript"
"JavaScript  ".trimEnd() // "JavaScript"
"1234".padStart(10, "*") // ******1234
"JavaScript is ".padEnd(20, "*") // "JavaScript is *******"
"JavaScript".startsWith("J") // true
"JavaScript".endsWith("t") // true
"JavaScript".repeat("2") // "JavaScript JavaScript"
"JavaScript Developer".indexOf("JavaScript") // 0
"JavaScript Developer".lastIndexOf("Developer") // 11
"JavaScript Developer".search("Developer") // 11
"JavaScript Developer".includes("JavaScript") // true
