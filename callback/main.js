const container = document.querySelector("#container");
const info = document.querySelector(".info");
var contador = 0;

function armarLista(usuarios) {
  const ul = document.createElement("ul");

  for (let k = 0; k < usuarios.length; k++) {
    const li = document.createElement("li");
    const href = document.createElement("a");
    const firstname = document.createElement("p");
    const email = document.createElement("p");
    const avatar = document.createElement("img");
    const div = document.createElement("div");

    firstname.textContent = `${usuarios[k].first_name} ${usuarios[k].last_name}`;
    email.textContent = `${usuarios[k].email}`;

    avatar.setAttribute("src", `${usuarios[k].avatar}`);

    href.appendChild(avatar);

    div.appendChild(firstname);
    div.appendChild(email);
    href.appendChild(div);
    li.appendChild(href);

    li.setAttribute("onClick", `getInfo(${usuarios[k].id})`);

    ul.appendChild(li);
  }

  container.appendChild(ul);
}

const getInfo = (id) => {
  fetch(`https://reqres.in/api/users/${id}`)
    .then((response) => response.json())
    .then((res) => {
      const userData = res.data;

      if (contador > 0) {
        document.querySelector(".info").classList.remove("active");

        setTimeout(() => {
          document.querySelector(".info").classList.add("active");
        }, 1800);
      } else {
        document.querySelector(".info").classList.add("active");
      }

      contador++;
      // Insert Data

      document
        .querySelector("#info-avatar")
        .setAttribute("src", userData.avatar);
      document.querySelector("#info-id").innerHTML = userData.id;
      document.querySelector("#info-email").innerHTML = userData.email;
      document.querySelector("#info-firstname").innerHTML = userData.first_name;
      document.querySelector("#info-lastname").innerHTML = userData.last_name;
    });
};

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((datos) => {

    document.querySelector(".container-loader").style.display = "none"
    container.classList.add("active");

    const usuarios = datos.data;
    armarLista(usuarios);
  })
  .catch((err) => console.log(err));
