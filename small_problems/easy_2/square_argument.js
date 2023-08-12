/*
Using the multiply() function from the "Multiplying Two Numbers" problem,
write a function that computes the square of its argument
(the square is the result of multiplying a number by itself).


Further Exploration:
What if we wanted generalize this function to a "power to the n" type function:
cubed, to the 4th power, to the 5th, etc. How would we go about doing so while
still using the multiply() function?
*/

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num, power = 2) {
  if (power === 2) {
    return multiply(num, num);
  }

  return num * square(num, power - 1);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(square(2, 3) === 8); // logs true
console.log(square(3, 5) === 243); // logs true