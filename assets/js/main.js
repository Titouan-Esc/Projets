const todoList = document.querySelector(".liste");
const todoBouton = document.querySelector(".bouton");
const todoName = document.querySelector("#nom");
const todoEmail = document.querySelector("#email");
const msg = document.querySelector("#msg");

todoBouton.addEventListener("click", (e) => {
  e.preventDefault();

  const newListe = document.createElement("li");
  newListe.className = "li";
  newListe.appendChild(
    document.createTextNode(`${todoName.value} ${todoEmail.value}`)
  );

  if (todoEmail.value === "") {
    msg.innerText = "Ecrit quelque chose la con de ta mere";
    msg.style.background = "red";

    setTimeout(() => {
      msg.innerText = "";
      msg.style.background = "transparent";
    }, 2500);
  } else {
    const todoCheck = document.createElement("button");
    const todoRemove = document.createElement("button");
    todoCheck.innerHTML = "<p> OK </p>";
    todoRemove.innerHTML = "<p> NO </p>";
    todoCheck.classList.add("check");
    todoRemove.classList.add("remove");
    newListe.appendChild(todoRemove);
    newListe.appendChild(todoCheck);
    todoList.appendChild(newListe);
    todoName.value = "";
    todoEmail.value = "";
  }
});

todoList.addEventListener("click", (e) => {
  console.log(e.target.parentNode);
});
