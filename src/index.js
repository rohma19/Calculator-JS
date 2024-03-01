// Say hello let'us build a calculator
alert("Hello there, let'us build a calculator");

// asking the users to add their numbers

let numb1 = Number(prompt('enter the first number'));
let numb2 = Number(prompt('enter the second number'));
while (isNaN(numb1) || isNaN(numb2)) {
  alert('please enter a valid number');
}

// asking the users for their operators
let operator = prompt("what operator do you want tou use? Enter '+', '-', '*', or '/'");

// calling the operators

let result;
if (operator === '+') {
  result = numb1 + numb2;
} else if (operator === '-') {
  result = numb1 - numb2;
} else if (operator === '*') {
  result = numb1 * numb2;
} else if (operator === '/') {
  result = numb1 / numb2;
} else {
  alert("Invalid operator. Please enter one of '+', '-', '*', or '/'");
}


// Display the result
alert(`The result of ${numb1} ${operator} ${numb2} is: ${result}`);
