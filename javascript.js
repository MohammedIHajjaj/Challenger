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
