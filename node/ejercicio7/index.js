import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const words = [];

const showQuestion = (index) => {
  if (index > 0) {
    rl.question("Escribe una palabra: ", (word) => {
      words.push(word);

      showQuestion(index - 1);
    });
  } else {
    rl.close();
    findWordMostLength(words);
  }
};

const findWordMostLength = (arr) => {
  const res = arr.reduce((prev, next) => {
    return prev.length > next.length ? prev : next;
  }, "");

  console.log("Palabra Mas Larga: " + res);
};

showQuestion(2);
