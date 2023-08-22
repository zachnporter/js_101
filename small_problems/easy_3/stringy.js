/*
Write a function that takes one argument, a positive integer,
and returns a string of alternating '1's and '0's, always starting
with a '1'. The length of the string should match the given integer.
*/

function stringy1(integer) {
  let result = '';
  let count = 1;

  while (count <= integer) {
    if (count % 2 === 1) {
      result += '1';
    } else {
      result += '0';
    }

    count += 1;
  }

  return result;
}

function stringy2(integer) {
  let result = '';

  for (let count = 1; count <= integer; count++) {
    if (count % 2 === 1) {
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}

console.log(stringy1(6));    // "101010"
console.log(stringy1(9));    // "101010101"
console.log(stringy1(4));    // "1010"
console.log(stringy1(7));    // "1010101"

console.log(stringy2(6));    // "101010"
console.log(stringy2(9));    // "101010101"
console.log(stringy2(4));    // "1010"
console.log(stringy2(7));    // "1010101"