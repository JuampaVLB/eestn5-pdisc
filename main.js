const list = ["papa", "zanahoria", "arvejas"];
const body = document.querySelector('body');

const h1 = document.createElement('h1');
const ul = document.createElement('ul');
const div = document.createElement('div');
const img = document.createElement('img');

for (let index = 0; index < 3; index++) {
    let li = document.createElement('li');
    li.innerHTML = list[index];
    ul.appendChild(li);
}

const txtH1 = document.createTextNode("DOM problema 1");

h1.appendChild(txtH1),

body.appendChild(h1);
body.appendChild(ul);

img.setAttribute("src", "gracias.jpg");
img.setAttribute("alt", "Gracias por su atencion");
img.setAttribute("height", "400px");
img.setAttribute("width", "400px");

div.appendChild(img);

body.appendChild(div);
