'use strict';

const form = document.createElement('form');
form.method = "POST"

const add = (x, z) => {
    x.appendChild(z);
}

// Labels 

const label_user = document.createElement('label');
label_user.textContent = "Usuario: ";
label_user.for = "user";

const label_pwd = document.createElement('label');
label_pwd.textContent = "Password: ";
label_pwd.for = "password";

const label_city = document.createElement('label');
label_city.textContent = "Ciudad: ";
label_user.city = "city";

// Inputs

const user = document.createElement('input');
user.name = "user";
user.type = 'text';
user.placeholder = 'Ingrese Usuario';
user.value = '';

const pwd = document.createElement('input');
pwd.name = "password";
pwd.type = 'password';
pwd.placeholder = 'Ingrese Password';
pwd.value = '';

const submit = document.createElement('input');
submit.name = "submit";
submit.type = 'submit';
submit.value = 'ENVIAR';

// Select

const city = document.createElement('select');
city.name = "city";

const option1 = document.createElement("option");
const option2 = document.createElement("option");

option1.value = "merlo";
option1.innerHTML = "Merlo";
option2.value = "padua";
option2.innerHTML = "Padua";

add(city, option1);
add(city, option2);

add(label_user, user);
add(label_pwd, pwd);
add(label_city, city);

add(form, label_user);
add(form, label_pwd);
add(form, label_city);
add(form, submit);

document.body.appendChild(form);


// document.forms.frm_email.elements["usuario"]