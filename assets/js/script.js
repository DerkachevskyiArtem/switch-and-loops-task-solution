//Task1: Calculator
const calculator = function (num1, num2, operator) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1 - num2)
  ) {
    return null;
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Помилка! Ділення на нуль не можливе.";
    default:
      return "Оператор вказанно не вірно! Використайте: +, -, *, /";
  }
};

//Task 2: Sum using while loop

let whileLoopSum = 0;

let i = 1;

while (i <= 100) {
  whileLoopSum += i;
  i++;
}
console.log(whileLoopSum);

// Task 2: Sum using do-while loop

let doWhileLoopSum = 0;

let j = 1;

do {
  doWhileLoopSum += j;
  j++;
} while (j <= 100);

console.log(doWhileLoopSum);

// Task 2: Sum using for loop

let forLoopSum = 0;

for (i = 1; i <= 100; i++) {
  forLoopSum += i;
}

console.log(forLoopSum);

/*
// Task 3: Unlimited attempts with while loop

let whileAnswer;

while (whileAnswer !== 6) {
  whileAnswer = +prompt("Розв'яжіть рівняння: 2 + 2 * 2");
  // whileAnswer = Number(prompt("Розв'яжіть рівняння: 2 + 2 * 2"));
  whileAnswer === 6
    ? alert("Ви дали правильну відповідь!")
    : alert("Неправильно, спробуйте ще раз.");
}
    */

/* // Task 3: Unlimited attempts with do-while loop

let doWhileAnswer;

do {
  doWhileAnswer = +prompt("Розв'яжіть рівняння: 2 + 2 * 2");
  // doWhileAnswer = Number(prompt("Розв'яжіть рівняння: 2 + 2 * 2"));
  doWhileAnswer === 6
    ? alert("Ви дали правильну відповідь!")
    : alert("Неправильно, спробуйте ще раз.");
} while (doWhileAnswer !== 6); 
 */

/* 
// Task 3: Unlimited attempts with for loop

for (i = 1; i > 0; i++) {
  let forLoopAnswer = +prompt("Розв'яжіть рівняння: 2 + 2 * 2");
  if (forLoopAnswer === 6) {
    alert("Ви дали правильну відповідь!");
    break;
  } else {
    alert("Неправильно, спробуйте ще раз.");
  }
}
  */

/*
// Task 3: Limited attempts with while loop

let answer;
let attempts = 3;

while (attempts > 0) {
  answer = +prompt("Розв'яжіть рівняння: 2 + 2 * 2");
  // answer = Number(prompt("Розв'яжіть рівняння: 2 + 2 * 2"));

  if (answer === 6) {
    alert("Ви дали правильну відповідь!");
    break;
  } else {
    attempts--;
    alert(`Неправильно. У вас залишилось ${attempts} спроб(и).`);
    // alert("Неправильно. У вас минус одна спроба.");
  }

  if (attempts === 0) {
    alert("Ви використали всі спроби. Правильна відповідь: 6");
  }
}
  */

//Bonus task: Power function
const power = function (num, exponent) {
  if (
    typeof num !== "number" ||
    typeof exponent !== "number" ||
    isNaN(num - exponent)
  ) {
    return null;
  }

  let result = 1;
  let positiveExponent = exponent;

  if (exponent < 0) {
    positiveExponent = -exponent;
  }

  while (positiveExponent > 0) {
    result *= num;
    positiveExponent--;
  }
  return exponent < 0 ? 1 / result : result;
};

console.log(power(8, -2));

