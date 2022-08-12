module.exports = function reverse (n) {
  const string = String(n);
  const reversedString = string.split("").reverse().join("");
  return parseInt(reversedString);
}
