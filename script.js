const params = [
  { name: "Imie", type: "text" },
  { name: "Nazwisko", type: "text" },
  { name: "Wiek", type: "number" },
  { name: "Zawód", type: "text" },
];

var container = document.querySelector(".container");
const form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");
form.className = "form";
container.appendChild(form);

const createForm = () => {
  const formField = document.querySelector(".form");
  params.forEach((user) => {
    const field = document.createElement("input");
    const label = document.createElement("label");
    label.innerText = `${user.name}:`;
    field.setAttribute("name", `${user.name}`);
    field.setAttribute("type", `${user.type}`);
    field.setAttribute("placeholder", `${user.name}`);
    field.setAttribute("pattern", `${user.type}`);
    formField.appendChild(label);
    formField.appendChild(field);
  });
};

const validation = () => {
  const formField = document.querySelector(".form");
  const button = document.createElement("button");
  button.textContent = "wyślij";
  formField.appendChild(button);
};
params.forEach((field) => {
  const value = document.getElementsByTagName("input");
  const button = document.createElement("button");
  button.style.display = "none";
  if (`${value.value}` === `${field.type}`)
  button.style.display = "";
});

createForm();
validation();
