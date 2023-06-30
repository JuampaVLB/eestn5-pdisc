const form = document.querySelector("#form");
const url = document.querySelector("#url");
const image = document.querySelector("#image");
const btn_delete = document.querySelector("#delete");
const loading = document.querySelector("#loading");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    image.src = url.value;
})

url.addEventListener("enter", (e) => {
    e.preventDefault();
    // image.src = url.value;
    // console.log("");
})

btn_delete.addEventListener("click", (e) => {
    e.preventDefault();
    image.src = "";
})