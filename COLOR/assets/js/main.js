// Initialisation de nos sélecteurs
const randomColor = document.querySelector("#color-button");
const bgColor = document.querySelector("main");
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

randomColor.addEventListener("click", (e) => {
  const colorPicked = [];
  for (let i = 0; i < 6; i++) {
    let pickColor = hexArray[Math.floor(Math.random() * hexArray.length)];
    colorPicked.push(pickColor);
  }
  const colorHex = colorPicked.join("");
  bgColor.style.background = `#${colorHex}`;
});
