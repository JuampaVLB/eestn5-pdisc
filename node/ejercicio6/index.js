import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numbers = [];

const showQuestion = (index) => {
  if (index > 0) {
    rl.question("Escribe tu nota: ", (number) => {
      numbers.push(parseInt(number));

      showQuestion(index - 1);
    });
  } else {
    rl.close();
    doubleOfEachNumber(numbers);
  }
};

const doubleOfEachNumber = (arr) => {
  const res = arr.map((n) => n * 2);

  console.log("Old Array: " + arr);
  console.log("New Array: " + res);
};

showQuestion(3);
