// EXERCISE 3 - Page 45 of the book "Logic of Programming and Algorithms with JavaScript" by Edécio Iepsen

// Develop a program for a store that reads the price of a product and informs the store's payment options. Calculate and inform the value for cash payment with a 10% discount and the value in 3 installments.
// EXAMPLE:
// Price: $60.00
// Cash payment: $54.00
// Or 3 installments of: $20.00
// -----------------------

function paymentOptions(price) {
  let discount = 10;
  let cashPayment = price - (discount / 100) * price;
  let installments = price / 3;

  console.log(`Price: $${price.toFixed(2)}`);
  console.log(`Cash payment: $${cashPayment.toFixed(2)}`);
  console.log(`Or 3x Installments of: $${installments.toFixed(2)}`);
}

paymentOptions(60);
