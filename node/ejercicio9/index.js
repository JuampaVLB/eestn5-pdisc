import fs from "fs";

let path = "./assets/archivo.txt";

fs.readFile(path, "utf-8", (err, data) => {
  console.log("cargando archivo...");
  console.clear();

  if (err) {
    console.error("Error al leer el archivo:", error.message);
  } else {
    console.log("Contenido Del Archivo: " + data);
    console.log("Longitud: " + data.length);
  }
});
