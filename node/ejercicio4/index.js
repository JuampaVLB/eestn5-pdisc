import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showUsernameLength = (user) => {
  console.log(user.length + " Letras.");
};

rl.question("Escribe tu nombre de usuario: ", (user) => {
  showUsernameLength(user);

  rl.close();
});
