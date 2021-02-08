// ! Creation de mes variables
const bouton = document.querySelector(".bouton");
const nom = document.querySelector("#nom");
const email = document.querySelector("#email");
const liste = document.querySelector(".liste");

// * fonction pour la liste
bouton.addEventListener("click", (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  li.className = "liste1";

  li.appendChild(document.createTextNode(`${nom.value} / ${email.value}`));

  if (liste.appendChild(li)) {
    nom.value = "";
    email.value = "";
  }

  const multDiv = document.createElement("div");
  multDiv.classList.add("mult");

  // ! Bouton de check
  const checkBouton = document.createElement("bouton");
  checkBouton.innerHTML = "<p>OK</p>";
  checkBouton.classList.add("check_bouton");
  multDiv.appendChild(checkBouton);

  // ! Bouton delete
  const deleteBouton = document.createElement("bouton");
  deleteBouton.innerHTML = "<p>NO<p>";
  deleteBouton.classList.add("delete_bouton");
  multDiv.appendChild(deleteBouton);

  li.appendChild(multDiv);

  bouton.value = "";
});

// ! function pour la suppression de mes li

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "delete_bouton") {
    const tout = item.parentElement;

    tout.clear();
  }
}
