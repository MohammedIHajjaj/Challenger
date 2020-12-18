let mainColor = document.getElementById("main-color");
let secondaryColor = document.getElementById("secondary-color");

mainColor.addEventListener("change", () => {
  let mColor = mainColor.value;
  document.getElementById("basic-color").style.setProperty("--color2", mColor);
});

secondaryColor.addEventListener("change", () => {
  let sColor = secondaryColor.value;
  document.getElementById("basic-color").style.setProperty("--color1", sColor);
});

function resetColors() {
  mainColor.value = "#e958a2";
  document
    .getElementById("basic-color")
    .style.setProperty("--color2", "#e958a2");
  secondaryColor.value = "#9923a9";
  document
    .getElementById("basic-color")
    .style.setProperty("--color1", "#9923a9");
}
