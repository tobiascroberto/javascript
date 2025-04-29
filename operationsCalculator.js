// calculator for numbers!!

import { multiply, substract, sum } from "./operations.js";

console.log("Adding two numbers the output is: ", sum(12, 12));

console.log(
  "Adding more than two numbers the output is: ",
  sum(12, 12, 12, 10)
);

console.log("Substracting two numbers the output is: ", substract(12, 12));

console.log(
  "Substracting two numbers the output is: ",
  substract(12, 12, 12, 10)
);

console.log("Multiplying two numbers the output is: ", multiply(1, 2));

console.log(
  "Multiplying more than two numbers the output is: ",
  multiply(1, 2, 3, 4, 5)
);
