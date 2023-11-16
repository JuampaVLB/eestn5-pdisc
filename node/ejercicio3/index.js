import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let username, count;

const showUsername = () => {
  for (let index = 0; index < count; index++) {
    console.log(username);
  }
};

rl.question("Escribe tu nombre de usuario: ", (user) => {
  username = user.trim();

  rl.question("Escribe un número para repetir tu nombre: ", (number) => {
    count = parseInt(number);

    showUsername();

    rl.close();
  });
});
