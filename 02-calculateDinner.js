// EXERCISE 2 - Page 41 of the book "Logic of Programming and Algorithms with JavaScript" by Edécio Iepsen

// Develop a program that reads the value of a dinner. Calculate and inform the waiter's tip (10%) and the total amount to be paid.
// EXAMPLE:
// Dinner amount: $80.00
// Waiter's tip: $8.00
// Total to pay: $88.00
// -----------------------

function calculateDinner(dinnerAmount) {
  let waiterTip = 10;

  let total = dinnerAmount + (waiterTip / 100) * dinnerAmount;
  total = Math.round(total);

  console.log(`Dinner amount: $${dinnerAmount.toFixed(2)}`);
  console.log(`Waiter's tip: $${waiterTip}`);
  console.log(`Total to pay: $${total}`);
}

calculateDinner(80);
