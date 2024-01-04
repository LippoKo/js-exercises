// EXERCISE 1
// Perform the 4 basic operations with the numbers 2 and 4:
// After each operation, print on the screen in the following format:
// Addition: 2 + 4 = x
// Subtraction: 2 - 4 = x
// Division: 2 / 4 = x
// Multiplication: 2 * 4 = x
// ---------------------------------------------------------------

let num1 = 2;
let num2 = 4;

operations = (a, b) => {
  let sum = a + b;
  let sub = a - b;
  let mult = a * b;
  let div = a / b;

  console.log(`Sum: ${a} + ${b} = ` + sum);
  console.log(`Subtraction: ${a} - ${b} = ` + sub);
  console.log(`Multiplication: ${a} * ${b} = ` + mult);
  console.log(`Division: ${a} / ${b} = ` + div);
};

operations(num1, num2);
