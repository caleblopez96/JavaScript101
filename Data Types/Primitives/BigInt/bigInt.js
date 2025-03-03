// BigInt values represent numeric values which are too large to be represented by the number primitive.

// SYNTAX:
// BigInt()
// 12345678901234567890n

// EXAMPLE:
let bigNumber = BigInt("123883764537382932023832723");
let bigNumber2 = 12231231231231249575729384n;
console.log(typeof bigNumber2); // bigint

// largest number javascript can handle
console.log(Number.MAX_VALUE); // 1.7976932348623157e+308

// largest number javascript can safely handly (precisely)
let largeNum = Number.MAX_SAFE_INTEGER;
console.log(largeNum); // 9007199254740991
console.log(largeNum + 1); // 9007199254740992
console.log(largeNum + 4); // 9001999254740996 --> should be: 9001999254740995

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
