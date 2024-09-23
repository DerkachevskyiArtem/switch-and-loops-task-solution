//task1 solution
const calculator = function (num1, num2, operator) {
  if (
    typeof num1 !== "number" ||
    typeof num1 !== "number" ||
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

//task2 while loop solution

let whileLoopSum = 0;

let i = 1;

while (i <= 100) {
  whileLoopSum += i;
  i++;
}
console.log(whileLoopSum);

//task2 do-while loop solution

let doWhileLoopSum = 0;

let j = 1;

do {
  doWhileLoopSum += j;
  j++;
} while (j <= 100);

console.log(doWhileLoopSum);

//task2 for loop solution

let forLoopSum = 0;

for (i = 1; i <= 100; i++) {
  forLoopSum += i;
}

console.log(forLoopSum);

/*
//task3 while loop unlimited

let whileAnswer;

while (whileAnswer !== 6) {
  whileAnswer = +prompt("Розв'яжіть рівняння: 2 + 2 * 2");
  // whileAnswer = Number(prompt("Розв'яжіть рівняння: 2 + 2 * 2"));
  whileAnswer === 6
    ? alert("Ви дали правильну відповідь!")
    : alert("Неправильно, спробуйте ще раз.");
}
    */

/* //task3 do-while loop unlimited

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
//task3 for loop unlimited

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
//task3 for loop limited

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
