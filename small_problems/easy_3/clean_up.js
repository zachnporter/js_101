/*
Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the
non-alphabetic characters replaced by spaces. If one or more non-alphabetic
characters occur in a row, you should only have one space in the result
(i.e., the result string should never have consecutive spaces).
*/

function cleanUp(str) {
  let cleanStr = '';

  for (let idx = 0; idx < str.length; idx++) {
    if (isAlphabeticChar(str[idx])) {
      cleanStr += str[idx];
    } else if (!cleanStr.endsWith(' ')) {
      cleanStr += ' ';
    }
  }

  return cleanStr;
}

function isAlphabeticChar(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "