import fs from "fs";

let path = "./assets/numeros.txt";

fs.readFile(path, "utf-8", (err, data) => {
  console.log("cargando archivo...");
  console.clear();

  if (err) {
    console.error("Error al leer el archivo:", err.message);
  } else {
    const arr = data.split(",").map(Number);

    console.log(arr.reduce((prev, next) => prev + next));
  }
});
