const string = "The quick brown fox jumps over the lazy dog. The dog barked at the fox.";
const replaceString = string.replace("fox", "elephant");

const replaceStringAll = string.replaceAll("fox", "elephant");

console.log(string); // The quick brown fox jumps over the lazy dog. The dog barked at the fox.
console.log(replaceString); // The quick brown elephant jumps over the lazy dog. The dog barked at the fox.
console.log(replaceStringAll); // The quick brown elephant jumps over the lazy dog. The dog barked at the elephant.