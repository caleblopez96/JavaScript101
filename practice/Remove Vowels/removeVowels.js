function removeVowels(string) {
  const stringWithoutVowels = string.replace(/[aeiouAEIOU]/g, "");
  return stringWithoutVowels;
}

removeVowels("dog"); // 'dg'
