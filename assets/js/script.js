//task1
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

//task2




