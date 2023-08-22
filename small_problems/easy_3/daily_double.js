/*
Write a function that takes a string argument and returns a new string
that contains the value of the original string with all consecutive
duplicate characters collapsed into a single character.
*/

function crunch1(str) {
  let noDuplicateStr = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] !== str[idx + 1]) {
      noDuplicateStr += str[idx];
    }
  }

  return noDuplicateStr;
}

function crunch2(str) {
  return [...str].filter((letter, idx) => {
    return letter !== str[idx + 1];
  }).join('');
}

function crunch3(str) {
  return str.replace(/(.)\1+/g, '$1');
}

console.log(crunch1('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch1('4444abcabccba'));              // "4abcabcba"
console.log(crunch1('ggggggggggggggg'));            // "g"
console.log(crunch1('a'));                          // "a"
console.log(crunch1(''));                           // ""

console.log(crunch2('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch2('4444abcabccba'));              // "4abcabcba"
console.log(crunch2('ggggggggggggggg'));            // "g"
console.log(crunch2('a'));                          // "a"
console.log(crunch2(''));                           // ""

console.log(crunch3('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch3('4444abcabccba'));              // "4abcabcba"
console.log(crunch3('ggggggggggggggg'));            // "g"
console.log(crunch3('a'));                          // "a"
console.log(crunch3(''));                           // ""