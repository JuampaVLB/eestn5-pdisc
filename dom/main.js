const body = document.querySelector("#root");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const ol = document.createElement("ol");
const li = document.createElement("li");
const a = document.createElement("a");

let txt1 = document.createTextNode("Modelo de objetos del Documento");
let txt2 = document.createTextNode("Problema 1");
let txt3 = document.createTextNode("Ir a Microsoft");

h1.appendChild(txt1);
h2.appendChild(txt2);

body.append(h1);
body.append(h2);

a.setAttribute("href", "https://microsoft.com");
a.setAttribute("target", "BLANK");

a.appendChild(txt3);
li.appendChild(a);

ol.appendChild(li);

console.log(ol);

body.append(ol);
