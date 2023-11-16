import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numbers = [];

const showQuestion = (index) => {
  if (index > 0) {
    rl.question("Escribe un número: ", (number) => {
      numbers.push(parseInt(number));

      showQuestion(index - 1);
    });
  } else {
    rl.close();
    averageOfNumbers(numbers);
  }
};

const averageOfNumbers = (arr) => {
  const sum = arr.reduce((prev, next) => prev + next, 0);

  console.log("Promedio:", sum / arr.length);
};

showQuestion(10);
